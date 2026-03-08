import { GraduationCap, Briefcase, Users, Plane, Building2, BookOpen, ArrowRight, Clock, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: GraduationCap,
    title: "Student Visa",
    desc: "Complete guidance on German student visa requirements, university admission, blocked account setup, and embassy appointment preparation.",
    highlights: ["University Admission", "Blocked Account", "Embassy Prep"],
    color: "from-blue-500/10 to-indigo-500/10",
  },
  {
    icon: Briefcase,
    title: "Opportunity Card Visa",
    desc: "Navigate Germany's job-seeker visa with our expert support — eligibility assessment, point system guidance, and application filing.",
    highlights: ["Eligibility Check", "Point System", "Job Search Support"],
    color: "from-emerald-500/10 to-teal-500/10",
  },
  {
    icon: Users,
    title: "Family Reunion Visa",
    desc: "Reunite with your family in Germany. We handle spousal and dependent visa documentation, language requirements, and consulate submissions.",
    highlights: ["Spousal Visa", "Dependent Visa", "Language Cert"],
    color: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: Plane,
    title: "Travel Visa",
    desc: "Schengen short-stay visa made easy. Itinerary planning, travel insurance, financial proof, and embassy interview coaching.",
    highlights: ["Schengen Visa", "Travel Insurance", "Interview Coaching"],
    color: "from-orange-500/10 to-amber-500/10",
  },
  {
    icon: Building2,
    title: "Fair Visit Visa",
    desc: "Attend trade fairs and exhibitions in Germany. We manage invitation letters, business documentation, and expedited processing.",
    highlights: ["Invitation Letter", "Business Docs", "Fast Processing"],
    color: "from-rose-500/10 to-red-500/10",
  },
  {
    icon: BookOpen,
    title: "Online German Classes",
    desc: "Live interactive sessions from A1 to B2. Certified instructors, flexible schedules, and exam preparation for Goethe/TestDaF.",
    highlights: ["A1 to B2 Levels", "Live Sessions", "Exam Prep"],
    color: "from-cyan-500/10 to-sky-500/10",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">What We Offer</p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">Our Services</h2>
          <p className="text-muted-foreground">
            From visa applications to language mastery — everything you need for your Germany journey.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card
              key={s.title}
              className="group relative overflow-hidden border-border/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 transition-opacity group-hover:opacity-100`} />
              <CardHeader className="relative">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="mb-4 text-sm leading-relaxed">{s.desc}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {s.highlights.map((h) => (
                    <span key={h} className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      {h}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="relative">
                <Button variant="ghost" size="sm" className="gap-1 px-0 text-primary hover:text-primary/80" asChild>
                  <a href="#booking">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
