# RECYCLE27 — Implementation Blueprint

## Project Overview

**RECYCLE27** is the International Conference on Sustainable Waste Management and Circular Economy, hosted at the Indian Institute of Technology (IIT) Guwahati, Assam, India.

- **Conference Dates:** 12–14 May 2027
- **Venue:** IIT Guwahati, Assam 781039, India
- **Organizer:** Waste Management Research Group (WMRG), IIT Guwahati
- **Email:** recycle27@iitg.ac.in

---

## Documentation Index

| File | Purpose |
|------|---------|
| README.md | Project overview and doc index |
| ROUTES.md | All 16 public routes + admin routes |
| DESIGN-SYSTEM.md | Color tokens, typography, spacing, components |
| COMPONENT-INVENTORY.md | All reusable components, props, usage |
| HOMEPAGE-FLOW.md | Section-by-section home page specification |
| PAGE-SPECIFICATIONS.md | Per-page mockup breakdowns |
| DATA-MODEL.md | Database schema and entity definitions |
| ADMIN-PANEL.md | Admin panel pages and capabilities |
| ANIMATION-SPEC.md | Animation system, triggers, values |
| CONTENT-MANAGEMENT.md | Static vs dynamic content classification |
| IMAGE-AND-ASSET-SPEC.md | Image ratios, sizes, alt text strategy |
| TECHNICAL-ARCHITECTURE.md | Stack, folder structure, conventions |
| IMPLEMENTATION-PLAN.md | Ordered build sequence |
| QA-CHECKLIST.md | Pre-launch quality assurance checklist |
| GEMINI-HANDOFF.md | Precise instructions for the coding phase |

---

## Phase Status

- [x] Phase 1: Planning & Blueprint (this phase)
- [ ] Phase 2: Design System & Shared Components
- [ ] Phase 3: Home Page
- [ ] Phase 4: All Public Pages
- [ ] Phase 5: Admin Panel
- [ ] Phase 6: Data Layer & Supabase Integration
- [ ] Phase 7: Animation Pass
- [ ] Phase 8: QA, SEO, Accessibility, Performance

---

## Technology Stack (Locked)

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** DM Serif Display (display/serif), Inter (body/UI)

---

## Repository Root

```
recycle27/
├── app/               # Next.js App Router pages
├── components/        # Reusable UI components
├── lib/               # Supabase client, utilities, content
├── types/             # TypeScript type definitions
├── public/            # Static assets
├── docs/              # This documentation system
└── supabase/          # Database migrations and seeds
```

---

## Source of Truth Hierarchy

1. **Mockup images** (in `/Mockups/`) → primary visual specification
2. **This docs folder** → implementation blueprint derived from mockups
3. **Prompt design rules** → mandatory constraints
4. **Technical decisions** → only where they do not alter visual/functional spec
