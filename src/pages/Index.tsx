import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DreamGermanySection from "@/components/DreamGermanySection";
import GermanCitiesSection from "@/components/GermanCitiesSection";
import CountriesSection from "@/components/CountriesSection";
import OpportunityCardSection from "@/components/OpportunityCardSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SocialProofSection from "@/components/SocialProofSection";
import StatsSection from "@/components/StatsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <DreamGermanySection />
      <GermanCitiesSection />
      <CountriesSection />
      <OpportunityCardSection />
      <ServicesSection />
      <HowItWorksSection />
      <SocialProofSection />
      <StatsSection />
      <FAQSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
