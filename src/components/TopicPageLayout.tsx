import type { ReactNode } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ConsentBanner from "@/components/ConsentBanner";
import { FlagRail } from "@/components/Flag";
import { Reveal } from "@/lib/motion";

/**
 * Shell for a single-topic route.
 *
 * Every topic page is the same frame around one existing homepage section, so the
 * frame lives here rather than being copy-pasted four times. The page supplies the
 * <h1> and a short lede; the section components keep their own <h2> headings, which
 * is why they can be dropped in unchanged.
 *
 * The homepage keeps its own layout (`src/pages/Index.tsx`) — this is deliberately
 * not shared with it, because Index has an 18-section rhythm this frame would fight.
 *
 * Nothing here may touch `window`/`document` at module level: this renders in Node
 * during `build:ssr`. See CLAUDE.md § Prerendering.
 */
type TopicPageLayoutProps = {
  /** The page's single <h1>. Should read as the query someone typed. */
  heading: string;
  /** One or two sentences under the h1. Carries any mandatory caveat for the topic. */
  lede: ReactNode;
  /** Small text above the heading — orients the reader, not a keyword slot. */
  eyebrow: string;
  children: ReactNode;
};

const TopicPageLayout = ({ heading, lede, eyebrow, children }: TopicPageLayoutProps) => (
  <div className="min-h-screen pb-28 sm:pb-0">
    <Header />

    <main>
      <section className="relative overflow-hidden border-b border-border/60 bg-surface">
        <FlagRail />
        <div className="container mx-auto px-4 py-14 sm:py-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              {eyebrow}
            </p>
            <h1 className="display-title mt-3 max-w-3xl text-foreground dark:text-white">
              {heading}
            </h1>
            <div className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {lede}
            </div>
          </Reveal>
        </div>
      </section>

      {children}
    </main>

    <Footer />

    <MobileActionBar />
    <WhatsAppFloat />
    <ConsentBanner />
  </div>
);

export default TopicPageLayout;
