import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Hand-rolled 24px icon set — no icon-library dependency, consistent
 * 1.6 stroke weight, and every icon inherits `currentColor`.
 */

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      aria-hidden="true"
      focusable="false"
      {...strokeProps}
      {...props}
    >
      {children}
    </svg>
  );
}

/* ----------------------------- Brand / contact ---------------------------- */

export function GithubIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.55v-1.94c-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.2.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .78 0 1.74v20.52C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 7 8.16 5.72a1.5 1.5 0 0 0 1.68 0L21 7" />
    </Svg>
  );
}

export function LeetcodeIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.918 5.922 5.922 0 0 0 2.217-.061 5.85 5.85 0 0 0 1.838-.865l3.208-2.61a1.385 1.385 0 0 0 .438-.962 1.374 1.374 0 0 0-.438-.961 1.375 1.375 0 0 0-1.922 0l-3.209 2.61a3.1 3.1 0 0 1-1.026.486 3.167 3.167 0 0 1-1.203.033 3.18 3.18 0 0 1-2.585-2.106 3.22 3.22 0 0 1-.033-1.282 3.27 3.27 0 0 1 .665-1.18l3.854-4.126 5.406-5.788A1.375 1.375 0 0 0 13.483 0zm-2.88 7.283a1.374 1.374 0 0 0-.962.438l-4.57 4.894a1.375 1.375 0 0 0 0 1.922 1.375 1.375 0 0 0 1.923 0l4.57-4.894a1.375 1.375 0 0 0-.961-2.36zm4.845 2.164a1.375 1.375 0 0 0-.962 2.361l4.03 3.86a1.375 1.375 0 0 0 1.922-1.922l-4.03-3.86a1.374 1.374 0 0 0-.96-.439z" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </Svg>
  );
}

/* --------------------------------- Actions -------------------------------- */

export function ArrowRightIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </Svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </Svg>
  );
}

export function ArrowDownIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 4v15" />
      <path d="m6 13 6 6 6-6" />
    </Svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3v12" />
      <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
      <path d="M4 20h16" />
    </Svg>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M15 5.5A2.5 2.5 0 0 0 12.5 3H5.5A2.5 2.5 0 0 0 3 5.5v7A2.5 2.5 0 0 0 5.5 15" />
    </Svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </Svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </Svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </Svg>
  );
}

export function PrintIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7 9V4h10v5" />
      <rect x="3.5" y="9" width="17" height="7" rx="2" />
      <path d="M7 16h10v4H7z" />
    </Svg>
  );
}

/* ------------------------------ Skill category ---------------------------- */

export function CodeIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m9 8-5 4 5 4" />
      <path d="m15 8 5 4-5 4" />
    </Svg>
  );
}

export function LayoutIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="4" width="17" height="16" rx="2.5" />
      <path d="M3.5 9h17" />
      <path d="M10 9v11" />
    </Svg>
  );
}

export function ServerIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="4" width="17" height="6.5" rx="2" />
      <rect x="3.5" y="13.5" width="17" height="6.5" rx="2" />
      <path d="M7.5 7.25h.01M7.5 16.75h.01" />
    </Svg>
  );
}

export function DatabaseIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v12c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6" />
      <path d="M4.5 12c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3" />
    </Svg>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3.5l1.6 4.4 4.4 1.6-4.4 1.6L12 15.5l-1.6-4.4L6 9.5l4.4-1.6z" />
      <path d="M18.5 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" />
      <path d="M5 15l.55 1.45L7 17l-1.45.55L5 19l-.55-1.45L3 17l1.45-.55z" />
    </Svg>
  );
}

export function CpuIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M10.5 10.5h3v3h-3z" />
      <path d="M10 4v3M14 4v3M10 17v3M14 17v3M4 10h3M4 14h3M17 10h3M17 14h3" />
    </Svg>
  );
}

export function GitIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="7" cy="6" r="2.5" />
      <circle cx="7" cy="18" r="2.5" />
      <circle cx="17" cy="12" r="2.5" />
      <path d="M7 8.5v7" />
      <path d="M9.5 6h3a2 2 0 0 1 2 2v2" />
    </Svg>
  );
}

/* ------------------------------- Achievements ----------------------------- */

export function TrophyIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M8 4h8v4.5a4 4 0 0 1-8 0z" />
      <path d="M8 5.5H5.5V7a3 3 0 0 0 3 3" />
      <path d="M16 5.5h2.5V7a3 3 0 0 1-3 3" />
      <path d="M12 12.5V16" />
      <path d="M8.5 20h7" />
      <path d="M10 16h4l.5 4h-5z" />
    </Svg>
  );
}

export function ZapIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M13.5 3 6 13.5h5L10.5 21 18 10.5h-5z" />
    </Svg>
  );
}

export function TerminalIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <path d="m7.5 10 2.5 2.5-2.5 2.5" />
      <path d="M12.5 15h4" />
    </Svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="9.5" cy="8" r="3.2" />
      <path d="M3.5 20a6 6 0 0 1 12 0" />
      <path d="M16.5 5.2a3.2 3.2 0 0 1 0 5.6" />
      <path d="M18 14.4A6 6 0 0 1 20.5 20" />
    </Svg>
  );
}

/* --------------------------------- Details -------------------------------- */

export function MapPinIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </Svg>
  );
}

export function GraduationCapIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M2.5 9 12 4.5 21.5 9 12 13.5z" />
      <path d="M6.5 11v5c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3v-5" />
      <path d="M21.5 9v5" />
    </Svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M3.5 10h17" />
      <path d="M8 3v4M16 3v4" />
    </Svg>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m12 3 8.5 4.5L12 12 3.5 7.5z" />
      <path d="m3.5 12.5 8.5 4.5 8.5-4.5" />
    </Svg>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </Svg>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="7.5" width="18" height="12" rx="2.5" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5" />
      <path d="M3 12.5h18" />
    </Svg>
  );
}

/* -------------------------------- Registry -------------------------------- */

export const iconRegistry = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  leetcode: LeetcodeIcon,
  mail: MailIcon,
  phone: PhoneIcon,
  code: CodeIcon,
  layout: LayoutIcon,
  server: ServerIcon,
  database: DatabaseIcon,
  sparkles: SparklesIcon,
  cpu: CpuIcon,
  git: GitIcon,
  trophy: TrophyIcon,
  zap: ZapIcon,
  terminal: TerminalIcon,
  users: UsersIcon,
  mapPin: MapPinIcon,
  cap: GraduationCapIcon,
  calendar: CalendarIcon,
  layers: LayersIcon,
  target: TargetIcon,
  briefcase: BriefcaseIcon,
} as const;

export type IconName = keyof typeof iconRegistry;

export function Icon({
  name,
  ...props
}: { name: string } & IconProps) {
  const Cmp = iconRegistry[name as IconName] ?? CodeIcon;
  return <Cmp {...props} />;
}
