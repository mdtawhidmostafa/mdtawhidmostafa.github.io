# Md. Tawhid Mostafa — Portfolio

A responsive, dependency-free portfolio website prepared for GitHub Pages.

## What is included

- `index.html` — main portfolio
- `styles.css` — responsive styling, dark/light mode, animations
- `script.js` — navigation, theme, reveal effects, copy-email interaction
- `404.html` — GitHub Pages friendly 404 page
- `assets/profile.webp` — optimized profile photo
- `assets/Tawhid-Mostafa-Resume.pdf` — downloadable resume
- `assets/favicon.png` — favicon

## Publish on GitHub Pages

### Option A — user site (cleanest URL)

Your resume currently links to the GitHub account `mdtawhidmostafa`. For that account, create a **public** repository named exactly:

`mdtawhidmostafa.github.io`

Upload the **contents of this folder** to the repository root and push to the `main` branch. In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.

The default URL will be:

`https://mdtawhidmostafa.github.io/`

To have the URL `https://tawhid-mostafa.github.io/`, the GitHub user or organization itself must be named `tawhid-mostafa`, and its repository must be `tawhid-mostafa.github.io`.

### Option B — project site

You can upload the same files to any public repository, for example `portfolio`. GitHub Pages will then usually publish it at:

`https://mdtawhidmostafa.github.io/portfolio/`

This site uses relative asset paths, so it works in either setup without code changes.

## Quick local preview

Open `index.html` directly in a browser, or run a simple local server from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Before publishing

Review the visible email address, project links, resume PDF and text. The site intentionally does not display a public phone number on the page.
