import { MapPin, MessageCircle, CheckCircle, Globe, Award, GraduationCap, Briefcase, Users, Plane, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const badges = [
  { icon: Award, label: "100+ Successful Visas" },
  { icon: Globe, label: "First Online Agency" },
  { icon: CheckCircle, label: "10+ Countries Served" },
];

const quickActions = [
  { icon: GraduationCap, label: "Study", href: "#services" },
  { icon: Briefcase, label: "Work", href: "#services" },
  { icon: Users, label: "Family", href: "#services" },
  { icon: Plane, label: "Visit", href: "#services" },
  { icon: BookOpen, label: "Learn German", href: "#services" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(20 10% 18%), hsl(20 12% 10%))",
      }}
    >
      {/* Decorative shapes with German gold accent */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-german-gold/5" />
      <div className="absolute -bottom-48 -left-24 h-[500px] w-[500px] rounded-full bg-german-red/5" />
      <div className="absolute top-1/4 right-1/3 h-64 w-64 rounded-full bg-german-gold/[0.03]" />

      <div className="container relative z-10 mx-auto px-4 py-32 text-center lg:py-40">
        <div className="mx-auto max-w-3xl animate-fade-in-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-german-gold backdrop-blur-sm">
            <Award className="h-4 w-4" />
            Germany's First Online Immigration Agency
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Your One-Stop Solution for{" "}
            <span className="text-german-gold">Germany Visas</span> & Language Classes
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70 md:text-xl">
            100+ successful visas from India, Canada, Czech Republic, Latvia, Finland, Netherlands & more. Expert guidance at every step.
          </p>

          {/* Quick Action Pills */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {quickActions.map((a) => (
              <a
                key={a.label}
                href={a.href}
                className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-german-gold/40"
              >
                <a.icon className="h-4 w-4 text-german-gold transition-transform group-hover:scale-110" />
                {a.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-german-red hover:bg-german-red/90 text-white px-8 text-base shadow-xl border-none" asChild>
              <a href="#services">Explore Services</a>
            </Button>
            <Button
              size="lg"
              className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 px-8 text-base shadow-2xl border-none ring-2 ring-whatsapp/30 ring-offset-2 ring-offset-transparent"
              asChild
            >
              <a href="https://wa.me/+919824925434" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-1 text-sm text-white/50">
            <MapPin className="h-4 w-4" />
            Mahidharpura, Surat - 395003, India
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 backdrop-blur-sm">
              <b.icon className="h-5 w-5 text-german-gold" />
              <span className="text-sm font-semibold text-white">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
