import logoDark from "../assets/logos/lumiatech_dark_logo.jpeg";
import logoLight from "../assets/logos/lumiatech_light_logo.jpeg";

const navItems = [
  { label: "Solutions", href: "#solutions" },
  { label: "Approach", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Header({ theme, onToggleTheme }) {
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="LumiaTech Solutions home">
        <img
          className="brand-logo"
          src={theme === "dark" ? logoDark : logoLight}
          alt="LumiaTech Solutions"
        />
      </a>

      <nav className="nav" aria-label="Primary">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="topbar-actions">
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={`Switch to ${nextTheme} mode`}
          title={`Switch to ${nextTheme} mode`}
        >
          <span>{theme === "dark" ? "Dark" : "Light"}</span>
        </button>

        <a className="button button-primary button-small" href="#contact">
          Book a consult
        </a>
      </div>
    </header>
  );
}
