# rkvermaa.github.io

Personal site for Ravi Kumar Verma — Full-Stack AI Engineer.

Built with [Astro](https://astro.build) on the [astro-sienna](https://github.com/anjay-goel/astro-sienna) theme (MIT). Deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Running it

```bash
corepack enable        # once — pins pnpm to the version in package.json
pnpm install
pnpm dev               # http://localhost:4321
```

| Command | What it does |
| --- | --- |
| `pnpm dev` | Dev server with hot reload |
| `pnpm build` | `astro check` + production build + Pagefind index into `dist/` |
| `pnpm preview` | Serve the built `dist/` locally |
| `pnpm check` | Type-check only — fast feedback while editing data files |
| `pnpm format` | Biome + Prettier |

## Where the content lives

Everything editable is plain data. No component needs touching to change what the site says.

| File | Holds |
| --- | --- |
| `src/site.config.ts` | Name, tagline, email, phone, social links, home-page intro, nav tree, Web3Forms key |
| `src/data/experience.ts` | Work history |
| `src/data/projects.ts` | Project list (`featured: true` surfaces it on the home page) |
| `src/data/skills.ts` | Skill groups |
| `src/data/credentials.ts` | Certifications and publications |
| `src/data/education.ts` | Degrees |
| `src/data/writing.ts` | Outbound links to articles published elsewhere |
| `src/content/page/about.md` | The About page prose |
| `public/cv.pdf` | Downloadable résumé |

Two sections hide themselves — from both the nav and the home page — while their data file is empty: **Projects** and **Writing**. Add an entry and they reappear.

`pnpm check` validates the data files at compile time, so a typo in a field name fails the build rather than rendering blank.

## Links and the base path

Astro does not rewrite raw `href` strings. Internal links must go through the helpers:

```astro
<a href={withBase("/cv.pdf")}>Résumé</a>              <!-- correct -->
<a href="/cv.pdf">Résumé</a>                          <!-- breaks under a base path -->
```

Use `absoluteUrl(path, Astro.site)` for canonical URLs, OG tags and schema. The site serves from the domain root, but the deploy workflow derives `BASE_PATH` automatically, so this keeps working if it ever moves to a subpath. To test a subpath build:

```bash
BASE_PATH=/portfolio pnpm build && pnpm preview
```

## Deployment

`.github/workflows/deploy.yml` builds and publishes on every push to `main`. GitHub Pages must be set to **Source: GitHub Actions** (Settings → Pages), not "Deploy from a branch".

`pnpm-lock.yaml` is committed and CI installs with `--frozen-lockfile`. Any `package.json` change needs a local `pnpm install` and the regenerated lockfile in the same commit.

## Contact form

Powered by [Web3Forms](https://web3forms.com). The access key in `src/site.config.ts` is a publishable client-side key — it names the destination inbox, not the sender, and ships in the built HTML by design. Rotate it at web3forms.com if it starts attracting spam. A hidden `botcheck` honeypot field filters most bots.

## History

The previous version of this site was a Python FastHTML app that rendered into a committed `docs/` folder. It's preserved on the `legacy-fasthtml` branch and the `v0-fasthtml` tag.

The theme is tracked as a git remote, so upstream fixes can be pulled in:

```bash
git config merge.ours.driver true      # once per clone; see .gitattributes
git remote add theme https://github.com/anjay-goel/astro-sienna.git
git fetch theme && git merge theme/main
```

The theme's blog machinery (post collection, tags, RSS, per-post OG images, Giscus, webmentions) was removed since writing lives elsewhere. To bring it back:

```bash
git checkout theme/main -- src/pages/posts src/pages/tags src/pages/rss.xml.ts \
  src/pages/og-image src/layouts/BlogPost.astro src/components/blog src/data/post.ts
```

…then restore the `post` collection in `src/content.config.ts`.

## Licence

Theme: MIT © astro-sienna contributors — see `LICENSE`.
Site content and copy: © Ravi Kumar Verma.
