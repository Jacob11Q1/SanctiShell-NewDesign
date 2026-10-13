"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  // Pixels the content drifts over the full scroll past it. Negative = moves up faster.
  distance?: number;
  className?: string;
};

// Content drifts slightly slower or faster than the page as you scroll past.
// Transform only; disabled for reduced-motion visitors.
export function Parallax({ children, distance = 60, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-distance / 2, distance / 2]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduceMotion ? undefined : { y }} className="relative h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
