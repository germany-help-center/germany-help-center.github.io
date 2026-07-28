import { Building2, GraduationCap, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/lib/motion";
import berlinImg from "@/assets/berlin.png";
import munichImg from "@/assets/munich.png";
import frankfurtImg from "@/assets/frankfurt.png";

const cities = [
  {
    name: "Berlin",
    image: berlinImg,
    tag: "Startups & research",
    universities: ["TU Berlin", "Humboldt-Universität", "Freie Universität"],
    desc: "The capital, and the cheapest of Germany's big cities to be a student in. Europe's densest startup cluster sits next door to three research universities.",
  },
  {
    name: "Munich",
    image: munichImg,
    tag: "Engineering & industry",
    universities: ["TU München", "LMU München", "Hochschule München"],
    desc: "Bavaria's engineering capital — BMW, Siemens, MAN and a technical university that consistently ranks first in Germany. The highest salaries, and the highest rents.",
  },
  {
    name: "Frankfurt",
    image: frankfurtImg,
    tag: "Finance & business",
    universities: ["Goethe-Universität", "Frankfurt School of Finance", "TH Mittelhessen"],
    desc: "The European Central Bank's home city and Germany's aviation hub. If your field is finance, consulting or logistics, the internships are here.",
  },
];

const otherCities = [
  "Hamburg",
  "Stuttgart",
  "Düsseldorf",
  "Cologne",
  "Dresden",
  "Heidelberg",
  "Aachen",
  "Bonn",
  "Leipzig",
  "Karlsruhe",
];

const GermanCitiesSection = () => {
  return (
    <section id="cities" className="section bg-sunken">
      <div className="shell">
        <SectionHeading
          eyebrow="Where you'll land"
          icon={MapPin}
          title={
            <>
              Pick the city that fits the <span className="text-brand">career</span>
            </>
          }
          subtitle="University rankings matter less than the industry around them. We advise on the combination, not the brochure."
        />

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {cities.map((city, i) => (
            <Reveal as="article" key={city.name} direction="up" delay={i * 110}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-warm-sm transition-[transform,box-shadow] duration-300 ease-brand hover:-translate-y-1.5 hover:shadow-warm-xl">
                <div className="relative flex h-48 items-end justify-center overflow-hidden bg-gradient-to-b from-sunken to-surface px-6 pb-3">
                  {/* the illustrated skyline lifts and sharpens on hover */}
                  <img
                    src={city.image}
                    alt={`${city.name} skyline`}
                    loading="lazy"
                    decoding="async"
                    className="h-40 w-auto object-contain drop-shadow-[0_8px_16px_rgba(26,23,20,0.18)] transition-transform duration-700 ease-brand group-hover:-translate-y-2 group-hover:scale-[1.07]"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-gold-soft px-2.5 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-gold-deep">
                    {city.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col border-t border-border p-6">
                  <h3 className="flex items-center gap-2 text-xl font-extrabold">
                    <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
                    {city.name}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-muted">{city.desc}</p>

                  <p className="mt-5 flex items-center gap-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-brand">
                    <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
                    Universities we place into
                  </p>
                  <ul className="mt-2.5 flex flex-wrap gap-1.5">
                    {city.universities.map((uni) => (
                      <li
                        key={uni}
                        className="rounded-full border border-border bg-sunken px-3 py-1 text-xs font-semibold text-ink-muted"
                      >
                        {uni}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={120} className="mt-12">
          <p className="text-center text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-ink-subtle">
            We also place students in
          </p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
            {otherCities.map((city) => (
              <li
                key={city}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-ink-muted shadow-warm-sm transition-colors duration-200 hover:border-gold hover:text-foreground"
              >
                <Building2 className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                {city}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default GermanCitiesSection;
