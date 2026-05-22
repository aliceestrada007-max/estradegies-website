# Estradegies Website

Marketing website for **Alice Estrada's** nonprofit consulting practice — Estradegies.

- **Tech:** Next.js 16 + React 19 + Tailwind v4
- **Domain (planned):** `estradegies.com` (purchased on Namecheap, not yet connected)
- **Status:** Built locally; not yet deployed

The full project context, brand decisions, locked choices, and list of placeholder items waiting on real assets all live in [`CLAUDE.md`](./CLAUDE.md) at the repo root. Claude Code reads that file automatically on first launch in this folder.

---

## Quick Start for Alice

You'll need three things installed on your computer:

1. **VS Code** with the **Claude Code extension** signed in
2. **Node.js** — download the LTS version from [nodejs.org](https://nodejs.org) (one-click installer; takes ~2 min)
3. **Git** — usually already installed with Claude Code. If not, get it from [git-scm.com](https://git-scm.com).

### Step 1 — Open VS Code in any folder where you want this project to live

For example: `Documents/estradegies-website` on your computer.

### Step 2 — In Claude Code's chat, paste this prompt:

> I need to set up the Estradegies website project on this computer. Please:
>
> 1. Clone `https://github.com/madelinekornack-afk/estradegies-website` into the current folder
> 2. `cd web && npm install` to install the project dependencies
> 3. Then run `npm run dev` in the background and tell me to open `http://localhost:3000` to see the site
>
> Read `CLAUDE.md` at the repo root for full project context before doing anything else.

Claude Code will handle the rest.

### Step 3 — Iterate

Once the site is running, just describe what you want changed in plain English. Examples:

- "On the About page, change my civic leadership section to separate Current and Former roles. Current: A, B, C. Former: everything else."
- "Make the hero headline smaller on mobile."
- "Add a testimonial from [name] on the home page: 'quote here'."

---

## Handoff Notes (for Maddy)

- This repo currently lives under your GitHub account (`madelinekornack-afk`).
- **Once Alice has her own GitHub account:**
  1. On github.com → this repo → **Settings** → scroll to **Danger Zone** → **Transfer ownership**
  2. Enter Alice's GitHub username and the repo name to confirm
  3. Takes ~30 seconds. After that, the repo belongs to Alice and you're fully out.
- **Until then, add Alice as a collaborator** so she can push: Settings → **Collaborators and teams** → **Add people** → enter her GitHub username
- The dev server you started in our last session has been running in the background of your terminal. You can close that window any time; we're done with it.

---

## Project Structure

```
estradegies-website/
├── CLAUDE.md           ← read this for everything important
├── README.md           ← this file
├── assets/             ← logo SVG (also copied into web/public/)
├── copy/               ← source-of-truth markdown copy for all pages
├── preview.html        ← logo preview page
└── web/                ← the Next.js site (run dev/build commands here)
    ├── app/            ← pages and components
    ├── public/         ← static assets
    └── package.json
```
