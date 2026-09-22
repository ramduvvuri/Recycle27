# IMPLEMENTATION-PLAN.md — Ordered Build Sequence

## Overview

This plan defines the exact order in which RECYCLE27 should be built. Each phase builds on the previous. Do not skip phases or reorder them significantly.

**Rule:** At the end of each phase, the site should be visually correct for the components built. No half-finished states.

---

## Phase 0: Project Bootstrap

**Duration estimate:** ~2 hours

### Steps:
1. Initialize Next.js 14+ with App Router and TypeScript
   ```bash
   npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=no --import-alias="@/*"
   ```
2. Install dependencies:
   ```bash
   npm install framer-motion lucide-react @supabase/supabase-js @supabase/ssr clsx tailwind-merge
   ```
3. Configure `tailwind.config.ts` — add color tokens, fonts, screen breakpoints
4. Set up `app/globals.css` — CSS custom properties, base resets, utility classes
5. Set up `next/font` with DM Serif Display + Inter in `app/layout.tsx`
6. Create `.env.local` and `.env.example` files
7. Configure `next.config.ts` — Supabase Storage image domains
8. Create folder structure (all directories, empty `page.tsx` stubs)
9. Initialize Supabase project and set up `lib/supabase/client.ts` and `lib/supabase/server.ts`

**Checkpoint:** `npm run dev` runs. Fonts load. Colors available as Tailwind classes.

---

## Phase 1: Design System & Shared Layout

**Duration estimate:** ~4 hours

### Steps:

1. `app/globals.css` — complete CSS token definitions, utility classes (eyebrow, btn-primary, btn-secondary, etc.)
2. `lib/animation.ts` — animation variants (fadeUp, stagger, etc.)
3. `lib/utils.ts` — cn(), formatDate(), formatFee()
4. `components/ui/Button.tsx` — all 4 button variants
5. `components/ui/EyebrowLabel.tsx`
6. `components/ui/SectionHeading.tsx`
7. `components/ui/QuoteBlock.tsx`
8. `components/ui/InfoNote.tsx`
9. `components/ui/HeroSideText.tsx`
10. `components/ui/ScrollIndicator.tsx`
11. `components/sections/SectionWrapper.tsx` — standard section padding wrapper
12. `components/layout/Navbar.tsx` — full implementation with scroll state
13. `components/layout/Footer.tsx` — full implementation
14. `components/layout/Breadcrumb.tsx`
15. `app/layout.tsx` — root layout with Navbar + Footer + font setup

**Checkpoint:** Navigate to `/`. Navbar and footer render correctly. Fonts appear correctly. Scroll down: navbar changes background.

---

## Phase 2: Database Setup

**Duration estimate:** ~3 hours

### Steps:

1. Write all SQL migration files (`supabase/migrations/001_*.sql` through `016_*.sql`)
2. Run migrations on local Supabase instance
3. Write `supabase/seed.sql` with sample data for all tables
4. Run seed
5. Create TypeScript types in `types/database.ts`
6. Write all query functions in `lib/supabase/queries/`
7. Test queries work (quick console test in a server component)

**Checkpoint:** Can fetch data from all tables. TypeScript types match.

---

## Phase 3: Home Page

**Duration estimate:** ~8 hours (largest and most important page)

Build sections in order:

1. `components/layout/AnnouncementBar.tsx`
2. `components/home/HeroSection.tsx` — hero with animation entrance sequence
3. `components/dates/Countdown.tsx` — live countdown timer
4. `components/home/CountdownSection.tsx` — countdown + leaf image + quote
5. `components/home/AboutPreview.tsx` — about preview section
6. `components/cards/ThemeCard.tsx`
7. `components/home/ThemesPreview.tsx` — 5 dark theme cards
8. `components/speakers/SpeakerCardCompact.tsx`
9. `components/home/SpeakersPreview.tsx` — 4 compact speaker cards
10. `components/dates/ImportantDatesList.tsx` (table variant)
11. `components/cards/QuickLinkCard.tsx`
12. `components/home/DatesPreview.tsx` — dark dates + light quick links split
13. `components/home/RegistrationPreview.tsx`
14. `components/home/ProgrammePreview.tsx`
15. `components/home/VenuePreview.tsx`
16. `components/home/AccommodationPreview.tsx`
17. `components/home/PublicationsPreview.tsx`
18. `components/home/SponsorsPreview.tsx`
19. `components/home/GalleryPreview.tsx`
20. `components/home/FAQPreview.tsx`
21. `components/home/ContactCTA.tsx`
22. `components/sections/ClosingCTA.tsx`
23. `app/page.tsx` — assemble all home sections, connect data fetching

**Checkpoint:** Home page renders completely, matches mockup. All sections visible. Countdown ticking. Announcement bar showing. Responsive layout correct on mobile.

---

## Phase 4: Inner Public Pages (order by mockup availability)

**Duration estimate:** ~2 hours per page = ~24 hours total

### 4a: About Page
1. `components/sections/PageHero.tsx` (reusable for all pages)
2. Feature cards for WMRG grid
3. `app/about/page.tsx`

### 4b: Speakers & Committees Page
1. `components/speakers/SpeakerCard.tsx` (full)
2. `components/speakers/SpeakerGrid.tsx`
3. `app/speakers/page.tsx`
4. `app/committees/page.tsx` — full committee member lists

### 4c: Call for Abstracts Page
1. `components/dates/ImportantDatesList.tsx` (timeline variant)
2. `app/call-for-abstracts/page.tsx`

### 4d: Registration Page
1. Registration fee table component
2. `app/registration/page.tsx`

### 4e: Programme Page
1. `components/programme/ProgrammeTabs.tsx`
2. `components/programme/ProgrammeRow.tsx`
3. `components/programme/ProgrammeTable.tsx`
4. `app/programme/page.tsx`

### 4f: Venue & Travel Page
1. `components/cards/TransportCard.tsx`
2. `app/venue-travel/page.tsx`

### 4g: Publications & Awards Page
1. `app/publications-awards/page.tsx`

### 4h: Sponsors Page
1. `components/sponsors/SponsorTier.tsx`
2. `components/sponsors/SponsorLogo.tsx`
3. `app/sponsors/page.tsx`

### 4i: Gallery Page
1. `components/gallery/GalleryFilter.tsx`
2. `components/gallery/GalleryCard.tsx`
3. `components/gallery/GalleryGrid.tsx`
4. `components/gallery/GalleryLightbox.tsx`
5. `app/gallery/page.tsx`

### 4j: FAQs Page
1. `components/faqs/FAQAccordion.tsx`
2. `components/faqs/FAQSection.tsx`
3. `components/faqs/FAQSidebar.tsx`
4. `app/faqs/page.tsx`

### 4k: Contact Page
1. `components/forms/FormField.tsx`
2. `components/forms/FormSelect.tsx`
3. `components/forms/ContactForm.tsx`
4. `app/api/contact/route.ts`
5. `app/contact/page.tsx`

### 4l: Pages Without Mockups (design to system)
- `app/themes/page.tsx`
- `app/important-dates/page.tsx`
- `app/accommodation/page.tsx`

---

## Phase 5: Admin Panel

**Duration estimate:** ~12 hours

### Steps:
1. `middleware.ts` — admin auth protection
2. `app/admin/login/page.tsx` — Supabase Auth login form
3. `components/admin/AdminLayout.tsx`
4. `components/admin/AdminSidebar.tsx`
5. `components/admin/AdminHeader.tsx`
6. `components/admin/AdminTable.tsx`
7. `components/admin/AdminFormField.tsx`
8. `components/admin/StatusBadge.tsx`
9. `components/admin/ConfirmDelete.tsx`
10. `components/admin/ImageUpload.tsx`
11. `app/admin/page.tsx` — Dashboard
12. All admin page CRUD views (one per entity)

---

## Phase 6: Data Layer Polish

**Duration estimate:** ~4 hours

1. Implement proper Supabase RLS policies
2. Set up Supabase Storage buckets
3. Image upload API route (`app/api/admin/upload/`)
4. Seed realistic sample data for all tables
5. Test all data flows end-to-end

---

## Phase 7: Animation Pass

**Duration estimate:** ~4 hours

After all pages are built and content-correct, apply animation layer:

1. Install Framer Motion if not already
2. Apply `fadeUp` + `staggerContainer` to all section reveals
3. Implement home hero entrance sequence
4. Implement FAQ accordion animation
5. Implement programme tab switching with `layoutId`
6. Gallery hover effects (CSS)
7. Speaker card hover lift (CSS)
8. Scroll indicator in hero
9. Navbar scroll transition (state-based class)
10. Test `prefers-reduced-motion` behavior

---

## Phase 8: SEO, Accessibility, Performance

**Duration estimate:** ~4 hours

1. Metadata for every page (`metadata` export)
2. OG image creation
3. `app/sitemap.ts` — dynamic sitemap
4. `app/robots.ts`
5. `app/not-found.tsx` — 404 page
6. Alt text audit (all images)
7. Heading hierarchy audit (one H1 per page)
8. Keyboard navigation audit (tab focus on all interactive elements)
9. Focus ring styles (visible focus indicators)
10. ARIA labels on icon-only buttons
11. Accessible accordion (aria-expanded, aria-controls)
12. Accessible form labels and error messages
13. Image `sizes` props audit
14. Remove unused JavaScript
15. Lighthouse audit (target score 90+ on all metrics)

---

## Phase 9: QA & Launch Readiness

**Duration estimate:** ~3 hours

See `QA-CHECKLIST.md` for the complete checklist.

1. Visual QA against each mockup on desktop
2. Responsive QA on mobile (375px), tablet (768px), laptop (1024px)
3. Cross-browser check (Chrome, Safari, Firefox)
4. All CTAs tested (links go to correct routes or external URLs)
5. Contact form tested (submission works)
6. Admin CRUD tested for each entity
7. Environment variables documented
8. Deployment configuration set up

---

## Critical Path

The critical path (must be done in strict order):

```
Phase 0 (Bootstrap)
    ↓
Phase 1 (Design System + Shared Layout)
    ↓
Phase 2 (Database)
    ↓
Phase 3 (Home Page) ← HIGHEST PRIORITY
    ↓
Phase 4 (Inner Pages) ← can parallelize between pages
    ↓
Phase 5 (Admin)
    ↓
Phase 6 (Data Layer)
    ↓
Phase 7 (Animations)
    ↓
Phase 8 (SEO/A11y/Perf)
    ↓
Phase 9 (QA)
```

---

## Known Decisions Required Before Starting

See `GEMINI-HANDOFF.md` for a complete list. Key decisions:

1. Confirm deployment platform (Vercel recommended)
2. Confirm email service for contact form (Resend recommended)
3. Confirm Supabase project URL and keys
4. Confirm which pages will have real content at launch vs placeholder
5. Decide whether `/committees` is a separate page or section on `/speakers`
6. Decide whether themes should be in database or static content
