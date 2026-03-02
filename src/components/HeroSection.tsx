import { MapPin, MessageCircle, CheckCircle, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const badges = [
  { icon: Award, label: "100+ Successful Visas" },
  { icon: Globe, label: "First Online Agency" },
  { icon: CheckCircle, label: "10+ Countries Served" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(217 91% 50%), hsl(224 76% 30%))",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/5" />
      <div className="absolute -bottom-48 -left-24 h-[500px] w-[500px] rounded-full bg-white/5" />
      <div className="absolute top-1/3 right-1/4 h-3 w-3 rounded-full bg-white/30" />
      <div className="absolute top-2/3 left-1/3 h-2 w-2 rounded-full bg-white/20" />

      <div className="container relative z-10 mx-auto px-4 py-32 text-center lg:py-40">
        <div className="mx-auto max-w-3xl animate-fade-in-up">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Your One-Stop Solution for{" "}
            <span className="text-yellow-300">Germany Visas</span> &amp; Language Classes
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80 md:text-xl">
            First online agency with 100+ successful visas from India, Canada, Prague, Latvia, Finland, Netherlands &amp; more.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="px-8 text-base shadow-xl" asChild>
              <a href="#booking">Book 30-Min Slot</a>
            </Button>
            <Button
              size="lg"
              className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 px-8 text-base shadow-xl border-none"
              asChild
            >
              <a href="https://wa.me/+49123456789" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Message on WhatsApp
              </a>
            </Button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-1 text-sm text-white/60">
            <MapPin className="h-4 w-4" />
            Nußloch, Baden-Württemberg, Germany
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 backdrop-blur-sm">
              <b.icon className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-semibold text-white">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
