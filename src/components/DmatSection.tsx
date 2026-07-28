import { useState } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  CalendarClock,
  CheckCircle2,
  Grid3x3,
  Info,
  Layers,
  MessageCircle,
  Sigma,
  Timer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FlagSpine } from "@/components/Flag";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/lib/motion";
import { DMAT_URL, whatsapp } from "@/lib/cta";

/** The four dMAT sections and their real time limits, mirrored on the platform. */
const examSections = [
  { icon: Layers, name: "Figure Sequences", minutes: 25 },
  { icon: Sigma, name: "Mathematical Equations", minutes: 25 },
  { icon: Grid3x3, name: "Latin Squares", minutes: 20 },
  { icon: BrainCircuit, name: "General Academic Module", minutes: 90 },
];

const platformFeatures = [
  {
    title: "A free, scored diagnostic",
    desc: "Sit the three reasoning sections under the clock and get a section-by-section readiness estimate before you pay anything.",
  },
  {
    title: "50 full-length papers",
    desc: "A complete bank of original, exam-format papers — on screen, auto-submitting, scored server-side with worked explanations.",
  },
  {
    title: "Real exam conditions",
    desc: "Four timed sections that auto-submit exactly like exam day. No PDFs, no untimed question dumps.",
  },
  {
    title: "One-time payment",
    desc: "UPI, card or netbanking. No subscription, no recurring charge, no upsell ladder.",
  },
];

/**
 * The real 2026 dMAT calendar. Deliberately a calendar and not a countdown
 * clock: on a page about an immigration decision, a ticking timer reads as
 * pressure selling. The dates carry all the urgency they need on their own.
 *
 * Each milestone knows its own date so passed rows can be marked done rather
 * than quietly going stale.
 */
const examCalendar = [
  { date: "2026-06-29", label: "Registration opened" },
  { date: "2026-09-15", label: "Registration closes" },
  { date: "2026-09-26", label: "Exam day" },
  { date: "2026-10-12", label: "Results issued" },
];

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const ExamCalendar = () => {
  // Read the clock once per mount — this doesn't need to tick.
  const [today] = useState(() => new Date().toISOString().slice(0, 10));

  return (
    <div>
      <p className="flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-gold-bright">
        <CalendarClock className="h-3.5 w-3.5" aria-hidden="true" />
        The 2026 dMAT calendar
      </p>

      <ol className="mt-4 space-y-2.5">
        {examCalendar.map((milestone) => {
          const passed = milestone.date < today;
          return (
            <li key={milestone.date} className="flex items-center gap-3">
              <span
                className={`h-2 w-2 shrink-0 rounded-full ${passed ? "bg-white/25" : "bg-gold-bright"}`}
                aria-hidden="true"
              />
              <span
                className={`flex-1 text-[0.875rem] font-semibold ${
                  passed ? "text-white/40 line-through decoration-white/25" : "text-white"
                }`}
              >
                {milestone.label}
              </span>
              <span
                className={`tnum shrink-0 text-[0.8125rem] ${passed ? "text-white/30" : "text-white/70"}`}
              >
                {formatDate(milestone.date)}
              </span>
            </li>
          );
        })}
      </ol>

      <p className="mt-4 text-xs leading-relaxed text-white/45">
        Fee €150, paid to g.a.s.t. Dates as published for the 2026 sitting — confirm on d-mat.de before
        you rely on them.
      </p>
    </div>
  );
};

/**
 * A stylised exam-player frame. Deliberately abstract — a Latin-square motif and
 * a section timer, never real question content.
 */
const SimulatorCard = () => (
  <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-surface shadow-warm-xl">
    <FlagSpine />

    <div className="flex items-center gap-3 border-b border-border bg-sunken py-3 pl-6 pr-4">
      <span className="text-xs font-bold text-ink-body">Latin Squares</span>
      <span className="tnum ml-auto rounded-md bg-gold-soft px-2.5 py-1 text-xs font-bold text-gold-deep">
        <Timer className="mr-1 inline h-3 w-3" aria-hidden="true" />
        19:42
      </span>
    </div>

    <div className="p-6">
      <p className="text-[0.8125rem] text-ink-muted">Question 7 of 20 — complete the square.</p>

      <table className="mt-4 border-separate border-spacing-1" aria-hidden="true">
        <tbody>
          {[
            ["A", "B", "C", "D"],
            ["C", "D", "A", "B"],
            ["B", "?", "D", "C"],
            ["D", "C", "B", "A"],
          ].map((row, r) => (
            <tr key={r}>
              {row.map((cell, c) => (
                <td
                  key={c}
                  className={`tnum h-10 w-10 rounded-lg border text-center align-middle text-[0.9375rem] font-bold ${
                    cell === "?"
                      ? "border-gold bg-gold-soft text-gold-deep"
                      : "border-border bg-sunken text-foreground"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-5 grid grid-cols-4 gap-2.5" aria-hidden="true">
        {["A", "B", "C", "D"].map((option, i) => (
          <div
            key={option}
            className={`grid place-items-center rounded-lg border-[1.5px] py-2.5 text-sm font-bold transition-colors ${
              i === 0
                ? "border-success bg-success-soft text-success"
                : "border-border bg-surface text-ink-muted"
            }`}
          >
            {option}
          </div>
        ))}
      </div>
    </div>

    <div className="flex items-center gap-4 border-t border-border bg-sunken px-6 py-4">
      <div
        className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full"
        style={{
          background: "conic-gradient(hsl(var(--success)) 72%, hsl(var(--border)) 0)",
        }}
        aria-hidden="true"
      >
        <span className="absolute inset-[6px] rounded-full bg-sunken" />
        <span className="tnum relative text-sm font-bold text-foreground">72</span>
      </div>
      <p className="text-[0.8125rem] text-ink-muted">
        <strong className="block text-sm text-foreground">Readiness estimate</strong>
        Weighted toward your most recent attempts.
      </p>
    </div>
  </div>
);

const DmatSection = () => {
  return (
    <section id="dmat" className="ink-ground grain section relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -left-32 top-1/4 h-[28rem] w-[28rem] animate-aurora rounded-full bg-gold/12 blur-[130px]" />
        <div
          className="absolute -right-32 bottom-0 h-[26rem] w-[26rem] animate-aurora rounded-full bg-brand/22 blur-[120px]"
          style={{ animationDelay: "-9s" }}
        />
      </div>

      <div className="shell">
        <SectionHeading
          eyebrow="New — dMAT Practice Platform"
          icon={BrainCircuit}
          onDark
          align="left"
          title={
            <>
              Sit the dMAT <span className="text-wash">before</span> you sit the dMAT.
            </>
          }
          subtitle={
            <>
              From the Summer Semester 2027 intake, master&apos;s applicants whose degree is in
              engineering, commerce, accounting, finance, economics, business or management must sit the{" "}
              <strong className="text-white">dMAT — the Digital Master Test</strong> as part of APS India
              verification. APS cannot finish your file without the certificate. We built a dedicated
              platform for it: timed, on-screen, exam-accurate.
            </>
          }
        />

        {/* Who this does and doesn't apply to — stated before anything is sold. */}
        <Reveal direction="up" delay={120} className="mt-8">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-gold-bright/25 bg-gold-bright/[0.07] p-5">
              <p className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-gold-bright">
                You need the dMAT if
              </p>
              <p className="mt-2 text-[0.875rem] leading-relaxed text-white/75">
                You&apos;re applying for a master&apos;s from Summer Semester 2027 onward and your prior
                degree is in engineering, commerce, accounting, finance, economics, business or management.
              </p>
            </div>
            <div className="rounded-xl border border-white/12 bg-white/[0.04] p-5">
              <p className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-white/50">
                You don&apos;t if
              </p>
              <p className="mt-2 text-[0.875rem] leading-relaxed text-white/60">
                You&apos;re applying for Winter Semester 2026/27, you&apos;re a bachelor&apos;s applicant,
                you already hold an APS certificate, or you completed APS registration before 29 June 2026.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1fr_0.85fr]">
          {/* --------------------------------------------------------- left column */}
          <div>
            {/* the four sections, as a timing ladder */}
            <Reveal direction="up">
              <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-white/45">
                Four timed sections · 3 hrs total
              </p>
            </Reveal>

            <ul className="mt-4 space-y-2.5">
              {examSections.map((section, i) => (
                <Reveal as="li" key={section.name} direction="left" delay={i * 90}>
                  <div className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.05] p-4 transition-colors duration-300 hover:border-gold-bright/30 hover:bg-white/[0.09]">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/10 text-gold-bright">
                      <section.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1 text-[0.9375rem] font-bold text-white">
                      {section.name}
                    </span>
                    <span className="tnum shrink-0 text-sm font-bold text-white/55">
                      {section.minutes} min
                    </span>
                    {/* the bar length encodes the time weight of the section */}
                    <span
                      className="hidden h-1.5 shrink-0 overflow-hidden rounded-full bg-white/10 sm:block sm:w-24"
                      aria-hidden="true"
                    >
                      <span
                        className="block h-full rounded-full bg-gradient-to-r from-brand to-gold-bright transition-[width] duration-700 ease-brand"
                        style={{ width: `${(section.minutes / 90) * 100}%` }}
                      />
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {platformFeatures.map((feature, i) => (
                <Reveal key={feature.title} direction="up" delay={i * 80}>
                  <div className="h-full rounded-xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="flex items-start gap-2 font-display text-[1.0625rem] font-bold text-white">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-bright" aria-hidden="true" />
                      {feature.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{feature.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* -------------------------------------------------------- right column */}
          <div className="space-y-6 lg:sticky lg:top-28">
            <Reveal direction="scale">
              <SimulatorCard />
            </Reveal>

            <Reveal direction="up" delay={120}>
              <div className="glass rounded-2xl p-6">
                <ExamCalendar />

                <Button
                  asChild
                  size="lg"
                  className="group relative mt-6 w-full overflow-hidden rounded-full bg-gold-bright text-base font-bold text-[#1A1714] shadow-gold hover:bg-gold"
                >
                  <a href={DMAT_URL} target="_blank" rel="noopener noreferrer">
                    {/* light sweeps across the button */}
                    <span
                      className="absolute inset-y-0 -left-1/2 w-1/3 animate-sheen bg-white/40 blur-md"
                      aria-hidden="true"
                    />
                    <span className="relative">Take the free readiness check</span>
                    <ArrowUpRight
                      className="relative ml-1.5 h-4 w-4 transition-transform duration-200 ease-brand group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </Button>

                <p className="mt-3 text-center text-xs text-white/45">
                  Free diagnostic · no card required · dmat.germanyhelpcenter.com
                </p>

                {/* Escape hatch: whoever the platform doesn't convert is still a consultancy lead. */}
                <a
                  href={whatsapp("checking whether I need to sit the dMAT")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 border-t border-white/10 pt-4 text-[0.8125rem] font-semibold text-white/65 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Not sure if it applies to you? Ask us — it&apos;s free.
                </a>
              </div>
            </Reveal>

            {/* Required disclaimer — the platform is independent practice material. */}
            <Reveal direction="up" delay={200}>
              <p className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-xs leading-relaxed text-white/55">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-white/40" aria-hidden="true" />
                <span>
                  Independent practice material by Germany Help Center India. Questions are original and
                  written in the official dMAT format.{" "}
                  <strong className="font-semibold text-white/75">
                    Not affiliated with, endorsed by, or connected to g.a.s.t. or APS India.
                  </strong>{" "}
                  Winter Semester 2026/27 applicants do not need the dMAT.
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DmatSection;
