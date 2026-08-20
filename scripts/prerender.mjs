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
    canonical: "https://germanyhelpcenter.com/privacy-policy/",
    robots: "index, follow",
  },

  /*
   * Topic routes — docs/SEO-CONTENT-PLAN.md.
   *
   * Titles are deliberately distinct from the homepage's. The homepage already
   * ranks for "study in Germany from India"; a second page repeating that promise
   * would compete with it rather than add to it, so each title below names a
   * narrower question than the homepage answers.
   */
  {
    url: "/study-in-germany-from-india",
    out: path.join("study-in-germany-from-india", "index.html"),
    title: "Study in Germany from India: Which Route Fits You",
    description:
      "Bachelor's, master's or Ausbildung — the routes from India to a German public university, what each one requires, and what nobody can guarantee.",
    canonical: "https://germanyhelpcenter.com/study-in-germany-from-india/",
    published: "2026-08-20",
    robots: "index, follow",
  },
  {
    url: "/aps-certificate-india",
    out: path.join("aps-certificate-india", "index.html"),
    title: "APS Certificate India: The 70% Rule, Fees and Timeline",
    description:
      "What APS India verifies, the 70% Class 12 rule applying to bachelor's applicants since March 2026, the documents to send, and realistic timelines.",
    canonical: "https://germanyhelpcenter.com/aps-certificate-india/",
    published: "2026-08-20",
    robots: "index, follow",
  },
  {
    url: "/cost-of-studying-in-germany",
    out: path.join("cost-of-studying-in-germany", "index.html"),
    title: "Cost of Studying in Germany for Indian Students",
    description:
      "Blocked account, health insurance and semester fees — what a year in Germany actually costs, and why tuition-free does not mean free in all 16 states.",
    canonical: "https://germanyhelpcenter.com/cost-of-studying-in-germany/",
    published: "2026-08-20",
    robots: "index, follow",
  },
  {
    url: "/opportunity-card-chancenkarte",
    out: path.join("opportunity-card-chancenkarte", "index.html"),
    title: "Opportunity Card (Chancenkarte): Points and Who Qualifies",
    description:
      "How Germany's Chancenkarte points system works, who it suits, and the two figures we deliberately do not publish because official sources disagree.",
    canonical: "https://germanyhelpcenter.com/opportunity-card-chancenkarte/",
    published: "2026-08-20",
    robots: "index, follow",
  },
  {
    url: "/germany-consultancy-surat",
    out: path.join("germany-consultancy-surat", "index.html"),
    title: "Germany Consultancy in Surat | No Commission, Germany Only",
    description:
      "A Germany-only consultancy run from Surat and from Germany itself. Public universities only, no university commission, and no promised outcomes.",
    canonical: "https://germanyhelpcenter.com/germany-consultancy-surat/",
    published: "2026-08-20",
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
    /*
     * All three go through setTag, which THROWS on a missed pattern.
     *
     * They did not, and it shipped silently: og:description and twitter:description
     * are written across four lines each in index.html, the old patterns matched on
     * single spaces, and a plain .replace() that matches nothing is a no-op. Every
     * sub-route was serving the homepage's description in its social preview — which
     * matters here more than most sites, because WhatsApp is the primary channel and
     * every shared topic link previewed as generic homepage copy.
     *
     * \s+ between attributes, and setTag so the next reformat fails the build
     * instead of silently regressing.
     */
    out = setTag(
      out,
      /(<meta\s+name="description"\s+content=")[^"]*(")/,
      `$1${route.description}$2`,
    );
    out = setTag(
      out,
      /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
      `$1${route.description}$2`,
    );
    out = setTag(
      out,
      /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/,
      `$1${route.description}$2`,
    );
  }

  // Routes with a publication date are Articles in the JSON-LD; keep og:type honest.
  if (route.published) {
    out = out.replace(/(<meta\s+property="og:type"\s+content=")[^"]*(")/, `$1article$2`);
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

/**
 * Per-route structured data, injected after stripHomepageOnly() has removed the
 * homepage @graph.
 *
 * Without this a topic route ships with no structured data at all — the homepage
 * graph is stripped and nothing replaces it. That matters twice over: Google uses
 * it for rich results, and AI answer engines parse it when deciding what to cite.
 *
 * It references the existing homepage entities by @id (#organization, #website)
 * rather than redeclaring them, so there is one Organization on the site, not five.
 *
 * Only claims that are literally true of the page: its title, its description, the
 * date it was published, and its position under the homepage. No `Review`, no
 * `aggregateRating`, no `LocalBusiness` — see CLAUDE.md § Content guardrails.
 */
function routeJsonLd(route) {
  const graph = [
    {
      "@type": "Article",
      "@id": `${route.canonical}#article`,
      headline: route.title,
      description: route.description,
      url: route.canonical,
      inLanguage: "en",
      datePublished: route.published,
      dateModified: route.published,
      isPartOf: { "@id": "https://germanyhelpcenter.com/#website" },
      publisher: { "@id": "https://germanyhelpcenter.com/#organization" },
      author: { "@id": "https://germanyhelpcenter.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${route.canonical}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Germany Help Center",
          item: "https://germanyhelpcenter.com/",
        },
        { "@type": "ListItem", position: 2, name: route.title, item: route.canonical },
      ],
    },
  ];

  return `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  })}</script>`;
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
    if (route.url !== "/") {
      html = stripHomepageOnly(html);
      // Routes that declare a `published` date get their own Article graph back.
      if (route.published && route.canonical) {
        html = html.replace("</head>", `${routeJsonLd(route)}\n  </head>`);
      }
    }
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
