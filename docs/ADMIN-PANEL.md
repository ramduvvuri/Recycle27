# ADMIN-PANEL.md — Recycle27 Admin Panel Specification

## Overview

The admin panel is a functional, clean management interface. It uses the Recycle27 identity (wordmark, colors) but is NOT a cinematic or animated experience. Priority is speed, clarity, and usability.

**Authentication:** Supabase Auth (email + password)
**Admin access:** Restricted by Supabase RLS to a specific role or whitelist
**Base route:** `/admin`

---

## Visual Language (Admin)

- **Background:** White or `#F8F9FA` (near-white)
- **Sidebar:** `#071710` dark, white text
- **Typography:** Inter throughout (no DM Serif needed)
- **Accent:** `#1E8A5A` for active states, buttons
- **Tables:** Clean, minimal, Inter 13–14px
- **Cards:** White, `rounded-xl`, subtle shadow
- **Buttons:** Same as public button system
- **Status badges:** `active` (green), `inactive` (gray), `featured` (emerald outlined)
- **No unnecessary charts** (unless admin dashboard shows a meaningful stat)

---

## Admin Navigation (Sidebar)

```
[RECYCLE27 Admin]

Dashboard
———
Content
  Announcements
  Important Dates
  Speakers
  Committees
  Registration
  Programme
  Documents
———
Assets
  Accommodation
  Publications
  Sponsors
  Gallery
———
Support
  FAQs
———
System
  Site Settings
  ——
  [← Back to Website]
```

Sidebar width: ~220px (desktop), drawer on mobile.

---

## Admin Pages

### `/admin` — Dashboard

**Purpose:** Overview of key content status

**Widgets (cards):**
1. **Active Announcements** — count badge + "Latest: [text]" + Edit link
2. **Speakers** — total active speakers count
3. **Important Dates** — next upcoming date
4. **Programme Days** — days added / total sessions
5. **Gallery** — total active images
6. **FAQs** — total active FAQs
7. **Quick Actions:**
   - Add Announcement
   - Add Speaker
   - Update Important Date
   - Upload Gallery Image

Layout: 3-column card grid (desktop), 2-column (tablet), 1-column (mobile).

---

### `/admin/announcements` — Announcements

**List view:**
| Title | Body (truncated) | Featured | Active | Sort | Actions |
|-------|----------|---------|--------|------|---------|
| Deadline Extension | Abstract submission... | ✓ | ✓ | 1 | Edit / Delete |

**Add/Edit form fields:**
- Title (text, required)
- Body (textarea, required)
- Link URL (url, optional)
- Link Label (text, optional)
- Is Featured (toggle — only one should be featured)
- Is Active (toggle)
- Sort Order (number)

**Validation:** If setting `is_featured = true`, warn admin if another is already featured.

---

### `/admin/dates` — Important Dates

**List view:**
| Label | Date | Category | Is Countdown | Active | Actions |
|-------|------|----------|-------------|--------|---------|
| Abstract Submission Deadline | 15 Jan 2027 | submission | ✓ | ✓ | Edit / Delete |

**Add/Edit form fields:**
- Label (text, required)
- Date (date picker, required)
- Description (textarea, optional)
- Category (select: submission | notification | registration | conference)
- Is Countdown Target (radio/toggle — only one allowed)
- Is Active (toggle)
- Sort Order (number)

---

### `/admin/speakers` — Speakers

**List view:**
| Photo | Name | Type | Institution | Country | Active | Sort | Actions |
|-------|------|------|------------|---------|--------|------|---------|

**Add/Edit form fields:**
- Name (text, required)
- Designation (text, required)
- Institution (text, required)
- Country (text, required)
- Speaker Type (select: keynote | plenary | invited | other)
- Topic (text)
- Abstract (textarea)
- Bio (rich text or textarea)
- Photo (image upload → Supabase Storage)
- Website (url)
- Email (email, internal)
- Sort Order (number)
- Is Active (toggle)

**Image upload:** Drag-and-drop or file picker, stored in `speakers/` bucket in Supabase Storage.

---

### `/admin/committees` — Committees

**List view:**
| Name | Committee Type | Role | Institution | Active | Sort | Actions |

**Add/Edit form fields:**
- Name (text, required)
- Designation (text)
- Institution (text)
- Country (text)
- Committee Type (select: organizing | scientific | advisory | technical)
- Role (text — e.g. "Chair", "Member")
- Photo (image upload, optional)
- Sort Order
- Is Active

---

### `/admin/registration` — Registration

**List view:**
| Category | Early Bird | Regular | On-site | Active | Sort | Actions |

**Add/Edit form fields:**
- Name (text, required)
- Description (text — sublabel e.g. "UG / PG / PhD")
- Icon Name (text — Lucide icon name)
- Early Bird Fee (number)
- Regular Fee (number)
- On-site Fee (number)
- Currency (text, default INR)
- Early Bird Deadline (date)
- Regular Deadline (date)
- Is Active (toggle)
- Sort Order

**Site-level registration settings** (shown as separate section or in Site Settings):
- Registration URL (external link)
- Registration Brochure URL

---

### `/admin/programme` — Programme

**Layout:** Tab for each day + programme items within each day

**Day management:**
- Add Day: label (Day 1), date, theme
- Reorder days

**Per-day item list:**
| Time | Title | Type | Location | Speaker | Active | Sort | Actions |

**Add/Edit programme item:**
- Day (select)
- Start Time (time picker)
- End Time (time picker)
- Title (text, required)
- Description (textarea)
- Location (text)
- Session Type (select: registration | keynote | session | panel | break | social | workshop)
- Speaker (select from speakers list — optional)
- Sort Order
- Is Active

---

### `/admin/documents` — Documents

**List view:**
| Title | Type | Format | Active | Sort | Actions |

**Add/Edit:**
- Title (text, required)
- Document Type (select)
- File (upload → Supabase Storage)
- File Format (auto-detected or manual: PDF | DOCX | ZIP)
- Label (short button label)
- Is Active
- Sort Order

---

### `/admin/accommodation` — Accommodation

**List view:**
| Name | Type | Active | Sort | Actions |

**Add/Edit:**
- Name (text)
- Description (textarea)
- Type (select: campus_guesthouse | campus_hostel | nearby_hotel)
- Icon Name (text)
- Features (multi-line text — one feature per line, parsed as array)
- Price Range (text)
- Booking URL (url)
- Contact Info (text)
- Is Active
- Sort Order

---

### `/admin/publications` — Publications & Awards

**Tabs:** Publications | Awards

**Publications list:**
| Name | Publisher | Type | Active | Sort | Actions |

**Add/Edit publication:**
- Name, Publisher, Description, Logo (upload), Website
- Type (proceedings | journal | partner)
- Is Indicative (toggle)
- Is Active, Sort Order

**Awards list:**
| Name | Is Announced | Active | Sort | Actions |

**Add/Edit award:**
- Name, Description, Eligibility, Selection Process
- Icon Name
- Is Announced (toggle — controls "announcement coming soon" note)
- Is Active, Sort Order

---

### `/admin/sponsors` — Sponsors

**List view grouped by tier:**

| Logo | Name | Tier | Website | Active | Sort | Actions |

**Add/Edit:**
- Name (text, required)
- Tier (select: platinum | gold | silver | supporting)
- Logo (image upload)
- Website (url)
- Description (optional)
- Is Active
- Sort Order

---

### `/admin/gallery` — Gallery

**List view:** Grid of thumbnails or table view toggle

| Thumbnail | Title | Category | Edition | Featured | Active | Sort | Actions |

**Add/Edit:**
- Title (text, required)
- Caption (text)
- Image (upload → Supabase Storage)
- Alt Text (text, required, accessibility)
- Category (select)
- Edition (text — "RECYCLE26", "RECYCLE27")
- Is Featured (toggle)
- Is Active
- Sort Order

**Bulk upload:** Allow multiple image uploads at once (with sequential form fill or batch defaults)

---

### `/admin/faqs` — FAQs

**List view:**
| Question (truncated) | Category | Featured | Active | Sort | Actions |

**Add/Edit:**
- Question (text, required)
- Answer (textarea or rich text, required)
- Category (select)
- Is Featured (toggle)
- Is Active
- Sort Order

---

### `/admin/settings` — Site Settings

**Layout:** Grouped settings form

**Groups:**
1. **Conference Information**
   - Conference Name, Full Name, Dates (display text), Start Date, End Date, Venue, Address

2. **Contact**
   - Email, Phone

3. **External Links**
   - Registration URL, Abstract Submission URL, Registration Brochure URL, Sponsorship Brochure URL, IITG URL, WMRG URL

4. **Social Media**
   - LinkedIn URL, Twitter/X URL, YouTube URL

5. **Maps**
   - Google Maps Embed URL, Google Maps Link

6. **Countdown**
   - Countdown Target Date (date picker)

7. **SEO**
   - Homepage Meta Description, OG Image URL

**Form behavior:** Each setting is a labeled input. Grouped by section. Single "Save All Settings" button, or individual save per row.

---

## Admin Authentication

```ts
// Admin login: /admin/login
// Using Supabase Auth: signInWithPassword
// Session stored in Supabase cookie (server-side)
// All /admin/* routes protected by middleware
```

### `middleware.ts`
```ts
import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Check for valid session
    // Redirect to /admin/login if not authenticated
  }
}
```

---

## Admin Layout

```
components/
└── admin/
    ├── AdminLayout.tsx      # Sidebar + content wrapper
    ├── AdminSidebar.tsx     # Nav sidebar
    ├── AdminHeader.tsx      # Top bar with page title + user info
    ├── AdminTable.tsx       # Reusable data table with sort/filter
    ├── AdminForm.tsx        # Reusable form wrapper
    ├── AdminFormField.tsx   # Labeled input/textarea/select/toggle
    ├── ImageUpload.tsx      # File upload component for images
    ├── StatusBadge.tsx      # Active/Inactive/Featured badges
    └── ConfirmDelete.tsx    # Delete confirmation modal
```
