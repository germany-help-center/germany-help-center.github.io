import TopicPageLayout from "@/components/TopicPageLayout";
import StudentPathwaysSection from "@/components/StudentPathwaysSection";

/**
 * /study-in-germany-from-india
 *
 * Tier 1 of docs/SEO-CONTENT-PLAN.md, and the head term. This is also the natural
 * internal-link hub — the other topic pages are steps within the journey it
 * describes, so link out to them from here as they ship.
 *
 * Deliberately does NOT carry DreamGermanySection: that stays in full on the
 * homepage as the top-of-funnel hook, and repeating it here would recreate the
 * duplicate-content problem this split exists to remove.
 *
 * "Tuition-free" requires the Baden-Württemberg exception (CLAUDE.md § Content
 * guardrails); no visa timeline or success rate may appear without the
 * mission-decides caveat.
 */
const StudyInGermanyPage = () => (
  <TopicPageLayout
    eyebrow="Start here"
    heading="Studying in Germany, from India"
    lede={
      <>
        Public universities charge no tuition in <strong>15 of Germany&rsquo;s 16 states</strong>
        {" "}
        (<strong>Baden-W&uuml;rttemberg charges non-EU students &euro;1,500 per semester</strong>),
        which is why Germany is worth the paperwork it demands. Bachelor&rsquo;s, master&rsquo;s and
        Ausbildung are three different applications with different entry requirements &mdash; this
        page is about working out which one is yours. No outcome is guaranteed at any point: every
        visa decision belongs to the German mission, not to us.
      </>
    }
  >
    <StudentPathwaysSection />
  </TopicPageLayout>
);

export default StudyInGermanyPage;
