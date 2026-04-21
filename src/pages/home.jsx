const highlights = [
  {
    title: "Product design that moves quickly",
    text: "We shape websites, portals, and business tools with clear UX, strong visual systems, and scalable frontends.",
  },
  {
    title: "Infrastructure that stays resilient",
    text: "From hosting and deployment pipelines to cloud migration and maintenance, we design for reliability from day one.",
  },
  {
    title: "Automation with business impact",
    text: "We connect tools, reduce repetitive work, and introduce practical AI-assisted workflows where they actually help.",
  },
];

const principles = [
  "Clear communication from discovery to deployment",
  "Solutions designed around business goals, not hype",
  "Support that continues after launch",
];

export default function Home() {
  return (
    <section className="section" id="process">
      <div className="section-heading">
        <p className="eyebrow">What we bring</p>
        <h2>Technology execution that balances speed, clarity, and long-term support.</h2>
        <p>
          Whether you need a clean marketing site, an internal operations
          tool, a cloud refresh, or ongoing IT support, we focus on solutions
          that are maintainable, measurable, and built for real teams.
        </p>
      </div>

      <div className="feature-grid">
        {highlights.map((item, index) => (
          <article key={item.title} className="feature-card">
            <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className="value-strip" aria-label="Why teams choose LumiaTech">
        {principles.map((item, index) => (
          <div key={item} className="value-chip">
            <span className="list-count">{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
