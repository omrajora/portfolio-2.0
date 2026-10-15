"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { LinkButton } from "@/components/ui/Button";
import {
  ArrowUpRightIcon,
  CloseIcon,
  DownloadIcon,
  MenuIcon,
} from "@/components/visuals/Icons";
import { navLinks, profile, socials } from "@/data/site";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/visuals/Icons";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export function Navbar({
  resumeHref,
  resumeDownload,
}: {
  resumeHref: string;
  resumeDownload: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const reduceMotion = useReducedMotion();

  /* --- background transition on scroll ---------------------------------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* --- scroll spy: highlights the section currently in view -------------- */
  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        // Focus the "current" band on the upper-middle of the viewport.
        rootMargin: "-45% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* --- mobile menu: lock scroll + close on Escape ----------------------- */
  useEffect(() => {
    if (!open) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled || open
          ? "glass border-b border-line/80 py-2.5"
          : "border-b border-transparent py-4",
      )}
    >
      <nav aria-label="Primary" className="shell">
        <div className="flex items-center justify-between gap-4">
          {/* ---------------------------------------------------- monogram */}
          <a
            href="#top"
            aria-label={`${profile.name} — back to top`}
            className="group flex items-center gap-2.5"
          >
            <span className="relative grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface-2 font-display text-[0.9375rem] font-bold tracking-tight text-ink transition-colors duration-300 group-hover:border-accent/45">
              OM
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-lg bg-accent/0 transition-colors duration-300 group-hover:bg-accent/[0.07]"
              />
            </span>
            <span className="hidden font-mono text-[0.6875rem] leading-tight tracking-[0.14em] text-faint transition-colors duration-300 group-hover:text-muted sm:block">
              OM
              <span className="text-line-strong"> / </span>
              CODE
              <span className="text-line-strong"> / </span>
              <span className="text-accent/80">AI</span>
            </span>
          </a>

          {/* ------------------------------------------------ desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative rounded-md px-3.5 py-2 text-sm transition-colors duration-300",
                      isActive
                        ? "text-ink"
                        : "text-muted hover:text-ink",
                    )}
                  >
                    {link.label}
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active"
                        aria-hidden="true"
                        transition={
                          reduceMotion
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 380, damping: 32 }
                        }
                        className="absolute inset-x-2.5 -bottom-px h-px bg-accent"
                      />
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* ------------------------------------------------------ actions */}
          <div className="flex items-center gap-2">
            <ul className="hidden items-center gap-0.5 md:flex">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    title={social.label}
                    {...(social.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                    className="grid h-9 w-9 place-items-center rounded-md text-muted transition-all duration-300 hover:bg-surface-2 hover:text-ink"
                  >
                    <Icon name={social.icon} className="h-[1.05rem] w-[1.05rem]" />
                  </a>
                </li>
              ))}
            </ul>

            <LinkButton
              href={resumeHref}
              download={resumeDownload}
              size="sm"
              variant="primary"
              className="hidden sm:inline-flex"
            >
              Resume
              {resumeDownload ? (
                <DownloadIcon className="h-3.5 w-3.5" />
              ) : (
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              )}
            </LinkButton>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface-2/60 text-ink transition-colors duration-300 hover:border-line-strong lg:hidden"
            >
              {open ? (
                <CloseIcon className="h-[1.15rem] w-[1.15rem]" />
              ) : (
                <MenuIcon className="h-[1.15rem] w-[1.15rem]" />
              )}
            </button>
          </div>
        </div>

        {/* ------------------------------------------------- mobile panel */}
        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              id="mobile-menu"
              key="mobile-menu"
              initial={reduceMotion ? undefined : { height: 0, opacity: 0 }}
              animate={reduceMotion ? undefined : { height: "auto", opacity: 1 }}
              exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden lg:hidden"
            >
              <ul className="mt-4 flex flex-col gap-1 border-t border-line pt-4">
                {navLinks.map((link, index) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-lg px-3 py-3 text-[0.9375rem] text-muted transition-colors duration-200 hover:bg-surface-2 hover:text-ink"
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-[0.6875rem] text-faint">
                          0{index + 1}
                        </span>
                        {link.label}
                      </span>
                      <ArrowUpRightIcon className="h-4 w-4 text-faint" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-col gap-3 border-t border-line pt-4 pb-2">
                <LinkButton
                  href={resumeHref}
                  download={resumeDownload}
                  size="md"
                  onClick={() => setOpen(false)}
                >
                  {resumeDownload ? "Download Resume" : "View Resume"}
                  {resumeDownload ? (
                    <DownloadIcon className="h-4 w-4" />
                  ) : (
                    <ArrowUpRightIcon className="h-4 w-4" />
                  )}
                </LinkButton>

                <ul className="flex items-center gap-2">
                  {socials.map((social) => (
                    <li key={social.label} className="flex-1">
                      <a
                        href={social.href}
                        {...(social.href.startsWith("http")
                          ? { target: "_blank", rel: "noreferrer noopener" }
                          : {})}
                        className="flex h-10 items-center justify-center gap-2 rounded-lg border border-line bg-surface-2/60 text-[0.8125rem] text-muted transition-colors duration-300 hover:border-line-strong hover:text-ink"
                      >
                        <Icon name={social.icon} className="h-4 w-4" />
                        {social.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </header>
  );
}
