import { Star, Quote, ExternalLink } from "lucide-react";
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

const SocialProofSection = () => {
  return (
    <section id="testimonials" className="bg-muted/50 py-14 lg:py-20">
      <div className="container mx-auto px-4">
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
            <div className="flex justify-center">
              <iframe
                src="https://www.instagram.com/reel/DNC6WnQvH3w/embed"
                className="rounded-lg border-0"
                width="100%"
                height="480"
                allowTransparency
                allow="encrypted-media"
                title="Instagram Reel"
              />
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {[
                { id: "DNC6WnQvH3w", label: "Reel 1" },
                { id: "DN6RoEcANeS", label: "Reel 2" },
                { id: "DLCk-p1v14H", label: "Reel 3" },
                { id: "DNwyTftXofF", label: "Reel 4" },
                { id: "DCs93qFtSp8", label: "Reel 5" },
                { id: "DBErqHkNLpd", label: "Reel 6" },
              ].map((reel) => (
                <a
                  key={reel.id}
                  href={`https://www.instagram.com/reel/${reel.id}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground hover:bg-german-red hover:text-white transition-colors"
                >
                  ▶ {reel.label}
                </a>
              ))}
            </div>
            <a
              href="https://www.instagram.com/germanhelpcenter/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-german-red hover:underline"
            >
              @germanhelpcenter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
