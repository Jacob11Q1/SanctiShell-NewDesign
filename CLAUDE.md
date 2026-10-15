# CLAUDE.md — Sanctishell

This file tells Claude how to work on this codebase. Read it fully before every task.

## 1. Project overview

**Sanctishell** (sanctishell.com) is a fully custom e-commerce website, rebuilt from scratch to replace the old WordPress site.

- **What it sells**
  1. **Workshop pieces:** handcrafted mother-of-pearl and olive wood crosses, rosaries, gifts, jewelry and antiques from the family workshop in Beit Sahour, near Bethlehem. Many pieces are one of a kind.
  2. **Digital products:** PDFs and online-only goods, delivered instantly after payment.
  3. **Clothing (later):** an own apparel line with sizes and colors. Starts as a "Coming soon" waitlist.
- **Brand feel:** calm, spacious, photo-led, story-first, timeless. The products shine; the interface stays quiet.
- **Owner:** Kai (Jacob Qumsiyeh). Payments run through Stripe.
- **The family story (facts from Kai, use these and nothing invented):**
  - The workshop was founded in **1980** in Beit Sahour by Kai's grandfather, **Jacob Qumsiyeh**, because he loved the craft. Like others in Beit Sahour, he wanted to craft what Jesus did for us. The craft comes from Bethlehem, where Jesus was born.
  - Kai's father, **Farah Qumsiyeh**, started working with him. The grandfather passed away on **11 October 2023**; Farah and Kai (**Jacob Qumsiyeh**, the grandson, who shares his name) continued the work together. Three generations.
  - **The website is a memorial to the grandfather.** Kai: "This website will be his memory, from me to him." Our Story opens with him, and every page's footer carries a dedication to him. Treat anything about him with care and never invent details of his life.
  - Family portraits are in `/public/story/` (cropped; guests in the background of the father's photo are blurred for their privacy). Originals are in the git-ignored `/_originals/story-photos/`.
  - **The workshop today:** only Farah and Kai. Farah does everything and has worked since **1990**; Kai helps him, taught by his father and grandfather, since **2005**.
  - **The process (Kai's words):** start with a sea shell → cut it fully → polish it → place it on the cross and glue it → rough and shape each piece to fit its place. **4–5 days per cross.** Everything, to this day, is made by hand.
  - **The grandfather's words to Kai (quote verbatim, never rewrite):** "You are the master of your own fate. Be great, and do whatever makes you feel comfortable." He taught them the love of the work and the craft.
  - **What the work means to them:** it brought Farah and Kai closer to God and to His love for all of His people.
  - **Mission:** to share the family's story with the world, so that others can see and believe that Jesus is our Saviour.
  - Workshop address: Eweena Street, Beit Sahour, Palestine. No photos of the workshop exist yet. No social media profiles yet.
- **Timeline:** about 8 weeks, flexible. This is a flagship project: polish and quality matter more than the deadline.

## 2. How we work (most important section)

- **The site is designed and built ONE PAGE AT A TIME.** Kai designs each page himself, then we build it.
- Only build the page or component Kai asks for in the current task. Never scaffold, design or "pre-build" other pages.
- Before writing code for a new page, confirm the page's sections and the design references Kai provides.
- If a design decision is missing (color, font, spacing, copy, image), **ask** instead of inventing one.
- Shared pieces (header, footer, buttons, tokens) are built once in `components/` and reused; never duplicate them per page.
- After finishing a page: list what was built, what files changed, and what is still placeholder.
- Keep code readable and commented where logic is non-obvious. Kai reviews and learns from it.
- Update the **Page tracker** (section 12) when a page's status changes.

## 2b. Creative direction: award-level standard

**The goal:** Sanctishell must feel like an award-winning website (Awwwards / Godly level) while still being a fast, easy store that sells. Quality over speed, always. This is a long-term flagship project; never cut corners to finish faster.

**Creative north star: "Light through nacre."**
Mother-of-pearl shifts color as light moves across it. That idea guides every design and motion decision:
- Subtle iridescent shimmer on hover states and key accents (never rainbow-loud)
- Light sweeping softly across images and headings as the user scrolls
- Colors that shift gently between sections as the story moves
- The feeling: sacred, handmade, luminous, calm

**What award-level means here:**
1. **One concept everywhere:** every page, component and animation should express "light through nacre". If a design choice doesn't serve the concept, question it.
2. **Photography leads:** layouts are built around large, high-quality photography (macro shots of pearl and olive wood, hands in the workshop, finished pieces). Never design around low-quality placeholder images; use clearly marked placeholders sized to the final ratio until real photos exist.
3. **Typography as art:** big, confident, editorial display type paired with a quiet, readable body font. Type is part of the visual identity, not just text.
4. **Motion with meaning:** smooth scrolling, image reveals, and one signature page transition used consistently. Every animation should feel like light or craft, never a gimmick. Performance and prefers-reduced-motion rules from section 7 still apply.
5. **The homepage is a journey:** it scrolls like a short film: the shell, the workshop, the hands, the finished piece, the customer.
6. **Products as museum objects:** product pages present each piece with space, story and detail, like an exhibit.
7. **Details nobody asks for:** custom cursor (desktop only), a crafted 404 page, a refined loading moment, polished focus states, perfect mobile layouts.
8. **Still a great store:** beauty never breaks usability. Navigation stays obvious, add-to-cart is always easy to find, pages load fast (target Lighthouse 90+ on performance, accessibility, best practices and SEO).

**Before finishing any page, check it against this list:**
- Does it express the "light through nacre" concept?
- Is the photography or placeholder treatment full-bleed and premium?
- Is the typography confident and consistent with the tokens?
- Is the motion smooth, purposeful, and reduced-motion safe?
- Does it work perfectly on a phone?
- Is it still fast and easy to buy from?
If any answer is no, flag it to Kai before calling the page done.

## 3. Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js (App Router), React |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS + CSS variables for design tokens; CSS Modules allowed for complex custom styles |
| Animation | Motion (`motion/react`, formerly Framer Motion) + CSS transitions/keyframes |
| Database | **PostgreSQL** (self-hosted on the VPS) |
| ORM / migrations | Prisma |
| Auth | Auth.js (NextAuth) with the Prisma adapter; roles: `CUSTOMER`, `ADMIN` |
| Payments | Stripe Checkout (hosted) + Stripe webhooks |
| Validation | Zod (every form, API route and server action input) |
| Email | Transactional provider — TBD (Resend or SMTP via Nodemailer) |
| Images | `next/image`; product images stored on the VPS and served by Nginx |
| Hosting | Contabo VPS, Nginx reverse proxy, PM2 process manager, Let's Encrypt SSL |

Do not add new dependencies without asking. Do not introduce Supabase, Firebase, MongoDB, WordPress, or any other database or CMS. **PostgreSQL is the only database.**

## 4. Folder structure

```
sanctishell/
├── app/
│   ├── (shop)/                 # public storefront pages
│   │   ├── page.tsx            # homepage
│   │   ├── shop/               # all products, filters
│   │   ├── pieces/             # mother-of-pearl & olive wood
│   │   ├── digital/            # digital products
│   │   ├── clothing/           # waitlist, later the collection
│   │   ├── product/[slug]/     # product page
│   │   ├── cart/
│   │   ├── checkout/success/
│   │   ├── our-story/  artisans/  journal/
│   │   └── faq/  contact/  shipping/  returns/  privacy/  terms/  cookies/
│   ├── account/                # orders, downloads (signed-in customers)
│   ├── admin/                  # ADMIN role only
│   ├── api/
│   │   ├── stripe/webhook/route.ts
│   │   ├── checkout/route.ts
│   │   └── downloads/[token]/route.ts
│   ├── layout.tsx
│   └── globals.css             # tokens as CSS variables
├── components/
│   ├── ui/                     # buttons, inputs, badges, modals
│   ├── layout/                 # header, footer, nav, cart drawer
│   ├── home/                   # homepage chapters (hero, prologue, chapters I–V)
│   ├── product/                # cards, gallery, variant picker
│   └── motion/                 # reusable animation wrappers
├── lib/
│   ├── db.ts                   # single Prisma client instance
│   ├── stripe.ts
│   ├── auth.ts
│   ├── money.ts                # cents <-> display formatting
│   └── validation/             # Zod schemas
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts
├── public/                     # static brand assets only
├── storage/                    # NOT public: digital product files
└── CLAUDE.md
```

## 5. Database (PostgreSQL + Prisma)

### Rules

- All schema changes go through Prisma migrations (`npx prisma migrate dev --name <change>`). Never edit the database by hand.
- **Money is stored as integers in cents** (`priceCents Int`). Never use floats for money.
- Every table has `id` (cuid), `createdAt`, `updatedAt`.
- Products use a `slug` (unique) for URLs.
- Use transactions when an operation touches several tables (e.g. creating an order and its items, decrementing stock).
- Never delete orders. Products are archived with `status = ARCHIVED`, not deleted.
- Use one shared Prisma client from `lib/db.ts`.

### Schema sketch

```prisma
enum ProductType   { PIECE DIGITAL APPAREL }
enum ProductStatus { DRAFT ACTIVE SOLD_OUT ARCHIVED }
enum OrderStatus   { PENDING PAID FULFILLED SHIPPED CANCELLED REFUNDED }
enum Role          { CUSTOMER ADMIN }

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  role      Role     @default(CUSTOMER)
  orders    Order[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  // + Auth.js Account / Session / VerificationToken models
}

model Category {
  id       String    @id @default(cuid())
  name     String
  slug     String    @unique
  products Product[]
}

model Product {
  id          String         @id @default(cuid())
  type        ProductType
  status      ProductStatus  @default(DRAFT)
  name        String
  slug        String         @unique
  description String
  story       String?        // the piece's story: maker, material, origin
  priceCents  Int
  currency    String         @default("usd")
  stock       Int            @default(1) // PIECE: usually 1 (one of a kind)
  isOneOfOne  Boolean        @default(false)
  categoryId  String?
  category    Category?      @relation(fields: [categoryId], references: [id])
  images      ProductImage[]
  variants    Variant[]      // APPAREL only
  assets      DigitalAsset[] // DIGITAL only
  createdAt   DateTime       @default(now())
  updatedAt   DateTime       @updatedAt
}

model ProductImage {
  id        String  @id @default(cuid())
  productId String
  product   Product @relation(fields: [productId], references: [id], onDelete: Cascade)
  url       String
  alt       String
  position  Int     @default(0)
}

model Variant {
  id         String  @id @default(cuid())
  productId  String
  product    Product @relation(fields: [productId], references: [id], onDelete: Cascade)
  size       String?
  color      String?
  sku        String  @unique
  priceCents Int?    // overrides product price if set
  stock      Int     @default(0)
}

model DigitalAsset {
  id        String  @id @default(cuid())
  productId String
  product   Product @relation(fields: [productId], references: [id], onDelete: Cascade)
  fileName  String
  filePath  String  // inside /storage, never public
}

model Order {
  id                    String      @id @default(cuid())
  userId                String?
  user                  User?       @relation(fields: [userId], references: [id])
  email                 String
  status                OrderStatus @default(PENDING)
  totalCents            Int
  currency              String      @default("usd")
  stripeSessionId       String      @unique
  stripePaymentIntentId String?
  shippingAddress       Json?
  items                 OrderItem[]
  downloads             DownloadToken[]
  createdAt             DateTime    @default(now())
  updatedAt             DateTime    @updatedAt
}

model OrderItem {
  id         String  @id @default(cuid())
  orderId    String
  order      Order   @relation(fields: [orderId], references: [id])
  productId  String
  variantId  String?
  name       String  // snapshot at purchase time
  priceCents Int     // snapshot at purchase time
  quantity   Int
}

model DownloadToken {
  id        String   @id @default(cuid())
  token     String   @unique
  orderId   String
  order     Order    @relation(fields: [orderId], references: [id])
  assetId   String
  expiresAt DateTime
  uses      Int      @default(0)
  maxUses   Int      @default(5)
}

model WaitlistEntry {
  id        String   @id @default(cuid())
  email     String
  list      String   // e.g. "clothing"
  createdAt DateTime @default(now())
  @@unique([email, list])
}

model NewsletterSubscriber {
  id        String   @id @default(cuid())
  email     String   @unique
  createdAt DateTime @default(now())
}

model ProcessedStripeEvent {
  id          String   @id // Stripe event id, for idempotency
  processedAt DateTime @default(now())
}
```

The schema evolves page by page. Only add models when a page needs them.

## 6. Payments (Stripe)

- Use **Stripe Checkout** (hosted). Never build custom card forms or touch raw card data.
- Prices are always read from the database on the server when creating a Checkout session. Never trust prices sent from the browser.
- An order becomes `PAID` **only** in the webhook handler on `checkout.session.completed`, never on the success page.
- The webhook handler must: verify the Stripe signature, skip events already in `ProcessedStripeEvent`, and run stock updates and order changes inside a transaction.
- For one-of-one pieces, prevent double-selling: check stock when creating the session and again in the webhook.
- Digital products: the webhook creates `DownloadToken` rows and sends the download email. Files are streamed through `/api/downloads/[token]` after checking expiry and use count.
- Local testing: `stripe listen --forward-to localhost:3000/api/stripe/webhook`.

## 7. Design, styling and animation

### Design tokens

All colors, fonts, spacing, radii and shadows live in `app/globals.css`. The project uses **Tailwind v4**, so tokens are defined in `@theme` blocks (there is no `tailwind.config` file). Each token becomes both a CSS variable and a Tailwind class (`bg-bg`, `text-accent`, `font-display`, `rounded-brand`…). **Never hard-code hex values or font names in components.**

**Chosen palette: "Pearl & Olive"** (light theme only, approved by Kai 2026-10-13)

| Token | Name | Hex | Use |
| --- | --- | --- | --- |
| `--color-bg` | Pearl ivory | `#F7F3EC` | page background |
| `--color-surface` | Linen | `#EFE8DC` | cards, photo backdrops |
| `--color-text` | Warm ink | `#2B2620` | headings, body |
| `--color-text-muted` | Stone | `#6E655A` | eyebrows, captions |
| `--color-accent` | Olive | `#5C6B3C` | links, buttons, focus |
| `--color-gold` | Soft gold | `#A88A5A` | thin lines and ornaments only, **never text** (fails contrast) |
| `--color-border` | Sand | `#E2D9CA` | dividers |
| `--color-nacre-rose` / `-lilac` / `-aqua` / `-champagne` | Nacre | `#C9A9A3` / `#A8A3C4` / `#93B8B0` / `#C8AD7F` | iridescent shimmer, hairlines, glows, giant display type. Decorative only, **never body text**. Tones still to be confirmed by Kai |

Nacre helpers in `globals.css`: `nacre-text` (iridescent gradient clipped to text) and `.nacre-underline` (link underline that draws in as an iridescent hairline).

**Fonts** (loaded with `next/font/google` in `app/layout.tsx`):
- `--font-display`: **Cormorant Garamond** (300/400/500, normal + italic). Headlines; the italic marks one accent word, e.g. "Made by hand in *Bethlehem.*"
- `--font-body`: **Manrope** (variable). Body, UI, prices, buttons.
- `eyebrow` utility: Manrope, 12px, uppercase, 0.2em tracking, muted color.

`--radius-brand` (4px) is still a placeholder, to be confirmed by Kai.

### Styling rules

- Mobile-first. Test at 375px, 768px, 1280px and 1536px.
- Semantic HTML first (`header`, `nav`, `main`, `section`, `article`, `footer`, real `button` and `a` elements).
- Tailwind for layout and spacing; CSS Modules only when Tailwind gets messy (complex animations, special effects).
- Fonts loaded with `next/font` (no layout shift).

### Animation rules

- Motion should feel slow, soft and premium: fades, gentle rises, subtle parallax, smooth image reveals. No bouncing, no flashy effects.
- Default timing: 0.4–0.8s, ease-out curves. Stagger lists gently.
- Animate only `transform` and `opacity` for performance.
- **Always respect `prefers-reduced-motion`**: reduce or disable motion for those users.
- Reusable animation wrappers live in `components/motion/` (e.g. `FadeIn`, `RevealImage`, `Stagger`).
- Animations must never block content, hurt accessibility, or delay the first paint of products.

## 7b. Images and photography

- During development, use free-licensed stock photos from Unsplash or Pexels ONLY as placeholders. Pick images that match the brand mood (light, texture, craft, warm natural tones). Download them into /public/placeholders/ and record each image's source URL and photographer in /public/placeholders/CREDITS.md.
- Every placeholder must be marked in code with a // TODO: replace with real photo comment.
- NEVER use photos from other shops, marketplaces (Etsy, Amazon, eBay), competitors, Google Images, or any source without a clear free license.
- NEVER use stock or AI-generated images to represent actual products for sale. Real product pages must use Kai's own photos of the real pieces.
- Design image slots at final aspect ratios (e.g. 4:5 for product cards, 3:2 or full-bleed for hero and story sections) so real photos drop in without layout changes.
- All images go through next/image with proper sizes, alt text, and modern formats (AVIF/WebP).
- Before launch, run a check that lists every remaining placeholder image so none reach production (`npm run check:placeholders`).
- **Real product photos** from Kai live in `/public/products/[product-slug]/` and are registered in `lib/product-photos.ts`. They are resized to 2400px and stripped of camera metadata; originals are kept locally in the git-ignored `/_originals/`. Current shots are marked `// TODO: reshoot on clean background`. Never search the web for product photos.

## 8. Code conventions

- Server Components by default; add `"use client"` only when needed (state, effects, animation, event handlers).
- Data fetching happens on the server (Server Components, server actions, route handlers), never by calling the database from the client.
- Validate every input with Zod. Return clear, user-friendly error messages.
- File names: `kebab-case.tsx` for files, `PascalCase` for components.
- No `any` in TypeScript.
- Format prices only through `lib/money.ts`.
- Keep components small; split anything over ~200 lines.

## 9. Security

- Secrets only in `.env` files, never committed. Keep `.env.example` up to date with key names only.
- `/admin` and admin actions check `role === ADMIN` on the server, every time.
- Digital files live in `/storage`, outside `public/`, and are only served through signed, expiring download tokens.
- Rate-limit auth, contact and newsletter endpoints.
- Sanitize any rich text before rendering. Never use `dangerouslySetInnerHTML` with user input.
- No `console.log` left in committed code (the old site leaked debug logs into production).
- **Keep the policies true.** `lib/legal/privacy.ts` and `lib/legal/cookies.ts` describe exactly what the site collects and which cookies it sets (today: none). Any change that adds a cookie, analytics, a third-party service or new personal data must update those files in the same change. The legal texts are drafts: Kai and a lawyer must review them before launch.

## 10. SEO, accessibility and content honesty

- Every page has a unique title, meta description and Open Graph image. Product pages include Product structured data (JSON-LD).
- Every product has its own URL (`/product/[slug]`).
- All images have meaningful `alt` text. Color contrast meets WCAG AA. Everything works by keyboard.
- **No fake content in production:** no invented reviews, testimonials, stats or dates. Placeholder copy must be clearly marked `TODO` and removed before launch.
- Redirect old WordPress URLs to their new equivalents at launch.

## 11. Environments and deployment

| Environment | URL | Database | Stripe |
| --- | --- | --- | --- |
| Local | `localhost:3000` | local PostgreSQL | test mode |
| Staging | `new.sanctishell.com` | staging PostgreSQL on the VPS | test mode |
| Production | `sanctishell.com` | production PostgreSQL on the VPS | live mode |

- The current WordPress site stays live until the new build passes every test on staging. Back it up before launch.
- Deploy: `git pull` → `npm ci` → `npx prisma migrate deploy` → `npm run build` → `pm2 reload sanctishell`.
- Nightly `pg_dump` backups of the production database, kept off the server too.

### Commands

```bash
npm run dev                          # local dev server
npm run build && npm start           # production build
npx prisma migrate dev --name <x>    # new migration (local)
npx prisma migrate deploy            # apply migrations (staging/prod)
npx prisma studio                    # browse the database
npx prisma db seed                   # seed sample data (local only)
npm run lint
npm run check:placeholders           # list placeholder photos still in use (must be empty before launch)
```

## 12. Page tracker

Update this table as pages move forward. Build only the page currently marked **In progress**.

| # | Page | Status |
| --- | --- | --- |
| 1 | Foundation: tokens, header, footer | In progress (tokens, fonts, header, footer built; awaiting Kai's review) |
| 2 | Homepage | In progress (5-chapter story built with placeholder photos + draft copy; awaiting Kai's review) |
| 3 | Workshop pieces collection | Not started |
| 4 | Product page | Not started |
| 5 | Digital products | Not started |
| 6 | Cart + Stripe Checkout + success | Not started |
| 7 | Customer account + downloads | Not started |
| 8 | Admin dashboard | Not started |
| 9 | Clothing waitlist | Not started |
| 10 | Our Story, Artisans, Journal | In progress (Our Story and Artisans built, awaiting Kai's review; Journal not started) |
| 11 | FAQ, Contact, Shipping, Returns, Privacy, Terms, Cookies | In progress (FAQ built with answered questions only; Contact built (sending waits for an email provider + inbox); Shipping built (policy sections hidden until Kai fills lib/shipping-policy.ts); Terms, Privacy and Cookie policy drafted in lib/legal/, need Kai + lawyer review before launch; Returns not started) |

## 13. Never do

- Never build pages that weren't asked for.
- Never invent brand colors, fonts, copy, reviews or product details.
- Never use floats for money or trust client-side prices.
- Never mark an order paid outside the Stripe webhook.
- Never put digital product files in `public/`.
- Never add a database other than PostgreSQL, or a CMS.
- Never commit secrets or debug logs.
- Never touch production directly; everything goes local → staging → production.
- Never ship a page that looks "template-like" or generic; flag it and propose improvements instead.
- Never add animations that don't serve the "light through nacre" concept or that hurt performance.
