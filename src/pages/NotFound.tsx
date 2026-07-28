import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FlagRail } from "@/components/Flag";
import { whatsapp } from "@/lib/cta";
import logo from "@/assets/logo.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: no route for", location.pathname);
  }, [location.pathname]);

  return (
    <div className="ink-ground grain relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <FlagRail className="absolute inset-x-0 top-0" />
      <div
        className="absolute -left-24 top-1/3 h-80 w-80 animate-aurora rounded-full bg-brand/25 blur-[110px]"
        aria-hidden="true"
      />

      <div className="relative">
        <img src={logo} alt="" className="mx-auto h-16 w-16 object-contain" />
        <p className="tnum mt-8 font-display text-7xl font-extrabold text-white/90">404</p>
        <h1 className="mt-4 text-2xl font-extrabold text-white">This page took a different route</h1>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-white/60">
          The address <code className="tnum text-white/80">{location.pathname}</code> doesn&apos;t exist
          on germanyhelpcenter.com. Everything about studying, working and settling in Germany is on the
          home page.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-full bg-brand px-8 font-bold text-white hover:bg-brand-hover">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Back to the home page
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/25 bg-white/[0.06] px-7 font-bold text-white hover:bg-white/15 hover:text-white"
          >
            <a href={whatsapp("something I couldn't find on your site")} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
              Ask us on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
