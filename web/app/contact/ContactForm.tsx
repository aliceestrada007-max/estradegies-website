"use client";

import { FormEvent, useState } from "react";

function Field({
  id,
  label,
  type = "text",
  required = false,
  optional = false,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-ink/80 mb-2"
      >
        {label}{" "}
        {optional && <span className="text-muted font-normal">(optional)</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        className="w-full px-4 py-3 border border-line bg-cream text-ink focus:border-navy focus:outline-none transition-colors"
      />
    </div>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const org = data.get("org") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Estradegies Inquiry from ${name} — ${org}`);
    const body = encodeURIComponent(
      `Name: ${name}\nOrganization: ${org}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\n${message}`
    );

    window.location.href = `mailto:estradegies@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="bg-stone border border-line p-10 text-center">
        <p className="font-serif text-xl text-navy mb-2">Thank you!</p>
        <p className="text-ink/70">
          Your email client should have opened with your message. If it didn't,
          you can email Alice directly at{" "}
          <a
            href="mailto:estradegies@gmail.com"
            className="text-navy underline underline-offset-4"
          >
            estradegies@gmail.com
          </a>
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <Field id="name" label="Name" required />
      <Field id="org" label="Organization" required />
      <Field id="email" label="Email" type="email" required />
      <Field id="phone" label="Phone" type="tel" optional />
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-ink/80 mb-2"
        >
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-line bg-cream text-ink focus:border-navy focus:outline-none transition-colors resize-y"
        />
      </div>
      <button
        type="submit"
        className="bg-navy text-cream px-8 py-4 text-sm tracking-wide font-medium hover:bg-navy-dark transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
