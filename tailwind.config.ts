import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

/** Every colour resolves to a token declared in src/index.css. */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem", xl: "4rem" },
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        sans: ["Hanken Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Bricolage Grotesque", "Hanken Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "Consolas", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        "border-strong": "hsl(var(--border-strong))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        /* surfaces */
        surface: "hsl(var(--surface))",
        sunken: "hsl(var(--sunken))",
        "ink-ground": "hsl(var(--ink-ground))",

        /* text */
        "ink-body": "hsl(var(--ink-body))",
        "ink-muted": "hsl(var(--ink-muted))",
        "ink-subtle": "hsl(var(--ink-subtle))",

        /* brand */
        brand: {
          DEFAULT: "hsl(var(--brand))",
          hover: "hsl(var(--brand-hover))",
          soft: "hsl(var(--brand-soft))",
        },
        "flag-red": "hsl(var(--flag-red))",
        gold: {
          DEFAULT: "hsl(var(--gold))",
          hover: "hsl(var(--gold-hover))",
          bright: "hsl(var(--gold-bright))",
          deep: "hsl(var(--gold-deep))",
          soft: "hsl(var(--gold-soft))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          soft: "hsl(var(--success-soft))",
        },
        whatsapp: {
          DEFAULT: "hsl(var(--whatsapp))",
          foreground: "hsl(var(--whatsapp-foreground))",
        },

        /* shadcn/ui contract */
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        "2xl": "calc(var(--radius) + 0.25rem)",
        xl: "var(--radius)",
        lg: "calc(var(--radius) - 0.375rem)",
        md: "calc(var(--radius) - 0.625rem)",
        sm: "calc(var(--radius) - 0.875rem)",
      },
      boxShadow: {
        warm: "var(--shadow-md)",
        "warm-lg": "var(--shadow-lg)",
        "warm-xl": "var(--shadow-xl)",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.22, 0.7, 0.2, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        /* hero entrance */
        "rise-in": {
          from: { opacity: "0", transform: "translate3d(0, 1.75rem, 0)" },
          to: { opacity: "1", transform: "none" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        /* slow drift of the hero's colour fields — the only ambient motion */
        aurora: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)", opacity: "0.75" },
          "50%": { transform: "translate3d(3%, -2%, 0) scale(1.12)", opacity: "1" },
        },
        /* continuous logo/flag marquee */
        marquee: {
          from: { transform: "translate3d(0, 0, 0)" },
          to: { transform: "translate3d(-50%, 0, 0)" },
        },
        /* light sweeping across a gold surface */
        sheen: {
          "0%": { transform: "translateX(-120%) skewX(-18deg)" },
          "60%, 100%": { transform: "translateX(240%) skewX(-18deg)" },
        },
        /* attention pulse on the WhatsApp dot / live badges */
        halo: {
          "0%": { transform: "scale(1)", opacity: "0.55" },
          "70%, 100%": { transform: "scale(2.1)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-0.5rem)" },
        },
        "ken-burns": {
          from: { transform: "scale(1) translate3d(0, 0, 0)" },
          to: { transform: "scale(1.09) translate3d(-1.5%, -1%, 0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.28s cubic-bezier(0.22,0.7,0.2,1)",
        "accordion-up": "accordion-up 0.22s cubic-bezier(0.22,0.7,0.2,1)",
        "rise-in": "rise-in 0.85s cubic-bezier(0.22,0.7,0.2,1) both",
        "fade-in": "fade-in 0.9s cubic-bezier(0.22,0.7,0.2,1) both",
        aurora: "aurora 18s ease-in-out infinite",
        marquee: "marquee 42s linear infinite",
        sheen: "sheen 4.5s cubic-bezier(0.22,0.7,0.2,1) infinite",
        halo: "halo 2.4s cubic-bezier(0.22,0.7,0.2,1) infinite",
        float: "float 6s ease-in-out infinite",
        "ken-burns": "ken-burns 22s ease-out both",
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
} satisfies Config;
