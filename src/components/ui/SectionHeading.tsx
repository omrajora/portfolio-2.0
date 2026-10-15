import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Section header: monospace eyebrow with an accent tick, a display-weight
 * title, and optional supporting copy.
 */
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "label-mono flex items-center gap-2.5 text-accent",
          centered && "justify-center",
        )}
      >
        <span
          aria-hidden="true"
          className="inline-block h-px w-6 bg-accent/60"
        />
        {eyebrow}
      </p>

      <h2
        id={id}
        className="mt-5 text-3xl font-semibold leading-[1.12] text-ink sm:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-muted sm:text-[1.0625rem]",
            centered && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
