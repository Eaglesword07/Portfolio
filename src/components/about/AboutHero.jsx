import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";
import Parallax from "../ui/Parallax";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[min(100vh,820px)] items-end overflow-hidden text-paper">
      <div className="absolute inset-0">
        <Parallax rounded="rounded-none" className="h-full">
          [YOUR PHOTO · FULL WIDTH]
        </Parallax>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(21,21,21,.88),rgba(21,21,21,.15)_65%)]" />

      <div className="relative grid w-full gap-8 px-5 pb-16 md:grid-cols-2 md:items-end md:gap-14 md:px-16">
        <div>
          <Eyebrow>Nice to meet you. I'm</Eyebrow>
          <h1 className="mt-4 text-[clamp(40px,6.5vw,92px)]">
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="inline-block motion-safe:animate-up">[Kehinde Douglas Adekanye]</span>
            </span>
          </h1>
        </div>
        <div className="flex flex-col items-start gap-5">
          <p className="text-[17px]">
            [Two or three sentences: my role, years of experience and what I focus on.]
          </p>
          <Button to="/contact" variant="accent">Say hello</Button>
        </div>
      </div>
    </section>
  );
}