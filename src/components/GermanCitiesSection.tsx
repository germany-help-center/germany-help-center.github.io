import { GraduationCap, MapPin, Building2, Award, Briefcase, Clock } from "lucide-react";
import berlinImg from "@/assets/berlin.png";
import munichImg from "@/assets/munich.png";
import frankfurtImg from "@/assets/frankfurt.png";

const cities = [
  {
    name: "Berlin",
    image: berlinImg,
    universities: ["TU Berlin", "Humboldt University", "FU Berlin"],
    desc: "Germany's capital — a global hub for startups, tech, and culture. Affordable living with world-class education.",
  },
  {
    name: "Munich",
    image: munichImg,
    universities: ["TU München (QS #37)", "LMU München (QS #59)", "Hochschule München"],
    desc: "Bavaria's innovation capital — home to BMW, Siemens, and top-ranked technical universities.",
  },
  {
    name: "Frankfurt",
    image: frankfurtImg,
    universities: ["Goethe University", "Frankfurt School of Finance", "TH Mittelhessen"],
    desc: "Europe's financial powerhouse — ECB headquarters with excellent business & finance programs.",
  },
];

const GermanCitiesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-german-red">Top German Destinations</p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Study & Work in Germany's Best Cities
          </h2>
          <p className="text-muted-foreground">
            Our expert Jigar Vithani has lived and worked in Germany since 2014 — providing first-hand guidance on life, education, and careers across these cities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {cities.map((city) => (
            <div
              key={city.name}
              className="group overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex h-48 items-end justify-center overflow-hidden bg-muted/30 px-4 pb-2">
                <img src={city.image} alt={city.name} className="h-44 w-auto object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105" />
              </div>

              <div className="p-6">
                <div className="mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-german-red" />
                  <h3 className="text-xl font-bold">{city.name}</h3>
                </div>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{city.desc}</p>

                <div className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-german-red">
                  <GraduationCap className="h-3.5 w-3.5" />
                  Top Universities
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {city.universities.map((uni) => (
                    <span key={uni} className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      {uni}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More cities */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {["Hamburg", "Stuttgart", "Düsseldorf", "Cologne", "Dresden", "Heidelberg", "Aachen", "Bonn"].map((city) => (
            <div key={city} className="flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm">
              <Building2 className="h-3.5 w-3.5 text-german-gold" />
              {city}
            </div>
          ))}
        </div>

        {/* Expert highlight */}
        <div className="mt-16 mx-auto max-w-2xl rounded-2xl border border-german-gold/20 bg-german-gold/[0.05] p-8 text-center">
          <Award className="mx-auto mb-3 h-8 w-8 text-german-gold" />
          <h3 className="mb-2 text-lg font-bold">Germany Expert Since 2014</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Jigar Rajeshbhai Vithani</span> has been living and working in Germany since 2014. With over a decade of hands-on experience navigating German universities, job markets, immigration procedures, and daily life — he provides unmatched practical guidance that only comes from real experience on the ground.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-1 rounded-full border border-german-red/20 bg-german-red/10 px-3 py-1 text-xs font-medium text-german-red">
              <Briefcase className="h-3 w-3" /> German Job Market Expert
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-german-red/20 bg-german-red/10 px-3 py-1 text-xs font-medium text-german-red">
              <GraduationCap className="h-3 w-3" /> University Admission Pro
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-german-red/20 bg-german-red/10 px-3 py-1 text-xs font-medium text-german-red">
              <Clock className="h-3 w-3" /> 10+ Years in Germany
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GermanCitiesSection;
