"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds. */
  delay?: number;
  /** Travel distance in px before settling. */
  y?: number;
  once?: boolean;
};

/**
 * One scroll-reveal per content block. Deliberately restrained: a short fade
 * plus a small upward translate, and nothing at all when the user has asked
 * for reduced motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 22,
  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px 0px -80px 0px" }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */

const listVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.075, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Staggers direct children on scroll. Pair with `<RevealItem>`.
 */
export function RevealGroup({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
}) {
  const reduceMotion = useReducedMotion();
  const Cmp = motion[as];

  if (reduceMotion) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Cmp
      className={className}
      variants={listVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px 0px -60px 0px" }}
    >
      {children}
    </Cmp>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const reduceMotion = useReducedMotion();
  const Cmp = motion[as];

  if (reduceMotion) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Cmp className={cn(className)} variants={itemVariants}>
      {children}
    </Cmp>
  );
}
