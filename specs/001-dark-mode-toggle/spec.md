# Feature Specification: Dark Mode Toggle and Preference

**Feature Branch**: `001-dark-mode-toggle`  
**Created**: 2025-10-09  
**Status**: Draft  
**Input**: User description: "I want to add a dark mode to this website. The default color scheme should match the users preferences, and there should be a toggle in the navbar to the right of \"SHAWA.DEV\", matching the size and weight of the orb to the left of the title. Use a tailwind-first recommended approach"

## User Scenarios & Testing _(mandatory)_

<!--
  IMPORTANT: User stories should be PRIORITIZED as user journeys ordered by importance.
  Each user story/journey must be INDEPENDENTLY TESTABLE - meaning if you implement just ONE of them,
  you should still have a viable MVP (Minimum Viable Product) that delivers value.

  Assign priorities (P1, P2, P3, etc.) to each story, where P1 is the most critical.
  Think of each story as a standalone slice of functionality that can be:
  - Developed independently
  - Tested independently
  - Deployed independently
  - Demonstrated to users independently
-->

### User Story 1 - Respect system color preference (Priority: P1)

The site automatically loads in the color scheme that matches the visitor’s OS/browser preference.

**Why this priority**: Provides immediate, personalized experience without user action and aligns with accessibility expectations.

**Independent Test**: With system preference set to dark/light, load the homepage in a fresh session and verify the correct theme is applied with no flicker.

**Acceptance Scenarios**:

1. **Given** the visitor’s system prefers dark, **When** the site loads for the first time, **Then** the site renders in dark mode immediately (no flash of wrong theme).
2. **Given** the visitor’s system prefers light, **When** the site loads for the first time, **Then** the site renders in light mode immediately.

---

### User Story 2 - Toggle theme in navbar (Priority: P1)

A toggle control appears in the navbar to the right of "SHAWA.DEV" that lets visitors switch between light and dark modes.

**Why this priority**: Users may want to override their system setting; visibility in the navbar supports quick access and discoverability.

**Independent Test**: Click the toggle and observe immediate theme change across the page; the control’s size/weight matches the left orb for visual balance.

**Acceptance Scenarios**:

1. **Given** the site is in light mode, **When** the visitor activates the toggle, **Then** the site switches to dark mode instantly.
2. **Given** the site is in dark mode, **When** the visitor activates the toggle, **Then** the site switches to light mode instantly.
3. **Given** the navbar layout, **When** the toggle is placed, **Then** it appears to the right of "SHAWA.DEV" and visually matches the orb’s size/weight.

---

### User Story 3 - Persist visitor preference (Priority: P2)

The visitor’s theme selection is remembered for subsequent visits, overriding system preference until changed.

**Why this priority**: Avoids re-toggling and creates a consistent experience across visits.

**Independent Test**: Toggle theme, reload the page, verify the theme persists and still avoids flicker.

**Acceptance Scenarios**:

1. **Given** a visitor selects dark mode, **When** they reload or return later, **Then** the site loads in dark mode regardless of system setting.
2. **Given** a visitor resets to light mode, **When** they reload or return later, **Then** the site loads in light mode regardless of system setting.

---

### Edge Cases

<!--
  ACTION REQUIRED: The content in this section represents placeholders.
  Fill them out with the right edge cases.
-->

- JavaScript disabled: The site should still honor system preference using CSS-only defaults.
- Initial render flicker: Avoid flash of incorrect theme on first paint.
- Mobile navbar: Ensure toggle placement remains accessible and does not break layout.
- Reduced motion preference: Toggle animation (if any) must respect reduced motion preferences.

## Requirements _(mandatory)_

<!--
  ACTION REQUIRED: The content in this section represents placeholders.
  Fill them out with the right functional requirements.
-->

### Functional Requirements

- **FR-001**: The site MUST default to the visitor’s system color scheme on first visit.
- **FR-002**: A theme toggle MUST be present in the navbar to the right of "SHAWA.DEV".
- **FR-003**: The toggle MUST visually match the orb’s apparent size and weight for balance.
- **FR-004**: Theme changes MUST apply instantly across all visible content.
- **FR-005**: The chosen theme MUST persist across reloads and future visits until changed by the visitor.
- **FR-006**: The solution MUST prevent theme flash (FOUC/FART) on initial load.
- **FR-007**: The control MUST be accessible (focusable, labeled, keyboard-operable, discernible state).

### Constraints

- The feature MUST NOT introduce any server or backend functionality.
- The feature MUST remain deployable within the current static hosting process.
- The feature SHOULD avoid adding new libraries; any addition MUST be justified during planning and review.

### Key Entities _(if data involved)_

- **Theme Preference**: A stored value representing the visitor’s chosen theme, with possible values: `light`, `dark`, or `system` (implicit when no stored value).

## Success Criteria _(mandatory)_

<!--
  ACTION REQUIRED: Define measurable success criteria.
  These must be technology-agnostic and measurable.
-->

### Measurable Outcomes

- **SC-001**: On first visit, 100% of tested devices load with the correct theme matching system preference with no visible flash.
- **SC-002**: Toggle activation changes theme in under 100ms in lab tests on mid-range devices.
- **SC-003**: Preference persists reliably across at least 3 reloads and a new browser session.
- **SC-004**: Accessibility checks report an accessible name on the toggle and keyboard operation without trap; a11y score remains ≥ 90.
- **SC-005**: Overall page performance does not regress; performance score remains at or above current target on representative pages after the change.

## Assumptions & Dependencies

- The top navigation includes the title "SHAWA.DEV" with a decorative orb on the left; the layout can accommodate one additional control on the right.
- Visitors’ devices support indicating a color scheme preference; where unsupported, the default is light.
- Browsers can remember a simple preference between visits; persistence may not carry across private/incognito sessions.

## Scope & Non-Goals

- This feature does not redesign the navbar or site layout beyond adding the toggle.
- This feature does not change the brand palette beyond necessary dark-compatible adjustments.
- This feature does not introduce user accounts, personalization beyond theme, or any backend services.

## Constitution Gates Note

For each P1 story, include a short note in the plan/PR explaining:

- Accessibility compliance approach (WCAG 2.1 AA checks to run)
- Performance approach (SSG/ISR choice, bundle budget awareness)
- Dependency justification (if adding packages)
- Privacy/integrity considerations (no PII, asset licenses)
- Stack/patterns adherence (Pages Router, Tailwind utilities, Framer Motion only, components ≤ 200 LOC, hooks/utils extraction, data from `src/data/`).
- Deployment constraints: Static export (GitHub Pages). No SSR, no runtime API routes, no user accounts/sessions.
