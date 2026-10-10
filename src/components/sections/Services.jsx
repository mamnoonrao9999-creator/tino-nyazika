const STEPS = [
  [
    "Strategy",
    "Organic Content Strategy",
    "I will do your content strategy and content calendar so all you have to do is show up and film the content.",
  ],
  [
    "Management",
    "Done-for-you Management",
    "I take care of the calendar, editing, scheduling and publishing so you don't have to manage the process yourself. So you only spend 2–3 hours on social media per month.",
  ],
  [
    "Sales",
    "Social Connected to Sales",
    "I will connect your social media and your back-end so you get sales. That way you are not just posting to get views.",
  ],
];

export default function Services() {
  return (
    <section className="bg-secondary px-6 pb-24 text-secondary-foreground">
      <div className="mx-auto max-w-3xl border-t border-secondary-foreground/10 pt-20">
        <p className="eyebrow">
          Everything included in the partnership — 3 step model
        </p>
        <h2 className="mt-3 text-4xl md:text-5xl">
          What you get when we work together
        </h2>
        <div className="mt-12 divide-y divide-secondary-foreground/10">
          {STEPS.map(([l, t, b]) => (
            <div key={l} className="py-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                — {l}
              </p>
              <h3 className="mt-3 text-2xl">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary-foreground/75">
                {b}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}