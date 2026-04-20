const principles = [
  "Clear communication from discovery to deployment",
  "Solutions designed around business goals, not hype",
  "Support that continues after launch",
];

export default function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="split-layout">
        <div className="section-heading">
          <p className="eyebrow">Why LumiaTech</p>
          <h2>We combine agency-level polish with grounded technical delivery.</h2>
          <p>
            Whether you need a clean marketing site, an internal operations
            tool, a cloud refresh, or ongoing IT support, we focus on solutions
            that are maintainable, measurable, and built for real teams.
          </p>
        </div>

        <div className="list-panel">
          {principles.map((item) => (
            <div key={item} className="list-row">
              <span className="list-dot" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
