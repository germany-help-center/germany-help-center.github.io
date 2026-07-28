/**
 * Single source of truth for every outbound link on the site.
 *
 * The WhatsApp deep links carry a long prefilled message so an enquiry arrives
 * already structured. Building them here (rather than pasting encoded URLs into
 * components) keeps that template consistent and editable in one place.
 */

/** Pareshbhai Vithani — India line. The primary enquiry number. */
export const PHONE_IN = "+919824925434";
/** Jigarbhai Vithani — Germany line. */
export const PHONE_DE = "+491749074389";

export const EMAIL = "contact@germanyhelpcenter.com";

/** The sister product: independent dMAT (Digital Master Test) practice platform. */
export const DMAT_URL = "https://dmat.germanyhelpcenter.com/";

export const MAPS_URL = "https://maps.app.goo.gl/b7wALqS7V52Hf6w3A";

export const OFFICE_ADDRESS =
  "103, Pramukh Daradhan Apartment, Patidar Char Rasta, Near Patidar Bhavan, Mahidharpura, Surat 395003, Gujarat, India";

const INTEREST_LINE =
  "Interested in: Bachelors Visa / Masters Visa / Opportunity Card / Spouse Visa / Travel Visa / Fair Visit Visa / German Classes / General Inquiry";

/**
 * Build a WhatsApp deep link with a prefilled, structured enquiry.
 *
 * @param topic  What the visitor was looking at when they clicked, so the first
 *               message already says why they are writing.
 * @param phone  Which line to open. Defaults to the India number.
 */
export function whatsapp(topic = "a free consultation call", phone: string = PHONE_IN): string {
  const message = [
    `Hi, I would like to claim my free consultation for ${topic}.`,
    "",
    "My Full Name:",
    "City:",
    "Current Qualification:",
    INTEREST_LINE,
  ].join("\n");

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/** The generic CTA used by the header, the floating button and the footer. */
export const WHATSAPP_PRIMARY = whatsapp();

export const TEL_IN = `tel:${PHONE_IN}`;
export const TEL_DE = `tel:${PHONE_DE}`;
export const MAILTO = `mailto:${EMAIL}`;
