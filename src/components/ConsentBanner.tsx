import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  analyticsConfigured,
  denyConsent,
  grantConsent,
  initAnalytics,
  readConsent,
} from "@/lib/analytics";

/**
 * Opt-in analytics consent.
 *
 * The business is established in Germany, so GA4 needs explicit consent before
 * anything loads or any cookie is set. "Decline" is a real, equally weighted
 * choice — a banner where refusing is harder than accepting is not consent.
 *
 * Renders nothing at all until a GA4 measurement ID is configured, so the site
 * shows no banner while analytics is unconfigured.
 */
const ConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!analyticsConfigured) return;
    initAnalytics();
    if (readConsent() === "unset") setVisible(true);
  }, []);

  if (!analyticsConfigured || !visible) return null;

  const decide = (accepted: boolean) => {
    if (accepted) grantConsent();
    else denyConsent();
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Analytics consent"
      className="fixed inset-x-3 bottom-24 z-50 mx-auto max-w-xl rounded-2xl border border-border bg-surface p-5 shadow-warm-xl sm:bottom-6 sm:left-6 sm:right-auto sm:mx-0"
    >
      <div className="flex items-start gap-3.5">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-sunken text-ink-muted">
          <Cookie className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-[0.9375rem] font-bold text-foreground">Help us improve this page?</p>
          <p className="mt-1 text-[0.8125rem] leading-relaxed text-ink-muted">
            We&apos;d like to use Google Analytics to see which parts of this page people find useful.
            Nothing loads and no cookie is set unless you agree, and declining changes nothing about the
            site.{" "}
            <a href="/privacy-policy" className="font-semibold text-brand underline">
              Privacy policy
            </a>
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <Button
              type="button"
              onClick={() => decide(true)}
              className="rounded-full bg-brand font-bold text-white hover:bg-brand-hover"
            >
              Allow analytics
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => decide(false)}
              className="rounded-full border-border-strong font-bold"
            >
              Decline
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
