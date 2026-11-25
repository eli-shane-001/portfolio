# Mohammed Awais — Portfolio

Personal portfolio for a NetSuite developer: experience, projects, skills and resume, as a static site.

**Stack:** Next.js 15 (App Router, static export) · TypeScript · Tailwind CSS 4 · `next-themes` · `lucide-react`

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000/portfolio
```

The site is served under the `/portfolio` basePath, so the base URL includes it.

Other scripts: `npm run build` (writes `out/`), `npm run lint`.

## Deploy

Push to `main` → GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) builds the static export and publishes it to GitHub Pages at
<https://eli-shane-001.github.io/portfolio/>. No manual deploy step.

## Content

All copy lives in [`src/data/content.ts`](src/data/content.ts) — profile links, summary, experience bullets, projects, education and skills. Edit that file rather than the components; identity fields (email, LinkedIn, GitHub, resume path) are rendered from `personal` and must not be hardcoded anywhere else.

Placeholders written as `[[N]]` or `[[TODO: …]]` in that file are deliberately unfilled facts awaiting real numbers.

## Social image

`public/og.png` (1200×630) backs the Open Graph and Twitter card. Replace it with a new PNG of the same name and size if the branding changes.
