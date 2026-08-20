import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FlagRail } from "@/components/Flag";
import ThemeToggle from "@/components/ThemeToggle";
import { DMAT_URL, WHATSAPP_PRIMARY } from "@/lib/cta";
import logo from "@/assets/logo.png";

/**
 * Desktop nav. Deliberately short: the bar shares a 1248px shell with the
 * wordmark, the theme toggle and the primary CTA, and nine items plus a second
 * button did not fit — the items compressed into each other instead of wrapping.
 * Everything omitted here is still reachable from the footer and the mobile sheet.
 */
/*
 * Two kinds of entry live in these arrays:
 *   "#id"    — a section of the homepage
 *   "/slug/" — a real route (docs/SEO-CONTENT-PLAN.md)
 *
 * Sitewide nav anchor text is the strongest internal relevance signal we control,
 * so the topics that own a page point at the page, not at the homepage teaser.
 * Before this, 100% of nav anchor text pointed at fragments of a page that no
 * longer holds those topics in full, and the four topic routes were reachable
 * only from the footer.
 *
 * ⚠️ The scrollspy below feeds these to querySelector, where "/slug/" is an
 * INVALID selector and throws. It filters to "#"-prefixed entries for that
 * reason — keep the filter if you add entries.
 */
const navLinks = [
  { label: "Why Germany", href: "#why-germany" },
  { label: "Mentor", href: "#mentor" },
  { label: "Qualify?", href: "#check" },
  { label: "Study", href: "/study-in-germany-from-india/" },
  { label: "Work", href: "/opportunity-card-chancenkarte/" },
  { label: "dMAT", href: "#dmat" },
  { label: "Costs", href: "/cost-of-studying-in-germany/" },
  { label: "FAQ", href: "#faq" },
];

/*
 * The mobile sheet has room for the full set — which is why APS lives here and
 * not on the desktop bar. The bar is capped at eight items by width (see the
 * comment above it); a ninth compresses the others rather than wrapping.
 */
const mobileNavLinks = [
  ...navLinks.slice(0, 5),
  { label: "APS India", href: "/aps-certificate-india/" },
  { label: "dMAT prep", href: "#dmat" },
  { label: "Services", href: "#services" },
  { label: "Costs", href: "/cost-of-studying-in-germany/" },
  { label: "Process", href: "#process" },
  { label: "About us", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  /*
   * Every nav item points at a section of the HOMEPAGE. Since the topic routes
   * exist (docs/SEO-CONTENT-PLAN.md), a visitor can land on /aps-certificate-india/
   * straight from search — and there a bare "#costs" scrolls nowhere, because that
   * section is not on the page. Off the homepage the link has to go home first.
   *
   * `navLinks[].href` stays a bare "#id" because the scrollspy below feeds it to
   * querySelector, where "/#id" would be an invalid selector.
   */
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  /** Route links pass through untouched; homepage anchors get sent home first. */
  const sectionHref = (href: string) =>
    href.startsWith("#") && !onHome ? `/${href}` : href;

  // Condense the bar and drive the reading-progress line.
  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const scrollY = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollY > 24);
      setProgress(max > 0 ? Math.min(scrollY / max, 1) : 0);
    };
    const onScroll = () => {
      if (frame === 0) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Highlight the nav item for whichever section owns the upper viewport.
  useEffect(() => {
    const sections = navLinks
      // Route entries ("/slug/") are not valid selectors — querySelector throws on them.
      .filter((link) => link.href.startsWith("#"))
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0 || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock the page behind the mobile sheet, and close it on Escape.
  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  /*
   * The hero now follows the theme (paper in light, ink in dark), so the header
   * can use ordinary theme colours in both states — no on-dark override needed.
   * Only the background treatment changes: translucent over the hero, solid and
   * bordered once scrolled.
   */
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <FlagRail />

      <div
        className={`transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-brand ${
          scrolled
            ? "border-b border-border bg-background/90 shadow-warm-sm backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-border/40 bg-background/45 backdrop-blur-[2px]"
        }`}
      >
        {/* gap-5, not gap-6: the bar's three children plus their gaps have to fit
            inside the shell's 1120px content box, or the right-hand cluster eats
            into the right padding and the bar stops looking symmetric. Measured
            headroom at gap-5 with the shortened tagline: ~54px. */}
        <div className="shell flex h-[4.25rem] items-center gap-5">
          <a href={onHome ? "#top" : "/"} className="group flex shrink-0 items-center gap-3" aria-label="Germany Help Center — home">
            <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-white p-1 shadow-warm-sm transition-transform duration-300 ease-brand group-hover:scale-105">
              <img src={logo} alt="" className="h-full w-full object-contain" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-[1.0625rem] font-extrabold tracking-tight text-foreground">
                Germany Help Center
              </span>
              {/* "· Since 2014" removed here on purpose — the tagline was the widest
                  element in the brand block (~75px of it) and the bar has no room to
                  spare. The 2014 claim still leads the hero chip and the mentor band. */}
              <span className="hidden text-[0.6875rem] uppercase tracking-[0.12em] text-ink-subtle sm:block">
                Immigration &amp; Education
              </span>
            </span>
          </a>

          {/* `shrink-0` on the nav and the actions cluster is load-bearing: the
              site-wide `min-width: 0` rule would otherwise let them compress into
              one another when the bar runs short of space. */}
          <nav className="ml-auto hidden shrink-0 items-center gap-0.5 xl:flex" aria-label="Sections">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={sectionHref(link.href)}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                    isActive ? "text-foreground" : "text-ink-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-brand transition-transform duration-300 ease-brand ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2 xl:ml-3">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>

            {/* The dMAT platform link lives in the nav ("dMAT"), the hero card and
                the footer — a second header button cost ~150px the bar didn't have. */}

            <Button asChild className="hidden rounded-full bg-brand font-bold text-white hover:bg-brand-hover sm:inline-flex">
              <a href={WHATSAPP_PRIMARY} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-1.5 h-4 w-4" aria-hidden="true" />
                Free Consultation
              </a>
            </Button>

            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface text-foreground xl:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* reading progress */}
        <div
          aria-hidden="true"
          className="h-px w-full origin-left bg-gradient-to-r from-brand via-flag-red to-gold-bright transition-opacity duration-300"
          style={{ transform: `scaleX(${progress})`, opacity: scrolled ? 1 : 0 }}
        />
      </div>

      {/* mobile sheet */}
      <div
        id="mobile-nav"
        ref={panelRef}
        className={`overflow-hidden border-b border-border bg-surface transition-[max-height,opacity] duration-300 ease-brand xl:hidden ${
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="shell flex flex-col py-4" aria-label="Sections">
          {mobileNavLinks.map((link, i) => (
            <a
              key={link.href}
              href={sectionHref(link.href)}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between border-b border-border/60 py-3 text-[0.9375rem] font-semibold text-foreground last:border-0"
              style={{ transitionDelay: `${i * 25}ms` }}
            >
              {link.label}
              <span className="tnum text-xs text-ink-subtle">{String(i + 1).padStart(2, "0")}</span>
            </a>
          ))}

          <div className="mt-4 grid gap-2.5">
            <Button asChild className="w-full rounded-full bg-brand font-bold text-white hover:bg-brand-hover">
              <a href={WHATSAPP_PRIMARY} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-1.5 h-4 w-4" aria-hidden="true" />
                Claim Free Consultation
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full rounded-full border-border-strong font-bold">
              <a href={DMAT_URL} target="_blank" rel="noopener noreferrer">
                dMAT Practice Platform
                <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <div className="pt-1 sm:hidden">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
