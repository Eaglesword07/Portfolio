import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../data/navLinks";
import { contact, socials } from "../../data/socials";

const heading = "text-xs font-medium uppercase tracking-widest opacity-60";
const linkHover = "transition-colors hover:text-accent";

export default function Footer() {
  const { pathname } = useLocation();
  const onContact = pathname === "/contact"; // the Contact page is pure black

  return (
    <footer
      className={`overflow-hidden px-5 pt-20 text-paper md:px-16 ${
        onContact ? "border-t border-line bg-black" : "bg-ink"
      }`}
    >
      <div className="flex flex-wrap justify-between gap-12">
        <div className="max-w-[640px]">
          <p className="flex items-center text-xs font-medium uppercase tracking-widest opacity-80">
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-[#3ddc84]" />
            Available for work
          </p>
          <h2 className="mt-4 text-[clamp(28px,3.6vw,48px)]">
            Have an idea? Let's build it together.
          </h2>
          <a
            href={`mailto:${contact.email}`}
            className="mt-6 inline-block border-b-2 border-accent pb-1 text-[clamp(18px,2.2vw,28px)] font-medium"
          >
            {contact.email} ↗
          </a>
        </div>

        <div className="flex flex-wrap gap-[72px] text-sm">
          <div className="flex flex-col gap-3">
            <p className={heading}>Pages</p>
            {navLinks.map(({ label, to }) => (
              <Link key={to} to={to} className={linkHover}>
                {label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className={heading}>Social</p>
            {socials.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={linkHover}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-between gap-3 text-[13px] opacity-80">
        <span>© {new Date().getFullYear()} [Douglas Adekanye]</span>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={linkHover}
        >
          Back to top ↑
        </button>
      </div>

      <div
        aria-hidden="true"
        className="mb-[-0.1em] mt-6 whitespace-nowrap text-[clamp(56px,16vw,240px)] font-semibold leading-[0.8] tracking-[-0.05em] text-line"
      >
        [Douglas Adekanye]
      </div>
    </footer>
  );
}