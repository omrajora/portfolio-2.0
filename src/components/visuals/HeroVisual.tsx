"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Hero visual: a compact "neural monogram".
 *
 * A hand-built SVG rather than a stock illustration — an OM core wrapped in
 * three orbital rings, with a small directed graph of nodes and animated
 * signal pulses travelling along the edges. Everything is vector, inherits the
 * single accent colour, and freezes under `prefers-reduced-motion`.
 */

/* Node graph — coordinates are in a 400x400 viewBox. */
const nodes = [
  { id: "n1", x: 200, y: 62, r: 4.5, label: "UI" },
  { id: "n2", x: 314, y: 128, r: 3.6 },
  { id: "n3", x: 330, y: 244, r: 4.2, label: "API" },
  { id: "n4", x: 200, y: 336, r: 3.6 },
  { id: "n5", x: 72, y: 250, r: 4.5, label: "DB" },
  { id: "n6", x: 68, y: 126, r: 3.6 },
  { id: "n7", x: 262, y: 196, r: 2.8 },
  { id: "n8", x: 140, y: 190, r: 2.8 },
];

const edges: Array<[string, string]> = [
  ["n1", "n2"],
  ["n2", "n3"],
  ["n3", "n4"],
  ["n4", "n5"],
  ["n5", "n6"],
  ["n6", "n1"],
  ["n1", "n7"],
  ["n3", "n7"],
  ["n5", "n8"],
  ["n1", "n8"],
  ["n7", "n8"],
  ["n4", "n7"],
];

const nodeById = Object.fromEntries(nodes.map((node) => [node.id, node]));

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[26rem] lg:max-w-[30rem]">
      {/* Ambient glow behind the graphic */}
      <div
        aria-hidden="true"
        className="absolute inset-[12%] rounded-full bg-accent/[0.09] blur-[80px]"
      />

      <svg
        viewBox="0 0 400 400"
        className="relative h-full w-full"
        role="img"
        aria-label="Abstract diagram: an OM monogram at the centre of a connected network of interface, API and database nodes."
      >
        <defs>
          <radialGradient id="core-fill" cx="50%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#1d2126" />
            <stop offset="100%" stopColor="#0d0f12" />
          </radialGradient>

          <linearGradient id="edge-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffb020" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#ffb020" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ffb020" stopOpacity="0.05" />
          </linearGradient>

          <linearGradient id="ring-stroke" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffb020" stopOpacity="0.42" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#ffb020" stopOpacity="0.14" />
          </linearGradient>

          <filter id="node-glow" x="-140%" y="-140%" width="380%" height="380%">
            <feGaussianBlur stdDeviation="3.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ------------------------------------------------ orbital rings */}
        <g fill="none">
          <circle
            cx="200"
            cy="200"
            r="168"
            stroke="#23272c"
            strokeWidth="1"
            strokeDasharray="2 8"
          />

          <motion.circle
            cx="200"
            cy="200"
            r="142"
            stroke="url(#ring-stroke)"
            strokeWidth="1.2"
            style={{ originX: "200px", originY: "200px" }}
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
          />

          <motion.ellipse
            cx="200"
            cy="200"
            rx="150"
            ry="66"
            stroke="#ffb020"
            strokeOpacity="0.16"
            strokeWidth="1"
            style={{ originX: "200px", originY: "200px" }}
            animate={reduceMotion ? undefined : { rotate: -360 }}
            transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
          />

          <motion.ellipse
            cx="200"
            cy="200"
            rx="66"
            ry="150"
            stroke="#ffb020"
            strokeOpacity="0.1"
            strokeWidth="1"
            style={{ originX: "200px", originY: "200px" }}
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
        </g>

        {/* ------------------------------------------------------- edges */}
        <g>
          {edges.map(([from, to], index) => {
            const a = nodeById[from];
            const b = nodeById[to];

            return (
              <g key={`${from}-${to}`}>
                <line
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke="url(#edge-stroke)"
                  strokeWidth="1"
                />

                {/* Signal pulse travelling from a -> b */}
                {reduceMotion ? null : (
                  <motion.circle
                    r="2.1"
                    fill="#ffc860"
                    initial={{ cx: a.x, cy: a.y, opacity: 0 }}
                    animate={{
                      cx: [a.x, b.x],
                      cy: [a.y, b.y],
                      opacity: [0, 0.95, 0.95, 0],
                    }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      repeatDelay: 1.6,
                      delay: index * 0.42,
                      ease: "easeInOut",
                      times: [0, 0.15, 0.85, 1],
                    }}
                  />
                )}
              </g>
            );
          })}
        </g>

        {/* ------------------------------------------------------- nodes */}
        <g>
          {nodes.map((node, index) => (
            <motion.g
              key={node.id}
              initial={reduceMotion ? undefined : { opacity: 0, scale: 0.4 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.5 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ originX: `${node.x}px`, originY: `${node.y}px` }}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={node.r + 5}
                fill="#0e1013"
                stroke="#23272c"
                strokeWidth="1"
              />
              <circle
                cx={node.x}
                cy={node.y}
                r={node.r}
                fill="#ffb020"
                fillOpacity={node.label ? 0.95 : 0.55}
                filter={node.label ? "url(#node-glow)" : undefined}
              />
              {node.label ? (
                <text
                  x={node.x}
                  y={node.y - 15}
                  textAnchor="middle"
                  className="fill-[#6d747d] font-mono"
                  style={{ fontSize: "9px", letterSpacing: "0.12em" }}
                >
                  {node.label}
                </text>
              ) : null}
            </motion.g>
          ))}
        </g>

        {/* -------------------------------------------------- centre core ring */}
        <g>
          <circle
            cx="200"
            cy="200"
            r="60"
            fill="url(#core-fill)"
            stroke="#ffb020"
            strokeOpacity="0.25"
            strokeWidth="1.2"
          />
          <motion.circle
            cx="200"
            cy="200"
            r="60"
            fill="none"
            stroke="#ffb020"
            strokeOpacity="0.75"
            strokeWidth="1.8"
            strokeDasharray="24 220"
            style={{ originX: "200px", originY: "200px" }}
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </g>
      </svg>

      {/* ------------------------------------------- circular profile photo */}
      <motion.div
        initial={reduceMotion ? undefined : { scale: 0.8, opacity: 0 }}
        animate={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="group/photo absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 select-none"
      >
        <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-accent/70 bg-surface shadow-[0_0_35px_rgba(255,176,32,0.3)] ring-4 ring-accent/15 transition-transform duration-500 hover:scale-105 sm:h-32 sm:w-32 lg:h-36 lg:w-36">
          <img
            src="/om-photo.jpg"
            alt="Om Kumar"
            className="h-full w-full object-cover transition-all duration-500 group-hover/photo:scale-110"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-canvas/40 via-transparent to-transparent"
          />
        </div>
      </motion.div>

      {/* ------------------------------------------- floating code chips */}
      <FloatingChip
        className="left-[-4%] top-[16%]"
        delay={0}
        reduceMotion={Boolean(reduceMotion)}
      >
        <span className="text-accent">const</span> stack ={" "}
        <span className="text-ink">MERN</span>
      </FloatingChip>

      <FloatingChip
        className="right-[-6%] bottom-[22%]"
        delay={1.4}
        reduceMotion={Boolean(reduceMotion)}
      >
        model.<span className="text-accent">predict</span>()
      </FloatingChip>

      <FloatingChip
        className="left-[6%] bottom-[6%]"
        delay={2.6}
        reduceMotion={Boolean(reduceMotion)}
      >
        O(<span className="text-accent">n log n</span>)
      </FloatingChip>
    </div>
  );
}

function FloatingChip({
  children,
  className,
  delay,
  reduceMotion,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      aria-hidden="true"
      initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.9 + delay * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute hidden sm:block ${className ?? ""}`}
    >
      <div
        className="glass rounded-lg border border-line px-3 py-2 font-mono text-[0.6875rem] text-muted shadow-[0_18px_40px_-24px_rgba(0,0,0,0.9)]"
        style={
          reduceMotion
            ? undefined
            : { animation: `float-slow 9s cubic-bezier(0.65,0,0.35,1) ${delay}s infinite` }
        }
      >
        {children}
      </div>
    </motion.div>
  );
}
