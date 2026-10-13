"use client";

import { useState, type FormEvent } from "react";

// Newsletter signup UI.
// TODO: connect to a server action (Zod validation + rate limit + NewsletterSubscriber
// table) once the database is set up. Until then it says so honestly instead of
// pretending to subscribe anyone.
export function NewsletterForm() {
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("Signup isn't connected yet. Coming soon.");
  };

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="group flex items-end gap-4 border-b border-bg/30 transition-colors focus-within:border-bg">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Your email address"
          className="min-w-0 flex-1 bg-transparent py-3 text-base text-bg placeholder:text-bg/50 focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 py-3 text-[0.8125rem] font-medium tracking-[0.04em] text-bg"
        >
          Subscribe <span aria-hidden="true">→</span>
        </button>
      </div>
      <p aria-live="polite" className="mt-3 min-h-5 text-sm text-bg/70">
        {message}
      </p>
    </form>
  );
}
