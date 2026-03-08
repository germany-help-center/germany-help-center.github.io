import { Calendar, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookingSection = () => {
  return (
    <section
      id="booking"
      className="relative overflow-hidden py-14 lg:py-20 bg-german-red"
    >
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/5" />
      <div className="absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-white/5" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Phone className="mx-auto mb-4 h-12 w-12 text-white/80" />
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Claim Your Free Consultation Call
          </h2>
          <p className="mx-auto mb-4 max-w-xl text-lg text-white/80">
            Get a <span className="font-bold text-white">free 30-minute consultation</span> with our Germany-based expert. No obligations, no hidden fees — just honest guidance.
          </p>
          <p className="mx-auto mb-8 max-w-lg text-sm text-white/60">
            We'll assess your profile, discuss the best visa pathway, and give you a clear roadmap to Germany.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-white text-german-red hover:bg-white/90 px-10 text-base shadow-xl border-none font-bold"
              asChild
            >
              <a href="https://wa.me/+919824925434?text=Hi%2C%20I%20would%20like%20to%20claim%20my%20free%20consultation%20call.%0A%0AMy%20Full%20Name%3A%0ACity%3A%0AInterested%20in%3A%20Bachelors%20Visa%20%2F%20Masters%20Visa%20%2F%20Opportunity%20Card%20%2F%20Spouse%20Visa%20%2F%20Travel%20Visa%20%2F%20Fair%20Visit%20Visa%20%2F%20General%20Inquiry" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Claim Free Consultation Now
              </a>
            </Button>
          </div>

          <p className="mt-4 text-xs text-white/50">
            💬 Message us on WhatsApp and our team will schedule your call within 2 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
