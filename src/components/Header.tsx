import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FlagRail } from "@/components/Flag";
import ThemeToggle from "@/components/ThemeToggle";
import { DMAT_URL, WHATSAPP_PRIMARY } from "@/lib/cta";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Why Germany", href: "#why-germany" },
  { label: "Your mentor", href: "#mentor" },
  { label: "Do I qualify?", href: "#check" },
  { label: "Study", href: "#study" },
  { label: "Work", href: "#opportunity-card" },
  { label: "dMAT Prep", href: "#dmat" },
  { label: "Costs", href: "#costs" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

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
        <div className="shell flex h-[4.25rem] items-center gap-6">
          <a href="#top" className="group flex shrink-0 items-center gap-3" aria-label="Germany Help Center — home">
            <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-white p-1 shadow-warm-sm transition-transform duration-300 ease-brand group-hover:scale-105">
              <img src={logo} alt="" className="h-full w-full object-contain" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-[1.0625rem] font-extrabold tracking-tight text-foreground">
                Germany Help Center
              </span>
              <span className="hidden text-[0.6875rem] uppercase tracking-[0.12em] text-ink-subtle sm:block">
                Immigration &amp; Education · Since 2014
              </span>
            </span>
          </a>

          <nav className="ml-auto hidden items-center gap-1 xl:flex" aria-label="Sections">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
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

          <div className="ml-auto flex items-center gap-2 xl:ml-0">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>

            <Button
              asChild
              variant="outline"
              className="hidden rounded-full border-border-strong font-bold lg:inline-flex"
            >
              <a href={DMAT_URL} target="_blank" rel="noopener noreferrer">
                dMAT Practice
                <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>

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
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
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
