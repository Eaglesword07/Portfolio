import { useRef } from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ slug, title, category, images }) {
  const overlay = useRef(null);

  // Which half of the image is the mouse in? Top half slides from above, bottom half from below.
  const sideOf = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    return e.clientY < r.top + r.height / 2 ? "-100%" : "100%";
  };

  const slideIn = (from) => {
    const el = overlay.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.style.transition = "none";
    el.style.transform = `translateY(${from})`;
    void el.offsetHeight; // forces the browser to apply the start position first
    el.style.transition = reduce ? "none" : "transform 450ms cubic-bezier(0.22, 1, 0.36, 1)";
    el.style.transform = "translateY(0)";
  };

  const slideOut = (to) => {
    overlay.current.style.transform = `translateY(${to})`;
  };

  return (
    <div className="shrink-0 pr-6">
      <Link
        to={`/portfolio/${slug}`}
        className="group block w-90 md:w-180"
        onFocus={() => slideIn("100%")}
        onBlur={() => slideOut("100%")}
      >
        <div
          className="relative overflow-hidden rounded-[20px]"
          onMouseEnter={(e) => slideIn(sideOf(e))}
          onMouseLeave={(e) => slideOut(sideOf(e))}
        >
          <div
            className={`flex h-100 items-center justify-center text-[13px] text-[#555] transition-transform duration-500 group-hover:scale-105 md:h-140 ${images}`}
          >
            <img
              src={images.a}
              alt={`${title}: ${category} illustration`}
              loading="lazy"
              decoding="async"
              className="h-100 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-140"
            />
          </div>
          <div
            ref={overlay}
            style={{ transform: "translateY(100%)" }}
            className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/60 text-lg font-medium text-paper"
          >
            View project ↗
          </div>
        </div>

        <p className="mt-4 text-xl font-semibold md:text-2xl">
          {title} <span className="text-base font-normal opacity-70 md:text-lg">· {category}</span>
        </p>
      </Link>
    </div>
  );
}