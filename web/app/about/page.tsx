import type { Metadata } from "next";
import { Section } from "../_components/Section";
import { CTAButton } from "../_components/CTAButton";

export const metadata: Metadata = {
  title: "About Alice",
  description:
    "Alice Estrada founded Estradegies to bring business discipline and strategic clarity to small mission-driven nonprofits. Three decades of leadership across business, marketing, and the nonprofit sector.",
};

const snapshot = [
  "30+ years of leadership across business, marketing, and the nonprofit sector",
  "Former President & CEO, Annapolis Maritime Museum & Park (2013–2025)",
  "6× revenue growth, $5M capital campaign delivered, two campuses acquired and integrated, twelve consecutive fiscal years in surplus",
  "Nonprofit Executive of the Year — Non-Profit Pro Magazine (2017)",
  "Featured in CNN, Wall Street Journal, USA Today, Southern Living, and Garden & Gun",
  "Top accountability ratings: Candid Platinum, Charity Navigator 4-Star, MD Nonprofits Standard of Excellence",
];

const education = [
  "B.S., Business & Marketing — University of Maryland, College Park",
  "Certified Marketing Director — International Council of Shopping Centers",
  "Main Street Institute Management Program",
  "Leadership Anne Arundel — Class of 2016",
];

const civic = [
  "Chesapeake Crossroads Heritage Area",
  "Journey Through Hallowed Ground (Founding Board Secretary)",
  "Adams County Chamber of Commerce",
  "Land Conservancy of Adams County",
  "United Way of Adams County",
  "Bernie House",
  "Councilman, Borough of Gettysburg — Chair, Community Development & College/Community Committees; Finance Committee",
  "Co-Chair, Adams County Green Space Advisory Committee",
  "Executive Committee, Elm Street Residential Revitalization",
  "Rotary Club of Gettysburg",
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <Section padding="hero">
        <h1 className="text-5xl md:text-7xl font-serif font-semibold text-navy tracking-tight">
          About Alice
        </h1>

        <div className="mt-12 flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-64 flex-shrink-0">
            <div className="w-full aspect-[3/4] bg-stone border border-line flex items-center justify-center font-serif text-navy/40 text-6xl">
              AE
            </div>
            <p className="mt-3 text-xs text-muted text-center">
              Headshot to be added
            </p>
          </div>

          <div className="flex-1 max-w-2xl">
            <p className="text-xl md:text-2xl font-serif italic text-ink/85 leading-relaxed">
              Hi, I'm Alice Estrada. I founded Estradegies because I believe small, mission-driven nonprofits are some of the most important institutions in our communities — and they deserve the same business discipline, strategic clarity, and leadership rigor that large organizations have long enjoyed.
            </p>
          </div>
        </div>
      </Section>

      {/* MY WHY */}
      <Section variant="stone">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8">My Why</h2>
          <div className="space-y-6 text-lg leading-relaxed text-ink/85">
            <p>
              After more than three decades of leadership spanning business, marketing, and the nonprofit sector — including twelve years as President and CEO of Annapolis Maritime Museum & Park — I've learned that the difference between a nonprofit that endures and one that struggles is rarely passion. It's almost always strategy: diversified revenue, disciplined operations, engaged board governance, and the visibility that earns trust.
            </p>
            <p>
              Estradegies exists to bring those tools to the organizations that need them most: small grassroots nonprofits doing remarkable work with limited capacity. I love the work of strengthening nonprofits and expanding their impact in the community.
            </p>
          </div>
        </div>
      </Section>

      {/* MY APPROACH */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8">
            My Approach: <span className="italic font-normal">Mission + Margin</span>
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-ink/85">
            <p className="text-xl md:text-2xl font-serif italic text-navy">
              Mission is why nonprofits exist. Margin is how they continue to.
            </p>
            <p>
              I bring two decades inside the nonprofit sector plus another decade of private-sector business and marketing experience — competitor analysis, market assessments, new business development, branding — to help organizations align both. My career has spanned transformative revitalization projects in both the public and private sectors, from Disney's Town of Celebration to Historic Downtown Gettysburg to the Chesapeake waterfront. The best work, I've learned, breathes new life into properties and places while serving the greater good.
            </p>
            <p>
              Every engagement begins with the same question:{" "}
              <em className="text-navy not-italic font-medium">
                what does durable, long-term impact look like for you?
              </em>
            </p>
          </div>
        </div>
      </Section>

      {/* SNAPSHOT */}
      <Section variant="stone">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8">A Snapshot</h2>
          <ul className="space-y-4 text-base md:text-lg text-ink/85">
            {snapshot.map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-navy/40 font-serif text-2xl leading-none">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* EDUCATION + CIVIC */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6">
              Education & Credentials
            </h2>
            <ul className="space-y-3 text-base text-ink/85">
              {education.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-3">
              Civic & Community Leadership
            </h2>
            <p className="text-sm text-ink/60 italic mb-6">
              Past and present board service, civic committees, and community partnerships:
            </p>
            <ul className="space-y-2 text-sm md:text-base text-ink/80 leading-relaxed">
              {civic.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* OUTSIDE OFFICE */}
      <Section variant="stone">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6">
            Outside the Office
          </h2>
          <p className="text-xl font-serif italic text-ink/80 leading-relaxed">
            Alice lives in the Epping Forest community of Annapolis, where she can be found cruising the Chesapeake Bay, tending to her historic cottage, or traveling near and far.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="navy">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-cream mb-8">
            Want to explore working together?
          </h2>
          <CTAButton variant="light">Schedule a Free Discovery Call →</CTAButton>
        </div>
      </Section>
    </>
  );
}
