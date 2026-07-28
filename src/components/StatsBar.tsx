import { BadgeCheck, Building2, Globe2, GraduationCap } from "lucide-react";
import { Reveal, useCountUp } from "@/lib/motion";

/**
 * The four numbers the business is willing to stand behind. Deliberately no
 * review-score tile — the Google listing it would have linked to isn't live,
 * and an unlinkable rating is just a claim.
 */
const stats = [
  { icon: BadgeCheck, target: 100, suffix: "+", label: "Visas approved" },
  { icon: GraduationCap, target: 100, suffix: "+", label: "Students in public universities" },
  { icon: Globe2, target: 8, suffix: "+", label: "Countries served" },
  { icon: Building2, target: 10, suffix: "+", label: "Years living in Germany" },
];

const StatTile = ({ stat, index }: { stat: (typeof stats)[number]; index: number }) => {
  const { ref, display } = useCountUp(stat.target, { duration: 1800 });

  return (
    <Reveal direction="up" delay={index * 100} className="bg-surface px-6 py-9 text-center">
      <stat.icon className="mx-auto h-6 w-6 text-brand" aria-hidden="true" />
      <p className="tnum mt-3 font-display text-[2.5rem] font-extrabold leading-none tracking-tight text-foreground">
        <span ref={ref}>{display}</span>
        <span className="text-brand">{stat.suffix}</span>
      </p>
      <p className="mx-auto mt-2 max-w-[11rem] text-[0.8125rem] leading-snug text-ink-subtle">
        {stat.label}
      </p>
    </Reveal>
  );
};

const StatsBar = () => (
  <section className="border-y border-border bg-surface" aria-label="Track record">
    <div className="shell">
      {/* gap-px over a border-coloured ground draws exact hairlines at any column count */}
      <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
        {stats.map((stat, i) => (
          <StatTile key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
