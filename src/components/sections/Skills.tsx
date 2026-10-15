import { Badge } from "@/components/ui/Badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Icon } from "@/components/visuals/Icons";
import { skillCategories } from "@/data/site";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <Section id="skills">
      <Reveal>
        <SectionHeading
          id="skills-heading"
          eyebrow="Skills"
          title="The stack I actually build with."
          description="Grouped by where each tool sits in the system. No percentage bars — proficiency claims are cheap, so judge the projects below instead."
        />
      </Reveal>

      <RevealGroup
        as="ul"
        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6"
      >
        {skillCategories.map((category) => (
          <RevealItem
            key={category.title}
            as="li"
            className={cn(
              "lg:col-span-2",
              category.span === "wide" && "lg:col-span-3",
            )}
          >
            <SpotlightCard className="h-full bg-surface/50">
              <div className="flex h-full flex-col p-6">
                {/* header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-surface-2 text-muted transition-all duration-500 group-hover:border-accent/30 group-hover:bg-accent/[0.08] group-hover:text-accent">
                      <Icon name={category.icon} className="h-[1.15rem] w-[1.15rem]" />
                    </span>
                    <h3 className="font-display text-[0.9375rem] font-semibold text-ink">
                      {category.title}
                    </h3>
                  </div>

                  <span className="font-mono text-[0.6875rem] text-faint/70">
                    {String(category.items.length).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-3 text-[0.8125rem] leading-relaxed text-faint">
                  {category.blurb}
                </p>

                {/* badges */}
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {category.items.map((item) => (
                    <li key={item}>
                      <Badge>{item}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
