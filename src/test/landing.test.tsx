import { describe, expect, it, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Index from "@/pages/Index";
import { faqs } from "@/lib/faqs";
import {
  DMAT_URL,
  LINKEDIN_JIGAR,
  PHONE_DE,
  PHONE_IN,
  RESPONSE_TIME,
  bookingHref,
} from "@/lib/cta";

/**
 * Smoke + guardrail tests for the landing page.
 *
 * The smoke test exists because the page is one long tree of presentational
 * components — a broken import or a bad hook only shows up at render time, and
 * `vite build` will happily succeed anyway.
 *
 * The rest guard the claims and disclaimers that must not silently disappear:
 * the dMAT non-affiliation notice is a hard requirement, and the two proof
 * blocks that were removed (Google rating, Instagram embeds) must stay removed
 * until there is something real to link to.
 */
beforeAll(() => {
  // jsdom implements neither, and several components construct one on mount.
  class MockObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }
  Object.defineProperty(window, "IntersectionObserver", {
    writable: true,
    value: MockObserver,
  });
  Object.defineProperty(window, "ResizeObserver", {
    writable: true,
    value: MockObserver,
  });
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }),
  });
});

const renderPage = () =>
  render(
    <MemoryRouter>
      <Index />
    </MemoryRouter>,
  );

describe("landing page", () => {
  it("renders without throwing", () => {
    expect(() => renderPage()).not.toThrow();
  });

  it("has exactly one h1", () => {
    renderPage();
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("renders every section the header navigates to", () => {
    const { container } = renderPage();
    for (const id of [
      "top",
      "why-germany",
      "mentor",
      "check",
      "study",
      "aps",
      "dmat",
      "opportunity-card",
      "services",
      "costs",
      "process",
      "about",
      "stories",
      "faq",
    ]) {
      expect(container.querySelector(`#${id}`), `missing section #${id}`).not.toBeNull();
    }
  });

  it("renders each FAQ question from the shared source", () => {
    renderPage();
    for (const faq of faqs) {
      expect(screen.getByText(faq.question), `missing FAQ: ${faq.question}`).toBeInTheDocument();
    }
  });
});

describe("required disclosures", () => {
  it("carries the dMAT non-affiliation disclaimer in visible body text", () => {
    renderPage();
    expect(
      screen.getByText(/not affiliated with, endorsed by, or connected to g\.a\.s\.t\. or aps india/i),
    ).toBeInTheDocument();
  });

  it("discloses the Baden-Württemberg tuition exception wherever tuition-free is claimed", () => {
    const { container } = renderPage();
    expect(container.textContent).toMatch(/Baden-Württemberg/);
  });

  it("states that no visa outcome is guaranteed", () => {
    const { container } = renderPage();
    expect(container.textContent).toMatch(/do not guarantee a visa|no outcome is guaranteed|nobody honestly can/i);
  });

  it("links to the dMAT platform", () => {
    const { container } = renderPage();
    expect(container.querySelector(`a[href="${DMAT_URL}"]`)).not.toBeNull();
  });

  it("routes its primary CTA to the WhatsApp enquiry number", () => {
    const { container } = renderPage();
    expect(container.querySelector(`a[href*="wa.me/${PHONE_IN}"]`)).not.toBeNull();
  });

  it("links the founder's LinkedIn, which is the site's key verification link", () => {
    const { container } = renderPage();
    expect(container.querySelector(`a[href="${LINKEDIN_JIGAR}"]`)).not.toBeNull();
  });
});

describe("conversion surfaces", () => {
  it("offers a phone route, not only WhatsApp", () => {
    const { container } = renderPage();
    expect(container.querySelector(`a[href="tel:${PHONE_DE}"]`)).not.toBeNull();
    expect(container.querySelector(`a[href="tel:${PHONE_IN}"]`)).not.toBeNull();
  });

  it("states the response-time promise next to CTAs", () => {
    const { container } = renderPage();
    expect(container.textContent).toContain(RESPONSE_TIME);
  });

  it("offers a low-commitment alternative for visitors not ready to talk", () => {
    renderPage();
    expect(screen.getAllByText(/not ready to talk yet/i).length).toBeGreaterThan(0);
  });

  it("has no dead-end booking CTA when no calendar URL is configured", () => {
    // bookingHref() must always resolve to something — WhatsApp is the fallback.
    expect(bookingHref("x")).toMatch(/^https:\/\//);
  });
});

describe("removed proof blocks stay removed", () => {
  it("makes no Google review-score claim", () => {
    const { container } = renderPage();
    expect(container.textContent).not.toMatch(/google review|5\.0 on google/i);
  });

  it("embeds no Instagram content", () => {
    const { container } = renderPage();
    expect(container.querySelector('a[href*="instagram.com"]')).toBeNull();
  });
});
