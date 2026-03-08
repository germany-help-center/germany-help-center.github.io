import { CheckCircle, Globe, Star, Users, Shield, Headphones, Clock } from "lucide-react";

const stats = [
  { icon: CheckCircle, value: "100+", label: "Successful Visas" },
  { icon: Globe, value: "10+", label: "Countries Served" },
  { icon: Star, value: "5.0", label: "Google Rating" },
  { icon: Users, value: "500+", label: "Happy Clients" },
];

const values = [
  {
    icon: Shield,
    title: "Personalized Guidance",
    desc: "Every case gets individual attention from our experienced consultants. No cookie-cutter approaches.",
  },
  {
    icon: Headphones,
    title: "Online-First Approach",
    desc: "Complete your entire process from home — no office visits needed. WhatsApp, video calls & email support.",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    desc: "We speak English, Hindi, German, and more to serve you better across all time zones.",
  },
  {
    icon: Clock,
    title: "2-Hour Response Time",
    desc: "We value your time. Get a response within 2 hours on WhatsApp — even on weekends.",
  },
];

const StatsSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Why Us</p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">Why Choose Germany Help Center?</h2>
          <p className="text-muted-foreground">Trusted by hundreds of clients across 10+ countries for reliable, efficient immigration services.</p>
        </div>

        {/* Stats bar */}
        <div className="mb-16 rounded-2xl border border-border/50 bg-primary p-1">
          <div className="grid grid-cols-2 gap-1 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-primary p-6 text-center text-primary-foreground">
                <s.icon className="mx-auto mb-2 h-7 w-7 text-yellow-300" />
                <p className="text-3xl font-extrabold">{s.value}</p>
                <p className="mt-1 text-sm text-primary-foreground/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="group rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
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
