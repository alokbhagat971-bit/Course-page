// components/Navbar.jsx — Sticky top navigation bar
import "../styles/Navbar.css";

const NAV_LINKS = [
  { label: "Home",    href: "#home",    active: false },
  { label: "Why Us",  href: "#whyus",   active: true  },
  { label: "Faculty", href: "#faculty", active: false },
];

export default function Navbar() {
  return (
    <nav className="nav-root" role="navigation" aria-label="Main navigation">
      <div className="nav-inner">

        {/* ── Logo ── */}
        <a href="#home" className="nav-logo" aria-label="IISPPR Home">
          {/* Replace src with your actual logo filename in /public */}
          <img
            src="iisppr-logo.png"
            alt="IISPPR logo"
            className="nav-logo__img"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
          <div className="nav-logo__text">
            <span className="nav-logo__name">IISPPR</span>
            <span className="nav-logo__tagline">Academic Excellence</span>
          </div>
        </a>

        {/* ── Nav links ── */}
        <ul className="nav-links" role="list">
          {NAV_LINKS.map(({ label, href, active }) => (
            <li key={href}>
              <a
                href={href}
                className={`nav-links__item${active ? " nav-links__item--active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── CTA ── */}
        <a
          href="https://iisppracademy.com/course"
          className="nav-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Course Now
        </a>

      </div>
    </nav>
  );
}
