# ronanpeacock.com

Personal portfolio site for Ronan Peacock - software engineer, graduate apprentice at Leidos,
and BSc Software Engineering student at the University of Glasgow.

![Preview](docs/images/preview.png)

## Stack

- [Astro](https://astro.build) - static site framework
- [Tailwind CSS v4](https://tailwindcss.com) - utility-first styling
- [TypeScript](https://www.typescriptlang.org) - typed throughout
- Deployed on [Cloudflare Pages](https://pages.cloudflare.com)

## Development

```bash
npm install
npm run dev
```

Runs at `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/
    layout/     Nav, Footer
    sections/   Page sections (Hero, About, Experience, etc.)
    ui/         Reusable primitives (ProjectCard, TechTag, etc.)
  data/         Content as typed TypeScript files
  layouts/      BaseLayout
  pages/        index.astro, projects.astro
  styles/       global.css (Tailwind + design tokens)
public/
  assets/
    images/     Photos and badges
    docs/       Downloadable PDFs (CV, dissertations)
```

## Deployment

Hosted on Cloudflare Pages. To deploy:

1. Push this repo to GitHub.
2. In the Cloudflare dashboard go to **Workers & Pages > Create > Pages > Connect to Git**.
3. Select the repo and configure:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Add a custom domain (`ronanpeacock.com`) under the Pages project settings after first deploy.

Security headers are set via `public/_headers` and served automatically by Cloudflare Pages.

## Content

All site content lives in `src/data/` as plain TypeScript files.

| File | Contents |
|---|---|
| `site.ts` | Name, links, metadata |
| `projects.ts` | Project list |
| `timeline.ts` | Experience timeline |
| `awards.ts` | Awards and certifications |
| `education.ts` | Degree, modules, dissertations |
| `skills.ts` | Skills grouped by category |
