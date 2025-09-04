# Feature Contract — Non-negotiables

1) Case studies
   - /work grid + /work/[slug]
   - Gallery with lightbox (keyboard: ←/→/Esc; ARIA (Accessible Rich Internet Applications) dialog)
   - Mobile carousel (swipe)
   - Before/After slider
   - Static image imports + next/image

2) Performance (CWV = Core Web Vitals)
   - next/image everywhere (with `sizes`)
   - Local .webp assets under /public/portfolio/*
   - Cache-Control for /portfolio/*: public, max-age=31536000, immutable

3) SEO & Sharing
   - Per-page `metadata`
   - JsonLd component for JSON-LD
   - `/work/[slug]/opengraph-image.tsx`
   - `app/sitemap.js` + `app/robots.txt`

4) Security
   - CSP (Content Security Policy) + core headers in next.config.mjs

5) Leads & Analytics
   - /contact (Formspree or equivalent)
   - Exactly one analytics provider (Plausible or Vercel Analytics)

6) UI helpers & constants
   - `components/ui.jsx` and `lib/constants.js`
