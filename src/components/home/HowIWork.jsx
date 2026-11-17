import Eyebrow from "../ui/Eyebrow";
import { steps } from "../../data/process";

export default function HowIWork() {
  return (
    <section className="bg-ink px-5 py-20 text-paper md:px-16">
      <div className="reveal mb-8">
        <Eyebrow className="text-accent">Process</Eyebrow>
        <h2 className="mt-3 text-[34px]">How I work</h2>
      </div>

      <div>
        {steps.map(({ title, text, bg }, i) => (
          <div
            key={title}
            style={{ top: 96 + i * 24 }}
            className={`sticky mb-7 flex min-h-65 flex-col justify-between rounded-3xl p-8 text-ink md:p-10 ${bg}`}
          >
            <p className="text-xs font-medium uppercase tracking-widest">
              Step 0{i + 1}
            </p>
            <div>
              <h3 className="text-[28px]">{title}</h3>
              <p className="mt-2.5 max-w-110 leading-relaxed">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}