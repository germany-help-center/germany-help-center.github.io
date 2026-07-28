import { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  ClipboardCheck,
  RotateCcw,
  Share2,
  ThumbsUp,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { ChecklistCta, CtaTrust } from "@/components/Cta";
import { Reveal } from "@/lib/motion";
import { trackCta } from "@/lib/analytics";
import { whatsapp } from "@/lib/cta";

/**
 * A client-side eligibility self-check.
 *
 * The rationale: visitors don't want to "contact us", they want to know whether
 * they qualify — and today the only way to find out is to message a stranger.
 * Answering it on the page converts the researcher who would otherwise read and
 * leave, and it arrives at the WhatsApp conversation already qualified.
 *
 * It is also the shareable unit. Nobody forwards a landing page; people forward
 * a result about themselves.
 *
 * Every rule below mirrors a fact stated elsewhere on the page (the APS 70%
 * rule, the Chancenkarte six-point threshold, the dMAT field list). It is a
 * screening indication, never a promise — the copy says so, and the verdict
 * always hands off to a human.
 */

type Goal = "bachelor" | "master" | "work" | "family";

interface Question {
  id: string;
  /** Only asked when this returns true for the answers so far. */
  when?: (a: Answers) => boolean;
  prompt: string;
  help?: string;
  options: { value: string; label: string }[];
}

type Answers = Record<string, string>;

const questions: Question[] = [
  {
    id: "goal",
    prompt: "What are you trying to do?",
    options: [
      { value: "bachelor", label: "Bachelor's in Germany" },
      { value: "master", label: "Master's in Germany" },
      { value: "work", label: "Work in Germany" },
      { value: "family", label: "Join family in Germany" },
    ],
  },
  // ---------------------------------------------------------------- students
  {
    id: "class12",
    when: (a) => a.goal === "bachelor",
    prompt: "What was your Class 12 aggregate?",
    help: "APS India has required a minimum of 70% for undergraduate applicants since 15 March 2026, across all boards.",
    options: [
      { value: "high", label: "70% or above" },
      { value: "low", label: "Below 70%" },
      { value: "pending", label: "Not written yet" },
    ],
  },
  {
    id: "college",
    when: (a) => a.goal === "bachelor" && a.class12 !== "low",
    prompt: "Have you completed a year of college in India?",
    help: "One completed year usually means direct entry — no Studienkolleg.",
    options: [
      { value: "yes", label: "Yes, at least one full year" },
      { value: "no", label: "No, straight from 12th" },
    ],
  },
  {
    id: "degreeField",
    when: (a) => a.goal === "master",
    prompt: "What field is your bachelor's degree in?",
    help: "This decides whether the dMAT applies to you.",
    options: [
      { value: "dmat", label: "Engineering, commerce, finance, economics or business" },
      { value: "other", label: "Something else" },
    ],
  },
  {
    id: "intake",
    when: (a) => a.goal === "master",
    prompt: "Which intake are you aiming for?",
    options: [
      { value: "ws2627", label: "Winter 2026/27" },
      { value: "ss27plus", label: "Summer 2027 or later" },
      { value: "unsure", label: "Not decided yet" },
    ],
  },
  // ------------------------------------------------------------ professionals
  {
    id: "qualification",
    when: (a) => a.goal === "work",
    prompt: "What's your highest qualification?",
    options: [
      { value: "degree", label: "University degree" },
      { value: "vocational", label: "Vocational training, 2+ years" },
      { value: "none", label: "Neither" },
    ],
  },
  {
    id: "experience",
    when: (a) => a.goal === "work" && a.qualification !== "none",
    prompt: "Relevant work experience?",
    options: [
      { value: "3plus", label: "3+ years in the last 7" },
      { value: "2plus", label: "2+ years in the last 5" },
      { value: "less", label: "Less than that" },
    ],
  },
  {
    id: "german",
    when: (a) => a.goal === "work" && a.qualification !== "none",
    prompt: "Your German level?",
    options: [
      { value: "b2", label: "B2 or above" },
      { value: "b1", label: "B1" },
      { value: "a2", label: "A2" },
      { value: "none", label: "None yet" },
    ],
  },
  {
    id: "age",
    when: (a) => a.goal === "work" && a.qualification !== "none",
    prompt: "How old are you?",
    options: [
      { value: "u35", label: "35 or under" },
      { value: "36to40", label: "36–40" },
      { value: "o40", label: "Over 40" },
    ],
  },
  // ------------------------------------------------------------------ family
  {
    id: "sponsor",
    when: (a) => a.goal === "family",
    prompt: "What permit does the person in Germany hold?",
    help: "This decides whether you need A1 German before you travel.",
    options: [
      { value: "bluecard", label: "EU Blue Card" },
      { value: "skilled", label: "Skilled Worker permit, with a degree" },
      { value: "student", label: "Student visa" },
      { value: "other", label: "Something else / not sure" },
    ],
  },
];

interface Verdict {
  tone: "good" | "caution" | "blocked";
  headline: string;
  detail: string;
  /** Concrete next steps, phrased as things they can act on. */
  points: string[];
  /** Prefills the WhatsApp handoff so the first message is already useful. */
  topic: string;
  /** Short line used for sharing — written to be forwarded. */
  share: string;
}

/** Chancenkarte points, mirroring the grid published in the Opportunity Card section. */
function chancenkartePoints(a: Answers): number {
  let points = 0;
  if (a.experience === "3plus") points += 3;
  else if (a.experience === "2plus") points += 2;
  if (a.german === "b2") points += 3;
  else if (a.german === "b1") points += 2;
  else if (a.german === "a2") points += 1;
  if (a.age === "u35") points += 2;
  else if (a.age === "36to40") points += 1;
  return points;
}

function evaluate(a: Answers): Verdict {
  // ------------------------------------------------------------- bachelor's
  if (a.goal === "bachelor") {
    if (a.class12 === "low") {
      return {
        tone: "blocked",
        headline: "Not this cycle — and we won't pretend otherwise",
        detail:
          "APS India requires a minimum 70% Class 12 aggregate for undergraduate applicants. Below that, a bachelor's application to a German public university will not clear the gate, and any consultant who takes your money anyway is taking your money.",
        points: [
          "Consider improving your Class 12 result, or a bachelor's in India followed by a master's in Germany",
          "The master's route has no Class 12 percentage requirement",
          "Ask us about the India-bachelor's → Germany-master's path — it's free to ask",
        ],
        topic: "the master's route, since my Class 12 is below 70%",
        share: "Found out the German APS rules for bachelor's applicants — 70% in Class 12 is now mandatory.",
      };
    }
    const direct = a.college === "yes";
    return {
      tone: "good",
      headline: direct ? "Direct entry looks realistic" : "Studienkolleg route looks realistic",
      detail: direct
        ? "One completed year of Indian college generally satisfies direct-entry requirements, so you can apply straight to a German public university — no Studienkolleg, no bridging year."
        : "Straight from 12th, the normal route is one Studienkolleg foundation year followed by the Feststellungsprüfung. That is the standard path, not a setback.",
      points: [
        "Tuition is €0 at public universities in 15 of 16 states (Baden-Württemberg charges €1,500/semester)",
        "You'll need an APS certificate before you can book a visa appointment",
        "Budget €11,904 for the blocked account — that's your own money, released monthly",
      ],
      topic: direct ? "direct bachelor's admission in Germany" : "the Studienkolleg route",
      share: "Just checked my route to a tuition-free German bachelor's degree.",
    };
  }

  // --------------------------------------------------------------- master's
  if (a.goal === "master") {
    const needsDmat = a.degreeField === "dmat" && a.intake !== "ws2627";
    return {
      tone: needsDmat ? "caution" : "good",
      headline: needsDmat
        ? "You'll almost certainly need the dMAT"
        : "Master's admission looks realistic",
      detail: needsDmat
        ? "Your field is on the dMAT list and you're targeting Summer 2027 or later, so the Digital Master Test becomes part of your APS documentation — and APS cannot finish your file without the certificate. Registration for the 2026 sitting closes 15 September 2026."
        : a.intake === "ws2627"
          ? "Winter 2026/27 applicants do not need the dMAT. Your route is APS verification, then applications, then the visa."
          : "Your field isn't on the dMAT list, so your route is APS verification, then applications, then the visa.",
      points: needsDmat
        ? [
            "Registration closes 15 Sep 2026 · exam 26 Sep 2026 · results 12 Oct 2026 · fee €150",
            "You're exempt if you completed APS registration before 29 June 2026",
            "Sit a free scored diagnostic on our dMAT platform before you pay anything",
          ]
        : [
            "APS certificate first — nothing can be booked before it exists",
            "uni-assist deadlines are commonly 15 Jan (summer) and 15 Jul (winter)",
            "Tuition is €0 at public universities outside Baden-Württemberg",
          ],
      topic: needsDmat ? "my master's application and the dMAT" : "my master's application in Germany",
      share: needsDmat
        ? "Turns out I need to sit the dMAT for my German master's application. Registration closes 15 Sep 2026."
        : "Just checked my route to a tuition-free German master's degree.",
    };
  }

  // ------------------------------------------------------- Opportunity Card
  if (a.goal === "work") {
    if (a.qualification === "none") {
      return {
        tone: "blocked",
        headline: "The Opportunity Card needs a recognised qualification",
        detail:
          "The Chancenkarte requires either a university degree or state-recognised vocational training of at least two years. Without one of those, the points test never begins.",
        points: [
          "A German-recognised vocational qualification is a real route worth exploring",
          "Some employers sponsor training positions (Ausbildung) directly",
          "Tell us your trade and we'll say honestly whether there's a path",
        ],
        topic: "whether there's any route for me without a formal qualification",
        share: "Checked my eligibility for Germany's Opportunity Card.",
      };
    }
    const points = chancenkartePoints(a);
    const clears = points >= 6;
    return {
      tone: clears ? "good" : "caution",
      headline: clears
        ? `You score about ${points} of the 6 points needed`
        : `You score about ${points} of 6 — close, with a clear gap`,
      detail: clears
        ? "On the criteria you've given, you clear the Chancenkarte threshold. Note that if your degree is recognised as fully equivalent in Germany, you skip the points test altogether."
        : "You're short on the indicative grid, and the fastest lever is almost always German. Moving from no German to B1 is worth two points; B2 is worth three.",
      points: clears
        ? [
            "You apply from India and keep your current job until the visa is approved",
            "The card gives you 12 months in Germany to find a qualified role",
            "Partial recognition of your qualification is worth a further 4 points",
          ]
        : [
            "German A2 = 1 point · B1 = 2 · B2 or above = 3 — we teach A1 to B2 online",
            "Partial recognition of your qualification is worth 4 points on its own",
            "English at C1 adds 1 point",
          ],
      topic: `the Opportunity Card — I score around ${points} points`,
      share: `Scored ~${points} points on Germany's Opportunity Card criteria (6 needed).`,
    };
  }

  // ------------------------------------------------------------ family route
  const exempt = a.sponsor === "bluecard" || a.sponsor === "skilled";
  return {
    tone: "good",
    headline: exempt ? "You likely don't need A1 German first" : "A1 German is likely required first",
    detail: exempt
      ? "Since June 2024, spouses of EU Blue Card holders and of degree-qualified Skilled Worker permit holders can join without proving A1 German before arrival. That removes months from your timeline."
      : "On this route the joining spouse generally needs a certified A1 German qualification before the visa is issued. A missing certificate is grounds for immediate refusal, so it's the first thing to start.",
    points: exempt
      ? [
          "Marriage and birth documents still need proper legalisation",
          "Proof of accommodation and income for the sponsor is required",
          "Learning German anyway makes the first year vastly easier",
        ]
      : [
          "We teach A1 online, in live small groups — it's usually 3–4 months",
          "It must be a certified qualification, not an app score",
          "Start the document legalisation in parallel; it's the slow part",
        ],
    topic: "a family reunion visa",
    share: "Checked the German family-reunion rules — the A1 German requirement has exemptions now.",
  };
}

const TONE = {
  good: { icon: ThumbsUp, ring: "border-success/40", bg: "bg-success-soft", text: "text-success" },
  caution: { icon: AlertTriangle, ring: "border-gold/50", bg: "bg-gold-soft", text: "text-gold-deep" },
  blocked: { icon: XCircle, ring: "border-brand/40", bg: "bg-brand-soft", text: "text-brand" },
} as const;

const EligibilityCheck = () => {
  const [answers, setAnswers] = useState<Answers>({});
  const [copied, setCopied] = useState(false);

  /** Questions that apply given the answers so far. */
  const active = useMemo(
    () => questions.filter((q) => !q.when || q.when(answers)),
    [answers],
  );

  const answeredCount = active.filter((q) => answers[q.id]).length;
  const current = active.find((q) => !answers[q.id]);
  const done = !current && answeredCount > 0;
  const verdict = done ? evaluate(answers) : null;
  const progress = active.length > 0 ? answeredCount / active.length : 0;

  const choose = (id: string, value: string) => {
    setAnswers((prev) => {
      // Changing an earlier answer must drop anything that depended on it.
      const next: Answers = { ...prev, [id]: value };
      const index = questions.findIndex((q) => q.id === id);
      for (const q of questions.slice(index + 1)) delete next[q.id];
      return next;
    });
  };

  const back = () => {
    const answered = active.filter((q) => answers[q.id]);
    const last = answered[answered.length - 1];
    if (!last) return;
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[last.id];
      return next;
    });
  };

  const reset = () => {
    setAnswers({});
    setCopied(false);
  };

  const share = async () => {
    if (!verdict) return;
    trackCta("share_result", "eligibility");
    const text = `${verdict.share} Worth a look if you're considering Germany: https://germanyhelpcenter.com/#check`;
    try {
      if (navigator.share) {
        await navigator.share({ title: "Germany Help Center", text });
        return;
      }
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      /* the visitor dismissed the share sheet — nothing to do */
    }
  };

  return (
    <section id="check" className="section bg-background">
      <div className="shell">
        <SectionHeading
          eyebrow="Two minutes, no form"
          icon={ClipboardCheck}
          title={
            <>
              Before you talk to anyone, find out{" "}
              <span className="text-brand">where you stand</span>
            </>
          }
          subtitle="Six questions at most. No email, no phone number, no signup — the answer appears on this page. It's a screening indication against the published rules, not a promise."
        />

        <Reveal direction="up" delay={100} className="mx-auto mt-12 max-w-2xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-warm-lg">
            {/* progress */}
            <div className="h-1 w-full bg-sunken" aria-hidden="true">
              <div
                className="h-full origin-left rounded-r-full bg-gradient-to-r from-brand to-gold transition-transform duration-500 ease-brand"
                style={{ transform: `scaleX(${done ? 1 : progress})` }}
              />
            </div>

            <div className="p-7 sm:p-8">
              {/* ------------------------------------------------ question */}
              {current && (
                <div key={current.id} className="animate-fade-in">
                  <p className="tnum text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-brand">
                    Question {answeredCount + 1} of about {active.length}
                  </p>
                  <h3 className="mt-2 text-[1.375rem] font-extrabold">{current.prompt}</h3>
                  {current.help && (
                    <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-muted">{current.help}</p>
                  )}

                  <div className="mt-6 grid gap-2.5">
                    {current.options.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => choose(current.id, option.value)}
                        className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-surface px-5 py-4 text-left text-[0.9375rem] font-semibold text-foreground transition-all duration-200 ease-brand hover:-translate-y-0.5 hover:border-brand hover:bg-brand-soft"
                      >
                        {option.label}
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 border-border transition-colors group-hover:border-brand">
                          <span className="h-2 w-2 scale-0 rounded-full bg-brand transition-transform group-hover:scale-100" />
                        </span>
                      </button>
                    ))}
                  </div>

                  {answeredCount > 0 && (
                    <button
                      type="button"
                      onClick={back}
                      className="mt-5 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-ink-subtle transition-colors hover:text-foreground"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                      Back
                    </button>
                  )}
                </div>
              )}

              {/* -------------------------------------------------- verdict */}
              {verdict && (
                <div className="animate-fade-in" role="status">
                  {(() => {
                    const tone = TONE[verdict.tone];
                    return (
                      <>
                        <div className={`flex items-start gap-4 rounded-xl border ${tone.ring} ${tone.bg} p-5`}>
                          <tone.icon className={`mt-0.5 h-6 w-6 shrink-0 ${tone.text}`} aria-hidden="true" />
                          <div>
                            <h3 className="text-[1.25rem] font-extrabold">{verdict.headline}</h3>
                            <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-body">
                              {verdict.detail}
                            </p>
                          </div>
                        </div>

                        <ul className="mt-5 space-y-2.5">
                          {verdict.points.map((point) => (
                            <li key={point} className="flex items-start gap-2.5">
                              <CheckCircle2
                                className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                                aria-hidden="true"
                              />
                              <span className="text-[0.875rem] leading-relaxed text-ink-muted">{point}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
                          <Button
                            asChild
                            size="lg"
                            className="rounded-full bg-brand font-bold text-white shadow-warm-lg hover:bg-brand-hover"
                          >
                            <a
                              href={whatsapp(verdict.topic)}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => trackCta("book", "eligibility_result")}
                            >
                              Discuss this — free
                            </a>
                          </Button>
                          <Button
                            type="button"
                            size="lg"
                            variant="outline"
                            onClick={share}
                            className="rounded-full border-border-strong font-bold"
                          >
                            <Share2 className="mr-2 h-4 w-4" aria-hidden="true" />
                            {copied ? "Link copied" : "Share this result"}
                          </Button>
                        </div>

                        <CtaTrust className="mt-4" align="left" />

                        <div className="mt-6 border-t border-border pt-5">
                          <ChecklistCta location="eligibility_result" />
                        </div>

                        <button
                          type="button"
                          onClick={reset}
                          className="mt-5 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-ink-subtle transition-colors hover:text-foreground"
                        >
                          <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                          Start again
                        </button>
                      </>
                    );
                  })()}
                </div>
              )}
            </div>
          </div>

          <p className="mt-4 text-center text-xs leading-relaxed text-ink-subtle">
            Indicative only, based on the rules published as of July 2026. Recognition of your
            qualification is decided by the German authorities, and the visa decision is the German
            mission&apos;s alone — never ours.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default EligibilityCheck;
