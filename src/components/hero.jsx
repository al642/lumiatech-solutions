import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.pexels.com/photos/9301248/pexels-photo-9301248.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "African-led delivery",
    text: "Local teams shaping clear digital systems for practical business growth.",
    position: "center 42%",
  },
  {
    image:
      "https://images.pexels.com/photos/4913749/pexels-photo-4913749.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Connected professionals",
    text: "Tools and workflows built around how modern East African teams work.",
    position: "center 36%",
  },
  {
    image:
      "https://images.pexels.com/photos/7651932/pexels-photo-7651932.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Practical innovation",
    text: "Technology choices grounded in real operations, clear goals, and measurable outcomes.",
    position: "center 44%",
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
    <section
      className="hero hero-slider"
      id="top"
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
            style={{ "--slide-position": slide.position }}
          >
            <img src={slide.image} alt={slide.title} />
            <div className="hero-slide-overlay" />
          </article>
        ))}

        <div className="hero-content">
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

          <div className="hero-slide-copy">
            <p className="hero-slide-kicker">Featured view</p>
            <h2>{slides[activeSlide].title}</h2>
            <p>{slides[activeSlide].text}</p>
          </div>
        </div>

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
    </section>
  );
}
