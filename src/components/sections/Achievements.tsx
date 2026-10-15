import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Icon, TrophyIcon } from "@/components/visuals/Icons";
import { achievements } from "@/data/site";

export function Achievements() {
  const { highlight, items } = achievements;

  return (
    <Section id="achievements">
      <Reveal>
        <SectionHeading
          id="achievements-heading"
          eyebrow="Achievements"
          title="Where I've put the work to the test."
          description="Full-stack engineering milestones, coding competitions, and hackathon participation."
        />
      </Reveal>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {/* ------------------------------------------- Production highlight card */}
        <Reveal className="lg:col-span-2">
          <SpotlightCard className="hairline-top h-full bg-surface/60">
            <div className="relative flex h-full flex-col justify-between gap-8 p-7 sm:p-9">
              {/* decorative laurel grid */}
              <div
                aria-hidden="true"
                className="absolute inset-y-0 right-0 w-1/2 bg-dots opacity-[0.5] [mask-image:linear-gradient(to_left,#000,transparent)]"
              />

              <div className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent/25 bg-accent/[0.09] text-accent">
                    <TrophyIcon className="h-5 w-5" />
                  </span>
                  <span className="label-mono rounded-full border border-accent/25 bg-accent/[0.07] px-3 py-1.5 text-accent">
                    {highlight.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold leading-tight text-ink sm:text-[2rem]">
                  {highlight.title}
                </h3>

                <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-muted">
                  {highlight.body}
                </p>
              </div>

              <div className="relative flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-5">
                {["End-to-End Architecture", "Database & APIs", "Production Deployment"].map(
                  (meta) => (
                    <span
                      key={meta}
                      className="flex items-center gap-2 font-mono text-[0.6875rem] text-faint"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 rounded-full bg-accent/50"
                      />
                      {meta}
                    </span>
                  ),
                )}
              </div>
            </div>
          </SpotlightCard>
        </Reveal>

        {/* ------------------------------------------------ supporting tiles */}
        <RevealGroup as="ul" className="grid gap-4">
          {items.map((achievement) => (
            <RevealItem key={achievement.title} as="li" className="h-full">
              <SpotlightCard className="h-full bg-surface/40">
                <div className="flex h-full gap-4 p-6">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-surface-2 text-muted transition-all duration-500 group-hover:border-accent/30 group-hover:text-accent">
                    <Icon name={achievement.icon} className="h-[1.05rem] w-[1.05rem]" />
                  </span>
                  <div>
                    <h3 className="font-display text-[0.9375rem] font-semibold text-ink">
                      {achievement.title}
                    </h3>
                    <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted">
                      {achievement.body}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
