import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

/**
 * The consent gate is a legal promise, not a preference.
 *
 * Section 6 of the privacy policy states that no Google script is requested and
 * no data reaches Google until the visitor explicitly agrees. These tests are
 * what stop that promise from quietly becoming false — for instance if someone
 * "simplifies" things by pasting Google's own gtag snippet into index.html,
 * which fires on page load.
 *
 * `analytics.ts` keeps module-level state (`loaded`), so each case re-imports it
 * through `vi.resetModules()` to get a clean slate.
 */
const gtagScripts = () =>
  Array.from(document.querySelectorAll<HTMLScriptElement>("script[src]")).filter((s) =>
    s.src.includes("googletagmanager.com/gtag/js"),
  );

const loadModule = async () => {
  vi.resetModules();
  return import("@/lib/analytics");
};

beforeEach(() => {
  localStorage.clear();
  document.head.querySelectorAll("script[src]").forEach((s) => s.remove());
  delete (window as { gtag?: unknown }).gtag;
  delete (window as { dataLayer?: unknown }).dataLayer;
});

afterEach(() => {
  localStorage.clear();
});

describe("analytics consent gate", () => {
  it("is configured with a well-formed GA4 measurement ID", async () => {
    const { GA_MEASUREMENT_ID, analyticsConfigured } = await loadModule();
    expect(analyticsConfigured).toBe(true);
    expect(GA_MEASUREMENT_ID).toMatch(/^G-[A-Z0-9]{10}$/);
  });

  it("reports no consent decision on a first visit", async () => {
    const { readConsent } = await loadModule();
    expect(readConsent()).toBe("unset");
  });

  it("loads nothing on init while consent is undecided", async () => {
    const { initAnalytics } = await loadModule();
    initAnalytics();
    expect(gtagScripts()).toHaveLength(0);
    expect(window.gtag).toBeUndefined();
  });

  it("loads nothing on init after the visitor declines", async () => {
    const { denyConsent, initAnalytics, readConsent } = await loadModule();
    denyConsent();
    expect(readConsent()).toBe("denied");
    initAnalytics();
    expect(gtagScripts()).toHaveLength(0);
    expect(window.gtag).toBeUndefined();
  });

  it("loads the Google script only once consent is granted", async () => {
    const { grantConsent, readConsent, GA_MEASUREMENT_ID } = await loadModule();
    expect(gtagScripts()).toHaveLength(0);

    grantConsent();

    expect(readConsent()).toBe("granted");
    const scripts = gtagScripts();
    expect(scripts).toHaveLength(1);
    expect(scripts[0].src).toContain(GA_MEASUREMENT_ID);
    expect(scripts[0].async).toBe(true);
  });

  it("remembers consent across visits without re-asking", async () => {
    const first = await loadModule();
    first.grantConsent();

    // A fresh page load: new module instance, same localStorage.
    document.head.querySelectorAll("script[src]").forEach((s) => s.remove());
    const second = await loadModule();
    expect(second.readConsent()).toBe("granted");
    second.initAnalytics();
    expect(gtagScripts()).toHaveLength(1);
  });

  it("never injects the script twice", async () => {
    const { grantConsent, initAnalytics } = await loadModule();
    grantConsent();
    grantConsent();
    initAnalytics();
    expect(gtagScripts()).toHaveLength(1);
  });

  it("anonymises IP addresses in the config call", async () => {
    const { grantConsent, GA_MEASUREMENT_ID } = await loadModule();
    grantConsent();
    const calls = (window.dataLayer ?? []) as unknown[][];
    const config = calls.find((c) => c[0] === "config");
    expect(config).toBeDefined();
    expect(config?.[1]).toBe(GA_MEASUREMENT_ID);
    expect((config?.[2] as { anonymize_ip?: boolean })?.anonymize_ip).toBe(true);
  });

  it("swallows CTA tracking calls made before consent", async () => {
    const { trackCta } = await loadModule();
    // Every CTA on the page calls this on click; it must never throw, and must
    // not send anything, when the visitor hasn't consented.
    expect(() => trackCta("book", "hero")).not.toThrow();
    expect(window.dataLayer).toBeUndefined();
  });

  it("records CTA clicks once consent is granted", async () => {
    const { grantConsent, trackCta } = await loadModule();
    grantConsent();
    trackCta("whatsapp", "mobile_bar");

    const calls = (window.dataLayer ?? []) as unknown[][];
    const event = calls.find((c) => c[0] === "event" && c[1] === "cta_click");
    expect(event).toBeDefined();
    expect(event?.[2]).toMatchObject({
      cta_action: "whatsapp",
      cta_location: "mobile_bar",
    });
  });
});
