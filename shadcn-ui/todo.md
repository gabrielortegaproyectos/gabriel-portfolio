# Personal Website - Gabriel Ortega Hernández

## Design Guidelines

### Design References
- **GitHub / Anaconda**: Scrollytelling, sticky sections, immersive storytelling.
- **Bento.me / Linktree**: Modular, grid-based layout (Bento Grid) - *Retained for sub-pages*.
- **Style**: "Show, don't just tell" - Interactive, clean, data-driven.

### Color Palette
- **Background**: #09090b (Zinc 950 - Deep Black)
- **Card Background**: #18181b (Zinc 900)
- **Border**: #27272a (Zinc 800)
- **Primary Accent**: #3b82f6 (Blue 500 - for ML/Tech)
- **Secondary Accent**: #8b5cf6 (Violet 500 - for Education/Research)
- **Text**: #fafafa (Zinc 50 - Primary), #a1a1aa (Zinc 400 - Secondary)

---

## Development Tasks

1.  **Refactor to Multi-page Layout** (Completed)
    - [x] Create `Navbar` component.
    - [x] Create `Layout` component (Navbar + Outlet).
    - [x] Create `Home` page (Hero + Profile).
    - [x] Create `Resume` page (Experience, Education, Skills).
    - [x] Create `Portfolio` page (Interactive Demo).
    - [x] Create `Blog` page (Publications).
    - [x] Update `App.tsx` with `react-router-dom` routes.

2.  **Components Construction** (Completed)
    - [x] `src/components/ui/bento-grid.tsx`
    - [x] `src/components/ProfileCard.tsx`
    - [x] `src/components/ExperienceCard.tsx`
    - [x] `src/components/EducationCard.tsx`
    - [x] `src/components/SkillsCard.tsx`
    - [x] `src/components/PublicationsCard.tsx`
    - [x] `src/components/InteractiveDemo.tsx`

3.  **Home Page Redesign (Scrollytelling)**
    - [ ] Install `framer-motion`.
    - [ ] Create `StickyScroll` component (`src/components/ui/sticky-scroll-reveal.tsx`).
    - [ ] Redesign `src/pages/Home.tsx` with immersive hero and sticky scroll section.
    - [ ] Add "Call to Action" footer in Home.

4.  **Styling & Polish**
    - [x] Apply global dark mode in `index.css`.
    - [x] Add subtle hover effects and transitions.
    - [x] Final UI check.