import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { TargetIcon } from "@/components/visuals/Icons";
import { about, profile } from "@/data/site";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        {/* ------------------------------------------------------ narrative */}
        <div>
          <Reveal>
            <SectionHeading
              id="about-heading"
              eyebrow={about.eyebrow}
              title={about.title}
            />
          </Reveal>

          <div className="mt-9 space-y-5">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={index * 0.06}>
                <p className="text-[0.9375rem] leading-[1.75] text-muted sm:text-base">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          {/* looking-for callout */}
          <Reveal delay={0.1}>
            <SpotlightCard className="hairline-top mt-9 bg-surface/50">
              <div className="flex gap-4 p-6 sm:p-7">
                <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-accent/25 bg-accent/[0.08] text-accent">
                  <TargetIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">
                    {about.seeking.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                    {about.seeking.body}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>

        {/* ----------------------------------------------------- quick facts */}
        <Reveal delay={0.12} className="lg:pt-[7.25rem]">
          <SpotlightCard className="bg-surface/60">
            <div className="flex items-center gap-4 border-b border-line p-5">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-accent/60 shadow-[0_0_15px_rgba(255,176,32,0.25)] ring-2 ring-accent/15">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-base font-semibold text-ink">
                    {profile.name}
                  </h3>
                  <span className="label-mono text-[0.625rem] text-faint">At a glance</span>
                </div>
                <a
                  href={profile.leetcode}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-0.5 inline-flex items-center gap-1.5 font-mono text-[0.75rem] text-accent hover:underline"
                >
                  <span>LeetCode:</span>
                  <span className="font-semibold">{profile.leetcodeHandle}</span>
                </a>
              </div>
            </div>

            <dl className="divide-y divide-line">
              {about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-[7rem_minmax(0,1fr)] gap-4 px-6 py-4 transition-colors duration-300 hover:bg-surface-2/40 sm:grid-cols-[8rem_minmax(0,1fr)]"
                >
                  <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-faint">
                    {fact.label}
                  </dt>
                  <dd className="text-[0.875rem] leading-snug text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </SpotlightCard>
        </Reveal>
      </div>
    </Section>
  );
}
