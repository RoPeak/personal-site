# ronan-peacock.com

Personal portfolio site for Ronan Peacock - software engineer, graduate apprentice at Leidos,
and BSc Software Engineering student at the University of Glasgow.

![Preview](docs/images/preview.png)

## Stack

- [Astro](https://astro.build) - static site framework
- [Tailwind CSS v4](https://tailwindcss.com) - utility-first styling
- [TypeScript](https://www.typescriptlang.org) - typed throughout
- Deployed on [Cloudflare Workers](https://developers.cloudflare.com/workers/)

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

Hosted on Cloudflare Workers with Git-connected builds. To deploy:

1. Push this repo to GitHub.
2. In the Cloudflare dashboard go to **Workers & Pages**, open the `personal-site` Worker, and connect it to Git.
3. Select the repo and configure:
   - **Build command:** `npm run build`
   - **Deploy command:** `npx wrangler deploy`
   - **Version command:** `npx wrangler versions upload`
   - **Production branch:** `main`
4. Add or confirm the custom domains (`ronan-peacock.com` and `www.ronan-peacock.com`) under the Worker settings.

This project is not currently configured as a Cloudflare Pages site. If automatic deployments stop working, check that the Worker is still connected to the GitHub account and repository.

## CI Gate

Local pushes run the same quality gate as GitHub Actions:

```bash
npm run ci
```

`npm install` configures `core.hooksPath` to `.githooks`, which enables the versioned `pre-push` hook for this repo.

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
