import { MessageCircle, FileCheck, Send, CalendarCheck, CheckCircle2, Plane, ShieldCheck, GraduationCap, Users } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Free Consultation",
    desc: "Book a 30-minute call or message us on WhatsApp. We assess your profile, eligibility, and goals.",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "Document Preparation",
    desc: "We collect and prepare all required documents — school certificates, university transcripts, letters of recommendation (LOR), motivation letters, and certified translations.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "APS Verification",
    desc: "We prepare your complete APS file, review every detail, and submit your documents to APS for academic credential verification and approval.",
  },
  {
    icon: GraduationCap,
    step: "04",
    title: "University Application & Immatriculation",
    desc: "We shortlist the best universities for your profile, submit applications before deadlines, and once admission is confirmed, handle the full immatriculation process — a completely stress-free experience.",
  },
  {
    icon: CalendarCheck,
    step: "05",
    title: "Visa Appointment & Preparation",
    desc: "We coach you for the embassy interview, ensure all documents are in order, and accompany you through the appointment process.",
  },
  {
    icon: CheckCircle2,
    step: "06",
    title: "Visa Approved!",
    desc: "Receive your visa and get ready for your new life in Germany.",
  },
  {
    icon: Plane,
    step: "07",
    title: "Onboarding in Germany",
    desc: "Post-arrival support — city registration, bank account, health insurance, housing guidance, and settling-in assistance.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-14 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-german-red">Simple Process</p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">How It Works</h2>
          <p className="text-muted-foreground">
            From first call to settling in Germany — our streamlined 7-step process makes your journey completely stress-free.
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          {/* Connector line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.step} className="group relative flex flex-col items-center text-center">
                {/* Step number circle */}
                <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                  <s.icon className="h-7 w-7" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-german-gold text-xs font-bold text-german-dark">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
