import { GraduationCap, CheckCircle, ArrowRight, Award, BookOpen, School } from "lucide-react";
import { Button } from "@/components/ui/button";

const bachelorPathways = [
  {
    title: "Pathway 1: Directly After 12th Standard",
    desc: "Apply to German government universities right after completing your 12th standard. Begin your tuition-free bachelor's degree without any gap year.",
    steps: [
      { label: "Complete 12th Standard", detail: "With strong academic scores" },
      { label: "Apply for Studienkolleg or Preparatory Course", detail: "Foundation year in Germany" },
      { label: "Clear Assessment Test", detail: "Qualify for university admission" },
      { label: "Start Bachelor's in Germany", detail: "Tuition-free government university" },
    ],
  },
  {
    title: "Pathway 2: After 12th + 1 Year of College in India",
    desc: "Completed one year of college in India? You qualify for direct admission to German government universities — no Studienkolleg required.",
    steps: [
      { label: "Complete 12th + 1 Year College", detail: "Any recognised Indian university" },
      { label: "Direct University Admission", detail: "No Studienkolleg needed" },
      { label: "Start Bachelor's in Germany", detail: "Tuition-free government university" },
    ],
  },
];

const masterPathways = [
  {
    title: "Master's After Bachelor's Degree",
    desc: "Hold a bachelor's degree from India? Apply directly to German government universities for a tuition-free master's program in your field.",
    steps: [
      { label: "Complete Bachelor's in India", detail: "In a relevant field" },
      { label: "Apply to German Universities", detail: "We handle everything" },
      { label: "Start Master's in Germany", detail: "Tuition-free government university" },
    ],
  },
  {
    title: "Double Master's Program",
    desc: "Already completed a master's in India? Pursue a second master's at a German government university — tuition-free — to boost your career prospects in Europe.",
    steps: [
      { label: "Complete Master's in India", detail: "Any recognised degree" },
      { label: "Apply for 2nd Master's", detail: "Expand your specialisation" },
      { label: "Start Double Master's in Germany", detail: "Tuition-free government university" },
    ],
  },
];

interface PathwayStep {
  label: string;
  detail: string;
}

const StepTimeline = ({ steps, color }: { steps: PathwayStep[]; color: "red" | "gold" }) => {
  const dotBg = color === "red" ? "bg-german-red" : "bg-german-gold";
  const lineBg = color === "red" ? "bg-german-red/20" : "bg-german-gold/20";
  const textColor = color === "red" ? "text-german-red" : "text-german-dark";

  return (
    <div className="mt-5 space-y-0">
      {steps.map((step, i) => (
        <div key={i} className="flex items-start gap-4">
          {/* Timeline line + dot */}
          <div className="flex flex-col items-center">
            <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${dotBg} text-xs font-bold text-white`}>
              {i + 1}
            </div>
            {i < steps.length - 1 && (
              <div className={`w-0.5 flex-1 min-h-[32px] ${lineBg}`} />
            )}
          </div>
          {/* Content */}
          <div className="pb-5">
            <p className={`text-sm font-semibold ${textColor}`}>{step.label}</p>
            <p className="text-xs text-muted-foreground">{step.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

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
            Multiple pathways available for students at every academic stage.
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
                className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <h4 className="text-lg font-bold">{p.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <StepTimeline steps={p.steps} color="red" />
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
                className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <h4 className="text-lg font-bold">{p.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <StepTimeline steps={p.steps} color="gold" />
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
              href="https://wa.me/+919824925434?text=Hi%2C%20I%20would%20like%20to%20claim%20my%20free%20consultation%20call%20for%20studying%20in%20Germany.%0A%0AMy%20Full%20Name%3A%0ACity%3A%0AInterested%20in%3A%20Bachelors%20%2F%20Masters%20%2F%20Opportunity%20Card"
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
