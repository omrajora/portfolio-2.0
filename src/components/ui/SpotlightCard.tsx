"use client";

import { useCallback, type MouseEvent, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Card surface with a pointer-tracked accent spotlight.
 *
 * The glow is driven by two CSS custom properties written on pointer move, so
 * no React state updates (and therefore no re-renders) happen while hovering.
 * The effect is CSS-gated to `hover: hover` devices, so touch users get the
 * plain surface with no jitter.
 */
export function SpotlightCard({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  const handlePointerMove = useCallback((event: MouseEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    target.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }, []);

  return (
    <Tag
      onPointerMove={handlePointerMove}
      className={cn(
        "spotlight group relative overflow-hidden rounded-2xl border border-line bg-surface/70",
        "transition-[border-color,transform,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:border-line-strong",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
