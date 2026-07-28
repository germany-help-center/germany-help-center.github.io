import {
  AlertCircle,
  Banknote,
  GraduationCap,
  HeartPulse,
  Landmark,
  ReceiptText,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/lib/motion";
import { whatsapp } from "@/lib/cta";

/**
 * Real numbers for the 2026 cycle. Third-party costs are paid to banks,
 * insurers, universities and the embassy — not to us. Stating them plainly is
 * the single most useful thing this page can do for a family doing the maths.
 */
interface Cost {
  icon: LucideIcon;
  label: string;
  amount: string;
  unit: string;
  note: string;
  /** Draws a gold border — used for the one figure that carries a caveat. */
  highlight?: boolean;
}

const costs: Cost[] = [
  {
    icon: GraduationCap,
    label: "Tuition at a public university",
    amount: "€0",
    unit: "in 15 of 16 states",
    note: "Germany charges no tuition at public universities — to Indians and Germans alike. One exception, and we'd rather you heard it from us: Baden-Württemberg bills non-EU students €1,500 per semester, which covers Heidelberg, Mannheim, Tübingen, Hohenheim and KIT.",
    highlight: true,
  },
  {
    icon: Landmark,
    label: "Blocked account (Sperrkonto)",
    amount: "€11,904",
    unit: "for the first year",
    note: "The Federal Foreign Office figure for 2026, derived from the BAföG rate. It is released back to you at €992 a month once you arrive — this is your own money held in escrow, not a fee.",
  },
  {
    icon: ReceiptText,
    label: "Semester contribution",
    amount: "€100–€400",
    unit: "per semester",
    note: "Paid to the university instead of tuition. At many universities it includes a regional public-transport pass, which on its own is usually worth more than the contribution.",
  },
  {
    icon: HeartPulse,
    label: "Student health insurance",
    amount: "€110–€165",
    unit: "per month",
    note: "Statutory public insurance at the reduced student rate, commonly around €141. Legally mandatory — you cannot enrol or get the visa without it. Over 30, expect materially more.",
  },
  {
    icon: Wallet,
    label: "Living costs",
    amount: "€950–€1,250",
    unit: "per month",
    note: "Rent is the whole variable. Munich and Frankfurt sit at the top of that range; Leipzig, Dresden and the smaller university towns at the bottom.",
  },
  {
    icon: Banknote,
    label: "Visa fee · APS · dMAT",
    amount: "€75 + ₹18,000",
    unit: "non-refundable",
    note: "€75 for the national visa (€37.50 for a minor), paid at your appointment. ₹18,000 to APS India, non-refundable whatever the outcome. Master's applicants who need the dMAT pay g.a.s.t. a further €150.",
  },
];

const CostsSection = () => {
  return (
    <section id="costs" className="section bg-background">
      <div className="shell">
        <SectionHeading
          eyebrow="Money, plainly"
          icon={Wallet}
          title={
            <>
              What studying in Germany <span className="text-brand">actually costs</span>
            </>
          }
          subtitle="Tuition-free doesn't mean free. Here are the real numbers for the 2026 cycle, so you can decide before anyone asks you for a rupee."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {costs.map((cost, i) => (
            <Reveal as="article" key={cost.label} direction="up" delay={i * 70}>
              <div
                className={`flex h-full flex-col rounded-2xl border bg-surface p-6 shadow-warm-sm transition-[transform,box-shadow] duration-300 ease-brand hover:-translate-y-1 hover:shadow-warm-lg ${
                  cost.highlight ? "border-gold/50" : "border-border"
                }`}
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-sunken text-brand">
                  <cost.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-4 text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-ink-subtle">
                  {cost.label}
                </p>
                <p className="tnum mt-1 font-display text-[1.75rem] font-extrabold leading-none tracking-tight text-foreground">
                  {cost.amount}
                </p>
                <p className="mt-1 text-xs font-semibold text-brand">{cost.unit}</p>
                <p className="mt-3.5 flex-1 text-[0.8125rem] leading-relaxed text-ink-muted">{cost.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* our own fee */}
        <Reveal direction="up" delay={120} className="mt-10">
          <div className="grid gap-7 rounded-2xl border border-gold/35 bg-gold-soft p-7 md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-9">
            <div>
              <h3 className="text-[1.375rem] font-extrabold">And what we charge</h3>
              <p className="mt-3 leading-relaxed text-ink-body">
                The first consultation and your profile assessment are free — no deposit, no
                &ldquo;registration fee&rdquo;. If you decide to go ahead, you get a{" "}
                <strong className="font-bold">fixed fee in writing</strong>, itemised by service,
                before any money moves. We don&apos;t take commission from private colleges, so the
                shortlist we build has nothing to do with what pays us.
              </p>
              <p className="mt-3.5 flex items-start gap-2 text-[0.8125rem] leading-relaxed text-ink-muted">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" aria-hidden="true" />
                Third-party figures above change annually and are set by the German authorities, not by
                us. We&apos;ll confirm the current numbers for your intake on the call.
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full rounded-full bg-foreground px-8 text-base font-bold text-background hover:bg-foreground/85"
            >
              <a href={whatsapp("a written fee quote")} target="_blank" rel="noopener noreferrer">
                Ask for a written quote
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CostsSection;
