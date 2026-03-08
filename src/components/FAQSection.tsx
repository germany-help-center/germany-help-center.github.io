import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What services does Germany Help Center offer?",
    a: "Whether you're a student dreaming of a German university, a working professional eyeing the Opportunity Card, or a family wanting to reunite in Germany — we've got you covered. We offer end-to-end support for Student Visas, Opportunity Card (Chancenkarte) Visas, Family Reunion Visas, Travel/Schengen Visas, Fair Visit Visas, and Online German Language Classes from A1 to B2. Think of us as your one-stop shop — from the first document to the final visa stamp.",
  },
  {
    q: "How much does the consultation cost?",
    a: "Your first 30-minute consultation is 100% free — no strings attached, no hidden charges. We know how many 'consultants' in India charge just to have a conversation. We don't believe in that. We sit with you, understand your profile, your goals, and tell you honestly what's possible and what the best path forward looks like. Only after that do we talk about next steps.",
  },
  {
    q: "Which countries do you serve?",
    a: "We work with clients across India — whether you're in Delhi, Mumbai, Bangalore, Hyderabad, Chennai, or a smaller city. Geography is no barrier because we work 100% online. We've also helped clients from Latvia, Canada, the UK, Czech Republic, Poland, Netherlands, Denmark, and beyond. If you have a dream to reach Germany, we're here — wherever you are.",
  },
  {
    q: "What is the Opportunity Card (Chancenkarte) visa?",
    a: "The Opportunity Card is Germany's answer to the global talent shortage — a points-based visa that lets skilled professionals move to Germany and look for a job on the ground. Points are given for your qualifications, German language skills, work experience, and age. Many Indian IT professionals, engineers, healthcare workers, and tradespeople qualify without realising it. We'll assess your profile for free and tell you exactly where you stand.",
  },
  {
    q: "How long does the visa process take?",
    a: "Timelines vary depending on the visa type and how prepared your documents are. Student visas generally take 6–12 weeks, Opportunity Cards around 8–16 weeks. One of the biggest reasons applications get delayed in India is incomplete or incorrect paperwork. We ensure your file is airtight from day one — saving you weeks of back-and-forth with the embassy.",
  },
  {
    q: "Do I need to know German to apply for a visa?",
    a: "It depends on the visa. For student visas, many English-taught programs don't require German at all. For the Opportunity Card, even basic German (A1–B1) can boost your points significantly. Family reunion visas require A1 German for the spouse joining. The good news? We offer live online German classes from A1 to B2 — taught by qualified tutors — so language will never be the reason your dream gets delayed.",
  },
  {
    q: "Can I work with you fully online?",
    a: "Yes — and this is actually one of our biggest advantages. Everything happens over WhatsApp, video calls, and email. No need to visit a consultancy office in your city, take a day off, or pay for travel. Whether you're in Pune, Patna, or a small town in UP — our process is exactly the same for you as it is for someone in a metro. India has taught us that the best service doesn't need a fancy address.",
  },
  {
    q: "How do you handle everything online? Why don't you need an office?",
    a: "Think about it — you book flights, file ITR, and even apply for Aadhaar updates online. Germany's immigration process works the same way. Every step — APS application, university admission, visa application — is done digitally. All we need from you are scanned copies of your documents, shared via WhatsApp or email. No need to travel to a metro city, take time off work, or sit in a waiting room. By not running a fancy office with high overheads, we pass those savings directly to you — offering expert guidance at fees that are genuinely affordable. We focus on results, not appearances. That's the German way — and honestly, it's the smart Indian way too.",
  },
  {
    q: "How does the visa process work with digital documents?",
    a: "Once we have your documents digitally, we prepare a complete, embassy-ready visa file for you. Germany has digitized its visa process — meaning you need to carry very few physical documents to your appointment. We organise everything, do a quality check, and send you a print-ready file. Before your appointment, we also do a dedicated visa interview preparation session over video call — so you walk in confident, not nervous. You bring the passport; we bring the preparation.",
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
