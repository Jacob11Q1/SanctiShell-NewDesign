"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

// Tells every Motion animation to respect the visitor's "reduce motion" setting:
// transform animations are skipped, opacity fades still run.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
