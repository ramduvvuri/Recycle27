# DATA-MODEL.md — Recycle27 Database Schema

## Overview

**Database:** Supabase (PostgreSQL)
**ORM / Client:** Supabase JS client (TypeScript)
**Migrations:** `supabase/migrations/`

All tables include:
- `id` UUID PRIMARY KEY DEFAULT gen_random_uuid()
- `created_at` TIMESTAMPTZ DEFAULT now()
- `updated_at` TIMESTAMPTZ DEFAULT now() (auto-updated via trigger)

---

## Tables

### 1. `announcements`

Manages news/updates shown in the Announcement Bar and a potential full announcements page.

```sql
CREATE TABLE announcements (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title       TEXT NOT NULL,               -- Short label e.g. "Deadline Extension"
  body        TEXT NOT NULL,               -- Full announcement text
  link_url    TEXT,                        -- Optional CTA link
  link_label  TEXT,                        -- Optional CTA label e.g. "Learn More"
  is_active   BOOLEAN NOT NULL DEFAULT true,
  is_featured BOOLEAN NOT NULL DEFAULT false,  -- If true, shown in announcement bar
  sort_order  INTEGER NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now()
);
```

**Notes:**
- Only the most recent `is_featured = true AND is_active = true` announcement appears in the home bar
- Multiple active announcements can exist for a full announcements page

---

### 2. `important_dates`

Drives the Important Dates timeline and the homepage countdown.

```sql
CREATE TABLE important_dates (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  label        TEXT NOT NULL,             -- e.g. "Abstract Submission Deadline"
  date         DATE NOT NULL,             -- e.g. 2027-01-15
  description  TEXT,                      -- Optional additional description
  category     TEXT NOT NULL DEFAULT 'submission',
               -- ENUM: 'submission' | 'notification' | 'registration' | 'conference'
  is_active    BOOLEAN NOT NULL DEFAULT true,
  is_countdown_target BOOLEAN NOT NULL DEFAULT false, -- Only one row should be true
  sort_order   INTEGER NOT NULL DEFAULT 0,
  created_at   TIMESTAMPTZ DEFAULT now(),
  updated_at   TIMESTAMPTZ DEFAULT now()
);
```

**Notes:**
- `is_countdown_target = true` identifies the date used by the homepage countdown timer
- Exactly one row should have `is_countdown_target = true`
- `category` maps to home page filtering and Call for Abstracts timeline sections

---

### 3. `speakers`

Keynote and plenary speakers for the conference.

```sql
CREATE TABLE speakers (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,                -- e.g. "Prof. Maria Gonzalez"
  designation TEXT NOT NULL,               -- e.g. "Professor"
  institution TEXT NOT NULL,               -- e.g. "University of Barcelona"
  country     TEXT NOT NULL,               -- e.g. "Spain"
  bio         TEXT,                        -- Full biography (for detail view)
  topic       TEXT,                        -- Talk/presentation title
  abstract    TEXT,                        -- Talk abstract
  speaker_type TEXT NOT NULL DEFAULT 'keynote',
               -- ENUM: 'keynote' | 'plenary' | 'invited' | 'other'
  image_url   TEXT,                        -- Path to speaker photo
  email       TEXT,                        -- Internal only, not displayed publicly
  website     TEXT,                        -- Optional personal/institutional website
  sort_order  INTEGER NOT NULL DEFAULT 0,
  is_active   BOOLEAN NOT NULL DEFAULT true,
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now()
);
```

---

### 4. `committee_members`

Members of organizing and scientific/advisory committees.

```sql
CREATE TABLE committee_members (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name            TEXT NOT NULL,           -- "Prof. John Smith"
  designation     TEXT,                    -- "Professor, Department of..."
  institution     TEXT,                    -- "IIT Guwahati"
  country         TEXT,
  committee_type  TEXT NOT NULL,           -- ENUM: 'organizing' | 'scientific' | 'advisory' | 'technical'
  role            TEXT,                    -- e.g. "Chair", "Co-Chair", "Member"
  image_url       TEXT,
  sort_order      INTEGER NOT NULL DEFAULT 0,
  is_active       BOOLEAN NOT NULL DEFAULT true,
  created_at      TIMESTAMPTZ DEFAULT now(),
  updated_at      TIMESTAMPTZ DEFAULT now()
);
```

---

### 5. `registration_categories`

Registration fee categories and pricing tiers.

```sql
CREATE TABLE registration_categories (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name         TEXT NOT NULL,             -- "Student (UG/PG/PhD)"
  description  TEXT,                      -- "UG / PG / PhD"
  icon_name    TEXT,                      -- Lucide icon name e.g. "GraduationCap"
  early_bird_fee    NUMERIC(10,2),        -- e.g. 2000.00
  regular_fee       NUMERIC(10,2),        -- e.g. 2500.00
  onsite_fee        NUMERIC(10,2),        -- e.g. 3000.00
  currency          TEXT NOT NULL DEFAULT 'INR',
  early_bird_deadline DATE,               -- e.g. 2027-02-15
  regular_deadline    DATE,               -- e.g. 2027-03-31
  is_active     BOOLEAN NOT NULL DEFAULT true,
  sort_order    INTEGER NOT NULL DEFAULT 0,
  created_at    TIMESTAMPTZ DEFAULT now(),
  updated_at    TIMESTAMPTZ DEFAULT now()
);
```

---

### 6. `programme_days`

The 3 conference days.

```sql
CREATE TABLE programme_days (
  id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  label     TEXT NOT NULL,      -- "Day 1"
  date      DATE NOT NULL,      -- 2027-05-12
  theme     TEXT,               -- Optional day theme/focus
  is_active BOOLEAN NOT NULL DEFAULT true,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
```

### 7. `programme_items`

Individual sessions, breaks, and events within each day.

```sql
CREATE TABLE programme_items (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  day_id       UUID NOT NULL REFERENCES programme_days(id) ON DELETE CASCADE,
  time_start   TIME NOT NULL,              -- "09:00"
  time_end     TIME NOT NULL,              -- "10:00"
  title        TEXT NOT NULL,             -- "Registration & Welcome Tea"
  description  TEXT,                      -- Speaker name or session subtitle
  location     TEXT,                      -- "Main Foyer"
  session_type TEXT NOT NULL DEFAULT 'session',
               -- ENUM: 'registration' | 'keynote' | 'session' | 'panel' | 'break' | 'social' | 'workshop'
  speaker_id   UUID REFERENCES speakers(id),  -- Optional link to speaker
  sort_order   INTEGER NOT NULL DEFAULT 0,
  is_active    BOOLEAN NOT NULL DEFAULT true,
  created_at   TIMESTAMPTZ DEFAULT now(),
  updated_at   TIMESTAMPTZ DEFAULT now()
);
```

---

### 8. `documents`

Downloadable files (templates, brochures, guidelines).

```sql
CREATE TABLE documents (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title         TEXT NOT NULL,           -- "Abstract Template (DOCX)"
  document_type TEXT NOT NULL,           -- ENUM: 'abstract_template' | 'paper_template' | 'poster_template' | 'brochure' | 'guidelines' | 'other'
  file_url      TEXT NOT NULL,           -- URL to file (Supabase Storage)
  file_format   TEXT,                    -- "DOCX" | "PDF" | "ZIP"
  file_size     TEXT,                    -- e.g. "2 MB"
  label         TEXT,                    -- Short label for download button
  is_active     BOOLEAN NOT NULL DEFAULT true,
  sort_order    INTEGER NOT NULL DEFAULT 0,
  created_at    TIMESTAMPTZ DEFAULT now(),
  updated_at    TIMESTAMPTZ DEFAULT now()
);
```

---

### 9. `accommodation_options`

Accommodation types available to conference participants.

```sql
CREATE TABLE accommodation_options (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name         TEXT NOT NULL,            -- "IITG Guest House"
  description  TEXT,                     -- Detailed description
  type         TEXT NOT NULL,            -- ENUM: 'campus_guesthouse' | 'campus_hostel' | 'nearby_hotel'
  icon_name    TEXT,                     -- Lucide icon name
  features     TEXT[],                   -- Array of feature strings (bullet points)
  price_range  TEXT,                     -- e.g. "₹ 2,000 – ₹ 4,000 / night"
  booking_url  TEXT,                     -- External booking link
  contact_info TEXT,                     -- Contact details
  is_active    BOOLEAN NOT NULL DEFAULT true,
  sort_order   INTEGER NOT NULL DEFAULT 0,
  created_at   TIMESTAMPTZ DEFAULT now(),
  updated_at   TIMESTAMPTZ DEFAULT now()
);
```

---

### 10. `publication_items`

Journal publication partners and proceedings info.

```sql
CREATE TABLE publication_items (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name         TEXT NOT NULL,            -- "Journal of Cleaner Production"
  publisher    TEXT NOT NULL,            -- "Elsevier"
  description  TEXT,
  logo_url     TEXT,
  website      TEXT,
  type         TEXT NOT NULL DEFAULT 'journal',
               -- ENUM: 'proceedings' | 'journal' | 'partner'
  is_indicative BOOLEAN NOT NULL DEFAULT true,  -- If true, show "(Indicative)" label
  is_active    BOOLEAN NOT NULL DEFAULT true,
  sort_order   INTEGER NOT NULL DEFAULT 0,
  created_at   TIMESTAMPTZ DEFAULT now(),
  updated_at   TIMESTAMPTZ DEFAULT now()
);
```

---

### 11. `awards`

Conference awards.

```sql
CREATE TABLE awards (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name           TEXT NOT NULL,          -- "Best Paper Award"
  description    TEXT NOT NULL,          -- "For the most outstanding research contribution."
  eligibility    TEXT,                   -- Who can receive this award
  selection_process TEXT,               -- How it's selected
  icon_name      TEXT,                  -- Lucide icon name e.g. "Trophy"
  is_announced   BOOLEAN NOT NULL DEFAULT false,
  is_active      BOOLEAN NOT NULL DEFAULT true,
  sort_order     INTEGER NOT NULL DEFAULT 0,
  created_at     TIMESTAMPTZ DEFAULT now(),
  updated_at     TIMESTAMPTZ DEFAULT now()
);
```

---

### 12. `sponsors`

Conference sponsors by tier.

```sql
CREATE TABLE sponsors (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,             -- "TATA"
  tier        TEXT NOT NULL,             -- ENUM: 'platinum' | 'gold' | 'silver' | 'supporting'
  logo_url    TEXT NOT NULL,             -- URL to sponsor logo
  website     TEXT,                      -- Sponsor website URL
  description TEXT,                      -- Optional brief description
  is_active   BOOLEAN NOT NULL DEFAULT true,
  sort_order  INTEGER NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now()
);
```

---

### 13. `gallery_items`

Gallery photographs from past conferences and events.

```sql
CREATE TABLE gallery_items (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title       TEXT NOT NULL,             -- "Inaugural Session"
  caption     TEXT,                      -- "RECYCLE26"
  image_url   TEXT NOT NULL,             -- URL to image (Supabase Storage)
  alt_text    TEXT NOT NULL,             -- Descriptive alt text for accessibility
  category    TEXT NOT NULL DEFAULT 'general',
              -- ENUM: 'inauguration' | 'technical_sessions' | 'workshops' | 'cultural_events' | 'campus' | 'people' | 'previous_editions' | 'general'
  edition     TEXT,                      -- "RECYCLE26", "RECYCLE27", etc.
  is_featured BOOLEAN NOT NULL DEFAULT false,  -- Show on homepage gallery preview
  is_active   BOOLEAN NOT NULL DEFAULT true,
  sort_order  INTEGER NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now()
);
```

---

### 14. `faqs`

Frequently asked questions.

```sql
CREATE TABLE faqs (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question    TEXT NOT NULL,
  answer      TEXT NOT NULL,
  category    TEXT NOT NULL DEFAULT 'general',
              -- ENUM: 'general' | 'registration' | 'abstract_submission' | 'programme' | 'travel_accommodation' | 'publications_awards' | 'sponsorship' | 'on_site' | 'others'
  is_featured BOOLEAN NOT NULL DEFAULT false,  -- Show on home FAQ preview
  is_active   BOOLEAN NOT NULL DEFAULT true,
  sort_order  INTEGER NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now()
);
```

---

### 15. `site_settings`

Key-value store for global site settings managed by admin.

```sql
CREATE TABLE site_settings (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key         TEXT NOT NULL UNIQUE,      -- Setting identifier
  value       TEXT,                      -- Setting value (string, URL, JSON, etc.)
  label       TEXT NOT NULL,             -- Human-readable label for admin UI
  description TEXT,                      -- Admin guidance text
  type        TEXT NOT NULL DEFAULT 'text',
              -- ENUM: 'text' | 'url' | 'date' | 'boolean' | 'json'
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now()
);
```

**Default settings to seed:**
| key | label | type | example value |
|-----|-------|------|---------------|
| `conference_name` | Conference Name | text | RECYCLE27 |
| `conference_full_name` | Full Conference Name | text | International Conference on Sustainable Waste Management and Circular Economy |
| `conference_dates` | Conference Dates | text | 12–14 May 2027 |
| `conference_start_date` | Conference Start Date | date | 2027-05-12 |
| `conference_end_date` | Conference End Date | date | 2027-05-14 |
| `conference_venue` | Venue Name | text | IIT Guwahati |
| `conference_address` | Full Address | text | IIT Guwahati, Assam 781039, India |
| `contact_email` | Contact Email | text | recycle27@iitg.ac.in |
| `contact_phone` | Contact Phone | text | +91 361 258 3000 |
| `countdown_target_date` | Countdown Target Date | date | 2027-05-12 |
| `registration_url` | Registration URL | url | [CONTENT PLACEHOLDER] |
| `abstract_submission_url` | Abstract Submission URL | url | [CONTENT PLACEHOLDER] |
| `registration_brochure_url` | Registration Brochure URL | url | [CONTENT PLACEHOLDER] |
| `sponsorship_brochure_url` | Sponsorship Brochure URL | url | [CONTENT PLACEHOLDER] |
| `iitg_url` | IIT Guwahati Website | url | https://www.iitg.ac.in |
| `wmrg_url` | WMRG Website | url | [CONTENT PLACEHOLDER] |
| `social_linkedin` | LinkedIn URL | url | [CONTENT PLACEHOLDER] |
| `social_twitter` | Twitter/X URL | url | [CONTENT PLACEHOLDER] |
| `social_youtube` | YouTube URL | url | [CONTENT PLACEHOLDER] |
| `google_maps_embed_url` | Google Maps Embed URL | url | [CONTENT PLACEHOLDER] |
| `google_maps_link` | Google Maps Link | url | [CONTENT PLACEHOLDER] |
| `meta_description` | Homepage Meta Description | text | Join RECYCLE27... |
| `og_image_url` | Open Graph Image | url | /og-image.jpg |

---

## Migrations Structure

```
supabase/
├── migrations/
│   ├── 001_create_announcements.sql
│   ├── 002_create_important_dates.sql
│   ├── 003_create_speakers.sql
│   ├── 004_create_committee_members.sql
│   ├── 005_create_registration_categories.sql
│   ├── 006_create_programme.sql
│   ├── 007_create_documents.sql
│   ├── 008_create_accommodation.sql
│   ├── 009_create_publications.sql
│   ├── 010_create_awards.sql
│   ├── 011_create_sponsors.sql
│   ├── 012_create_gallery.sql
│   ├── 013_create_faqs.sql
│   ├── 014_create_site_settings.sql
│   ├── 015_create_updated_at_trigger.sql
│   └── 016_seed_site_settings.sql
└── seed.sql  (sample content for development)
```

---

## Row Level Security (RLS)

```sql
-- Public read access for all published content tables
-- (announcements, important_dates, speakers, etc.)

ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read active announcements" ON announcements
  FOR SELECT USING (is_active = true);

-- Similar policies for all public content tables...

-- Admin write access via service_role key (server-side only)
-- Never expose service_role key to client
```

---

## TypeScript Types

```ts
// types/database.ts

export interface Announcement {
  id: string;
  title: string;
  body: string;
  link_url?: string;
  link_label?: string;
  is_active: boolean;
  is_featured: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface ImportantDate {
  id: string;
  label: string;
  date: string;
  description?: string;
  category: 'submission' | 'notification' | 'registration' | 'conference';
  is_active: boolean;
  is_countdown_target: boolean;
  sort_order: number;
}

export interface Speaker {
  id: string;
  name: string;
  designation: string;
  institution: string;
  country: string;
  bio?: string;
  topic?: string;
  abstract?: string;
  speaker_type: 'keynote' | 'plenary' | 'invited' | 'other';
  image_url?: string;
  website?: string;
  sort_order: number;
  is_active: boolean;
}

export interface CommitteeMember {
  id: string;
  name: string;
  designation?: string;
  institution?: string;
  country?: string;
  committee_type: 'organizing' | 'scientific' | 'advisory' | 'technical';
  role?: string;
  image_url?: string;
  sort_order: number;
  is_active: boolean;
}

export interface RegistrationCategory {
  id: string;
  name: string;
  description?: string;
  icon_name?: string;
  early_bird_fee?: number;
  regular_fee?: number;
  onsite_fee?: number;
  currency: string;
  early_bird_deadline?: string;
  regular_deadline?: string;
  is_active: boolean;
  sort_order: number;
}

export interface ProgrammeDay {
  id: string;
  label: string;
  date: string;
  theme?: string;
  is_active: boolean;
  sort_order: number;
  items?: ProgrammeItem[];
}

export interface ProgrammeItem {
  id: string;
  day_id: string;
  time_start: string;
  time_end: string;
  title: string;
  description?: string;
  location?: string;
  session_type: 'registration' | 'keynote' | 'session' | 'panel' | 'break' | 'social' | 'workshop';
  speaker?: Speaker;
  sort_order: number;
  is_active: boolean;
}

export interface Document {
  id: string;
  title: string;
  document_type: string;
  file_url: string;
  file_format?: string;
  file_size?: string;
  label?: string;
  is_active: boolean;
  sort_order: number;
}

export interface Sponsor {
  id: string;
  name: string;
  tier: 'platinum' | 'gold' | 'silver' | 'supporting';
  logo_url: string;
  website?: string;
  description?: string;
  is_active: boolean;
  sort_order: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption?: string;
  image_url: string;
  alt_text: string;
  category: string;
  edition?: string;
  is_featured: boolean;
  is_active: boolean;
  sort_order: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  is_featured: boolean;
  is_active: boolean;
  sort_order: number;
}

export interface SiteSetting {
  id: string;
  key: string;
  value: string | null;
  label: string;
  description?: string;
  type: 'text' | 'url' | 'date' | 'boolean' | 'json';
}
```
