import { LinkButton } from "@/components/ui/Button";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ContactForm } from "@/components/sections/ContactForm";
import { ArrowUpRightIcon, Icon, MailIcon } from "@/components/visuals/Icons";
import { contact, profile } from "@/data/site";

export function Contact() {
  return (
    <Section id="contact" className="relative overflow-hidden">
      {/* section-local grid accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-60 [mask-image:radial-gradient(90%_70%_at_50%_50%,#000,transparent)]"
      />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        {/* ------------------------------------------------------ CTA + links */}
        <div>
          <Reveal>
            <p className="label-mono flex items-center gap-2.5 text-accent">
              <span aria-hidden="true" className="inline-block h-px w-6 bg-accent/60" />
              {contact.eyebrow}
            </p>

            <h2
              id="contact-heading"
              className="mt-5 text-3xl font-semibold leading-[1.1] text-ink sm:text-4xl lg:text-[2.875rem]"
            >
              Have an idea worth building?{" "}
              <span className="text-accent-gradient">Let&apos;s talk.</span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
              {contact.body}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="mt-9 space-y-3">
              {contact.channels.map((channel) => (
                <li key={channel.label}>
                  <SpotlightCard className="bg-surface/50">
                    <a
                      href={channel.href}
                      {...(channel.href.startsWith("http")
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                      className="flex items-center gap-4 p-5"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-surface-2 text-muted transition-all duration-500 group-hover:border-accent/30 group-hover:bg-accent/[0.08] group-hover:text-accent">
                        <Icon name={channel.icon} className="h-[1.15rem] w-[1.15rem]" />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="flex items-baseline gap-2">
                          <span className="font-display text-[0.9375rem] font-semibold text-ink">
                            {channel.label}
                          </span>
                          <span className="truncate font-mono text-[0.6875rem] text-faint">
                            {channel.note}
                          </span>
                        </span>
                        <span className="mt-1 block truncate font-mono text-[0.8125rem] text-muted transition-colors duration-300 group-hover:text-accent">
                          {channel.value}
                        </span>
                      </span>

                      <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                    </a>
                  </SpotlightCard>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <LinkButton href={`mailto:${profile.email}`} size="md" variant="primary">
                <MailIcon className="h-4 w-4" />
                Email me directly
              </LinkButton>
              <CopyEmailButton email={profile.email} />
            </div>
          </Reveal>
        </div>

        {/* ------------------------------------------------------------ form */}
        <Reveal delay={0.1}>
          <SpotlightCard className="hairline-top bg-surface/60">
            <div className="border-b border-line px-6 py-4 sm:px-8">
              <p className="label-mono text-faint">Send a message</p>
            </div>
            <div className="p-6 sm:p-8">
              <ContactForm />
            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </Section>
  );
}
