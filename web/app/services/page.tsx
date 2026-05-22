import type { Metadata } from "next";
import { Section } from "../_components/Section";
import { CTAButton } from "../_components/CTAButton";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Seven service lines for nonprofit and mission-driven organizations: interim executive leadership, strategic planning, revenue diversification, board development, marketing, events, and partnerships.",
};

type Service = {
  number: string;
  title: string;
  body: string;
  duration?: string;
  proof?: string;
  capabilities?: string[];
  pressNote?: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "Interim Executive Leadership",
    body: "For organizations in transition. Estradegies provides hands-on executive leadership during gaps between executive directors, periods of restructuring, or moments of accelerated growth — bringing stability, structure, and visible results from day one.",
    duration: "Engagements typically run three months with the option to extend.",
  },
  {
    number: "02",
    title: "Organizational Sustainability & Strategic Planning",
    body: "A focused three-month strategic planning sprint that aligns mission, programs, and finances for long-term viability. Substantially more succinct than a typical 12-month plan — and built to be implemented, not shelved.",
    proof: "This work draws on Alice's track record of nonprofit business discipline: at Annapolis Maritime Museum & Park, twelve consecutive fiscal years closed in surplus under her leadership, with rigorous attention to ROI, expense management, and Mission + Margin alignment. Strong financial stewardship is what allows nonprofits to weather downturns, reinvest in programs, and grow with confidence.",
  },
  {
    number: "03",
    title: "Revenue Diversification & Growth Strategy",
    body: "A holistic approach to financial sustainability across philanthropy, earned revenue, grants, partnerships, memberships, and events.",
    proof: "Past engagements have produced 6× organizational revenue growth and $1.5M in state grants secured.",
  },
  {
    number: "04",
    title: "Board & Governance Development",
    body: "Strengthening accountability, engagement, and the executive–board partnership. Includes board recruitment strategy, governance reviews, board retreats, and committee structure design.",
  },
  {
    number: "05",
    title: "Marketing, Brand & Communications Strategy",
    body: "Strong programs deserve strong marketing — and underdeveloped marketing is one of the most common shortcomings in the nonprofit sector. With three decades of marketing leadership across the private and nonprofit sectors, this is one of Alice's deepest areas of expertise.",
    proof: "At Annapolis Maritime Museum & Park, Alice built and managed a portfolio of 27 distinct products and programs — from local member experiences, to summer camps for families, to heritage sails aboard the historic skipjack Wilma Lee — each with its own audience, messaging, and channel strategy. Signature events sold out.",
    capabilities: [
      "Audience segmentation and messaging — distinct messages for distinct audiences (members, donors, program participants, visitors, partners)",
      "Program and product positioning — shaping how each program, class, event, or offering is presented and sold",
      "Brand development — visual identity, voice, and positioning that match the quality of the mission",
      "Event marketing — ticketing, promotion, and capacity strategy to fill seats and sell out shows",
      "Public relations & media — building visibility through earned media",
    ],
    pressNote: "Past results include features in CNN, the Wall Street Journal, USA Today, Southern Living, and Garden & Gun.",
  },
  {
    number: "06",
    title: "Event Design & Implementation",
    body: "Creating mission-aligned, revenue-generating events with national recognition — including sold-out signature events at Annapolis Maritime Museum & Park, a 10-day arts festival recognized as one of the 100 Best Events in North America by the American Bus Association, and multiple International Festival & Events Association awards.",
  },
  {
    number: "07",
    title: "Community & Government Partnerships",
    body: "Building collaborative relationships across public, private, and nonprofit sectors — including local government, state agencies, business communities, and the National Park Service.",
  },
];

export default function Services() {
  return (
    <>
      <Section padding="hero">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif font-semibold text-navy tracking-tight">
            Services
          </h1>
          <p className="mt-8 text-lg md:text-xl font-serif italic text-ink/80 leading-relaxed">
            Every nonprofit faces a different blend of strategy, revenue, leadership, and visibility challenges. Estradegies offers seven service lines — available individually or combined into multi-pronged engagements. Every project is custom-scoped with defined deliverables and a clear timeline.
          </p>
        </div>
      </Section>

      <Section>
        <div className="space-y-20">
          {services.map((service) => (
            <article
              key={service.number}
              className="grid md:grid-cols-12 gap-6 md:gap-8 pb-16 border-b border-line/60 last:border-0 last:pb-0"
            >
              <div className="md:col-span-3">
                <div className="font-serif text-5xl md:text-6xl text-navy/30 leading-none">
                  {service.number}
                </div>
              </div>
              <div className="md:col-span-9 space-y-5">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold text-navy leading-tight">
                  {service.title}
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-ink/85">
                  {service.body}
                </p>
                {service.duration && (
                  <p className="text-sm font-medium text-navy/80">
                    {service.duration}
                  </p>
                )}
                {service.proof && (
                  <p className="text-base leading-relaxed text-ink/75 italic">
                    {service.proof}
                  </p>
                )}
                {service.capabilities && (
                  <ul className="space-y-3 pt-3">
                    {service.capabilities.map((cap, i) => (
                      <li key={i} className="flex gap-3 text-base text-ink/85">
                        <span className="text-navy/40 mt-1">→</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {service.pressNote && (
                  <p className="text-sm text-ink/70 italic pt-2">
                    {service.pressNote}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="stone">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8">
            How Engagements Work
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-ink/85">
            <p>
              Each engagement begins with a free 30-minute discovery call to understand your organization's goals, current challenges, and what working together might look like.
            </p>
            <p>
              From there, Estradegies builds a{" "}
              <strong className="text-navy">
                custom proposal with defined deliverables, a clear timeline, and transparent investment.
              </strong>{" "}
              Typical engagements run <strong>three to six months.</strong>
            </p>
          </div>
        </div>
      </Section>

      <Section variant="navy">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-cream mb-8">
            Ready to talk?
          </h2>
          <CTAButton variant="light">Schedule a Free Discovery Call →</CTAButton>
        </div>
      </Section>
    </>
  );
}
