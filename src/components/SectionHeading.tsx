import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/lib/motion";

interface SectionHeadingProps {
  /** Uppercase kicker above the title. */
  eyebrow: string;
  icon?: LucideIcon;
  /** The section's H2. Wrap the emphasised words in a `<span>` from the caller. */
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  /** Set on dark grounds to flip the text colours. */
  onDark?: boolean;
  className?: string;
}

/**
 * The one heading block every section uses: eyebrow → H2 → gold rule → subtitle.
 * Keeping it shared is what makes the page read as a single considered document
 * rather than a stack of independently styled panels.
 */
const SectionHeading = ({
  eyebrow,
  icon: Icon,
  title,
  subtitle,
  align = "center",
  onDark = false,
  className = "",
}: SectionHeadingProps) => {
  const centered = align === "center";

  return (
    <div
      className={`max-w-2xl ${centered ? "mx-auto text-center" : ""} ${className}`}
    >
      <Reveal direction="up">
        <p className={`eyebrow ${onDark ? "text-gold-bright" : ""}`}>
          {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
          {eyebrow}
        </p>
      </Reveal>

      <Reveal direction="up" delay={90}>
        <h2
          className={`section-title mt-3 ${onDark ? "text-white" : ""} rule ${
            centered ? "rule-center" : ""
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal direction="up" delay={170}>
          <p
            className={`mt-5 text-[1.0625rem] leading-relaxed ${
              onDark ? "text-white/70" : "text-ink-muted"
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
};

export default SectionHeading;
