import { GraduationCap, CheckCircle, ArrowRight, Award, BookOpen, School } from "lucide-react";
import { Button } from "@/components/ui/button";

const bachelorPathways = [
  {
    title: "Pathway 1: Directly After 12th Standard",
    desc: "Apply to German government universities right after completing your 12th standard. Begin your tuition-free bachelor's degree without any gap year.",
    steps: ["Complete 12th Standard", "Apply to Studienkolleg or Direct Admission", "Start Bachelor's in Germany"],
  },
  {
    title: "Pathway 2: After 12th + 1 Year of College in India",
    desc: "Completed one year of college in India? You qualify for direct admission to German government universities — no Studienkolleg required.",
    steps: ["Complete 12th + 1 Year College", "Direct University Admission", "Start Bachelor's in Germany"],
  },
];

const masterPathways = [
  {
    title: "Master's After Bachelor's Degree",
    desc: "Hold a bachelor's degree from India? Apply directly to German government universities for a tuition-free master's program in your field.",
    steps: ["Complete Bachelor's in India", "Apply to German Universities", "Start Master's in Germany"],
  },
  {
    title: "Double Master's Program",
    desc: "Already completed a master's in India? Pursue a second master's at a German government university — tuition-free — to boost your career prospects in Europe.",
    steps: ["Complete Master's in India", "Apply for 2nd Master's", "Start Double Master's in Germany"],
  },
];

const StudentPathwaysSection = () => {
  return (
    <section id="student-pathways" className="py-14 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-2 inline-block rounded-full bg-german-red/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-german-red">
            🎓 For Students
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Your Pathway to a <span className="text-german-red">Tuition-Free</span> German Degree
          </h2>
          <p className="text-lg text-muted-foreground">
            Study at Germany's prestigious government universities with <span className="font-semibold text-foreground">zero tuition fees</span>. 
            Multiple pathways available for Indian students at every academic stage.
          </p>
        </div>

        {/* Champion Badge */}
        <div className="mx-auto mb-10 max-w-2xl rounded-2xl border border-german-gold/30 bg-gradient-to-r from-german-dark to-primary p-6 text-center shadow-lg">
          <Award className="mx-auto mb-3 h-10 w-10 text-german-gold" />
          <h3 className="mb-2 text-xl font-bold text-white">100+ Students Enrolled in Government Universities</h3>
          <p className="text-sm text-white/75">
            We are the champions of government university admissions. Our team has successfully enrolled over 100 students 
            into tuition-free German government universities — and we're ready to do the same for you.
          </p>
        </div>

        {/* Bachelor's Pathways */}
        <div className="mb-10">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-german-red/10 text-german-red">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold">Bachelor's Degree Pathways</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {bachelorPathways.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <h4 className="mb-2 text-lg font-bold">{p.title}</h4>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="flex items-center gap-2">
                  {p.steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-german-red/10 px-3 py-1 text-xs font-medium text-german-red">
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-german-red text-[10px] font-bold text-white">
                          {i + 1}
                        </span>
                        {step}
                      </span>
                      {i < p.steps.length - 1 && (
                        <ArrowRight className="h-3 w-3 shrink-0 text-muted-foreground" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Master's Pathways */}
        <div className="mb-10">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-german-gold/15 text-german-dark">
              <School className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold">Master's Degree Pathways</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {masterPathways.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <h4 className="mb-2 text-lg font-bold">{p.title}</h4>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="flex items-center gap-2">
                  {p.steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-german-gold/15 px-3 py-1 text-xs font-medium text-german-dark">
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-german-gold text-[10px] font-bold text-german-dark">
                          {i + 1}
                        </span>
                        {step}
                      </span>
                      {i < p.steps.length - 1 && (
                        <ArrowRight className="h-3 w-3 shrink-0 text-muted-foreground" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mx-auto max-w-3xl rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-bold text-center">Why Study at German Government Universities?</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Zero tuition fees at government universities",
              "Internationally recognized degrees",
              "Work permit included — 20 hrs/week during studies",
              "18-month post-study job seeker visa",
              "High quality of life and safety",
              "Gateway to permanent residency in Germany",
            ].map((b) => (
              <div key={b} className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-german-red" />
                <span className="text-sm text-muted-foreground">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Button
            size="lg"
            className="bg-german-red hover:bg-german-red/90 text-white font-bold shadow-lg px-10"
            asChild
          >
            <a
              href="https://wa.me/+919824925434?text=Hi%2C%20I%20would%20like%20to%20claim%20my%20free%20consultation%20call%20for%20studying%20in%20Germany."
              target="_blank"
              rel="noopener noreferrer"
            >
              <GraduationCap className="mr-2 h-5 w-5" />
              Claim Free Student Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudentPathwaysSection;
