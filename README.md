# Syed Ishaq — Portfolio

A fast, single-page developer portfolio built with React, Vite, and Tailwind CSS. It uses a custom **"Signal on Ink"** dark design system (warm amber accent on a blue-black base), scroll-reveal and count-up animations, a Lenis smooth-scroll layer, and a spotlight for the flagship project, **CareerSetu** — including an animated ATS match-score gauge. All motion honors `prefers-reduced-motion`.

## Run locally

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
ishaq019.github.io/
├── public/
│   └── assets/
│       ├── projects/          # Optimized WebP project images
│       └── syed-ishaq-resume.pdf
├── src/
│   ├── components/            # Portfolio sections and UI (Hero, About, Projects, …)
│   │   ├── MatchGauge.jsx     # Animated ATS match-score dial (CareerSetu)
│   │   └── BrandIcons.jsx     # Inline GitHub / LinkedIn / AI glyph SVGs
│   ├── hooks/useCountUp.js    # In-view count-up animation hook
│   ├── data/portfolio.js      # Personal content, links, and project data
│   ├── App.jsx
│   ├── index.css              # "Signal on Ink" design system + Tailwind import
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Design system — Signal on Ink

- **Base** `#0B0D12` ink · **raised surfaces** `#131722`
- **Signal** `#F6B24A` (amber-gold) — primary accent
- **Cool** `#8B93FF` (periwinkle) — reserved for the CareerSetu flagship
- **Type** Space Grotesk (display) · Inter (body) · JetBrains Mono (labels, section numbers, chips)

## Notes

- Content is maintained in `src/data/portfolio.js` — projects, skills, education, experience, and certifications update without touching component markup. Mark a project `flagship: true` to render it in the spotlight (with `matchScore`, `tagline`, and `features`).
- The contact form uses a `mailto:` action and opens the visitor's email app; a hosted form service is required for silent web submission.
- Replace `public/assets/syed-ishaq-resume.pdf` when the résumé changes; the download link needs no code update.
- Deployed to GitHub Pages (custom domain `syedishaq.me`) via `.github/workflows/deploy-frontend.yml`.
