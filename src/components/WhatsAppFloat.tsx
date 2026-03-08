import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/+919824925434?text=Hi%2C%20I%20would%20like%20to%20claim%20my%20free%20consultation%20call."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground shadow-2xl transition-all hover:scale-105 pl-4 pr-5 py-3 ring-4 ring-whatsapp/20"
      aria-label="Claim Free Consultation"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="text-sm font-bold hidden sm:inline">Free Consultation</span>
    </a>
  );
};

export default WhatsAppFloat;
