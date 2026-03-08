import { CheckCircle, Globe, Star, Clock } from "lucide-react";

const stats = [
  { icon: CheckCircle, value: "100+", label: "Successful Visas" },
  { icon: Globe, value: "10+", label: "Countries Served" },
  { icon: Star, value: "5.0", label: "Google Rating" },
  { icon: Clock, value: "10+", label: "Years in Germany" },
];

const StatsBar = () => {
  return (
    <section className="py-10 lg:py-14">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-border/50 bg-primary p-1">
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
      </div>
    </section>
  );
};

export default StatsBar;
