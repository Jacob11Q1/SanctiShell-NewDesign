import type { ReactNode } from "react";
import { FadeIn } from "@/components/motion/fade-in";

type ChapterHeadingProps = {
  number: string; // roman numeral, e.g. "I"
  label: string; // e.g. "The shell"
  title: ReactNode;
  tone?: "light" | "dark"; // dark = on ink or photo backgrounds
  className?: string;
};

// Shared heading for the homepage chapters: "Chapter I · The shell" + big display title.
export function ChapterHeading({ number, label, title, tone = "light", className = "" }: ChapterHeadingProps) {
  return (
    <FadeIn className={className}>
      <p className={`eyebrow ${tone === "dark" ? "text-bg/70" : ""}`}>
        Chapter {number} <span aria-hidden="true">·</span> {label}
      </p>
      <h2 className="mt-5 font-display text-[clamp(2.75rem,6vw,5.5rem)] font-light leading-[0.98] tracking-[-0.015em]">
        {title}
      </h2>
    </FadeIn>
  );
}
