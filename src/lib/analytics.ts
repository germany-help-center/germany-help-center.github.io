/**
 * GA4, behind a GDPR consent gate.
 *
 * The business is established in Germany, so Google Analytics runs only after
 * explicit, opt-in consent — no pre-consent network call, no cookies set until
 * the visitor agrees. The gtag snippet is injected at runtime rather than sitting
 * in index.html precisely so that "no consent" means "never loaded", not
 * "loaded and asked not to look".
 *
 * TODO(owner): paste the real GA4 Measurement ID below. While it is empty,
 * nothing loads and no banner is shown — the site behaves exactly as it does
 * today, so this is safe to ship un-configured.
 */
export const GA_MEASUREMENT_ID = "";

const CONSENT_KEY = "ghc-analytics-consent";

export type ConsentState = "granted" | "denied" | "unset";

export const analyticsConfigured = GA_MEASUREMENT_ID.length > 0;

export function readConsent(): ConsentState {
  if (typeof localStorage === "undefined") return "unset";
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    return stored === "granted" || stored === "denied" ? stored : "unset";
  } catch {
    return "unset";
  }
}

function persistConsent(state: Exclude<ConsentState, "unset">) {
  try {
    localStorage.setItem(CONSENT_KEY, state);
  } catch {
    /* private browsing — the choice applies to this session only */
  }
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let loaded = false;

/** Injects the gtag script. Idempotent, and a no-op without an ID. */
function loadGtag() {
  if (loaded || !analyticsConfigured || typeof document === "undefined") return;
  loaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    // The site is one page with in-page anchors; automatic pageviews are enough.
    send_page_view: true,
  });
}

export function grantConsent() {
  persistConsent("granted");
  loadGtag();
}

export function denyConsent() {
  persistConsent("denied");
}

/** Call once on mount: loads GA only if consent was already granted. */
export function initAnalytics() {
  if (readConsent() === "granted") loadGtag();
}

/**
 * Records a conversion-intent click.
 *
 * Every contact CTA on the page routes through this so the owner can finally
 * see which of the (many) CTAs actually produce enquiries — without that, tuning
 * CTA placement is guesswork. Silently does nothing before consent.
 *
 * @param action  What the visitor did: "whatsapp" | "call" | "book" | "dmat" | …
 * @param label   Which CTA — usually the section id, so placement is comparable.
 */
export function trackCta(action: string, label: string) {
  window.gtag?.("event", "cta_click", {
    event_category: "engagement",
    cta_action: action,
    cta_location: label,
  });
}
