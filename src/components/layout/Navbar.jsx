import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../../data/navLinks";
import Button from "../ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const { pathname } = useLocation();
  const onContact = pathname === "/contact"; // black page
  const onAbout = pathname === "/about"; // full-bleed photo hero

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setPastHero(y > Math.min(window.innerHeight, 820));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Light text is used whenever the bar sits over something dark
  const lightText = onContact || (onAbout && !pastHero && !open);

  let bar;
  if (onContact) {
    bar = `fixed inset-x-0 top-0 text-paper transition-colors duration-300 ${
      scrolled || open ? "bg-black" : "bg-transparent"
    }`;
  } else if (onAbout) {
    const state = open || pastHero
      ? "bg-paper/90 text-ink backdrop-blur-md"
      : scrolled
        ? "bg-black/55 text-paper backdrop-blur-md"
        : "bg-transparent text-paper";
    bar = `fixed inset-x-0 top-0 transition-colors duration-300 ${state}`;
  } else {
    bar = "sticky top-0 bg-paper/90 text-ink backdrop-blur-md";
  }

  const linkClass = ({ isActive }) =>
    `transition-opacity hover:opacity-100 ${isActive ? "font-semibold opacity-100" : "opacity-70"}`;

  return (
    <header className={`z-50 ${bar}`}>
      <nav aria-label="Main" className="flex items-center justify-between px-5 py-5 text-sm md:px-16">
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
            <Button to="/contact" variant={lightText ? "light" : "dark"}>
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
          <Button to="/contact" variant={lightText ? "light" : "dark"} onClick={() => setOpen(false)}>
            Book a Call
          </Button>
        </div>
      )}
    </header>
  );
}