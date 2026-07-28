import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Briefcase,
  ChevronDown,
  GraduationCap,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FlagChip } from "@/components/Flag";
import { CtaTrust } from "@/components/Cta";
import { Reveal, useCountUp, useReducedMotion } from "@/lib/motion";
import { trackCta } from "@/lib/analytics";
import { DMAT_URL, TEL_DE, bookingHref } from "@/lib/cta";
import heroImg from "@/assets/germany-hero.jpg";
import studentsImg from "@/assets/students-germany.jpg";
import professionalImg from "@/assets/professional-germany.jpg";
import castleImg from "@/assets/germany-castle.jpg";

/*
 * Unlike the always-dark anchor bands elsewhere on the page, the hero follows
 * the theme: warm paper in light mode, ink in dark. Hence the `dark:` variants
 * throughout rather than fixed white text.
 */

/** The three journeys the consultancy actually handles, cycled in the H1. */
const ROTATING = ["Study", "Work", "Settle"];

const quickActions = [
  { icon: GraduationCap, label: "Study", href: "#study" },
  { icon: Briefcase, label: "Work", href: "#opportunity-card" },
  { icon: Users, label: "Family", href: "#services" },
  { icon: Plane, label: "Visit", href: "#services" },
  { icon: BookOpen, label: "Learn German", href: "#services" },
];

const trustChips = [
  { icon: BadgeCheck, label: "100+ visas approved" },
  { icon: GraduationCap, label: "100+ students placed" },
  { icon: ShieldCheck, label: "Germany-only. Nothing else." },
];

/** Small photo strip — the faces behind the numbers, not stock decoration. */
const proofImages = [
  { src: studentsImg, alt: "Students on a German university campus" },
  { src: professionalImg, alt: "A professional at work in Germany" },
  { src: castleImg, alt: "A castle in the German countryside" },
];

/** Cross-fades between the rotating words without reflowing the headline. */
const RotatingWord = () => {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % ROTATING.length), 2600);
    return () => window.clearInterval(timer);
  }, [reduced]);

  return (
    <span className="relative inline-grid align-bottom">
      {/* An invisible copy of the longest word reserves the width so nothing jumps. */}
      <span aria-hidden="true" className="invisible col-start-1 row-start-1">
        {ROTATING.reduce((a, b) => (a.length >= b.length ? a : b))}
      </span>
      {ROTATING.map((word, i) => (
        <span
          key={word}
          aria-hidden={i === index ? undefined : "true"}
          className="text-wash col-start-1 row-start-1 text-left transition-[opacity,transform,filter] duration-700 ease-brand"
          style={{
            opacity: i === index ? 1 : 0,
            transform: i === index ? "none" : "translateY(0.35em)",
            filter: i === index ? "blur(0)" : "blur(6px)",
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
};

const Stat = ({ target, suffix, label }: { target: number; suffix: string; label: string }) => {
  const { ref, display } = useCountUp(target);
  return (
    <div>
      <p className="tnum text-2xl font-bold text-foreground dark:text-white">
        <span ref={ref}>{display}</span>
        <span className="text-brand dark:text-gold-bright">{suffix}</span>
      </p>
      <p className="mt-0.5 text-[0.6875rem] uppercase tracking-[0.1em] text-ink-subtle dark:text-white/50">
        {label}
      </p>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="top" className="hero-ground grain relative isolate overflow-hidden">
      {/* Photography. In light mode it dissolves upward into the paper (see
          .hero-photo); in dark mode it stays a full-bleed texture. */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <img
          src={heroImg}
          alt=""
          // Deliberately not lazy — it's the hero ground. No fetchpriority hint
          // either: the LCP element is the headline, and the image shouldn't
          // compete with the webfonts for early bandwidth.
          decoding="async"
          className="hero-photo h-full w-full animate-ken-burns object-cover object-bottom opacity-[0.16] mix-blend-multiply dark:opacity-[0.28] dark:mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background dark:from-ink-ground/70 dark:via-ink-ground/55 dark:to-ink-ground" />
        {/* two slow-drifting colour fields */}
        <div className="absolute -left-1/4 top-0 h-[36rem] w-[36rem] animate-aurora rounded-full bg-brand/[0.07] blur-[110px] dark:bg-brand/25" />
        <div
          className="absolute -right-24 bottom-0 h-[30rem] w-[30rem] animate-aurora rounded-full bg-gold/[0.12] blur-[120px] dark:bg-gold/15"
          style={{ animationDelay: "-7s" }}
        />
      </div>

      <div className="shell grid items-center gap-14 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-36">
        {/* ---------------------------------------------------------------- copy */}
        <div>
          <div className="animate-rise-in inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-gold-soft py-1.5 pl-2 pr-4 text-[0.8125rem] font-bold text-gold-deep backdrop-blur-sm dark:border-white/15 dark:bg-white/[0.07] dark:text-gold-bright">
            <FlagChip />
            Germany-only immigration &amp; education specialists
          </div>

          <h1
            className="display-title animate-rise-in mt-6 text-foreground dark:text-white"
            style={{ animationDelay: "80ms" }}
          >
            <RotatingWord /> in Germany —
            <br />
            <span className="text-foreground/95 dark:text-white/95">
              guided by someone who lives there.
            </span>
          </h1>

          <p
            className="animate-rise-in mt-7 max-w-xl text-lg leading-relaxed text-ink-muted dark:text-white/70"
            style={{ animationDelay: "170ms" }}
          >
            Tuition-free public universities, the Opportunity Card, family reunion and Schengen visas —
            handled end to end by{" "}
            <strong className="font-semibold text-foreground dark:text-white">
              Jigar Rajeshbhai Vithani
            </strong>
            , resident in Germany since 2014. One country, done properly.
          </p>

          <div
            className="animate-rise-in mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "260ms" }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-brand px-8 text-base font-bold text-white shadow-warm-lg hover:bg-brand-hover"
            >
              <a
                href={bookingHref("my move to Germany")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCta("book", "hero")}
              >
                <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                Book the free 30-min assessment
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border-strong px-7 text-base font-bold backdrop-blur-sm dark:border-white/25 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/15 dark:hover:text-white"
            >
              <a href="#check">
                Check if you qualify — 2 min
                <ArrowUpRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full px-6 text-base font-bold text-ink-muted hover:text-foreground dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <a href={TEL_DE} onClick={() => trackCta("call_de", "hero")}>
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                Call Germany
              </a>
            </Button>
          </div>

          <CtaTrust className="mt-5" onDark="auto" align="left" />

          <ul
            className="animate-rise-in mt-9 flex flex-wrap gap-2.5"
            style={{ animationDelay: "340ms" }}
          >
            {trustChips.map((chip) => (
              <li
                key={chip.label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3.5 py-2 text-[0.8125rem] font-bold text-foreground shadow-warm-sm backdrop-blur-sm dark:border-white/15 dark:bg-white/[0.07] dark:text-white dark:shadow-none"
              >
                <chip.icon className="h-4 w-4 text-brand dark:text-gold-bright" aria-hidden="true" />
                {chip.label}
              </li>
            ))}
          </ul>

          <p
            className="animate-rise-in mt-7 flex items-center gap-1.5 text-sm text-ink-subtle dark:text-white/45"
            style={{ animationDelay: "420ms" }}
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Nußloch, Baden-Württemberg · Surat, Gujarat · 100% online
          </p>
        </div>

        {/* -------------------------------------------------------------- visual */}
        <Reveal direction="scale" delay={200} className="relative">
          <div className="glass-auto relative overflow-hidden rounded-2xl p-6 shadow-warm-xl sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-brand dark:text-gold-bright">
                  Track record
                </p>
                <p className="mt-1 font-display text-xl font-extrabold text-foreground dark:text-white">
                  A decade on the ground
                </p>
              </div>
              <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-success/15 dark:bg-success/20">
                <span className="absolute inset-0 animate-halo rounded-full bg-success/40" aria-hidden="true" />
                <BadgeCheck className="relative h-5 w-5 text-success dark:text-white" aria-hidden="true" />
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 border-y border-border py-5 dark:border-white/10 sm:grid-cols-4 sm:gap-x-2">
              <Stat target={100} suffix="+" label="Visas" />
              <Stat target={100} suffix="+" label="Students" />
              <Stat target={10} suffix="+ yrs" label="In Germany" />
              <Stat target={8} suffix="+" label="Countries" />
            </div>

            {/* the faces behind the numbers */}
            <div className="mt-5 flex items-center gap-3">
              <div className="flex -space-x-3">
                {proofImages.map((image, i) => (
                  <img
                    key={image.alt}
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-12 w-12 rounded-full border-2 border-surface object-cover shadow-warm-md transition-transform duration-300 ease-brand hover:scale-110 hover:border-gold dark:border-white/20 dark:hover:border-gold-bright"
                    style={{ zIndex: proofImages.length - i }}
                  />
                ))}
              </div>
              <p className="text-[0.8125rem] leading-snug text-ink-muted dark:text-white/60">
                Students, professionals and families
                <br />
                already living the German chapter.
              </p>
            </div>

            <a
              href={DMAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCta("dmat", "hero")}
              className="group mt-6 flex items-center gap-3 rounded-xl border border-gold/40 bg-gold-soft p-3.5 transition-colors duration-200 hover:border-gold dark:border-gold-bright/25 dark:bg-gold-bright/10 dark:hover:bg-gold-bright/20"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gold/20 text-gold-deep dark:bg-gold-bright/20 dark:text-gold-bright">
                <GraduationCap className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[0.8125rem] font-bold text-foreground dark:text-white">
                  New: dMAT practice platform
                </span>
                <span className="block truncate text-xs text-ink-muted dark:text-white/55">
                  Timed mock papers for APS India applicants
                </span>
              </span>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-gold-deep transition-transform duration-200 ease-brand group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-gold-bright"
                aria-hidden="true"
              />
            </a>
          </div>
        </Reveal>
      </div>

      {/* quick actions + scroll cue */}
      <div className="shell relative pb-10">
        <Reveal direction="up" delay={120} className="flex flex-wrap items-center gap-2.5">
          <span className="mr-1 text-xs font-bold uppercase tracking-[0.12em] text-ink-subtle dark:text-white/40">
            I want to
          </span>
          {quickActions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 text-sm font-semibold text-ink-body shadow-warm-sm backdrop-blur-sm transition-all duration-200 ease-brand hover:-translate-y-0.5 hover:border-brand/40 hover:text-foreground dark:border-white/12 dark:bg-white/[0.05] dark:text-white/85 dark:shadow-none dark:hover:border-gold-bright/40 dark:hover:bg-white/12 dark:hover:text-white"
            >
              <action.icon
                className="h-4 w-4 text-brand transition-transform duration-200 ease-brand group-hover:scale-110 dark:text-gold-bright"
                aria-hidden="true"
              />
              {action.label}
            </a>
          ))}
        </Reveal>

        <a
          href="#why-germany"
          className="mt-10 flex flex-col items-center gap-1 text-ink-subtle/70 transition-colors hover:text-foreground dark:text-white/30 dark:hover:text-white/70"
          aria-label="Scroll to why Germany"
        >
          <span className="text-[0.625rem] font-bold uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-float" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
