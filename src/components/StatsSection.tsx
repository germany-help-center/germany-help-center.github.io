import { CheckCircle, Globe, Star, Users, Shield, Headphones, Clock, Award } from "lucide-react";

const stats = [
  { icon: CheckCircle, value: "100+", label: "Successful Visas" },
  { icon: Globe, value: "10+", label: "Countries Served" },
  { icon: Star, value: "5.0", label: "Google Rating" },
  { icon: Clock, value: "10+", label: "Years in Germany" },
];

const values = [
  {
    icon: Shield,
    title: "Personalized Guidance",
    desc: "Every case gets individual attention. Our Germany-based expert personally reviews your application.",
  },
  {
    icon: Award,
    title: "Germany-Only Expertise",
    desc: "We specialize exclusively in Germany — visas, universities, job market, and settlement. No other country, just deep German expertise.",
  },
  {
    icon: Headphones,
    title: "Online-First Approach",
    desc: "Complete your entire process from home — WhatsApp, video calls & email support with our team in India and Germany.",
  },
  {
    icon: Clock,
    title: "2-Hour Response Time",
    desc: "Get a response within 2 hours on WhatsApp — even on weekends. Our Germany-based team covers European time zones.",
  },
];

const StatsSection = () => {
  return (
    <section id="about" className="py-14 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-german-red">Why Us</p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">Why Choose Germany Help Center?</h2>
          <p className="text-muted-foreground">Germany-only specialists with real on-ground experience since 2014 — not just consultants, but people who've lived the journey.</p>
        </div>

        {/* Stats bar */}
        <div className="mb-16 rounded-2xl border border-border/50 bg-primary p-1">
          <div className="grid grid-cols-2 gap-1 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-primary p-6 text-center text-primary-foreground">
                <s.icon className="mx-auto mb-2 h-7 w-7 text-german-gold" />
                <p className="text-3xl font-extrabold">{s.value}</p>
                <p className="mt-1 text-sm text-primary-foreground/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="group rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-german-red/10 text-german-red transition-colors group-hover:bg-german-red group-hover:text-white">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
