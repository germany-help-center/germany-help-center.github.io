import { Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookingSection = () => {
  return (
    <section
      id="booking"
      className="relative overflow-hidden py-20 lg:py-28 bg-german-red"
    >
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/5" />
      <div className="absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-white/5" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Calendar className="mx-auto mb-4 h-12 w-12 text-white/80" />
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Book Your Free 30-Minute Consultation
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-white/70">
            Speak directly with our Germany-based expert about your visa, university admission, or career path in Germany.
          </p>

          <div className="mx-auto mb-8 max-w-2xl overflow-hidden rounded-2xl border border-white/20 bg-white/10">
            <div className="flex items-center justify-center p-16">
              <div className="text-center text-white/50">
                <Calendar className="mx-auto mb-3 h-10 w-10" />
                <p className="text-sm font-medium">Calendly Booking Widget</p>
                <p className="mt-1 text-xs">Embed will appear here once connected</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 px-8 text-base shadow-xl border-none"
              asChild
            >
              <a href="https://wa.me/+919824925434" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Or Message on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
