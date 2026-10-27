# Munib — Anime Portfolio ("Shinobi of Code")

Static, dependency-free site (HTML + CSS + vanilla JS). Opens instantly, deploys anywhere (Vercel, Netlify, GitHub Pages).

## Add your profile picture
Save your photo as **`assets/profile.png`** (portrait, ~600×800 works best).
Until then a stylised "M" placeholder is shown.

## Files
- `index.html` — layout & content
- `styles.css` — neumorphic anime theme, desktop + dedicated mobile layouts
- `script.js` — project data (edit the `projects` array to change Goku's explanations), carousel & typewriter
- `assets/` — Goku-style mascot, logo (Logoipsum-style placeholder mark)

## Fonts & icons
- **Satoshi**: Fontshare (Indian Type Foundry), free for commercial use
- **Material Symbols Rounded**: Google Fonts (google/material-design-icons), subset with `icon_names=` so only the icons in use get downloaded

## Run locally
Open `index.html` directly, or run `python -m http.server` and go to http://localhost:8000

## Deploy to Vercel
`npx vercel` in this folder (no build step needed).

