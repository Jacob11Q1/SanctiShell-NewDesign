"use server";

import { z } from "zod";
import { headers } from "next/headers";
import { deliverContactMessage } from "@/lib/contact-delivery";
import { rateLimit } from "@/lib/rate-limit";
import { contactSchema, type ContactField } from "@/lib/validation/contact";

export type ContactState = {
  status: "idle" | "invalid" | "rate-limited" | "not-configured" | "sent" | "error";
  message?: string;
  fieldErrors?: Partial<Record<ContactField, string[]>>;
  // What the visitor typed, so the form can refill itself after an error
  values?: Partial<Record<ContactField, string>>;
  // Counts responses; the form uses it as a React key to rebuild itself with `values`
  attempt?: number;
};

const text = (formData: FormData, key: string) => {
  const v = formData.get(key);
  return typeof v === "string" ? v : "";
};

// Handles the contact form. Runs only on the server.
export async function sendContactMessage(prev: ContactState, formData: FormData): Promise<ContactState> {
  const result = await handle(formData);
  return { ...result, attempt: (prev.attempt ?? 0) + 1 };
}

async function handle(formData: FormData): Promise<ContactState> {
  const values = {
    name: text(formData, "name"),
    email: text(formData, "email"),
    topic: text(formData, "topic"),
    message: text(formData, "message"),
  };

  // Honeypot: a hidden field real people never see or fill. Bots do.
  // Answer as if it worked, so the bot learns nothing, and send nothing.
  if (text(formData, "company") !== "") {
    return { status: "sent" };
  }

  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) {
    return {
      status: "invalid",
      message: "Please check the highlighted fields.",
      fieldErrors: z.flattenError(parsed.error).fieldErrors,
      values,
    };
  }

  // At most 5 valid messages per visitor every 10 minutes. Counted after validation,
  // so fixing a typo never uses up someone's attempts.
  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  if (!rateLimit(`contact:${ip}`, 5, 10 * 60 * 1000).ok) {
    return {
      status: "rate-limited",
      message: "You've sent several messages in a short time. Please wait a few minutes and try again.",
      values,
    };
  }

  try {
    const result = await deliverContactMessage(parsed.data);
    if (result === "not-configured") {
      return {
        status: "not-configured",
        message:
          "Your message looks good, but sending isn't switched on yet. Please check back soon.",
        values,
      };
    }
    return { status: "sent" };
  } catch {
    return {
      status: "error",
      message: "Something went wrong while sending your message. Please try again in a moment.",
      values,
    };
  }
}
