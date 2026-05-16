function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 3.5a8.25 8.25 0 0 0-7.06 12.52l-1.02 3.72 3.86-1.01A8.25 8.25 0 1 0 12 3.5Zm0 1.55a6.7 6.7 0 1 1-3.54 12.38l-.28-.17-2.09.55.56-2.02-.18-.29A6.7 6.7 0 0 1 12 5.05Zm-2.34 3.54c-.14 0-.36.05-.55.26-.19.21-.72.7-.72 1.71s.74 1.99.84 2.13c.1.14 1.42 2.28 3.52 3.1 1.74.68 2.09.54 2.47.51.38-.04 1.22-.5 1.39-.98.17-.48.17-.89.12-.98-.05-.09-.19-.14-.4-.25-.21-.1-1.22-.6-1.41-.67-.19-.07-.33-.1-.47.1-.14.21-.54.67-.66.81-.12.14-.24.16-.45.05-.21-.1-.88-.32-1.68-1.03-.62-.55-1.04-1.24-1.16-1.45-.12-.21-.01-.32.09-.43.09-.09.21-.24.31-.36.1-.12.14-.21.21-.35.07-.14.04-.26-.02-.36-.05-.1-.47-1.14-.64-1.56-.17-.41-.34-.35-.47-.36h-.32Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M8 3.5h8A4.51 4.51 0 0 1 20.5 8v8a4.51 4.51 0 0 1-4.5 4.5H8A4.51 4.51 0 0 1 3.5 16V8A4.51 4.51 0 0 1 8 3.5Zm0 1.7A2.8 2.8 0 0 0 5.2 8v8A2.8 2.8 0 0 0 8 18.8h8a2.8 2.8 0 0 0 2.8-2.8V8A2.8 2.8 0 0 0 16 5.2H8Zm4 3.18A3.62 3.62 0 1 1 8.38 12 3.62 3.62 0 0 1 12 8.38Zm0 1.7A1.92 1.92 0 1 0 13.92 12 1.92 1.92 0 0 0 12 10.08Zm4.05-2.56a.88.88 0 1 1-.88.88.88.88 0 0 1 .88-.88Z" />
    </svg>
  );
}

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
            aria-label="Message LumiaTech Solutions on WhatsApp"
            title="WhatsApp"
          >
            <WhatsAppIcon />
          </a>
          <a
            className="footer-social"
            href="https://www.instagram.com/lumiatech2?igsh=azU3bTA3cjNhdDd3"
            target="_blank"
            rel="noreferrer"
            aria-label="Follow LumiaTech Solutions on Instagram"
            title="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
        <span>Remote-first delivery across product, cloud, and IT operations.</span>
      </div>
    </footer>
  );
}
