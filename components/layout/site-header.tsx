import Link from "next/link";
import { Wordmark } from "@/components/ui/wordmark";
import { shopNav } from "@/lib/navigation";
import { HeaderShell } from "./header-shell";
import { MobileMenu } from "./mobile-menu";
import { NavLink } from "./nav-link";

const linkClass = "text-[0.8125rem] font-medium tracking-[0.04em]";

// Site header: shop links left, centered wordmark, story/account/bag right.
// Below lg it collapses to Menu · wordmark · Bag.
export function SiteHeader() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[70] rounded-brand bg-text px-4 py-2 text-sm text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <HeaderShell>
        <div className="mx-auto grid h-16 max-w-[1536px] grid-cols-[1fr_auto_1fr] items-center px-4 md:h-20 md:px-8">
          <div className="flex items-center">
            <MobileMenu />
            <nav aria-label="Shop" className="hidden lg:block">
              <ul className="flex items-center gap-8">
                {shopNav.map((item) => (
                  <li key={item.href}>
                    <NavLink item={item} className={linkClass} />
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <Wordmark />

          <div className="flex items-center justify-end gap-8">
            <NavLink
              item={{ label: "Our story", href: "/our-story" }}
              className={`${linkClass} hidden lg:inline`}
            />
            <NavLink
              item={{ label: "Account", href: "/account" }}
              className={`${linkClass} hidden lg:inline`}
            />
            {/* TODO: live cart count once the cart is built (tracker #6) */}
            <Link href="/cart" className={`nacre-underline ${linkClass}`}>
              Bag (0)
            </Link>
          </div>
        </div>
      </HeaderShell>
    </>
  );
}
