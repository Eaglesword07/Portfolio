export default function ServiceCard({ number, title, text }) {
  return (
    <article className="group relative flex min-h-55 flex-col gap-4 overflow-hidden rounded-3xl border-[1.5px] border-ink p-8">
      <span
        aria-hidden="true"
        className="absolute inset-0 translate-y-full bg-accent transition-transform duration-450 group-hover:translate-y-0"
      />
      <span className="relative self-start rounded-full bg-accent px-3 py-1 text-sm font-semibold transition-colors group-hover:bg-ink group-hover:text-paper">
        {number}
      </span>
      <h3 className="relative text-[22px]">{title}</h3>
      <p className="relative">{text}</p>
    </article>
  );
}