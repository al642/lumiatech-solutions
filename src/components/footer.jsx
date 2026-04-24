export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="footer-title">LumiaTech Solutions</p>
        <p>
          Practical technology strategy, software delivery, and dependable
          support for modern businesses.
        </p>
      </div>
      <div className="footer-meta">
        <a href="mailto:hello@lumiatechsolutions.com">hello@lumiatechsolutions.com</a>
        <a href="tel:+256777938415">+256777938415</a>
        <a href="tel:+256746886326">+256746886326</a>
        <div className="footer-socials">
          <a
            className="footer-social"
            href="https://wa.me/256777938415"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a
            className="footer-social"
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            className="footer-social"
            href="https://facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </div>
        <span>Remote-first delivery across product, cloud, and IT operations.</span>
      </div>
    </footer>
  );
}
