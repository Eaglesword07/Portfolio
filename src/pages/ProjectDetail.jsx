import { Link, useParams } from "react-router-dom";
import Button from "../components/ui/Button";
import Eyebrow from "../components/ui/Eyebrow";
import Parallax from "../components/ui/Parallax";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);

  if (index === -1) {
    return (
      <section className="px-5 py-32 md:px-16">
        <h1 className="text-4xl">Project not found</h1>
        <Link to="/portfolio" className="mt-6 inline-block border-b-2 border-accent pb-1 font-medium">
          ← Back to all projects
        </Link>
      </section>
    );
  }

  const p = projects[index];
  const next = projects[(index + 1) % projects.length];
  const meta = [
    ["Client", p.client],
    ["My role", p.role],
    ["Timeline", p.timeline],
    ["Tools", p.tools.join(", ")],
  ];

  return (
    <>
      {/* Header */}
      <section className="px-5 pb-12 pt-14 md:px-16">
        <Link to="/portfolio" className="border-b-2 border-transparent pb-0.5 font-medium transition-colors hover:border-accent">
          ← All projects
        </Link>
        <Eyebrow className="mt-10 opacity-70">
          {p.category} · {p.year}
        </Eyebrow>
        <h1 className="mt-4 text-[clamp(34px,5.5vw,76px)]">
          <span className="block overflow-hidden pb-[0.08em]">
            <span className="inline-block motion-safe:animate-up">{p.title}</span>
          </span>
        </h1>
        <p className="mt-6 max-w-155 text-lg">{p.summary}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {p.liveUrl && <Button href={p.liveUrl} variant="accent">Visit live site ↗</Button>}
          {p.githubUrl && <Button href={p.githubUrl} variant="outline">View on GitHub ↗</Button>}
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {meta.map(([label, value]) => (
            <div key={label} className="border-t border-ink pt-3.5">
              <dt className="text-xs font-medium uppercase tracking-widest opacity-70">{label}</dt>
              <dd className="mt-1.5 font-medium">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Full-width cover */}
      <Parallax rounded="rounded-none" bg={p.bg} className="h-[min(80vh,640px)]">
        [COVER IMAGE · FULL WIDTH]
      </Parallax>

      {/* Overview */}
      <section className="px-5 py-20 md:px-16">
        <div className="grid gap-6 md:grid-cols-[4fr_8fr] md:gap-14">
          <Eyebrow>Overview</Eyebrow>
          <p className="max-w-190 text-[22px] leading-snug">{p.overview}</p>
        </div>
        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-14">
          <div>
            <h3 className="text-[22px]">The challenge</h3>
            <p className="mt-3 text-base">{p.challenge}</p>
          </div>
          <div>
            <h3 className="text-[22px]">My approach</h3>
            <p className="mt-3 text-base">{p.approach}</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-5 pb-20 md:px-16">
        <Parallax className="h-105 md:h-140">[PROJECT IMAGE · FULL WIDTH]</Parallax>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="group overflow-hidden rounded-[20px]">
            <div className="flex h-90 items-center justify-center bg-stone text-[13px] text-[#555] transition-transform duration-500 group-hover:scale-105 md:h-110">
              [PROJECT IMAGE]
            </div>
          </div>
          <div className="group overflow-hidden rounded-[20px] md:mt-18">
            <div className="flex h-90 items-center justify-center bg-sage text-[13px] text-[#555] transition-transform duration-500 group-hover:scale-105 md:h-110">
              [PROJECT IMAGE]
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-ink px-5 py-20 text-paper md:px-16">
        <Eyebrow className="text-accent">Results</Eyebrow>
        <h2 className="mb-10 mt-3 text-[34px]">What it delivered</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {p.results.map(({ value, label }) => (
            <div key={label}>
              <p className="text-[44px] font-semibold leading-none">{value}</p>
              <p className="mt-1.5 text-[13px] opacity-80">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Next project */}
      <Link
        to={`/portfolio/${next.slug}`}
        className="group relative block overflow-hidden border-t border-ink px-5 py-24 md:px-16"
      >
        <span className="absolute inset-0 translate-y-full bg-accent transition-transform duration-500 group-hover:translate-y-0" />
        <div className="relative">
          <Eyebrow>Next project</Eyebrow>
          <h2 className="mt-5 text-[clamp(36px,6vw,84px)]">
            {next.title}{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-4">→</span>
          </h2>
          <p className="mt-3">
            {next.category} · {next.year}
          </p>
        </div>
      </Link>
    </>
  );
}