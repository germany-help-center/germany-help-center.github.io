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
    <section className="py-20 lg:py-28 relative overflow-hidden" style={{
      background: "linear-gradient(160deg, hsl(220 20% 7%) 0%, hsl(220 18% 11%) 50%, hsl(220 15% 8%) 100%)",
    }}>
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-german-gold">Top German Destinations</p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Study & Work in Germany's Best Cities
          </h2>
          <p className="text-white/50">
            Our expert Jigar Vithani has lived and worked in Germany since 2014 — providing first-hand guidance on life, education, and careers across these cities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {cities.map((city) => (
            <div
              key={city.name}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-german-gold/20 hover:bg-white/[0.06]"
            >
              <div className="flex h-48 items-end justify-center overflow-hidden px-4 pb-2">
                <img src={city.image} alt={city.name} className="h-44 w-auto object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105" />
              </div>

              <div className="p-6">
                <div className="mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-german-red" />
                  <h3 className="text-xl font-bold text-white">{city.name}</h3>
                </div>
                <p className="mb-4 text-sm text-white/45 leading-relaxed">{city.desc}</p>

                <div className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-german-gold/80">
                  <GraduationCap className="h-3.5 w-3.5" />
                  Top Universities
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {city.universities.map((uni) => (
                    <span key={uni} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/60">
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
            <div key={city} className="flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/50">
              <Building2 className="h-3.5 w-3.5 text-german-gold/50" />
              {city}
            </div>
          ))}
        </div>

        {/* Expert highlight */}
        <div className="mt-16 mx-auto max-w-2xl rounded-2xl border border-german-gold/15 bg-german-gold/[0.05] p-8 text-center backdrop-blur-sm">
          <Award className="mx-auto mb-3 h-8 w-8 text-german-gold" />
          <h3 className="mb-2 text-lg font-bold text-white">Germany Expert Since 2014</h3>
          <p className="text-sm text-white/50 leading-relaxed">
            <span className="text-german-gold/80 font-medium">Jigar Rajeshbhai Vithani</span> has been living and working in Germany since 2014. With over a decade of hands-on experience navigating German universities, job markets, immigration procedures, and daily life — he provides unmatched practical guidance that only comes from real experience on the ground.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-1 rounded-full border border-german-gold/20 bg-german-gold/10 px-3 py-1 text-xs font-medium text-german-gold">
              <Briefcase className="h-3 w-3" /> German Job Market Expert
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-german-gold/20 bg-german-gold/10 px-3 py-1 text-xs font-medium text-german-gold">
              <GraduationCap className="h-3 w-3" /> University Admission Pro
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-german-gold/20 bg-german-gold/10 px-3 py-1 text-xs font-medium text-german-gold">
              <Clock className="h-3 w-3" /> 10+ Years in Germany
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GermanCitiesSection;
