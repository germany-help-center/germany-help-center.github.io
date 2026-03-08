import { MessageCircle, FileCheck, Send, CheckCircle2 } from "lucide-react";

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
    desc: "We guide you through every document — translations, blocked accounts, cover letters, and financial proofs.",
  },
  {
    icon: Send,
    step: "03",
    title: "Application & Filing",
    desc: "We prepare and review your complete application, book embassy appointments, and handle submissions.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Visa Approved!",
    desc: "Receive your visa and get post-arrival support — city registration, bank account, health insurance guidance.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-german-red">Simple Process</p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">How It Works</h2>
          <p className="text-muted-foreground">
            From first call to visa approval — our streamlined 4-step process makes your Germany journey hassle-free.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Connector line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">
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
