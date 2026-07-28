import { Globe2 } from "lucide-react";
import { Reveal } from "@/lib/motion";

/*
 * Flags are imported as eight individual SVG assets rather than via
 * `flag-icons/css/flag-icons.min.css`. That stylesheet inlines 400 base64 SVGs
 * and ships ~470 KB of render-blocking CSS for the handful of flags below —
 * the largest single Core Web Vitals cost on the page. Vite emits these as
 * cacheable files instead.
 */
import inFlag from "flag-icons/flags/4x3/in.svg";
import lvFlag from "flag-icons/flags/4x3/lv.svg";
import caFlag from "flag-icons/flags/4x3/ca.svg";
import gbFlag from "flag-icons/flags/4x3/gb.svg";
import czFlag from "flag-icons/flags/4x3/cz.svg";
import plFlag from "flag-icons/flags/4x3/pl.svg";
import nlFlag from "flag-icons/flags/4x3/nl.svg";
import dkFlag from "flag-icons/flags/4x3/dk.svg";

const countries = [
  { name: "India", flag: inFlag, type: "Students & professionals" },
  { name: "Latvia", flag: lvFlag, type: "Spouse visa" },
  { name: "Canada", flag: caFlag, type: "Travel visa" },
  { name: "United Kingdom", flag: gbFlag, type: "Trade-fair visa" },
  { name: "Czech Republic", flag: czFlag, type: "Students & professionals" },
  { name: "Poland", flag: plFlag, type: "Spouse visa" },
  { name: "Netherlands", flag: nlFlag, type: "Travel visa" },
  { name: "Denmark", flag: dkFlag, type: "Trade-fair visa" },
];

const CountriesSection = () => {
  return (
    <section
      id="countries"
      className="border-y border-border bg-background py-14"
      aria-label="Countries served"
    >
      <div className="shell">
        <Reveal direction="up" className="text-center">
          <p className="eyebrow justify-center">
            <Globe2 className="h-3.5 w-3.5" aria-hidden="true" />
            Global reach, one destination
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-[clamp(1.375rem,2.6vw,1.875rem)] font-extrabold">
            Clients from eight countries, all headed to the same place
          </h2>
        </Reveal>
      </div>

      {/* Marquee: the track is duplicated and translated -50%, so the loop is
          seamless. Pauses on hover so the labels stay readable. */}
      <div className="edge-fade group relative mt-9 overflow-hidden" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-3.5 group-hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 gap-3.5">
              {countries.map((country) => (
                <li
                  key={country.name}
                  className="flex w-56 items-center gap-3 rounded-xl border border-border bg-surface px-5 py-3.5 shadow-warm-sm"
                >
                  <img
                    src={country.flag}
                    alt=""
                    width="28"
                    height="21"
                    loading="lazy"
                    decoding="async"
                    className="h-[1.3125rem] w-7 shrink-0 rounded-[3px] object-cover shadow-warm-sm"
                  />
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-bold text-foreground">
                      {country.name}
                    </span>
                    <span className="block truncate text-xs text-ink-subtle">{country.type}</span>
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Accessible, static equivalent of the decorative marquee above. */}
      <p className="sr-only">
        Countries served: {countries.map((country) => `${country.name} (${country.type})`).join(", ")}.
      </p>
    </section>
  );
};

export default CountriesSection;
