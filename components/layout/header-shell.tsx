"use client";

import { useEffect, useState, type ReactNode } from "react";

// Wraps the header and handles its scroll behavior:
// - at the top of the page it is transparent, so full-bleed photography shows through
// - once scrolled, a blurred ivory layer fades in behind it (opacity only)
// - scrolling down hides it, scrolling up brings it back (transform only)
export function HeaderShell({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      // Only hide after the first screen-ish, and never on tiny jitters
      if (Math.abs(y - lastY) > 4) setHidden(y > 160 && y > lastY);
      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Note: only apply a translate while hidden. Any transform on the header makes
  // it the containing box for `position: fixed` children, which would trap the
  // full-screen mobile menu inside the header.
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        hidden ? "-translate-y-full" : ""
      }`}
    >
      {/* Background layer: fades in once the page is scrolled */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 border-b border-border bg-bg/85 backdrop-blur-md transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="relative">{children}</div>
    </header>
  );
}
