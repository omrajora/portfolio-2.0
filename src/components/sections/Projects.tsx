import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import {
  ArrowUpRightIcon,
  CheckIcon,
  GithubIcon,
} from "@/components/visuals/Icons";
import {
  ProjectVisual,
  type ProjectVisualName,
} from "@/components/visuals/ProjectVisual";
import { featuredProjects, secondaryProjects, type Project } from "@/data/site";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <Section id="projects">
      <Reveal>
        <SectionHeading
          id="projects-heading"
          eyebrow="Projects"
          title="Things I've designed, built, and shipped."
          description="Full-stack web applications, written up as case studies: the problem, what I built, and the stack it runs on. Source code and live deployments are linked."
        />
      </Reveal>

      {/* ------------------------------------------------------- featured */}
      <div className="mt-14 space-y-6 lg:space-y-8">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.05}>
            <FeaturedProjectCard project={project} flipped={index % 2 === 1} />
          </Reveal>
        ))}
      </div>

      {/* ------------------------------------------------------ secondary */}
      {secondaryProjects.length > 0 ? (
        <>
          <Reveal>
            <div className="mt-16 flex items-center gap-4">
              <p className="label-mono shrink-0 text-faint">Also built</p>
              <span
                aria-hidden="true"
                className="h-px flex-1 bg-gradient-to-r from-line-strong to-transparent"
              />
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {secondaryProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.06}>
                <SecondaryProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </>
      ) : null}
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* Featured — large, alternating, full case-study treatment                   */
/* -------------------------------------------------------------------------- */

function FeaturedProjectCard({
  project,
  flipped,
}: {
  project: Project;
  flipped: boolean;
}) {
  const headingId = `project-${project.id}-heading`;

  return (
    <SpotlightCard
      as="article"
      className="hairline-top bg-surface/60 hover:-translate-y-1"
    >
      <div
        className={cn(
          "grid lg:grid-cols-2",
          flipped && "lg:[&>*:first-child]:order-last",
        )}
      >
        {/* ---------------------------------------------------- preview */}
        <div
          className={cn(
            "relative min-h-[15rem] overflow-hidden border-line bg-canvas/40 lg:min-h-[27rem]",
            flipped ? "border-b lg:border-b-0 lg:border-l" : "border-b lg:border-b-0 lg:border-r",
          )}
        >
          <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]">
            <ProjectVisual name={project.visual as ProjectVisualName} />
          </div>

          {/* index + featured marker */}
          <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-5">
            <span className="font-mono text-4xl font-semibold leading-none text-ink/10 sm:text-5xl">
              {project.index}
            </span>
            <span className="label-mono rounded-full border border-accent/25 bg-accent/[0.08] px-2.5 py-1.5 text-accent">
              Featured
            </span>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/70 via-transparent to-transparent"
          />
        </div>

        {/* ------------------------------------------------------- copy */}
        <div className="flex flex-col p-6 sm:p-8 lg:p-10">
          <p className="label-mono text-faint">{project.kicker}</p>

          <h3
            id={headingId}
            className="mt-3 text-2xl font-semibold leading-tight text-ink sm:text-[1.75rem]"
          >
            {project.name}
          </h3>

          {/* problem / solution */}
          <div className="mt-6 space-y-5">
            <CaseBlock label="Problem" body={project.problem} />
            <CaseBlock label="Solution" body={project.solution} accent />
          </div>

          {/* features */}
          <div className="mt-6">
            <p className="label-mono text-faint">Key features</p>
            <ul className="mt-3 grid gap-x-5 gap-y-2 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-[0.8125rem] leading-snug text-muted"
                >
                  <CheckIcon className="mt-px h-3.5 w-3.5 shrink-0 text-accent/70" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* stack */}
          <div className="mt-6">
            <p className="label-mono text-faint">Stack</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <li key={tech}>
                  <Badge>{tech}</Badge>
                </li>
              ))}
            </ul>
          </div>

          {/* actions */}
          <div className="mt-8 flex flex-wrap gap-3 pt-2">
            {project.demo ? (
              <LinkButton href={project.demo} size="md" variant="primary">
                Live Demo
                <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </LinkButton>
            ) : null}

            {project.github ? (
              <LinkButton href={project.github} size="md" variant="secondary">
                <GithubIcon className="h-4 w-4" />
                Source
              </LinkButton>
            ) : (
              <RepoUnavailableNote />
            )}
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}

function CaseBlock({
  label,
  body,
  accent = false,
}: {
  label: string;
  body: string;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "border-l-2 pl-4",
        accent ? "border-accent/45" : "border-line-strong",
      )}
    >
      <p className="label-mono text-faint">{label}</p>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{body}</p>
    </div>
  );
}

/** Honest placeholder rather than a dead link when no repo URL was provided. */
function RepoUnavailableNote() {
  return (
    <p className="inline-flex h-11 items-center rounded-lg border border-dashed border-line px-4 font-mono text-[0.6875rem] text-faint">
      Repository link available on request
    </p>
  );
}

/* -------------------------------------------------------------------------- */
/* Secondary — compact, condensed treatment                                   */
/* -------------------------------------------------------------------------- */

function SecondaryProjectCard({ project }: { project: Project }) {
  const headingId = `project-${project.id}-heading`;

  return (
    <SpotlightCard
      as="article"
      className="flex h-full flex-col bg-surface/40 hover:-translate-y-1"
    >
      {/* compact preview */}
      <div className="relative h-40 overflow-hidden border-b border-line bg-canvas/40">
        <div className="absolute inset-0 opacity-80 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:opacity-100">
          <ProjectVisual name={project.visual as ProjectVisualName} />
        </div>
        <span className="pointer-events-none absolute left-5 top-4 font-mono text-2xl font-semibold leading-none text-ink/10">
          {project.index}
        </span>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/80 via-canvas/10 to-transparent"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="label-mono text-faint">{project.kicker}</p>

        <h3
          id={headingId}
          className="mt-2.5 font-display text-lg font-semibold text-ink"
        >
          {project.name}
        </h3>

        <p className="mt-3 text-[0.875rem] leading-relaxed text-muted">
          {project.solution}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2 pt-1">
          {project.demo ? (
            <LinkButton href={project.demo} size="sm" variant="secondary">
              Live Demo
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </LinkButton>
          ) : null}

          {project.github ? (
            <LinkButton href={project.github} size="sm" variant="ghost">
              <GithubIcon className="h-3.5 w-3.5" />
              Source
            </LinkButton>
          ) : null}
        </div>
      </div>
    </SpotlightCard>
  );
}
