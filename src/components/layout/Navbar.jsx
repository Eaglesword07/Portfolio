import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../../data/navLinks";
import Button from "../ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const dark = pathname === "/contact"; // the Contact page is black

  const linkClass = ({ isActive }) =>
    `transition-opacity hover:opacity-100 ${isActive ? "font-semibold opacity-100" : "opacity-70"}`;

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md transition-colors ${
        dark ? "bg-black/85 text-paper" : "bg-paper/90 text-ink"
      }`}
    >
      <nav className="flex items-center justify-between px-5 py-5 text-sm md:px-16">
        <Link to="/" className="text-xs uppercase font-semibold" onClick={() => setOpen(false)}>
          <div className="text-primary">
                <a href="#home">
                    <span className="text-primary">
                        Douglas
                    </span>
                </a>
            </div>
            <div className="flex items-center">
                <a href="#home">
                    <span>
                        <span className="mr-1 text-primary">&nbsp; •</span>
                        Adekanye
                    </span>
                </a>
            </div>
        </Link>

        <ul className="hidden gap-7 md:flex">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <NavLink to={to} end className={linkClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Button to="/contact" variant={dark ? "light" : "dark"}>
              Book a Call
            </Button>
          </div>
          <button
            type="button"
            className="rounded-full border border-current px-4 py-2 text-xs font-medium md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-current/20 px-5 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 py-5 text-base">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <NavLink to={to} end className={linkClass} onClick={() => setOpen(false)}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button to="/contact" variant={dark ? "light" : "dark"} onClick={() => setOpen(false)}>
            Book a Call
          </Button>
        </div>
      )}
    </header>
  );
}