import { MessageCircle, Sparkles, GraduationCap, Briefcase, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import studentsImg from "@/assets/students-germany.jpg";
import castleImg from "@/assets/germany-castle.jpg";
import professionalImg from "@/assets/professional-germany.jpg";

const dreams = [
  {
    image: studentsImg,
    title: "Study at World-Class Universities",
    desc: "Germany offers tuition-free education at top-ranked universities. Imagine yourself at TU München, Humboldt University, or Heidelberg — building a future that matters.",
    icon: GraduationCap,
  },
  {
    image: professionalImg,
    title: "Build Your Career in Europe's Powerhouse",
    desc: "Germany's booming economy needs skilled professionals. From IT to engineering, healthcare to finance — your dream job in Germany is closer than you think.",
    icon: Briefcase,
  },
  {
    image: castleImg,
    title: "Experience a Life Beyond Imagination",
    desc: "Fairytale castles, vibrant cities, world-class healthcare, and a quality of life ranked among the best globally. Germany isn't just a destination — it's a new chapter.",
    icon: Heart,
  },
];

const DreamGermanySection = () => {
  return (
    <section className="py-14 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-2 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-german-red">
            <Sparkles className="h-4 w-4" />
            Imagine Your Life in Germany
          </p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Your German Dream Awaits
          </h2>
          <p className="text-muted-foreground">
            Every year, thousands make the move. With the right guidance, you could be next. Here's what awaits you.
          </p>
        </div>

        <div className="space-y-12">
          {dreams.map((dream, i) => (
            <div key={dream.title} className={`flex flex-col items-center gap-8 lg:gap-12 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={dream.image}
                    alt={dream.title}
                    className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105 md:h-80"
                  />
                </div>
              </div>
              {/* Content */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-german-red/10 text-german-red">
                    <dream.icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mb-3 text-2xl font-extrabold tracking-tight md:text-3xl">{dream.title}</h3>
                <p className="mb-6 text-muted-foreground leading-relaxed text-base">{dream.desc}</p>
                <Button className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 shadow-md border-none" asChild>
                  <a href="https://wa.me/+919824925434" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Start Your Journey — WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DreamGermanySection;
