import { CheckCircle, Globe, Star, Users, Shield, Headphones } from "lucide-react";

const stats = [
  { icon: CheckCircle, value: "100+", label: "Successful Visas" },
  { icon: Globe, value: "10+", label: "Countries Served" },
  { icon: Star, value: "5.0", label: "Google Rating" },
  { icon: Users, value: "500+", label: "Happy Clients" },
];

const values = [
  { icon: Shield, title: "Personalized Guidance", desc: "Every case gets individual attention from our experienced consultants." },
  { icon: Headphones, title: "Online-First Approach", desc: "Complete your entire process from home — no office visits needed." },
  { icon: Globe, title: "Multilingual Support", desc: "We speak English, Hindi, German, and more to serve you better." },
];

const StatsSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Why Us</p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">Why Choose Germany Help Center?</h2>
        </div>

        <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border/50 bg-card p-6 text-center shadow-sm">
              <s.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
              <p className="text-3xl font-extrabold text-foreground">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <v.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
