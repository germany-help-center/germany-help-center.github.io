import { MapPin, MessageCircle, CheckCircle, Globe, Award, GraduationCap, Briefcase, Users, Plane, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const badges = [
  { icon: Award, label: "100+ Successful Visas" },
  { icon: Globe, label: "Expert in Germany Since 2014" },
  { icon: CheckCircle, label: "Germany-Only Specialists" },
];

const quickActions = [
  { icon: GraduationCap, label: "Study in Germany", href: "#services" },
  { icon: Briefcase, label: "Work in Germany", href: "#services" },
  { icon: Users, label: "Family Reunion", href: "#services" },
  { icon: Plane, label: "Visit Germany", href: "#services" },
  { icon: BookOpen, label: "Learn German", href: "#services" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Subtle warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-german-gold/[0.04] via-transparent to-german-red/[0.03]" />

      <div className="container relative z-10 mx-auto px-4 py-32 text-center lg:py-40">
        <div className="mx-auto max-w-3xl animate-fade-in-up">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img src={logo} alt="Germany Help Center" className="h-24 w-24 object-contain" />
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-german-gold/20 bg-german-gold/10 px-4 py-1.5 text-sm font-medium text-german-dark">
            <Award className="h-4 w-4 text-german-gold" />
            Germany-Only Immigration Specialists
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Your Gateway to{" "}
            <span className="text-german-red">Study & Work in Germany</span>
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Berlin · Munich · Frankfurt · Hamburg · Stuttgart — we help you reach Germany's top cities and universities.
          </p>
          <p className="mx-auto mb-8 max-w-xl text-sm text-muted-foreground/80">
            Led by <span className="text-foreground font-medium">Jigar Rajeshbhai Vithani</span>, living in Germany since 2014 — bringing 10+ years of practical experience in German education & career systems.
          </p>

          {/* Quick Action Pills */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {quickActions.map((a) => (
              <a
                key={a.label}
                href={a.href}
                className="group flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-all hover:shadow-md hover:border-german-red/30"
              >
                <a.icon className="h-4 w-4 text-german-red transition-transform group-hover:scale-110" />
                {a.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-german-red hover:bg-german-red/90 text-white px-8 text-base shadow-lg shadow-german-red/20 border-none" asChild>
              <a href="#services">Explore Services</a>
            </Button>
            <Button
              size="lg"
              className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 px-8 text-base shadow-lg shadow-whatsapp/20 border-none"
              asChild
            >
              <a href="https://wa.me/+919824925434" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us Now
              </a>
            </Button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-1 text-sm text-muted-foreground/60">
            <MapPin className="h-4 w-4" />
            Surat, India & Germany
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 shadow-sm">
              <b.icon className="h-5 w-5 text-german-gold" />
              <span className="text-sm font-semibold text-foreground">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
