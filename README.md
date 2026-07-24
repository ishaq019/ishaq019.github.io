# Syed Ishaq — React Portfolio

A responsive portfolio rebuilt from the original HTML/CSS/JavaScript website using React, Tailwind CSS, reusable components, structured content data, and optimized project assets.

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
syed-ishaq-react-portfolio/
├── public/
│   └── assets/
│       ├── projects/          # Optimized WebP project images
│       └── syed-ishaq-resume.pdf
├── src/
│   ├── components/            # Reusable portfolio sections and UI
│   ├── data/portfolio.js      # Personal content, links, and project data
│   ├── App.jsx
│   ├── index.css              # Tailwind import and shared design utilities
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Notes

- The contact form uses a `mailto:` action and opens the visitor's configured email application. A hosted form service or backend endpoint is required for silent web submission.
- Replace `public/assets/syed-ishaq-resume.pdf` whenever the resume changes; the download link does not need a code update.
- Portfolio content is maintained in `src/data/portfolio.js` so projects, skills, education, experience, and certifications can be updated without editing component markup.
