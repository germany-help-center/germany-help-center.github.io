import { GraduationCap, Briefcase, Plane } from "lucide-react";
import "flag-icons/css/flag-icons.min.css";

const countries = [
  { name: "India", code: "in" },
  { name: "Latvia", code: "lv" },
  { name: "Canada", code: "ca" },
  { name: "UK", code: "gb" },
  { name: "Czech Republic", code: "cz" },
  { name: "Poland", code: "pl" },
  { name: "Netherlands", code: "nl" },
  { name: "Denmark", code: "dk" },
];

const CountriesSection = () => {
  return (
    <section id="countries" className="border-b border-border/50 bg-card py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-german-red">
            Global Reach, Germany Focus
          </p>
          <h2 className="mb-3 text-2xl font-extrabold tracking-tight md:text-3xl">
            We've Helped Students & Professionals from These Countries Reach Germany
          </h2>
          <p className="text-sm text-muted-foreground">
            Our clients from 8+ countries have successfully secured German visas for studies, careers, and family reunions.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {countries.map((c) => (
            <div
              key={c.name}
              className="flex items-center gap-3 rounded-xl border border-border/50 bg-background px-5 py-3 text-sm font-medium text-foreground shadow-sm"
            >
              <span className="text-3xl leading-none">{c.flag}</span>
              <div className="text-left">
                <span className="block font-semibold">{c.name}</span>
                <span className="block text-xs text-muted-foreground">Students & Professionals</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <GraduationCap className="h-4 w-4 text-german-gold" />
            <span>University Admissions</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Briefcase className="h-4 w-4 text-german-red" />
            <span>Job Seeker Visas</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Plane className="h-4 w-4 text-german-gold" />
            <span>Family Reunions</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;
