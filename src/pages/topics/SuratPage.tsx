import { MapPin, ShieldCheck, Users } from "lucide-react";

import TopicPageLayout from "@/components/TopicPageLayout";
import SectionHeading from "@/components/SectionHeading";
import { CtaPair } from "@/components/Cta";
import { Reveal } from "@/lib/motion";
import { GOOGLE_BUSINESS_URL, LINKEDIN_JIGAR, MAPS_URL, OFFICE_ADDRESS } from "@/lib/cta";

/**
 * /germany-consultancy-surat/
 *
 * The only page on this site built from MEASURED demand rather than reasoning.
 * Search Console, last 3 months (India): "germany consultancy in surat" — 17
 * impressions at position 15.6, zero clicks; plus "best consultancy for germany in
 * surat" (11), "germany consultancy near me" (4), "german consultant near me" (2),
 * "germany counselling near me" (2). Roughly 43 impressions of local-consultancy
 * intent, and until now the homepage was ranking for it by accident with no page
 * addressing it.
 *
 * ⚠️ TWO HARD CONSTRAINTS, both from CLAUDE.md § Content guardrails:
 *
 * 1. NO LocalBusiness / ProfessionalService schema, and nothing that reads as
 *    "visit our office". There is no walk-in office; the Surat address is
 *    residential, and marking it visitable would contradict the page. This is why
 *    the page leads with how the work actually happens instead of an address block.
 * 2. NO rating or review count anywhere. The Google profile is LINKED, never
 *    quoted — src/test/landing.test.tsx enforces exactly this on the homepage and
 *    the same rule applies here.
 *
 * Content is written fresh rather than reusing a homepage section, so this page
 * adds no duplicate copy to the site.
 */
const SuratPage = () => (
  <TopicPageLayout
    eyebrow="Surat &amp; Gujarat"
    heading="Germany consultancy in Surat"
    lede={
      <>
        Germany Help Center is run by two people: <b>Pareshbhai Vithani</b> in Surat, and{" "}
        <b>Jigar Rajeshbhai Vithani</b>, who has lived in Germany since 2014. Germany only. Public
        universities only. <b>No university commission, ever</b> — which means you are the only
        client we have.
      </>
    }
  >
    <section className="py-14 sm:py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="How this actually works"
          icon={Users}
          title={
            <>
              Not an office you visit &mdash; <span className="text-brand">a person in Germany</span>
            </>
          }
          subtitle="Most consultancies sell you a desk in a building. The useful half of this job happens in Germany, not in Gujarat."
        />

        <Reveal direction="up">
          <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border/60 bg-surface p-5">
              <h3 className="font-display text-base font-bold text-foreground">
                India desk &mdash; Surat
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-body">
                Pareshbhai handles documentation, finance and the paperwork that has to be right
                before anything is submitted. He works from Surat and speaks Gujarati, Hindi and
                English.
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-surface p-5">
              <h3 className="font-display text-base font-bold text-foreground">
                Germany desk &mdash; Nu&szlig;loch
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-body">
                Jigarbhai has lived in Germany since 2014 and works in German industry. Questions
                about universities, cities, insurance, blocked accounts and what happens after you
                land are answered by someone who did all of it.{" "}
                <a
                  href={LINKEDIN_JIGAR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand underline"
                >
                  His LinkedIn
                </a>{" "}
                is there so you can check that yourself.
              </p>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-ink-muted">
            We work by phone, WhatsApp and video call rather than walk-in meetings, so being in
            Surat, Vadodara, Ahmedabad or anywhere else makes no difference to the service. Our
            registered address is {OFFICE_ADDRESS} &mdash;{" "}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand"
            >
              on the map
            </a>
            , and{" "}
            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand"
            >
              on Google
            </a>
            . It is not a drop-in office; please message first and we will arrange a time.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="py-14 sm:py-20 bg-sunken">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Why the fee model matters"
          icon={ShieldCheck}
          title={
            <>
              We take <span className="text-brand">no commission</span> from any university
            </>
          }
          subtitle="It is the difference between advice and a sales pitch, and it is checkable."
        />

        <Reveal direction="up">
          <div className="mx-auto mt-8 max-w-3xl space-y-4 text-[0.9375rem] leading-relaxed text-ink-body">
            <p>
              Most agencies are paid by the institution that enrols you. That is legal and common,
              and it is also why so many Indian students end up at private universities they could
              not have found on their own: those are the ones that pay a commission. Public German
              universities do not.
            </p>
            <p>
              We only work with <b>public</b> universities and we are paid by you, not by them. So
              when we say a programme is wrong for you, there is nothing on our side that changes
              if you go anyway. In October 2025 Germany&rsquo;s ambassador to India publicly warned
              students not to trust agents, alongside a student-visa refusal rate from India of
              roughly 25%. That warning was earned by the industry, and the only sensible answer to
              it is a fee model you can inspect.
            </p>
            <p>
              What we cannot do is promise a result. <b>Every visa decision belongs to the German
              mission</b>, not to us, and nobody who tells you otherwise is being straight with you.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="py-14 sm:py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="What we handle"
          icon={MapPin}
          title={
            <>
              From the first question to <span className="text-brand">your first month there</span>
            </>
          }
        />

        <Reveal direction="up">
          <ul className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
            {[
              "Bachelor's and master's admission at public universities",
              "APS India verification, including the 70% Class 12 rule",
              "Blocked account, insurance and the money side",
              "Student visa documentation and the appointment",
              "Opportunity Card (Chancenkarte) for working professionals",
              "Spouse and family reunion visas",
              "German language classes, A1 to B2",
              "Landing in Germany — Anmeldung, bank, insurance",
            ].map((item) => (
              <li
                key={item}
                className="rounded-lg border border-border/60 bg-surface p-4 text-sm text-ink-body"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-10 max-w-2xl text-center">
            <CtaPair
              location="surat"
              topic="working with you from Surat"
              label="Ask a question on WhatsApp"
            />
          </div>
        </Reveal>
      </div>
    </section>
  </TopicPageLayout>
);

export default SuratPage;
