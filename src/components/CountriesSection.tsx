const countries = [
  { name: "India", flag: "🇮🇳" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Czech Republic", flag: "🇨🇿" },
  { name: "Latvia", flag: "🇱🇻" },
  { name: "Finland", flag: "🇫🇮" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "Turkey", flag: "🇹🇷" },
  { name: "Pakistan", flag: "🇵🇰" },
  { name: "Nigeria", flag: "🇳🇬" },
  { name: "Bangladesh", flag: "🇧🇩" },
];

const CountriesSection = () => {
  return (
    <section className="border-b bg-card py-12">
      <div className="container mx-auto px-4">
        <p className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Successfully processed visas from 10+ countries
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {countries.map((c) => (
            <div
              key={c.name}
              className="flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
            >
              <span className="text-lg">{c.flag}</span>
              {c.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;
