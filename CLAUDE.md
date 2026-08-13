# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`kearisp` is a personal npm workspace: a Vite/React app in root `src/`, plus three git submodules under
`packages/*`: `motor-js` (3D/geometry engine, no React), `react-canny` (Canny.io wrapper), `react-compose-form`
(form library on `react-hook-form`, used by the root app). Submodule changes are committed from inside
`packages/<name>`, not the root repo.

## Commands

Run everything through `ws exec` (wocker wrapper) from the repo root. App served at `https://kearisp.workspace/`.

```bash
ws exec npm start                    # dev server + watch all packages (vite + tsc --watch × 3)
ws exec npm run build                # vite build -> build/, then build/index.html -> build/404.html
ws exec npm run build:<pkg>          # motor-js | react-canny | react-compose-form
ws exec npm test                     # runs test:form (only package with a real suite)
ws exec npm exec -w react-compose-form -- vitest run src/__tests__/FormControl.test.tsx   # single test
ws exec npm exec -w react-compose-form -- vitest run -t "test name"                        # by name
```

No lint script in any package.

## Architecture

`src/views/` is organized by role, each with its own `index.ts` barrel:

- **`fields/`** — dumb controlled inputs (`value`/`onChange`/`onBlur`, `FormFieldProps`), e.g. `InputField`.
- **`controls/`** — same field wired to a form via `react-compose-form`'s `<FormControl as={...} />`, e.g.
  `InputControl` wraps `InputField`. New form input = raw component in `fields/` + thin `controls/` wrapper.
- **`blocks/`** — standalone UI (`Form`, `FormSubmit`, `LoadingScreen`, `Switch`). `Form` wraps
  `react-hook-form`'s `useForm`/`FormProvider`, exposing `getValues`/`setValue`/`reset` via `forwardRef`.
- **`layouts/`**, **`pages/`** — page shells and route components (`pages/index.tsx` lazy-loads each page).

Notes:
- Routes centralized in `src/env.ts` (`ROUTES`); `src/` is path-aliased to itself (Vite + tsconfig).
- Dark mode (`src/hooks/useTheme.ts`) and i18n (`src/i18n/index.ts`) both persist to `localStorage`
  (`theme`/`lang`); i18n namespaces must be registered explicitly there.
- `fodec.json` + `npm run fodec:build` generates fonts/locale JSON from `src/fonts/` — don't hand-edit the output.