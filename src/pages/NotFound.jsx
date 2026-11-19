import Button from "../components/ui/Button";
import Eyebrow from "../components/ui/Eyebrow";
import usePageMeta from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta("Page not found", "This page doesn't exist.");

  return (
    <section className="flex min-h-[70vh] flex-col items-start justify-center gap-6 px-5 py-24 md:px-16">
      <Eyebrow className="opacity-70">Error 404</Eyebrow>
      <h1 className="text-[clamp(34px,5vw,68px)]">This page doesn't exist.</h1>
      <p className="max-w-120 text-[17px]">
        The link may be broken, or the page may have moved.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button to="/" variant="accent">Back to home</Button>
        <Button to="/portfolio">See my work</Button>
      </div>
    </section>
  );
}