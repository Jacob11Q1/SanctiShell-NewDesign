"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
// TODO: replace with real photo (hands cutting shell in the workshop)
import chiselImage from "@/public/placeholders/hands-chisel.jpg";
// TODO: replace with real photo (hands carving / inlaying a piece)
import carvingImage from "@/public/placeholders/hands-carving.jpg";
import { ChapterHeading } from "./chapter-heading";

// The real process, as Kai described it (2026-10-15). Full version on /artisans.
const steps = [
  {
    title: "Cut",
    text: "Every cross begins with a sea shell, cut by hand.",
  },
  {
    title: "Polish",
    text: "Each piece of shell is polished to bring out its light.",
  },
  {
    title: "Set",
    text: "The pieces are laid onto the cross and glued, one by one.",
  },
  {
    title: "Shape",
    text: "Each piece is roughed and shaped to fit its exact place. Four to five days, for every cross.",
  },
];

const images = [
  { src: chiselImage, alt: "Hands guiding a chisel through pale wood" },
  { src: carvingImage, alt: "Hands carving a spiral pattern into a wooden surface" },
];

// Chapter III: the hands. On desktop the photo stays pinned while the four
// steps scroll past; the active step brightens and the photo crossfades halfway.
export function ChapterHands() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    // A step becomes active when it crosses the middle of the screen
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeImage = active < 2 ? 0 : 1;

  return (
    <section className="mx-auto max-w-[1536px] px-4 py-28 md:px-8 md:py-40">
      <ChapterHeading
        number="III"
        label="The hands"
        title={
          <>
            Made slowly,
            <br />
            <em>by hand.</em>
          </>
        }
      />

      <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-8">
        {/* Pinned photo (sticky on desktop) */}
        <div className="md:sticky md:top-24 md:col-span-6 md:h-[calc(100vh-8rem)]">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface md:aspect-auto md:h-full">
            {images.map((img, i) => (
              <Image
                key={img.alt}
                src={img.src}
                alt={img.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 768px) 48vw, 100vw"
                className={`object-cover transition-opacity duration-1000 ease-out ${
                  i === activeImage ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>

        <ol className="md:col-span-5 md:col-start-8">
          {steps.map((step, i) => (
            <li
              key={step.title}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              data-index={i}
              className={`flex flex-col justify-center border-t border-border py-10 transition-opacity duration-700 md:min-h-[65vh] md:py-0 ${
                i === active ? "md:opacity-100" : "md:opacity-30"
              }`}
            >
              <span className="font-display text-2xl italic text-text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-[clamp(2.25rem,4vw,3.5rem)] font-light leading-none">
                {step.title}
              </h3>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
