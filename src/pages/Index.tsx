import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CountriesSection from "@/components/CountriesSection";
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
      <CountriesSection />
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
