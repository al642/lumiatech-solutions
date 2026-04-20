const stats = [
  { value: "99.9%", label: "uptime-minded delivery" },
  { value: "48 hrs", label: "rapid response window" },
  { value: "24/7", label: "monitoring-ready systems" },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Tech solutions for ambitious teams</p>
        <h1>Build smarter systems, sharper products, and reliable digital operations.</h1>
        <p className="hero-text">
          LumiaTech Solutions helps startups, SMEs, and growing organizations
          modernize their digital stack with product design, cloud services,
          business automation, cybersecurity support, and hands-on IT delivery.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            Start your project
          </a>
          <a className="button button-secondary" href="#solutions">
            Explore services
          </a>
        </div>
        <div className="stats-grid" aria-label="Key company metrics">
          {stats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="signal-panel">
          <div className="signal-header">
            <span />
            <span />
            <span />
          </div>
          <div className="signal-screen">
            <div className="screen-grid" />
            <div className="screen-card screen-card-main">
              <small>Infrastructure</small>
              <strong>Cloud migration</strong>
            </div>
            <div className="screen-card screen-card-side">
              <small>Automation</small>
              <strong>+38% faster workflows</strong>
            </div>
            <div className="screen-line screen-line-one" />
            <div className="screen-line screen-line-two" />
          </div>
        </div>
      </div>
    </section>
  );
}
