import { techStrip } from "@/data/site";

/**
 * Slow, edge-masked marquee of the stack. Purely decorative (`aria-hidden`)
 * because the same technologies are listed semantically in the Skills section.
 * Pauses on hover and is frozen entirely under `prefers-reduced-motion`.
 */
export function TechStrip() {
  // Duplicated once so the -50% translate loops seamlessly.
  const loop = [...techStrip, ...techStrip];

  return (
    <div className="relative border-y border-line/70 bg-surface/30 py-4">
      <div className="shell">
        <div className="flex items-center gap-6">
          <span className="label-mono hidden shrink-0 text-faint sm:block">
            Stack
          </span>

          <div
            aria-hidden="true"
            className="group relative flex-1 overflow-hidden mask-edges-x"
          >
            <ul className="flex w-max items-center gap-8 animate-marquee group-hover:[animation-play-state:paused]">
              {loop.map((item, index) => (
                <li
                  key={`${item}-${index}`}
                  className="flex shrink-0 items-center gap-8 font-mono text-xs tracking-tight text-faint transition-colors duration-300 hover:text-muted"
                >
                  {item}
                  <span className="h-1 w-1 rounded-full bg-line-strong" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
