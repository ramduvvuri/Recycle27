# ROUTES.md — Recycle27 Route Map

## Public Routes (16 total)

| # | Route | File Path | Nav Visibility |
|---|-------|-----------|----------------|
| 1 | `/` | `app/page.tsx` | Primary nav: "Home" |
| 2 | `/about` | `app/about/page.tsx` | Primary nav: "About" |
| 3 | `/themes` | `app/themes/page.tsx` | Primary nav: "Themes" |
| 4 | `/speakers` | `app/speakers/page.tsx` | Primary nav: "Speakers & Committees" |
| 5 | `/committees` | `app/committees/page.tsx` | Under "Speakers & Committees" header on that combined-view page |
| 6 | `/call-for-abstracts` | `app/call-for-abstracts/page.tsx` | "More" dropdown |
| 7 | `/important-dates` | `app/important-dates/page.tsx` | "More" dropdown |
| 8 | `/registration` | `app/registration/page.tsx` | Primary nav: "Registration" |
| 9 | `/programme` | `app/programme/page.tsx` | Primary nav: "Programme" |
| 10 | `/venue-travel` | `app/venue-travel/page.tsx` | "More" dropdown |
| 11 | `/accommodation` | `app/accommodation/page.tsx` | "More" dropdown |
| 12 | `/publications-awards` | `app/publications-awards/page.tsx` | "More" dropdown |
| 13 | `/sponsors` | `app/sponsors/page.tsx` | "More" dropdown |
| 14 | `/gallery` | `app/gallery/page.tsx` | "More" dropdown |
| 15 | `/faqs` | `app/faqs/page.tsx` | Footer |
| 16 | `/contact` | `app/contact/page.tsx` | Footer |

---

## Navigation Structure

### Primary Navbar (visible links)
```
RECYCLE27 [logo/wordmark]

Home | About | Themes | Speakers & Committees | Programme | Registration | More ▾ | [Register Now →]
```

### "More" Dropdown Contents
```
Call for Abstracts
Important Dates
Venue & Travel
Accommodation
Publications & Awards
Sponsors
Gallery
FAQs
Contact
```

### Navbar Notes
- The nav item label shown in all mockups is: **"Speakers & Committees"** (not split)
- The active page underline is shown as a thin line below the active nav label
- "Register Now" is a filled dark-green button on the right
- On scroll: navbar gains a subtle background (semi-opaque light/dark depending on current section context)
- On mobile: collapses to hamburger menu

---

## Admin Routes

| Route | File Path | Purpose |
|-------|-----------|---------|
| `/admin` | `app/admin/page.tsx` | Admin dashboard |
| `/admin/login` | `app/admin/login/page.tsx` | Admin authentication |
| `/admin/announcements` | `app/admin/announcements/page.tsx` | Manage announcements |
| `/admin/dates` | `app/admin/dates/page.tsx` | Manage important dates |
| `/admin/speakers` | `app/admin/speakers/page.tsx` | Manage speakers |
| `/admin/committees` | `app/admin/committees/page.tsx` | Manage committee members |
| `/admin/registration` | `app/admin/registration/page.tsx` | Manage registration categories & fees |
| `/admin/programme` | `app/admin/programme/page.tsx` | Manage programme schedule |
| `/admin/documents` | `app/admin/documents/page.tsx` | Manage downloadable documents |
| `/admin/accommodation` | `app/admin/accommodation/page.tsx` | Manage accommodation options |
| `/admin/publications` | `app/admin/publications/page.tsx` | Manage publications & awards |
| `/admin/sponsors` | `app/admin/sponsors/page.tsx` | Manage sponsors |
| `/admin/gallery` | `app/admin/gallery/page.tsx` | Manage gallery images |
| `/admin/faqs` | `app/admin/faqs/page.tsx` | Manage FAQ items |
| `/admin/settings` | `app/admin/settings/page.tsx` | Site-wide settings |

---

## Utility / System Routes

| Route | File Path | Purpose |
|-------|-----------|---------|
| `/sitemap.xml` | `app/sitemap.ts` | SEO sitemap |
| `/robots.txt` | `app/robots.ts` | SEO robots file |
| `/not-found` | `app/not-found.tsx` | 404 page |

---

## Important Routing Notes

- Speakers and Committees are **separate routes** (`/speakers` and `/committees`), even though the mockup shows them in one image. The mockup image shows one combined page at `/speakers` that contains both sections. In this implementation, `/speakers` is the primary page showing keynote + plenary speakers followed by committee overview section with "View Organizing Committee →" and "View Scientific Committee →" links that go to `/committees`.
- Registration and Programme are **separate routes** (`/registration` and `/programme`), even though the mockup shows them side by side. This means the `/registration` page has the left column content, and `/programme` has the right column content, but each is also a standalone full page.
- Venue & Travel and Accommodation are **separate routes** (`/venue-travel` and `/accommodation`). The Venue & Travel mockup shows a preview of accommodation at the bottom — that section links to `/accommodation`.

---

## Breadcrumb Pattern

Every non-home page shows a breadcrumb immediately below the hero:
```
Home > [Page Name]
```
This is a shared component `<Breadcrumb />` accepting an array of path segments.
