import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  GraduationCap,
  Layers,
  Plane,
  Users,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/lib/motion";
import { whatsapp } from "@/lib/cta";
import studentsImg from "@/assets/students-germany.jpg";

const services = [
  {
    icon: GraduationCap,
    title: "Student visa",
    desc: "Public-university admission, APS verification, blocked account, health insurance and embassy preparation — the complete file, start to visa.",
    tags: ["University admission", "APS", "Blocked account", "Embassy prep"],
    topic: "a German student visa",
    /** The one tile that carries a photograph — it's the flagship service. */
    feature: true,
  },
  {
    icon: Briefcase,
    title: "Opportunity Card",
    desc: "Points assessment, qualification recognition, financial proof and filing — plus the career coaching to convert the year into a job.",
    tags: ["Points check", "Recognition", "Job support"],
    topic: "the Opportunity Card",
  },
  {
    icon: Users,
    title: "Family reunion & spouse visa",
    desc: "Spouse and dependent visas, marriage-document legalisation, and the A1 German the joining partner needs.",
    tags: ["Spouse visa", "Dependent visa", "A1 certificate"],
    topic: "a family reunion visa",
  },
  {
    icon: Plane,
    title: "Schengen travel visa",
    desc: "Short-stay applications done properly: itinerary, insurance, financial evidence and interview preparation.",
    tags: ["Schengen", "Insurance", "Interview prep"],
    topic: "a Schengen travel visa",
  },
  {
    icon: Building2,
    title: "Trade-fair visit visa",
    desc: "Business travel to Hannover Messe, drupa, K, Automechanika and the rest — invitation letters and company documentation handled.",
    tags: ["Invitation letter", "Business docs"],
    topic: "a trade-fair visit visa",
  },
  {
    icon: BookOpen,
    title: "Online German classes",
    desc: "Live A1 to B2 with qualified tutors, in batches small enough that you have to speak. Goethe and TestDaF preparation included.",
    tags: ["A1–B2", "Live classes", "Goethe / TestDaF"],
    topic: "online German classes",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section bg-background">
      <div className="shell">
        <SectionHeading
          eyebrow="What we do"
          icon={Layers}
          title={
            <>
              Six services. <span className="text-brand">One country.</span>
            </>
          }
          subtitle="We don't place students in Canada, Australia or the UK. Germany is the whole business, which is why the detail is right."
        />

        {/* Bento: the flagship service spans two columns and two rows on desktop. */}
        <div className="mt-14 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              as="article"
              key={service.title}
              direction="up"
              delay={i * 70}
              className={service.feature ? "sm:col-span-2 lg:row-span-2" : ""}
            >
              <a
                href={whatsapp(service.topic)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-7 shadow-warm-sm transition-[transform,box-shadow,border-color] duration-300 ease-brand hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-warm-xl"
              >
                {service.feature && (
                  <>
                    <img
                      src={studentsImg}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover opacity-[0.14] transition-transform duration-1000 ease-brand group-hover:scale-105 dark:opacity-[0.1]"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-surface via-surface/85 to-surface/60"
                      aria-hidden="true"
                    />
                  </>
                )}

                {/* brand wash that fades in on hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-brand-soft to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative flex flex-1 flex-col">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </span>

                  <h3
                    className={`mt-5 font-extrabold ${
                      service.feature ? "text-[1.625rem]" : "text-xl"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`mt-2.5 leading-relaxed text-ink-muted ${
                      service.feature ? "text-[1.0625rem]" : "text-sm"
                    }`}
                  >
                    {service.desc}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <li
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-full bg-sunken px-2.5 py-1 text-xs font-semibold text-ink-muted"
                      >
                        <CheckCircle2 className="h-3 w-3 text-brand" aria-hidden="true" />
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-bold text-brand">
                    Talk to us
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 ease-brand group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* honesty panel — the thing scam consultancies never print */}
        <Reveal direction="up" delay={120} className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-2xl border border-border bg-sunken p-7">
            <h3 className="text-[1.0625rem] font-extrabold">What we will not do</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Promise you a visa. Nobody can — the decision is the embassy's.",
                "Fabricate documents, experience letters or bank statements.",
                "Push you toward a private college because it pays us commission.",
                "Charge you for the first consultation, or for a profile assessment.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                    aria-hidden="true"
                  />
                  <span className="text-[0.875rem] leading-relaxed text-ink-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ServicesSection;
