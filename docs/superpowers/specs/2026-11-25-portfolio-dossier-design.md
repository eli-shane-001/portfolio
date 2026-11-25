# Portfolio redesign — dossier for recruiters

Date: 2026-11-25
Status: approved, in progress

## Intent and why

The site is a personal portfolio for a NetSuite developer, linked from applications, CVs and LinkedIn.
The audience is **recruiters**: they skim for role, years, stack and location in about 20 seconds, then
forward or print the link. A second audience (hiring managers, NetSuite peers) reads the same page for
evidence.

The prior design was a dark glass-card portfolio: gradient background, one border radius, one soft
shadow on every block, teal accent, and a tagline built from middle-dot-separated meta
(`SuiteScript 2.1 · Map/Reduce · RESTlets`). That is the generic generated-portfolio shape. It was
replaced because it failed the audience, not because it was ugly: cards cost vertical space, hide
density a skimming recruiter needs, and print badly.

## Goals

- Role, years, stack, location and availability readable in the first screen.
- Dense, scannable records: when / what / where aligned so the eye runs down one column.
- Printable to a clean one-document CV.
- Light and dark themes that follow the OS and can be toggled, with the toggle actually working.
- Accessible: WCAG AA contrast, keyboard focus, reduced motion respected.
- Builds and lints clean under `output: "export"` with `basePath: /portfolio`.

## Non-goals

- No new runtime dependencies.
- No content rewrite. Every claim stays as already vetted in `src/data/content.ts`; placeholders
  (`[[N]]`, `[[TODO: …]]`) stay visible.
- No animation beyond a subtle hover/focus change. No scroll reveals, no entrance sequences.
- No photo or headshot: none exists, and inventing one is not acceptable.
- No contact form.

## Anti-goals

A page that looks like a template with a new palette. Specifically avoided:
identical rounded cards, one shadow for every block, middle-dot meta strings, all-caps eyebrows above
every heading, tinted near-black standing in for black, numbered markers where nothing is sequential.

## Constraints

- Next.js 15 App Router, static export, `basePath: /portfolio`. No server runtime.
- Tailwind 4 with `@theme inline`; tokens must live in `globals.css`.
- Fonts come from `next/font/google` (built into Next, not a new dependency).
- `next.config.ts`, the deploy workflow and the resume PDF are untouched.

## Approaches considered

1. **Dossier / editorial document** (chosen). Left rail for identity and keywords, right column for
   dated records separated by hairline rules. Density is the feature; prints as a CV.
   Cost: restrained, fewer "wow" signals; relies on typography rather than filters and light effects.
2. **Single-column timeline.** Simpler, more mobile-native, but wastes desktop width and pushes
   location, availability and skills below the fold — the opposite of what a recruiter needs.
3. **Interactive NetSuite-themed visualisation** (record flows, integration diagram). Most distinctive,
   but the ZATCA and SAP bullets still contain `[[TODO]]` placeholders, so a diagram would advertise
   the gaps. Rejected until the content is filled in.

## Tokens

| token | light | dark | role |
|---|---|---|---|
| `--paper` | `#FBFAF8` | `#14181D` | page background |
| `--ink` | `#16202E` | `#E8E6E1` | body text |
| `--ink-soft` | `#5A6473` | `#9AA3AD` | meta, dates |
| `--rule` | `#D9DCE1` | `#2A3138` | hairlines |
| `--accent` | `#8C2F39` | `#E0919A` | links, availability dot, mark |
| `--rail` | `#F3F4F6` | `#191E24` | left rail fill |

Oxblood accent: red ink is the accountant's mark, and NetSuite is accounting software. It comes from
the subject rather than a generic palette.

**Type:** Newsreader for display and body (17 px / 28 px); Archivo for dates, labels and tabular
figures. Two clearly distinct families. Both through `next/font/google`.

## Layout

Desktop: sticky 260 px rail, `1fr` records column, 1040 px max width, 64 px gap, 1 px rules between
records. Dates in their own tabular column. Below 860 px: single column, dates above each record,
rail becomes a plain header block.

## Decisions I made

- Serif body (Newsreader). More distinctive than a sans; the page reads as a document, which is the
  point. Flagged to the user as the riskier choice; they approved without objection.
- Theming switches to `class` attribute on `<html>` so the existing `next-themes` toggle works.
  `@media (prefers-color-scheme)` becomes a fallback only, `enableSystem` keeps OS default.
- `Providers` is finally rendered in `layout.tsx`, fixing the inert toggle.
- Skills render as a plain comma-separated line in the rail, not pills — pills are the card tell in
  miniature and cost vertical space.

## Left to the builder

- Exact type scale and rule spacing.
- Whether the rail shows "Selected work" in-page or as anchor links only.
- Print stylesheet specifics (page margins, link expansion).
