import type { ReactNode } from "react";

// Shared look for form controls on light pages: a quiet underline that turns
// olive when focused, and red-free, plain-language errors (CLAUDE.md §8).
export const fieldControlClass =
  "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-text placeholder:text-text-muted/70 transition-colors focus:border-accent focus:shadow-[0_1px_0_0_var(--color-accent)] focus:outline-none focus-visible:outline-none aria-[invalid=true]:border-text";
// (The shadow doubles the olive underline on focus, so keyboard focus is clearly visible.)

type FormFieldProps = {
  id: string;
  label: string;
  error?: string;
  children: ReactNode; // the input/select/textarea, which must use the same id
};

// Label + control + error message, wired together for screen readers:
// the control should set aria-describedby={`${id}-error`} when there's an error.
export function FormField({ id, label, error, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow block">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      <p id={`${id}-error`} aria-live="polite" className="mt-2 min-h-5 text-sm text-text">
        {error && (
          <>
            <span aria-hidden="true" className="mr-1.5 inline-block h-1.5 w-1.5 -translate-y-0.5 rounded-full bg-gold" />
            {error}
          </>
        )}
      </p>
    </div>
  );
}
