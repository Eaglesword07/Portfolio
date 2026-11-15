import Button from "../ui/Button";

export default function CtaBanner() {
  return (
    <section className="flex min-h-85 flex-wrap items-center justify-between gap-8 bg-accent px-5 py-20 md:px-16">
      <h2 className="max-w-140 text-[clamp(28px,3.4vw,36px)]">
        Have a project in mind? Let's talk.
      </h2>
      <Button to="/contact">Contact me</Button>
    </section>
  );
}