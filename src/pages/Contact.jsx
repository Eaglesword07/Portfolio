import Doodle from "../components/contact/Doodle";
import ContactForm from "../components/contact/ContactForm";
import { contact, socials } from "../data/socials";

const fillLink =
  "inline-block self-start bg-[linear-gradient(#FF5B2E,#FF5B2E)] bg-[length:100%_2px] bg-left-bottom bg-no-repeat pb-[3px] transition-[background-size,color] duration-300 hover:bg-[length:100%_100%] hover:text-ink";

export default function Contact() {
  return (
    <div className="bg-black text-paper">
      <section className="relative flex min-h-[min(86vh,760px)] items-center overflow-hidden px-5 md:px-16">
        <Doodle />
        <h1 className="relative text-[clamp(40px,7vw,100px)] tracking-[-0.035em]">
          <span className="block overflow-hidden pb-[0.08em]">
            <span className="inline-block motion-safe:animate-up">Let's start a</span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <span
              className="inline-block motion-safe:animate-up"
              style={{ animationDelay: "0.15s" }}
            >
              conversation.
            </span>
          </span>
        </h1>
      </section>

      <section className="grid gap-14 border-t border-line px-5 py-24 md:min-h-[min(80vh,720px)] md:grid-cols-[5fr_7fr] md:gap-24 md:px-16">
        <div className="flex flex-col justify-between gap-12">
          <div>
            <h2 className="max-w-90 text-2xl">For project enquiries, please email:</h2>
            <a href={`mailto:${contact.email}`} className={`${fillLink} mt-4 text-2xl font-medium`}>
              {contact.email}
            </a>
            <p className="mt-4 text-sm opacity-80">or send a message using the form.</p>
          </div>

          <div className="flex flex-col gap-2.5">
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className={fillLink}>
              {contact.phone}
            </a>
            {socials.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={fillLink}>
                {label}
              </a>
            ))}
          </div>
        </div>

        <ContactForm />
      </section>
    </div>
  );
}