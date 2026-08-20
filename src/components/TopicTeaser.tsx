import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/lib/motion";

/**
 * A homepage summary that hands the topic off to its own route.
 *
 * Why this exists (docs/SEO-CONTENT-PLAN.md): the full treatment of a topic lives
 * on its own URL. Leaving the full section here as well would put identical copy
 * on two of our URLs — the likeliest cause of the four URLs already sitting at
 * "Crawled – currently not indexed" in Search Console. So the homepage keeps the
 * shape of the answer and the link; the page keeps the answer.
 *
 * The `id` must match the anchor the Header navigates to, and `landing.test.tsx`
 * asserts every one of those anchors still exists. Changing an id here breaks
 * both the nav and that test — which is the intended alarm.
 *
 * Keep `points` factual and caveat-free: anything needing a mandatory caveat
 * (tuition-free, any visa timeline) belongs on the topic page where the caveat
 * can sit beside it, not in a three-word bullet.
 */
type TopicTeaserProps = {
  id: string;
  eyebrow: string;
  icon?: LucideIcon;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  points: string[];
  href: string;
  linkLabel: string;
};

const TopicTeaser = ({
  id,
  eyebrow,
  icon,
  title,
  subtitle,
  points,
  href,
  linkLabel,
}: TopicTeaserProps) => (
  <section id={id} className="py-14 sm:py-20">
    <div className="container mx-auto px-4">
      <SectionHeading eyebrow={eyebrow} icon={icon} title={title} subtitle={subtitle} />

      <Reveal direction="up">
        <ul className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 rounded-lg border border-border/60 bg-surface p-4 text-sm text-ink-body"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <a
            href={href}
            className="inline-flex items-center gap-2 rounded-full border border-brand/30 px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
          >
            {linkLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

export default TopicTeaser;
