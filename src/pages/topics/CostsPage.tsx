import TopicPageLayout from "@/components/TopicPageLayout";
import CostsSection from "@/components/CostsSection";

/**
 * /cost-of-studying-in-germany
 *
 * Tier 1 of docs/SEO-CONTENT-PLAN.md. The blocked-account figure is the single
 * most-searched fact in this category.
 *
 * "Tuition-free" may never appear without the Baden-Württemberg exception
 * (CLAUDE.md § Content guardrails). It is in the lede for that reason, and
 * src/test/landing.test.tsx guards the same claim on the homepage.
 */
const CostsPage = () => (
  <TopicPageLayout
    eyebrow="Money"
    heading="What studying in Germany actually costs"
    lede={
      <>
        Public universities charge no tuition in <strong>15 of Germany&rsquo;s 16 states</strong> —
        the exception is <strong>Baden-W&uuml;rttemberg, which charges non-EU students
        &euro;1,500 per semester</strong>. Tuition is rarely the number that decides anything
        though: the blocked account, health insurance and the semester fee are. Those are set by
        German authorities and change annually, so each figure below is stamped with the date it
        was last checked.
      </>
    }
  >
    <CostsSection />
  </TopicPageLayout>
);

export default CostsPage;
