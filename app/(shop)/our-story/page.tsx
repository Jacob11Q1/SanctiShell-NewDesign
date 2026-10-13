import type { Metadata } from "next";
import { StoryClosing } from "@/components/story/story-closing";
import { StoryHero } from "@/components/story/story-hero";
import { StoryOrigin } from "@/components/story/story-origin";
import { StoryTimeline } from "@/components/story/story-timeline";
import { StoryWork } from "@/components/story/story-work";

export const metadata: Metadata = {
  title: "Our story",
  description:
    "In loving memory of Jacob Qumsiyeh, who founded our mother-of-pearl and olive wood workshop in Beit Sahour in 1980. Three generations, one craft.",
};

// Our Story (tracker #10). Facts from Kai; copy drafts marked TODO where unconfirmed.
export default function OurStoryPage() {
  return (
    <>
      <StoryHero />
      <StoryOrigin />
      <StoryTimeline />
      <StoryWork />
      <StoryClosing />
    </>
  );
}
