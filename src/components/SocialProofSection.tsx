import { Star, Quote, ExternalLink, CheckCircle, Globe, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  { name: "Priya Sharma", country: "India", text: "Germany Help Center made my student visa process incredibly smooth. From blocked account to embassy appointment — everything was handled perfectly!", rating: 5 },
  { name: "Tomáš Novák", country: "Czech Republic", text: "I got my Opportunity Card visa approved on the first attempt thanks to their expert guidance. Highly professional team!", rating: 5 },
  { name: "Anna Meijer", country: "Netherlands", text: "The family reunion process was stress-free. They took care of all documentation and kept me updated at every step.", rating: 5 },
  { name: "Ravi Patel", country: "India", text: "Best online German classes I've attended. Went from A1 to B1 in 6 months with their amazing instructors.", rating: 5 },
  { name: "Jānis Bērziņš", country: "Latvia", text: "Professional, responsive, and truly knowledgeable about German immigration. My fair visit visa was approved in record time.", rating: 5 },
];

const stats = [
  { icon: CheckCircle, value: "100+", label: "Successful Visas" },
  { icon: Globe, value: "10+", label: "Countries Served" },
  { icon: Star, value: "5.0", label: "Google Rating" },
  { icon: Clock, value: "10+", label: "Years in Germany" },
];

const SocialProofSection = () => {
  return (
    <section id="testimonials" className="bg-muted/50 py-14 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Stats bar */}
        <div className="mb-16 rounded-2xl border border-border/50 bg-primary p-1">
          <div className="grid grid-cols-2 gap-1 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-primary p-6 text-center text-primary-foreground">
                <s.icon className="mx-auto mb-2 h-7 w-7 text-german-gold" />
                <p className="text-3xl font-extrabold">{s.value}</p>
                <p className="mt-1 text-sm text-primary-foreground/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-german-red">Testimonials</p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">What Our Clients Say</h2>
          <p className="text-muted-foreground">Trusted by hundreds of successful applicants worldwide.</p>
        </div>

        <div className="mx-auto max-w-4xl px-12">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2">
                  <Card className="h-full border-border/50">
                    <CardContent className="flex h-full flex-col p-6">
                      <Quote className="mb-3 h-8 w-8 text-german-gold/30" />
                      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                      <div className="flex items-center gap-1 mb-2">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} className="h-4 w-4 fill-german-gold text-german-gold" />
                        ))}
                      </div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.country}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Google Reviews + Instagram placeholders */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <a
            href="https://share.google/9w8dFRzE2N7vmm8DV"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-border/50 bg-card p-8 text-center transition-all hover:shadow-lg hover:border-german-gold/50"
          >
            <div className="mb-3 flex items-center justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-german-gold text-german-gold" />
              ))}
            </div>
            <p className="text-2xl font-bold">5.0 on Google Reviews</p>
            <p className="mt-1 text-sm text-muted-foreground">Based on 50+ verified reviews</p>
            <Button variant="outline" size="sm" className="mt-4 gap-2 group-hover:bg-german-red group-hover:text-white group-hover:border-german-red transition-colors">
              <ExternalLink className="h-4 w-4" />
              Read All Reviews on Google
            </Button>
          </a>
          <div className="rounded-xl border border-border/50 bg-card p-8 text-center">
            <p className="mb-4 text-2xl font-bold">📸 Follow Us on Instagram</p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "DNC6WnQvH3w", label: "🎓 Student Journey" },
                { id: "DN6RoEcANeS", label: "✈️ Visa Success" },
                { id: "DLCk-p1v14H", label: "🏫 University Life" },
                { id: "DNwyTftXofF", label: "📋 Tips & Tricks" },
                { id: "DCs93qFtSp8", label: "🎉 Client Stories" },
                { id: "DBErqHkNLpd", label: "🇩🇪 Life in Germany" },
              ].map((reel) => (
                <a
                  key={reel.id}
                  href={`https://www.instagram.com/reel/${reel.id}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex aspect-square items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-border/30 text-xs font-medium text-foreground hover:from-purple-500/20 hover:to-pink-500/20 hover:shadow-md transition-all p-2 text-center"
                >
                  {reel.label}
                </a>
              ))}
            </div>
            <Button asChild size="sm" className="mt-4 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white">
              <a href="https://www.instagram.com/germanyhelpcenter/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                @germanyhelpcenter
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
