import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import {
  CalendarIcon,
  GraduationCapIcon,
  MapPinIcon,
} from "@/components/visuals/Icons";
import { education } from "@/data/site";

export function Education() {
  return (
    <Section id="education">
      <Reveal>
        <SectionHeading
          id="education-heading"
          eyebrow="Education"
          title="Academic background."
        />
      </Reveal>

      <ol className="mt-12 space-y-6">
        {education.map((entry) => (
          <li key={entry.institution}>
            <Reveal>
              <div className="relative pl-8 sm:pl-10">
                {/* timeline rail */}
                <span
                  aria-hidden="true"
                  className="absolute left-[0.3125rem] top-3 bottom-3 w-px bg-gradient-to-b from-accent/50 via-line-strong to-transparent"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-2.5 grid h-2.5 w-2.5 place-items-center"
                >
                  <span className="absolute h-2.5 w-2.5 rounded-full bg-accent/25 animate-pulse-ring" />
                  <span className="relative h-2.5 w-2.5 rounded-full border border-accent/70 bg-canvas" />
                </span>

                <SpotlightCard className="bg-surface/50">
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <span className="hidden h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-surface-2 text-accent sm:grid">
                          <GraduationCapIcon className="h-5 w-5" />
                        </span>

                        <div>
                          <h3 className="text-lg font-semibold leading-snug text-ink sm:text-xl">
                            {entry.degree}
                          </h3>
                          <p className="mt-1.5 text-[0.9375rem] text-muted">
                            {entry.institution}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-start gap-2 sm:items-end">
                        <Badge tone="accent">{entry.grade}</Badge>
                        <span className="font-mono text-[0.6875rem] text-faint">
                          {entry.status}
                        </span>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-5">
                      <span className="flex items-center gap-2 font-mono text-[0.6875rem] text-faint">
                        <CalendarIcon className="h-3.5 w-3.5" />
                        {entry.period}
                      </span>
                      <span className="flex items-center gap-2 font-mono text-[0.6875rem] text-faint">
                        <MapPinIcon className="h-3.5 w-3.5" />
                        Gorakhpur, Uttar Pradesh
                      </span>
                    </div>

                    <p className="mt-5 text-[0.875rem] leading-relaxed text-muted">
                      {entry.detail}
                    </p>
                  </div>
                </SpotlightCard>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
