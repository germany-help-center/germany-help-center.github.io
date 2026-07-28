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

/**
 * The founder's LinkedIn. This is the single most important trust link on the
 * site: in a category where families are warned that consultants are
 * unverifiable, a checkable professional trail is worth more than any badge.
 * Note it resolves to de.linkedin.com — a small corroboration that he is
 * actually in Germany.
 */
export const LINKEDIN_JIGAR = "https://www.linkedin.com/in/jigar-vithani-33255b169/";

export const MAPS_URL = "https://maps.app.goo.gl/b7wALqS7V52Hf6w3A";

/**
 * Booking link for the free 30-minute assessment.
 *
 * TODO(owner): replace with a real Cal.com / Google Calendar appointment URL.
 * "Message us" is ambiguous — a slot on a calendar tells the visitor exactly
 * what happens next, which converts materially better. Until a real URL exists,
 * `hasBookingLink` is false and every booking CTA falls back to WhatsApp, so
 * nothing on the page is ever a dead end.
 */
export const BOOKING_URL = "";
export const hasBookingLink = BOOKING_URL.length > 0;

/** The promise printed under CTAs. Keep it one you can actually keep. */
export const RESPONSE_TIME = "We reply within 4 working hours";

/**
 * Where a "book the assessment" CTA should point: the calendar if configured,
 * otherwise the WhatsApp enquiry.
 */
export function bookingHref(topic = "the free 30-minute assessment"): string {
  return hasBookingLink ? BOOKING_URL : whatsapp(topic);
}

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
