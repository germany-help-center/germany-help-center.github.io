import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { FlagRail } from "@/components/Flag";
import { reviewedOn } from "@/lib/faqs";
import {
  DMAT_URL,
  EMAIL,
  MAILTO,
  MAPS_URL,
  OFFICE_ADDRESS,
  PHONE_DE,
  PHONE_IN,
  TEL_DE,
  TEL_IN,
  whatsapp,
} from "@/lib/cta";
import logo from "@/assets/logo.png";

const sectionLinks = [
  { label: "Why Germany", href: "#why-germany" },
  { label: "Study pathways", href: "#study" },
  { label: "APS India", href: "#aps" },
  { label: "dMAT prep", href: "#dmat" },
  { label: "Opportunity Card", href: "#opportunity-card" },
  { label: "Services", href: "#services" },
  { label: "Costs", href: "#costs" },
  { label: "Process", href: "#process" },
  { label: "About us", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative">
      <FlagRail />

      <div className="ink-ground grain relative overflow-hidden pt-16">
        <div
          className="absolute -left-32 top-0 h-80 w-80 animate-aurora rounded-full bg-brand/20 blur-[110px]"
          aria-hidden="true"
        />

        <div className="shell relative">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_1fr]">
            {/* brand + closing CTA */}
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-xl bg-white p-1.5">
                  <img src={logo} alt="" className="h-full w-full object-contain" loading="lazy" />
                </span>
                <span className="leading-tight">
                  <span className="block font-display text-lg font-extrabold text-white">
                    Germany Help Center
                  </span>
                  <span className="block text-[0.6875rem] uppercase tracking-[0.12em] text-white/45">
                    Building bridges, changing lives
                  </span>
                </span>
              </div>

              <p className="mt-5 max-w-md text-[0.9375rem] leading-relaxed text-white/60">
                Germany only. Public universities only. No university commission, ever — you are the only
                client we have. Led by Jigar Rajeshbhai Vithani, resident in Germany since 2014.
              </p>

              <a
                href={whatsapp()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-[0.9375rem] font-bold text-white transition-colors duration-200 hover:bg-brand-hover"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Book the free 30-minute assessment
              </a>

              <a
                href={DMAT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 flex max-w-md items-center gap-3 rounded-xl border border-white/12 bg-white/[0.04] p-4 transition-colors duration-200 hover:bg-white/[0.09]"
              >
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.8125rem] font-bold text-white">dMAT Practice</span>
                  <span className="block text-xs text-white/50">
                    Independent practice papers · not affiliated with g.a.s.t. or APS India
                  </span>
                </span>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-gold-bright transition-transform duration-200 ease-brand group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* nav */}
            <nav aria-label="Footer">
              <h2 className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-gold-bright">
                On this page
              </h2>
              <ul className="mt-4 space-y-2.5">
                {sectionLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[0.875rem] text-white/60 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* contact */}
            <div>
              <h2 className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-gold-bright">
                Talk to a human
              </h2>

              <ul className="mt-4 space-y-3.5 text-[0.875rem]">
                <li>
                  <a
                    href={TEL_DE}
                    className="flex items-start gap-2.5 text-white/65 transition-colors hover:text-white"
                  >
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-bright" aria-hidden="true" />
                    <span>
                      <span className="block font-semibold text-white">{PHONE_DE}</span>
                      <span className="text-xs text-white/45">
                        Jigarbhai Vithani · Nußloch, Germany
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={TEL_IN}
                    className="flex items-start gap-2.5 text-white/65 transition-colors hover:text-white"
                  >
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <span>
                      <span className="block font-semibold text-white">{PHONE_IN}</span>
                      <span className="text-xs text-white/45">Pareshbhai Vithani · Surat, India</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={whatsapp()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-white/65 transition-colors hover:text-white"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0 text-whatsapp" aria-hidden="true" />
                    WhatsApp us
                  </a>
                </li>
                <li>
                  <a
                    href={MAILTO}
                    className="flex items-center gap-2.5 break-all text-white/65 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-white/40" aria-hidden="true" />
                    {EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 text-white/55 transition-colors hover:text-white/80"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" aria-hidden="true" />
                    <span>
                      <span className="block text-xs uppercase tracking-[0.1em] text-white/40">
                        Registered address · no walk-in office
                      </span>
                      <span className="mt-1 block text-[0.8125rem] leading-snug">{OFFICE_ADDRESS}</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* legal */}
          <div className="mt-14 border-t border-white/10 py-8">
            <p className="text-xs leading-relaxed text-white/40">
              Germany Help Center prepares documentation and prepares applicants. We are not
              Rechtsanwälte and we do not provide legal advice on German residence law — for legal
              representation we refer you to a licensed German lawyer. We are not affiliated with,
              endorsed by, or connected to g.a.s.t., APS India, DAAD, uni-assist or any German
              authority. Visa decisions rest solely with the German mission; no outcome is guaranteed.
              Fees, exam dates and statutory amounts quoted on this page were verified on{" "}
              <time dateTime={reviewedOn} className="tnum">
                {reviewedOn}
              </time>{" "}
              and are set by third parties — confirm the current figures before you rely on them.
            </p>

            <div className="mt-6 flex flex-col items-start justify-between gap-4 text-xs text-white/45 sm:flex-row sm:items-center">
              <p>© {year} Germany Help Center. All rights reserved.</p>
              <div className="flex gap-5">
                <a href="/privacy-policy" className="transition-colors hover:text-white">
                  Privacy policy
                </a>
                <a href="#faq" className="transition-colors hover:text-white">
                  FAQ
                </a>
                <a href="#top" className="transition-colors hover:text-white">
                  Back to top
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
