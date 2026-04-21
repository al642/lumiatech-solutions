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

export default function Home() {
  return (
    <section className="section" id="process">
      <div className="section-heading">
        <p className="eyebrow">What we bring</p>
        <h2>Technology execution that balances speed, clarity, and long-term support.</h2>
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
    </section>
  );
}
