# Portfolio Website — Design Spec
**Date:** 2026-04-09  
**Owner:** Pratik Panchal  
**Stack:** React + Vite, React Three Fiber, Tailwind CSS, Framer Motion, Zustand

---

## Overview

A static React portfolio website for Pratik Panchal — Principal Architect with 13+ years experience in AI/ML-native, cloud-native, and data engineering systems. The site uses React Three Fiber (R3F) for immersive 3D visuals with a **Dark Professional** aesthetic: slate dark backgrounds, blue (#60a5fa) and emerald (#34d399) glow accents, and a premium architectural feel.

---

## Visual Style

| Property | Value |
|---|---|
| Theme | Dark Professional |
| Background | `#0f172a` (slate-900) |
| Surface | `#1e293b` (slate-800) |
| Primary accent | `#60a5fa` (blue-400) |
| Secondary accent | `#34d399` (emerald-400) |
| Tertiary accent | `#a78bfa` (violet-400) |
| Text | `#f8fafc` (slate-50) |
| Muted text | `#94a3b8` (slate-400) |
| Typography | Inter (body), Fira Code (code/mono labels) |

---

## Architecture

### Single Canvas Approach
One persistent R3F `<Canvas>` is mounted as a **fixed background layer** (`position: fixed`, `z-index: 0`) that spans the full viewport. It never unmounts. The active section index (tracked in Zustand) drives scene transitions inside `useFrame` — no canvas teardown between sections.

HTML sections sit in a **scroll layer** (`z-index: 10`) with `scroll-snap-type: y mandatory`. Pointer events are disabled on the canvas so all DOM interactions work normally.

### State Bridge
A Zustand store (`sceneStore`) holds:
- `activeSection: number` — 0–6, updated by IntersectionObserver in `useScrollSection` hook
- `mousePos: {x, y}` — for parallax effects in hero

Scene components subscribe to `activeSection` and animate their geometry in/out using linear interpolation (`lerp`) inside `useFrame` — no extra spring library required. Meshes lerp their `scale`, `opacity`, and `position.y` between 0 (hidden) and 1 (visible) based on whether their section is active.

---

## Layout & Navigation

- **Scroll type:** `scroll-snap-type: y mandatory` — each section snaps to full viewport height
- **Dot navigation:** Fixed right-side column of 7 dots. Active dot glows blue. Click to scroll to section.
- **Top nav:** Floating monogram `PP` top-right + `Resume` download link. Glassmorphism background (`backdrop-filter: blur`), appears after first scroll.

---

## Sections

### 01 — Hero
**DOM content:** Name (`PRATIK PANCHAL`), title (`Principal Architect | AI/ML-Native Systems`), two CTAs — `View Work` (scrolls to Projects) and `Get In Touch` (scrolls to Contact).

**3D scene:** `HeroScene` — 8–12 floating 3D box/card meshes at varying depths representing tech domains: AWS, Kafka, Flink, ML/AI, Kubernetes, React, Python, Go. Each card has a text label via `<Text>` from Drei. Cards drift slowly with Perlin noise; mouse movement creates a subtle parallax push. Bloom post-processing adds glow to card edges.

### 02 — About
**DOM content:** Professional summary (2–3 sentences), 4 animated stat counters (13+ Years, 5 Industries, 10M+ Records Processed, 60% Cost Reduction).

**3D scene:** `AboutScene` — particle network of ~300 points connected by lines within a distance threshold. Slowly rotates. Transitions in by lerping from `scale: 0` to `scale: 1` as activeSection changes from 0 to 1 — hero cards simultaneously lerp out.

### 03 — Skills
**DOM content:** 6 skill category labels (Cloud & ML, Data Engineering, AI/ML & Vectors, Backend, Frontend, DevOps) with tag lists.

**3D scene:** `SkillsScene` — icosphere with skill nodes orbiting at different radii and speeds, colour-coded by category (blue = cloud, emerald = data, violet = AI). Hovering a DOM skill category highlights matching 3D nodes.

### 04 — Experience
**DOM content:** Vertical timeline list — 5 roles (Armakuni, Crest Data, Malbek, Revitas, Accenture) with dates, titles, and 2–3 bullet points each.

**3D scene:** `ExperienceScene` — a 3D ribbon/spline curving through space with glowing spherical nodes at each company position. Active role node pulses. Timeline scrolls as user reads.

### 05 — Projects
**DOM content:** 5 featured project cards with title, domain tags, key metric (e.g. "Cosine similarity >0.99 on 10M+ records"), and brief description.

**3D scene:** `ProjectsScene` — 5 floating 3D panels tilted at slight angles. Hover causes tilt toward cursor and blue glow intensification. Active card floats slightly forward.

### 06 — Certifications & Awards
**DOM content:** Two columns — Certifications list (7 items) and Awards list (5 items).

**3D scene:** `CertsScene` — ring of glowing 3D badge-like octahedra slowly rotating around a central axis. Each badge pulsates gently.

### 07 — Contact
**DOM content:** Email (`pnchlprtk@gmail.com`), LinkedIn link, phone, location (Ahmedabad, Gujarat). Simple layout, centered.

**3D scene:** `ContactScene` — 3–4 soft pulsing glow orbs at low opacity floating in the background. Minimal, calm close to the page.

---

## Component & File Structure

```
src/
  components/
    canvas/
      Scene.jsx              # Master R3F Canvas, mounts once, renders active sub-scene
      HeroScene.jsx          # Floating tech island cards
      AboutScene.jsx         # Particle network
      SkillsScene.jsx        # Orbiting skill sphere
      ExperienceScene.jsx    # 3D timeline ribbon
      ProjectsScene.jsx      # Floating 3D project panels
      CertsScene.jsx         # Rotating badge ring
      ContactScene.jsx       # Pulsing orbs
    sections/
      Hero.jsx
      About.jsx
      Skills.jsx
      Experience.jsx
      Projects.jsx
      Certifications.jsx
      Contact.jsx
    ui/
      DotNav.jsx             # Right-side dot navigation
      Navbar.jsx             # Floating top-right monogram + resume link
  hooks/
    useScrollSection.js      # IntersectionObserver → updates activeSection in store
    useIsMobile.js           # Custom hook: window.innerWidth < 768
  store/
    sceneStore.js            # Zustand: activeSection, mousePos
  data/
    resume.js                # All portfolio content as JS data (no hardcoded strings in components)
  App.jsx
  main.jsx
  index.css
```

---

## Data Layer

All portfolio content (name, summary, skills, experience, projects, certs, awards) lives in `src/data/resume.js` as exported JS objects/arrays. Sections import from this file — no content is hardcoded in components.

---

## Dependencies

```json
{
  "react": "^18",
  "react-dom": "^18",
  "@react-three/fiber": "^8",
  "@react-three/drei": "^9",
  "@react-three/postprocessing": "^2",
  "three": "^0.165",
  "framer-motion": "^11",
  "zustand": "^4",
  "tailwindcss": "^3"
}
```

Build tool: **Vite**. Output: static files deployable to GitHub Pages, Vercel, or Netlify.

---

## Performance Considerations

- Canvas pixel ratio capped at `Math.min(window.devicePixelRatio, 2)` to prevent high-DPI perf issues
- Scene components use `useFrame` conditionally — only animate when `activeSection` matches their index (±1 for transition blending)
- Bloom post-processing only enabled on desktop; disabled on mobile via a custom `useIsMobile` hook (`window.innerWidth < 768`)
- Particle counts halved on mobile: Hero 8→5 cards, About 300→150 particles

---

## Out of Scope

- Backend / form submission (contact section shows links only)
- CMS or dynamic content
- Authentication
- Dark/light mode toggle
