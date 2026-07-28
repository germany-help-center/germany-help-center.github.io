import { useState } from "react";
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  GraduationCap,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FlagSpine } from "@/components/Flag";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/lib/motion";
import { DMAT_URL, whatsapp } from "@/lib/cta";

interface Pathway {
  title: string;
  desc: string;
  steps: { label: string; detail: string }[];
}

const bachelorPathways: Pathway[] = [
  {
    title: "Straight after 12th standard",
    desc: "Indian 12th-standard results usually need a bridging year before a German public university will admit you. That year is the Studienkolleg — and it is the normal route, not a setback.",
    steps: [
      { label: "Finish 12th standard", detail: "70% aggregate minimum — an APS requirement since March 2026" },
      { label: "Studienkolleg / preparatory course", detail: "One foundation year, taught in Germany" },
      { label: "Clear the Feststellungsprüfung", detail: "The assessment that unlocks admission" },
      { label: "Begin your bachelor's", detail: "Public university, no tuition fee" },
    ],
  },
  {
    title: "12th + one year of college in India",
    desc: "One completed year at a recognised Indian university generally satisfies the direct-entry requirement — no Studienkolleg, no bridging year, straight into first semester.",
    steps: [
      { label: "12th + 1 year of college", detail: "Any recognised Indian university — 70% in Class 12 still applies" },
      { label: "Direct university application", detail: "Studienkolleg not required" },
      { label: "Begin your bachelor's", detail: "Public university, no tuition fee" },
    ],
  },
];

const masterPathways: Pathway[] = [
  {
    title: "Master's after an Indian bachelor's",
    desc: "A four-year Indian bachelor's is normally recognised for direct master's entry. From the Summer Semester 2027 intake, engineering, business, commerce and finance applicants also sit the dMAT as part of APS verification.",
    steps: [
      { label: "Bachelor's degree in India", detail: "In a related field" },
      { label: "APS certificate — and dMAT if required", detail: "We prepare the whole file" },
      { label: "University applications", detail: "Shortlisted to your profile, filed before deadline" },
      { label: "Begin your master's", detail: "Public university, no tuition fee" },
    ],
  },
  {
    title: "A second master's",
    desc: "Already hold an Indian master's? A second, specialised master's in Germany is a legitimate and well-trodden route — often the fastest way into a European role in your field.",
    steps: [
      { label: "Master's completed in India", detail: "Any recognised degree" },
      { label: "Apply for a second master's", detail: "Narrow the specialisation deliberately" },
      { label: "Begin in Germany", detail: "Public university, no tuition fee" },
    ],
  },
];

const benefits = [
  "No tuition fee at public universities in 15 of Germany's 16 states",
  "Baden-Württemberg is the exception — €1,500 per semester for non-EU students",
  "Semester contribution of roughly €100–€400, often including a transport pass",
  "Work rights of 20 hours a week during term",
  "18-month job-seeker visa after you graduate",
  "Degrees recognised across the EU and beyond",
  "A defined path from student visa to permanent residence",
];

const Timeline = ({ steps, accent }: { steps: Pathway["steps"]; accent: "brand" | "gold" }) => {
  const dot = accent === "brand" ? "bg-brand" : "bg-gold";
  const line = accent === "brand" ? "bg-brand/20" : "bg-gold/25";

  return (
    <ol className="mt-6">
      {steps.map((step, i) => (
        <li key={step.label} className="flex items-start gap-4">
          <div className="flex flex-col items-center self-stretch">
            <span
              className={`tnum grid h-7 w-7 shrink-0 place-items-center rounded-full ${dot} text-[0.6875rem] font-bold text-white`}
            >
              {i + 1}
            </span>
            {i < steps.length - 1 && <span className={`w-0.5 flex-1 ${line}`} aria-hidden="true" />}
          </div>
          <div className="pb-5">
            <p className="text-[0.9375rem] font-bold text-foreground">{step.label}</p>
            <p className="mt-0.5 text-[0.8125rem] text-ink-muted">{step.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
};

const StudentPathwaysSection = () => {
  const [tab, setTab] = useState<"bachelor" | "master">("bachelor");
  const pathways = tab === "bachelor" ? bachelorPathways : masterPathways;

  return (
    <section id="study" className="section bg-background">
      <div className="shell">
        <SectionHeading
          eyebrow="For students"
          icon={GraduationCap}
          title={
            <>
              The route to a <span className="text-brand">tuition-free</span> German degree
            </>
          }
          subtitle="Germany's public universities charge no tuition — to Indians and Germans alike, in 15 of the 16 federal states. There are four ways in, depending on where you are today."
        />

        {/* champion band */}
        <Reveal direction="scale" delay={100} className="mx-auto mt-12 max-w-2xl">
          <div className="ink-ground relative overflow-hidden rounded-2xl p-7 text-center shadow-warm-lg">
            <FlagSpine />
            <Award className="mx-auto h-9 w-9 text-gold-bright" aria-hidden="true" />
            <p className="mt-3 font-display text-xl font-extrabold text-white">
              100+ students enrolled at German public universities
            </p>
            <p className="mx-auto mt-2.5 max-w-xl text-sm leading-relaxed text-white/60">
              Public-university admissions are the core of what we do. Not private colleges with
              commission arrangements — government universities, where the tuition is zero and the
              degree carries weight.
            </p>
          </div>
        </Reveal>

        {/* tabs */}
        <div className="mt-12 flex justify-center">
          <div
            role="tablist"
            aria-label="Degree level"
            className="inline-flex gap-1.5 rounded-full border border-border bg-surface p-1.5 shadow-warm-sm"
          >
            {(
              [
                { id: "bachelor", label: "Bachelor's" },
                { id: "master", label: "Master's" },
              ] as const
            ).map((option) => (
              <button
                key={option.id}
                type="button"
                role="tab"
                aria-selected={tab === option.id}
                onClick={() => setTab(option.id)}
                className={`rounded-full px-6 py-2.5 text-sm font-bold transition-colors duration-300 ease-brand ${
                  tab === option.id
                    ? "bg-brand text-white shadow-warm-sm"
                    : "text-ink-muted hover:text-foreground"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* pathway cards — keyed on the tab so they re-animate on switch */}
        <div key={tab} className="mt-9 grid gap-6 md:grid-cols-2">
          {pathways.map((pathway, i) => (
            <Reveal as="article" key={pathway.title} direction="up" delay={i * 100}>
              <div className="h-full rounded-2xl border border-border bg-surface p-7 shadow-warm-sm transition-[transform,box-shadow] duration-300 ease-brand hover:-translate-y-1 hover:shadow-warm-lg">
                <h3 className="text-[1.1875rem] font-extrabold">{pathway.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{pathway.desc}</p>
                <Timeline steps={pathway.steps} accent={tab === "bachelor" ? "brand" : "gold"} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* the dMAT hand-off only appears where it's relevant */}
        {tab === "master" && (
          <Reveal direction="up" delay={80} className="mt-6">
            <a
              href={DMAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start gap-4 rounded-2xl border border-gold/40 bg-gold-soft p-6 transition-colors duration-300 hover:border-gold sm:flex-row sm:items-center"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/25 text-gold-deep">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex-1">
                <span className="block font-display text-[1.0625rem] font-extrabold text-foreground">
                  Sitting the dMAT for Summer Semester 2027?
                </span>
                <span className="mt-1 block text-sm text-ink-muted">
                  Our practice platform runs the full exam under real conditions — the free diagnostic
                  tells you where you actually stand.
                </span>
              </span>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-bold text-background">
                Open dMAT Practice
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 ease-brand group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </a>
          </Reveal>
        )}

        {/* benefits */}
        <Reveal direction="up" delay={100} className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-2xl border border-border bg-sunken p-7">
            <h3 className="text-center text-[1.0625rem] font-extrabold">
              What a German public university actually gives you
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <span className="text-[0.875rem] leading-snug text-ink-muted">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal direction="up" delay={140} className="mt-10 text-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-brand px-9 text-base font-bold text-white shadow-warm-lg hover:bg-brand-hover"
          >
            <a href={whatsapp("my German university admission")} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
              Check which pathway fits you
            </a>
          </Button>
          <p className="mt-3 text-sm text-ink-subtle">
            Free 30-minute assessment. We'll tell you honestly if you don't qualify yet.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default StudentPathwaysSection;
