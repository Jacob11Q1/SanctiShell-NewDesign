import { ScrollWords } from "@/components/motion/scroll-words";

// From Kai, 2026-10-13. TODO: Kai to approve final wording
const text =
  "This craft comes from here, from Bethlehem, the town where Jesus was born. Jacob Qumsiyeh loved it. Like others in Beit Sahour, he wanted to craft what Jesus did for us, so in 1980 he started a small workshop of his own.";

// Where the craft comes from, lit word by word as you scroll.
export function StoryOrigin() {
  return (
    <section className="bg-gradient-to-b from-bg to-surface">
      <div className="mx-auto grid max-w-[1536px] gap-8 px-4 py-28 md:grid-cols-12 md:px-8 md:py-44">
        <p className="eyebrow md:col-span-3 md:pt-4">Where it began</p>
        <ScrollWords
          text={text}
          className="font-display text-[clamp(2rem,4.2vw,4rem)] font-light leading-[1.15] tracking-[-0.01em] md:col-span-9"
        />
      </div>
    </section>
  );
}
