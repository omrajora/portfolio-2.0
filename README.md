# Om Kumar — Portfolio

Recruiter-focused personal portfolio for **Om Kumar** — Full-Stack Developer, AI/ML Enthusiast, Problem Solver.

Built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, **TypeScript**, and **Framer Motion**. Every route is statically prerendered.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

---

## Add your resume PDF (one step, recommended)

The Resume button resolves its target **at build time**:

| `public/Om-Kumar-Resume.pdf` | Button behaviour |
| --- | --- |
| present | “Download Resume” → downloads the PDF |
| absent | “View Resume” → opens `/resume`, a print-ready page |

So the CTA is never a dead link. To enable the real download:

```
public/Om-Kumar-Resume.pdf
```

Until then, `/resume` renders the same content from `src/data/site.ts` and can be saved with **Print → Save as PDF**.

---

## Editing content

**All copy lives in one file: [`src/data/site.ts`](src/data/site.ts).** Nothing is hardcoded in components — edit that file and every section, the SEO metadata, the JSON-LD, the OG image, and `/resume` all update together.

| Export | Drives |
| --- | --- |
| `profile` | Name, headline, roles, email, GitHub, LinkedIn, availability pill |
| `siteUrl` | **Change this before deploying** — canonical URL, sitemap, JSON-LD |
| `navLinks` | Navbar + footer nav + scroll-spy targets |
| `about` | About narrative, “What I’m looking for”, at-a-glance facts |
| `skillCategories` | The 7 skill cards (badges only — no proficiency bars) |
| `techStrip` | The marquee under the hero |
| `projects` | Project case studies; `featured: true` selects the large layout |
| `achievements` | SIH highlight card + 3 supporting tiles |
| `education` | Education timeline |
| `contact` | Contact heading, body, channel list |

---

## Structure

```
src/
├─ app/
│  ├─ layout.tsx            root layout, fonts, metadata, skip-link
│  ├─ page.tsx              section composition + JSON-LD
│  ├─ globals.css           design tokens, utilities, print styles
│  ├─ icon.svg              OM favicon
│  ├─ opengraph-image.tsx   generated 1200×630 share card
│  ├─ sitemap.ts / robots.ts
│  └─ resume/page.tsx       print-ready resume route
├─ data/site.ts             single source of truth
├─ lib/
│  ├─ utils.ts              cn() helper
│  └─ resume.ts             build-time PDF existence check
└─ components/
   ├─ layout/               Navbar · Footer · ScrollProgress
   ├─ ui/                   Section · SectionHeading · Reveal · Badge ·
   │                        Button · SpotlightCard · BackgroundFX ·
   │                        TechStrip · CopyEmailButton
   ├─ visuals/              Icons · HeroVisual · ProjectVisual
   └─ sections/             Hero · About · Skills · Projects ·
                            Achievements · Education · Contact · ContactForm
```

---

## Design system

Defined once in `src/app/globals.css` via Tailwind v4 `@theme`.

- **Palette** — “Gold on Graphite”: canvas `#08090b`, surfaces `#0e1013`/`#141719`, hairlines `#23272c`
- **Single accent** — amber `#ffb020` (no rainbow gradients)
- **Type** — Sora (display) · Inter (body) · JetBrains Mono (labels/badges), all self-hosted by `next/font`
- **Custom utilities** — `shell`, `label-mono`, `glass`, `bg-grid`, `bg-noise`, `hairline-top`, `text-accent-gradient`, `mask-edges-x`

### Animation budget

Deliberately restrained: hero load stagger, one scroll-reveal per block, pointer-tracked card spotlight, navbar glass transition, and the hero SVG's orbital/pulse loops. **Everything freezes under `prefers-reduced-motion`** — enforced both in CSS and via `useReducedMotion()`.

---

## Content integrity

Nothing on this site is invented. There is no fabricated work experience, employer, job title, award, certification, project metric, user count, performance figure, or testimonial.

Two places where honesty required a design decision:

1. **Contact form** — there is no backend and no email service. The form validates input and then composes a `mailto:` draft in the visitor's own mail client. The UI states this explicitly rather than implying a submission.
2. **Project visuals** — abstract architecture schematics, not mock dashboards. Labels come from documented features; no numbers or charts appear anywhere, so nothing implies data that doesn't exist.

The AI Internship Recommendation System has no public repo URL, so its card shows “Repository link available on request” instead of a broken link.

---

## Accessibility

- Semantic landmarks (`header` / `main` / `section[aria-labelledby]` / `footer`), single `h1`, ordered headings
- Skip-to-content link; visible amber `:focus-visible` ring on every interactive element
- Mobile menu: `aria-expanded` / `aria-controls`, Escape to close, background scroll lock
- Form: real `<label>` elements, `aria-invalid`, `aria-describedby`, `role="alert"` errors, `aria-live` status
- Decorative SVG/marquee marked `aria-hidden`; the hero graphic carries a descriptive `role="img"` label

---

## Before deploying

1. Set `siteUrl` in `src/data/site.ts` to your real domain.
2. Drop `Om-Kumar-Resume.pdf` into `public/`.

Then deploy to Vercel (zero config) — or any Node host via `npm run build && npm start`.
