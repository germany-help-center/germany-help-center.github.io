import { Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookingSection = () => {
  return (
    <section
      id="booking"
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background: "linear-gradient(160deg, hsl(220 20% 7%) 0%, hsl(220 18% 12%) 50%, hsl(220 15% 8%) 100%)",
      }}
    >
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-german-gold/[0.04] blur-[80px]" />
      <div className="absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-german-red/[0.04] blur-[80px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Calendar className="mx-auto mb-4 h-12 w-12 text-german-gold" />
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Book Your Free 30-Minute Consultation
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-white/50">
            Speak directly with our Germany-based expert about your visa, university admission, or career path in Germany.
          </p>

          <div className="mx-auto mb-8 max-w-2xl overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm">
            <div className="flex items-center justify-center p-16">
              <div className="text-center text-white/40">
                <Calendar className="mx-auto mb-3 h-10 w-10" />
                <p className="text-sm font-medium">Calendly Booking Widget</p>
                <p className="mt-1 text-xs">Embed will appear here once connected</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 px-8 text-base shadow-xl shadow-whatsapp/20 border-none"
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
