"use client";

import { useCallback, useEffect, useState } from "react";

import { CheckIcon, CopyIcon } from "@/components/visuals/Icons";

/** Copies the email address to the clipboard with transient confirmation. */
export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2200);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard unavailable (insecure context or denied permission).
      setCopied(false);
    }
  }, [email]);

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Email address copied" : "Copy email address"}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-line bg-surface-2/60 px-2.5 py-1.5 font-mono text-[0.6875rem] text-muted transition-all duration-300 hover:border-accent/35 hover:text-ink"
    >
      {copied ? (
        <>
          <CheckIcon className="h-3.5 w-3.5 text-accent" />
          Copied
        </>
      ) : (
        <>
          <CopyIcon className="h-3.5 w-3.5" />
          Copy
        </>
      )}
    </button>
  );
}
