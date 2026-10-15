import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Semantic section wrapper: owns the vertical rhythm, the anchor id, and the
 * accessible name that ties the section to its heading.
 */
export function Section({
  id,
  children,
  className,
  innerClassName,
  labelledBy,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy ?? `${id}-heading`}
      className={cn("relative py-20 sm:py-24 lg:py-32", className)}
    >
      <div className={cn("shell", innerClassName)}>{children}</div>
    </section>
  );
}

/** Thin gradient rule used to separate major sections. */
export function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="shell"
    >
      <div className="h-px w-full bg-gradient-to-r from-transparent via-line-strong to-transparent" />
    </div>
  );
}
