// components/Navbar.jsx — Sticky top navigation bar
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const NAV_LINKS = [
  { label: "Home",       href: "/",                to: "/"                },
  { label: "Why Us",     href: "/#whyus",          to: "/#whyus"          },
  { label: "Curriculum", href: "/#curriculum",     to: "/#curriculum"     },
  { label: "The Course", href: "/course-different", to: "/course-different" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="nav-root" role="navigation" aria-label="Main navigation">
      <div className="nav-inner">

        {/* ── Logo ── */}
        <Link to="/" className="nav-logo" aria-label="IISPPR Home">
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
        </Link>

        {/* ── Nav links ── */}
        <ul className="nav-links" role="list">
          {NAV_LINKS.map(({ label, href, to }) => {
            const isActive = to === "/course-different"
              ? pathname === "/course-different"
              : pathname === "/";
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`nav-links__item${isActive && to === pathname ? " nav-links__item--active" : ""}`}
                  aria-current={isActive && to === pathname ? "page" : undefined}
                >
                  {label}
                </a>
              </li>
            );
          })}
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
