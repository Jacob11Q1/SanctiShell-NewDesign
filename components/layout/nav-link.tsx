"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/lib/navigation";

type NavLinkProps = {
  item: NavItem;
  className?: string;
};

// Header/footer link with the iridescent underline. Client component only
// because it reads the current path to mark the active page.
export function NavLink({ item, className = "" }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

  return (
    <Link
      href={item.href}
      aria-current={isActive ? "page" : undefined}
      className={`nacre-underline ${className}`}
    >
      {item.label}
      {item.badge && (
        <sup className="relative -top-[0.7em] ml-1 align-baseline text-[0.625rem] font-medium uppercase tracking-[0.15em] text-text-muted">
          {item.badge}
        </sup>
      )}
    </Link>
  );
}
