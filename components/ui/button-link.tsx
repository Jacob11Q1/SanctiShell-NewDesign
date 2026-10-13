import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "light"; // solid = olive on light pages, light = ivory on photos/dark
  className?: string;
};

const variants = {
  solid: "bg-accent text-bg",
  light: "bg-bg text-text",
};

// The site's main call-to-action, styled as a link. A band of light crosses it on hover.
export function ButtonLink({ href, children, variant = "solid", className = "" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`sheen inline-flex items-center gap-3 rounded-brand px-7 py-4 text-[0.8125rem] font-medium tracking-[0.04em] ${variants[variant]} ${className}`}
    >
      <span className="relative z-[2]">{children}</span>
      <span aria-hidden="true" className="relative z-[2]">
        →
      </span>
    </Link>
  );
}
