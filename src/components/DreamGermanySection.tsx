import { ArrowRight, Briefcase, GraduationCap, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/lib/motion";
import { whatsapp } from "@/lib/cta";
import studentsImg from "@/assets/students-germany.jpg";
import professionalImg from "@/assets/professional-germany.jpg";
import castleImg from "@/assets/germany-castle.jpg";

/**
 * Three chapters, told with the photography carrying the emotion and the facts
 * carrying the credibility. Each chapter states something checkable.
 */
const chapters = [
  {
    n: "01",
    icon: GraduationCap,
    image: studentsImg,
    alt: "International students on a German university campus",
    kicker: "The degree",
    title: "A world-ranked degree, with no tuition bill",
    desc: "Public universities charge no tuition in 15 of Germany's 16 states — you pay a semester contribution, typically €100–€400, which usually includes regional public transport. TU München, Heidelberg, Humboldt, RWTH Aachen: the names travel, and the debt doesn't follow you home.",
    facts: [
      "No tuition at public universities (Baden-Württemberg excepted)",
      "20 hrs/week work rights while studying",
      "18-month job-seeker visa after graduation",
    ],
    topic: "studying in Germany",
  },
  {
    n: "02",
    icon: Briefcase,
    image: professionalImg,
    alt: "A skilled professional at work in Germany",
    kicker: "The career",
    title: "Europe's largest economy is short of you",
    desc: "Germany has a structural shortage of skilled workers, and the law changed to reflect it. The Opportunity Card lets a qualified professional enter on points and look for work on the ground — without resigning first. IT, engineering, healthcare, skilled trades and finance are all in demand.",
    facts: [
      "Points-based Opportunity Card (Chancenkarte)",
      "Apply while still employed at home",
      "12 months in-country to find a qualified role",
    ],
    topic: "the Opportunity Card",
  },
  {
    n: "03",
    icon: Heart,
    image: castleImg,
    alt: "A historic castle in the German countryside",
    kicker: "The life",
    title: "And then there's simply living here",
    desc: "Statutory health insurance. Trains to nine neighbouring countries. Clean air, safe streets, forests thirty minutes from any city centre, and a rulebook that applies to everyone equally. After five years of residence — sometimes three — permanent settlement is on the table.",
    facts: [
      "Statutory healthcare from day one of employment",
      "Family reunion rights for spouse and children",
      "A defined route to permanent residence",
    ],
    topic: "moving my family to Germany",
  },
];

const DreamGermanySection = () => {
  return (
    <section id="why-germany" className="section bg-background">
      <div className="shell">
        <SectionHeading
          eyebrow="Why Germany"
          icon={Sparkles}
          title={
            <>
              Three reasons people leave — and{" "}
              <span className="text-brand">stay</span>
            </>
          }
          subtitle="Not a brochure. The specific, checkable things that make Germany worth the paperwork."
        />

        <div className="mt-16 space-y-20 lg:space-y-28">
          {chapters.map((chapter, i) => {
            const flipped = i % 2 === 1;
            return (
              <article
                key={chapter.n}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  flipped ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* image */}
                <Reveal direction={flipped ? "right" : "left"}>
                  <div className="group relative">
                    <div className="relative overflow-hidden rounded-2xl shadow-warm-xl">
                      <img
                        src={chapter.image}
                        alt={chapter.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-[19rem] w-full object-cover transition-transform duration-1000 ease-brand group-hover:scale-[1.06] md:h-[23rem]"
                      />
                      {/* keeps the number legible over any photograph */}
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-ink-ground/70 via-transparent to-transparent"
                        aria-hidden="true"
                      />
                      <span
                        className="tnum absolute bottom-5 left-6 font-display text-5xl font-extrabold text-white/85"
                        aria-hidden="true"
                      >
                        {chapter.n}
                      </span>
                      <span className="absolute bottom-7 left-24 text-xs font-bold uppercase tracking-[0.16em] text-gold-bright">
                        {chapter.kicker}
                      </span>
                    </div>
                    {/* offset gold plate */}
                    <div
                      className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-gold/25 transition-transform duration-500 ease-brand group-hover:-bottom-3 group-hover:-right-3"
                      aria-hidden="true"
                    />
                  </div>
                </Reveal>

                {/* copy */}
                <Reveal direction={flipped ? "left" : "right"} delay={120}>
                  <div>
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                      <chapter.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-[1.625rem] font-extrabold md:text-[2rem]">{chapter.title}</h3>
                    <p className="mt-4 leading-relaxed text-ink-muted">{chapter.desc}</p>

                    <ul className="mt-6 space-y-2.5">
                      {chapter.facts.map((fact) => (
                        <li key={fact} className="flex items-start gap-3 text-[0.9375rem]">
                          <span
                            className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                            aria-hidden="true"
                          />
                          <span className="text-ink-body">{fact}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      variant="ghost"
                      className="mt-6 h-auto gap-1.5 px-0 text-brand hover:bg-transparent hover:text-brand-hover"
                    >
                      <a href={whatsapp(chapter.topic)} target="_blank" rel="noopener noreferrer">
                        <span className="border-b-2 border-brand/30 pb-0.5 font-bold">
                          Talk to us about this
                        </span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </Button>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DreamGermanySection;
