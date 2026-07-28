import {
  AlertTriangle,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  FileBadge,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FlagSpine } from "@/components/Flag";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/lib/motion";
import { DMAT_URL, whatsapp } from "@/lib/cta";

const documents = [
  "School leaving certificates and mark sheets, all years",
  "University transcripts and degree certificate, if you have one",
  "Passport copy and a recent photograph",
  "Proof of the APS fee payment",
  "Language certificates, where your programme requires them",
];

const deadlines = [
  {
    label: "Winter semester (starts October)",
    detail: "uni-assist deadline commonly 15 July — many programmes set earlier dates",
  },
  {
    label: "Summer semester (starts April)",
    detail: "uni-assist deadline commonly 15 January",
  },
  {
    label: "uni-assist's own advice",
    detail: "Apply at least 8 weeks before the deadline; processing is running 6–7 weeks",
  },
  {
    label: "APS verification",
    detail: "Typically 2–6 weeks, but 10+ if a university is slow to confirm your records",
  },
];

const ApsSection = () => {
  return (
    <section id="aps" className="section bg-sunken">
      <div className="shell">
        <SectionHeading
          eyebrow="APS India"
          icon={FileBadge}
          title={
            <>
              The gate that comes <span className="text-brand">before everything else</span>
            </>
          }
          subtitle="Every Indian applicant needs an APS certificate, and you cannot book a visa appointment without it. Getting the order of operations wrong is the single most common way an application loses a semester."
        />

        <div className="mt-14 grid gap-7 lg:grid-cols-[1.1fr_0.9fr]">
          {/* ------------------------------------------------- the 70% rule */}
          <Reveal direction="left">
            <div className="relative h-full overflow-hidden rounded-2xl border border-brand/40 bg-surface p-7 pl-8 shadow-warm-md">
              <FlagSpine />

              <p className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-brand">
                <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
                New rule · in force since 15 March 2026
              </p>

              <h3 className="mt-4 text-[1.5rem] font-extrabold md:text-[1.75rem]">
                Bachelor&apos;s applicants now need{" "}
                <span className="tnum text-brand">70%</span> in Class 12
              </h3>

              <p className="mt-4 leading-relaxed text-ink-muted">
                APS India introduced a minimum 70% aggregate in Class 12 for undergraduate applicants,
                announced on 23 February 2026 and effective from 15 March 2026. It applies across{" "}
                <strong className="font-semibold text-foreground">
                  every board — CBSE, ICSE and all state boards
                </strong>{" "}
                — and takes effect from the Winter Semester 2026/27 intake.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-sunken p-4">
                  <p className="text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-ink-subtle">
                    Affected
                  </p>
                  <p className="mt-1.5 text-[0.875rem] leading-snug text-ink-body">
                    Bachelor&apos;s applicants — both the Studienkolleg route and the direct-entry route
                    after a year of Indian college.
                  </p>
                </div>
                <div className="rounded-xl border border-success/30 bg-success-soft p-4">
                  <p className="text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-success">
                    Not affected
                  </p>
                  <p className="mt-1.5 text-[0.875rem] leading-snug text-ink-body">
                    Master&apos;s and PhD applicants. Applications submitted before 15 March 2026 are
                    assessed under the previous rules.
                  </p>
                </div>
              </div>

              <p className="mt-6 rounded-xl border border-border bg-background p-4 text-[0.875rem] leading-relaxed text-ink-muted">
                <strong className="font-bold text-foreground">We&apos;ll say it in the first call:</strong>{" "}
                below 70%, a bachelor&apos;s application to a German public university is not viable this
                cycle. We&apos;d rather lose the enquiry than take a fee for a file that cannot clear a
                hard gate.
              </p>

              <p className="mt-5 text-xs leading-relaxed text-ink-subtle">
                APS is issued by the Academic Evaluation Centre at the German Embassy in New Delhi. The fee
                is <strong className="font-semibold">₹18,000 and non-refundable</strong>, whatever the
                outcome. Always confirm current rules on aps-india.de — we are not affiliated with APS
                India.
              </p>
            </div>
          </Reveal>

          {/* ------------------------------------- documents, calendar, dMAT */}
          <div className="space-y-6">
            <Reveal direction="right">
              <div className="rounded-2xl border border-border bg-surface p-7 shadow-warm-sm">
                <h3 className="flex items-center gap-2.5 text-xl font-extrabold">
                  <ShieldCheck className="h-5 w-5 text-brand" aria-hidden="true" />
                  What goes into the file
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {documents.map((doc) => (
                    <li key={doc} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      <span className="text-[0.875rem] leading-relaxed text-ink-muted">{doc}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs leading-relaxed text-ink-subtle">
                  We assemble and check the whole set before submission. We never fabricate a document,
                  and we never submit anything you haven&apos;t seen first.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={100}>
              <div className="rounded-2xl border border-border bg-surface p-7 shadow-warm-sm">
                <h3 className="flex items-center gap-2.5 text-xl font-extrabold">
                  <CalendarDays className="h-5 w-5 text-brand" aria-hidden="true" />
                  Work backwards from the intake
                </h3>
                <ul className="mt-4 space-y-3.5">
                  {deadlines.map((deadline) => (
                    <li key={deadline.label} className="border-l-2 border-gold/50 pl-4">
                      <p className="text-[0.875rem] font-bold text-foreground">{deadline.label}</p>
                      <p className="mt-0.5 text-[0.8125rem] leading-snug text-ink-muted">
                        {deadline.detail}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs leading-relaxed text-ink-subtle">
                  Individual programmes set their own, often earlier, deadlines — always check the
                  university&apos;s page. Verified July 2026.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={180}>
              <div className="rounded-2xl border border-gold/40 bg-gold-soft p-6">
                <p className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-gold-deep">
                  Master&apos;s applicants
                </p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-body">
                  From Summer Semester 2027, engineering, commerce, finance, economics and business
                  applicants also sit the <strong className="font-bold">dMAT</strong> as part of APS. It
                  does not replace document verification — it&apos;s an additional element, and APS
                  can&apos;t finish without it.
                </p>
                <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                  <Button asChild className="rounded-full bg-foreground font-bold text-background hover:bg-foreground/85">
                    <a href="#dmat">See the dMAT details</a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full border-border-strong font-bold">
                    <a href={DMAT_URL} target="_blank" rel="noopener noreferrer">
                      Practice platform
                      <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal direction="up" delay={100} className="mt-10 text-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-brand px-9 text-base font-bold text-white shadow-warm-lg hover:bg-brand-hover"
          >
            <a href={whatsapp("my APS India application")} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
              Check if your marks clear the gate
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default ApsSection;
