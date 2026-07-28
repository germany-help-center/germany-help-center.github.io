import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "@/components/SectionHeading";
import { CtaPair } from "@/components/Cta";
import { Reveal } from "@/lib/motion";
import { faqs } from "@/lib/faqs";

const FAQSection = () => {
  return (
    <section id="faq" className="section bg-sunken">
      <div className="shell">
        <SectionHeading
          eyebrow="Questions"
          icon={HelpCircle}
          title={
            <>
              The things people ask <span className="text-brand">before</span> they trust us
            </>
          }
          subtitle="Straight answers, including the unflattering ones."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={faq.question} direction="up" delay={i * 45}>
                <AccordionItem
                  value={`faq-${i}`}
                  className="overflow-hidden rounded-xl border border-border bg-surface px-6 shadow-warm-sm transition-colors duration-200 data-[state=open]:border-brand/30"
                >
                  <AccordionTrigger className="py-5 text-left text-[1.0625rem] font-bold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-[0.9375rem] leading-relaxed text-ink-muted">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        </div>

        <Reveal direction="up" delay={100} className="mx-auto mt-12 max-w-2xl">
          <p className="mb-5 text-center text-[0.9375rem] text-ink-muted">
            Still unsure? Ask the awkward question directly — that&apos;s what the free call is for.
          </p>
          <CtaPair
            location="faq"
            topic="a question I couldn't find answered"
            label="Ask us — free"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default FAQSection;
