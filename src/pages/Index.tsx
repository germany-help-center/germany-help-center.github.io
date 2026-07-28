import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import DreamGermanySection from "@/components/DreamGermanySection";
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
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

/**
 * The landing page outline.
 *
 * The order is deliberate: establish credibility (hero, numbers), give the
 * reason to move (why Germany), then answer the reader's own situation
 * (study → APS → dMAT → work), then the commercial detail (services, costs),
 * then how it runs, then who we are, then objections. Money and honesty sit
 * before the testimonials on purpose — a sceptical parent reaches the fee table
 * before they reach anything resembling a sales pitch.
 */
const Index = () => (
  <div className="min-h-screen">
    <Header />

    <main>
      <HeroSection />
      <StatsBar />
      <DreamGermanySection />
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
    </main>

    <Footer />
    <WhatsAppFloat />
  </div>
);

export default Index;
