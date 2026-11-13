import { Link } from "react-router-dom";

const variants = {
  dark: "bg-ink text-paper",
  light: "bg-paper text-ink",
  accent: "bg-accent text-ink",
};

export default function Button({ to, variant = "dark", className = "", children, ...props }) {
  const classes = `inline-block rounded-full px-[22px] py-[11px] text-sm font-medium transition-transform hover:-translate-y-0.5 ${variants[variant]} ${className}`;

  return to ? (
    <Link to={to} className={classes} {...props}>
      {children}
    </Link>
  ) : (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}