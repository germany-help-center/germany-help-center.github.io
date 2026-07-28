/**
 * Scroll-driven animation primitives.
 *
 * Everything here is IntersectionObserver + CSS transitions — no animation
 * library, no scroll listener firing on every frame, and nothing that animates
 * a layout-triggering property. The visual contract (the `[data-reveal]` rules)
 * lives in src/index.css.
 *
 * All hooks short-circuit under `prefers-reduced-motion: reduce`: they render
 * the final state immediately instead of animating toward it.
 */
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

/** Tracks the user's motion preference, reacting if they change it mid-session. */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (!window.matchMedia) return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

interface InViewOptions {
  /** Fraction of the element that must be visible. */
  threshold?: number;
  /** Observer root margin — a negative bottom value delays the trigger. */
  rootMargin?: string;
  /** Keep firing on every entry/exit instead of unobserving after the first. */
  repeat?: boolean;
}

/**
 * Returns a ref to attach to an element, and whether it has entered the
 * viewport. Under reduced motion it reports `true` immediately.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  repeat = false,
}: InViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const reduced = useReducedMotion();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // No IntersectionObserver (or motion is unwanted) — show the end state.
    if (reduced || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (!repeat) observer.unobserve(entry.target);
        } else if (repeat) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reduced, repeat, rootMargin, threshold]);

  return { ref, inView, reduced };
}

type RevealDirection = "up" | "down" | "left" | "right" | "scale" | "none";

const OFFSETS: Record<RevealDirection, { x?: string; y?: string; scale?: string }> = {
  up: { y: "1.75rem" },
  down: { y: "-1.75rem" },
  left: { x: "2rem" },
  right: { x: "-2rem" },
  scale: { scale: "0.94" },
  none: {},
};

export interface RevealProps {
  children: ReactNode;
  /** Which way the element travels in from. */
  direction?: RevealDirection;
  /** Stagger, in milliseconds. */
  delay?: number;
  /** Element to render. Use `li`/`article` etc. to keep markup semantic. */
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  threshold?: number;
}

/**
 * Reveals its children once they scroll into view.
 *
 * ```tsx
 * <Reveal direction="up" delay={120}>…</Reveal>
 * ```
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  as: Tag = "div",
  className,
  style,
  threshold,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>(threshold === undefined ? undefined : { threshold });
  const offset = OFFSETS[direction];

  return (
    <Tag
      ref={ref}
      data-reveal=""
      data-revealed={inView ? "" : undefined}
      className={className}
      style={
        {
          "--reveal-x": offset.x ?? "0",
          "--reveal-y": offset.y ?? "0",
          "--reveal-scale": offset.scale ?? "1",
          "--reveal-delay": `${delay}ms`,
          ...style,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}

/**
 * Counts from 0 to `target` the first time the returned ref scrolls into view.
 *
 * Uses requestAnimationFrame with an ease-out curve so the number decelerates
 * into place rather than ticking linearly.
 */
export function useCountUp(target: number, { duration = 1600, decimals = 0 } = {}) {
  const { ref, inView, reduced } = useInView<HTMLSpanElement>({ threshold: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (reduced) {
      setValue(target);
      return;
    }

    let frame = 0;
    let start: number | null = null;

    const step = (now: number) => {
      if (start === null) start = now;
      const progress = Math.min((now - start) / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(target * eased);
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [duration, inView, reduced, target]);

  return { ref, display: value.toFixed(decimals) };
}

/**
 * Normalised scroll progress (0→1) through an element, for scrub-style effects
 * such as the timeline's growing spine. Passive listener, rAF-throttled.
 */
export function useScrollProgress<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (reduced) {
      setProgress(1);
      return;
    }

    let frame = 0;

    const measure = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight;
      // 0 when the element's top reaches 85% down the viewport,
      // 1 when its bottom passes 40% down.
      const span = rect.height + viewport * 0.45;
      const travelled = viewport * 0.85 - rect.top;
      setProgress(Math.min(Math.max(travelled / span, 0), 1));
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
  }, [reduced]);

  return { ref, progress };
}
