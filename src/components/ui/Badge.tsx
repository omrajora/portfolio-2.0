import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Monospace technology badge. Never carries a proficiency claim. */
export function Badge({
  children,
  className,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "accent" | "outline";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[0.6875rem] leading-none tracking-tight transition-colors duration-300",
        tone === "default" &&
          "border-line bg-surface-2/70 text-muted group-hover:border-line-strong group-hover:text-ink",
        tone === "accent" &&
          "border-accent/25 bg-accent/10 text-accent-bright",
        tone === "outline" && "border-line-strong/70 bg-transparent text-faint",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Pill used for status text such as availability. */
export function Pill({
  children,
  className,
  dot = false,
}: {
  children: ReactNode;
  className?: string;
  dot?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 text-xs text-muted backdrop-blur-sm",
        className,
      )}
    >
      {dot ? (
        <span
          aria-hidden="true"
          className="relative flex h-1.5 w-1.5 shrink-0"
        >
          <span className="absolute inset-0 rounded-full bg-accent animate-pulse-ring" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
      ) : null}
      {children}
    </span>
  );
}
