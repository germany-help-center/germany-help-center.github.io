/**
 * FAQ content, kept in one module so the rendered accordion and the FAQPage
 * JSON-LD in index.html state exactly the same thing.
 *
 * IMPORTANT: `index.html` carries a static mirror of these questions and
 * answers for crawlers that don't execute JavaScript. If you edit this file,
 * update that block too.
 *
 * Every figure and rule here was verified in July 2026. Anything with a date or
 * an amount attached needs re-checking each intake — see `reviewedOn` below.
 */

export const reviewedOn = "2026-07-28";

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "What does Germany Help Center actually do?",
    answer:
      "We handle German student visas (bachelor's and master's at public universities), the Opportunity Card (Chancenkarte) for skilled professionals, family-reunion and spouse visas, Schengen travel visas, trade-fair visit visas, and live online German classes from A1 to B2. Germany is the only country we work on. We don't place students in Canada, the UK or Australia, which is why the detail on the German process is right.",
  },
  {
    question: "Is studying in Germany really free?",
    answer:
      "Tuition at public universities is €0 in fifteen of Germany's sixteen federal states — for Indians and Germans alike. The exception is Baden-Württemberg, which charges non-EU students €1,500 per semester; that affects Heidelberg, Mannheim, Tübingen, Hohenheim and KIT among others. Everywhere else you pay only a semester contribution of roughly €100–€400, which at many universities includes a regional public-transport pass. What is never free is living: budget €950–€1,250 a month, plus the blocked account you must fund up front.",
  },
  {
    question: "How much money do I need in the blocked account for 2026?",
    answer:
      "€11,904 for the first year — that's the Federal Foreign Office figure, derived from the BAföG rate, released back to you at €992 per month once you arrive. It is your own money held in escrow, not a fee. On top of it, budget the €75 visa fee, the ₹18,000 APS India fee (non-refundable, whatever the outcome), around €110–€165 a month for mandatory student health insurance, and translation costs. Amounts are set annually by the German authorities and we confirm the current figures for your intake on the call.",
  },
  {
    question: "What is the new 70% rule for APS India?",
    answer:
      "Since 15 March 2026, APS India requires a minimum 70% aggregate in Class 12 for undergraduate applicants, applied across all boards — CBSE, ICSE and every state board. It takes effect from the Winter Semester 2026/27 intake. Master's and PhD applicants are not affected. This is a hard gate: below 70%, a bachelor's application to a German public university is not viable this cycle, and we will tell you that in the first call rather than take your money. Applications submitted before 15 March 2026 are assessed under the previous rules.",
  },
  {
    question: "Do I need to sit the dMAT?",
    answer:
      "Only if you are applying for a master's from the Summer Semester 2027 intake onward AND your prior degree is in engineering, commerce, accounting, finance, economics, business or management. If that's you, the dMAT — the Digital Master Test — becomes part of your APS India documentation, and APS cannot complete your procedure without the certificate. Winter Semester 2026/27 applicants do not need it, and you are exempt if you completed APS registration or shipped your complete documents before 29 June 2026, or already hold an APS certificate. For the 2026 cycle: registration closes 15 September 2026, the exam is on 26 September 2026, results on 12 October 2026, and the fee is €150 paid to g.a.s.t. Message us if you're unsure whether it applies to you — that answer is free.",
  },
  {
    question: "What does the first consultation cost?",
    answer:
      "Nothing. The first thirty minutes and your profile assessment are free, with no deposit and no registration fee. If you decide to go ahead, you get a fixed fee in writing, itemised by service, before any money moves. No university or private college pays us a commission — you are the only client we have, which is exactly why the shortlist we build has nothing to do with what pays us.",
  },
  {
    question: "Can you guarantee my visa?",
    answer:
      "No, and nobody honestly can — the decision belongs to the German mission. Roughly one in four German student visa applications from India is refused; Germany's own ambassador to India said so publicly in October 2025, and attributed much of it to commission-driven agents pushing weak files. Anyone promising you a guaranteed visa is lying. What we do promise is a file that survives scrutiny, and if a refusal comes we read the reasoning, fix what's fixable and go again.",
  },
  {
    question: "Do I need German to get a visa?",
    answer:
      "It depends on the route. Many master's programmes are taught entirely in English and need no German at all. For the Opportunity Card, German earns you points — A2 is worth one, B1 two, B2 or above three — so it is often the difference between six points and five. Spouses joining on a family-reunion visa generally need A1, but there are real exemptions: since June 2024, spouses of degree-qualified Skilled Worker permit holders and of EU Blue Card holders can come without it. We teach A1 to B2 live online, so language need never be the thing that stops you.",
  },
  {
    question: "How long does the whole process take?",
    answer:
      "Plan on six to twelve months from first call to boarding pass, and work backwards from the intake. APS verification typically takes two to six weeks but can stretch past ten if a university is slow to confirm. uni-assist advises applying at least eight weeks before its deadlines — commonly 15 July for the winter semester and 15 January for the summer semester, though individual programmes set earlier dates. A complete student visa file usually clears in six to eight weeks from the appointment, longer in peak season. The parts controlled by an authority are not parts we can accelerate; the parts controlled by paperwork, we can.",
  },
  {
    question: "You work entirely online — where are you actually based?",
    answer:
      "Jigarbhai Vithani lives in Nußloch, Baden-Württemberg, and has been in Germany since 2014 — he handles everything that has to happen on German soil, on a German number. Pareshbhai Vithani is in Surat, Gujarat: he takes the first call and runs documentation, finance and partner relations, so your file is checked in India before it is ever seen in Germany. We have a registered address in Surat, but deliberately no walk-in counselling office anywhere: the German process is digital end to end, so an office would add overhead to your fee and nothing to your outcome. Everything runs over WhatsApp, video calls and email — identically whether you're in Mumbai or a small town in Gujarat.",
  },
  {
    question: "What happens after I land in Germany?",
    answer:
      "The first fortnight is where most people flounder, so it's included: city registration (Anmeldung), opening a bank account, activating health insurance, housing leads, and a SIM card. Because Jigarbhai is physically in Baden-Württemberg rather than advising from another continent, that support is real rather than a line in a brochure. Longer term, a student visa converts to an 18-month permit to look for qualified work after you graduate — that clock starts at graduation, is not extendable, and you must apply before your student permit expires.",
  },
  {
    question: "Are you lawyers, and are you accredited?",
    answer:
      "No to both, and we'd rather say so. We prepare documentation and prepare you; we are not Rechtsanwälte and we don't give legal advice on German residence law — for that we refer you to a licensed German lawyer. We also hold no ICEF or AIRC accreditation. Those are agency-network memberships held by agencies that earn university commissions, and since we don't take commissions, we don't have them. Verify us instead: video-call Jigarbhai on his German number, ask to speak to a past client, and bring your parents to the call.",
  },
];
