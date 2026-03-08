import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
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
        scrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Germany Help Center" className="h-10 w-10 object-contain" />
          <span className={`text-lg font-bold transition-colors ${scrolled ? "text-foreground" : "text-white"}`}>
            Germany Help Center
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-german-gold ${
                scrolled ? "text-foreground" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button size="sm" className="bg-german-red hover:bg-german-red/90 text-white" asChild>
            <a href="https://wa.me/+919824925434" target="_blank" rel="noopener noreferrer">Contact Us</a>
          </Button>
          <Button size="icon" variant="outline" className="bg-whatsapp text-whatsapp-foreground border-none hover:bg-whatsapp/90" asChild>
            <a href="https://wa.me/+919824925434" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <MessageCircle className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t bg-card px-4 pb-4 md:hidden">
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
          <div className="mt-4 flex gap-3">
            <Button size="sm" className="flex-1 bg-german-red hover:bg-german-red/90 text-white" asChild>
              <a href="https://wa.me/+919824925434" target="_blank" rel="noopener noreferrer">Contact Us</a>
            </Button>
            <Button size="icon" className="bg-whatsapp text-whatsapp-foreground border-none hover:bg-whatsapp/90" asChild>
              <a href="https://wa.me/+919824925434" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageCircle className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
