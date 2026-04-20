const contactPoints = [
  "Discovery call and requirements review",
  "Delivery roadmap with realistic milestones",
  "Build, launch, and post-launch support",
];

export default function Contact() {
  return (
    <section className="section section-contact" id="contact">
      <div className="contact-panel">
        <div className="section-heading">
          <p className="eyebrow">Let’s talk</p>
          <h2>Need a dependable tech partner for your next move?</h2>
          <p>
            Share your idea, bottleneck, or modernization goal and we’ll help
            turn it into a clear technical plan.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            {contactPoints.map((point) => (
              <div key={point} className="list-row">
                <span className="list-dot" />
                <p>{point}</p>
              </div>
            ))}
          </div>

          <div className="contact-card contact-card-accent">
            <p className="contact-label">Email</p>
            <a href="mailto:hello@lumiatechsolutions.com">
              hello@lumiatechsolutions.com
            </a>
            <p className="contact-label">Availability</p>
            <p>Open for new builds, redesigns, and ongoing support retainers.</p>
            <a className="button button-primary" href="mailto:hello@lumiatechsolutions.com">
              Request proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
