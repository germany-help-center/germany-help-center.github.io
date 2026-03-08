import { MapPin, MessageCircle, CheckCircle, Globe, Award, GraduationCap, Briefcase, Users, Plane, BookOpen, Building2 } from "lucide-react";
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
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, hsl(220 20% 6%) 0%, hsl(220 18% 12%) 40%, hsl(220 15% 8%) 100%)",
      }}
    >
      {/* Digital grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
        backgroundSize: "50px 50px"
      }} />
      {/* City silhouette hint */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-[0.06]" style={{
        background: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 200\"><rect x=\"50\" y=\"80\" width=\"40\" height=\"120\" fill=\"white\"/><rect x=\"100\" y=\"40\" width=\"30\" height=\"160\" fill=\"white\"/><rect x=\"140\" y=\"60\" width=\"50\" height=\"140\" fill=\"white\"/><rect x=\"200\" y=\"20\" width=\"35\" height=\"180\" fill=\"white\"/><rect x=\"250\" y=\"90\" width=\"60\" height=\"110\" fill=\"white\"/><rect x=\"320\" y=\"50\" width=\"25\" height=\"150\" fill=\"white\"/><rect x=\"360\" y=\"70\" width=\"45\" height=\"130\" fill=\"white\"/><rect x=\"420\" y=\"30\" width=\"30\" height=\"170\" fill=\"white\"/><rect x=\"470\" y=\"100\" width=\"55\" height=\"100\" fill=\"white\"/><rect x=\"540\" y=\"10\" width=\"28\" height=\"190\" fill=\"white\"/><rect x=\"580\" y=\"60\" width=\"40\" height=\"140\" fill=\"white\"/><rect x=\"640\" y=\"45\" width=\"35\" height=\"155\" fill=\"white\"/><rect x=\"690\" y=\"80\" width=\"50\" height=\"120\" fill=\"white\"/><rect x=\"760\" y=\"25\" width=\"32\" height=\"175\" fill=\"white\"/><rect x=\"810\" y=\"55\" width=\"45\" height=\"145\" fill=\"white\"/><rect x=\"870\" y=\"70\" width=\"38\" height=\"130\" fill=\"white\"/><rect x=\"920\" y=\"40\" width=\"28\" height=\"160\" fill=\"white\"/><rect x=\"960\" y=\"90\" width=\"55\" height=\"110\" fill=\"white\"/><rect x=\"1030\" y=\"35\" width=\"30\" height=\"165\" fill=\"white\"/><rect x=\"1080\" y=\"65\" width=\"42\" height=\"135\" fill=\"white\"/><rect x=\"1140\" y=\"50\" width=\"35\" height=\"150\" fill=\"white\"/></svg>') repeat-x bottom",
        backgroundSize: "100% 100%"
      }} />
      {/* Glow accents */}
      <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-german-gold/[0.04] blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-german-red/[0.04] blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4 py-32 text-center lg:py-40">
        <div className="mx-auto max-w-3xl animate-fade-in-up">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img src={logo} alt="Germany Help Center" className="h-24 w-24 object-contain drop-shadow-2xl" />
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-german-gold/20 bg-german-gold/10 px-4 py-1.5 text-sm font-medium text-german-gold backdrop-blur-sm">
            <Award className="h-4 w-4" />
            Germany-Only Immigration Specialists
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Your Gateway to{" "}
            <span className="bg-gradient-to-r from-german-gold via-german-gold/80 to-german-gold/60 bg-clip-text text-transparent">Study & Work in Germany</span>
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg text-white/60 md:text-xl">
            Berlin · Munich · Frankfurt · Hamburg · Stuttgart — we help you reach Germany's top cities and universities.
          </p>
          <p className="mx-auto mb-8 max-w-xl text-sm text-white/40">
            Led by <span className="text-german-gold/80 font-medium">Jigar Rajeshbhai Vithani</span>, living in Germany since 2014 — bringing 10+ years of practical experience in German education & career systems.
          </p>

          {/* Quick Action Pills */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {quickActions.map((a) => (
              <a
                key={a.label}
                href={a.href}
                className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/70 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-german-gold/30 hover:text-white"
              >
                <a.icon className="h-4 w-4 text-german-gold transition-transform group-hover:scale-110" />
                {a.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-german-red hover:bg-german-red/90 text-white px-8 text-base shadow-xl shadow-german-red/20 border-none" asChild>
              <a href="#services">Explore Services</a>
            </Button>
            <Button
              size="lg"
              className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 px-8 text-base shadow-xl shadow-whatsapp/20 border-none"
              asChild
            >
              <a href="https://wa.me/+919824925434" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us Now
              </a>
            </Button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-1 text-sm text-white/30">
            <MapPin className="h-4 w-4" />
            Surat, India & Germany
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 backdrop-blur-sm">
              <b.icon className="h-5 w-5 text-german-gold" />
              <span className="text-sm font-semibold text-white/70">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
