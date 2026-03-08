import { MapPin, MessageCircle, CheckCircle, Globe, Award, GraduationCap, Briefcase, Users, Plane, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(217 91% 50%), hsl(224 76% 25%))",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/5" />
      <div className="absolute -bottom-48 -left-24 h-[500px] w-[500px] rounded-full bg-white/5" />
      <div className="absolute top-1/4 right-1/3 h-64 w-64 rounded-full bg-white/[0.03]" />

      <div className="container relative z-10 mx-auto px-4 py-28 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Content */}
          <div className="animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-yellow-300 backdrop-blur-sm">
              <Award className="h-4 w-4" />
              Germany's First Online Immigration Agency
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Your One-Stop Solution for{" "}
              <span className="text-yellow-300">Germany Visas</span> & Language Classes
            </h1>
            <p className="mb-8 max-w-xl text-lg text-white/75 md:text-xl">
              100+ successful visas from India, Canada, Czech Republic, Latvia, Finland, Netherlands & more. Expert guidance at every step.
            </p>

            {/* Quick Action Pills */}
            <div className="mb-8 flex flex-wrap gap-2">
              {quickActions.map((a) => (
                <a
                  key={a.label}
                  href={a.href}
                  className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/40"
                >
                  <a.icon className="h-4 w-4 text-yellow-300 transition-transform group-hover:scale-110" />
                  {a.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <Button size="lg" className="px-8 text-base shadow-xl" asChild>
                <a href="#booking">Book Free Consultation</a>
              </Button>
              <Button
                size="lg"
                className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 px-8 text-base shadow-xl border-none"
                asChild
              >
                <a href="https://wa.me/+49123456789" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-1 text-sm text-white/50">
              <MapPin className="h-4 w-4" />
              Nußloch, Baden-Württemberg, Germany
            </div>
          </div>

          {/* Right: Lead Capture Form */}
          <div className="mx-auto w-full max-w-md">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur-md">
              <h3 className="mb-1 text-xl font-bold text-white">Get Free Counselling</h3>
              <p className="mb-6 text-sm text-white/60">Book your free 30-min consultation today</p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open(
                    `https://wa.me/+49123456789?text=Hi! I'm ${encodeURIComponent(name)}. I'd like a free consultation. My phone: ${encodeURIComponent(phone)}`,
                    "_blank"
                  );
                }}
                className="space-y-4"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-yellow-300/50 focus:outline-none focus:ring-1 focus:ring-yellow-300/30"
                />
                <input
                  type="tel"
                  placeholder="Phone / WhatsApp Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-yellow-300/50 focus:outline-none focus:ring-1 focus:ring-yellow-300/30"
                />
                <select className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white/70 focus:border-yellow-300/50 focus:outline-none focus:ring-1 focus:ring-yellow-300/30">
                  <option value="" className="text-foreground">Select Visa Type</option>
                  <option value="student" className="text-foreground">Student Visa</option>
                  <option value="opportunity" className="text-foreground">Opportunity Card</option>
                  <option value="family" className="text-foreground">Family Reunion</option>
                  <option value="travel" className="text-foreground">Travel Visa</option>
                  <option value="fair" className="text-foreground">Fair Visit Visa</option>
                  <option value="german" className="text-foreground">German Classes</option>
                </select>
                <Button type="submit" size="lg" className="w-full bg-yellow-400 text-gray-900 font-bold hover:bg-yellow-300 border-none text-base">
                  Get Free Consultation →
                </Button>
              </form>

              <p className="mt-4 text-center text-xs text-white/40">
                ✓ No fees for consultation &nbsp;·&nbsp; ✓ Response within 2 hours
              </p>
            </div>
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
