import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "../_components/Section";
import { CTAButton } from "../_components/CTAButton";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Three flagship case studies — Annapolis Maritime Museum & Park, Gettysburg Festival, Main Street Gettysburg — plus the Biz Kid$ program. Two decades of strengthening nonprofits.",
};

type CaseStudyProps = {
  variant?: "cream" | "stone";
  client: string;
  role: string;
  period: string;
  location: string;
  challenge: string;
  approach: string;
  actions: string[];
  outcomes: string[];
  images?: { src: string; alt: string }[];
};

function CaseStudy({
  variant = "cream",
  client,
  role,
  period,
  location,
  challenge,
  approach,
  actions,
  outcomes,
  images,
}: CaseStudyProps) {
  return (
    <Section variant={variant}>
      <div className="max-w-5xl">
        <div className="mb-3 text-sm tracking-wide text-navy/70 font-medium">
          {role} · {period} · {location}
        </div>
        <h2 className="text-3xl md:text-5xl font-serif font-semibold text-navy mb-12 tracking-tight leading-tight">
          {client}
        </h2>

        <CaseSection label="The Challenge">
          <p className="text-base md:text-lg leading-relaxed text-ink/85">{challenge}</p>
        </CaseSection>

        <CaseSection label="The Approach">
          <div className={images && images.length === 1 ? "flex gap-8 items-start" : ""}>
            <div className="flex-1">
              <p className="text-base md:text-lg leading-relaxed text-ink/85 mb-6">{approach}</p>
              <ul className="space-y-3">
                {actions.map((action, i) => (
                  <li key={i} className="flex gap-3 text-base text-ink/85 leading-relaxed">
                    <span className="text-navy/40 mt-1.5 text-xs">●</span>
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>
            {images && images.length === 1 && (
              <div className="flex-shrink-0 w-40">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  width={160}
                  height={320}
                  className="w-full object-contain rounded-sm"
                />
              </div>
            )}
          </div>
        </CaseSection>

        {images && images.length > 1 && (
          <div className="mb-12 flex gap-6">
            {images.map((img, i) => (
              <div key={i} className="flex-1 overflow-hidden rounded-sm">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        )}

        <CaseSection label="The Outcome" last>
          <ul className="space-y-3">
            {outcomes.map((outcome, i) => (
              <li key={i} className="flex gap-3 text-base md:text-lg text-ink/85 leading-relaxed">
                <span className="text-navy/60 mt-1.5 text-xs">●</span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </CaseSection>
      </div>
    </Section>
  );
}

function CaseSection({
  label,
  children,
  last = false,
}: {
  label: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div className={`grid md:grid-cols-12 gap-4 md:gap-8 ${last ? "" : "mb-12"}`}>
      <div className="md:col-span-3">
        <h3 className="text-xs tracking-[0.25em] uppercase text-navy/60 font-medium pt-2">
          {label}
        </h3>
      </div>
      <div className="md:col-span-9">{children}</div>
    </div>
  );
}

export default function Impact() {
  return (
    <>
      <Section padding="hero">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif font-semibold text-navy tracking-tight">
            Impact
          </h1>
          <p className="mt-8 text-lg md:text-xl font-serif italic text-ink/80 leading-relaxed">
            Two decades of strengthening nonprofits and mission-driven organizations. Three flagship engagements and one notable program — each illustrating a different facet of the Mission + Margin approach.
          </p>
        </div>
      </Section>

      <CaseStudy
        client="Annapolis Maritime Museum & Park"
        role="President & CEO"
        period="2013–2025"
        location="Annapolis, MD"
        challenge="A small local museum with a single waterfront site, limited revenue diversification, and ambitious community service goals — operating without the business discipline typically applied to mission-driven institutions of its scale."
        approach="Alice applied a business-minded operating framework to nonprofit management: diversifying revenue across programs, donations, grants, venue rentals, and events; pursuing top-tier accountability standards; and reinvesting growth into facilities, programs, and visibility."
        actions={[
          "Acquired and integrated a second campus — a 12-acre waterfront park, a 75-foot historic skipjack, and a 10,000-square-foot building for future expansion",
          "Led a $5 million capital campaign funding new exhibits, education center renovation, deepwater docks, a 2,600-square-foot pavilion, and a boardwalk",
          "Built a diversified revenue portfolio across philanthropy, earned income, grants, memberships, and events",
          "Earned top accountability ratings from Candid (Platinum), Charity Navigator (Four Stars), and MD Nonprofits (Standard of Excellence)",
        ]}
        outcomes={[
          "6× organizational revenue growth over twelve years",
          "Twelve consecutive fiscal years closed in surplus — every year of Alice's tenure as CEO",
          "Two campuses, expanded facilities, and a long-term programmatic vision",
          "Nonprofit Executive of the Year — Non-Profit Pro Magazine (2017)",
          "Regional and national media coverage including CNN, Wall Street Journal, USA Today, Southern Living, and Garden & Gun",
        ]}
        images={[
          { src: "/wilma-lee.jpg", alt: "The historic skipjack Wilma Lee under sail on the Chesapeake Bay" },
          { src: "/oyster-roast.jpg", alt: "Crowds at the annual Oyster Roast & Sock Burning, a perennial sell-out event" },
        ]}
      />

      <CaseStudy
        variant="stone"
        client="Gettysburg Festival"
        role="Executive Director"
        period="2007–2011"
        location="Gettysburg, PA"
        challenge="A regional ten-day cultural arts festival with strong programming aspirations but limited financial sustainability and modest national visibility."
        approach="Alice expanded the festival's programming ambition while building the marketing, partnership, and grant infrastructure to sustain that scale — turning a regional event into a nationally recognized institution."
        actions={[
          "Curated programming to 800+ artists and 100 events across ten days",
          "Built marketing and PR systems that broadened reach and accessibility",
          "Secured $1.5 million in state grants to underwrite sustainability and growth",
        ]}
        outcomes={[
          "Ticket sales up 500%, attendance up 40%",
          "Multiple International Festival & Events Association (IFEA) awards",
          "Named one of the 100 Best Events in North America by the American Bus Association (2009)",
          "Long-term grant relationships and sustained financial footing",
        ]}
        images={[
          { src: "/Gettysburg Festival.png", alt: "Gettysburg Festival — June 18-27, Music, Culinary Arts, Theater, Visual Arts" },
        ]}
      />

      <CaseStudy
        client="Main Street Gettysburg"
        role="Executive Director"
        period="2003–2007"
        location="Gettysburg, PA"
        challenge="Revitalize a historic downtown using a national preservation framework — while blending heritage interpretation with new earned-revenue opportunities."
        approach="Alice applied the National Trust for Historic Preservation's four-point Main Street model and built deep community partnerships, including a notable collaboration with the National Park Service. She also designed a new program that braided heritage education with revenue generation."
        actions={[
          "Implemented the National Main Street Center's four-point revitalization approach across organization, promotion, design, and economic restructuring",
          "Created the Licensed Town Guide Program — an innovative earned-revenue model that doubled as community heritage interpretation",
          "Built cross-sector partnerships with the National Park Service and local stakeholders",
        ]}
        outcomes={[
          "Top 5 Main Street community accreditation in Pennsylvania",
          "Pennsylvania Main Street Award — Outstanding Community Partnership with the NPS",
          "A blueprint combining historic preservation with sustainable earned income",
        ]}
        images={[
          { src: "/Mainstreet.png", alt: "Historic Gettysburg — A Downtown Gettysburg Guide" },
        ]}
      />

      {/* NOTABLE PROGRAMS */}
      <Section variant="stone">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-xs tracking-[0.25em] uppercase text-navy/60 mb-3 font-medium">
              Notable Programs
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-navy mb-4">
              Earlier creative work
            </h2>
            <p className="text-base md:text-lg italic font-serif text-ink/70 max-w-2xl mx-auto leading-relaxed">
              Two private-sector programs Alice created that earned international recognition — early signals of the cross-sector creative thinking she brings to her nonprofit work today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-14">
            <div className="border-l-4 border-navy pl-6 md:pl-8">
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-navy mb-2">
                Biz Kid$
              </h3>
              <p className="text-xs tracking-[0.25em] uppercase text-navy/60 mb-4 font-medium">
                Orange County, FL
              </p>
              <p className="text-base leading-relaxed text-ink/85">
                A hands-on social studies curriculum in which 5th-grade students operate a real retail store as part of their classroom learning. Created during Alice's early marketing leadership for retail properties, the program earned international recognition and is still cited as a model of creative program design that braids education, entrepreneurship, and community.
              </p>
            </div>

            <div className="border-l-4 border-navy pl-6 md:pl-8">
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-navy mb-2">
                Now Snowing Nightly
              </h3>
              <p className="text-xs tracking-[0.25em] uppercase text-navy/60 mb-4 font-medium">
                Walt Disney Imagineering · Celebration, FL
              </p>
              <div className="flex gap-6 items-start">
                <p className="flex-1 text-base leading-relaxed text-ink/85">
                  The signature holiday campaign Alice created while consulting at Disney's Town of Celebration. Drove a 44% increase in retail sales, earned international recognition, and remains a cherished annual tradition in Celebration today.
                </p>
                <div className="flex-shrink-0">
                  <Image
                    src="/now-snowing.png"
                    alt="Now Snowing Nightly — Market Street at Celebration holiday campaign"
                    width={140}
                    height={280}
                    className="rounded-sm object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS PLACEHOLDER */}
      <Section>
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center">
            <div className="text-navy/30 font-serif text-7xl leading-none mb-2">"</div>
            <p className="text-xl font-serif italic text-ink/70 leading-relaxed">
              Having served alongside Alice for more than 11 years on the Annapolis Maritime Museum Board, I've seen firsthand the vision, professionalism, and heart she brings to leadership. She took the museum to levels that were never considered early on and more importantly sustained and grew the museum, our programs and community engagement. Alice's background in marketing, including her experience with Disney, gave her a unique ability to connect people to mission in a meaningful way. She has an incredible talent for storytelling, relationship-building, and inspiring both teams and communities to believe in something bigger.
            </p>
            <p className="mt-6 text-sm text-muted">— Michael Hughes, Managing Partner – MH Media Strategies &amp; AMM Board Member</p>
          </div>
          <div className="text-center pt-8 border-t border-line/40">
            <div className="text-navy/30 font-serif text-7xl leading-none mb-2">"</div>
            <p className="text-xl font-serif italic text-ink/70 leading-relaxed">
              Having worked closely with Alice, I can confidently say her wealth of nonprofit knowledge and strategic insight is unmatched. Her exceptional guidance has been instrumental to our organization's success, and anyone looking to elevate their nonprofit would be lucky to partner with her.
            </p>
            <p className="mt-6 text-sm text-muted">— Patricia Slaughter, Founder, The Bernie House</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="navy">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-cream mb-8">
            Want to discuss what this kind of impact could look like for your organization?
          </h2>
          <CTAButton variant="light">Schedule a Free Discovery Call →</CTAButton>
        </div>
      </Section>
    </>
  );
}
