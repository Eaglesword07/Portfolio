import Button from "../ui/Button";

// Replace these with real images later (see the note below the code)
const slides = [
  { label: "PHOTO 1", bg: "bg-stone" },
  { label: "PHOTO 2", bg: "bg-sage" },
  { label: "PHOTO 3", bg: "bg-sand" },
];

const tag = "rounded-full px-3.5 py-[7px] text-xs font-medium uppercase tracking-widest";

export default function Hero() {
  return (
    <section className="grid items-center gap-14 px-5 pb-16 pt-10 md:min-h-[min(86vh,760px)] md:grid-cols-2 md:px-16">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-2.5">
          <span className={`${tag} border border-ink`}>Software Developer</span>
          <span className={`${tag} bg-accent`}>Open for work 2026</span>
        </div>

        <h1 className="text-[clamp(34px,5vw,68px)]">
          <span className="block overflow-hidden pb-[0.08em]">
            <span className="inline-block motion-safe:animate-up">Hello, I'm Douglas Adekanye.</span>
          </span>
        </h1>

        <p className="max-w-120 text-[17px] leading-relaxed">
          Fast builds. Clean codes. Real results.
        </p>

        <div className="flex flex-wrap gap-3">
          <Button to="/portfolio" variant="accent">View my work</Button>
          <Button to="/about">About me</Button>
        </div>
      </div>

      <div className="relative md:ml-6">
        <div className="h-115 overflow-hidden rounded-t-[310px] rounded-b-3xl md:h-155">
          <div className="flex h-full w-[300%] motion-safe:animate-slide">
            {slides.map(({ label, bg }) => (
              <div
                key={label}
                className={`flex h-full w-1/3 items-center justify-center text-[13px] text-[#555] ${bg}`}
              >
                [{label}]
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-12 -left-3 rounded-2xl bg-ink px-5.5 py-4 text-paper motion-safe:animate-float md:-left-7">
          <p className="text-[28px] font-semibold leading-none">[00]+</p>
          <p className="mt-1 text-xs">Projects completed</p>
        </div>
        <div className="absolute -right-2 top-12 rounded-2xl bg-accent px-5.5 py-4 motion-safe:animate-float [animation-direction:reverse] [animation-duration:6s]">
          <p className="text-[28px] font-semibold leading-none">[2] yrs</p>
          <p className="mt-1 text-xs">Experience</p>
        </div>
      </div>
    </section>
  );
}