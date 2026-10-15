import type { ContactInput } from "@/lib/validation/contact";

export type DeliveryResult = "sent" | "not-configured";

// Sends a validated contact message to the workshop.
//
// TODO: connect a transactional email provider (CLAUDE.md §3: Resend or SMTP via
// Nodemailer). This needs two decisions from Kai: which provider, and which inbox
// the messages should go to. Until then nothing is sent, and the form tells the
// visitor so honestly instead of pretending.
export async function deliverContactMessage(message: ContactInput): Promise<DeliveryResult> {
  void message; // will be used once a provider is connected
  return "not-configured";
}
