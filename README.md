# Wow Tex — Static Website

Flat, responsive marketing site for **Wow Tex**, built with HTML5, CSS3, and vanilla JavaScript only (no frameworks or build tools).

## Assets (`assets/img/`)

- `favicon.png` — browser tab icon (`<link rel="icon">`)
- `wowtex.png` — logo in the header and footer
- `og-image.png` — social preview (`og:image` meta tags)
- `hero-image.png` — homepage hero illustration only

## Local preview

```bash
python3 -m http.server 5173
```

Open `http://localhost:5173`.

## Deploy

Publish the repository root to Netlify, GitHub Pages, Vercel static hosting, or any shared host—no build step.

For faster loads, compress large PNGs (for example `hero-image.png`, `og-image.png`) with an image optimizer before deploying.
