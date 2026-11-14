export default function Marquee({ children, className = "", duration = 50 }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex w-max motion-safe:animate-marquee"
        style={{ animationDuration: `${duration}s` }}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}