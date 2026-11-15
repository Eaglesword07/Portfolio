import { Link } from "react-router-dom";

export default function PortfolioCard({ slug, title, category, bg }) {
  return (
    <Link to={`/portfolio/${slug}`} className="group block md:even:mt-18">
      <div className="relative h-95 overflow-hidden rounded-[20px]">
        <div
          className={`parallax-img flex h-[120%] items-center justify-center text-[13px] text-[#555] transition-transform duration-500 group-hover:scale-105 ${bg}`}
        >
          [PROJECT IMAGE]
        </div>
        <span className="absolute bottom-4 right-4 flex h-19 w-19 scale-0 items-center justify-center rounded-full bg-accent text-[13px] font-medium transition-transform duration-300 group-hover:scale-100">
          View ↗
        </span>
      </div>
      <h3 className="mt-4 text-xl font-semibold md:text-2xl">{title}</h3>
      <p className="mt-1.5 text-sm opacity-70">{category}</p>
    </Link>
  );
}