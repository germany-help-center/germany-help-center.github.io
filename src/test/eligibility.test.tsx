import { beforeAll, describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import EligibilityCheck from "@/components/EligibilityCheck";

/**
 * The self-check gives visitors a verdict about their own eligibility, so its
 * rules have to match what the rest of the page states. A wrong "you qualify"
 * here would send someone toward a ₹18,000 non-refundable APS fee they cannot
 * use — so the blocking paths are tested explicitly, not just the happy ones.
 */
beforeAll(() => {
  class MockObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }
  Object.defineProperty(window, "IntersectionObserver", { writable: true, value: MockObserver });
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

/** Clicks through the wizard by visible option label. */
const answer = (label: RegExp | string) =>
  fireEvent.click(screen.getByRole("button", { name: label }));

describe("eligibility self-check", () => {
  it("asks the goal first and nothing else", () => {
    render(<EligibilityCheck />);
    expect(screen.getByText("What are you trying to do?")).toBeInTheDocument();
    expect(screen.queryByText(/Class 12 aggregate/i)).not.toBeInTheDocument();
  });

  it("blocks a bachelor's applicant below the APS 70% Class 12 gate", () => {
    render(<EligibilityCheck />);
    answer(/Bachelor's in Germany/);
    answer(/Below 70%/);

    expect(screen.getByText(/Not this cycle/i)).toBeInTheDocument();
    // It must point at a real alternative rather than just refusing.
    expect(screen.getByText(/master's route has no Class 12 percentage requirement/i)).toBeInTheDocument();
  });

  it("routes 12th + a year of college to direct entry, not Studienkolleg", () => {
    render(<EligibilityCheck />);
    answer(/Bachelor's in Germany/);
    answer(/70% or above/);
    answer(/at least one full year/);

    expect(screen.getByText(/Direct entry looks realistic/i)).toBeInTheDocument();
  });

  it("routes straight-from-12th to the Studienkolleg pathway", () => {
    render(<EligibilityCheck />);
    answer(/Bachelor's in Germany/);
    answer(/70% or above/);
    answer(/straight from 12th/);

    expect(screen.getByText(/Studienkolleg route looks realistic/i)).toBeInTheDocument();
  });

  it("flags the dMAT only for listed fields targeting Summer 2027 or later", () => {
    render(<EligibilityCheck />);
    answer(/Master's in Germany/);
    answer(/Engineering, commerce, finance/);
    answer(/Summer 2027 or later/);

    expect(screen.getByText(/need the dMAT/i)).toBeInTheDocument();
  });

  it("does not flag the dMAT for a Winter 2026/27 applicant", () => {
    render(<EligibilityCheck />);
    answer(/Master's in Germany/);
    answer(/Engineering, commerce, finance/);
    answer(/Winter 2026\/27/);

    // Match the headline specifically — a loose /need the dMAT/ also matches
    // the body copy "…applicants do not need the dMAT".
    expect(screen.queryByText(/almost certainly need the dMAT/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Master's admission looks realistic/i)).toBeInTheDocument();
    expect(screen.getByText(/do not need the dMAT/i)).toBeInTheDocument();
  });

  it("scores the Chancenkarte grid and clears at 6 points", () => {
    render(<EligibilityCheck />);
    answer(/Work in Germany/);
    answer(/University degree/);
    answer(/3\+ years in the last 7/); // 3
    answer(/B1$/); // +2
    answer(/35 or under/); // +2  => 7

    expect(screen.getByText(/You score about 7 of the 6 points needed/i)).toBeInTheDocument();
  });

  it("shows the gap, not a rejection, when the applicant is short on points", () => {
    render(<EligibilityCheck />);
    answer(/Work in Germany/);
    answer(/University degree/);
    answer(/Less than that/); // 0
    answer(/None yet/); // 0
    answer(/Over 40/); // 0

    expect(screen.getByText(/You score about 0 of 6/i)).toBeInTheDocument();
    expect(screen.getByText(/B1 = 2/i)).toBeInTheDocument();
  });

  it("blocks the Opportunity Card without a recognised qualification", () => {
    render(<EligibilityCheck />);
    answer(/Work in Germany/);
    answer(/Neither/);

    expect(screen.getByText(/needs a recognised qualification/i)).toBeInTheDocument();
  });

  it("applies the June 2024 A1 exemption for Blue Card and Skilled Worker sponsors", () => {
    render(<EligibilityCheck />);
    answer(/Join family in Germany/);
    answer(/EU Blue Card/);

    expect(screen.getByText(/don't need A1 German first/i)).toBeInTheDocument();
  });

  it("still requires A1 on a student-visa sponsor route", () => {
    render(<EligibilityCheck />);
    answer(/Join family in Germany/);
    answer(/Student visa/);

    expect(screen.getByText(/A1 German is likely required first/i)).toBeInTheDocument();
  });

  it("lets the visitor go back and change an answer", () => {
    render(<EligibilityCheck />);
    answer(/Bachelor's in Germany/);
    expect(screen.getByText(/Class 12 aggregate/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Back/i }));
    expect(screen.getByText("What are you trying to do?")).toBeInTheDocument();
  });

  it("always hands off to a human and never promises an outcome", () => {
    const { container } = render(<EligibilityCheck />);
    answer(/Work in Germany/);
    answer(/University degree/);
    answer(/3\+ years in the last 7/);
    answer(/B2 or above/);
    answer(/35 or under/);

    expect(screen.getByText(/Discuss this — free/i)).toBeInTheDocument();
    expect(container.textContent).toMatch(/visa decision is the German mission's alone/i);
  });
});
