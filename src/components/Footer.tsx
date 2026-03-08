import { Phone, Mail, MessageCircle, MapPin, Instagram, Star } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border/50 bg-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="Germany Help Center" className="h-10 w-10 object-contain" />
              <span className="text-lg font-bold">Germany Help Center</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Germany-only immigration specialists. Led by Jigar Vithani (in Germany since 2014) — your trusted partner for visas, documentation, and German language training.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-bold">Contact Us</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="tel:+919824925434" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="h-4 w-4 text-german-red" /> +91 98249 25434 (Pareshbhai Vithani)
              </a>
              <a href="tel:+491749074389" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="h-4 w-4 text-german-gold" /> +49 1749 074389 (Jigarbhai Vithani, Germany)
              </a>
              <a href="mailto:contact@germanyhelpcenter.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" /> contact@germanyhelpcenter.com
              </a>
              <a href="https://wa.me/+919824925434" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <MessageCircle className="h-4 w-4 text-whatsapp" /> WhatsApp (Pareshbhai)
              </a>
              <a href="https://wa.me/+491749074389" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <MessageCircle className="h-4 w-4 text-whatsapp" /> WhatsApp (Jigarbhai, Germany)
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-german-red" />
                <span>103, Pramukh Daradhan Apartment, Patidar Char Rasta, Near Patidar Bhavan, Mahidharpura, Surat - 395003</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-bold">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#home" className="block text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="#services" className="block text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#about" className="block text-muted-foreground hover:text-foreground transition-colors">About Us</a>
              <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors">Contact Us</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>

          {/* Map */}
          <div>
            <h4 className="mb-4 font-bold">Find Us</h4>
            <a href="https://maps.app.goo.gl/b7wALqS7V52Hf6w3A" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-xl border border-border/50">
              <iframe
                title="Germany Help Center Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0!2d72.8282276!3d21.2041251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f51f7ddb91d%3A0x699e066d4c152c91!2sGermany%20Help%20Center!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="180"
                style={{ border: 0, pointerEvents: "none" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© 2026 Germany Help Center. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors" aria-label="Google Reviews">
              <Star className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/germanyhelpcenter/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
