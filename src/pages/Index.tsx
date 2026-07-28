import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import DreamGermanySection from "@/components/DreamGermanySection";
import MentorSection from "@/components/MentorSection";
import EligibilityCheck from "@/components/EligibilityCheck";
import StudentPathwaysSection from "@/components/StudentPathwaysSection";
import ApsSection from "@/components/ApsSection";
import DmatSection from "@/components/DmatSection";
import OpportunityCardSection from "@/components/OpportunityCardSection";
import ServicesSection from "@/components/ServicesSection";
import CostsSection from "@/components/CostsSection";
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
      <StudentPathwaysSection />
      <ApsSection />
      <DmatSection />
      <OpportunityCardSection />
      <ServicesSection />
      <CostsSection />
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
