import { useState } from "react";
import { Check, Copy, Linkedin, MessageCircle, Send, Share2 } from "lucide-react";
import { FlagSpine } from "@/components/Flag";
import { Reveal } from "@/lib/motion";
import { trackCta } from "@/lib/analytics";

/**
 * Share prompt.
 *
 * This is the site's actual distribution mechanic. Almost nobody forwards a
 * landing page URL, but Indian families forward WhatsApp messages constantly —
 * and the person a student most needs to convince is a parent who will never
 * find this page through Google. So the primary button composes the message for
 * them, and the framing is "send this to the person who's paying", not
 * "share us".
 */
const PAGE_URL = "https://germanyhelpcenter.com/";

const MESSAGE = [
  "Studying or working in Germany — this explains it properly:",
  "",
  "· Public universities charge no tuition (15 of 16 states)",
  "· What it actually costs: blocked account €11,904, insurance, semester fee",
  "· The new APS 70% Class 12 rule, and who needs the dMAT",
  "· A 2-minute check for whether you qualify",
  "",
  PAGE_URL,
].join("\n");

const ShareSection = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    trackCta("share_copy", "share_section");
    try {
      await navigator.clipboard.writeText(MESSAGE);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      /* clipboard blocked — the other buttons still work */
    }
  };

  const nativeShare = async () => {
    trackCta("share_native", "share_section");
    try {
      await navigator.share?.({ title: "Germany Help Center", text: MESSAGE, url: PAGE_URL });
    } catch {
      /* dismissed */
    }
  };

  return (
    <section aria-label="Share this page" className="bg-background pb-16">
      <div className="shell">
        <Reveal direction="up">
          <div className="ink-ground grain relative overflow-hidden rounded-2xl p-7 pl-9 shadow-warm-lg md:p-9 md:pl-11">
            <FlagSpine />

            <div className="grid gap-7 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <p className="flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-gold-bright">
                  <Share2 className="h-3.5 w-3.5" aria-hidden="true" />
                  Send it on
                </p>
                <h2 className="mt-3 text-[1.5rem] font-extrabold text-white md:text-[1.75rem]">
                  Know someone whose parents need convincing?
                </h2>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/65">
                  The person paying for this decision usually never finds a page like it. Forward the
                  numbers instead of arguing about them — the message is already written.
                </p>
              </div>

              <div className="grid gap-2.5">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCta("share_whatsapp", "share_section")}
                  className="flex items-center justify-center gap-2.5 rounded-full bg-whatsapp px-6 py-3.5 text-[0.9375rem] font-bold text-whatsapp-foreground transition-transform duration-200 ease-brand hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Share on WhatsApp
                </a>

                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(PAGE_URL)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackCta("share_linkedin", "share_section")}
                    className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.07] px-4 py-3 text-[0.875rem] font-bold text-white transition-colors hover:bg-white/15"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                    LinkedIn
                  </a>

                  <button
                    type="button"
                    onClick={copy}
                    className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.07] px-4 py-3 text-[0.875rem] font-bold text-white transition-colors hover:bg-white/15"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-gold-bright" aria-hidden="true" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" aria-hidden="true" />
                        Copy text
                      </>
                    )}
                  </button>
                </div>

                {/* Only useful where the OS actually provides a share sheet. */}
                {typeof navigator !== "undefined" && "share" in navigator && (
                  <button
                    type="button"
                    onClick={nativeShare}
                    className="flex items-center justify-center gap-2 rounded-full px-4 py-2 text-[0.8125rem] font-semibold text-white/60 transition-colors hover:text-white sm:hidden"
                  >
                    <Send className="h-3.5 w-3.5" aria-hidden="true" />
                    More sharing options
                  </button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ShareSection;
