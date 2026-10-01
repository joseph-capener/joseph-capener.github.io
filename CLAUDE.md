# joseph-capener.github.io

Public portfolio for Joseph Capener, served by GitHub Pages at https://joseph-capener.github.io/.

## Decisions
- Source lives in this repo. Do not create a separate source repo that pushes built output here.
- Stack: Astro (static), content collection of project case studies in `src/content/projects/`.
- Deploy: `.github/workflows/deploy.yml` builds on push to `main` and publishes `dist/`. Pages source must be set to "GitHub Actions" (it was "Deploy from a branch"). Never commit `dist/`.
- Hosting stays on GitHub Pages with the default domain. No Forgejo mirror.
- Scope: portfolio (Home, About, Projects, Contact). Writing section is deferred.
- No autoplay audio. The old Halo music and stray .drawio were removed (still in git history).
- Only link public repos from project pages. Entries with `draft: true` are not published.

## Commands
- Node comes from nvm: `. ~/.nvm/nvm.sh && nvm use --lts`
- `npm run dev` listens on the LAN (port 4321) so it can be viewed from another machine; `npm run build` / `npm run preview`

## Open items
- About and Contact pages contain TODOs for Joseph's own text.
- Case studies still to write (see Notion "Phase 5 — Portfolio Website").
