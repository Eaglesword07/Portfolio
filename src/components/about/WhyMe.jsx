import Eyebrow from "../ui/Eyebrow";
import { whyMe } from "../../data/cv";

export default function WhyMe() {
  return (
    <section className="bg-ink px-5 py-18 text-paper md:px-16">
      <div className="mb-8 max-w-140">
        <Eyebrow className="text-accent">Why me</Eyebrow>
        <h2 className="mt-3 text-[34px]">Why I'd be a good addition to your team</h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whyMe.map(({ title, text }, i) => (
          <div
            key={title}
            className="flex flex-col gap-4 rounded-[20px] border border-[#6b6b66] p-7 transition hover:-translate-y-1.5"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-semibold text-ink">
              {i + 1}
            </span>
            <h3 className="text-lg">{title}</h3>
            <p className="opacity-80">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}