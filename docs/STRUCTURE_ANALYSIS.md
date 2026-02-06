# Structure Analysis - Portfolio Curriculum

**Analysis Date**: February 3, 2026  
**Project**: Gabriel Ortega Hernández Portfolio Website  
**Analysis Type**: Structural & Organizational Review

---

## Directory Structure Overview

```
workspace/shadcn-ui/
├── public/                    # Static assets
│   ├── robots.txt            # SEO: Search engine crawling rules
│   └── assets/               # Images, profile photos (TBD)
├── src/                      # Application source code
│   ├── main.tsx              # Entry point
│   ├── App.tsx               # Root component with routing
│   ├── index.css             # Global styles + Tailwind base
│   ├── App.css               # Additional global styles
│   ├── vite-env.d.ts         # Vite type definitions
│   ├── components/           # React components
│   │   ├── Layout.tsx        # Persistent layout wrapper
│   │   ├── Navbar.tsx        # Navigation header
│   │   ├── BrainParticles.tsx     # Canvas animation
│   │   ├── CareerTimeline.tsx     # Timeline visualization
│   │   ├── ExperienceCard.tsx     # Experience display
│   │   ├── EducationCard.tsx      # Education display
│   │   ├── SkillsCard.tsx         # Skills display
│   │   ├── ProfileCard.tsx        # Profile info
│   │   ├── PublicationsCard.tsx   # Publications list
│   │   ├── InteractiveDemo.tsx    # Portfolio demo
│   │   └── ui/               # shadcn/ui component library (35+ files)
│   ├── pages/                # Route pages
│   │   ├── Home.tsx          # Landing page
│   │   ├── Resume.tsx        # Resume/CV page
│   │   ├── Portfolio.tsx     # Projects showcase
│   │   ├── Blog.tsx          # Publications page
│   │   ├── NotFound.tsx      # 404 error page
│   │   └── Index.tsx         # (Appears unused - TBD)
│   ├── data/                 # Static data
│   │   └── resume.ts         # Resume/profile data
│   ├── hooks/                # Custom React hooks
│   │   ├── use-mobile.tsx    # Mobile detection hook
│   │   └── use-toast.ts      # Toast notification hook
│   └── lib/                  # Utilities
│       └── utils.ts          # Tailwind CSS merge utility
├── index.html                # HTML entry point
├── package.json              # Dependencies & scripts
├── pnpm-lock.yaml            # Lock file for pnpm
├── vite.config.ts            # Vite build configuration
├── tsconfig.json             # TypeScript root config
├── tsconfig.app.json         # TypeScript app config
├── tsconfig.node.json        # TypeScript node config
├── tailwind.config.ts        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── eslint.config.js          # ESLint configuration
├── components.json           # shadcn/ui configuration
├── template_config.json      # Template metadata (TBD)
├── README.md                 # Project documentation
└── todo.md                   # Development tasks (TBD)
```

---

## Architectural Layers

### 1. **Presentation Layer** (UI Components)

**Location**: `src/components/`, `src/pages/`

**Purpose**: User interface rendering and interaction

**Components Breakdown**:

| Component Type | Count | Purpose | Dependencies |
|---------------|-------|---------|--------------|
| Page components | 5 | Route-level views | React Router, data, UI components |
| Custom components | 10 | Domain-specific UI | shadcn/ui, resume data |
| shadcn/ui primitives | 35+ | Reusable UI building blocks | Radix UI, Tailwind CSS |

**Key Observations**:
- **Separation of concerns**: Pages orchestrate; components render
- **Composition pattern**: Heavy use of component composition
- **No business logic**: Components are presentational only

---

### 2. **Data Layer**

**Location**: `src/data/`

**Current State**: Single file (`resume.ts`) with static TypeScript object

**Structure**:
```typescript
resumeData {
  profile: { ... }        // 7 fields
  experience: [ ... ]     // 10 entries
  education: [ ... ]      // 3 entries
  skills: { ... }         // 4 categories
  publications: [ ... ]   // 4 entries
}
```

**Access Pattern**: ES6 import → Direct property access

**Limitations**:
- No validation layer
- No update mechanism
- Tightly coupled to component structure
- Cannot support dynamic content without rebuild

**Potential Improvements**:
- Add Zod schema validation (already installed)
- Consider CMS integration for publications
- Implement data fetching layer if backend added

---

### 3. **Routing Layer**

**Location**: `src/App.tsx`

**Router**: React Router v6 (BrowserRouter)

**Route Configuration**:
```
/              → Home
/resume        → Resume
/portfolio     → Portfolio
/blog          → Blog
/*             → NotFound (catch-all)
```

**Routing Strategy**: Client-side SPA routing (no SSR)

**Navigation**: Handled by `Navbar` component + Link components

**Known Issues**:
- No route guards
- No loading states between routes
- No route-based code splitting

---

### 4. **Styling Layer**

**Location**: `src/index.css`, `tailwind.config.ts`, component inline classes

**Approach**: Utility-first with Tailwind CSS

**Theme**:
- Dark mode as default (`bg-zinc-950`)
- Custom color scheme (blue, violet, zinc)
- Responsive breakpoints (sm, md, lg, xl, 2xl)

**CSS Architecture**:
```
index.css
  ├── @tailwind base
  ├── @tailwind components
  ├── @tailwind utilities
  └── CSS variables for shadcn/ui theming
```

**Consistency**: Good - Tailwind enforces consistent spacing and colors

---

### 5. **Build & Configuration Layer**

**Build Tool**: Vite 5.4.1

**Configuration Files**:
- `vite.config.ts` - Build & dev server config
- `tsconfig.json` - TypeScript compiler options
- `tailwind.config.ts` - Tailwind CSS customization
- `postcss.config.js` - CSS processing (autoprefixer)
- `eslint.config.js` - Code quality rules

**Path Aliases**: `@` → `src/`

**Build Output**: `dist/` (not committed to git)

---

## Code Organization Assessment

### ✅ Strengths

1. **Clear separation**: Pages, components, data, hooks well organized
2. **Consistent naming**: PascalCase for components, kebab-case for configs
3. **Colocation**: Related components near their usage
4. **Type safety**: Full TypeScript coverage
5. **Modern tooling**: Vite + SWC for fast builds

---

### ⚠️ Areas for Improvement

1. **Index.tsx file**: Appears in `pages/` but unused - cleanup needed

2. **Duplicate BrainParticles**: Exists in both:
   - `workspace/shadcn-ui/src/components/BrainParticles.tsx`
   - `workspace/src/components/BrainParticles.tsx`
   
   **Action**: Remove duplicate (TBD which is canonical)

3. **No tests directory**: Zero test infrastructure

4. **No environment config**: No `.env` files, all config is hardcoded

5. **TODO file**: `todo.md` exists but not reviewed (TBD)

6. **Template artifacts**: `template_config.json` may be from template (TBD)

---

## Dependency Analysis

### Core Dependencies (Production)

**Framework**:
- react: ^19.1.1
- react-dom: ^19.1.1
- react-router-dom: ^6.26.2

**UI Libraries**:
- 20+ @radix-ui/react-* packages (accessibility primitives)
- framer-motion: ^11.18.2 (animations)
- lucide-react: ^0.462.0 (icons)

**State & Data**:
- @tanstack/react-query: ^5.56.2 (unused)
- zustand: ^4.5.0 (unused)

**Forms**:
- react-hook-form: ^7.53.0 (unused in observed code)
- zod: ^3.23.8 (unused in observed code)

**Styling**:
- tailwindcss: ^3.4.11
- tailwindcss-animate: ^1.0.7
- class-variance-authority: ^0.7.1

**Backend/API** (Unused):
- @supabase/supabase-js: ^2.50.3

---

### Unused Dependencies Identified

**Candidates for Removal** (if confirmed unused):
1. `@tanstack/react-query` - No API fetching observed
2. `zustand` - No global state management found
3. `react-hook-form` - No forms observed
4. `zod` - No validation schemas found
5. `@supabase/supabase-js` - Not initialized anywhere
6. Various shadcn components (e.g., `calendar`, `drawer`, etc.)

**Recommendation**: Run dependency analysis tool to identify unused imports

---

## File Relationships Diagram

```mermaid src="./diagrams/data_flow.mmd" alt="Data flow from static resume.ts to UI components"```

```mermaid src="./diagrams/component_structure.mmd" alt="Component hierarchy and relationships"```

---

## Scalability Considerations

### Current Constraints

1. **Static Data Only**: No backend → Limited to compile-time content
2. **No State Management**: All data passed via props
3. **No Caching**: Each route change reimports data (minimal impact)
4. **Bundle Size**: All dependencies bundled together

---

### Growth Paths

**If Adding Backend**:
- Activate TanStack Query for API calls
- Initialize Supabase client
- Add authentication layer
- Implement loading/error states

**If Adding Forms** (e.g., contact form):
- Activate react-hook-form + zod
- Add form validation
- Implement submission handlers

**If Adding Blog CMS**:
- Integrate Supabase or headless CMS
- Implement dynamic routing
- Add content preview mode

---

## Security Analysis

### Current Exposure

- **No authentication**: Entire site is public (by design)
- **No user input**: Read-only content (low XSS risk)
- **No API keys**: No environment variables exposed
- **Static build**: No server-side vulnerabilities

### Dependency Vulnerabilities

**Status**: Not audited (TBD)

**Action Required**:
```bash
pnpm audit
```

---

## Performance Characteristics

### Bundle Size Estimate

**Not measured** - Recommend running:
```bash
pnpm build
npx vite-bundle-visualizer
```

**Expected Size**: 200-400 KB (compressed) based on dependency list

---

### Optimization Opportunities

1. **Code Splitting**: 
   - Lazy load route components
   - Split shadcn/ui imports

2. **Asset Optimization**:
   - Compress images in `/public/assets/`
   - Use WebP format for photos
   - Preload critical fonts

3. **Tree Shaking**:
   - Remove unused dependencies
   - Ensure only imported shadcn components are bundled

4. **BrainParticles**:
   - Consider `requestIdleCallback` for non-critical animation
   - Reduce particle count on mobile

---

## Testing Strategy Recommendations

### Suggested Test Structure

```
src/
├── __tests__/
│   ├── unit/
│   │   ├── utils.test.ts
│   │   └── hooks.test.ts
│   ├── components/
│   │   ├── ExperienceCard.test.tsx
│   │   ├── BrainParticles.test.tsx
│   │   └── Layout.test.tsx
│   ├── pages/
│   │   ├── Home.test.tsx
│   │   ├── Resume.test.tsx
│   │   └── Portfolio.test.tsx
│   └── integration/
│       └── routing.test.tsx
└── e2e/
    ├── user-journey.spec.ts
    └── navigation.spec.ts
```

**Tools**: Vitest + React Testing Library + Playwright

---

## Documentation Status

| Document Type | Status | Location |
|--------------|--------|----------|
| README | ✅ Exists | `README.md` |
| Architecture docs | ✅ Created | `docs/ARCHITECTURE_OVERVIEW.md` |
| Structure analysis | ✅ Created | `docs/STRUCTURE_ANALYSIS.md` |
| API docs | ❌ N/A | No API |
| Component docs | ⚠️ Partial | Comments in code |
| Deployment guide | ❌ Missing | TBD |
| Contribution guide | ❌ Missing | TBD |

---

## Maintenance Checklist

### Immediate Actions

- [ ] Review and delete unused `Index.tsx` in pages/
- [ ] Identify and remove duplicate `BrainParticles.tsx`
- [ ] Run `pnpm audit` to check for vulnerabilities
- [ ] Review `todo.md` for outstanding tasks
- [ ] Clarify `template_config.json` purpose

### Short-term Improvements

- [ ] Add error boundaries for component fault isolation
- [ ] Implement PDF download functionality for resume
- [ ] Add Zod validation for resumeData
- [ ] Set up testing infrastructure (Vitest + RTL)
- [ ] Optimize BrainParticles canvas performance
- [ ] Add loading states for route transitions

### Long-term Considerations

- [ ] Evaluate CMS integration for blog/publications
- [ ] Consider SSG/SSR for better SEO (Next.js migration?)
- [ ] Implement analytics integration
- [ ] Add accessibility audit tooling
- [ ] Set up CI/CD pipeline
- [ ] Create deployment documentation

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Component errors crash app | Medium | High | Add error boundaries |
| Dependency vulnerabilities | Medium | Medium | Regular audits |
| Bundle size bloat | Low | Medium | Code splitting, tree shaking |
| Poor mobile performance | Low | Medium | Performance audit, optimization |
| Data schema changes break UI | Low | Low | Add Zod validation |

---

## Conclusion

The project follows a **well-organized, modern React SPA architecture** suitable for a portfolio website. The structure is clean, maintainable, and follows best practices for component organization.

**Key Strengths**:
- Clear separation of concerns
- Type-safe with TypeScript
- Modern tooling (Vite, React 19)
- Accessible UI components (Radix primitives)

**Key Weaknesses**:
- No error handling strategy
- Unused dependencies bloating bundle
- No test coverage
- Static data limits dynamic content

**Overall Assessment**: Production-ready for its current scope, but requires hardening (error boundaries, testing) and optimization (dependency cleanup, code splitting) for long-term maintainability.

---

<small>Generated with GitHub Copilot as directed by Gabriel Ortega Hernández</small>
