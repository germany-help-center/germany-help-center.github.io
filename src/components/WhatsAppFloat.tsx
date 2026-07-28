import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsapp } from "@/lib/cta";

/**
 * Floating WhatsApp CTA. Stays hidden over the hero — where the page already has
 * two large buttons — and slides in once the visitor has committed to scrolling.
 */
const WhatsAppFloat = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      setVisible(window.scrollY > window.innerHeight * 0.6);
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
    <a
      href={whatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp for a free consultation"
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full bg-whatsapp py-3.5 pl-4 pr-5 text-whatsapp-foreground shadow-warm-xl transition-[transform,opacity] duration-500 ease-brand hover:scale-105 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span className="relative grid place-items-center">
        <span
          className="absolute inset-0 animate-halo rounded-full bg-white/50"
          aria-hidden="true"
        />
        <MessageCircle className="relative h-5 w-5" aria-hidden="true" />
      </span>
      <span className="hidden text-sm font-bold sm:inline">Free consultation</span>
    </a>
  );
};

export default WhatsAppFloat;
