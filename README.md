# Wow Tex — Static Website (No Frameworks)

Modern, responsive, lightweight static website for **Wow Tex** built with:

- HTML5
- CSS3
- Vanilla JavaScript

No frameworks, no build tools, no dependencies.

## Pages

- `index.html`
- `services.html`
- `about.html`
- `contact.html`
- `404.html`

Assets:

- `assets/css/styles.css`
- `assets/js/main.js`
- `assets/img/`

## Edit content

Open any `.html` file and edit the text directly. The sections are intentionally simple and consistent.

Common edits:

- **Brand name / email**: search for `Wow Tex` and `hello@wowtex.com`
- **Services copy**: `services.html`
- **Homepage hero + tiles**: `index.html`

## Run locally

Any static server works. For example:

```bash
python3 -m http.server 5173
```

Then open `http://localhost:5173`.

## Deploy

This repo is deployable as-is (just upload/publish the folder):

- **Netlify**: set publish directory to the repo root
- **GitHub Pages**: publish from the root (or `/docs` if you choose to move files)
- **Vercel static hosting**: deploy as a static site (no build command required)
- **Shared hosting**: upload files via FTP/cPanel
