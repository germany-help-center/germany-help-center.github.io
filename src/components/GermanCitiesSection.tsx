import { GraduationCap, MapPin, Building2, Landmark } from "lucide-react";
import berlinImg from "@/assets/berlin.png";
import munichImg from "@/assets/munich.png";
import frankfurtImg from "@/assets/frankfurt.png";

const cities = [
  {
    name: "Berlin",
    image: berlinImg,
    landmark: "Brandenburg Gate",
    universities: ["TU Berlin", "Humboldt University", "FU Berlin"],
    desc: "Germany's capital and a global hub for startups, culture, and innovation.",
  },
  {
    name: "Munich",
    image: munichImg,
    landmark: "Frauenkirche",
    universities: ["TU München", "LMU München", "Hochschule München"],
    desc: "Bavaria's tech capital — home to BMW, Siemens, and world-class universities.",
  },
  {
    name: "Frankfurt",
    image: frankfurtImg,
    landmark: "Financial District",
    universities: ["Goethe University", "Frankfurt School", "TH Mittelhessen"],
    desc: "Europe's financial powerhouse with the ECB and Germany's busiest airport.",
  },
];

const GermanCitiesSection = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" style={{
      background: "linear-gradient(160deg, hsl(220 20% 8%) 0%, hsl(220 18% 12%) 100%)",
    }}>
      {/* Digital grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-german-gold">Top Destinations</p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Study & Work in Germany's Best Cities
          </h2>
          <p className="text-white/50">
            Discover world-renowned universities and thriving job markets across Germany's most iconic cities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {cities.map((city) => (
            <div
              key={city.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-german-gold/30 hover:bg-white/[0.08]"
            >
              {/* City image */}
              <div className="flex h-48 items-end justify-center overflow-hidden bg-gradient-to-t from-black/40 to-transparent px-4 pb-2">
                <img src={city.image} alt={city.name} className="h-44 w-auto object-contain drop-shadow-lg transition-transform group-hover:scale-105" />
              </div>

              <div className="p-6">
                <div className="mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-german-red" />
                  <h3 className="text-xl font-bold text-white">{city.name}</h3>
                </div>
                <p className="mb-4 text-sm text-white/50 leading-relaxed">{city.desc}</p>

                <div className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-german-gold">
                  <GraduationCap className="h-3.5 w-3.5" />
                  Top Universities
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {city.universities.map((uni) => (
                    <span key={uni} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
                      {uni}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional cities strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {["Hamburg", "Stuttgart", "Düsseldorf", "Cologne", "Dresden", "Heidelberg"].map((city) => (
            <div key={city} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/60">
              <Building2 className="h-3.5 w-3.5 text-german-gold/60" />
              {city}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GermanCitiesSection;
