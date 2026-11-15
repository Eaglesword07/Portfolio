export default function Parallax({
  className = "",
  rounded = "rounded-[20px]",
  bg = "bg-stone",
  children,
}) {
  return (
    <div className={`overflow-hidden ${rounded} ${className}`}>
      <div
        className={`parallax-img relative top-[-10%] flex h-[120%] items-center justify-center text-[13px] text-[#555] ${bg}`}
      >
        {children}
      </div>
    </div>
  );
}