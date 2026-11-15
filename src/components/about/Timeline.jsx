import Eyebrow from "../ui/Eyebrow";

export default function Timeline({ eyebrow, title, items, flush = false }) {
  return (
    <section className={`px-5 pb-18 md:px-16 ${flush ? "pt-0" : "pt-18"}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mb-6 mt-3 text-[34px]">{title}</h2>

      <div className="border-b border-ink">
        {items.map(({ period, title, text }, i) => (
          <div
            key={i}
            className="grid gap-2 border-t border-ink py-7 md:grid-cols-[220px_1fr] md:gap-8"
          >
            <p>{period}</p>
            <div>
              <h3 className="text-xl">{title}</h3>
              {text && <p className="mt-2.5 max-w-160">{text}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}