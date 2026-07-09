import Link from "next/link";
import { Section } from "./_components/Section";
import { CTAButton } from "./_components/CTAButton";

const stats = [
  { value: "6×", caption: "Revenue growth at Annapolis Maritime Museum & Park" },
  { value: "$5M", caption: "Capital campaign delivered" },
  { value: "12 of 12", caption: "Consecutive years closed in surplus at Annapolis Maritime" },
  { value: "★★★★", caption: "Charity Navigator 4-Star · Candid Platinum · MD Nonprofits Standard of Excellence" },
];

const services = [
  { title: "Interim Executive Leadership", body: "Stability and results during leadership transitions" },
  { title: "Organizational Sustainability & Strategic Planning", body: "A focused three-month sprint that aligns mission, programs, and finances" },
  { title: "Revenue Diversification & Growth Strategy", body: "Philanthropy, earned revenue, grants, partnerships, memberships, and events" },
  { title: "Board & Governance Development", body: "Strengthening accountability and the executive–board partnership" },
  { title: "Marketing, Brand & Communications Strategy", body: "Audience segmentation, program positioning, event marketing, and earned media" },
  { title: "Event Design & Implementation", body: "Mission-aligned, revenue-generating events with national recognition" },
  { title: "Community & Government Partnerships", body: "Building collaborative relationships across sectors" },
];

const pressOutlets = [
  { name: "CNN" },
  { name: "Wall Street Journal", href: "https://www.wsj.com/articles/its-almost-boating-season-and-you-know-what-that-means-time-to-light-your-socks-on-fire-1491760259" },
  { name: "USA Today" },
  { name: "Southern Living" },
  { name: "Garden & Gun" },
];
const clients = [
  "Annapolis Maritime Museum & Park",
  "Gettysburg Festival",
  "Main Street Gettysburg",
  "Walt Disney Imagineering",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Section padding="hero">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-7xl lg:text-[7.5rem] font-serif font-semibold leading-[1.02] tracking-tight text-navy">
            Mission <span className="text-navy/50">+</span> Margin
          </h1>
          <p className="mt-10 text-xl md:text-2xl text-ink/80 leading-relaxed max-w-2xl font-serif italic">
            Estradegies helps nonprofits and mission-driven organizations align strategy, revenue, and leadership for durable, long-term impact.
          </p>
          <div className="mt-12">
            <CTAButton>Schedule a Free Discovery Call →</CTAButton>
          </div>
        </div>
      </Section>

      {/* SIGNATURE IMPACT STATS */}
      <Section variant="stone" className="border-y border-line">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.caption}>
              <div className="font-serif text-5xl md:text-6xl font-semibold text-navy mb-3 leading-none">
                {stat.value}
              </div>
              <p className="text-sm text-ink/70 leading-relaxed">{stat.caption}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ABOUT TEASER */}
      <Section>
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl leading-relaxed text-ink/85">
            Founded by{" "}
            <strong className="text-navy font-semibold">Alice Estrada</strong> —
            former President & CEO of Annapolis Maritime Museum & Park and Nonprofit Executive of the Year (2017) — Estradegies brings two decades of executive leadership and business discipline to the small grassroots nonprofits that need it most.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block text-navy font-medium tracking-wide border-b border-navy/40 hover:border-navy transition-colors"
          >
            Read Alice's Story →
          </Link>
        </div>
      </Section>

      {/* SERVICES OVERVIEW */}
      <Section variant="stone">
        <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
          How Estradegies Works
        </h2>
        <p className="text-lg text-ink/70 max-w-2xl mb-12 leading-relaxed">
          Seven service lines, available individually or combined into multi-pronged engagements. Every project is custom-scoped with defined deliverables and a clear timeline.
        </p>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl">
          {services.map((service) => (
            <div key={service.title} className="border-l-2 border-navy/30 pl-5">
              <h3 className="font-serif text-xl font-semibold text-navy mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-ink/70 leading-relaxed">{service.body}</p>
            </div>
          ))}
        </div>
        <Link
          href="/services"
          className="mt-12 inline-block text-navy font-medium tracking-wide border-b border-navy/40 hover:border-navy transition-colors"
        >
          Explore All Services →
        </Link>
      </Section>

      {/* PRESS LOGOS */}
      <Section padding="compact">
        <div className="text-center">
          <h3 className="text-xs tracking-[0.25em] uppercase text-ink/50 mb-8 font-sans font-medium">
            As Featured In
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-14 text-ink/60 font-serif text-xl md:text-2xl italic">
            {pressOutlets.map((outlet, i) => (
              <span key={outlet.name}>
                {outlet.href ? (
                  <a href={outlet.href} target="_blank" rel="noopener noreferrer" className="hover:text-navy transition-colors">
                    {outlet.name}
                  </a>
                ) : outlet.name}
                {i < pressOutlets.length - 1 && <span className="ml-8 md:ml-14 text-ink/20" aria-hidden>·</span>}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* CLIENT LOGOS */}
      <Section variant="stone" padding="compact">
        <div className="text-center">
          <h3 className="text-xs tracking-[0.25em] uppercase text-ink/50 mb-8 font-sans font-medium">
            Past Engagements
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-10 text-navy/80 font-serif text-base md:text-xl">
            {clients.map((client, i) => (
              <span key={client}>
                {client}
                {i < clients.length - 1 && <span className="ml-6 md:ml-10 text-navy/30" aria-hidden>·</span>}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* TESTIMONIAL */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-navy/30 font-serif text-7xl leading-none mb-2">"</div>
          <p className="text-xl md:text-2xl font-serif italic text-ink/70 leading-relaxed">
            Alice is a rare leader who combines strategic vision with the ability to inspire people to achieve extraordinary results. During her tenure, she transformed our organization, strengthened our financial sustainability, and built a culture centered on excellence and community impact. Her integrity, creativity, and passion make her an invaluable partner to any nonprofit seeking to grow and thrive.
          </p>
          <p className="mt-6 text-sm text-muted">— Carol Sisco, Former Board Chair, Annapolis Maritime Museum &amp; Park</p>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section variant="navy">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-cream mb-6">
            Ready to build a more sustainable nonprofit?
          </h2>
          <p className="text-lg text-cream/80 leading-relaxed mb-10">
            Every engagement begins with a free 30-minute discovery call to understand your organization's goals, challenges, and opportunities — at no cost and with no obligation.
          </p>
          <CTAButton variant="light">Schedule a Free Discovery Call →</CTAButton>
        </div>
      </Section>
    </>
  );
}
