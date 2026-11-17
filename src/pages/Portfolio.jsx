import { useState } from "react";
import Marquee from "../components/ui/Marquee";
import PortfolioCard from "../components/ui/PortfolioCard";
import { projects } from "../data/projects";
import usePageMeta from "../hooks/usePageMeta";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function Portfolio() {
  usePageMeta("Portfolio", "Selected projects and case studies.");

  const [active, setActive] = useState("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="px-5 pb-6 pt-16 md:px-16">
        <h1 className="text-[clamp(30px,4vw,48px)]">Selected work</h1>
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`rounded-full border border-ink px-5 py-2.5 text-sm transition-colors ${
                active === cat ? "bg-ink font-semibold text-paper" : "hover:bg-ink hover:text-paper"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <Marquee
        duration={30}
        className="pb-6 pt-2 text-[clamp(64px,10vw,150px)] font-semibold leading-none tracking-[-0.04em] text-transparent [-webkit-text-stroke:1.5px_#151515]"
      >
        <span className="whitespace-nowrap pr-12" aria-hidden="true">
          [Selected work] ✦ [Case studies] ✦
        </span>
        <span className="whitespace-nowrap pr-12" aria-hidden="true">
          [Selected work] ✦ [Case studies] ✦
        </span>
      </Marquee>

      <section className="grid gap-10 px-5 pb-24 pt-12 md:grid-cols-2 md:gap-x-8 md:px-16">
        {shown.map((project) => (
          <PortfolioCard key={project.id} {...project} />
        ))}
      </section>
    </>
  );
}