import { CheckCircle, Heart, GraduationCap, FileCheck, Languages, Compass, Users, HandHeart } from "lucide-react";
import aboutUsHero from "@/assets/about-us-hero.jpg";

const aboutPoints = [
  { icon: GraduationCap, text: "Expert guidance for education and visa in Germany" },
  { icon: FileCheck, text: "Smooth, transparent admission to visa support" },
  { icon: Users, text: "Intercultural services for comfortable transition" },
  { icon: Languages, text: "Dedicated German language assistance" },
  { icon: Compass, text: "Your personal navigator at every step" },
  { icon: HandHeart, text: "Committed team helping you achieve dreams" },
];

const visionPoints = [
  "Dedicated partner throughout your journey",
  "More than education or work — realizing dreams",
  "Compassionate, clear guidance for success",
  "Feel at home before arriving",
  "Confidence and support at every step",
];

const StatsSection = () => {
  return (
    <section id="about" className="py-14 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-german-red">About Us</p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Building Bridges. Changing Lives.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're not just consultants — we're people who've lived the journey. Based in Germany since 2014, 
            we walk beside you from your first dream to your first day in Deutschland.
          </p>
        </div>


        {/* About + Image Split */}
        <div className="mb-16 grid items-center gap-10 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={aboutUsHero}
                alt="Happy students and professionals who moved to Germany with our help"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-german-gold/20" />
          </div>

          {/* About Points */}
          <div>
            <h3 className="mb-2 text-2xl font-extrabold tracking-tight md:text-3xl">
              Your Trusted Partner for Germany
            </h3>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              From admission to arrival, we provide end-to-end support so you never feel alone on your journey to Germany.
            </p>
            <div className="space-y-4">
              {aboutPoints.map((point) => (
                <div key={point.text} className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-german-red/10 text-german-red">
                    <point.icon className="h-5 w-5" />
                  </div>
                  <p className="pt-1.5 text-sm font-medium">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="rounded-3xl bg-primary p-8 md:p-12 lg:p-16">
          <div className="mx-auto max-w-3xl text-center">
            <Heart className="mx-auto mb-4 h-10 w-10 text-german-gold" />
            <h3 className="mb-3 text-2xl font-extrabold tracking-tight text-primary-foreground md:text-3xl">
              Our Vision
            </h3>
            <p className="mb-8 text-lg font-medium italic text-german-gold">
              "Building Bridges, Changing Lives."
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visionPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-xl bg-primary-foreground/10 p-4 text-left backdrop-blur-sm"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-german-gold" />
                  <p className="text-sm font-medium text-primary-foreground">{point}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-primary-foreground/80 leading-relaxed">
              We don't just process paperwork — we build relationships. Every visa approved, every student placed, 
              every family reunited is a bridge between two worlds. Your dream of Germany is our mission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
