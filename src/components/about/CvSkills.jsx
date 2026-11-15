import Eyebrow from "../ui/Eyebrow";
import { cvSkills } from "../../data/skills";

export default function CvSkills() {
  return (
    <section className="px-5 py-18 md:px-16">
      <Eyebrow>Skills</Eyebrow>
      <h2 className="mb-8 mt-3 text-[34px]">What I bring to the table</h2>

      <div className="grid gap-5 md:grid-cols-2">
        {cvSkills.map(({ title, items }) => (
          <div
            key={title}
            className="flex flex-col gap-4 rounded-[20px] border border-ink p-7 transition hover:-translate-y-1.5 hover:bg-[#E4E1D8]"
          >
            <h3 className="text-xl">{title}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item, i) => (
                <span
                  key={i}
                  className="rounded-full border border-ink px-3.5 py-1.75 text-[13px] transition-colors hover:bg-ink hover:text-paper"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}