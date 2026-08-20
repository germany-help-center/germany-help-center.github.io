import TopicPageLayout from "@/components/TopicPageLayout";
import OpportunityCardSection from "@/components/OpportunityCardSection";

/**
 * /opportunity-card-chancenkarte
 *
 * Tier 1 of docs/SEO-CONTENT-PLAN.md. Newest route into Germany, rising search
 * volume, thin English-for-India competition.
 *
 * ⚠️ Two figures stay UNPUBLISHED by standing decision (CLAUDE.md § Content
 * guardrails): the proof-of-funds amount and the processing time. Sources disagree
 * and the mission is the only authority. Do not add either here, and do not let a
 * later "helpful" edit slip them in.
 */
const OpportunityCardPage = () => (
  <TopicPageLayout
    eyebrow="Opportunity Card"
    heading="The Opportunity Card (Chancenkarte)"
    lede={
      <>
        The Chancenkarte lets qualified people come to Germany to look for work rather than
        arriving with an offer already signed. It runs on a points system, so whether it fits you
        is a question of arithmetic, not opinion. Below is how the points work and who it suits.
        The proof-of-funds amount and current processing time are deliberately not published here
        &mdash; published sources disagree, and only the German mission handling your case can
        confirm them.
      </>
    }
  >
    <OpportunityCardSection />
  </TopicPageLayout>
);

export default OpportunityCardPage;
