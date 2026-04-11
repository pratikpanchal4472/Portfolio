# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # start dev server (Vite HMR)
npm run build        # production build → dist/
npm run preview      # serve production build locally
npm run lint         # ESLint
npm run test         # Vitest in watch mode
npm run test:run     # Vitest single run (CI)
```

Run a single test file:
```bash
npx vitest run src/components/sections/Hero.test.jsx
```

Coverage (80% threshold enforced on lines/functions/branches/statements):
```bash
npx vitest run --coverage
```

## Architecture

### Rendering model — two-layer compositing

The entire UI is built as two layers that sit at different z-indices:

1. **`Scene.jsx` (z-index 0)** — a single fixed-position `<Canvas>` that covers the full viewport for the entire app lifetime. All seven R3F scenes are mounted simultaneously inside it. Each scene reads `activeSection` from Zustand and lerps its `scale` to 0 (hidden) or 1 (visible), so transitions are smooth without unmounting geometry.

2. **Scroll container (z-index 10+)** — standard DOM sections with `pointer-events: none` on the wrapper, selectively re-enabled on interactive elements. Framer Motion handles UI animation.

### Scroll → section detection

`useScrollSection(refs)` attaches an `IntersectionObserver` (threshold 0.5) to each section ref. When a section crosses 50% visibility it calls `setActiveSection(index)` on the Zustand store. The store also tracks `mousePos` (normalised −1…1) for parallax in HeroScene.

### Section index map

| Index | Section       | Canvas scene      |
|-------|---------------|-------------------|
| 0     | Hero          | HeroScene         |
| 1     | About         | AboutScene        |
| 2     | Skills        | SkillsScene       |
| 3     | Experience    | ExperienceScene   |
| 4     | Projects      | ProjectsScene     |
| 5     | Certifications| CertsScene        |
| 6     | Contact       | ContactScene      |

Adding a new section requires: new index in this sequence, a new ref in `App.jsx`, a new `<section>` in the scroll container, a new canvas scene component in `Scene.jsx`, and checking `activeSection === N` inside that scene's `useFrame`.

### Data layer

All resume content lives in `src/data/resume.js` (plain JS exports — no API). UI and 3D scenes import from here directly. `heroTechCards` drives the floating hex badges in HeroScene; updating that array is all that's needed to add/remove hero cards.

### Canvas scenes pattern

Each `*Scene.jsx` follows the same structure:
- `groupRef` + `scaleTarget` ref for lerped show/hide
- `useFrame` reads `useSceneStore.getState()` (not reactive subscription — avoids re-render) and drives animation imperatively
- Lights are declared inside the group so they only affect that scene's geometry

### Testing

Canvas components (`src/components/canvas/**`) are excluded from coverage. Tests use jsdom + `@testing-library/react`. Setup file is `src/test/setup.js`.
