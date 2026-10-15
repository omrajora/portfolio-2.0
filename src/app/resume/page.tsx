import type { Metadata } from "next";
import Link from "next/link";

import { LinkButton } from "@/components/ui/Button";
import {
  ArrowRightIcon,
  GithubIcon,
  Icon,
  LinkedinIcon,
  MailIcon,
} from "@/components/visuals/Icons";
import {
  about,
  achievements,
  education,
  profile,
  projects,
  skillCategories,
} from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${profile.name} — third-year Computer Science undergraduate, full-stack developer and AI/ML enthusiast.`,
};

/**
 * Print-ready resume, generated from the same content source as the homepage.
 *
 * This route exists so the "Resume" call to action is never a dead link: if no
 * PDF has been added to /public, the CTA lands here and the visitor can use
 * their browser's Print → Save as PDF.
 */
export default function ResumePage() {
  const languages =
    skillCategories.find((category) => category.title === "Languages")?.items ?? [];

  return (
    <main className="shell print-plain py-14 sm:py-20">
      {/* screen-only controls */}
      <div className="no-print mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted transition-colors hover:text-accent"
        >
          <ArrowRightIcon className="h-3.5 w-3.5 rotate-180" />
          Back to portfolio
        </Link>

        <p className="font-mono text-[0.6875rem] text-faint">
          Use your browser&apos;s Print → Save as PDF
        </p>
      </div>

      <article className="mx-auto max-w-3xl">
        {/* ------------------------------------------------------- header */}
        <header className="border-b border-line pb-7">
          <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-[0.9375rem] text-accent">
            Full-Stack Developer · AI/ML Enthusiast · Problem Solver
          </p>

          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[0.75rem] text-muted">
            <li>{profile.location}</li>
            <li>
              <a href={`tel:${profile.phone}`} className="hover:text-accent">
                {profile.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className="hover:text-accent">
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.leetcode}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-accent"
              >
                leetcode.com/u/{profile.leetcodeHandle}
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-accent"
              >
                github.com/{profile.githubHandle}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-accent"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </header>

        {/* ------------------------------------------------------- summary */}
        <ResumeSection title="Profile">
          <p className="text-[0.875rem] leading-relaxed text-muted">
            Third-year Computer Science undergraduate with a strong foundation in Data Structures &amp; Algorithms and hands-on experience across the MERN full-stack (React.js, Node.js, Express.js, MongoDB). Currently building skills in Artificial Intelligence &amp; Machine Learning alongside coursework, with practical exposure to Python, SQL, and database design. Has independently designed and deployed multiple end-to-end web applications — combining clean UI development with backend and database integration.
          </p>
        </ResumeSection>

        {/* ----------------------------------------------------- education */}
        <ResumeSection title="Education">
          {education.map((entry) => (
            <div key={entry.institution}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-[0.9375rem] font-semibold text-ink">
                  {entry.institution}
                </h3>
                <span className="font-mono text-[0.75rem] text-faint">
                  {entry.period}
                </span>
              </div>
              <p className="mt-1 text-[0.875rem] text-muted">
                {entry.degree} — {entry.grade}
              </p>
            </div>
          ))}
        </ResumeSection>

        {/* -------------------------------------------------------- skills */}
        <ResumeSection title="Technical Skills">
          <dl className="space-y-2.5">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="grid grid-cols-[7.5rem_minmax(0,1fr)] gap-3"
              >
                <dt className="font-mono text-[0.75rem] text-faint">
                  {category.title}
                </dt>
                <dd className="text-[0.875rem] text-muted">
                  {category.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </ResumeSection>

        {/* ------------------------------------------------------ projects */}
        <ResumeSection title="Projects">
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-[0.9375rem] font-semibold text-ink">
                    {project.name}
                    <span className="ml-2 font-normal text-muted">
                      — {project.kicker}
                    </span>
                  </h3>
                </div>

                <p className="mt-1 font-mono text-[0.75rem] text-faint">
                  {project.stack.join(" · ")}
                </p>

                <ul className="mt-2 space-y-1">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-[0.875rem] leading-relaxed text-muted"
                    >
                      <span className="text-accent">·</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {project.github || project.demo ? (
                  <p className="mt-2 flex flex-wrap gap-x-4 font-mono text-[0.75rem] text-muted">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="hover:text-accent"
                      >
                        Code: {project.github.replace("https://", "")}
                      </a>
                    ) : null}
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="hover:text-accent"
                      >
                        Demo: {project.demo.replace("https://", "")}
                      </a>
                    ) : null}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </ResumeSection>

        {/* -------------------------------------------------- achievements */}
        <ResumeSection title="Key Achievements">
          <ul className="space-y-1.5">
            <li className="flex gap-2 text-[0.875rem] leading-relaxed text-muted">
              <span className="text-accent">·</span>
              <span>
                <span className="font-semibold text-ink">
                  {achievements.highlight.title}
                </span>{" "}
                — {achievements.highlight.body}
              </span>
            </li>
            {achievements.items.map((item) => (
              <li
                key={item.title}
                className="flex gap-2 text-[0.875rem] leading-relaxed text-muted"
              >
                <span className="text-accent">·</span>
                <span>
                  <span className="font-semibold text-ink">{item.title}:</span>{" "}
                  {item.body}
                </span>
              </li>
            ))}
          </ul>
        </ResumeSection>

        {/* --------------------------------------------------- core / langs */}
        <ResumeSection title="Languages">
          <p className="text-[0.875rem] text-muted">{languages.join(" · ")}</p>
        </ResumeSection>
      </article>

      {/* screen-only footer actions */}
      <div className="no-print mx-auto mt-12 flex max-w-3xl flex-wrap gap-3 border-t border-line pt-8">
        <LinkButton href={`mailto:${profile.email}`} size="md">
          <MailIcon className="h-4 w-4" />
          Email {profile.name}
        </LinkButton>
        <LinkButton href={profile.leetcode} size="md" variant="secondary">
          <Icon name="leetcode" className="h-4 w-4" />
          LeetCode
        </LinkButton>
        <LinkButton href={profile.github} size="md" variant="secondary">
          <GithubIcon className="h-4 w-4" />
          GitHub
        </LinkButton>
        <LinkButton href={profile.linkedin} size="md" variant="secondary">
          <LinkedinIcon className="h-4 w-4" />
          LinkedIn
        </LinkButton>
      </div>
    </main>
  );
}

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8 break-inside-avoid">
      <h2 className="label-mono border-b border-line pb-2 text-accent">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
