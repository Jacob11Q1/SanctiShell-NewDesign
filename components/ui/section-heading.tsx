import type { ReactNode } from "react";
import { FadeIn } from "@/components/motion/fade-in";

type SectionHeadingProps = {
  eyebrow: ReactNode; // small label above, e.g. "Three generations"
  title: ReactNode;
  tone?: "light" | "dark"; // dark = on ink or photo backgrounds
  className?: string;
};

// Shared section heading used across pages: eyebrow + big display title.
export function SectionHeading({ eyebrow, title, tone = "light", className = "" }: SectionHeadingProps) {
  return (
    <FadeIn className={className}>
      <p className={`eyebrow ${tone === "dark" ? "text-bg/70" : ""}`}>{eyebrow}</p>
      <h2 className="mt-5 font-display text-[clamp(2.75rem,6vw,5.5rem)] font-light leading-[0.98] tracking-[-0.015em]">
        {title}
      </h2>
    </FadeIn>
  );
}
