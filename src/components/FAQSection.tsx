import { HelpCircle, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/lib/motion";
import { whatsapp } from "@/lib/cta";
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

        <Reveal direction="up" delay={100} className="mx-auto mt-12 max-w-xl text-center">
          <p className="text-[0.9375rem] text-ink-muted">
            Still unsure? Ask the awkward question directly — that&apos;s what the free call is for.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-5 rounded-full bg-brand px-8 text-base font-bold text-white shadow-warm-lg hover:bg-brand-hover"
          >
            <a href={whatsapp("a question I couldn't find answered")} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
              Ask us on WhatsApp
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default FAQSection;
