# SEO content architecture plan — germanyhelpcenter.com

Executes known follow-up **#7** in [`../CLAUDE.md`](../CLAUDE.md): *"Split into real routes. One URL can
only hold one topical identity; this page currently targets eleven keyword clusters."*

Written 2026-08-20. Every number below was measured, not assumed; sources are named inline.

---

## 1. The evidence

Search Console, property `germanyhelpcenter.com`, export of 2026-08-20:

| Metric | Value |
|---|---|
| Indexed pages | **1** |
| Not indexed | **12** |
| Impressions | ~10–37/day (7/27 – 8/17) |
| Clicks | **20 total** over the period |

Indexing-status data begins **2026-08-05**, so that is the effective start of the coverage record;
performance data is backfilled to 7/27.

Not-indexed breakdown:

| Reason | Pages | Reading |
|---|---|---|
| Discovered – currently not indexed | 6 | Google knows the URL, hasn't spent crawl budget |
| Crawled – currently not indexed | 4 | Google fetched it and **declined to index** — a quality judgement |
| Redirect error | 1 | genuine fault, URL not yet identified |
| Page with redirect | 1 | the live sitemap listed `/privacy-policy` without a trailing slash; it 301s to `/privacy-policy/`. **Fixed** — see §5 |

> ✅ **VERIFIED 2026-08-20 — these 12 URLs are mostly NOT germanyhelpcenter's.**
> The property is a **Domain** property, so it spans `dmat.germanyhelpcenter.com`.
> All six "Discovered – currently not indexed" examples were confirmed in Search
> Console to be dMAT URLs: `/dmat-exam-preparation`, `/dmat-practice-papers`,
> `/dmat-syllabus`, `/legal/privacy`, `/legal/refund`, `/legal/terms` (1–6 of 6).
>
> The arithmetic closes: 2 GHC URLs + 11 dMAT sitemap URLs = 13 = 1 indexed + 12 not
> indexed. So **germanyhelpcenter has never had a page judged thin** — until this
> change it only ever had two pages. There is no quality penalty to undo here.
>
> **The real finding is on the other property:** ~10 of dMAT's 11 URLs are not
> indexed at all, which makes the paid product close to invisible in Google while
> "dmat exam" is the highest-interest query in the category. That is a more urgent
> problem than anything on this page, and it belongs to `../dMatApp`.

**The technical layer is not the problem.** Verified live on 2026-08-20:

- `robots.txt` allows everything bar source maps and declares the sitemap.
- `www`, `http`, and `germany-help-center.github.io` each 301 to the canonical host in **one hop**, 200.
- `scripts/prerender.mjs` serves real HTML, so crawlers are not handed an empty `<div id="root">`.
- `sitemap.xml` is valid and carries `lastmod`.

The problem is that the site has **two routes** — `/` and `/privacy-policy` — and the homepage carries
eleven distinct commercial topics. One URL cannot hold eleven topical identities, so it ranks strongly
for none of them.

The eleven are not a guess. They are the site's own CTA taxonomy, read out of the prefilled WhatsApp
messages in `src/lib/cta.ts`: Bachelors Visa · Masters Visa · Opportunity Card · Spouse Visa ·
Family Reunion · Schengen Travel Visa · Trade-Fair Visit Visa · German Classes · APS India · dMAT ·
costs & blocked account.

## 2. Why this is cheap to fix

The homepage is **already componentised one-file-per-topic** (`src/pages/Index.tsx` is an ordered list of
18 section components). Splitting is largely routing and `<head>` work, not a content rewrite:

| Component | Lines | Content already written for |
|---|---|---|
| `EligibilityCheck.tsx` | 537 | interactive self-qualification |
| `MentorSection.tsx` | 429 | founder credibility / E-E-A-T |
| `DmatSection.tsx` | 371 | dMAT — **but see §3** |
| `OpportunityCardSection.tsx` | 248 | Chancenkarte |
| `StudentPathwaysSection.tsx` | 247 | study routes |
| `ApsSection.tsx` | 205 | APS India + 70% rule |
| `ServicesSection.tsx` | 191 | the service catalogue |
| `CostsSection.tsx` | 161 | blocked account, insurance, fees |
| `HowItWorksSection.tsx` | 160 | process |

Sections stay on the homepage as summaries; each new route carries the **full** treatment and the
homepage section links to it. That avoids gutting a landing page that already converts.

## 3. Hard constraint — do not cannibalise dMatApp

`dmat.germanyhelpcenter.com` already owns the dMAT cluster with ~10 purpose-built pages
(`/dmat-guide`, `/dmat-syllabus`, `/dmat-eligibility`, `/dmat-practice-papers`,
`/dmat-exam-preparation`) and its own documented strategy in `../dMatApp/docs/SEO-STRATEGY.md`.

**GHC must not build a competing dMAT page.** Two properties fighting for the same query split link
equity and give Google a duplicate-intent choice it will resolve against both. `DmatSection` stays a
homepage summary that links out. This is the one topic on the list that gets *no* route.

If the Search Console property is a **Domain** property it spans `dmat.` as well, so some of the 12
not-indexed URLs may belong to dMatApp rather than GHC. Confirm before acting on that number.

## 4. Proposed routes

Priority is **provisional**. It ranks by content-readiness × commercial intent, because we do not yet
have query data. Re-rank the moment the Search Console API lands — that is the point of wiring it.

### Tier 1 — build first

| Route | Source section | Intent |
|---|---|---|
| `/aps-certificate-india` | `ApsSection` | Mandatory step, ₹18,000 decision, and the 70% Class-12 rule changed 15 Mar 2026 — high-intent and currently under-served |
| `/cost-of-studying-in-germany` | `CostsSection` | Highest-volume informational query in the category; the blocked-account figure is what everyone searches |
| `/opportunity-card-chancenkarte` | `OpportunityCardSection` | Newest visa route, rising volume, low competition in English-for-India |
| `/study-in-germany-from-india` | `StudentPathwaysSection` + `DreamGermanySection` | The head term; also the natural internal-link hub |

### Tier 2 — build next

| Route | Source section | Intent |
|---|---|---|
| `/check-if-you-qualify` | `EligibilityCheck` | Interactive tools earn links and dwell time. dMatApp validated this pattern with `/dmat-eligibility` |
| `/german-student-visa` | `HowItWorksSection` | Process query, high intent |
| `/family-reunion-visa-germany` | `ServicesSection` | Distinct audience, no competing page anywhere on the site |
| `/about` | `MentorSection` + `AboutSection` | E-E-A-T. In a category where the German ambassador warned against agents, the named-accountable-person page *is* the ranking asset |

### Tier 3 — later, or fold into Tier 1/2

`/german-language-classes`, `/schengen-travel-visa`, `/trade-fair-visit-visa`,
`/study-in-germany-cities` (`GermanCitiesSection`). Thinner content and lower intent; a stub page is
worse than no page — see the 4 URLs already sitting at *Crawled – currently not indexed*.

## 5. Mechanics — four places per route, all four required

Per [`../CLAUDE.md`](../CLAUDE.md) §Prerendering:

1. **`src/App.tsx`** — add the `<Route>` inside `AppShell`, not around `App`.
2. **`scripts/prerender.mjs`** — add to `routes[]` with its **own** `title`, `description`, `canonical`.
   Omitting this makes the page inherit the homepage `<head>` — a duplicate-content signal, which is
   plausibly what put 4 URLs into *Crawled – currently not indexed* already.
3. **`public/sitemap.xml`** — add the `<loc>` with `lastmod`.
4. **`src/components/Header.tsx`** — nav link, so the page is internally linked rather than orphaned.

The build fails if a route renders under 2,000 characters. Do not soften that check — it is what stops a
thin page shipping.

## 6. Guardrails that apply to every new page

Non-negotiable, from `../CLAUDE.md` §Content guardrails. A split multiplies the number of places each
caveat must appear, which is the main risk this plan introduces:

- "tuition-free" → **always** with *15 of 16 states; Baden-Württemberg charges non-EU students €1,500/semester*.
- Any visa timeline or rate → **the mission decides; no outcome guaranteed**.
- Bachelor's admission → **APS India requires 70% in Class 12** since 15 Mar 2026.
- Any dMAT mention → **not affiliated with g.a.s.t. or APS India**.
- No `aggregateRating`, no `Review` markup, no `LocalBusiness` schema, no countdown timers.
- Opportunity Card proof-of-funds amount and processing time stay **unpublished** — sources disagree.

Extend `src/test/landing.test.tsx` to assert the relevant caveat on each new route. The existing test
guards these on the homepage only; splitting silently removes that cover.

⚠️ **Open legal question (CLAUDE.md #8):** since Jan 2025 unlicensed legal advice is an administrative
offence under §20(1) No. 1 RDG, fines to €50,000 per case. More pages describing visa services means more
surface. Get the lawyer's read **before** Tier 2, not after.

## 7. How we will know it worked

Baseline is recorded in §1. After each tier ships, track in Search Console:

1. **Indexed count** — the headline number. 1 → 5 after Tier 1 is the first real signal.
2. **Impressions per URL** — a new page earning impressions within ~3 weeks means the topic was real.
3. **Queries per page** — the test of whether the split worked: each page should own a *distinct* query
   set. Overlap means two pages are competing and one should be merged or canonicalised.
4. **"Crawled – currently not indexed"** — if a new page lands here, Google judged it thin. Fix or remove.

Search Console retains **16 months**, so this baseline is only reconstructible for that long — which is
why the weekly export in `../growth-analytics` matters more than any single reading.

## 8. Also worth doing, not part of this plan

- **`sitemap.xml` has 2 URLs.** It is correct, just tiny — it grows with §5 step 3.
- **`BOOKING_URL` is empty** (`src/lib/cta.ts`), so every booking CTA falls back to WhatsApp.
- **Google Business Profile** (CLAUDE.md #1) — `germany education consultant in surat` is flagged as
  low-competition high-intent, and GBP is where that traffic lands. Not a code change.
- **The stale `google-site-verification` placeholder** at `index.html:69` should be deleted: the property
  is already verified by another method, and the comment tells the next reader to redo finished work.
