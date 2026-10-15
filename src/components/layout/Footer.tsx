import { Icon } from "@/components/visuals/Icons";
import { navLinks, profile, socials } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-surface/30">
      <div className="shell py-14">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:gap-16">
          {/* identity */}
          <div>
            <a href="#top" className="group inline-flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface-2 font-display text-base font-bold text-ink transition-colors duration-300 group-hover:border-accent/45">
                OM
              </span>
              <span>
                <span className="block font-display text-[0.9375rem] font-semibold text-ink">
                  {profile.name}
                </span>
                <span className="mt-0.5 block font-mono text-[0.6875rem] text-faint">
                  {profile.tagline}
                </span>
              </span>
            </a>

            <p className="mt-6 max-w-sm text-[0.875rem] leading-relaxed text-muted">
              Building full-stack web applications and applied AI/ML systems.
              Currently a third-year CSE undergraduate, open to engineering
              opportunities.
            </p>

            <ul className="mt-7 flex items-center gap-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    title={social.label}
                    {...(social.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                    className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface-2/50 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:text-accent"
                  >
                    <Icon name={social.icon} className="h-[1.05rem] w-[1.05rem]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* nav + location */}
          <div className="grid grid-cols-2 gap-8">
            <nav aria-label="Footer">
              <p className="label-mono text-faint">Sections</p>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[0.875rem] text-muted transition-colors duration-300 hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="label-mono text-faint">Elsewhere</p>
              <ul className="mt-4 space-y-2.5">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      {...(social.href.startsWith("http")
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                      className="text-[0.875rem] text-muted transition-colors duration-300 hover:text-accent"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/resume"
                    className="text-[0.875rem] text-muted transition-colors duration-300 hover:text-accent"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-7 sm:flex-row sm:items-center">
          <p className="font-mono text-[0.6875rem] text-faint">
            © {year} {profile.name}. All rights reserved.
          </p>

          <p className="font-mono text-[0.6875rem] text-faint">
            OM
            <span className="text-line-strong"> / </span>
            CODE
            <span className="text-line-strong"> / </span>
            <span className="text-accent/80">AI</span>
            <span className="text-line-strong"> — </span>
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
