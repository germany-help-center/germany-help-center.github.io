import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What services does Germany Help Center offer?",
    a: "We provide end-to-end support for Student Visas, Opportunity Card (Job Seeker) Visas, Family Reunion Visas, Travel/Schengen Visas, Fair Visit Visas, and Online German Language Classes (A1–B2). From document preparation to embassy appointments — we handle everything.",
  },
  {
    q: "How much does the consultation cost?",
    a: "Our initial 30-minute consultation is completely free! During this call, we assess your profile, discuss your goals, and recommend the best visa pathway for you. There are no hidden charges for the first session.",
  },
  {
    q: "Which countries do you serve?",
    a: "We serve candidates from across the globe who dream of building their future in Germany. As an online-first agency, geography is no barrier. We have successfully helped clients from India, Latvia, Canada, UK, Czech Republic, Poland, Netherlands, Denmark, and many more countries to reach Germany and start their new life — whether for studies, career, or family reunion.",
  },
  {
    q: "What is the Opportunity Card (Chancenkarte) visa?",
    a: "The Opportunity Card is Germany's points-based visa for skilled workers seeking employment. Points are awarded based on qualifications, language skills, work experience, and age. We help assess your eligibility and guide you through the entire application process.",
  },
  {
    q: "How long does the visa process take?",
    a: "Processing times vary by visa type and country. Student visas typically take 6–12 weeks, while Opportunity Cards may take 8–16 weeks. We expedite the process by ensuring your application is complete and error-free from the start.",
  },
  {
    q: "Do I need to know German to apply for a visa?",
    a: "Language requirements vary by visa type. Student visas may require German or English proficiency depending on the program. Family reunion visas typically require A1 German. We offer German classes from A1 to B2 to help you meet any language requirements.",
  },
  {
    q: "Can I work with you fully online?",
    a: "Absolutely! We are Germany's first fully online immigration agency. Everything from consultation to document submission can be done remotely via WhatsApp, video calls, and email. No office visits needed.",
  },
  {
    q: "How do you handle everything online? Why don't you need an office?",
    a: "Every step to reach Germany is conducted online — be it the APS application, university application, or visa application. We just need your documents in digital format. Since the entire process is digital by nature, a physical office is simply not necessary.",
  },
  {
    q: "How does the visa process work with digital documents?",
    a: "Since we have all your documents digitally, and Germany's current visa application process has been digitalized requiring minimum physical documents, we prepare a complete file for you — you just have to print it and you're ready for your visa appointment. Of course, we also explain everything over a video call and in a dedicated visa interview preparation session.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-14 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-german-red">Got Questions?</p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Everything you need to know about our services and processes.</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border/50 bg-card px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
