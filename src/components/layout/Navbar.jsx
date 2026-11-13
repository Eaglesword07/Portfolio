import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/navLinks";

export default function Navbar() {
  return (
    <nav className="flex gap-6 px-6 py-5 md:px-16">
      {navLinks.map(({ label, to }) => (
        <NavLink
          key={to}
          to={to}
          end
          className={({ isActive }) => (isActive ? "font-semibold" : "opacity-70")}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}