import {
  Compass,
  FileCheck,
  GraduationCap,
  HandHeart,
  Heart,
  Languages,
  Users,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { CtaPair } from "@/components/Cta";
import { Reveal } from "@/lib/motion";
import { FlagChip } from "@/components/Flag";
import aboutUsHero from "@/assets/about-us-hero.jpg";

const commitments = [
  { icon: GraduationCap, text: "Admissions and visas handled by people who studied and work here" },
  { icon: FileCheck, text: "One transparent thread from first enquiry to visa decision" },
  { icon: Users, text: "Cultural preparation, so the first month isn't a shock" },
  { icon: Languages, text: "German language teaching in-house, not outsourced" },
  { icon: Compass, text: "A named person accountable for your file" },
  { icon: HandHeart, text: "Support that continues after you land" },
];

const visionPoints = [
  "A dedicated partner for the whole journey",
  "More than admission — a life that works",
  "Clear guidance, even when the answer is no",
  "Feel at home before you arrive",
  "Someone in your time zone, and someone in theirs",
];

const AboutSection = () => {
  return (
    <section id="about" className="section bg-background">
      <div className="shell">
        <SectionHeading
          eyebrow="About us"
          icon={Heart}
          title={
            <>
              Building bridges. <span className="text-brand">Changing lives.</span>
            </>
          }
          subtitle="Two people, two countries, one destination. Pareshbhai in Surat takes the first call; Jigarbhai in Baden-Württemberg handles everything that has to happen on German soil."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left">
            <div className="group relative">
              <div className="overflow-hidden rounded-2xl shadow-warm-xl">
                <img
                  src={aboutUsHero}
                  alt="Students and professionals who moved to Germany with Germany Help Center"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-brand group-hover:scale-[1.05]"
                />
              </div>
              <div
                className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-gold/25 transition-transform duration-500 ease-brand group-hover:-bottom-3 group-hover:-right-3"
                aria-hidden="true"
              />

              {/* floating credential card */}
              <div className="absolute -bottom-6 left-5 max-w-[15rem] rounded-xl border border-border bg-surface p-4 shadow-warm-lg">
                <p className="flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-ink-subtle">
                  <FlagChip />
                  On the ground
                </p>
                <p className="mt-1.5 text-sm font-bold text-foreground">Nußloch, Baden-Württemberg</p>
                <p className="mt-0.5 text-xs text-ink-muted">
                  A German address, a German phone number, and German office hours.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <div>
              <h3 className="text-[1.625rem] font-extrabold md:text-[2rem]">
                No office. That&apos;s the point.
              </h3>
              <p className="mt-4 leading-relaxed text-ink-muted">
                Every step of the German process — APS, university applications, visa filing — is
                already digital. So we don&apos;t rent a showroom in a metro city and bill you for it.
                You send scans; we build the file; you keep the difference. Whether you&apos;re in
                Mumbai or a town nobody outside Gujarat has heard of, you get the same service.
              </p>

              <ul className="mt-7 space-y-3">
                {commitments.map((item, i) => (
                  <Reveal as="li" key={item.text} direction="up" delay={i * 70}>
                    <div className="flex items-start gap-4 rounded-xl border border-border bg-surface p-4 shadow-warm-sm transition-[transform,box-shadow] duration-300 ease-brand hover:-translate-y-0.5 hover:shadow-warm-md">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                        <item.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <p className="pt-2 text-[0.875rem] font-semibold leading-snug text-ink-body">
                        {item.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* vision */}
        <Reveal direction="up" delay={100} className="mt-20">
          <div className="ink-ground grain relative overflow-hidden rounded-2xl p-9 md:p-14">
            <div
              className="absolute -right-24 -top-24 h-72 w-72 animate-aurora rounded-full bg-gold/12 blur-[100px]"
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-3xl text-center">
              <Heart className="mx-auto h-9 w-9 text-gold-bright" aria-hidden="true" />
              <h3 className="mt-4 text-[1.625rem] font-extrabold text-white md:text-[2rem]">
                Our vision
              </h3>
              <p className="mt-3 font-display text-lg font-semibold italic text-gold-bright">
                &ldquo;Building bridges, changing lives.&rdquo;
              </p>

              <ul className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {visionPoints.map((point, i) => (
                  <Reveal as="li" key={point} direction="up" delay={i * 80}>
                    <div className="glass flex h-full items-center gap-3 rounded-xl p-4 text-left">
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-bright"
                        aria-hidden="true"
                      />
                      <p className="text-[0.875rem] font-semibold text-white/85">{point}</p>
                    </div>
                  </Reveal>
                ))}
              </ul>

              <p className="mt-9 leading-relaxed text-white/60">
                We don&apos;t process paperwork — we take responsibility for outcomes. Every visa
                approved, every student enrolled, every family reunited is a bridge between two
                countries. That&apos;s the whole business.
              </p>

              <div className="mt-9">
                <CtaPair location="about" topic="working with you" onDark />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutSection;
