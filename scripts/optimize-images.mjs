/**
 * One-shot image optimiser. Run with `npm run optimize:images`.
 *
 * The assets that shipped with the original Lovable export were export-quality
 * originals: logo.png and public/icon.png were both 1024×1024 at ~886 KB, for a
 * mark that renders at 44–48 px. On the mid-range Android phones and Indian
 * mobile data that make up most of this site's traffic, that alone dwarfed the
 * entire JS bundle.
 *
 * Rewriting the files in place is safe because they are committed to git —
 * `git checkout -- src/assets public` restores the originals.
 *
 * Idempotent: every target is capped by `withoutEnlargement`, so re-running
 * never upscales or degrades further than the settings below.
 */
import { readFile, writeFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const at = (...parts) => path.join(root, ...parts);

/** Photographs: re-encode as progressive JPEG, capped at a sensible render width. */
const photos = [
  { file: "src/assets/germany-hero.jpg", width: 1920, quality: 74 },
  { file: "src/assets/students-germany.jpg", width: 1200, quality: 76 },
  { file: "src/assets/professional-germany.jpg", width: 1200, quality: 76 },
  { file: "src/assets/germany-castle.jpg", width: 1200, quality: 76 },
  { file: "src/assets/about-us-hero.jpg", width: 1400, quality: 76 },
  // The founder portrait. Rendered up to ~480 px; 800 covers 2x and the OG card.
  { file: "src/assets/jigar-vithani.jpg", width: 800, quality: 82 },
  // The co-founder portrait in the India-desk band. Rendered up to ~240 px.
  { file: "src/assets/paresh-vithani.jpg", width: 800, quality: 82 },
];

/** Illustrations with transparency: stay PNG, quantised. */
const illustrations = [
  { file: "src/assets/berlin.png", width: 700 },
  { file: "src/assets/munich.png", width: 700 },
  { file: "src/assets/frankfurt.png", width: 700 },
  // Rendered at 44–48 px; 256 px covers 2× and 3× displays.
  { file: "src/assets/logo.png", width: 256 },
];

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;

async function report(label, file, before) {
  const after = (await stat(file)).size;
  const saved = before - after;
  console.log(
    `  ${label.padEnd(42)} ${kb(before).padStart(9)} → ${kb(after).padStart(8)}` +
      (saved > 0 ? `  (−${((saved / before) * 100).toFixed(0)}%)` : ""),
  );
}

async function optimizePhotos() {
  for (const { file, width, quality } of photos) {
    const target = at(file);
    const before = (await stat(target)).size;
    const buffer = await sharp(await readFile(target))
      .resize({ width, withoutEnlargement: true })
      .jpeg({ quality, progressive: true, mozjpeg: true })
      .toBuffer();
    await writeFile(target, buffer);
    await report(path.basename(file), target, before);
  }
}

async function optimizeIllustrations() {
  for (const { file, width } of illustrations) {
    const target = at(file);
    const before = (await stat(target)).size;
    const buffer = await sharp(await readFile(target))
      .resize({ width, withoutEnlargement: true })
      .png({ compressionLevel: 9, palette: true, quality: 88, effort: 9 })
      .toBuffer();
    await writeFile(target, buffer);
    await report(path.basename(file), target, before);
  }
}

/** The PWA / apple-touch icon. 512 px is the largest size anything asks for. */
async function buildIcon() {
  const target = at("public/icon.png");
  const before = (await stat(target)).size;
  const buffer = await sharp(await readFile(at("src/assets/logo.png")))
    .resize({ width: 512, height: 512, fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png({ compressionLevel: 9, palette: true, effort: 9 })
    .toBuffer();
  await writeFile(target, buffer);
  await report("public/icon.png", target, before);
}

/**
 * The 1200×630 share card. This is what WhatsApp and LinkedIn render — and
 * WhatsApp is this business's actual conversion channel, so a square logo
 * cropping badly there is a real cost.
 *
 * Composed as: scrimmed hero photograph → brand gradient → SVG text layer.
 * Text is rasterised by sharp via librsvg using system fonts, so the result is
 * close to but not identical to the site's Bricolage/Hanken stack.
 */
async function buildOgImage() {
  const W = 1200;
  const H = 630;

  const background = await sharp(await readFile(at("src/assets/germany-hero.jpg")))
    .resize({ width: W, height: H, fit: "cover", position: "centre" })
    .modulate({ brightness: 0.42, saturation: 0.55 })
    .toBuffer();

  const overlay = Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
      <defs>
        <linearGradient id="scrim" x1="0" y1="0" x2="1" y2="0.6">
          <stop offset="0%" stop-color="#14100E" stop-opacity="0.94"/>
          <stop offset="58%" stop-color="#1A1714" stop-opacity="0.80"/>
          <stop offset="100%" stop-color="#3A1416" stop-opacity="0.62"/>
        </linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#scrim)"/>

      <!-- flag rail -->
      <rect x="0" y="0" width="${W / 3}" height="8" fill="#1A1714"/>
      <rect x="${W / 3}" y="0" width="${W / 3}" height="8" fill="#D10F0F"/>
      <rect x="${(W / 3) * 2}" y="0" width="${W / 3}" height="8" fill="#FFBD5A"/>

      <g font-family="Segoe UI, Helvetica, Arial, sans-serif">
        <text x="80" y="150" fill="#FFBD5A" font-size="24" font-weight="700"
              letter-spacing="4">GERMANY ONLY &#183; SINCE 2014</text>

        <text x="80" y="248" fill="#FFFFFF" font-size="66" font-weight="800">Study in Germany</text>
        <text x="80" y="326" fill="#FFFFFF" font-size="66" font-weight="800">from India</text>

        <text x="80" y="404" fill="#D8CDBF" font-size="30" font-weight="500">Tuition-free public universities. Visa handled</text>
        <text x="80" y="446" fill="#D8CDBF" font-size="30" font-weight="500">end to end. No university commission, ever.</text>

        <text x="80" y="545" fill="#FFFFFF" font-size="27" font-weight="700">100+ visas approved</text>
        <text x="368" y="545" fill="#7C7569" font-size="27" font-weight="700">&#183;</text>
        <text x="398" y="545" fill="#FFFFFF" font-size="27" font-weight="700">100+ students placed</text>

        <text x="80" y="588" fill="#8A8177" font-size="22" font-weight="600">germanyhelpcenter.com</text>

        <!-- caption under the portrait -->
        <text x="${W - 210}" y="452" fill="#FFBD5A" font-size="19" font-weight="700"
              text-anchor="middle">Jigar Vithani</text>
        <text x="${W - 210}" y="478" fill="#B4ABA0" font-size="16" font-weight="600"
              text-anchor="middle">In Germany since 2014</text>
      </g>
    </svg>`);

  // logo.png carries a baked-in white background, so it needs a rounded mask —
  // a hard white square on a dark card looks like a mistake.
  const L = 96;
  const logo = await sharp(await readFile(at("src/assets/logo.png")))
    .resize({ width: L, height: L, fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .composite([
      {
        input: Buffer.from(
          `<svg xmlns="http://www.w3.org/2000/svg" width="${L}" height="${L}">
             <rect width="${L}" height="${L}" rx="24" ry="24" fill="#fff"/>
           </svg>`,
        ),
        blend: "dest-in",
      },
    ])
    .png()
    .toBuffer();

  /* A face materially lifts click-through when the card is forwarded on
     WhatsApp — which is this business's actual distribution channel. Masked to
     a circle with a gold ring. */
  const D = 232;
  const portrait = await sharp(await readFile(at("src/assets/jigar-vithani.jpg")))
    .resize({ width: D, height: D, fit: "cover", position: "top" })
    .composite([
      {
        input: Buffer.from(
          `<svg xmlns="http://www.w3.org/2000/svg" width="${D}" height="${D}">
             <circle cx="${D / 2}" cy="${D / 2}" r="${D / 2}" fill="#fff"/>
           </svg>`,
        ),
        blend: "dest-in",
      },
      {
        input: Buffer.from(
          `<svg xmlns="http://www.w3.org/2000/svg" width="${D}" height="${D}">
             <circle cx="${D / 2}" cy="${D / 2}" r="${D / 2 - 3}" fill="none"
                     stroke="#FFBD5A" stroke-width="5"/>
           </svg>`,
        ),
        blend: "over",
      },
    ])
    .png()
    .toBuffer();

  const target = at("public/og-image.jpg");
  const buffer = await sharp(background)
    .composite([
      { input: overlay, top: 0, left: 0 },
      { input: portrait, top: 178, left: W - 210 - D / 2 },
      { input: logo, top: 52, left: W - 210 - 48 },
    ])
    .jpeg({ quality: 84, progressive: true, mozjpeg: true })
    .toBuffer();

  await writeFile(target, buffer);
  console.log(`  ${"public/og-image.jpg (1200x630)".padEnd(42)} ${"—".padStart(9)} → ${kb(buffer.length).padStart(8)}`);
}

console.log("\nOptimising images\n");
console.log("Photographs");
await optimizePhotos();
console.log("\nIllustrations & logo");
await optimizeIllustrations();
console.log("\nDerived assets");
await buildIcon();
await buildOgImage();
console.log("\nDone.\n");
