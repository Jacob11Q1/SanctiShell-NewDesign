"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Wordmark } from "@/components/ui/wordmark";
import { helpNav, shopNav, storyNav } from "@/lib/navigation";

const bigLinks = [...shopNav, ...storyNav];

// Full-screen menu for phones and tablets (hidden from lg up).
// Links rise in one after another; everything animates transform/opacity only.
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Close the menu when the route changes (React's "adjust state on prop change" pattern)
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  const close = () => {
    setOpen(false);
    buttonRef.current?.focus();
  };

  // While open: lock page scroll, close on Escape, move focus into the menu
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus({ preventScroll: true });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
        className="text-[0.8125rem] font-medium tracking-[0.04em] lg:hidden"
      >
        Menu
      </button>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
        className={`fixed inset-0 z-[60] flex flex-col overflow-y-auto overflow-x-hidden bg-bg transition-opacity duration-500 ease-out lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Soft iridescent glow, purely decorative */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,var(--color-nacre-lilac),var(--color-nacre-aqua)_45%,transparent_70%)] opacity-30 blur-3xl"
        />

        <div className="relative flex h-16 shrink-0 items-center justify-between px-4 md:h-20 md:px-8">
          <button
            type="button"
            onClick={close}
            className="text-[0.8125rem] font-medium tracking-[0.04em]"
          >
            Close
          </button>
          <Wordmark />
          {/* Spacer keeps the wordmark centered */}
          <span className="w-10" aria-hidden="true" />
        </div>

        <nav aria-label="Mobile" className="relative flex-1 px-4 pb-10 pt-8 md:px-8">
          <ul className="space-y-1">
            {bigLinks.map((item, i) => (
              <li
                key={item.href}
                style={{ transitionDelay: open ? `${120 + i * 55}ms` : "0ms" }}
                className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                <Link
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  className="font-display text-[2.75rem] font-light leading-[1.15] md:text-6xl"
                >
                  {item.label}
                  {item.badge && (
                    <sup className="relative -top-[2.2em] ml-2 align-baseline font-body text-[0.625rem] font-medium uppercase tracking-[0.2em] text-text-muted">
                      {item.badge}
                    </sup>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <hr className="my-10 border-border" />

          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <li>
              <Link href="/account">Account</Link>
            </li>
            {helpNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <p className="eyebrow mt-10">Beit Sahour · Bethlehem</p>
        </nav>
      </div>
    </>
  );
}
