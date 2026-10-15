# Sanctishell

**Handcrafted mother-of-pearl and olive wood, from a family workshop in Beit Sahour, near Bethlehem.**

This is the new, fully custom e-commerce site for [sanctishell.com](https://sanctishell.com), rebuilt from scratch to replace the old WordPress site. It sells three kinds of things:

1. **Workshop pieces:** crosses, rosaries, gifts, jewelry and antiques in mother-of-pearl and olive wood. Many are one of a kind.
2. **Digital products:** PDFs and online-only goods, delivered instantly after payment.
3. **Clothing (coming soon):** an apparel line, starting as a waitlist.

> **Creative north star: "Light through nacre."** Mother-of-pearl shifts color as light moves across it. That idea drives every design and motion decision: soft iridescent shimmer, light sweeping across headings, calm editorial layouts and photography that leads.

---

## Table of contents

- [Status](#status)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Project structure](#project-structure)
- [Design system](#design-system)
- [Motion](#motion)
- [The homepage story](#the-homepage-story)
- [Images and photography](#images-and-photography)
- [Conventions](#conventions)
- [Security](#security)
- [Environments and deployment](#environments-and-deployment)
- [Roadmap](#roadmap)
- [Working on this project](#working-on-this-project)

---

## Status

The site is built **one page at a time**. Current progress:

| # | Page | Status |
| --- | --- | --- |
| 1 | Foundation: tokens, header, footer | ✅ Built, awaiting review |
| 2 | Homepage | ✅ Built, awaiting review (draft copy, some placeholder photos) |
| 3 | Workshop pieces collection | Not started |
| 4 | Product page | Not started |
| 5 | Digital products | Not started |
| 6 | Cart + Stripe Checkout + success | Not started |
| 7 | Customer account + downloads | Not started |
| 8 | Admin dashboard | Not started |
| 9 | Clothing waitlist | Not started |
| 10 | Our Story, Artisans, Journal | 🟡 Our Story (a memorial to our founder) and Artisans built, awaiting review; Journal not started |
| 11 | FAQ, Contact, Shipping, Returns, Privacy, Terms, Cookies | 🟡 FAQ, Contact, Shipping, Terms, Privacy and Cookie policy built (policies are drafts awaiting review); Returns not started |

Links in the header and footer point at pages that don't exist yet, so they 404 until their turn comes.

---

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack, Cache Components), React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 + design tokens as CSS variables |
| Animation | [Motion](https://motion.dev) (`motion/react`) + CSS transitions/keyframes |
| Fonts | Cormorant Garamond + Manrope via `next/font` (self-hosted, no layout shift) |
| Images | `next/image`, served as AVIF/WebP |
| Database *(planned)* | PostgreSQL (self-hosted) + Prisma |
| Auth *(planned)* | Auth.js with roles `CUSTOMER` / `ADMIN` |
| Payments *(planned)* | Stripe Checkout (hosted) + webhooks |
| Validation | Zod (contact form; every future form and API input) |
| Hosting *(planned)* | Contabo VPS, Nginx, PM2, Let's Encrypt |

---

## Getting started

**Requirements:** Node.js 20+ (developed on Node 24) and npm.

```bash
git clone https://github.com/Jacob11Q1/SanctiShell-NewDesign.git
cd SanctiShell-NewDesign
npm install
npm run dev
```

Then open **http://localhost:3000**.

No environment variables are needed yet. When the database and Stripe are added, a `.env.example` will list every key name. Copy it to `.env` and fill in your own values. Real `.env` files are never committed.

---

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local dev server at `localhost:3000` |
| `npm run build` | Production build (also type-checks) |
| `npm start` | Run the production build |
| `npm run lint` | ESLint |
| `npm run check:placeholders` | List every stock placeholder photo still used in the code. **Must be empty before launch.** |

---

## Project structure

```
├── app/
│   ├── (shop)/                 # public storefront (shares header + footer)
│   │   ├── layout.tsx          # header, <main>, footer, motion settings
│   │   └── page.tsx            # homepage
│   ├── layout.tsx              # root: fonts, metadata, <html>/<body>
│   └── globals.css             # design tokens + shared effects (nacre, light sweep, sheen)
├── components/
│   ├── home/                   # homepage chapters (hero, prologue, chapters I–V)
│   ├── story/                  # Our Story sections (memorial hero, timeline, the work)
│   ├── artisans/               # Artisans page sections (profiles, faith, process, founder)
│   ├── faq/                    # FAQ accordion
│   ├── contact/                # contact form and workshop details
│   ├── shipping/               # shipping journey
│   ├── legal/                  # shared layout for Terms, Privacy, Cookies
│   ├── layout/                 # site header, mobile menu, footer, newsletter form
│   ├── motion/                 # reusable animation wrappers
│   └── ui/                     # wordmark, buttons
├── lib/
│   ├── navigation.ts           # every site link, in one place
│   ├── faq.ts                  # FAQ questions (unanswered ones stay hidden)
│   ├── validation/             # Zod schemas (contact form)
│   ├── rate-limit.ts           # in-memory limiter for the contact form
│   ├── contact-delivery.ts     # sends contact messages (email provider TODO)
│   ├── shipping-policy.ts      # the ONE place for shipping facts (Shipping page + FAQ)
│   ├── legal/                  # Terms, Privacy and Cookie policy content
│   └── product-photos.ts       # real product photos, grouped by product slug
├── public/
│   ├── products/[slug]/        # Kai's real product photos
│   ├── story/                  # family portraits for Our Story
│   ├── artisans/               # macro close-ups cut from real product photos
│   └── placeholders/           # stock mood photos (dev only) + CREDITS.md
├── scripts/
│   └── check-placeholders.mjs  # pre-launch placeholder check
├── CLAUDE.md                   # full project rules: read this before contributing
└── AGENTS.md                   # Next.js 16 notes for AI coding agents
```

Planned folders (added when their page is built): `app/account`, `app/admin`, `app/api`, `components/product`, `lib/db.ts`, `lib/stripe.ts`, `lib/money.ts`, `prisma/`, and a private `storage/` for digital product files.

---

## Design system

All colors, fonts and radii live in [`app/globals.css`](app/globals.css) inside Tailwind v4 `@theme` blocks (there is no `tailwind.config` file). Every token is both a CSS variable and a Tailwind class. **Components never hard-code hex values or font names.**

### Palette: "Pearl & Olive"

| Token | Name | Hex | Use | Tailwind |
| --- | --- | --- | --- | --- |
| `--color-bg` | Pearl ivory | `#F7F3EC` | page background | `bg-bg` |
| `--color-surface` | Linen | `#EFE8DC` | cards, photo backdrops | `bg-surface` |
| `--color-text` | Warm ink | `#2B2620` | text, dark sections | `text-text` |
| `--color-text-muted` | Stone | `#6E655A` | captions, eyebrows | `text-text-muted` |
| `--color-accent` | Olive | `#5C6B3C` | buttons, links, focus | `bg-accent` |
| `--color-gold` | Soft gold | `#A88A5A` | thin lines only, never text | `border-gold` |
| `--color-border` | Sand | `#E2D9CA` | dividers | `border-border` |
| `--color-nacre-*` | Rose / Lilac / Aqua / Champagne | `#C9A9A3` `#A8A3C4` `#93B8B0` `#C8AD7F` | iridescent accents, decorative only | `nacre-text` |

Text, muted text and olive all pass **WCAG AA** contrast on the ivory background.

### Typography

- **Display:** *Cormorant Garamond* Light. Big, editorial headlines, with the *italic* marking one accent word ("Light, carved by *hand.*").
- **Body and UI:** *Manrope*, for text, prices and buttons.
- **Eyebrow:** the `eyebrow` utility, small uppercase Manrope with wide tracking ("BEIT SAHOUR · BETHLEHEM").

### Shared effects (in `globals.css`)

| Class | Effect |
| --- | --- |
| `nacre-text` | Iridescent gradient clipped to text (the giant footer wordmark) |
| `.nacre-underline` | Link underline that draws in as an iridescent hairline |
| `.light-sweep` | A soft band of light gliding across a headline while the letters stay still |
| `.sheen` | A band of light crossing a button or image tile on hover |

---

## Motion

Motion should feel **slow, soft and premium**, like light moving, never flashy.

Reusable wrappers in [`components/motion/`](components/motion):

| Component | What it does |
| --- | --- |
| `FadeIn` | Gentle rise and fade when an element first scrolls into view |
| `RevealImage` | Photo "develops" from a slight zoom as it enters (not for above-the-fold images) |
| `Parallax` | Content drifts slightly slower or faster than the page |
| `ScrollWords` | A paragraph lights up word by word as you scroll (screen readers get plain text) |
| `LightSweep` | The iridescent light band across display type |
| `MotionProvider` | Makes every Motion animation respect the visitor's reduced-motion setting |

Rules:
- Only `transform` and `opacity` are animated, for performance.
- `prefers-reduced-motion` is always respected (CSS and Motion).
- Nothing hides the first paint: the hero photo is visible immediately and only settles in with a transform.

---

## The homepage story

The homepage scrolls like a short film in five chapters:

| Section | Idea |
| --- | --- |
| **Hero** | "Light, carved by *hand.*" Giant type with the light sweep, then a full-bleed shell photo |
| **Prologue** | One sentence about the workshop that lights up word by word |
| **I · The shell** | "Two materials, *one light.*" Mother-of-pearl and olive wood shown as exhibits |
| **II · The workshop** | "Eweena Street, *Beit Sahour.*" The page turns to evening ink |
| **III · The hands** | "Made slowly, *by hand.*" A pinned photo while Select, Cut, Carve and Polish scroll past |
| **IV · The piece** | "Find *your* piece." Entry tiles for Workshop pieces, Digital and Clothing (soon) |
| **V · In your hands** | "From Bethlehem, *to you.*" Sunlight through olive leaves and the final call to shop |

All homepage copy is **draft** and marked `TODO` until Kai approves it.

---

## Images and photography

### Real product photos

Kai's own photos live in [`public/products/[product-slug]/`](public/products) and are registered in [`lib/product-photos.ts`](lib/product-photos.ts) with alt text:

| Slug | Product |
| --- | --- |
| `wall-reliquary-cross-abalone-mother-of-pearl` | Wall reliquary cross, abalone & mother-of-pearl |
| `wall-reliquary-cross-olive-wood-abalone` | Wall reliquary cross, olive wood with abalone inlay |
| `standing-reliquary-cross-abalone-mother-of-pearl` | Standing reliquary cross, abalone & mother-of-pearl |
| `standing-reliquary-cross-olive-wood-abalone` | Standing reliquary cross, olive wood with abalone inlay |
| `god-bless-our-home-last-supper-lords-prayer` | "God Bless Our Home" Last Supper frame, Lord's Prayer |
| `god-bless-our-home-last-supper-jerusalem` | "God Bless Our Home" Last Supper frame, Jerusalem |

They were resized to 2400px and stripped of camera metadata for the web. They're marked `// TODO: reshoot on clean background`, since the current shots are on mixed home surfaces.

### Placeholder photos

Mood photos (shells, wood grain, hands, light) from **Unsplash** fill story slots until real photos exist. Rules:

- Free-licensed sources only (Unsplash / Pexels), credited in [`public/placeholders/CREDITS.md`](public/placeholders/CREDITS.md).
- **Never** used to represent a real product for sale.
- **Never** photos from other shops, marketplaces or Google Images, and product photos are never sourced from the web.
- Every slot is built at its final aspect ratio, so real photos drop in without layout changes.
- `npm run check:placeholders` must report zero before launch.

---

## Conventions

- Server Components by default; `"use client"` only for state, effects, animation or event handlers.
- File names `kebab-case.tsx`, components `PascalCase`. No `any`.
- Components stay small (split anything over ~200 lines).
- Shared pieces (header, footer, buttons, tokens) are built once and reused.
- Comments explain *why* where logic isn't obvious.
- Money will be stored as integer cents and formatted only through `lib/money.ts`.
- No fake content: no invented reviews, testimonials, stats or dates. Draft copy is marked `TODO`.

The full rulebook is in [`CLAUDE.md`](CLAUDE.md).

---

## Security

- Secrets only in `.env` files, never committed (`.env.example` lists key names only).
- Orders become paid **only** in the Stripe webhook, never on the success page; prices are always read from the database, never from the browser.
- Digital files will live in a private `storage/` folder, served only through signed, expiring download links.
- Admin routes check `role === ADMIN` on the server, every time.
- No `console.log` in committed code.

---

## Environments and deployment

| Environment | URL | Stripe |
| --- | --- | --- |
| Local | `localhost:3000` | test mode |
| Staging | `new.sanctishell.com` | test mode |
| Production | `sanctishell.com` | live mode |

Everything goes **local → staging → production**. The current WordPress site stays live until the new build passes every test on staging.

Planned deploy on the VPS:

```bash
git pull && npm ci && npx prisma migrate deploy && npm run build && pm2 reload sanctishell
```

---

## Roadmap

- [ ] Kai approves homepage copy and design
- [ ] Replace placeholder photos with real workshop photography
- [ ] Reshoot product photos on a clean background
- [ ] Workshop pieces collection page
- [ ] Product page ("products as museum objects")
- [ ] PostgreSQL + Prisma, product data seeded from `lib/product-photos.ts`
- [ ] Cart and Stripe Checkout
- [ ] Customer accounts and digital downloads
- [ ] Admin dashboard
- [ ] Clothing waitlist, story pages, info pages
- [ ] Custom cursor, crafted 404, signature page transition
- [ ] Lighthouse 90+ on every page, then launch

---

## Working on this project

1. Read [`CLAUDE.md`](CLAUDE.md) fully. It's the source of truth for design, code and process.
2. Build only the page that's currently in progress; don't pre-build other pages.
3. Never invent brand colors, fonts, copy or product details. Ask instead.
4. Before calling a page done, check it against the "award-level" checklist in `CLAUDE.md` §2b.
5. Run `npm run lint` and `npm run build` before every push.

---

© Sanctishell · Eweena Street, Beit Sahour, Palestine
