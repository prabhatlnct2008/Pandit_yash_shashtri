const FACTS = [
  "Usually available within the week",
  "All samagri brought by me",
  "Clear price told upfront",
  "The same Pandit jee, every time",
  "Serving South Delhi & Gurgaon",
];

export function QuickFacts() {
  return (
    <section
      className="bg-ivory-dark border-y border-muted"
      aria-label="Quick facts"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base text-charcoal/80">
          {FACTS.map((fact, index) => (
            <li key={fact} className="flex items-center gap-3">
              <span className="font-medium">{fact}</span>
              {index < FACTS.length - 1 && (
                <span className="text-gold" aria-hidden="true">
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
