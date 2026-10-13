import type { ReactNode } from "react";

type LightSweepProps = {
  children: ReactNode;
  className?: string;
};

// "Light through nacre" on display type: every few seconds a soft band of
// iridescent light passes across the words. CSS only (see .light-sweep in
// globals.css); transform-based, and switched off for reduced-motion visitors.
export function LightSweep({ children, className = "" }: LightSweepProps) {
  return (
    <span className={`light-sweep relative block ${className}`}>
      {children}
      <span aria-hidden="true" className="light-sweep__window">
        <span className="light-sweep__text nacre-text">{children}</span>
      </span>
    </span>
  );
}
