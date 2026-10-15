"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/**
 * Hairline reading-progress bar pinned to the very top of the viewport.
 * Spring-smoothed so it never looks like it is snapping between values.
 */
export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-accent-deep via-accent to-accent-bright"
    />
  );
}
