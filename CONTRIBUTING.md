# Contributing

🇪🇸 [Leer en español](CONTRIBUTING.es.md)

Thanks for helping out with the 3S Grupo Industrial site. This is a
small, static, zero-backend Astro project — the bar for contributing is
low, but a few conventions keep the codebase consistent as more people
touch it. Read this before opening a PR.

For what the project *is* and how it's organized, start with the
[README](README.md).

## Getting set up

```bash
git clone git@github.com:TortillaPy/grupo3s.git
cd grupo3s
npm install
cp .env.example .env     # fill in PUBLIC_WEB3FORMS_KEY, see README
npm run dev               # http://localhost:4321
```

You'll need Node.js 18+ and npm. There's no database, no API keys
besides the form provider's, and no external services to mock.

## Ground rules for this codebase

These aren't style preferences — they're patterns the project already
depends on. Breaking them either fails the build (TypeScript catches
it) or quietly reintroduces a bug that was already fixed once.

### 1. Content lives in `src/data/`, never in markup

No component has copy hardcoded in its template. If you're adding or
changing user-facing text, it goes in `content.es.ts` (and its `.pt`
and `.en` counterparts — see next point), not inline in a `.astro`
file.

### 2. The site is trilingual, and TypeScript enforces it

`src/data/content.es.ts`, `content.pt.ts`, and `content.en.ts` all
implement the same `Contenido` type (`src/data/types.ts`). If you add,
rename, or remove a content key, you must do it in **all three files**
in the same PR, or `npm run build` fails at the type-check step before
it ever touches the build. Spanish is the source of truth — when in
doubt about wording, write the Spanish first and translate from that.

Don't translate product names or `slug`s: they're the same across all
three languages by design (see the README's "Languages" section for
why).

### 3. Colors and spacing come from design tokens, not literals

Every brand color is a CSS custom property declared once in
`src/styles/global.css`, inside the `@theme` block, and consumed
through Tailwind utilities generated from it (`bg-hueso`,
`text-grafito`, `text-verde-oscuro`, …). Don't reach for a raw Tailwind
palette color (`bg-white`, `text-gray-500`, arbitrary hex values) for
anything that should look "on-brand" or that appears on a normal page
surface — it will look inconsistent, and it will silently break in
dark mode, since only the token-based utilities are dark-mode aware.

Two exceptions exist and are commented where you'll find them: colors
used on the permanently-dark panels (hero, footer's dark logo, the
gallery lightbox) are pinned with a literal value on purpose, because
those panels don't change between light and dark theme. If you're
adding a new one of these, follow the existing pattern and leave a
comment explaining *why* it's pinned — future-you (or the next person)
needs that context to avoid "fixing" it back into a token.

### 4. Dark mode is token-driven — don't hand-roll `dark:` classes for brand colors

If a color is already a token (`--color-*` in `global.css`), it either
already has a `.dark` override or intentionally doesn't (because it's
one of the fixed dark-panel colors above). Adding a component-level
`dark:bg-...` override for a color that's already a token is almost
always wrong — it means the token's dark value is wrong, and the fix
belongs in `global.css`, not scattered across components. The one
legitimate place for a `dark:bg-[...]` override is a filled button or
panel whose token got lightened for its *text* role in dark mode and
now needs its *solid-fill* role pinned back — that pattern is
documented in `Button.astro` and `Section.astro`.

### 5. Accessibility is load-bearing, not decorative

This project ships Lighthouse 100 on accessibility, and comments in
the code exist specifically to keep it that way — contrast ratios are
computed and written down next to the color they justify. If you touch
a text color, a focus style, or an interactive element:

- Keep body text at 4.5:1 contrast minimum against its background
  (AA). If you're not sure, compute it — don't eyeball it.
- Never remove `:focus-visible` styling. If a component needs a custom
  focus treatment (e.g. on a dark panel), follow the existing
  `.bg-carbon :focus-visible` pattern instead of dropping the outline.
- Every interactive element needs an accessible name (`aria-label`,
  visible text, or `sr-only` text) — not just a color or an icon.
- Respect `prefers-reduced-motion`. Animations should disable, not
  just shorten.

### 6. Images go through `src/assets/images/`, not `public/`

Anything referenced from `src/assets/images/` gets processed by
Astro's image pipeline (responsive WebP, explicit `width`/`height`, no
layout shift). `public/` is only for files that must be served
byte-for-byte as-is (favicon, `robots.txt`, the Open Graph image). See
the README's "Images" section for naming and cropping conventions
before adding new product photos.

### 7. Comments explain *why*, not *what*

The codebase's comment style is deliberate: a comment exists only when
the code's intent isn't obvious from reading it — a constraint, a
tradeoff, a number that looks arbitrary but isn't. Don't add comments
that restate what the code already says, and don't leave a
non-obvious decision unexplained either.

### 8. Don't add a dependency to save a few lines

This is a static site with an explicit goal of near-zero JavaScript
and no backend. Before adding an npm package, check whether the
problem is small enough to solve with a few lines of vanilla
TypeScript or CSS — that's almost always been the right call so far.
If you do need a dependency, explain why in the PR description.

## Git workflow

- Hosting: Vercel is development (integration branch and stage previews); Cloudflare is production (main only after final approval). Verify these settings in each provider.
- `main` is production; `development` is the integration branch (also called “dev”).
- Start every stage from updated `development`, using `codex/NN-short-description`.
- Never commit directly to `main` or `development`. Open one focused PR per stage targeting `development`.
- Present changes and validation, then wait for explicit approval before merging each stage. Create the next branch from updated `development` after the approved merge.
- Use commit messages such as `feat:`, `fix:`, `docs:` or `refactor:` with a clear summary.
- Verify hosting branch settings before pushing. Stage previews must be isolated from production; do not run `npm run deploy` during development stages.
- After all stages pass integrated review and receive final approval, open the release PR from `development` to `main`, merge and deploy. Stage approval alone does not authorize production deployment.
- Verify the deployed commit and create a backup tag before starting. Preserve existing branches and uncommitted work.
- See [CLAUDE.md](CLAUDE.md) and the [implementation plan](docs/IMPLEMENTATION_PLAN.md).

## Before opening a PR

Run through this list; most of it is one command:

```bash
npm run build   # runs astro check (types) + the static build — must pass with 0 errors
```

- [ ] `npm run build` passes with no errors or new warnings.
- [ ] If you touched content: all three languages (`content.es.ts`,
      `content.pt.ts`, `content.en.ts`) were updated together.
- [ ] If you touched a color, background, or anything visual: checked
      it in **both** light and dark mode (`npm run dev`, toggle with
      the header button).
- [ ] If you touched a form, a link, or navigation: clicked through it
      manually — type-checking doesn't catch a broken `href` or a
      dead anchor.
- [ ] If you added an image: it's in `src/assets/images/`, not
      `public/`, and follows the existing naming/cropping conventions.
- [ ] No new npm dependency without a reason in the PR description.

There's no test suite yet — `npm run build`'s type-check plus a manual
pass through the affected pages is the current bar. If you're adding
something that's genuinely hard to verify by hand, say so in the PR
description rather than skipping the check silently.

## Reporting bugs or proposing changes

Open a GitHub issue with:

- What you expected vs. what happened.
- The page/route and, if visual, a screenshot (light **and** dark mode
  if the bug is theme-related — most reported dark-mode bugs so far
  have been exactly this: a component that renders fine in light mode
  but uses a raw color instead of a token).
- Browser/device if it's rendering-specific.

For a new feature or a larger change, open an issue first to agree on
the approach before investing time in a PR — this is a small,
opinionated codebase, and it's easier to align on direction before
code exists than after.

## Conduct

Be direct and be kind — those aren't in tension. Disagree about the
code, not about the person. This is a small commercial project with a
real client and a real deadline behind it; keep feedback constructive
and scoped to what's in front of you.
