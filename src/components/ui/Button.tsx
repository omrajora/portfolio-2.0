import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:pointer-events-none disabled:opacity-55 active:translate-y-px";

const variants: Record<Variant, string> = {
  /* Solid amber — reserved for the single most important action per view. */
  primary: cn(
    "bg-accent text-[#160e00] shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset,0_10px_30px_-12px_rgba(255,176,32,0.65)]",
    "hover:bg-accent-bright hover:shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_16px_40px_-14px_rgba(255,176,32,0.8)]",
    "hover:-translate-y-0.5",
  ),
  /* Hairline surface button. */
  secondary: cn(
    "border border-line bg-surface-2/60 text-ink backdrop-blur-sm",
    "hover:-translate-y-0.5 hover:border-line-strong hover:bg-surface-3/70",
  ),
  ghost: "text-muted hover:bg-surface-2/60 hover:text-ink",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-[0.8125rem]",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[0.9375rem] sm:h-[3.25rem] sm:px-7",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

type LinkButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    /** Set for external destinations — adds target/rel automatically. */
    external?: boolean;
    download?: boolean;
  };

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  external,
  download,
  ...props
}: LinkButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const isExternal =
    external ?? (href.startsWith("http") || href.startsWith("mailto:"));

  // Anchors are required for hash links, downloads, and external targets;
  // next/link is used only for genuine in-app route navigation.
  if (isExternal || download || href.startsWith("#")) {
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noreferrer noopener" } : {})}
        {...(download ? { download: "" } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
