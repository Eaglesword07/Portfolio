import Button from "../components/ui/Button";
import ServiceCard from "../components/ui/ServiceCard";
import ToolsStrip from "../components/services/ToolsStrip";
import { services } from "../data/services";

export default function Services() {
  return (
    <>
      <section className="px-5 pb-6 pt-16 md:px-16">
        <h1 className="text-[clamp(30px,4vw,48px)]">Services</h1>
      </section>

      <section className="grid gap-6 px-5 pb-20 pt-6 md:grid-cols-2 md:px-16">
        {services.map(({ id, title, text }) => (
          <ServiceCard key={id} number={id} title={title} text={text} />
        ))}

        <article className="flex min-h-55 flex-col gap-4 rounded-3xl bg-ink p-8 text-paper">
          <h3 className="text-[22px]">Not sure what you need?</h3>
          <p>[Short line inviting a free intro call.]</p>
          <Button to="/contact" variant="accent" className="self-start">
            Book a call
          </Button>
        </article>
      </section>

      <ToolsStrip />
    </>
  );
}