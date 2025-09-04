# Agent Kickoff — Vega Design Studio

**Source repo:** https://github.com/VoidNullson/vega-design-studio  
**North Star Docs:** `docs/PROJECT_BRIEF.md`, `docs/FEATURE_CONTRACT.md`

## Mission
Improve and extend the site without removing any Feature Contract items. Use server components by default; isolate client interactivity. Maintain Los Angeles local SEO and structured data.

## Deliverables
- Keep and enhance:
  - /work grid + /work/[slug] (static generation + revalidate)
  - Gallery + lightbox (keyboard: ←/→/Esc), mobile carousel, Before/After slider
  - next/image with static imports; `.webp` assets under /public/portfolio/*
  - Per-page `metadata`, JSON-LD via `components/JsonLd.jsx`
  - `app/work/[slug]/opengraph-image.tsx`, `app/sitemap.js`, `app/robots.txt`
  - CSP + headers in `next.config.mjs`
  - /contact (Formspree or equivalent), single analytics provider


## PR Expectations
- Include Lighthouse (mobile) scores: Performance ≥ 90, SEO ≥ 95, Accessibility ≥ 95
- Screenshots for /, /work, and /work/[slug]
- Short rationale for design/performance decisions
