# 3S Grupo Industrial — Landing Page

🇪🇸 [Leer en español](README.es.md)

Static site (Astro 7 + Tailwind 4) for **3S Grupo Industrial S.R.L.** —
chemical and biological products for industrial wastewater treatment and
sanitary hygiene.

No database or application backend. `npm run build` produces a static
`dist/` folder. A minimal Cloudflare Worker runs only at `/` to select a
language from the request headers; every content page remains a static asset.

> **Current build:** 70 pages in three languages and 19 products. The
> staged rollout and remaining acceptance work are tracked in
> `docs/IMPLEMENTATION_PLAN.md`.

Want to contribute? See [CONTRIBUTING.md](CONTRIBUTING.md) for the
project's setup, conventions, and PR process.

## Running the project

```bash
npm install
cp .env.example .env     # fill in PUBLIC_WEB3FORMS_KEY
npm run dev               # http://localhost:4321
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Type-check + static build into `dist/` |
| `npm run preview` | Serves only the static `dist/` output |
| `npm run check` | Type-check only |
| `npm run test:locale` | Tests header and cookie language selection |
| `npx wrangler dev` | Serves the full Cloudflare Worker locally |

## Where to change things

All editable content lives in `src/data/`. No component has text
hardcoded in its markup.

| I want to change… | File | Field |
| --- | --- | --- |
| **The WhatsApp number** | `src/data/config.ts` | `contacto.whatsapp` |
| **Phones, email, address** | `src/data/config.ts` | `contacto` |
| **Social links** | `src/data/config.ts` | `contacto.redes` (entries with `url: ''` are hidden) |
| **Showing/hiding prices** | `src/data/config.ts` | `precios.isVisible` |
| **The prices** | `src/data/products.ts` | `presentaciones[].precio` |
| **Products, package sizes, specs** | `src/data/products.ts` | — |
| **Any Spanish copy** | `src/data/content.es.ts` | — |
| **Images** | `src/assets/images/` | overwrite the file, keep the name |
| **Brand colors** | `src/styles/global.css` | the `@theme` block |

### The price toggle

`config.precios.isVisible` controls **two things at once**: whether the
price component renders, and whether the JSON-LD emits an `offers`
node. They're tied together on purpose. Google requires real `price`
and `priceCurrency` values inside `offers`, and publishing a made-up
price to get the rich-result snippet is grounds for a manual action on
the domain. Once real prices are loaded into `products.ts`, flip the
boolean to `true` and both turn on together.

### Images

They live in `src/assets/images/` (not `public/`) so Astro can process
them: it generates WebP at several sizes, computes `width`/`height`,
and emits the `srcset`. That's what prevents layout shift.

These are the institutional catalog photos, cropped. There are three
sets of 19, one per product, named by the product's `slug`:

| Folder | What it holds |
| --- | --- |
| `productos/` | Packaging cut out on a white background |
| `marcas/` | Banner with the product's name and descriptor |
| `aplicaciones/` | Real-use photo on site |
| `marca/` | 3S logo |
| `public/og/` | 1200 × 630 preview image for WhatsApp and social |

To replace a photo: overwrite the file **keeping the same name**. If
you rename it, update the matching `src` field in `products.ts` or
`content.es.ts`.

The original files got two corrections worth repeating if you load new
photos from the same source:

- The `aplicaciones/` ones carried a few pixels of white frame left
  over from the catalog crop. Against a dark panel that border read as
  a light line stuck to the edge, so it was trimmed off.
- The `productos/` and `marcas/` ones sat on an opaque white rectangle.
  The background was removed — only the background: labels and white
  jugs stay intact — so they rest on the plinth instead of showing a
  white box inside the card.

What's still worth replacing with better original photography: the six
gallery shots and the hero image. None exceeds 500px wide, and it
already shows in one specific spot: **the large gallery image**, which
is twice as wide as the others and the only one the browser has to
upscale. That's the first photo worth replacing, at 1200 × 900 or
larger. Any new plant or lab photo at 1600 × 1200 noticeably improves
the overall result.

## Confirmed content

Lead times, commercial terms, and FAQ copy were confirmed by the client
on September 4, 2026, and are published exactly as written in
`content.es.ts`.

One open item remains, detailed in `plan.md`: **the real scope of
technical advisory services**. Until that's defined, the site only
promises what's safe — product, package size, and dilution
recommendations — and doesn't mention plant visits or startup support.

## Structure

```
src/
  components/layout/     Header, Footer, LangSwitch
  components/ui/         Button, WhatsAppLink, Section, BotonWhatsAppFlotante, AlternadorTema
  components/sections/   one landing section per file
  data/                  all editable content (see table above)
  layouts/Layout.astro   <head>, meta, canonical, hreflang, JSON-LD
  lib/imagenes.ts        resolves products.ts image paths to image modules
  styles/                brand tokens and self-hosted fonts
public/                  robots.txt, favicon, Open Graph image
```

## Languages

Rioplatense Spanish (`es-PY`) at the root, Brazilian Portuguese
(`pt-BR`) under `/pt`, and US English (`en-US`) under `/en`. The
switcher lives in the header and **keeps the page**: if you're on the
Decuat product page and switch to English, you land on
`/en/productos/decuat`, not the homepage.

Each language is a file in `src/data/`: `content.es.ts`,
`content.pt.ts`, `content.en.ts`. All three have exactly the same
shape because the `Contenido` type enforces it: if a key is missing,
the build fails before anything ships.

**To add or remove a language**, it's enough to edit the `registro`
object in `src/data/content.ts`. The switcher, the `hreflang` tags, the
sitemap, and the prefixed routes all read from there: they appear and
disappear on their own.

Product names aren't translated — they're brand names — and the
`slug`s are the same across all three languages, so
`/productos/decuat`, `/pt/productos/decuat`, and
`/en/productos/decuat` are the same product page in three languages,
and they declare that to each other with reciprocal `hreflang`, both in
the `<head>` and in the sitemap.

On Cloudflare, a first visit to `/` reads `Accept-Language` and redirects
to `/pt` or `/en` when either language is preferred. Spanish is the
fallback. A language chosen in the header is saved for one year and takes
priority on later visits. Explicit URLs are never redirected to another
language. Vercel previews serve the static build and do not run this Worker.

## Audit results

Lighthouse mobile, measured against `npm run preview`:

| Page | Perf. | Accessibility | Best practices | SEO |
| --- | --- | --- | --- | --- |
| `/` | 99 | 100 | 100 | 100 |
| `/productos` | 99 | 100 | 100 | 100 |
| `/productos/stronger` | 99 | 100 | 100 | 100 |
| `/pt` | 98 | 100 | 100 | 100 |
| `/en/productos` | 100 | 100 | 100 | 100 |

Cumulative layout shift: **0** everywhere. Main-thread blocking:
**0 ms**. All JavaScript ships inlined in the HTML and stays well under
the 30 KB compressed target.

On the 98–99 in performance: that's the machine, not the site. The
version before the visual redesign, built and measured on the same
machine in the same run, gives the exact same numbers. What moves the
score is the simulated *first contentful paint*, which comes back to
100 on a faster machine. The redesign didn't add a single request or
kilobyte of JavaScript.

Desktop scores **100 across all four categories** on every page
measured.

Two accessibility fixes came out of this audit and are documented in
the code:

- The gray from the flyer's band (`#8b8b8b`) gives 3.3:1 against the
  bone background, short of the 4.5:1 AA requires for normal text. The
  `--color-gris` token is now a darkened version that keeps the warm
  bias and gives 4.9:1; the original gray stayed as
  `--color-gris-marca`, used only for backgrounds and photo overlays.
- In the catalog, product cards hung off the `h1` with an `h3`,
  skipping the `h2`. The card now receives its heading level as a
  prop: 2 in the catalog, 3 inside a product page's "Same family"
  section, which already has its own `h2`.

## Deployment

The result of `npm run build` is the `dist/` folder: HTML, CSS,
images, and nothing else. No server to maintain, no database to back
up.

### Cloudflare Workers Static Assets (production)

Production is packaged by `wrangler.jsonc`: the Worker handles only `/`
and the assets binding serves the Astro build. Run `npm run deploy` only
after the approved `development` → `main` release. Add
`PUBLIC_WEB3FORMS_KEY` to the production build environment; the form will
not submit without it.

Vercel is the development environment. `development` feeds its stable dev
URL and every stage branch receives an isolated preview.

To connect the domain: **Custom domains → Set up a custom domain**,
enter `3sgrupoindustrial.com.py`, and load the nameservers Cloudflare
gives you into NIC.py.

### Netlify

Same idea, with a 100 GB/month traffic cap on the free plan.

1. **Add new site → Import an existing project**, pick the repository.
2. Build command `npm run build`, publish directory `dist`.
3. **Site configuration → Environment variables**: add
   `PUBLIC_WEB3FORMS_KEY`.
4. **Domain management → Add a domain** to connect the domain.

### Without a repository, uploading the folder

If you'd rather not use Git: run `npm run build` on your machine and
drag the `dist` folder into Cloudflare Pages (**Upload assets**) or
Netlify Drop. One catch: the environment variable applies **at build
time**, so your local `.env` needs the access key before you run
`npm run build`. These static-only alternatives open in Spanish and do
not negotiate `Accept-Language`.

### The domain

`3sgrupoindustrial.com.py` is registered through **NIC.py**, the sole
registrar for `.py`: no price competition, no alternative. Worth
reserving before launch, not after.

### After publishing

1. Register the site with **Google Search Console** and submit
   `https://3sgrupoindustrial.com.py/sitemap-index.xml`.
2. Run the homepage and a product page through Google's **Rich Results
   Test** to confirm the `FAQPage` and `Product` markup reads
   correctly.
3. Claim the **Google Business Profile** listing with the Pilar 1717
   address, which is what connects the `LocalBusiness` markup to
   Google Maps.

## Visual system

Everything that defines the site's look lives in
`src/styles/global.css`, in two blocks: the tokens inside `@theme` and
the surface utilities below it. Changing any of these lines changes
the entire site consistently; there are no loose values scattered
across components.

**Color.** The flyer's palette gained a dark family for the contrast
panels — the hero, the final CTA — `--color-carbon` and its two
derivatives. It isn't pure black; it's the brand's graphite pushed into
depth, so the panel reads as part of the system rather than a generic
block. The isotype green (`--color-verde`) only works as a brand color
against carbon; on a light background it stays reserved for icons and
fills, never small text.

Dark mode reassigns the same token names under a `.dark` class (see
`AlternadorTema.astro` for the toggle), so every utility built on these
tokens adapts on its own — no component-by-component overrides needed.

**Radii.** Two, and only two: `rounded-card` (0.625rem) for surfaces
and `rounded-chip` (0.375rem) for buttons, fields, and tags. The brand
is industrial, so no pills and no heavily rounded corners.

**Elevation.** Three levels — `shadow-nivel-1` at rest, `nivel-2` on
hover, `nivel-3` for floating elements — all tinted with the brand's
graphite: a neutral gray shadow on a bone background looks dirty.

**Surfaces.** Four utilities cover the whole site:

| Utility | What it's for |
| --- | --- |
| `tarjeta` | White surface with a faint border and minimal elevation |
| `tarjeta-viva` | Same, with a 3px lift on hover |
| `plinto` + `plinto-sombra` | Base for cutout packaging shots: a soft gradient and a shadow ellipse underneath, so the product rests instead of floating |
| `volanta` | The short uppercase label with a dash that opens each section |

**Motion.** Everything animated turns off completely under
`prefers-reduced-motion`, including card lifts and image zooms: they
don't get shorter, they get disabled.

### The logo

The catalog file came in RGB on an opaque white rectangle: against the
hero's dark panel you'd see the box, not the brand. There are two
derived versions, both with the background removed:

- `logo-3s-transparente.png` — original ink, for light backgrounds.
- `logo-3s-blanco.png` — the same mark with white ink and the leaf in
  the isotype green, for dark panels.

The header and footer switch between them by CSS depending on whether
the header is floating over the hero or has gone solid, and depending
on the site's color theme. **Once the client's vector logo arrives,
swap those two files and nothing else needs to change.**

## Fonts

Self-hosted, not a single call to Google Fonts. **Chivo Variable** for
headings and **IBM Plex Sans Variable** for body copy, loaded from
`node_modules` and emitted by Astro with a hash. Only the `latin`
subset is declared, which fully covers Spanish and Portuguese: two
`.woff2` files in the build instead of nine.

## Pages

Every route exists in all three languages: Spanish at the root with no
prefix, Portuguese under `/pt`, English under `/en`.

| Route | What it is |
| --- | --- |
| `/` | The full landing page, twelve sections |
| `/productos` | Catalog of all 19, filterable by family |
| `/productos/[slug]` | One page per product: 19 indexable URLs |
| `/gracias` | Confirmation after submitting the form, excluded from the index |
| `/politica-privacidad` | Privacy policy, editable at `content.es.ts → privacidad` |
| `/404` | Error page, excluded from Google's index |

Product pages are generated automatically with `getStaticPaths` from
`products.ts`: adding a product there creates its page, its catalog
entry, its row in the homepage table, and its sitemap URL. The `slug`
is the URL, so **it's best not to change it after launch**: that
breaks the link and drops any ranking it built up.

## Missing (see `plan.md`)

- Phase 6: Lighthouse audit and deployment
- Phase 7: Brazilian Portuguese and US English

## The form

Lives in `src/components/sections/FormPresupuesto.astro` and appears
on the homepage and on every product page — there, with the product
already preselected in the dropdown.

**For it to submit, you need to configure the access key.** Go to
https://web3forms.com, enter the email where you want to receive
requests, confirm the email you get, copy the key, and paste it into
`.env` as `PUBLIC_WEB3FORMS_KEY`. When deploying, load that same
variable in the Cloudflare Pages or Netlify dashboard: without it the
form shows a notice and doesn't submit.

**To switch providers**, set `proveedor: 'formspree'` in
`config.formulario` and fill in its endpoint under
`endpoints.formspree`. The component itself doesn't change.

It has four visible states: normal, submitting (disabled button,
spinner, and `aria-busy`), success (redirects to `/gracias`), and
error (a box with `role="alert"`, the button switches to "Retry
submission," and **nothing the person typed gets lost**). Validation
runs client-side before submitting, flags fields with `aria-invalid`,
shows the message under each one, and moves focus to the first failing
field.

The antispam honeypot field is `sitio_web`, defined at
`config.formulario.honeypot`: it sits outside the visible area and
outside tab order, so a person never touches it. If it comes back
filled in, the submission is discarded before it ever reaches the
network.

## Search engine markup

Every page emits `Organization` and `LocalBusiness`. The homepage adds
`FAQPage`, built from the same array that renders the accordion: it
can't drift out of sync with what the user sees, which is exactly what
Google requires. The catalog emits `ItemList` and `BreadcrumbList`;
each product page emits `Product` with its specs as
`additionalProperty`, plus its own `BreadcrumbList`.

`Product` doesn't emit `offers` while prices stay hidden. Google
requires real `price` and `priceCurrency` values inside `offers`, and
publishing a made-up price to get the rich-result snippet is grounds
for a manual action on the domain.
