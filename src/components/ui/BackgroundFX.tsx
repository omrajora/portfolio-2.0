/**
 * Fixed, non-interactive background stack rendered once in the root layout:
 *
 *   1. deep vertical wash so the page never reads as flat #000
 *   2. two low-opacity amber radial glows (top-right, bottom-left)
 *   3. a fine engineering grid, radially masked so it fades toward the edges
 *   4. film grain to stop large dark areas from banding
 */
export function BackgroundFX() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* 1. base wash */}
      <div className="absolute inset-0 bg-[radial-gradient(140%_100%_at_50%_0%,#101318_0%,#08090b_45%,#07080a_100%)]" />

      {/* 2. accent glows — single hue, very low opacity */}
      <div className="absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-accent/[0.07] blur-[130px]" />
      <div className="absolute bottom-[-12rem] left-[-8%] h-[32rem] w-[32rem] rounded-full bg-accent/[0.04] blur-[140px]" />

      {/* 3. masked grid */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(120%_90%_at_50%_0%,#000_20%,transparent_75%)] opacity-70" />

      {/* 4. grain */}
      <div className="absolute inset-0 bg-noise opacity-[0.035] mix-blend-soft-light" />
    </div>
  );
}
