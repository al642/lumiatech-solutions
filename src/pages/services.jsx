const services = [
  {
    title: "Web Design & Development",
    text: "Modern business websites, landing pages, dashboards, and custom web applications.",
  },
  {
    title: "Cloud & DevOps",
    text: "Deployment pipelines, hosting setup, platform hardening, and cloud cost-conscious modernization.",
  },
  {
    title: "IT Support & Security",
    text: "Operational support, endpoint guidance, access control, backup planning, and security-minded upkeep.",
  },
  {
    title: "Automation & Integrations",
    text: "Workflow mapping, system integrations, CRM or operations automation, and practical AI enablement.",
  },
];

export default function Services() {
  return (
    <section className="section" id="solutions">
      <div className="section-heading">
        <p className="eyebrow">Core services</p>
        <h2>Solutions built to strengthen the way your business runs.</h2>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <article key={service.title} className="service-card">
            <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
