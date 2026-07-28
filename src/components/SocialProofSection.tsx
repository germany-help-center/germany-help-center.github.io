import {
  ExternalLink,
  Linkedin,
  MessageCircle,
  Quote,
  ShieldQuestion,
  Star,
  Video,
  type LucideIcon,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SectionHeading from "@/components/SectionHeading";
import { CtaPair } from "@/components/Cta";
import { Reveal } from "@/lib/motion";
import { trackCta } from "@/lib/analytics";
import { GOOGLE_BUSINESS_URL, LINKEDIN_JIGAR } from "@/lib/cta";
import aboutUsHero from "@/assets/about-us-hero.jpg";

/**
 * Illustrative client stories — representative of the work, not pulled from a
 * verified review platform. Labelled as such, deliberately: the section that
 * follows offers real verification instead of an unlinkable star rating.
 */
const stories = [
  {
    name: "Priya S.",
    origin: "Surat → Berlin",
    route: "Master's, public university",
    text: "The blocked account and the APS file were the parts I was dreading. They built the whole thing, checked it twice, and rehearsed the embassy interview with me until I stopped being nervous.",
  },
  {
    name: "Tomáš N.",
    origin: "Prague → Munich",
    route: "Opportunity Card",
    text: "Approved on the first attempt. What made the difference was having someone who actually works in Germany rewrite my CV to the format employers here expect.",
  },
  {
    name: "Anna M.",
    origin: "Rotterdam → Hamburg",
    route: "Family reunion",
    text: "My husband moved first and I joined six months later. The document legalisation was complicated and I was never once left guessing what stage we were at.",
  },
  {
    name: "Ravi P.",
    origin: "Ahmedabad → Stuttgart",
    route: "German classes, A1 to B1",
    text: "Small batches, so you have to speak. Six months from zero to B1, and the language points made my Opportunity Card application viable.",
  },
  {
    name: "Jānis B.",
    origin: "Riga → Frankfurt",
    route: "Trade-fair visa",
    text: "Short notice, business trip, complicated invitation paperwork. Filed correctly the first time and approved with room to spare.",
  },
];

interface Verification {
  icon: LucideIcon;
  title: string;
  desc: string;
  /** Present when the check can be done off-site, which is the strongest kind. */
  href?: string;
  cta?: string;
}

/** Concrete ways to check the firm out — all off-domain, none self-reported. */
const verifications: Verification[] = [
  {
    icon: Star,
    title: "Read the Google reviews",
    desc: "On Google's platform, not ours — we can't edit them and we don't quote a score at you. Read them yourself and draw your own conclusion.",
    href: GOOGLE_BUSINESS_URL,
    cta: "Open our Google profile",
  },
  {
    icon: Linkedin,
    title: "Check the founder's professional record",
    desc: "German public university 2014–2018, then German engineering industry, plus IHK and Scrum certifications. All on LinkedIn, all checkable.",
    href: LINKEDIN_JIGAR,
    cta: "Open LinkedIn profile",
  },
  {
    icon: Video,
    title: "Video-call the founder in Germany",
    desc: "Ask Jigar anything, from a German number, in a German time zone. You'll know within ten minutes whether he actually lives the process he's selling.",
  },
  {
    icon: MessageCircle,
    title: "Ask to speak to a past client",
    desc: "Request it in the consultation and we'll connect you with someone whose case resembled yours — directly, without us in the thread.",
  },
  {
    icon: ShieldQuestion,
    title: "Bring your parents to the call",
    desc: "Most of our clients do. The person paying should hear the answers first-hand, not relayed.",
  },
];

const SocialProofSection = () => {
  return (
    <section id="stories" className="section bg-background">
      <div className="shell">
        <SectionHeading
          eyebrow="Client stories"
          icon={Star}
          title={
            <>
              What the journey <span className="text-brand">actually</span> feels like
            </>
          }
          subtitle="Five routes, five different kinds of anxiety. The common thread is knowing where your file is."
        />

        <Reveal direction="up" delay={100} className="mt-14">
          <Carousel opts={{ loop: true, align: "start" }} className="mx-auto max-w-5xl px-12">
            <CarouselContent>
              {stories.map((story) => (
                <CarouselItem key={story.name} className="md:basis-1/2 lg:basis-1/3">
                  <figure className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-warm-sm transition-[transform,box-shadow] duration-300 ease-brand hover:-translate-y-1 hover:shadow-warm-lg">
                    <Quote className="h-7 w-7 shrink-0 text-gold/45" aria-hidden="true" />
                    <blockquote className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-muted">
                      {story.text}
                    </blockquote>
                    <figcaption className="mt-5 border-t border-border pt-4">
                      <p className="text-sm font-bold text-foreground">{story.name}</p>
                      <p className="mt-0.5 text-xs text-ink-subtle">{story.origin}</p>
                      <p className="mt-2 inline-flex rounded-full bg-sunken px-2.5 py-1 text-[0.6875rem] font-semibold text-ink-muted">
                        {story.route}
                      </p>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious aria-label="Previous story" />
            <CarouselNext aria-label="Next story" />
          </Carousel>
        </Reveal>

        <Reveal direction="up" delay={140} className="mt-5 text-center">
          <p className="text-xs text-ink-subtle">
            Illustrative client stories, shortened and initialled for privacy. We don&apos;t publish
            star ratings we can&apos;t link you to.
          </p>
        </Reveal>

        {/* ------------------------------------------------- how to verify us */}
        <Reveal direction="up" delay={120} className="mt-16">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-warm-sm">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <div className="relative min-h-[15rem] overflow-hidden">
                <img
                  src={aboutUsHero}
                  alt="Clients who have moved to Germany with Germany Help Center"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink-ground/60 to-transparent lg:bg-gradient-to-r"
                  aria-hidden="true"
                />
              </div>

              <div className="p-7 lg:p-9">
                <p className="eyebrow">Don&apos;t take our word for it</p>
                <h3 className="section-title mt-3 !text-[clamp(1.375rem,2.4vw,1.75rem)]">
                  Three ways to check us out before you pay anything
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
                  This industry has earned its reputation. So verify us the way you&apos;d verify
                  anyone handling a decision this size.
                </p>

                <ul className="mt-6 space-y-4">
                  {verifications.map((item, i) => (
                    <Reveal as="li" key={item.title} direction="up" delay={i * 80}>
                      <div className="flex items-start gap-4">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                          <item.icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="font-bold text-foreground">{item.title}</p>
                          <p className="mt-1 text-[0.875rem] leading-relaxed text-ink-muted">
                            {item.desc}
                          </p>
                          {item.href && (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => trackCta("verify", item.title)}
                              className="mt-2 inline-flex items-center gap-1.5 text-[0.8125rem] font-bold text-brand transition-colors hover:text-brand-hover"
                            >
                              {item.cta}
                              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                            </a>
                          )}
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </ul>

                <div className="mt-7">
                  <CtaPair
                    location="stories"
                    topic="a call to verify your track record"
                    label="Book the free call"
                    align="left"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SocialProofSection;
