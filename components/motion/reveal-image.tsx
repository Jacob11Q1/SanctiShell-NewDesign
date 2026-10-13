"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealImageProps = {
  children: ReactNode; // usually a next/image with `fill`
  className?: string; // set the aspect ratio here, e.g. "aspect-[4/5]"
  delay?: number;
};

// Image frame that "develops" as it enters the view: the photo settles from a
// slight zoom while it fades up, like light slowly filling a room.
// Not for above-the-fold images: those must be visible on first paint.
export function RevealImage({ children, className = "", delay = 0 }: RevealImageProps) {
  return (
    <div className={`relative overflow-hidden bg-surface ${className}`}>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.12 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
