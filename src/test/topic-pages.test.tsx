import { describe, expect, it, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ApsPage from "@/pages/topics/ApsPage";
import CostsPage from "@/pages/topics/CostsPage";
import OpportunityCardPage from "@/pages/topics/OpportunityCardPage";
import StudyInGermanyPage from "@/pages/topics/StudyInGermanyPage";

/**
 * Guardrail tests for the topic routes (docs/SEO-CONTENT-PLAN.md).
 *
 * Splitting the homepage into routes multiplies the number of places every
 * mandatory caveat has to appear. `landing.test.tsx` guards them on the homepage
 * only, so without this file the split would silently drop that cover — which is
 * the single biggest risk the content plan introduces.
 *
 * The Opportunity Card assertions are deliberately NEGATIVE: two figures stay
 * unpublished by standing decision because sources disagree (CLAUDE.md § Content
 * guardrails). A test that fails when someone helpfully adds them is the point.
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
});

const pages = [
  { name: "/study-in-germany-from-india", Component: StudyInGermanyPage },
  { name: "/aps-certificate-india", Component: ApsPage },
  { name: "/cost-of-studying-in-germany", Component: CostsPage },
  { name: "/opportunity-card-chancenkarte", Component: OpportunityCardPage },
];

const renderPage = (Component: () => JSX.Element) =>
  render(
    <MemoryRouter>
      <Component />
    </MemoryRouter>,
  );

describe.each(pages)("topic page $name", ({ Component }) => {
  it("renders without throwing", () => {
    expect(() => renderPage(Component)).not.toThrow();
  });

  it("has exactly one h1", () => {
    renderPage(Component);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });
});

describe("mandatory caveats", () => {
  it("the costs page never says tuition-free without the Baden-Württemberg exception", () => {
    renderPage(CostsPage);
    const body = document.body.textContent ?? "";
    expect(body).toMatch(/Baden-W[üu]rttemberg/);
    expect(body).toContain("1,500");
  });

  it("the study page carries the Baden-Württemberg exception and the no-guarantee statement", () => {
    renderPage(StudyInGermanyPage);
    const body = document.body.textContent ?? "";
    expect(body).toMatch(/Baden-W[üu]rttemberg/);
    expect(body).toMatch(/no outcome is guaranteed|nobody can guarantee|not guaranteed/i);
  });

  it("the APS page states the 70% Class 12 rule", () => {
    renderPage(ApsPage);
    expect(document.body.textContent ?? "").toContain("70%");
  });
});

describe("figures that must stay unpublished", () => {
  /*
   * Both are recorded in CLAUDE.md as deliberately absent. If a future edit adds a
   * number, this fails — which is cheaper than discovering it from a reader who
   * relied on it and was refused at the mission.
   */
  it("the Opportunity Card page publishes no proof-of-funds amount", () => {
    renderPage(OpportunityCardPage);
    const body = document.body.textContent ?? "";
    // Any euro figure of 3+ digits would be a published funds requirement.
    expect(body).not.toMatch(/€\s?\d{1,3}[.,]?\d{3}/);
  });

  it("the Opportunity Card page publishes no processing time", () => {
    renderPage(OpportunityCardPage);
    const body = document.body.textContent ?? "";
    expect(body).not.toMatch(/\d+\s*(–|-|to)\s*\d+\s*(weeks|months)\s+to\s+process/i);
  });
});
