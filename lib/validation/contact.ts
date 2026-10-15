import { z } from "zod";

// What a visitor can write to the workshop about. Labels are shown in the form.
// (No "custom order" topic until Kai confirms custom orders exist; see lib/faq.ts.)
export const contactTopics = [
  { value: "piece", label: "A piece" },
  { value: "order", label: "An order" },
  { value: "story", label: "Our story" },
  { value: "other", label: "Something else" },
] as const;

const topicValues = contactTopics.map((t) => t.value) as [string, ...string[]];

// Validates every contact message on the server (CLAUDE.md §8: Zod for every input).
// Messages are friendly, because visitors read them.
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please tell us your name.")
    .max(100, "That name is a little long. Please shorten it."),
  email: z.email("Please enter a valid email address, so we can write back."),
  topic: z.enum(topicValues, "Please choose what your message is about."),
  message: z
    .string()
    .trim()
    .min(10, "Please write a little more, at least a sentence.")
    .max(4000, "Your message is too long. Please keep it under 4,000 characters."),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactField = keyof ContactInput;
