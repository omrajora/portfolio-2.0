import fs from "node:fs";
import path from "node:path";

import { profile } from "@/data/site";

export type ResumeLink = {
  href: string;
  /** True only when a real PDF exists in /public. */
  download: boolean;
  label: string;
  shortLabel: string;
};

/**
 * Resolves the resume CTA target at build time.
 *
 * If a PDF has been placed at `public/Om-Kumar-Resume.pdf` the button becomes a
 * genuine download. Otherwise it falls back to the print-ready `/resume` route,
 * so the call to action is never a broken link.
 *
 * Server-only — `fs` cannot run in a Client Component.
 */
export function getResumeLink(): ResumeLink {
  const fileName = profile.resumeFile.replace(/^\/+/, "");
  const absolutePath = path.join(process.cwd(), "public", fileName);

  let exists = false;
  try {
    exists = fs.existsSync(absolutePath);
  } catch {
    exists = false;
  }

  return exists
    ? {
        href: profile.resumeFile,
        download: true,
        label: "Download Resume",
        shortLabel: "Resume",
      }
    : {
        href: "/resume",
        download: false,
        label: "View Resume",
        shortLabel: "Resume",
      };
}
