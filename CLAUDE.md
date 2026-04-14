# Kubetail Docs

Astro + Starlight documentation site deployed to Cloudflare Pages.

## Project Structure

```
src/content/docs/           — English content (default locale, "root")
src/content/docs/<locale>/  — Translated content (ja, zh-cn, ko, de, es, pt, fr)
src/content/i18n/           — UI string overrides per locale (en.json, ja.json, zh-CN.json, ...)
src/assets/                 — Images (screenshots, logos)
src/components/             — Astro component overrides
src/styles/                 — Custom CSS
astro.config.mjs            — Starlight config, sidebar, locale definitions
```

## Local Development

```sh
pnpm install
pnpm dev        # dev server
pnpm build      # production build
pnpm preview    # build + wrangler dev (Cloudflare preview)
pnpm lint       # eslint
```

Always use `pnpm` (not npm/npx).

## Translations / i18n

Starlight uses `defaultLocale: "root"` — English files live at the content root, not in an `en/` subdirectory.

- **Page content**: English in `src/content/docs/<path>.mdx`, translations in `src/content/docs/<locale>/<path>.mdx`. Translated files must mirror the English path exactly.
- **UI strings**: `src/content/i18n/<locale>.json` overrides Starlight's built-in UI labels.
- **Sidebar labels**: Translated inline in `astro.config.mjs` via `translations` objects on each sidebar entry.
- **Supported locales**: en (root), zh-cn, ja, ko, de, es, pt, fr

When adding or renaming an English page, create the corresponding file in every locale directory. When editing English content, update translations to match.

## Commits

Use [conventional commit](https://www.conventionalcommits.org/) format: `<type>(<scope>): <description>`. Types: `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`. Description in imperative mood, lowercase, no period, under 72 chars. Always sign-off on commits (`-s`). Only add a "Co-authored-by" trailer if a human was not in the loop or if the user requested it.

## Pull Requests

PR titles should be capitalized, imperative mood, no conventional commit prefixes (e.g. "Add logging guide" not "docs: add logging guide"). Prefix PR titles with the correct emoji: 🎣 Bug fix, 🐋 New feature, 📜 Documentation, ✨ General improvement. Always use the repo's `.github/pull_request_template.md`.
