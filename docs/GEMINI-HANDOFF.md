# GEMINI-HANDOFF.md — Instructions for the Coding Phase

## Purpose

This document is the direct handoff from the planning phase to the coding phase. A Gemini (or other AI coding agent) reading this document should have everything needed to start implementation without re-interpreting the design or making architectural assumptions.

**READ ALL DOCS IN ORDER BEFORE WRITING ANY CODE.**

---

## Mandatory Reading Order

1. `docs/README.md` — Project overview
2. `docs/DESIGN-SYSTEM.md` — **Critical. Read entirely before writing any CSS.**
3. `docs/ROUTES.md` — Route map and nav structure
4. `docs/HOMEPAGE-FLOW.md` — **Critical. Home page is the most important.**
5. `docs/PAGE-SPECIFICATIONS.md` — Per-page visual breakdown
6. `docs/COMPONENT-INVENTORY.md` — All components with props
7. `docs/DATA-MODEL.md` — Database schema
8. `docs/ANIMATION-SPEC.md` — Animation rules and code
9. `docs/CONTENT-MANAGEMENT.md` — What's static vs dynamic
10. `docs/IMAGE-AND-ASSET-SPEC.md` — Image ratios, storage, alt text
11. `docs/TECHNICAL-ARCHITECTURE.md` — Stack and folder structure
12. `docs/IMPLEMENTATION-PLAN.md` — Build order
13. `docs/QA-CHECKLIST.md` — Quality verification

---

## Source of Truth

The **mockup images** in `/Mockups/` are the primary visual source of truth. Every design decision must be reconciled against them.

Mockup files available:
- `Mockups/Home.png` → Home page
- `Mockups/About us page.png` → About page
- `Mockups/Speakers and committes page.png` → Speakers & Committees
- `Mockups/Call for abstracts page.png` → Call for Abstracts
- `Mockups/Reg and programme page.png` → Registration + Programme
- `Mockups/Venue and Travel page.png` → Venue & Travel + Accommodation preview
- `Mockups/Publications and Awards page.png` → Publications & Awards
- `Mockups/Our sponsors page.png` → Sponsors
- `Mockups/Gallery page.png` → Gallery
- `Mockups/FAQs page.png` → FAQs
- `Mockups/Contact us page.png` → Contact

**When in doubt: look at the mockup. If still unclear: mark with [IMPLEMENTATION DECISION REQUIRED] in a comment.**

---

## Absolute Rules (Never Violate)

1. **No gradients** — not on backgrounds, not on text, not on buttons, not on cards. Image overlays only (dark semi-transparent).
2. **No glassmorphism** — no `backdrop-filter: blur()` on decorative cards. Only on navbar (functional scroll state).
3. **No purple, blue, pink, orange, red, or cyan** — only the defined color palette.
4. **No emoji icons** — only Lucide React icons.
5. **Only DM Serif Display and Inter** — no other fonts.
6. **No gradient backgrounds** — period.
7. **No generic SaaS-template patterns** — no floating blobs, no gradient meshes, no particle effects.
8. **No invented content** — use [CONTENT PLACEHOLDER] for any real data not yet provided.
9. **No inventing speakers, fees, dates, or sponsors** — leave clearly marked placeholders.
10. **Mockup-first** — if the mockup shows something specific, reproduce it. Do not redesign.

---

## Decisions Made in This Blueprint

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Committees route | `/committees` is a section on `/speakers` page, with separate `/committees` route for full listing | Mockup shows combined, but spec requires separate routes |
| Themes | Static content in `lib/content/themes.ts` | Themes are unlikely to change; admin doesn't need to edit them |
| Font weights | DM Serif Display 400 only | Only regular weight needed for editorial headings |
| Country flag icons | None | No emoji/flag; just text country name |
| Programme page vs Registration page | Two separate pages `/registration` and `/programme` | Spec is explicit about separate routes |

---

## Known Placeholders

The following items are clearly not available yet and must be marked as placeholders:

| Item | Placeholder to Use |
|------|--------------------|
| Real speaker names | [CONTENT PLACEHOLDER] — use Prof. [Name] from mockup format |
| Speaker photographs | Use a placeholder avatar or initials component |
| Real sponsor logos | Logo placeholder cards with company name text |
| Abstract submission URL | `site_settings.abstract_submission_url` — admin will set |
| Registration URL | `site_settings.registration_url` — admin will set |
| Final programme sessions | Day structure visible in mockup; actual sessions are [CONTENT PLACEHOLDER] |
| Registration fees | The fees in the mockup are usable (₹2000/₹4000/₹6000 etc.) |
| OG image | Generate a simple text-based one initially |
| Favicon | Simple R27 text favicon initially |
| Hero photographs | Use high-quality IIT Guwahati campus photos from Unsplash as temporary until real photos provided |

---

## Temporary Image Sources (Development Only)

For development purposes, use these free sources. **Replace with real photos before launch:**

- IIT Guwahati campus: Search Unsplash for "university india architecture"
- Leaf/botanical: Search Unsplash for "leaf macro green"
- Forest/mountain: Search Unsplash for "forest valley aerial india"
- Conference/academic: Search Unsplash for "academic conference seminar"

Use `next/image` with `unoptimized` prop for external Unsplash URLs during development only.

---

## Implementation Decisions Still Required

These items require clarification from the project owner before finalization:

1. **Deployment platform** — Vercel (recommended), AWS, or custom server?
2. **Email service for contact form** — Resend, SendGrid, or SMTP? What credentials?
3. **Google Maps API** — Is a Google Maps API key available for the embedded map?
4. **Domain name** — What is the final domain? (e.g., recycle27.iitg.ac.in)
5. **Admin emails** — Who are the admin users? (Supabase Auth email whitelist)
6. **Privacy Policy page** — Footer links to it, but no mockup was provided. Create a simple one or link externally?
7. **Sitemap content** — Should `/themes` be indexed before it has real content?
8. **Social media** — What are the real LinkedIn, Twitter, YouTube URLs?
9. **Real hero photographs** — When will these be provided? (development uses Unsplash)
10. **Sponsorship brochure** — Is the PDF ready, or will it be uploaded via admin later?

---

## Component Priority for Initial Build

Build in this priority order:

1. Design system (globals.css, tailwind config, tokens)
2. Shared layout (Navbar, Footer)
3. Home page (most visible, most important)
4. Call for Abstracts (likely needed first for announcement/marketing)
5. Registration page
6. Speakers page
7. All remaining pages
8. Admin panel

---

## How to Connect to Supabase

```ts
// 1. Create a Supabase project at supabase.com
// 2. Get your project URL and anon key from Settings > API
// 3. Add to .env.local:
NEXT_PUBLIC_SUPABASE_URL=https://[project-ref].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...

// 4. Run migrations:
// In Supabase Dashboard > SQL Editor, run each migration file in order

// 5. Run seed:
// Execute supabase/seed.sql in SQL Editor
```

---

## Home Page is the Critical Deliverable

If only one thing is built first, it should be the Home page. It is:
- The primary marketing asset for the conference
- The longest and most complex page
- The page most likely to be shared and viewed

Every section of the home page must be present, even if content is placeholder.

---

## Content Guidelines for Placeholder Text

When writing placeholder body copy, follow this template:
- Keep it aligned with the conference's academic/environmental tone
- Do NOT use Lorem Ipsum
- Use the conference's actual identity: sustainable waste management, circular economy, IIT Guwahati

Example (acceptable placeholder):
```
RECYCLE27 brings together researchers, industry experts, policymakers and students to
discuss innovations and solutions for sustainable waste management and circular economy.
[Full description to be provided by organizing committee]
```

---

## Code Quality Standards

- **TypeScript strict mode** — no `any` types
- **Server Components by default** — only use `'use client'` when necessary
- **Named exports only** — no default exports for components (except page.tsx files)
- **Consistent naming** — PascalCase for components, camelCase for functions, kebab-case for files
- **No inline styles** — use Tailwind classes
- **No `px` units in Tailwind** — use the Tailwind spacing scale
- **Accessibility first** — semantic HTML, proper ARIA, keyboard accessible
- **Image alt text always** — never empty alt on meaningful images
- **No console.log in production** — remove before deployment

---

## Testing the Design System Before Building Pages

Before building any page, validate:

```bash
npm run dev
```

Then visually verify:
1. Open `http://localhost:3000` — page loads with correct fonts
2. Open browser DevTools → Elements → inspect `<body>` class
3. Confirm `font-display` and `font-body` CSS variables resolve correctly
4. Inspect any element styled with `text-primary-emerald` — should be `#1E8A5A`
5. Confirm `bg-primary-dark` → `#071710`

---

## Final Notes

- This is a **conference website**, not a SaaS product or app. Keep interactions conference-appropriate.
- The design is **restrained, editorial, academic** — not flashy or startup-ish.
- Every animation should feel like it belongs in a premium printed brochure that came to life.
- When uncertain about spacing or sizing: **look at the mockup** and measure proportions visually.
- The conference is held in May 2027. All "upcoming" and "past" date logic should account for the current date.
- Build for India — use ₹ currency symbol (not Rs or INR prefix), Indian phone format, Indian date conventions where appropriate.
