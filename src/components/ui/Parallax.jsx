export default function Parallax({ className = "", children }) {
  return (
    <div className={`overflow-hidden rounded-[20px] ${className}`}>
      <div className="parallax-img flex h-[120%] items-center justify-center bg-stone text-[13px] text-[#555]">
        {children}
      </div>
    </div>
  );
}