# CLAUDE.md — Germany Help Center (marketing site)

Guide for Claude Code sessions in this repo. Keep it accurate — if you change a convention, update this file.

## What this is

The **public marketing site / landing page for Germany Help Center**, served at **https://germanyhelpcenter.com/**.
A single-page React marketing site (plus `/privacy-policy`) for a Germany-only immigration and education
consultancy run by **Jigar Rajeshbhai Vithani** (in Germany since 2014) and **Pareshbhai Vithani** (Surat, India).

It is the **top of the funnel**. Nearly every CTA on the page routes to one of two places:

1. **WhatsApp** — `https://wa.me/+919824925434` with a prefilled "free consultation" message (the primary conversion).
2. **The dMAT platform** — `https://dmat.germanyhelpcenter.com/`, a separate product (see below).

### Sibling project: the dMAT platform

`../dMatApp` (a **Next.js 16 + Postgres** app, deployed separately at `dmat.germanyhelpcenter.com`) is the
paid exam-prep product for the **dMAT — Digital Master Test**. Facts to keep straight when writing copy here:

- dMAT is an **aptitude test for Master's applicants**, taken as part of **APS India** verification.
  It is **not** a medical test and **not** a university entrance exam.
- Required for applicants in engineering / business / commerce / finance from **Summer Semester 2027** intake
  onward. Winter Semester 2026/27 applicants do **not** need it.
- 2026 cycle (as of July 2026): registration opened **29 Jun 2026** and closes **15 Sep 2026**,
  exam **26 Sep 2026**, results **12 Oct 2026**. Fee **€150**, paid to g.a.s.t.
- **Exemptions:** anyone who completed APS registration or shipped complete documents before
  **29 Jun 2026**, and anyone who already holds an APS certificate.
- Sections and time limits: Figure Sequences 25 min · Mathematical Equations 25 min ·
  Latin Squares 20 min · General Academic Module 90 min. ⚠️ The source of truth is
  `../dMatApp/content/SCHEMA.md` (`durationSec` 1500/1500/1200/5400) — note that
  `../dMatApp/docs/marketing/LANDING-PAGE-COPY.md` still carries stale figures (25/25/25 + GAM 15).
- The platform offers a **free diagnostic** (the three reasoning sections) plus a bank of **50 full-length papers**.
- **Mandatory disclaimer** wherever the platform is described, in visible body text — not a tooltip:
  independent practice material, *not affiliated with, endorsed by, or connected to g.a.s.t. or APS India*.
  There is a test guarding this in `src/test/landing.test.tsx`.

Do not invent dMAT facts. If unsure, check `../dMatApp/CLAUDE.md` and `../dMatApp/content/SCHEMA.md`.

**The dMAT band needs a review owner for the day after 26 Sep 2026** — once that sitting passes it becomes
the most conspicuously stale block on the site.

## Stack

Vite 5 + React 18 + TypeScript + Tailwind 3 + shadcn/ui (Radix) + react-router-dom 6. Icons: `lucide-react`.
Originally scaffolded by Lovable (`lovable-tagger` runs in dev mode only). No backend, no env vars, no data fetching —
`@tanstack/react-query` is wired up in `App.tsx` but currently unused.

## Commands

```bash
npm install
npm run dev              # vite dev server on :8080
npm run build            # vite build → dist/   ← run this to check your work
npm run lint             # eslint .
npm test                 # vitest run (jsdom)
npm run optimize:images  # one-shot; rewrites src/assets + public in place (see below)
```

There is no typecheck script; `npm run build` type-checks via the Vite/SWC + tsc path. Always build before committing.

`npm run lint` reports **2 pre-existing errors** in `src/components/ui/` (`command.tsx`, `textarea.tsx`) —
unmodified shadcn primitives. Leave them; don't "fix" generated UI code.

`src/test/landing.test.tsx` renders the whole landing page in jsdom. It's the only thing that catches a
broken hook or import, because `vite build` succeeds regardless. It also guards the disclosures that must
not silently vanish: the dMAT non-affiliation disclaimer, the Baden-Württemberg tuition exception, the
no-guaranteed-visa statement, and the continued **absence** of the Google-rating and Instagram blocks
(removed deliberately — the Google profile they linked to isn't live, and an unlinkable rating is just a claim).

## Deploy

`.github/workflows/deploy-pages.yml` builds and publishes `dist/` to GitHub Pages on **every push to `main`**.
**Pushing to `main` is a production deploy** — do substantial work on a branch and let the user merge.

`vite.config.ts` computes `base` from `GITHUB_REPOSITORY`: because the repo is named `<owner>.github.io`,
`base` stays `/`. `App.tsx` derives the router `basename` from `import.meta.env.BASE_URL`.

Deep links survive Pages' lack of SPA rewrites via a two-step hack: `public/404.html` stashes the requested path
in `sessionStorage` and redirects to `/`; an inline script in `index.html` restores it with `history.replaceState`.
Keep both halves in sync if you touch routing.

## Layout

```
index.html                 head meta + OG/Twitter + JSON-LD @graph + theme bootstrap +
                           SPA-redirect restore + a <noscript> content summary
src/main.tsx               createRoot → App
src/App.tsx                providers + routes (/, /privacy-policy, *)
src/pages/Index.tsx        the landing page — an ordered list of section components
src/components/*.tsx       one file per page section (Header, HeroSection, …, Footer, WhatsAppFloat)
src/components/Flag.tsx    German-flag motifs (FlagRail / FlagSpine / FlagChip) — decorative
src/components/SectionHeading.tsx   the shared eyebrow → H2 → gold rule → subtitle block
src/components/ThemeToggle.tsx      light/dark switch; initial class set by index.html
src/components/Cta.tsx     shared conversion components — WhatsAppCta / CtaPair / CtaTrust /
                           ChecklistCta. Use these, don't hand-roll a CTA (see Conversion below)
src/components/MobileActionBar.tsx  persistent Call + WhatsApp bar, mobile only
src/components/EligibilityCheck.tsx client-side self-check; its rules mirror the page's stated facts
src/components/ConsentBanner.tsx    opt-in gate for GA4; renders nothing until an ID is configured
src/lib/analytics.ts       GA4 behind consent + `trackCta()` attribution
src/components/ui/*.tsx    unmodified shadcn/ui primitives — don't hand-edit these
src/lib/motion.tsx         Reveal / useInView / useCountUp / useScrollProgress / useReducedMotion
src/lib/cta.ts             single source of truth for WhatsApp / dMAT / phone / address links
src/lib/faqs.ts            FAQ copy — mirrored into the FAQPage JSON-LD in index.html
src/index.css              design tokens (CSS custom properties) + base + reveal contract
tailwind.config.ts         maps the tokens to Tailwind theme keys; keyframes/animations
scripts/optimize-images.mjs  sharp-based one-shot optimiser + the OG card generator
src/assets/*               imported images (Vite hashes these)
public/*                   copied verbatim — favicon, icon, og-image, robots.txt, sitemap.xml, 404.html
```

`Index.tsx` is the page outline. To add a section: build it in `src/components/`, then place it in `Index.tsx`.

## Conventions

- **Design tokens only.** Colors live as HSL triples in `src/index.css` and are exposed through
  `tailwind.config.ts`. Use `bg-surface`, `text-ink-muted`, `text-brand`, `text-gold` — never raw hex or
  arbitrary `bg-[#...]` values. The palette is a warm paper/ink German-flag identity shared with the dMAT
  platform (`../dMatApp/app/globals.css`) so the two properties read as one brand.
- **Fonts:** `Bricolage Grotesque` for display/headings, `Hanken Grotesk` for body, `JetBrains Mono` for
  numerals and timers (`.tnum`). Loaded from Google Fonts in `index.html` with `preconnect`.
- **Sections** are default-exported components taking no props, wrapping content in
  `<section id="…" className="…">` with a `container mx-auto px-4`. The `id` is what `Header`'s nav links target.
- **Content is colocated.** Copy lives in top-of-file `const` arrays in each section component. There is no CMS.
- **Links:** import from `src/lib/cta.ts`. Never paste a raw `wa.me` URL into a component — the prefilled
  message text is long and must stay consistent.
- **Animation:** use the primitives in `src/lib/motion.tsx` (`<Reveal>`, `useCountUp`, `useInView`).
  They are IntersectionObserver-based, CSS-transition-driven, and **honour `prefers-reduced-motion`** by
  rendering the final state immediately. Don't add an animation library. Never animate a property that
  triggers layout — stick to `opacity`, `transform`, `filter`, `clip-path`.
- **Accessibility:** all interactive elements need a discernible label; decorative backgrounds get
  `aria-hidden`. Contrast must hold in both light and dark themes.

## Content guardrails

The whole positioning is **"Germany only. Public universities only. No commission, ever."** In a category
where Germany's own ambassador to India publicly warned students not to trust agents (Oct 2025, alongside a
~25% student-visa refusal rate from India), honesty is the differentiator — not a compliance chore. Every
section that could overclaim carries the caveat instead.

**Claims that must stay consistent everywhere:** 100+ visas approved · 100+ students at public universities ·
10+ years in Germany · clients from 8+ countries. Nothing else.

**Never state, without its caveat:**

| Claim | Required caveat |
|---|---|
| "tuition-free public universities" | 15 of 16 states — **Baden-Württemberg charges non-EU students €1,500/semester** |
| any visa timeline or success rate | the decision is the German mission's; **no outcome is guaranteed** |
| "A1 German needed for a spouse visa" | exempt since Jun 2024 for spouses of degree-qualified Skilled Worker and EU Blue Card holders |
| bachelor's admission | **APS India requires 70% in Class 12** since 15 Mar 2026 (UG only) |
| the dMAT | independent practice material, not affiliated with g.a.s.t. or APS India |

**Do not add:** a Google/star rating (the profile isn't live, and self-serving `aggregateRating` schema on
your own Organization is ineligible for review snippets and risks a manual action), `Review` markup around
the illustrative testimonials in `SocialProofSection`, `LocalBusiness`/`ProfessionalService` schema (there is
no walk-in office — marking a residential address as visitable contradicts the page), or a countdown timer
on the dMAT dates (the real calendar carries the urgency; a clock reads as pressure selling — see
`../dMatApp/docs/marketing/LANDING-PAGE-COPY.md`).

Third-party figures — blocked account €11,904/€992 per month, visa fee €75, APS ₹18,000, health insurance
€110–€165 — are set by German authorities and change annually. They are stamped with a review date via
`reviewedOn` in `src/lib/faqs.ts`, surfaced in the footer. Re-verify each intake.

Two figures are deliberately **not** published because sources disagree: the Opportunity Card
proof-of-funds amount and its processing time. Confirm with the mission before adding either.

## Conversion

Two rules, because the page previously had 24 contact CTAs and only one mechanic behind all of them:

1. **Never hand-roll a contact CTA.** Use `CtaPair` (primary + both phone numbers), `WhatsAppCta`,
   or `ChecklistCta` from `src/components/Cta.tsx`, and put `CtaTrust` underneath. Every ask must carry
   the response-time promise and the "free / no payment details" line, and every click must call
   `trackCta(action, location)` — otherwise there is no way to tell which placements work.
2. **Always offer a smaller step.** Most visitors arrive researching a single fact and are nowhere near
   booking a call. `ChecklistCta` and the `#check` self-check exist so those visitors have somewhere to
   go other than away. Don't remove them in favour of "more prominent" primary CTAs.

Deliberately **not** done: a CTA in every section (Cities, Countries and StatsBar are kept clean for
rhythm — when everything shouts, nothing does), and exit-intent popups.

`BOOKING_URL` in `src/lib/cta.ts` is empty, so every booking CTA falls back to WhatsApp via
`bookingHref()`. Set it to a real Cal.com / Google Calendar URL and all of them switch over at once.
`GA_MEASUREMENT_ID` in `src/lib/analytics.ts` is likewise empty: with no ID, no script loads and no
consent banner appears, so this is safe to ship un-configured.

## Known follow-ups

1. **Prerender the SPA.** The served HTML is a ~3 KB shell, so Bing and most LLM/AI retrieval crawlers see
   nothing and indexing is slow and unreliable. `vite-react-ssg` supports React Router 6 and this site has
   two routes and no data fetching — close to the easiest possible case. Biggest single SEO lever left.
2. **Create a Google Business Profile.** Highest commercial ROI of anything outstanding, and the only thing
   that produces map-pack results or makes a rating legitimately displayable. `germany education consultant
   in surat` is a low-competition, high-intent term.
3. **Paste the two IDs.** `GA_MEASUREMENT_ID` (`src/lib/analytics.ts`) and `BOOKING_URL`
   (`src/lib/cta.ts`). Both are intentionally empty and degrade gracefully, but nothing about CTA
   performance is measurable until the first one is set.
4. **A written fee table.** `CostsSection` promises a fixed fee in writing but publishes no number.
   No competitor publishes fees — doing so would directly answer the ambassador's criticism.
5. **Pareshbhai's photo and LinkedIn.** Jigarbhai's are in (`MentorSection`, `Person` JSON-LD);
   the India-side co-founder is still unillustrated and unverifiable.
6. **The employer question.** Jigarbhai's LinkedIn names his employer; the site deliberately says
   "German engineering industry" instead, to avoid implying an endorsement by that company. Revisit only
   if he confirms he's comfortable naming it.
7. **Split into real routes** (`/study-in-germany-from-india`, `/aps-certificate-india`,
   `/opportunity-card-chancenkarte`, …). One URL can only hold one topical identity; this page currently
   targets eleven keyword clusters.
8. **Get a German lawyer's read** on how these services may be described. Since Jan 2025, unlicensed legal
   advice is an administrative offence under §20(1) No. 1 RDG with fines up to €50,000 per case. The footer
   and FAQ already disclaim it; confirm the wording is sufficient.
