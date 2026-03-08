import { GraduationCap, Briefcase, Plane } from "lucide-react";
import "flag-icons/css/flag-icons.min.css";

const countries = [
  { name: "India", code: "in", type: "Students & Professionals" },
  { name: "Latvia", code: "lv", type: "Spouse Visa" },
  { name: "Canada", code: "ca", type: "Travel Visa" },
  { name: "UK", code: "gb", type: "Fair Visit Visa" },
  { name: "Czech Republic", code: "cz", type: "Students & Professionals" },
  { name: "Poland", code: "pl", type: "Spouse Visa" },
  { name: "Netherlands", code: "nl", type: "Travel Visa" },
  { name: "Denmark", code: "dk", type: "Fair Visit Visa" },
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
              <span className={`fi fi-${c.code} text-2xl rounded-sm`} />
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
