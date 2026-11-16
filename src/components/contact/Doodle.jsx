import portrait from "../../assets/images/portrait-pencil-chalk.webp";

export default function Doodle() {
  return (
    <div className="pointer-events-none absolute right-0 top-0 h-full w-full overflow-hidden opacity-30 mask-[linear-gradient(to_right,transparent,black_35%)] md:w-[58%] md:opacity-80">
      <img
        src={portrait}
        alt=""
        aria-hidden="true"
        className="doodle-reveal h-full w-full object-cover object-[50%_40%] mix-blend-screen"
      />
    </div>
  );
}