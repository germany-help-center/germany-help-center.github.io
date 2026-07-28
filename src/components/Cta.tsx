import { Check, Clock, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackCta } from "@/lib/analytics";
import { RESPONSE_TIME, TEL_DE, TEL_IN, bookingHref, whatsapp } from "@/lib/cta";

/**
 * Shared conversion components.
 *
 * The page had 24 contact CTAs but only one mechanic (WhatsApp) and no
 * reassurance next to any of them. These components fix both: every ask now
 * carries a response-time promise and a "free / no payment details" line, and
 * every click is attributed so CTA placement can be tuned on evidence instead
 * of instinct.
 */

interface CtaProps {
  /** Section id or similar — becomes the analytics label so placement is comparable. */
  location: string;
  /** What the visitor is enquiring about; goes into the prefilled WhatsApp text. */
  topic?: string;
  label?: string;
  className?: string;
  size?: "default" | "lg";
}

/** The page's primary action. */
export const WhatsAppCta = ({
  location,
  topic,
  label = "Book the free 30-minute assessment",
  className = "",
  size = "lg",
}: CtaProps) => (
  <Button
    asChild
    size={size}
    className={`rounded-full bg-brand px-8 font-bold text-white shadow-warm-lg hover:bg-brand-hover ${className}`}
  >
    <a
      href={bookingHref(topic)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCta("book", location)}
    >
      <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
      {label}
    </a>
  </Button>
);

/**
 * The reassurance line that belongs under every ask. Cheapest conversion lift
 * available: it answers "what actually happens if I press this?".
 */
export const CtaTrust = ({
  className = "",
  onDark = false,
  align = "center",
}: {
  className?: string;
  onDark?: boolean;
  align?: "center" | "left";
}) => (
  <ul
    className={`flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs ${
      align === "center" ? "justify-center" : ""
    } ${onDark ? "text-white/55" : "text-ink-subtle"} ${className}`}
  >
    <li className="inline-flex items-center gap-1.5">
      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
      {RESPONSE_TIME}
    </li>
    <li className="inline-flex items-center gap-1.5">
      <Check className="h-3.5 w-3.5" aria-hidden="true" />
      Free, no obligation
    </li>
    <li className="inline-flex items-center gap-1.5">
      <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
      No payment details asked
    </li>
  </ul>
);

/**
 * Primary + phone side by side.
 *
 * The phone option matters more than it looks: plenty of parents will call but
 * won't message a stranger, and until now both numbers were buried in the footer.
 */
export const CtaPair = ({
  location,
  topic,
  label,
  onDark = false,
  align = "center",
}: CtaProps & { onDark?: boolean; align?: "center" | "left" }) => (
  <div className={align === "center" ? "text-center" : ""}>
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:items-center ${
        align === "center" ? "sm:justify-center" : ""
      }`}
    >
      <WhatsAppCta location={location} topic={topic} label={label} />
      <Button
        asChild
        size="lg"
        variant="outline"
        className={`rounded-full px-7 font-bold ${
          onDark
            ? "border-white/25 bg-white/[0.06] text-white hover:bg-white/15 hover:text-white"
            : "border-border-strong"
        }`}
      >
        <a href={TEL_DE} onClick={() => trackCta("call_de", location)}>
          <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
          Call Germany
        </a>
      </Button>
      <Button
        asChild
        size="lg"
        variant="ghost"
        className={`rounded-full px-6 font-bold ${
          onDark ? "text-white/80 hover:bg-white/10 hover:text-white" : "text-ink-muted hover:text-foreground"
        }`}
      >
        <a href={TEL_IN} onClick={() => trackCta("call_in", location)}>
          <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
          Call India
        </a>
      </Button>
    </div>
    <CtaTrust className="mt-4" onDark={onDark} align={align} />
  </div>
);

/**
 * The smallest possible ask: no form, no commitment, one tap.
 *
 * Most visitors arrive researching (from a query like "blocked account amount
 * 2026") and are nowhere near ready to book a call. Without a step this small
 * they read, leave, and are never captured.
 */
export const ChecklistCta = ({
  location,
  onDark = false,
}: {
  location: string;
  onDark?: boolean;
}) => (
  <a
    href={whatsapp("the free document checklist for my route (no call needed yet)")}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => trackCta("checklist", location)}
    className={`group flex items-center gap-3.5 rounded-xl border p-4 transition-colors duration-200 ${
      onDark
        ? "border-white/12 bg-white/[0.04] hover:bg-white/[0.09]"
        : "border-border bg-surface hover:border-brand/30"
    }`}
  >
    <span
      className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${
        onDark ? "bg-white/10 text-gold-bright" : "bg-brand-soft text-brand"
      }`}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
    </span>
    <span className="min-w-0 flex-1">
      <span className={`block text-[0.9375rem] font-bold ${onDark ? "text-white" : "text-foreground"}`}>
        Not ready to talk yet?
      </span>
      <span className={`block text-[0.8125rem] ${onDark ? "text-white/55" : "text-ink-muted"}`}>
        Get the free document checklist on WhatsApp — one tap, no call.
      </span>
    </span>
  </a>
);
