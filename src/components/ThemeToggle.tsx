import { useCallback, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";
const STORAGE_KEY = "ghc-theme";

/** Reads the theme the inline bootstrap script in index.html already applied. */
function currentTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

/**
 * Light/dark switch. The initial class is set by a blocking inline script in
 * index.html so there is no flash of the wrong theme; this component only ever
 * flips it afterwards and remembers the explicit choice.
 */
const ThemeToggle = ({ onDark = false }: { onDark?: boolean }) => {
  const [theme, setTheme] = useState<Theme>(currentTheme);

  // Follow the OS until the visitor makes an explicit choice.
  useEffect(() => {
    if (!window.matchMedia) return;
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      if (localStorage.getItem(STORAGE_KEY)) return;
      const next: Theme = event.matches ? "dark" : "light";
      document.documentElement.classList.toggle("dark", next === "dark");
      setTheme(next);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* private browsing — the choice just won't persist */
    }
    setTheme(next);
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className={`grid h-10 w-10 place-items-center rounded-lg border transition-colors duration-200 ${
        onDark
          ? "border-white/20 bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
          : "border-border bg-surface text-ink-muted hover:border-border-strong hover:text-foreground"
      }`}
    >
      {theme === "dark" ? (
        <Sun className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
      ) : (
        <Moon className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeToggle;
