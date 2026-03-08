import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Why Germany", href: "#why-germany" },
  { label: "Opportunity Card", href: "#opportunity-card" },
  { label: "For Students", href: "#student-pathways" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-xl shadow-md border-b border-border/50" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        <a href="#home" className="flex items-center gap-2.5">
          <img src={logo} alt="Germany Help Center" className="h-10 w-10 object-contain" />
          <span className="text-lg font-bold tracking-tight text-foreground">
            Germany Help Center
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-4 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-german-red"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <Button size="sm" className="bg-german-red hover:bg-german-red/90 text-white border-none shadow-sm" asChild>
            <a href="https://wa.me/+919824925434?text=Hi%2C%20I%20would%20like%20to%20claim%20my%20free%20consultation%20call.%0A%0AMy%20Full%20Name%3A%0ACity%3A%0AInterested%20in%3A%20Bachelors%20%2F%20Masters%20%2F%20Opportunity%20Card" target="_blank" rel="noopener noreferrer">Free Consultation</a>
          </Button>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t bg-card px-4 pb-4 lg:hidden">
          <nav className="flex flex-col gap-3 pt-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-foreground hover:text-german-red"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-4">
            <Button size="sm" className="w-full bg-german-red hover:bg-german-red/90 text-white border-none" asChild>
              <a href="https://wa.me/+919824925434?text=Hi%2C%20I%20would%20like%20to%20claim%20my%20free%20consultation%20call." target="_blank" rel="noopener noreferrer">Free Consultation</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
