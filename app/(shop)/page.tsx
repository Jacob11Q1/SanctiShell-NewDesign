import type { Metadata } from "next";
import { ChapterClosing } from "@/components/home/chapter-closing";
import { ChapterHands } from "@/components/home/chapter-hands";
import { ChapterPieces } from "@/components/home/chapter-pieces";
import { ChapterShell } from "@/components/home/chapter-shell";
import { ChapterWorkshop } from "@/components/home/chapter-workshop";
import { Hero } from "@/components/home/hero";
import { Prologue } from "@/components/home/prologue";

// TODO: final SEO copy + a real Open Graph image (Kai's own photo)
export const metadata: Metadata = {
  title: { absolute: "Sanctishell · Handcrafted mother-of-pearl & olive wood from Bethlehem" },
  description:
    "Crosses, rosaries, gifts and jewelry handcrafted from mother-of-pearl and olive wood in our family workshop in Beit Sahour, near Bethlehem.",
};

// Homepage: a short film in five chapters (CLAUDE.md §2b).
// The shell → the workshop → the hands → the piece → in your hands.
export default function HomePage() {
  return (
    <>
      <Hero />
      <Prologue />
      <ChapterShell />
      <ChapterWorkshop />
      <ChapterHands />
      <ChapterPieces />
      <ChapterClosing />
    </>
  );
}
