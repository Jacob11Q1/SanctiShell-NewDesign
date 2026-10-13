import type { ReactNode } from "react";
import { SectionHeading } from "@/components/ui/section-heading";

type ChapterHeadingProps = {
  number: string; // roman numeral, e.g. "I"
  label: string; // e.g. "The shell"
  title: ReactNode;
  tone?: "light" | "dark"; // dark = on ink or photo backgrounds
  className?: string;
};

// Homepage chapter heading: "Chapter I · The shell" + big display title.
export function ChapterHeading({ number, label, title, tone, className }: ChapterHeadingProps) {
  return (
    <SectionHeading
      eyebrow={
        <>
          Chapter {number} <span aria-hidden="true">·</span> {label}
        </>
      }
      title={title}
      tone={tone}
      className={className}
    />
  );
}
