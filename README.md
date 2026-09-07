# James Gifford-Mead Photography — static site

Multi-page static marketing site for [James Gifford-Mead Photography](https://jamesgiffordmead-photography.co.uk/), served as an assets-only Cloudflare Worker (`jgm-static-demo`).

Copy and photographs are taken from James’s live WordPress site. The layout follows the text-first, mosaic-grid look of [Rafael Bastos](https://rafaelbastos.co.uk) while keeping James’s name, voice, and testimonials.

## Pages

| File | Route |
| --- | --- |
| `public/index.html` | `/` |
| `public/events.html` | `/events` |
| `public/conferences.html` | `/conferences` |
| `public/corporate.html` | `/corporate` |
| `public/headshots.html` | `/headshots` |
| `public/about.html` | `/about` |
| `public/reviews.html` | `/reviews` |
| `public/contact.html` | `/contact` |
| `public/404.html` | custom 404 |

Shared assets: `public/css/styles.css`, `public/js/main.js`, `public/robots.txt`, `public/sitemap.xml`.

The contact page embeds James’s Studio Ninja enquiry form.

## Local preview

From the repo root:

```bash
# Option A — Wrangler (same routing as production, including 404.html)
npx wrangler@latest dev

# Option B — any static server
python3 -m http.server 8787 --directory public
```

Then open http://localhost:8787 (or the URL Wrangler prints).

## Deploy

```bash
# Temporary Workers preview (no dashboard project required)
npx wrangler@latest deploy --temporary

# Named Worker, when authenticated to the Cloudflare account
npx wrangler@latest deploy
```

`wrangler.toml` points `[assets].directory` at `./public`, uses `html_handling = "auto-trailing-slash"`, and `not_found_handling = "404-page"`.

A temporary Workers preview from this work:

https://jgm-static-demo.diamond-rainforest.workers.dev

Claim that preview (60-minute window from deploy) at the Cloudflare claim URL printed by `wrangler deploy --temporary`. A named `wrangler deploy` needs a `CLOUDFLARE_API_TOKEN` in the environment.

## Notes

- Images are hotlinked from James’s WordPress uploads.
- Testimonials are quoted from his live reviews page only — nothing invented.
- Phone: +44 7815 636407. Email: photography@jamesgiffordmead.co.uk.
