import { Briefcase, CheckCircle, FileText, Users, Award, ArrowRight, ShieldCheck, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const requirements = [
  "Recognized university degree or qualified vocational training",
  "Minimum 3 years of work experience in your field",
  "German language skills (A1/A2) or English (B2) proficiency",
  "Proof of financial means for your stay in Germany",
  "Must score at least 6 points on the eligibility criteria",
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "No Need to Quit Your Job",
    desc: "Apply from India while continuing your current employment. Only relocate after visa approval.",
  },
  {
    icon: Briefcase,
    title: "Keep Applying Until Approved",
    desc: "Even if your first application needs adjustments, keep working and reapply — zero career risk.",
  },
  {
    icon: Award,
    title: "Access Germany's Job Market",
    desc: "Get 12 months to find a qualified job in Germany — one of Europe's strongest economies.",
  },
];

const services = [
  {
    icon: FileText,
    title: "Document Preparation",
    desc: "We prepare and review every document for your job applications to meet German employer standards.",
  },
  {
    icon: GraduationCap,
    title: "Interview Coaching",
    desc: "Mock interviews, cultural training, and proven strategies to crack interviews with German companies.",
  },
  {
    icon: Users,
    title: "Job Application Support",
    desc: "CV/resume formatting, cover letter writing, and LinkedIn profile optimization for the German market.",
  },
];

const OpportunityCardSection = () => {
  return (
    <section id="opportunity-card" className="py-14 lg:py-20 bg-gradient-to-b from-background to-muted/40">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-2 inline-block rounded-full bg-german-gold/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-german-dark">
            🇩🇪 Featured Program
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Germany Opportunity Card <span className="text-german-red">(Chancenkarte)</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Germany's points-based visa for skilled professionals. Apply from India without leaving your job —
            relocate <span className="font-semibold text-foreground">only after visa approval</span>.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: Requirements + Benefits */}
          <div className="space-y-8">
            {/* Requirements */}
            <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold">Basic Requirements</h3>
              <ul className="space-y-3">
                {requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-german-red" />
                    <span className="text-sm text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why it's risk-free */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Zero Risk for Working Professionals</h3>
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-4 rounded-xl border border-border/30 bg-card p-4 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-german-gold/15 text-german-dark">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">{b.title}</p>
                    <p className="text-sm text-muted-foreground">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Complementary Services + Expert */}
          <div className="space-y-8">
            {/* Complementary Services */}
            <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
              <h3 className="mb-1 text-xl font-bold">Complimentary Career Services</h3>
              <p className="mb-5 text-sm text-muted-foreground">Included with every Opportunity Card application</p>
              <div className="space-y-4">
                {services.map((s) => (
                  <div key={s.title} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-german-red/10 text-german-red">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">{s.title}</p>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expert Card */}
            <div className="rounded-2xl border border-german-gold/30 bg-gradient-to-br from-german-dark to-primary p-6 text-primary-foreground shadow-lg">
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-german-gold">Meet Your Expert</p>
              <h3 className="mb-3 text-xl font-bold text-white">Jigar Vithani</h3>
              <p className="mb-4 text-sm leading-relaxed text-white/80">
                With extensive experience in the German job market, Jigar brings first-hand knowledge of what German employers look for. 
                His mission is to help professionals from around the world start a better life in Germany — guiding you from application to your first day at work.
              </p>
              <ul className="mb-5 space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-german-gold" /> German job market insider
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-german-gold" /> Proven interview coaching methods
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-german-gold" /> End-to-end career support
                </li>
              </ul>
              <Button
                size="lg"
                className="w-full bg-german-gold text-german-dark hover:bg-german-gold/90 font-bold shadow-xl"
                asChild
              >
                <a
                  href="https://wa.me/+919824925434?text=Hi%2C%20I%20would%20like%20to%20claim%20my%20free%20consultation%20call%20for%20the%20Opportunity%20Card.%0A%0AMy%20Full%20Name%3A%0ACity%3A%0AInterested%20in%3A%20Bachelors%20Visa%20%2F%20Masters%20Visa%20%2F%20Opportunity%20Card%20%2F%20Spouse%20Visa%20%2F%20Travel%20Visa%20%2F%20Fair%20Visit%20Visa%20%2F%20General%20Inquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Claim Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunityCardSection;
