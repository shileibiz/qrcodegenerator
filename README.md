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
| `/uses/vcard-qr-code/` | Contact card generator with the vCard tab selected |
| `/uses/svg-qr-code/` | Vector QR export guide and embedded generator |
| `/uses/qr-code-no-sign-up/` | Account-free generator guide |
| `/uses/print-qr-code/` | 2048px PNG and SVG printing guide |
| `/faq/` | Full FAQ with FAQPage schema |
| `/alternatives/` | Comparison vs qr-code-generator.com, QR Code Monkey, Uniqode |

## Availability

QRMint currently creates static QR codes only. Dynamic codes, editable destinations,
and scan tracking are not offered.

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

The canonical site URL is configured in `astro.config.mjs`. The sitemap and
`robots.txt` derive from that configuration. Sitemap `lastmod` dates come from the
source file's latest Git commit (or its modification time for uncommitted files).
