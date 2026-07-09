import type { Metadata } from "next";
import { Section } from "../_components/Section";
import { ContactForm } from "./ContactForm";

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
          <p className="mt-6 text-lg text-ink/80">
            Call Alice directly:{" "}
            <a href="tel:+17172536174" className="text-navy font-semibold hover:underline underline-offset-4">
              (717) 253-6174
            </a>
          </p>
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
            <ContactForm />
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

