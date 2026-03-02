import { Phone, Mail, MessageCircle, MapPin, Instagram, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t bg-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                G
              </div>
              <span className="text-lg font-bold">Germany Help Center</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Germany's first online immigration agency. Your trusted partner for visas, documentation, and German language training.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-bold">Contact Us</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="tel:+49123456789" className="flex items-center gap-2 hover:text-foreground">
                <Phone className="h-4 w-4" /> +49 123 456 789
              </a>
              <a href="mailto:info@germanyhelpcenter.com" className="flex items-center gap-2 hover:text-foreground">
                <Mail className="h-4 w-4" /> info@germanyhelpcenter.com
              </a>
              <a href="https://wa.me/+49123456789" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Nußloch, Baden-Württemberg, Germany</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-bold">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#home" className="block text-muted-foreground hover:text-foreground">Home</a>
              <a href="#services" className="block text-muted-foreground hover:text-foreground">Services</a>
              <a href="#about" className="block text-muted-foreground hover:text-foreground">About Us</a>
              <a href="#booking" className="block text-muted-foreground hover:text-foreground">Book Consultation</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground">Privacy Policy</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground">Terms of Service</a>
            </div>
          </div>

          {/* Map */}
          <div>
            <h4 className="mb-4 font-bold">Find Us</h4>
            <div className="overflow-hidden rounded-xl border border-border/50">
              <iframe
                title="Germany Help Center Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10369.84913472!2d8.685!3d49.327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797bef7fa1d3ccf%3A0x4237e36cf2c8770!2sNu%C3%9Floch!5e0!3m2!1sen!2sde!4v1"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© 2026 Germany Help Center. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground" aria-label="Google Reviews">
              <Star className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-foreground" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
