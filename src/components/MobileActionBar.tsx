import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { trackCta } from "@/lib/analytics";
import { RESPONSE_TIME, TEL_IN, whatsapp } from "@/lib/cta";

/**
 * Persistent Call + WhatsApp bar, mobile only.
 *
 * Most of this site's traffic is mobile, and the previous single floating
 * button gave one small tap target and one mechanic. A two-up bar roughly
 * doubles the tap area and, more importantly, gives phone-first visitors — a
 * large share of the parents who actually pay — a door of their own.
 *
 * Hidden over the hero (which already has two large buttons) and hidden at
 * `sm` and up, where `WhatsAppFloat` takes over.
 */
const MobileActionBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      setVisible(window.scrollY > window.innerHeight * 0.55);
    };
    const onScroll = () => {
      if (frame === 0) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl transition-transform duration-500 ease-brand sm:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <p className="pt-2 text-center text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-ink-subtle">
        {RESPONSE_TIME} · Free, no obligation
      </p>
      <div className="grid grid-cols-2 gap-2.5 p-3 pt-2">
        <a
          href={TEL_IN}
          onClick={() => trackCta("call_in", "mobile_bar")}
          className="flex items-center justify-center gap-2 rounded-full border border-border-strong px-4 py-3.5 text-[0.9375rem] font-bold text-foreground"
        >
          <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
          Call us
        </a>
        <a
          href={whatsapp()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackCta("whatsapp", "mobile_bar")}
          className="flex items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-3.5 text-[0.9375rem] font-bold text-whatsapp-foreground"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default MobileActionBar;
