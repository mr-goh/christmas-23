# Christmas 23

Small Vite and Three.js web project with a 3D cactus model and background audio.

## Project Structure

- `index.html` is the main page.
- `main.js` sets up the Three.js scene.
- `styles.css` contains page styles.
- `public/` contains static assets copied directly into the built site.
- `.github/workflows/deploy.yml` builds and deploys the site to GitHub Pages.

## Local Development

Install dependencies once:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build the production site:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Git Notes

The repo intentionally ignores generated and machine-specific files such as `node_modules/`, `dist/`, `.DS_Store`, and editor settings. Dependencies are recreated with `npm install`; production files are recreated with `npm run build`.

