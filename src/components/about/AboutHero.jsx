import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";
import Parallax from "../ui/Parallax";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[calc(min(100vh,820px)+80px)] items-end overflow-hidden pt-20 text-paper">
      <div className="absolute inset-0">
        <Parallax rounded="rounded-none" className="h-full">
          <img
            src="/images/about/about-hero.webp"
            alt="Portrait of Douglas Adekanye"
            fetchPriority="high"
            className="h-full w-full object-cover object-[50%_35%]"
          />
        </Parallax>
      </div>

      {/* fades: dark at the bottom for the text, dark at the top for the navbar */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(21,21,21,.88),rgba(21,21,21,.15)_65%)]" />
      <div className="absolute inset-x-0 top-0 h-44 bg-[linear-gradient(to_bottom,rgba(0,0,0,.55),rgba(0,0,0,0))]" />

      <div className="relative grid w-full gap-8 px-5 pb-16 md:grid-cols-2 md:items-end md:gap-14 md:px-16">
        <div>
          <Eyebrow>Nice to meet you. I'm</Eyebrow>
          <h1 className="mt-4 text-[clamp(40px,6.5vw,92px)]">
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="inline-block motion-safe:animate-up">Kehinde Douglas Adekanye</span>
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