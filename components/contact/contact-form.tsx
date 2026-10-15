"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendContactMessage, type ContactState } from "@/app/(shop)/contact/actions";
import { FormField, fieldControlClass } from "@/components/ui/form-field";
import { contactTopics, type ContactField } from "@/lib/validation/contact";

const initialState: ContactState = { status: "idle" };

// The contact form. Validation runs on the server (Zod), so the rules live in one
// place; the browser's own checks are only a first, gentle hint.
export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  // After an error, move keyboard focus to the first field that needs fixing
  useEffect(() => {
    if (state.status !== "invalid") return;
    formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
  }, [state]);

  if (state.status === "sent") {
    return (
      <div role="status" className="relative overflow-hidden border border-border bg-surface/60 p-10 md:p-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,var(--color-nacre-lilac),var(--color-nacre-aqua)_45%,transparent_70%)] opacity-30 blur-3xl"
        />
        <p className="eyebrow relative">Message sent</p>
        <p className="relative mt-5 font-display text-[clamp(2.25rem,4vw,3.5rem)] font-light leading-[1.05]">
          Thank you. <em>We&apos;ll write back soon.</em>
        </p>
      </div>
    );
  }

  const error = (field: ContactField) => state.fieldErrors?.[field]?.[0];
  const describedBy = (field: ContactField) => (error(field) ? `contact-${field}-error` : undefined);

  return (
    // key: rebuild the form after each response so every field (including the
    // <select>, which React's form reset doesn't restore) shows the visitor's values
    <form key={state.attempt ?? 0} ref={formRef} action={formAction} noValidate className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <FormField id="contact-name" label="Your name" error={error("name")}>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            defaultValue={state.values?.name}
            aria-invalid={!!error("name")}
            aria-describedby={describedBy("name")}
            className={fieldControlClass}
          />
        </FormField>
        <FormField id="contact-email" label="Your email" error={error("email")}>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={state.values?.email}
            aria-invalid={!!error("email")}
            aria-describedby={describedBy("email")}
            className={fieldControlClass}
          />
        </FormField>
      </div>

      <FormField id="contact-topic" label="What is it about?" error={error("topic")}>
        <div className="relative">
          <select
            id="contact-topic"
            name="topic"
            required
            defaultValue={state.values?.topic ?? ""}
            aria-invalid={!!error("topic")}
            aria-describedby={describedBy("topic")}
            className={`${fieldControlClass} appearance-none pr-8`}
          >
            <option value="" disabled>
              Choose a topic
            </option>
            {contactTopics.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
          {/* Chevron */}
          <span aria-hidden="true" className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-text-muted">
            ↓
          </span>
        </div>
      </FormField>

      <FormField id="contact-message" label="Your message" error={error("message")}>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          defaultValue={state.values?.message}
          aria-invalid={!!error("message")}
          aria-describedby={describedBy("message")}
          className={`${fieldControlClass} resize-y`}
        />
      </FormField>

      {/* Honeypot: hidden from people and screen readers; bots fill it in */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="contact-company">Company</label>
        <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={pending}
          className="sheen inline-flex items-center justify-center gap-3 rounded-brand bg-accent px-8 py-4 text-[0.8125rem] font-medium tracking-[0.04em] text-bg transition-opacity disabled:opacity-60"
        >
          <span className="relative z-[2]">{pending ? "Sending…" : "Send message"}</span>
          {!pending && (
            <span aria-hidden="true" className="relative z-[2]">
              →
            </span>
          )}
        </button>
        {/* Overall status: validation summary, rate limit, or "not switched on yet" */}
        <p role="status" aria-live="polite" className="text-sm leading-relaxed text-text-muted">
          {state.message}
        </p>
      </div>
    </form>
  );
}
