import { useState } from "react";
import logoDark from "../assets/logos/logo-dark.png";
import logoLight from "../assets/logos/logo-light.png";

const navItems = [
  { label: "Solutions", href: "#solutions" },
  { label: "Approach", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Header({ theme, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nextTheme = theme === "dark" ? "light" : "dark";
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="LumiaTech Solutions home">
        <span className="brand-logo-frame">
          <img
            className={`brand-logo ${theme === "dark" ? "is-active" : ""}`}
            src={logoDark}
            alt="LumiaTech Solutions"
          />
          <img
            className={`brand-logo ${theme === "light" ? "is-active" : ""}`}
            src={logoLight}
            alt=""
            aria-hidden="true"
          />
        </span>
      </a>

      <button
        type="button"
        className="menu-toggle"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="primary-menu"
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`topbar-menu ${isMenuOpen ? "is-open" : ""}`}
        id="primary-menu"
      >
        <nav className="nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="topbar-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => {
              onToggleTheme();
              closeMenu();
            }}
            aria-label={`Switch to ${nextTheme} mode`}
            title={`Switch to ${nextTheme} mode`}
          >
            <span>{theme === "dark" ? "Dark" : "Light"}</span>
          </button>

          <a className="button button-primary button-small" href="#contact" onClick={closeMenu}>
            Book a consult
          </a>
        </div>
      </div>
    </header>
  );
}
