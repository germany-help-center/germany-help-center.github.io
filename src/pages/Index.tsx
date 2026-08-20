import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import DreamGermanySection from "@/components/DreamGermanySection";
import MentorSection from "@/components/MentorSection";
import EligibilityCheck from "@/components/EligibilityCheck";
import TopicTeaser from "@/components/TopicTeaser";
import DmatSection from "@/components/DmatSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import GermanCitiesSection from "@/components/GermanCitiesSection";
import CountriesSection from "@/components/CountriesSection";
import AboutSection from "@/components/AboutSection";
import SocialProofSection from "@/components/SocialProofSection";
import FAQSection from "@/components/FAQSection";
import ShareSection from "@/components/ShareSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileActionBar from "@/components/MobileActionBar";
import ConsentBanner from "@/components/ConsentBanner";

/**
 * The landing page outline.
 *
 * The order is deliberate: establish credibility (hero, numbers), give the
 * reason to move (why Germany), introduce the person accountable (mentor), then
 * let the reader self-qualify (check) before the dense detail. Their own
 * situation comes next (study → APS → dMAT → work), then the commercial detail
 * (services, costs), then how it runs, then objections.
 *
 * Money and honesty sit before the testimonials on purpose — a sceptical parent
 * reaches the fee table before anything resembling a sales pitch. The share
 * prompt sits last, once the page has earned the recommendation.
 */
/* `pb-28` clears the fixed MobileActionBar so it can't sit over the last rows of
   the footer; the bar is hidden from `sm` up, so the padding goes with it. */
const Index = () => (
  <div className="min-h-screen pb-28 sm:pb-0">
    <Header />

    <main>
      <HeroSection />
      <StatsBar />
      <DreamGermanySection />
      <MentorSection />
      <EligibilityCheck />
      {/*
        These four topics own their own routes (docs/SEO-CONTENT-PLAN.md), so the
        homepage summarises and links rather than repeating them in full. The ids
        are unchanged, so Header nav and landing.test.tsx still find them.
      */}
      <TopicTeaser
        id="study"
        eyebrow="Your route"
        title={<>Which route into Germany <span className="text-brand">fits you</span></>}
        subtitle="Bachelor's, master's and Ausbildung are different applications with different entry requirements and timelines."
        points={[
          "The routes compared side by side",
          "What each one needs before you apply",
          "Where uni-assist fits into it",
        ]}
        href="/study-in-germany-from-india/"
        linkLabel="See which route fits you"
      />

      <TopicTeaser
        id="aps"
        eyebrow="APS India"
        title={<>The <span className="text-brand">APS certificate</span>, explained</>}
        subtitle="Almost every Indian applicant has to clear APS verification before a German university will open the file."
        points={[
          "What APS checks, and the documents to send",
          "The 70% Class 12 rule for bachelor's applicants",
          "How long it realistically takes",
        ]}
        href="/aps-certificate-india/"
        linkLabel="Read the full APS guide"
      />

      <DmatSection />

      <TopicTeaser
        id="opportunity-card"
        eyebrow="Opportunity Card"
        title={<>The <span className="text-brand">Chancenkarte</span>, by the numbers</>}
        subtitle="A points-based route that lets you come to Germany to look for work, rather than arriving with an offer already signed."
        points={[
          "How the points system scores you",
          "Who the route actually suits",
          "The two figures we refuse to guess at",
        ]}
        href="/opportunity-card-chancenkarte/"
        linkLabel="See how the points work"
      />

      <ServicesSection />

      <TopicTeaser
        id="costs"
        eyebrow="Money"
        title={<>What a year in Germany <span className="text-brand">really costs</span></>}
        subtitle="Tuition is rarely the number that decides anything. The blocked account, health insurance and the semester fee are."
        points={[
          "The blocked account and its monthly release",
          "Health insurance and semester fees",
          "Every figure stamped with its review date",
        ]}
        href="/cost-of-studying-in-germany/"
        linkLabel="See the full cost breakdown"
      />

      <HowItWorksSection />
      <GermanCitiesSection />
      <CountriesSection />
      <AboutSection />
      <SocialProofSection />
      <FAQSection />
      <ShareSection />
    </main>

    <Footer />

    {/* Floating conversion surfaces: the bar owns mobile, the pill owns sm+. */}
    <MobileActionBar />
    <WhatsAppFloat />
    <ConsentBanner />
  </div>
);

export default Index;
