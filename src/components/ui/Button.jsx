import { Link } from "react-router-dom";

const variants = {
  dark: "bg-ink text-paper",
  light: "bg-paper text-ink",
  accent: "bg-accent text-ink",
  outline:
    "bg-transparent text-ink shadow-[inset_0_0_0_1.5px_#151515] hover:bg-ink hover:text-paper",
};

export default function Button({ to, href, variant = "dark", className = "", children, ...props }) {
  const classes = `inline-block rounded-full px-[22px] py-[11px] text-sm font-medium transition-all hover:-translate-y-0.5 ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}