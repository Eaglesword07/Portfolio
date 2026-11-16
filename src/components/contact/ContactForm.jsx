import { useState } from "react";

const field =
  "w-full border-0 border-b-[1.5px] border-paper/50 bg-[linear-gradient(#FF5B2E,#FF5B2E)] bg-[length:0_3px] bg-left-bottom bg-no-repeat py-3 text-base text-paper outline-none transition-[background-size] duration-300 focus:bg-[length:100%_3px]";
const label = "flex flex-col gap-0.5 text-[13px] font-medium";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to an email service in a later step
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-4">
        <h2 className="text-2xl">Message received</h2>
        <p className="max-w-md opacity-80">
          Demo only: this form isn't connected to email yet, so nothing has been sent.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="border-b-2 border-accent pb-0.5 font-medium"
        >
          Back to the form
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
      <h2 className="text-2xl">Send a message</h2>

      <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
        <label className={label}>
          First name
          <input type="text" name="firstName" autoComplete="given-name" required className={field} />
        </label>
        <label className={label}>
          Last name
          <input type="text" name="lastName" autoComplete="family-name" className={field} />
        </label>
      </div>

      <label className={label}>
        Email
        <input type="email" name="email" autoComplete="email" required className={field} />
      </label>
      <label className={label}>
        Phone number
        <input type="tel" name="phone" autoComplete="tel" className={field} />
      </label>
      <label className={label}>
        Message
        <textarea name="message" rows={4} required className={`${field} min-h-27.5 resize-y`} />
      </label>

      <button
        type="submit"
        className="self-start rounded-full bg-accent px-10 py-3.5 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-paper"
      >
        Submit
      </button>
    </form>
  );
}