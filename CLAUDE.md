# Estradegies Website — Project Context for Claude Code

This file gives Claude Code full context on this project. Read it before making any changes.

## What this is

A marketing website for **Estradegies** — Alice Estrada's solo nonprofit consulting practice. Built with Next.js 16 + React 19 + Tailwind v4. Deploys to Vercel (or planned to). Domain: **Estradegies.com** (purchased via Namecheap, not yet connected).

**Audience:** Small grassroots nonprofits looking for strategy, fundraising, marketing, and leadership consulting.

**This site was built by Maddy (Alice's daughter, an experienced builder) on her machine over the course of one session with Claude. Alice is now the long-term owner and editor.**

## Critical spelling — DO NOT GET THIS WRONG

The brand is **Estradegies** — with a `d`. It's a play on Estrada (Alice's surname) + strategies.

Earlier source material (and the existing placeholder logo) spelled it **"Estrategies"** (no `d`). That was wrong. The current placeholder logo at `assets/logo/estradegies-logo.svg` and `web/public/logo/estradegies-logo.svg` has been corrected to the with-d version.

If you see "Estrategies" anywhere in the codebase or text, treat it as a typo — fix to "Estradegies".

## Project structure

```
estradegies-website/
├── CLAUDE.md           ← this file
├── assets/
│   └── logo/
│       └── estradegies-logo.svg   ← placeholder logo (Cormorant Garamond wordmark + swoosh)
├── copy/
│   ├── website-copy.md            ← source-of-truth copy for all 5 pages
│   └── capabilities-pdf.md        ← source for the downloadable one-page PDF
├── preview.html        ← simple HTML page to preview the logo on multiple backgrounds
└── web/                ← Next.js 16 project (the actual website code)
    ├── app/
    │   ├── _components/
    │   │   ├── Header.tsx     (sticky nav with Estradegies wordmark)
    │   │   ├── Footer.tsx     (navy footer with contact info)
    │   │   ├── CTAButton.tsx  (Schedule Free Discovery Call button)
    │   │   └── Section.tsx    (reusable section wrapper with cream/navy/stone variants)
    │   ├── about/page.tsx     (About Alice — bio, why, approach, snapshot, civic, outside-the-office)
    │   ├── services/page.tsx  (7 service lines with engagement shapes)
    │   ├── impact/page.tsx    (3 case studies + Notable Programs sidebar + testimonial placeholders)
    │   ├── contact/page.tsx   (Schedule + contact form + Direct Contact)
    │   ├── globals.css        (Tailwind v4 @theme with brand colors and fonts)
    │   ├── layout.tsx         (root layout — fonts, header, footer, metadata)
    │   └── page.tsx           (Home — Mission + Margin hero, stats, services teaser, press strip, etc.)
    ├── public/
    │   └── logo/estradegies-logo.svg
    └── package.json
```

## Brand & design system (LOCKED)

- **Name:** Estradegies (with a `d`)
- **Tagline:** "Partners with nonprofits and mission-driven organizations to align strategy, revenue, and leadership for durable, long-term impact."
- **Brand pillar:** "Mission + Margin" (used as the home page H1)
- **Visual direction:** classical/refined, serif-forward, generous whitespace, restrained palette
- **Colors** (in `app/globals.css` as `@theme inline`):
  - `navy` #2b3a5c (primary)
  - `navy-dark` #1f2a44
  - `cream` #f8f5ed (default background)
  - `cream-warm` #f4efe6
  - `stone` #e8e5dc (alternate section background)
  - `ink` #1a1a1a (body text)
  - `muted` #6b6b6b
  - `line` #d8d2c4
- **Fonts** (via `next/font/google` in `app/layout.tsx`):
  - Headings: **Cormorant Garamond** (weights 500/600/700)
  - Body: **Inter**
- **Tone:** polished, warm, confident, mission-serious but not stiff

## Locked decisions (do not re-litigate)

- **Page set (5 total, no blog):** Home, About, Services, Impact, Contact
- **Primary CTA on every page:** "Schedule a Free Discovery Call" → links to `/contact` (will eventually point to Calendly)
- **Secondary CTAs only on Contact page:** contact form + email/phone
- **Pricing:** NO numbers, NO tiers on the site. Site uses "custom proposals with defined deliverables and timelines" language only. Actual rate ($100/hr, below market) discussed in proposals/discovery calls only. Maddy explicitly rejected both flat pricing and tier pricing.
- **Newsletter signup:** none
- **Online payments:** none
- **Accessibility:** no formal WCAG-AA targeting; basic hygiene (alt text, semantic markup, decent contrast) only
- **Lead magnet:** none
- **Press logos to display:** CNN, Wall Street Journal, USA Today, Southern Living, Garden & Gun
- **Client logos to display:** Annapolis Maritime Museum & Park, Gettysburg Festival, Main Street Gettysburg, Walt Disney Imagineering
- **Case studies (3 deep, on Impact page):** Annapolis Maritime Museum & Park, Gettysburg Festival, Main Street Gettysburg
- **Notable Programs sidebar:** Biz Kid$ + Now Snowing Nightly (see attribution rules below)

## CRITICAL attribution rules (don't get these wrong)

- **Biz Kid$ Program:** created during Alice's EARLIER retail-property / shopping-center marketing work (Schroder Center era, 1992–1997), in Orange County FL. **NOT during her Disney Celebration consulting.** Common error to guard against.
- **Now Snowing Nightly:** created during Alice's Walt Disney Imagineering consulting at the Town of Celebration (1998–2000). Drove a 44% retail sales increase, won international recognition, remains a tradition in Celebration.

## Alice Estrada — quick facts

- Annapolis, MD (Epping Forest community)
- Phone: 717-253-6174
- Email: estradegies@gmail.com (the consulting practice email — separate from her personal account)
- LinkedIn: https://www.linkedin.com/in/alice-estrada-097245a/
- 30+ years total leadership (business + marketing + nonprofit)
- 12 years as President/CEO of Annapolis Maritime Museum & Park (2013–2025)
- 12 of 12 fiscal years closed in surplus at the Museum
- Featured: CNN, WSJ, USA Today, Southern Living, Garden & Gun
- Nonprofit Executive of the Year — Non-Profit Pro Magazine (2017)

## Common commands

From the `estradegies-website/web/` directory:

```bash
npm install        # First-time setup, installs dependencies
npm run dev        # Starts dev server at http://localhost:3000 (with hot reload)
npm run build      # Production build (check for type/build errors before deploying)
npm run lint       # Lint check
```

## Currently open / placeholder items

These need to be filled in before launch:

1. **Headshot:** placeholder shows "AE" initials in a box on the About page. Alice to provide a real headshot file (any format, will be saved to `web/public/`).
2. **Press logos:** currently shown as text only (CNN, WSJ, etc. typed out). Alice needs to source PNG/SVG logos OR we can leave as styled text.
3. **Client logos:** same situation — text only currently, would benefit from real logos.
4. **Testimonials:** 3 placeholder blocks waiting for Alice to gather real testimonials from former colleagues/board chairs/funders. Edit `app/page.tsx` (1) and `app/impact/page.tsx` (2).
5. **Calendly:** the Contact page has a placeholder ("Booking widget will appear here once Calendly is connected"). Alice needs to set up Calendly, then we embed the booking widget there. CTAs across the site link to `/contact` for now — eventually they should link directly to Calendly.
6. **Contact form:** the form on the Contact page is built but disabled — no backend connected yet. Options: connect to Formspree/Netlify Forms/Resend/etc., or keep disabled and rely on email/phone.
7. **Capabilities PDF:** the SOURCE copy is at `copy/capabilities-pdf.md`. The actual PDF artifact has not been generated yet — design and export still to do (Canva, InDesign, or generated programmatically).
8. **Real logo:** the current logo is a placeholder Maddy created (Cormorant Garamond wordmark + cubic-bezier swoosh, matches the corrected spelling). Alice may want a professionally designed real logo later. SVG at `web/public/logo/estradegies-logo.svg`.
9. **Domain:** `Estradegies.com` is purchased on Namecheap but not yet connected. Need to point DNS at the hosting provider (Vercel) once site is deployed.
10. **Deployment:** not yet deployed. Plan was Vercel free tier. Push to GitHub → connect Vercel → auto-deploy on every push → eventually connect Namecheap domain.

## Launch target

**June 10, 2026** was the original target. Adjust as needed.

## Tailwind v4 notes (since this version is newer than most training data)

- Brand colors are defined in `app/globals.css` inside `@theme inline { ... }` as CSS variables like `--color-navy: #2b3a5c`.
- These create utilities automatically: `bg-navy`, `text-navy`, `border-navy`, `bg-navy/80` (opacity), etc.
- Same for the custom `stone`, `cream`, `ink`, `muted`, `line` colors.
- Fonts are wired via CSS variables `--font-cormorant` and `--font-inter` set by `next/font/google` in `app/layout.tsx`, then mapped to Tailwind's `font-serif` and `font-sans` in `globals.css`.

## Next.js 16 notes

- App Router (not Pages Router). Files in `app/` map to routes.
- `params` and `searchParams` are now async Promises (does not affect this static site).
- `next/head` is gone — use `export const metadata` in pages/layouts (already done).
- Turbopack is the default bundler.

## Working style notes for Alice

- Alice is the subject of this site and the long-term owner. She knows the SUBJECT MATTER deeply (it's her bio) but isn't a developer.
- For text/content changes (testimonials, About bio, services descriptions): she can describe what she wants in plain English; Claude Code edits the relevant `.tsx` file.
- The dev server (`npm run dev`) gives instant feedback at `http://localhost:3000` with hot reload.
- The copy source in `copy/website-copy.md` is the canonical text reference — keep it in sync with the .tsx files when content changes.

## Project memory (in your local Claude Code memory directory)

Alice's local Claude Code may also have a project-level memory file (`estradegies_project.md`) once a session starts here. Use it for ongoing session-to-session continuity. This CLAUDE.md is the shared, version-controlled context.
