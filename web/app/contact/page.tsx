import type { Metadata } from "next";
import { Section } from "../_components/Section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Every engagement begins with a free 30-minute discovery call. Schedule a call, send a message, or reach out directly.",
};

export default function Contact() {
  return (
    <>
      <Section padding="hero">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif font-semibold text-navy tracking-tight">
            Let's Talk
          </h1>
          <p className="mt-8 text-lg md:text-xl font-serif italic text-ink/80 leading-relaxed">
            Every engagement begins with a free 30-minute discovery call — a no-pressure conversation about your organization's goals, current challenges, and what working together might look like.
          </p>
        </div>
      </Section>

      {/* SCHEDULE */}
      <Section>
        <div className="grid md:grid-cols-12 gap-12 max-w-5xl">
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-navy mb-4">
              Schedule a Free Discovery Call
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-ink/80">
              Pick a time that works for you. We'll spend 30 minutes understanding your organization's situation and goals — no commitment, no proposal pressure.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="bg-stone border border-line p-10 md:p-12 text-center">
              <p className="text-xs text-muted mb-4 uppercase tracking-[0.25em] font-medium">
                Calendly Embed
              </p>
              <p className="font-serif text-lg md:text-xl text-navy/60 leading-relaxed mb-6">
                Booking widget will appear here once Calendly is connected.
              </p>
              <div className="pt-6 border-t border-line/60">
                <p className="text-sm text-ink/70 mb-3">
                  Or call Alice directly:
                </p>
                <a
                  href="tel:+17172536174"
                  className="font-serif text-2xl md:text-3xl text-navy hover:text-navy-dark transition-colors"
                >
                  717-253-6174
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* WRITE */}
      <Section variant="stone">
        <div className="grid md:grid-cols-12 gap-12 max-w-5xl">
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-navy mb-4">
              Prefer to write?
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-ink/80">
              Send a note using the form and Alice will respond within two business days.
            </p>
          </div>
          <div className="md:col-span-7">
            <form className="space-y-5">
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
                disabled
                className="bg-navy text-cream px-8 py-4 text-sm tracking-wide font-medium hover:bg-navy-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Send Message (form not yet connected)
              </button>
            </form>
            <p className="text-xs text-muted mt-3">
              Form will be wired to email/CRM once we finalize the destination.
            </p>
          </div>
        </div>
      </Section>

      {/* DIRECT CONTACT */}
      <Section variant="navy">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-cream mb-10">
            Direct Contact
          </h2>
          <div className="space-y-3 text-lg text-cream/90">
            <div className="font-serif text-2xl md:text-3xl text-cream">Alice Estrada</div>
            <div className="text-cream/70 mb-6 text-base">
              Estradegies — Nonprofit Strategy & Sustainability
            </div>
            <div>
              <span className="text-cream/60 mr-3">Phone:</span>
              <a
                href="tel:+17172536174"
                className="hover:underline underline-offset-4"
              >
                717-253-6174
              </a>
            </div>
            <div>
              <span className="text-cream/60 mr-3">Email:</span>
              <a
                href="mailto:estradegies@gmail.com"
                className="hover:underline underline-offset-4 break-words"
              >
                estradegies@gmail.com
              </a>
            </div>
            <div>
              <span className="text-cream/60 mr-3">Based in:</span>
              Annapolis, MD
            </div>
          </div>
          <p className="mt-10 text-sm text-cream/60 italic">
            Serving clients regionally and nationally — remote engagements welcome.
          </p>
        </div>
      </Section>
    </>
  );
}

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
