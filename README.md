# Wow Tex Premium Marketing Website

Premium, futuristic SaaS-style marketing website built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, GSAP, and Lenis.

## Stack

- Next.js 15 (App Router, static export ready)
- TypeScript
- Tailwind CSS
- Framer Motion + GSAP
- Lenis smooth scroll
- Lucide React + React Icons

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` - run development server
- `npm run build` - production build + static export output
- `npm run lint` - ESLint
- `npm run typecheck` - TypeScript checks

## Project Structure

- `src/app` - routes and layout
- `src/components` - reusable UI, layout, motion, effects, and section components
- `src/data` - editable placeholder content
- `src/lib` - site config, utilities, and animation hooks
- `public` - static assets (portfolio placeholders, OG image)

## Content Editing

Update placeholder content in:

- `src/data/content.ts` - services, stats, pricing, portfolio, testimonials, timeline, and team

## Deployment (GitHub Pages)

This project is configured with static export:

- `output: "export"` in `next.config.ts`
- GitHub Pages compatible `basePath` and `assetPrefix` when running in GitHub Actions
- `images.unoptimized: true` for static hosting

Typical deploy flow:

1. Push repository to GitHub.
2. Build in CI with `npm ci && npm run build`.
3. Publish `out/` directory to GitHub Pages.

## Accessibility and Performance Notes

- Semantic layout with keyboard-focusable controls
- Strong dark-theme contrast with visible focus states
- Motion via reusable wrappers with progressive enhancement
- Static export and lightweight SVG placeholders for fast loads
