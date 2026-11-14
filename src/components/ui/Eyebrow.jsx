export default function Eyebrow({ children, className = "" }) {
  return (
    <p className={`text-xs font-medium uppercase tracking-widest ${className}`}>
      {children}
    </p>
  );
}