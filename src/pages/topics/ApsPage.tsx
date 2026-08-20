import TopicPageLayout from "@/components/TopicPageLayout";
import ApsSection from "@/components/ApsSection";

/**
 * /aps-certificate-india
 *
 * Tier 1 of docs/SEO-CONTENT-PLAN.md. APS is a mandatory, paid, non-refundable step,
 * which makes it the highest-intent query on the site.
 *
 * The 70% Class-12 figure is a required caveat wherever bachelor's admission is
 * mentioned (CLAUDE.md § Content guardrails) — do not drop it from the lede.
 */
const ApsPage = () => (
  <TopicPageLayout
    eyebrow="APS India"
    heading="The APS certificate for India, explained"
    lede={
      <>
        Almost every Indian applicant to a German university has to clear APS verification before a
        university will look at the file. Since <strong>15 March 2026</strong>, bachelor&rsquo;s
        applicants also need <strong>70% in Class 12</strong>. Here is what APS checks, what it
        costs, what to send, and how long it realistically takes.
      </>
    }
  >
    <ApsSection />
  </TopicPageLayout>
);

export default ApsPage;
