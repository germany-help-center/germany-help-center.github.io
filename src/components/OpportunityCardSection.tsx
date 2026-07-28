import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  FileText,
  MessagesSquare,
  ShieldCheck,
  Target,
  UserRoundCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FlagSpine } from "@/components/Flag";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/lib/motion";
import { whatsapp } from "@/lib/cta";
import professionalImg from "@/assets/professional-germany.jpg";

const gateRequirements = [
  "A foreign university degree, or state-recognised vocational training of at least two years",
  "German at A1 or above, or English at B2 or above",
  "Proof of funds for your stay, plus health insurance and accommodation",
  "Six points on the scoring grid — unless your degree is fully recognised in Germany, in which case you skip the points test entirely",
];

/**
 * The Chancenkarte points grid, so a visitor can add themselves up before
 * booking. Highest value per criterion; they are not all cumulative.
 */
const scoring = [
  { factor: "Partial recognition of your qualification", weight: 4 },
  { factor: "German at B2 or above (B1 = 2, A2 = 1)", weight: 3 },
  { factor: "3 years' relevant experience in the last 7 (2 in 5 = 2 pts)", weight: 3 },
  { factor: "Aged 35 or under (36–40 = 1 pt)", weight: 2 },
  { factor: "English at C1 or above", weight: 1 },
  { factor: "Qualification in a shortage occupation", weight: 1 },
  { factor: "6+ months' previous legal residence in Germany", weight: 1 },
];

const riskPoints = [
  {
    icon: ShieldCheck,
    title: "You don't resign to apply",
    desc: "The whole application is filed from India while you stay employed. You hand in your notice after the visa is in your passport — not before.",
  },
  {
    icon: Briefcase,
    title: "A refusal is not the end",
    desc: "If the first file needs strengthening, we strengthen it and go again. You keep drawing your salary throughout.",
  },
  {
    icon: Target,
    title: "Twelve months on the ground",
    desc: "The card buys you a year inside Germany to interview, network and convert — with permission to take part-time work while you search.",
  },
];

const careerServices = [
  {
    icon: FileText,
    title: "German-format applications",
    desc: "A German CV is not an Indian résumé. We rebuild yours to the Lebenslauf conventions employers actually screen against.",
  },
  {
    icon: MessagesSquare,
    title: "Interview coaching",
    desc: "Mock interviews, cultural briefing, salary-conversation practice — run by someone who has sat on the German side of the table.",
  },
  {
    icon: UserRoundCheck,
    title: "Job-search support",
    desc: "Cover letters, LinkedIn and Xing positioning, and a target list of employers who actually sponsor in your field.",
  },
];

const OpportunityCardSection = () => {
  return (
    <section id="opportunity-card" className="section bg-sunken">
      <div className="shell">
        <SectionHeading
          eyebrow="For working professionals"
          icon={Briefcase}
          title={
            <>
              The Opportunity Card{" "}
              <span className="text-brand">(Chancenkarte)</span>
            </>
          }
          subtitle="Germany's points-based route for skilled workers. You apply from India, keep your current job, and only move once the visa is approved."
        />

        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {/* --------------------------------------------------- eligibility gate */}
          <Reveal direction="left">
            <div className="h-full rounded-2xl border border-border bg-surface p-7 shadow-warm-sm">
              <h3 className="text-xl font-extrabold">Do you qualify?</h3>
              <p className="mt-1.5 text-sm text-ink-muted">
                You must clear every one of these before points are even counted.
              </p>
              <ul className="mt-5 space-y-3">
                {gateRequirements.map((requirement) => (
                  <li key={requirement} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-[1.15rem] w-[1.15rem] shrink-0 text-brand" aria-hidden="true" />
                    <span className="text-[0.875rem] leading-relaxed text-ink-muted">{requirement}</span>
                  </li>
                ))}
              </ul>

              {/* points ladder */}
              <div className="mt-7 border-t border-border pt-6">
                <p className="flex items-baseline justify-between text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-ink-subtle">
                  <span>Where the points come from</span>
                  <span className="tnum text-brand">6 needed</span>
                </p>
                <ul className="mt-4 space-y-3">
                  {scoring.map((row, i) => (
                    <Reveal as="li" key={row.factor} direction="up" delay={i * 70}>
                      <div className="flex items-center gap-3">
                        <span className="min-w-0 flex-1 text-[0.8125rem] text-ink-body">{row.factor}</span>
                        <span className="flex shrink-0 gap-1" aria-hidden="true">
                          {Array.from({ length: 4 }).map((_, pip) => (
                            <span
                              key={pip}
                              className={`h-1.5 w-4 rounded-full transition-colors duration-500 ${
                                pip < row.weight ? "bg-gold" : "bg-border"
                              }`}
                            />
                          ))}
                        </span>
                        <span className="tnum w-8 shrink-0 text-right text-[0.8125rem] font-bold text-foreground">
                          +{row.weight}
                        </span>
                      </div>
                    </Reveal>
                  ))}
                </ul>
                <p className="mt-5 text-xs leading-relaxed text-ink-subtle">
                  Highest value per criterion, shown so you can add yourself up before booking. Not every
                  line is cumulative, and your real score depends on how your qualification is assessed
                  by the recognition authority — we verify that properly in the consultation, free of
                  charge. Proof-of-funds amounts for the Opportunity Card differ from the student rate and
                  are quoted inconsistently online, so we confirm the current figure with the mission
                  rather than publish a number we can&apos;t stand behind.
                </p>
              </div>
            </div>
          </Reveal>

          {/* --------------------------------------------------- risk + the expert */}
          <div className="space-y-7">
            <Reveal direction="right">
              <div>
                <h3 className="text-xl font-extrabold">Why it's close to risk-free</h3>
                <ul className="mt-4 space-y-3.5">
                  {riskPoints.map((point, i) => (
                    <Reveal as="li" key={point.title} direction="up" delay={i * 90}>
                      <div className="flex items-start gap-4 rounded-xl border border-border bg-surface p-5 shadow-warm-sm transition-[transform,box-shadow] duration-300 ease-brand hover:-translate-y-0.5 hover:shadow-warm-md">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gold-soft text-gold-deep">
                          <point.icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="font-bold text-foreground">{point.title}</p>
                          <p className="mt-1 text-[0.875rem] leading-relaxed text-ink-muted">{point.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* included services */}
            <Reveal direction="up" delay={100}>
              <div className="rounded-2xl border border-border bg-surface p-7 shadow-warm-sm">
                <h3 className="text-xl font-extrabold">Career services, included</h3>
                <p className="mt-1 text-sm text-ink-muted">
                  Bundled with every Opportunity Card application at no extra fee.
                </p>
                <ul className="mt-5 space-y-4">
                  {careerServices.map((service) => (
                    <li key={service.title} className="flex items-start gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                        <service.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="font-bold text-foreground">{service.title}</p>
                        <p className="mt-1 text-[0.875rem] leading-relaxed text-ink-muted">{service.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* the expert — image-led, because this is a trust decision */}
            <Reveal direction="up" delay={160}>
              <div className="ink-ground relative overflow-hidden rounded-2xl shadow-warm-lg">
                <FlagSpine />
                <img
                  src={professionalImg}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity"
                  aria-hidden="true"
                />
                <div className="relative p-7 pl-8">
                  <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-gold-bright">
                    Who you'll be working with
                  </p>
                  <h3 className="mt-1.5 text-xl font-extrabold text-white">Jigar Rajeshbhai Vithani</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/70">
                    Resident in Germany since 2014 and working inside the German job market ever since.
                    That means the advice you get is what employers here actually respond to — not what a
                    brochure in another country says they should.
                  </p>
                  <ul className="mt-5 space-y-2 text-[0.875rem] text-white/65">
                    {[
                      "Inside the German job market since 2014",
                      "Interview coaching from the employer's side of the table",
                      "Support that continues after you land",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-bright" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    size="lg"
                    className="mt-6 w-full rounded-full bg-gold-bright font-bold text-[#1A1714] shadow-gold hover:bg-gold"
                  >
                    <a href={whatsapp("the Opportunity Card")} target="_blank" rel="noopener noreferrer">
                      Get your points assessed — free
                      <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunityCardSection;
