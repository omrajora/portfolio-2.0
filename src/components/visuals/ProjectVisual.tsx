/**
 * Abstract architecture previews for each project card.
 *
 * These are deliberately schematic rather than mock dashboards: every label
 * comes from a real documented feature, and no figures, counts, or metrics
 * appear anywhere, so nothing implies data that doesn't exist.
 *
 * Server components — motion comes from CSS `group-hover` on the parent card.
 */

const surface = "#0d0f12";
const line = "#23272c";
const accent = "#ffb020";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 400 240"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pv-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.24" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
        <pattern
          id="pv-grid"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M20 0H0v20"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.035"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="400" height="240" fill={surface} />
      <rect width="400" height="240" fill="url(#pv-grid)" />
      {children}
    </svg>
  );
}

function Tag({
  x,
  y,
  children,
  tone = "muted",
}: {
  x: number;
  y: number;
  children: string;
  tone?: "muted" | "accent";
}) {
  return (
    <text
      x={x}
      y={y}
      className="font-mono"
      fill={tone === "accent" ? accent : "#6d747d"}
      style={{ fontSize: "8px", letterSpacing: "0.1em" }}
    >
      {children}
    </text>
  );
}

/* ------------------------------------------- FinSight: forecast + anomaly */

function FinanceVisual() {
  // Observed history, then a dashed projection — shape only, no values.
  const history = "M28 168 L64 152 L100 158 L136 130 L172 138 L208 108";
  const forecast = "M208 108 L244 96 L280 78 L316 84 L352 62";

  return (
    <Frame>
      <path
        d={`${history} L208 200 L28 200 Z`}
        fill="url(#pv-area)"
        className="transition-opacity duration-700 group-hover:opacity-100"
        opacity="0.75"
      />
      <path
        d={history}
        fill="none"
        stroke={accent}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d={forecast}
        fill="none"
        stroke={accent}
        strokeOpacity="0.55"
        strokeWidth="1.6"
        strokeDasharray="5 5"
        strokeLinecap="round"
      />

      {/* anomaly marker */}
      <circle cx="136" cy="130" r="9" fill="none" stroke="#ff6b4a" strokeOpacity="0.5" />
      <circle cx="136" cy="130" r="3.4" fill="#ff6b4a" fillOpacity="0.9" />
      <Tag x={150} y={124}>
        anomaly
      </Tag>

      <circle cx="208" cy="108" r="3.4" fill={accent} />
      <line
        x1="208"
        y1="40"
        x2="208"
        y2="200"
        stroke={line}
        strokeDasharray="3 4"
      />
      <Tag x={216} y={52} tone="accent">
        forecast
      </Tag>
      <Tag x={28} y={52}>
        tracked spend
      </Tag>

      <line x1="28" y1="200" x2="372" y2="200" stroke={line} />
    </Frame>
  );
}

/* ------------------------- Internship recommender: bipartite match graph */

function MatchVisual() {
  const targets = [64, 100, 136, 172];
  const scores = [148, 116, 92, 64]; // bar widths, ranking order only

  return (
    <Frame>
      {/* profile node */}
      <circle cx="72" cy="120" r="26" fill="#141719" stroke={line} />
      <circle cx="72" cy="120" r="26" fill="none" stroke={accent} strokeOpacity="0.35" />
      <text
        x="72"
        y="118"
        textAnchor="middle"
        className="font-mono"
        fill="#eef0f2"
        style={{ fontSize: "8px", letterSpacing: "0.08em" }}
      >
        SKILLS
      </text>
      <text
        x="72"
        y="130"
        textAnchor="middle"
        className="font-mono"
        fill="#6d747d"
        style={{ fontSize: "7px", letterSpacing: "0.08em" }}
      >
        PROFILE
      </text>

      {/* edges into ranked results */}
      {targets.map((y, index) => (
        <path
          key={y}
          d={`M100 120 C 150 120, 170 ${y + 6}, 210 ${y + 6}`}
          fill="none"
          stroke={accent}
          strokeOpacity={0.45 - index * 0.08}
          strokeWidth="1.4"
        />
      ))}

      {/* ranked bars */}
      {targets.map((y, index) => (
        <g key={`bar-${y}`}>
          <rect
            x="210"
            y={y}
            width={scores[index]}
            height="13"
            rx="3"
            fill={accent}
            fillOpacity={0.3 - index * 0.05}
            stroke={accent}
            strokeOpacity={0.35 - index * 0.06}
          />
          <rect x="210" y={y} width="3" height="13" rx="1.5" fill={accent} fillOpacity={0.8 - index * 0.15} />
        </g>
      ))}

      <Tag x={210} y={46} tone="accent">
        ranked matches
      </Tag>
      <line x1="196" y1="40" x2="196" y2="204" stroke={line} strokeDasharray="3 4" />
    </Frame>
  );
}

/* ------------------------------- LocalKart: role-gated dual dashboards */

function CommerceVisual() {
  return (
    <Frame>
      {/* RBAC gate */}
      <rect x="176" y="88" width="48" height="64" rx="8" fill="#141719" stroke={accent} strokeOpacity="0.4" />
      <path
        d="M192 112v-6a8 8 0 0 1 16 0v6"
        fill="none"
        stroke={accent}
        strokeOpacity="0.8"
        strokeWidth="1.6"
      />
      <rect x="188" y="112" width="24" height="20" rx="3" fill={accent} fillOpacity="0.85" />
      <Tag x={166} y={168} tone="accent">
        role-based access
      </Tag>

      {/* admin lane */}
      <g>
        <rect x="24" y="42" width="120" height="66" rx="6" fill="#141719" stroke={line} />
        <rect x="34" y="52" width="42" height="6" rx="3" fill={accent} fillOpacity="0.55" />
        <rect x="34" y="66" width="100" height="4" rx="2" fill="#ffffff" fillOpacity="0.08" />
        <rect x="34" y="76" width="78" height="4" rx="2" fill="#ffffff" fillOpacity="0.08" />
        <rect x="34" y="86" width="88" height="4" rx="2" fill="#ffffff" fillOpacity="0.08" />
        <Tag x={24} y={34}>
          admin dashboard
        </Tag>
        <path d="M144 75h32" stroke={line} strokeDasharray="3 3" />
      </g>

      {/* customer lane */}
      <g>
        <rect x="24" y="132" width="120" height="66" rx="6" fill="#141719" stroke={line} />
        <rect x="34" y="142" width="30" height="24" rx="4" fill="#ffffff" fillOpacity="0.06" />
        <rect x="70" y="142" width="30" height="24" rx="4" fill="#ffffff" fillOpacity="0.06" />
        <rect x="106" y="142" width="30" height="24" rx="4" fill={accent} fillOpacity="0.18" />
        <rect x="34" y="176" width="64" height="4" rx="2" fill="#ffffff" fillOpacity="0.08" />
        <rect x="34" y="186" width="46" height="4" rx="2" fill="#ffffff" fillOpacity="0.08" />
        <Tag x={24} y={212}>
          customer dashboard
        </Tag>
        <path d="M144 165h32" stroke={line} strokeDasharray="3 3" />
      </g>

      {/* API + data */}
      <rect x="256" y="72" width="116" height="42" rx="6" fill="#141719" stroke={line} />
      <Tag x={266} y={90}>
        REST API
      </Tag>
      <path d="M266 100h48" stroke={accent} strokeOpacity="0.4" strokeWidth="1.4" />

      <rect x="256" y="128" width="116" height="46" rx="6" fill="#141719" stroke={line} />
      <ellipse cx="284" cy="146" rx="14" ry="5" fill="none" stroke={accent} strokeOpacity="0.5" />
      <path d="M270 146v12c0 2.8 6.3 5 14 5s14-2.2 14-5v-12" fill="none" stroke={accent} strokeOpacity="0.5" />
      <Tag x={308} y={155}>
        MongoDB
      </Tag>

      <path d="M224 110h32" stroke={line} strokeDasharray="3 3" />
      <path d="M224 132h32" stroke={line} strokeDasharray="3 3" />
    </Frame>
  );
}

/* -------------------------------- Portfolio v1: responsive breakpoints */

function PortfolioVisual() {
  return (
    <Frame>
      {/* desktop */}
      <rect x="36" y="56" width="176" height="112" rx="7" fill="#141719" stroke={line} />
      <rect x="36" y="56" width="176" height="18" rx="7" fill="#ffffff" fillOpacity="0.03" />
      <circle cx="50" cy="65" r="2.6" fill={accent} fillOpacity="0.7" />
      <circle cx="59" cy="65" r="2.6" fill="#ffffff" fillOpacity="0.14" />
      <rect x="48" y="88" width="66" height="6" rx="3" fill={accent} fillOpacity="0.5" />
      <rect x="48" y="102" width="152" height="4" rx="2" fill="#ffffff" fillOpacity="0.08" />
      <rect x="48" y="112" width="120" height="4" rx="2" fill="#ffffff" fillOpacity="0.08" />
      <rect x="48" y="128" width="44" height="14" rx="4" fill={accent} fillOpacity="0.2" />
      <Tag x={36} y={48}>
        desktop
      </Tag>

      {/* tablet */}
      <rect x="228" y="72" width="76" height="96" rx="6" fill="#141719" stroke={line} />
      <rect x="238" y="86" width="34" height="5" rx="2.5" fill={accent} fillOpacity="0.45" />
      <rect x="238" y="98" width="56" height="3.5" rx="1.75" fill="#ffffff" fillOpacity="0.08" />
      <rect x="238" y="107" width="44" height="3.5" rx="1.75" fill="#ffffff" fillOpacity="0.08" />
      <rect x="238" y="122" width="56" height="26" rx="4" fill="#ffffff" fillOpacity="0.05" />
      <Tag x={228} y={64}>
        tablet
      </Tag>

      {/* mobile */}
      <rect x="320" y="84" width="46" height="84" rx="7" fill="#141719" stroke={line} />
      <rect x="336" y="90" width="14" height="2.5" rx="1.25" fill="#ffffff" fillOpacity="0.14" />
      <rect x="328" y="102" width="24" height="4.5" rx="2.25" fill={accent} fillOpacity="0.45" />
      <rect x="328" y="114" width="30" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.08" />
      <rect x="328" y="122" width="22" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.08" />
      <rect x="328" y="134" width="30" height="22" rx="4" fill="#ffffff" fillOpacity="0.05" />
      <Tag x={320} y={76}>
        mobile
      </Tag>

      <path d="M36 190h330" stroke={line} strokeDasharray="3 4" />
      <Tag x={36} y={206} tone="accent">
        HTML / CSS / JavaScript
      </Tag>
    </Frame>
  );
}

/* ------------------------------------------------------------------ export */

const visuals = {
  finance: FinanceVisual,
  match: MatchVisual,
  commerce: CommerceVisual,
  portfolio: PortfolioVisual,
} as const;

export type ProjectVisualName = keyof typeof visuals;

export function ProjectVisual({ name }: { name: ProjectVisualName }) {
  const Cmp = visuals[name];
  return <Cmp />;
}
