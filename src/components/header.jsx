const navItems = [
  { label: "Solutions", href: "#solutions" },
  { label: "Approach", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="LumiaTech Solutions home">
        <span className="brand-mark">L</span>
        <span className="brand-copy">
          <strong>LumiaTech</strong>
          <span>Solutions</span>
        </span>
      </a>

      <nav className="nav" aria-label="Primary">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="button button-primary button-small" href="#contact">
        Book a consult
      </a>
    </header>
  );
}
