import Link from "next/link";
import {
  helpNav,
  legalNav,
  shopNav,
  storyNav,
  type NavItem,
} from "@/lib/navigation";
import { NewsletterForm } from "./newsletter-form";

// With Cache Components, `new Date()` must be cached explicitly.
// The year is captured at build time, so it updates on every deploy.
async function CopyrightYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

function FooterColumn({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <div>
      <h2 className="eyebrow text-bg/60">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.href + item.label}>
            <Link href={item.href} className="nacre-underline text-sm text-bg/85 hover:text-bg">
              {item.label}
              {item.badge && (
                <sup className="relative -top-[0.7em] ml-1 align-baseline text-[0.625rem] uppercase tracking-[0.15em] text-bg/50">
                  {item.badge}
                </sup>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Dark "warm ink" footer: newsletter, link columns, address, then a giant
// iridescent wordmark, as if light is catching the name in the dark.
export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-text text-bg">
      {/* Soft nacre glow in the corner, purely decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,var(--color-nacre-lilac),var(--color-nacre-rose)_40%,transparent_70%)] opacity-[0.12] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1536px] px-4 pt-20 md:px-8 md:pt-28">
        {/* Newsletter */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            {/* TODO: final newsletter copy from Kai */}
            <p className="eyebrow text-bg/60">Newsletter</p>
            <h2 className="mt-4 font-display text-4xl font-light leading-[1.1] md:text-6xl">
              Letters from the <em>workshop.</em>
            </h2>
            <p className="mt-5 max-w-md text-base text-bg/70">
              New pieces and stories from Beit Sahour, a few times a year.
            </p>
          </div>
          <NewsletterForm />
        </div>

        <hr className="my-16 border-bg/15 md:my-20" />

        {/* Link columns + address */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
          <FooterColumn title="Shop" items={shopNav} />
          <FooterColumn title="Sanctishell" items={storyNav} />
          <FooterColumn title="Help" items={helpNav} />

          {/* No social profiles yet; add a "Follow" column here when they exist */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="eyebrow text-bg/60">The workshop</h2>
            <address className="mt-5 text-sm not-italic leading-relaxed text-bg/85">
              Eweena Street
              <br />
              Beit Sahour
              <br />
              Palestine
            </address>
          </div>
        </div>
      </div>

      {/* Giant iridescent wordmark */}
      <p
        aria-hidden="true"
        className="nacre-text relative mt-20 select-none whitespace-nowrap text-center font-display text-[17vw] font-light leading-[0.8] tracking-[-0.02em] md:mt-28"
      >
        Sanctishell
      </p>

      {/* Dedication to the founder, on every page (Kai: "this website will be his memory") */}
      <p className="relative mx-auto mt-10 max-w-[1536px] px-4 text-center font-display text-lg font-light italic text-bg/75 md:px-8 md:text-xl">
        <Link href="/our-story" className="nacre-underline hover:text-bg">
          In loving memory of Jacob Qumsiyeh, who founded our workshop in 1980
        </Link>
      </p>

      {/* Bottom bar */}
      <div className="relative mx-auto flex max-w-[1536px] flex-col gap-4 px-4 py-8 text-xs text-bg/60 md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © <CopyrightYear /> Sanctishell. All rights reserved.
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {legalNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="nacre-underline hover:text-bg">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a href="#main" className="nacre-underline hover:text-bg">
              Back to top <span aria-hidden="true">↑</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
