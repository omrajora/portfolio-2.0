"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

import { Pill } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { HeroVisual } from "@/components/visuals/HeroVisual";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  DownloadIcon,
  Icon,
  MapPinIcon,
} from "@/components/visuals/Icons";
import { profile, socials } from "@/data/site";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero({
  resumeHref,
  resumeDownload,
}: {
  resumeHref: string;
  resumeDownload: boolean;
}) {
  const reduceMotion = useReducedMotion();
  // Split the headline so only the final word carries the accent treatment.
  const headlineLead = profile.headline
    .replace(profile.headlineAccent, "")
    .trim();

  const motionProps = reduceMotion
    ? {}
    : { variants: container, initial: "hidden" as const, animate: "show" as const };
  const itemProps = reduceMotion ? {} : { variants: item };

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-32 pb-16 sm:pt-36 lg:pt-44 lg:pb-24"
    >
      <div className="shell">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
          {/* ------------------------------------------------------- copy */}
          <motion.div {...motionProps}>
            {/* availability */}
            <motion.div {...itemProps}>
              <Pill dot>
                <span className="text-ink">{profile.availability}</span>
              </Pill>
            </motion.div>

            {/* name */}
            <motion.p
              {...itemProps}
              className="label-mono mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-faint"
            >
              <span className="text-accent">{profile.name}</span>
              <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
              <span className="inline-flex items-center gap-1.5 normal-case tracking-normal">
                <MapPinIcon className="h-3.5 w-3.5" />
                Ghaziabad, India
              </span>
            </motion.p>

            {/* headline */}
            <motion.h1
              {...itemProps}
              id="hero-heading"
              className="mt-5 text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[3.25rem] lg:text-[3.875rem]"
            >
              {headlineLead}{" "}
              <span className="text-accent-gradient">
                {profile.headlineAccent}
              </span>
            </motion.h1>

            {/* supporting text */}
            <motion.p
              {...itemProps}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-[1.0625rem]"
            >
              {profile.intro}
            </motion.p>

            {/* role stack */}
            <motion.ul
              {...itemProps}
              aria-label="Focus areas"
              className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2.5"
            >
              {profile.roles.map((role, index) => (
                <li key={role} className="flex items-center gap-3">
                  {index > 0 ? (
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full bg-accent/50"
                    />
                  ) : null}
                  <span className="font-mono text-[0.8125rem] text-muted">
                    {role}
                  </span>
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              {...itemProps}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <LinkButton href="#projects" size="lg" variant="primary">
                View Projects
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
              </LinkButton>

              <LinkButton
                href={resumeHref}
                download={resumeDownload}
                size="lg"
                variant="secondary"
              >
                {resumeDownload ? "Download Resume" : "View Resume"}
                {resumeDownload ? (
                  <DownloadIcon className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-y-0.5" />
                ) : (
                  <ArrowUpRightIcon className="h-4 w-4" />
                )}
              </LinkButton>
            </motion.div>

            {/* socials */}
            <motion.div
              {...itemProps}
              className="mt-10 flex items-center gap-5 border-t border-line pt-7"
            >
              <span className="label-mono hidden text-faint sm:block">
                Find me
              </span>
              <ul className="flex flex-wrap items-center gap-2">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      {...(social.href.startsWith("http")
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                      className="group inline-flex items-center gap-2 rounded-lg border border-line bg-surface/50 px-3.5 py-2 text-[0.8125rem] text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:text-ink"
                    >
                      <Icon
                        name={social.icon}
                        className="h-4 w-4 transition-colors duration-300 group-hover:text-accent"
                      />
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* ----------------------------------------------------- visual */}
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.94 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-first lg:order-last"
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* scroll cue */}
        <motion.a
          href="#about"
          initial={reduceMotion ? undefined : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-14 hidden items-center gap-2.5 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-faint transition-colors duration-300 hover:text-muted lg:inline-flex"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full border border-line">
            <ArrowDownIcon className="h-3.5 w-3.5" />
          </span>
          Scroll
        </motion.a>
      </div>
    </section>
  );
}
