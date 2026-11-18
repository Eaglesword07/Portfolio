import { useState } from "react";
import { contact } from "../../data/socials";

const FORM_ID = import.meta.env.VITE_FORMSPREE_ID;
const ENDPOINT = `https://formspree.io/f/${FORM_ID}`;

const field =
  "w-full border-0 border-b-[1.5px] border-paper/50 bg-[linear-gradient(#FF5B2E,#FF5B2E)] bg-[length:0_3px] bg-left-bottom bg-no-repeat py-3 text-base text-paper outline-none transition-[background-size] duration-300 focus:bg-[length:100%_3px] disabled:opacity-50";
const label = "flex flex-col gap-0.5 text-[13px] font-medium";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    // Honeypot: real people never see this field, bots fill it in.
    if (data._gotcha) {
      setStatus("sent");
      return;
    }

    if (!FORM_ID) {
      setError("The form isn't connected yet.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          name: `${data.firstName} ${data.lastName}`.trim(),
          _subject: `New portfolio message from ${data.firstName}`,
        }),
      });

      if (res.ok) {
        setFirstName(data.firstName);
        setStatus("sent");
        return;
      }

      const json = await res.json().catch(() => ({}));
      setError(
        json?.errors?.map((err) => err.message).join(" ") ||
          "Something went wrong. Please try again."
      );
      setStatus("error");
    } catch {
      setError("Couldn't reach the server. Check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col items-start gap-4">
        <h2 className="text-2xl">Thank you{firstName ? `, ${firstName}` : ""}.</h2>
        <p className="max-w-md opacity-80">
          Your message is on its way. I'll get back to you as soon as I can.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="border-b-2 border-accent pb-0.5 font-medium"
        >
          Send another message
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7" aria-busy={sending}>
      <h2 className="text-2xl">Send a message</h2>

      <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
        <label className={label}>
          First name
          <input type="text" name="firstName" autoComplete="given-name" required disabled={sending} className={field} />
        </label>
        <label className={label}>
          Last name
          <input type="text" name="lastName" autoComplete="family-name" disabled={sending} className={field} />
        </label>
      </div>

      <label className={label}>
        Email
        <input type="email" name="email" autoComplete="email" required disabled={sending} className={field} />
      </label>
      <label className={label}>
        Phone number
        <input type="tel" name="phone" autoComplete="tel" disabled={sending} className={field} />
      </label>
      <label className={label}>
        Message
        <textarea name="message" rows={4} required disabled={sending} className={`${field} min-h-27.5 resize-y`} />
      </label>

      {/* Honeypot field, hidden from people */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this empty
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-col items-start gap-3">
        <button
          type="submit"
          disabled={sending}
          className="rounded-full bg-accent px-10 py-3.5 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-paper disabled:cursor-wait disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-accent"
        >
          {sending ? "Sending…" : "Submit"}
        </button>
        <p className="text-[13px] opacity-60">
          I'll only use your details to reply to your message.
        </p>
      </div>

      {status === "error" && (
        <p role="alert" className="max-w-md text-sm text-accent">
          {error} You can also email me directly at{" "}
          <a href={`mailto:${contact.email}`} className="underline">
            {contact.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}