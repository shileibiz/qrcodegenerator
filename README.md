# QRMint — Free QR Code Generator

Free QR code generator: no sign-up, no watermark, static codes never expire.
Built with Astro 5 + Tailwind CSS, deployed on Cloudflare Pages.

## Features

- **100% client-side generation** using the [`qrcode`](https://www.npmjs.com/package/qrcode) library — data never leaves the browser
- QR types: plain text, URL, WiFi (WPA/WEP/open, hidden networks), vCard contact cards
- Logo embedding (auto-raises error correction to H), custom colors, PNG (up to 2048px) and SVG export
- SEO: JSON-LD (WebApplication / FAQPage / HowTo), Open Graph + Twitter cards, hreflang, sitemap, robots.txt

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Main generator + positioning ("No Sign-up, Never Expires") |
| `/uses/wifi-qr-code/` | WiFi QR landing page (tool defaults to WiFi tab) |
| `/uses/qr-code-with-logo/` | Logo QR landing page |
| `/uses/free-qr-code/` | Static vs dynamic / "trial trap" education page |
| `/faq/` | Full FAQ with FAQPage schema |
| `/alternatives/` | Comparison vs qr-code-generator.com, QR Code Monkey, Uniqode |

## Monetization

Free tier = static codes (generated locally, work forever). Premium = dynamic codes
(editable destination, scan analytics) — CTA currently points to Buy Me a Coffee,
Stripe checkout planned.

## Development

```sh
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
npm run preview  # preview the build
```

## Deploy (Cloudflare Pages)

- Build command: `npm run build`
- Output directory: `dist`
- No adapter needed (fully static output)

Domain candidates: `qrmint.app` (current `site` config) or `foreverqr.com` —
update `site` in `astro.config.mjs` and `public/robots.txt` if the domain changes.
