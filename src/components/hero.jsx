import { useEffect, useState } from "react";

const stats = [
  { value: "99.9%", label: "uptime-minded delivery" },
  { value: "48 hrs", label: "rapid response window" },
  { value: "24/7", label: "monitoring-ready systems" },
];

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
    title: "Modern workspaces",
    text: "Digital environments designed for focus, collaboration, and smoother delivery.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    title: "Connected teams",
    text: "Systems that keep communication, automation, and execution in sync.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    title: "Practical innovation",
    text: "Technology choices grounded in real operations, clear goals, and measurable outcomes.",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

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
      </div>

      <div
        className="hero-visual hero-slider"
        aria-label="LumiaTech project photography"
      >
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="hero-slider-frame">
          {slides.map((slide, index) => (
            <article
              key={slide.title}
              className={`hero-slide ${index === activeSlide ? "is-active" : ""}`}
              aria-hidden={index === activeSlide ? "false" : "true"}
            >
              <img src={slide.image} alt={slide.title} />
              <div className="hero-slide-overlay" />
              <div className="hero-slide-copy">
                <p className="hero-slide-kicker">Featured view</p>
                <h2>{slide.title}</h2>
                <p>{slide.text}</p>
              </div>
            </article>
          ))}

          <div className="hero-slider-dots" aria-label="Hero slide controls">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                className={index === activeSlide ? "is-active" : ""}
                aria-label={`Show slide ${index + 1}: ${slide.title}`}
                aria-pressed={index === activeSlide}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
