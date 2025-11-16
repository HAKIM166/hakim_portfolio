<!-- .github/copilot-instructions.md - guidance for AI coding agents -->
# Copilot instructions for this repository

Purpose: help an AI coding agent be immediately productive editing and extending this Next.js + Tailwind project.

**Project Overview**: This is a Next.js application using the App Router (`app/`) with React 19 and Next 16. The UI uses Tailwind CSS (v3) and fonts loaded via `next/font` in `app/layout.jsx`.

- **Entry points**: `app/layout.jsx` (global layout + fonts), `app/page.jsx` (home page). Static assets live in `public/`.
- **Styling**: `app/globals.css` imports Tailwind; `tailwind.config.js` lists `./app/**/*` and `./components/**/*` as content paths.
- **Linting**: ESLint configured in `eslint.config.mjs` and extends Next.js rules; several config/build files are explicitly ignored.

**How to run and verify changes**:
- Start dev server: `npm run dev` (Next dev on http://localhost:3000).
- Build for production: `npm run build` then `npm run start`.
- Lint: `npm run lint` (runs `eslint`).
- Alternatives noted in `README.md`: `yarn`, `pnpm`, or `bun` can be used in place of `npm` if preferred.

**Key patterns & conventions (project-specific)**
- This repo uses the Next.js App Router. Add pages as nested folders under `app/` (e.g. `app/about/page.jsx`).
- Global CSS lives in `app/globals.css`. Tailwind directives (`@tailwind base/components/utilities`) belong here.
- Fonts are loaded with `next/font/google` and exposed as CSS variables in `app/layout.jsx` (example: `--font-geist-sans`). Apply these variables on the root element.
- Tailwind classes are used directly in components (utility-first). The project contains dark-mode classes like `dark:bg-black` in `app/page.jsx` — prefer Tailwind utilities rather than custom classnames where possible.
- `components/` is included in Tailwind's `content` array; add re-usable UI pieces there so Tailwind will purge unused classes correctly.

**Files to check when making changes**
- `package.json` — scripts and framework versions (`next`, `react`).
- `next.config.mjs` — project-level Next options.
- `tailwind.config.js` — ensure new file locations are listed in `content` when adding custom directories.
- `eslint.config.mjs` — see `ignores` and Next.js rule set; update only when adding new build outputs.
- `app/layout.jsx`, `app/globals.css`, `app/page.jsx` — canonical examples of app-router pages and styling.

**Concrete examples**
- To add a new route: create `app/contact/page.jsx` exporting a React component. No router config required.
- To add a component: create `components/Header.jsx`, then import it in `app/layout.jsx` or a page. Tailwind will scan `components/` (see `tailwind.config.js`).
- To add a new Tailwind-safe file type or directory, update `tailwind.config.js` `content` array to include the path.

**AI agent behavior guidance (do this, not generic tips)**
- Keep changes small and local: edit `app/` files and test with `npm run dev` before broad refactors.
- Preserve existing CSS variables (`--font-geist-sans`, `--font-geist-mono`) when editing `layout.jsx` unless intentionally changing typography.
- When adding build or dev tooling, update `eslint.config.mjs` `ignores` only for generated outputs (e.g., add new build folders to avoid noisy linting).
- If adding new top-level directories, update `tailwind.config.js` `content` to avoid missing styles in production builds.
- Use the project's `package.json` scripts for run/build/lint commands rather than introducing new npm scripts unless strictly necessary.

If anything here is unclear or you want more detail (for example, explicit examples of a new page or component), tell me which area to expand and I'll update this document.
