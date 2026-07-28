import {
  CalendarCheck,
  CheckCircle2,
  FileCheck,
  GraduationCap,
  MessageCircle,
  Plane,
  Route,
  ShieldCheck,
  Users,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, useScrollProgress } from "@/lib/motion";

const steps = [
  {
    icon: MessageCircle,
    title: "Free consultation",
    desc: "Thirty minutes on WhatsApp or video. We assess your profile, your funds and your timeline, and tell you plainly which route is realistic — including when the answer is 'not yet'.",
    duration: "Day 1",
  },
  {
    icon: Users,
    title: "A dedicated WhatsApp group",
    desc: "Your own group with us and, if you want, your parents. Every question answered in hours, every document tracked in one thread. Nothing happens to your file that you can't see.",
    duration: "Day 1",
  },
  {
    icon: FileCheck,
    title: "Document preparation",
    desc: "Transcripts, school certificates, letters of recommendation, motivation letter, certified translations. We draft, you approve — we don't invent anything.",
    duration: "Weeks 1–4",
  },
  {
    icon: ShieldCheck,
    title: "APS verification (and dMAT if required)",
    desc: "We assemble the full APS India file and submit it for academic-credential verification. Master's applicants from the Summer 2027 intake also sit the dMAT — we prepare you for that too.",
    duration: "Weeks 2–10",
  },
  {
    icon: GraduationCap,
    title: "Applications & immatriculation",
    desc: "A shortlist built around your actual profile, filed ahead of deadline. Once an offer lands we handle enrolment, the semester contribution and the paperwork behind it.",
    duration: "Weeks 6–16",
  },
  {
    icon: CalendarCheck,
    title: "Visa appointment & rehearsal",
    desc: "Blocked account, insurance, appointment booking — then a full mock interview over video so nothing in that room is a surprise.",
    duration: "Weeks 12–20",
  },
  {
    icon: CheckCircle2,
    title: "Decision",
    desc: "The visa is the embassy's call, never ours. If it's a refusal, we read the reasoning, fix what's fixable and file again — we don't disappear.",
    duration: "Weeks 18–28",
  },
  {
    icon: Plane,
    title: "Landing in Germany",
    desc: "City registration (Anmeldung), bank account, health insurance activation, housing leads and a SIM card. The first fortnight is where most people flounder — we stay with you through it.",
    duration: "After arrival",
  },
];

const HowItWorksSection = () => {
  const { ref, progress } = useScrollProgress<HTMLOListElement>();

  return (
    <section id="process" className="section bg-sunken">
      <div className="shell">
        <SectionHeading
          eyebrow="How it works"
          icon={Route}
          title={
            <>
              Eight steps, and you can see <span className="text-brand">all of them</span>
            </>
          }
          subtitle="Built and rebuilt across 100+ applications. Timelines are honest ranges, not sales figures — how fast it moves depends mostly on how fast your documents arrive."
        />

        <ol ref={ref} className="relative mx-auto mt-16 max-w-3xl">
          {/* the spine: a grey track with a brand-coloured fill that grows as you scroll */}
          <div
            className="absolute left-[1.4375rem] top-2 h-[calc(100%-2rem)] w-0.5 bg-border md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          >
            <div
              className="w-full origin-top rounded-full bg-gradient-to-b from-brand via-flag-red to-gold transition-transform duration-150 ease-out"
              style={{ height: "100%", transform: `scaleY(${progress})` }}
            />
          </div>

          {steps.map((step, i) => {
            const right = i % 2 === 1;
            return (
              <li key={step.title} className="relative pb-9 last:pb-0">
                <div
                  className={`flex items-start gap-5 md:gap-0 ${
                    right ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* node */}
                  <Reveal
                    direction="scale"
                    threshold={0.4}
                    className="relative z-10 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border-2 border-background bg-foreground text-background shadow-warm-md">
                      <step.icon className="h-5 w-5" aria-hidden="true" />
                      <span className="tnum absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full bg-gold text-[0.625rem] font-bold text-[#1A1714]">
                        {i + 1}
                      </span>
                    </span>
                  </Reveal>

                  {/* card */}
                  <Reveal
                    direction={right ? "left" : "right"}
                    delay={80}
                    className={`min-w-0 flex-1 md:w-[calc(50%-3rem)] md:flex-none ${
                      right ? "md:mr-auto md:text-right" : "md:ml-auto"
                    }`}
                  >
                    <div className="rounded-2xl border border-border bg-surface p-6 shadow-warm-sm transition-[transform,box-shadow] duration-300 ease-brand hover:-translate-y-1 hover:shadow-warm-lg">
                      <p className="tnum text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-brand">
                        {step.duration}
                      </p>
                      <h3 className="mt-1.5 text-[1.125rem] font-extrabold">{step.title}</h3>
                      <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-muted">{step.desc}</p>
                    </div>
                  </Reveal>
                </div>
              </li>
            );
          })}
        </ol>

        <Reveal direction="up" delay={100} className="mx-auto mt-12 max-w-2xl">
          <p className="rounded-2xl border border-gold/35 bg-gold-soft px-6 py-5 text-center text-[0.9375rem] leading-relaxed text-ink-body">
            Most delays in Indian applications come from incomplete paperwork, not from the embassy. We
            front-load the file so the queue is the only thing you're waiting on.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default HowItWorksSection;
