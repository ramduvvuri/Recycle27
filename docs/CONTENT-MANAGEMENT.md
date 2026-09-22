# CONTENT-MANAGEMENT.md — Static vs Dynamic Content

## Classification Overview

Content is separated into two categories:
1. **STATIC** — Hardcoded in source files. Requires a developer to change.
2. **DYNAMIC** — Stored in Supabase. Editable via the admin panel without code changes.

---

## STATIC Content

These items are unlikely to change or change extremely rarely. They are defined in the source code directly (component props, constants, or content files).

### Conference Identity (Static)
| Content | Location |
|---------|---------|
| Conference name "RECYCLE27" | `lib/content/site.ts` |
| Full conference name | `lib/content/site.ts` |
| Conference mission/description | `lib/content/site.ts` |
| About RECYCLE27 copy (two paragraphs) | `lib/content/about.ts` |
| About IIT Guwahati copy | `lib/content/about.ts` |
| About WMRG copy | `lib/content/about.ts` |

### Conference Themes (Static or lightly dynamic)
| Content | Notes |
|---------|-------|
| 5 theme names | Static — themes don't change |
| 5 theme icons | Static — Lucide icon names |
| Theme descriptions | Static or `lib/content/themes.ts` |

> Consider making themes dynamic if the admin wants to adjust naming or add sub-themes without code changes. [IMPLEMENTATION DECISION REQUIRED]

### Submission Guidelines (Static)
| Content |
|---------|
| 5 guideline items (Originality, Author Info, Content, Relevance, Submission Mode) |
| Abstract format specifications (300 words, TNR 12pt, etc.) |
| Presentation type descriptions (Oral, Poster) |

### About Pages Copy (Static)
| Content |
|---------|
| Conference overview paragraphs |
| IIT Guwahati description paragraphs |
| WMRG description paragraphs |
| Mission pillars text (Cleaner Environments, Healthier Communities, etc.) |
| WMRG feature grid items |

### Publication Information (Partially Static)
| Content | Notes |
|---------|-------|
| Publication opportunity descriptions | Static |
| Publication partner descriptions | Static |
| Award descriptions | Award names/descriptions can be static; `is_announced` flag is dynamic |

### Contact Information (Static with override)
| Content | Notes |
|---------|-------|
| Email: recycle27@iitg.ac.in | Stored in site_settings |
| Phone: +91 361 258 3000 | Stored in site_settings |
| Address: IIT Guwahati... | Stored in site_settings |
| Office hours text | Static |

### What's Included (Registration) — Static
- Access to all technical sessions
- Conference kit and meals
- Networking opportunities
- Participation certificate

### Transport Information (Venue page) — Static
- From Airport: distances and duration
- From Railway Station
- From City

### Tour Details (Venue page) — Static
- Kaziranga National Park description
- Umananda Temple description
- Kamakhya Temple description

### Query Types (Contact page) — Static
- Registration Support description
- Abstract Submission description
- Sponsorship & Partnerships description
- General Inquiries description

### Footer Content (Mostly Static)
- RECYCLE27 wordmark
- Footer tagline
- IIT Guwahati address
- Copyright line
- Navigation links (Contact, Privacy Policy, Sitemap)

---

## DYNAMIC Content (Admin-managed)

These items are stored in Supabase and editable through the admin panel.

### Announcements → `announcements` table
- Latest announcement text (shown in home bar)
- All historical announcements
- Announcement links

### Important Dates → `important_dates` table
- All deadline dates and labels
- Countdown target date (via `is_countdown_target`)
- Date categories

### Speakers → `speakers` table
- All speaker profiles (name, designation, institution, country)
- Speaker type (keynote, plenary, invited)
- Speaker photographs
- Talk topics and abstracts
- Active/inactive state

### Committee Members → `committee_members` table
- All organizing committee members
- All scientific/advisory committee members
- Member roles and institutions

### Registration → `registration_categories` table
- Category names and sublabels
- All fee amounts (Early Bird, Regular, On-site)
- Registration deadlines
- Active/inactive state

### Programme → `programme_days` + `programme_items` tables
- All 3 days
- Every session, break, keynote entry
- Times, locations, speaker links

### Documents → `documents` table
- Abstract template files (DOCX, PDF)
- Presentation/poster templates
- Registration brochure
- Sponsorship brochure

### Accommodation → `accommodation_options` table
- IITG Guest House details and booking URL
- Campus Hostel details
- Nearby hotel recommendations
- Feature lists and prices

### Publications → `publication_items` table
- Indicative journal list
- Journal logos

### Awards → `awards` table
- Award names and descriptions
- `is_announced` flag (controls "coming soon" notice)

### Sponsors → `sponsors` table
- All sponsor names and tiers
- Sponsor logos
- Sponsor websites
- Tier order

### Gallery → `gallery_items` table
- All gallery photographs
- Categories, captions, edition labels
- Featured images (shown on home preview)

### FAQs → `faqs` table
- All FAQ questions and answers
- FAQ categories
- Featured FAQs (shown on home preview)

### Site Settings → `site_settings` table
- External registration URL
- Abstract submission URL (Google Form)
- Registration brochure URL
- Sponsorship brochure URL
- IITG website URL
- WMRG website URL
- Social media URLs
- Google Maps embed URL
- Countdown target date
- SEO meta description

---

## Content File Structure (Static content)

```
lib/
└── content/
    ├── site.ts              # Conference identity, name, description
    ├── about.ts             # About section copy
    ├── themes.ts            # Conference themes list
    ├── submission.ts        # Submission guidelines, format specs
    ├── navigation.ts        # Nav links configuration
    ├── contact-static.ts    # Query type cards static data
    ├── venue-static.ts      # Transport and tour info
    └── registration-static.ts  # What's included, important notes
```

Example:
```ts
// lib/content/themes.ts
export const THEMES = [
  {
    id: 'waste-management',
    icon: 'Recycle',         // Lucide icon name
    title: 'Waste Management and Resource Recovery',
    description: '...',
  },
  {
    id: 'circular-economy',
    icon: 'RefreshCw',
    title: 'Circular Economy and Sustainable Systems',
    description: '...',
  },
  // ...
] as const
```

---

## Data Fetching Pattern

### Server Components (preferred for SEO)

```ts
// For public pages, fetch data server-side
// app/speakers/page.tsx

import { createServerClient } from '@/lib/supabase/server'

export default async function SpeakersPage() {
  const supabase = createServerClient()
  
  const { data: speakers } = await supabase
    .from('speakers')
    .select('*')
    .eq('is_active', true)
    .order('sort_order')
  
  return <SpeakersPageContent speakers={speakers} />
}
```

### Client Components (for interactive features)

Used only for:
- Countdown timer (needs `setInterval`)
- FAQ accordion (needs click state)
- Gallery lightbox
- Programme tab switching
- Gallery filter

### Caching Strategy

```ts
// Use Next.js fetch caching with reasonable revalidation
// For conference content that changes infrequently:
export const revalidate = 3600  // 1 hour

// For announcements that may change quickly:
export const revalidate = 300  // 5 minutes
```

---

## Admin vs Public Permission Model

```
Public users: READ only (via Supabase RLS anon key)
Admin users:  READ + WRITE (via server-side service_role or authenticated user)
```

The `NEXT_PUBLIC_SUPABASE_ANON_KEY` is safe to expose in client components.
The `SUPABASE_SERVICE_ROLE_KEY` is NEVER exposed to the client. Only used in:
- `app/api/admin/*` routes
- Admin server components

---

## Environment Variables

```env
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://[project].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...   # NEVER expose to client
NEXT_PUBLIC_SITE_URL=https://recycle27.iitg.ac.in
```
