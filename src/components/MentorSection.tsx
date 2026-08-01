import {
  BadgeCheck,
  FileCheck,
  GraduationCap,
  Handshake,
  Languages,
  Linkedin,
  MessageCircle,
  Phone,
  Quote,
  ScanEye,
  Sparkles,
  Users,
  Video,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FlagChip, FlagSpine } from "@/components/Flag";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, useCountUp } from "@/lib/motion";
import { LINKEDIN_JIGAR, PHONE_IN, TEL_IN, whatsapp } from "@/lib/cta";
import portrait from "@/assets/jigar-vithani.jpg";
import portraitParesh from "@/assets/paresh-vithani.jpg";

/**
 * The founder's own journey, told as the argument for the whole business: he
 * did the exact thing this site advises, inside the same system, starting in
 * the same place.
 *
 * Everything here is checkable against the LinkedIn profile linked in the
 * section — that is the point. Do not add an unverifiable line to this list.
 */
const journey = [
  {
    year: "2014",
    title: "Landed in Germany as an international student",
    detail:
      "Same paperwork, same embassy queue, same first winter. The difference between advice from someone who has done it and someone who has read about it starts here.",
  },
  {
    year: "2014–2018",
    title: "Ravensburg-Weingarten University of Applied Sciences",
    detail:
      "A German public university — the exact route we now place students into. Hochschule Ravensburg-Weingarten (RWU), Baden-Württemberg.",
  },
  {
    year: "2018–today",
    title: "Working in German engineering industry",
    detail:
      "More than a decade in Baden-Württemberg, on the employer's side of the interview table. This is why the CV advice you get here is what German companies actually respond to.",
  },
  {
    year: "Now",
    title: "Mentoring the next intake",
    detail:
      "100+ visas approved and 100+ students enrolled at German public universities — guided personally, not handed to a call centre.",
  },
];

/** Genuine, German-issued credentials — the kind a sceptical parent can look up. */
const credentials = [
  { label: "Agile Coach (IHK)", note: "German Chamber of Commerce, 2025" },
  { label: "Professional Scrum Master I", note: "Scrum.org, 2024" },
  { label: "ISTQB Foundation Level", note: "2025" },
  { label: "Agiles Projektmanagement", note: "2025" },
];

const mentoring = [
  {
    icon: Video,
    title: "You talk to him, not to a sales desk",
    detail: "Every consultation is with Jigarbhai directly, on a German number, in German office hours.",
  },
  {
    icon: Users,
    title: "Parents are welcome on the call",
    detail: "Most families join. The person paying should hear the answers first-hand, not relayed.",
  },
  {
    icon: Languages,
    title: "English, Hindi, Gujarati and German",
    detail: "Explained in whichever language the difficult part lands best in.",
  },
];

/**
 * The India desk. Kept in this section rather than About because it belongs to
 * the same argument: the file is checked by two people, in two countries,
 * before it reaches a consulate.
 */
const pareshDuties = [
  {
    icon: FileCheck,
    title: "Documentation",
    detail:
      "Every certificate, translation, affidavit and bank statement is assembled and cross-checked in Surat before anything is submitted.",
  },
  {
    icon: Wallet,
    title: "Finance",
    detail:
      "Fees, blocked-account transfers and payment schedules — what is due, to whom, and when, in writing before you pay it.",
  },
  {
    icon: Handshake,
    title: "B2B relations",
    detail:
      "The working relationships on the India side: partner institutes, language schools and the referral network that keeps files moving.",
  },
];

const YearsInGermany = () => {
  // 2014 → today, computed rather than hardcoded so it can never go stale.
  const years = new Date().getFullYear() - 2014;
  const { ref, display } = useCountUp(years);
  return (
    <span className="tnum" ref={ref}>
      {display}
    </span>
  );
};

const MentorSection = () => {
  return (
    <section id="mentor" className="section bg-sunken">
      <div className="shell">
        <SectionHeading
          eyebrow="Meet your mentor"
          icon={Sparkles}
          title={
            <>
              He didn&apos;t read about this route. <span className="text-brand">He took it.</span>
            </>
          }
          subtitle="Most consultants selling Germany have never lived there. Jigar Rajeshbhai Vithani arrived as an international student in 2014, graduated from a German public university, and has worked in German industry ever since."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* ------------------------------------------------------- portrait */}
          <Reveal direction="left">
            <div className="lg:sticky lg:top-28">
              <div className="group relative">
                <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-warm-xl">
                  <img
                    src={portrait}
                    alt="Jigar Rajeshbhai Vithani, founder of Germany Help Center, in Baden-Württemberg, Germany"
                    width="800"
                    height="800"
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full object-cover transition-transform duration-1000 ease-brand group-hover:scale-[1.04]"
                  />
                  {/* name plate */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-ground via-ink-ground/85 to-transparent p-6 pt-16">
                    <p className="flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-gold-bright">
                      <FlagChip />
                      In Germany since 2014
                    </p>
                    <p className="mt-2 font-display text-xl font-extrabold text-white">
                      Jigar Rajeshbhai Vithani
                    </p>
                    <p className="mt-0.5 text-[0.8125rem] text-white/60">
                      Founder &amp; mentor · Baden-Württemberg
                    </p>
                  </div>
                </div>

                <div
                  className="absolute -bottom-3 right-0 -z-10 h-full w-full rounded-2xl bg-gold/25 transition-transform duration-500 ease-brand sm:-bottom-4 sm:-right-4 sm:group-hover:-bottom-3 sm:group-hover:-right-3"
                  aria-hidden="true"
                />
              </div>

              {/* the verification link — the whole point of this section */}
              <div className="mt-6 rounded-2xl border border-border bg-surface p-5 shadow-warm-sm">
                <p className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-ink-subtle">
                  Verify every line of this
                </p>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-muted">
                  Nothing on this page asks you to take our word for it. The education, the
                  certifications and the employment history are all on the record.
                </p>
                {/* `whitespace-normal` overrides shadcn Button's nowrap: at 402px this
                    label is 386px un-wrappable, which was setting the grid track width
                    and pushing the whole column past the viewport. */}
                <Button
                  asChild
                  className="mt-4 h-auto w-full whitespace-normal rounded-full bg-[#0A66C2] py-3 text-center font-bold text-white hover:bg-[#0A66C2]/90"
                >
                  <a href={LINKEDIN_JIGAR} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" aria-hidden="true" />
                    Check the LinkedIn profile
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>

          {/* --------------------------------------------------------- story */}
          <div>
            {/* headline numbers */}
            <Reveal direction="right">
              <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
                {[
                  { value: <YearsInGermany />, suffix: " yrs", label: "Living in Germany" },
                  { value: "100+", suffix: "", label: "Visas approved" },
                  { value: "100+", suffix: "", label: "Students placed" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-surface px-4 py-5 text-center">
                    <p className="font-display text-2xl font-extrabold leading-none text-foreground">
                      {stat.value}
                      <span className="text-brand">{stat.suffix}</span>
                    </p>
                    <p className="mt-1.5 text-[0.6875rem] uppercase tracking-[0.08em] text-ink-subtle">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* the journey */}
            <ol className="mt-9">
              {journey.map((step, i) => (
                <Reveal as="li" key={step.year} direction="right" delay={i * 90}>
                  <div className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <span className="grid h-3 w-3 shrink-0 place-items-center rounded-full bg-brand ring-4 ring-brand/15" />
                      {i < journey.length - 1 && (
                        <span className="w-0.5 flex-1 bg-gradient-to-b from-brand/30 to-gold/30" aria-hidden="true" />
                      )}
                    </div>
                    <div className="pb-8">
                      <p className="tnum text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-brand">
                        {step.year}
                      </p>
                      <h3 className="mt-1 text-[1.125rem] font-extrabold">{step.title}</h3>
                      <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-muted">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>

            {/* the pull quote */}
            <Reveal direction="up" delay={80}>
              <figure className="ink-ground grain relative overflow-hidden rounded-2xl p-7 pl-9 shadow-warm-lg">
                <FlagSpine />
                <Quote className="h-8 w-8 text-gold-bright/40" aria-hidden="true" />
                <blockquote className="mt-3 font-display text-[1.25rem] font-bold leading-snug text-white md:text-[1.4375rem]">
                  &ldquo;When I arrived in 2014, nobody was waiting at the airport to explain the
                  Anmeldung, the insurance or the semester contribution. I worked it out the slow way.
                  Every student I take on gets the version I wish I&apos;d had.&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-[0.8125rem] text-white/55">
                  — Jigarbhai Vithani, founder
                </figcaption>
              </figure>
            </Reveal>

            {/* credentials */}
            <Reveal direction="up" delay={120} className="mt-7">
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-warm-sm">
                <h3 className="flex items-center gap-2.5 text-[1.0625rem] font-extrabold">
                  <GraduationCap className="h-5 w-5 text-brand" aria-hidden="true" />
                  Education &amp; German credentials
                </h3>
                <p className="mt-3 flex items-start gap-2.5 rounded-xl border border-gold/35 bg-gold-soft p-4 text-[0.875rem] leading-relaxed text-ink-body">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" aria-hidden="true" />
                  <span>
                    <strong className="font-bold">
                      Ravensburg-Weingarten University of Applied Sciences (RWU)
                    </strong>
                    , 2014–2018 — a German public university, the same kind we place students into.
                  </span>
                </p>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {credentials.map((credential) => (
                    <li
                      key={credential.label}
                      className="rounded-xl border border-border bg-sunken px-4 py-3"
                    >
                      <p className="text-[0.875rem] font-bold text-foreground">{credential.label}</p>
                      <p className="mt-0.5 text-xs text-ink-subtle">{credential.note}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* what mentoring actually means */}
            <Reveal direction="up" delay={160} className="mt-7">
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-warm-sm">
                <h3 className="text-[1.0625rem] font-extrabold">What &ldquo;mentor&rdquo; means here</h3>
                <ul className="mt-4 space-y-4">
                  {mentoring.map((item) => (
                    <li key={item.title} className="flex items-start gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                        <item.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="font-bold text-foreground">{item.title}</p>
                        <p className="mt-0.5 text-[0.875rem] leading-relaxed text-ink-muted">
                          {item.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  className="mt-6 w-full rounded-full bg-brand text-base font-bold text-white shadow-warm-lg hover:bg-brand-hover"
                >
                  <a href={whatsapp("a mentoring call with Jigarbhai")} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                    Book 30 minutes with Jigarbhai — free
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ------------------------------------------------- the India desk */}
        <Reveal direction="up" className="mt-20">
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-warm-sm md:p-9">
            <div className="grid gap-8 md:grid-cols-[minmax(0,15rem)_1fr] md:gap-10">
              {/* portrait */}
              <div>
                <div className="group relative">
                  <div className="relative overflow-hidden rounded-2xl border border-border bg-sunken shadow-warm-lg">
                    <img
                      src={portraitParesh}
                      alt="Pareshbhai Vithani, co-founder of Germany Help Center, who runs the India desk in Surat, Gujarat"
                      width="800"
                      height="789"
                      loading="lazy"
                      decoding="async"
                      className="aspect-square w-full object-cover transition-transform duration-1000 ease-brand group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-ground via-ink-ground/85 to-transparent p-5 pt-14">
                      <p className="font-display text-lg font-extrabold text-white">
                        Pareshbhai Vithani
                      </p>
                      <p className="mt-0.5 text-[0.8125rem] text-white/60">
                        Co-founder · Surat, Gujarat
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href={TEL_IN}
                  className="mt-4 flex items-center justify-center gap-2 rounded-full border border-border bg-sunken px-4 py-3 text-[0.875rem] font-bold text-ink-body transition-colors duration-200 hover:border-brand/40 hover:text-brand"
                >
                  <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
                  <span className="tnum">{PHONE_IN}</span>
                </a>
                <p className="mt-2 text-center text-xs text-ink-subtle">
                  The India line. He takes the first call.
                </p>
              </div>

              {/* what he does */}
              <div>
                <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-brand">
                  And in Surat
                </p>
                <h3 className="mt-2 text-[1.5rem] font-extrabold md:text-[1.75rem]">
                  Nothing reaches an embassy{" "}
                  <span className="text-brand">without passing his desk.</span>
                </h3>
                <p className="mt-3 leading-relaxed text-ink-muted">
                  Half of this business is what happens on German soil. The other half is the file
                  itself — and that half is Pareshbhai&apos;s. He runs the India side from Surat:
                  the documents, the money, and the relationships that keep both moving.
                </p>

                <ul className="mt-7 grid gap-3 sm:grid-cols-3">
                  {pareshDuties.map((duty, i) => (
                    <Reveal as="li" key={duty.title} direction="up" delay={i * 80}>
                      <div className="h-full rounded-xl border border-border bg-sunken p-4">
                        <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-soft text-brand">
                          <duty.icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <p className="mt-3 font-bold text-foreground">{duty.title}</p>
                        <p className="mt-1 text-[0.8125rem] leading-relaxed text-ink-muted">
                          {duty.detail}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </ul>

                {/* the expertise claim, stated as a documentation record — not a
                    visa outcome. See the content guardrails in CLAUDE.md. */}
                <div className="mt-7 rounded-2xl border border-gold/35 bg-gold-soft p-5">
                  <h4 className="flex items-center gap-2.5 text-[1.0625rem] font-extrabold">
                    <ScanEye className="h-5 w-5 shrink-0 text-gold-deep" aria-hidden="true" />
                    A sharp eye for documentation
                  </h4>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-body">
                    Most files are not refused on merit — they are sent back over a missing
                    attestation, a translation nobody checked, or a date that doesn&apos;t match
                    across two pages. Across{" "}
                    <strong className="font-bold">100+ visa files</strong>, not one has come back
                    from the embassy with a query about a document. Once a file is in his hands,
                    it goes out complete.
                  </p>
                  <p className="mt-3 text-[0.8125rem] leading-relaxed text-ink-subtle">
                    The decision itself always belongs to the German mission and no outcome is
                    guaranteed. What we control is that the paperwork gives them nothing to hand
                    back.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default MentorSection;
