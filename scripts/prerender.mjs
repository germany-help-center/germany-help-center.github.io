/**
 * Build-time prerender. Runs as the last step of `npm run build`.
 *
 * Vite's client build emits a `dist/index.html` whose body is just
 * `<div id="root"></div>`. That is what every crawler receives: Google renders it
 * in a separate, capacity-limited queue (slow and unreliable indexing), and Bing
 * plus most LLM/AI answer crawlers never execute JavaScript at all, so they see a
 * page with no content. This script renders each route to real HTML and writes it
 * into dist/, so the served bytes contain the actual copy.
 *
 * The client still boots with `createRoot`, which discards the prerendered DOM
 * and renders fresh rather than hydrating. That is deliberate: several components
 * legitimately differ between server and client (theme class, `navigator.share`
 * support, `prefers-reduced-motion`, today's date in the dMAT calendar), and
 * hydration would report mismatches for all of them. The SEO benefit is identical
 * either way; only a small amount of client work is duplicated. Switching to
 * `hydrateRoot` later would require gating each of those behind a mounted flag.
 *
 * Fails loudly (non-zero exit) rather than leaving a silently empty shell to
 * deploy — a broken prerender that still "succeeds" is worse than a red build.
 */
import { mkdir, readFile, writeFile, rm } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

/**
 * Routes to prerender, with the head overrides each one needs.
 *
 * Per-route titles matter: a client-rendered SPA serves the homepage's <head> for
 * every URL, so /privacy-policy inherited the homepage title and canonical — a
 * duplicate-content signal that gets worse with every route added.
 */
const routes = [
  { url: "/", out: "index.html" },
  {
    url: "/privacy-policy",
    out: path.join("privacy-policy", "index.html"),
    title: "Privacy Policy | Germany Help Center",
    description:
      "How Germany Help Center collects, uses and protects your personal data under the GDPR and German data protection law.",
    canonical: "https://germanyhelpcenter.com/privacy-policy",
    robots: "index, follow",
  },
];

/** Replaces the content of a meta/title/link tag without disturbing the rest. */
function setTag(html, pattern, replacement) {
  if (!pattern.test(html)) {
    throw new Error(`prerender: expected to find ${pattern} in the built index.html`);
  }
  return html.replace(pattern, replacement);
}

function applyHead(html, route) {
  let out = html;

  if (route.title) {
    out = setTag(out, /<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`);
    out = out.replace(
      /(<meta property="og:title" content=")[^"]*(")/,
      `$1${route.title}$2`,
    );
    out = out.replace(
      /(<meta name="twitter:title" content=")[^"]*(")/,
      `$1${route.title}$2`,
    );
  }

  if (route.description) {
    out = out.replace(
      /(<meta\s+name="description"\s+content=")[^"]*(")/,
      `$1${route.description}$2`,
    );
    out = out.replace(
      /(<meta property="og:description" content=")[^"]*(")/,
      `$1${route.description}$2`,
    );
  }

  if (route.canonical) {
    out = setTag(
      out,
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${route.canonical}" />`,
    );
    out = out.replace(
      /(<meta property="og:url" content=")[^"]*(")/,
      `$1${route.canonical}$2`,
    );
  }

  if (route.robots) {
    out = out.replace(/(<meta name="robots" content=")[^"]*(")/, `$1${route.robots}$2`);
  }

  /*
   * Sub-routes get their own real HTML file, so they never hit the 404.html
   * redirect hack. Only the homepage needs the script that restores a stashed
   * deep-link path.
   */
  if (route.url !== "/") {
    out = out.replace(
      /\s*<!-- Restore the original deep-link URL[\s\S]*?<\/script>/,
      "",
    );
  }

  return out;
}

/** The JSON-LD graph and noscript summary are homepage-specific. */
function stripHomepageOnly(html) {
  return html
    .replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/, "")
    .replace(/\s*<noscript>[\s\S]*?<\/noscript>/, "");
}

const PLACEHOLDER = '<div id="root"></div>';

async function main() {
  const template = await readFile(path.join(dist, "index.html"), "utf8");

  if (!template.includes(PLACEHOLDER)) {
    throw new Error(
      `prerender: could not find ${PLACEHOLDER} in dist/index.html — did the root element change?`,
    );
  }

  const { render } = await import(pathToFileURL(ssrEntry).href);

  for (const route of routes) {
    const appHtml = render(route.url);

    if (!appHtml || appHtml.length < 2000) {
      throw new Error(
        `prerender: ${route.url} rendered only ${appHtml?.length ?? 0} characters — refusing to ship an empty shell`,
      );
    }

    let html = applyHead(template, route);
    if (route.url !== "/") html = stripHomepageOnly(html);
    html = html.replace(PLACEHOLDER, `<div id="root">${appHtml}</div>`);

    const target = path.join(dist, route.out);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, html, "utf8");

    const kb = (Buffer.byteLength(html) / 1024).toFixed(1);
    console.log(`  prerendered ${route.url.padEnd(18)} → dist/${route.out}  (${kb} kB)`);
  }

  // The SSR bundle is a build artefact, not something to publish.
  await rm(path.join(root, "dist-ssr"), { recursive: true, force: true });
}

console.log("\nPrerendering routes");
await main();
console.log("Done.\n");
