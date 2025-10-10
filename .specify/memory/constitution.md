<!--
Sync Impact Report
- Version change: 1.0.0 → 1.1.0
- Modified principles/sections:
	• Additional Constraints & Standards: clarified static deployment on GitHub Pages, no backend/users, export requirements
	• Development Workflow & Quality Gates: clarified checks for static export and forbidden SSR/API usage
- Added sections: None
- Removed sections: None
- Templates requiring updates:
	✅ .specify/templates/plan-template.md (Deployment guardrails for static export)
	✅ .specify/templates/spec-template.md (No backend/API reminder)
	✅ .specify/templates/tasks-template.md (Export verification tasks)
- Follow-up TODOs: None
-->

# Portfolio 23 Constitution

## Core Principles

### I. Accessibility-First (NON-NEGOTIABLE)

- Conform to WCAG 2.1 AA for all UI. Keyboard navigation and visible focus states are REQUIRED.
- Use semantic HTML; prefer native elements before ARIA. ARIA MAY be used only to supplement semantics.
- Color contrast ratio MUST be ≥ 4.5:1 for body text and ≥ 3:1 for large text/icons.
- All meaningful images MUST have descriptive alt text; decorative images MUST use empty alt ("").
- Automated a11y checks (e.g., Lighthouse or axe) MUST score ≥ 90 on pages added/changed.
  Rationale: Accessibility is essential for an inclusive and professional portfolio.

### II. Static-First Performance

- Prefer Static Site Generation (SSG) and incremental static regeneration; avoid runtime SSR unless strictly required.
- Use `next/image` with responsive sizes; prefer modern formats (WebP/AVIF) and optimize assets in `public/`.
- Bundle budgets: per-page JS ≤ 150 KB gzipped; total app JS ≤ 200 KB gzipped (excluding Next runtime). Document exceptions.
- Defer/async non-critical scripts; eliminate unused dependencies and code.
- Lighthouse Performance score MUST be ≥ 90 on representative pages.
  Rationale: A portfolio must load fast globally and work well even on constrained networks.

### III. Simplicity & Minimal Dependencies

- Keep the dependency set lean; each new package MUST have clear justification and measurable value.
- Avoid premature abstractions; co-locate components and styles; favor small, pure components.
- Use React state/hooks; avoid global state libraries unless a concrete need is demonstrated.
- Prefer configuration over code where possible (e.g., `next.config.js`, Tailwind utilities).
  Rationale: Simpler code is easier to maintain and less error-prone.

### IV. Content Integrity & Privacy

- Do not collect PII. Do not add analytics/tracking without explicit consent and a clear purpose.
- Never commit secrets; use environment variables for any API keys and restrict their scope/domains.
- Use only licensed assets (fonts, images, icons); keep a local copy in `public/` when feasible.
- Respect user privacy headers; do not fingerprint or store user-specific data.
  Rationale: Trust and integrity underpin a personal site.

### V. Quality Gates & Consistency

- TypeScript MUST compile with zero errors. Prefer `strict` mode enabled in `tsconfig.json`.
- ESLint (`npm run lint`) MUST pass with no errors. Prettier formatting MUST be applied.
- All PRs MUST demonstrate compliance with Principles I–IV (notes in plan/spec) and pass build.
- Visual/regression checks: verify layout across mobile/desktop for changed pages/components.
  Rationale: Consistent quality ensures reliable delivery and maintainability.

## Additional Constraints & Standards

- Router: Use Next.js Pages Router. Do NOT migrate to App Router without a MINOR/MAJOR governance update.
- Styling: Tailwind CSS ONLY for styling; prefer utility-first approach over custom CSS. Keep styles co-located.
- Animations: Framer Motion is the ONLY animation library permitted; avoid adding additional animation libs.
- Components: Keep components lean with a soft budget of ≤ 200 LOC per file; extract hooks (`src/hooks/`) and utils (`src/utils/`) to maintain clarity.
- Data: Import content/data from `src/data/` where applicable. Keep presentation components free of data fetching.
- SEO: Pages MUST define title and meta description; provide Open Graph and Twitter card tags for shareable pages.
- Assets: Provide appropriate favicons, `site.webmanifest`, and optimized images (already present under `public/`).
- Internationalization: Not required at present.
- Deployment: Statically deployed to GitHub Pages via a GitHub Action.
  - All pages MUST be statically exportable (`next export`), and no server runtime is allowed.
  - Prohibited: `getServerSideProps`, custom server, API routes for runtime use, user sessions, cookies-based personalization.
  - Configure Next for static export; if using `next/image`, set `images.unoptimized: true` or avoid features that require the image optimizer.
  - For user/organization sites (this repo), `basePath`/`assetPrefix` not required; for project sites, configure them accordingly.
- Users/Backend: There are no user accounts and no backend. Do not introduce authentication or persistence.
- Performance/Accessibility Budgets: If a feature risks breaching budgets, document rationale and mitigation in the plan.
- Contact UX: Ensure an obvious, low-friction path to contact (e.g., prominent CTA, accessible form/modal) on key pages.

## Development Workflow & Quality Gates

- Branching: Use short-lived feature branches (e.g., `feat/...`, `fix/...`). Open a PR for review, even for solo work, to run checks.
- Required checks on PR:
  - Build completes without TypeScript errors (e.g., `next build`).
  - Lint passes (`npm run lint`).
  - Manual smoke and a11y spot-check on affected pages; attach a Lighthouse/Axe snapshot when feasible.
- Dependencies: List any new dependencies in the plan with justification mapped to Principles II/III.
- Post-merge: Avoid force-push to `main`. Revert commits if needed rather than rewriting history.

## Governance

- This constitution supersedes other informal practices for this repository.
- Amendments require a PR that:
  1.  summarizes the change and motivation,
  2.  increments the Constitution Version per SemVer,
  3.  updates dependent templates as needed, and
  4.  sets Last Amended to the PR merge date.
- Versioning policy for this constitution:
  - MAJOR: Backward-incompatible changes (remove/redefine principles).
  - MINOR: Add or materially expand principles/sections.
  - PATCH: Clarifications and wording changes only.
- Compliance review: Reviewers (or author for solo) MUST verify the PR description explains compliance with Principles I–V or documents exceptions.

**Version**: 1.1.0 | **Ratified**: 2025-10-09 | **Last Amended**: 2025-10-09
