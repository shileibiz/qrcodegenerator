# QRMint roadmap — 2026-09-26
- Stack: Astro 5, Tailwind CSS, browser-side `qrcode`; build with `npm run build`.
- Deploy: Cloudflare Pages static `dist/`; no Pages Functions or Worker in this repository.
- Canonical and Open Graph URLs use `Astro.site` from `astro.config.mjs`; `@astrojs/sitemap` generates the sitemap from the same site URL.
- Q2/Q3 done: removed unavailable Premium claims and added four capability pages; 23-page build, metadata, robots, and sitemap checks pass. Commit locally; deployment pending.
