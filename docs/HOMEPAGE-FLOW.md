# HOMEPAGE-FLOW.md — Home Page Section-by-Section Specification

## Overview

The Home page is the central narrative of the entire website. It functions as a cinematic scroll journey through the conference identity. Every major page destination must be meaningfully represented somewhere in the home page's scroll.

**Route:** `/`
**File:** `app/page.tsx`
**Background rhythm:** dark hero → announcement bar → light → dark themes → light → dark countdown-about split → dark themes → light speakers → split (dark dates + light links) → footer

---

## Section 1: Floating Navigation

**Component:** `<Navbar />`
**Position:** Fixed top, z-50

Navbar contents (from mockup):
- Left: `RECYCLE27` wordmark ("RECYCLE" cream, "27" emerald)
- Center links: `Home | About | Themes | Speakers | Programme | Registration | More ▾`
- Right: `[Register Now →]` dark filled button

Scroll behavior:
- At top of page: nav is transparent or minimal background
- After scrolling ~80px: nav gains `bg-white/95 backdrop-blur-sm shadow-xs border-b border-light-border`

Active state: "Home" link gets a thin underline indicator at top of page.

---

## Section 2: Hero

**Component:** `<HeroSection />`
**Background:** Full-bleed photograph of IIT Guwahati campus (aerial or campus building view) with dark overlay `rgba(7,23,16,0.55)`
**Height:** `min-h-screen` or `min-h-[700px]`

### Content (top to bottom, left to right):

**Eyebrow row (top-left):**
```
PEOPLE · IDEAS · SOLUTIONS · A CLEANER TOMORROW
```
Inter 11px, letter-spacing 0.12em, muted green color, dots as separators

**Hero title:**
```
RECYCLE27
```
DM Serif Display, ~80–96px desktop / ~52px mobile, color: `#F5F3ED`
All-caps styling (or naturally uppercase as the conference name is all caps)

**Subtitle:**
```
International Conference on Sustainable
Waste Management and Circular Economy
```
DM Serif Display or Inter, ~18–20px, color: `#F5F3ED` at ~85% opacity

**Date + Venue row:**
- Calendar icon (Lucide `CalendarDays`, 16px, muted-green) + `12 – 14 May 2027`
- Map pin icon (Lucide `MapPin`, 16px, muted-green) + `IIT Guwahati, Assam, India`
- Horizontal arrangement, Inter 14px, `#F5F3ED`
- Spacing: `gap-6` between date and venue items

**CTA buttons:**
- `[Register Now →]` — `btn-primary` (filled emerald)
- `[Submit Abstract →]` — `btn-secondary` (outlined, light)
- Spacing: `gap-4`, flex row

**Right-side vertical text:**
```
RETHINK
REUSE
RECYCLE
FOR A BETTER TOMORROW
```
Position: absolute, right-side of hero, vertically stacked, Inter 10px uppercase, letter-spacing 0.2em, `#F5F3ED` at ~70% opacity

**Scroll indicator (bottom right):**
```
SCROLL
|  (vertical line, ~40px)
```
Inter 9px uppercase, `#F5F3ED` at ~50% opacity. Fades out on scroll.

---

## Section 3: Announcement Bar

**Component:** `<AnnouncementBar />`
**Background:** `#1E8A5A` (primary-emerald)
**Height:** `h-13` (~52px)

Contents:
- Left: Bell icon + **"Latest Update"** (bold Inter 14px white) + `|` pipe + announcement text (Inter 14px white)
- Right: "View All Announcements →" (Inter 13px white underline link)

Data source: Latest active announcement from `announcements` table.

Animation: Text may subtly slide in from left on load (optional, simple fade).

---

## Section 4: Countdown + Quote

**Component:** `<CountdownSection />`
**Background:** `#FAF9F5` (soft-bg) left half + image (leaf photograph) right section
**Layout:** 2-column. Left ~55% countdown, right ~45% leaf image with overlay quote

### Left Column:
**Label:** "Conference Begins In" (Inter 14px 600, dark-text, mb-4)

**Countdown numbers:**
```
152         08          26          17
Days        Hours       Minutes     Seconds
```
- Numbers: Inter 64–72px, weight 300, dark-text
- Labels: Inter 12px, secondary-text
- Horizontal arrangement, `gap-8 md:gap-12`

### Right Column:
- Photograph: close-up of leaf/botanical (high quality)
- Quote overlaid on or beside image: `"Towards a Circular and Sustainable Future"`
- Quote style: DM Serif Display, 28–32px, italic, dark-text (if on light BG) or light (if dark)
- Short line beneath quote (24px, emerald)

Data source: Countdown target date from `site_settings` table (`countdown_target_date`).

---

## Section 5: About Preview

**Component:** `<AboutPreview />`
**Background:** `#FAF9F5` (soft-bg) — continues from section above or slight separator
**Layout:** 2-column (text left, image right)

### Left Column:
**Eyebrow:** `—— ABOUT RECYCLE27`
**Heading (DM Serif, ~40px):**
```
A Global Dialogue
for a Sustainable Tomorrow
```
**Body:**
```
RECYCLE27 brings together researchers, industry experts, policymakers
and students to discuss innovations and solutions for sustainable waste
management and circular economy. The conference aims to foster
collaboration, knowledge exchange and actionable outcomes for a
cleaner and more resilient future.
```
Inter 15px, secondary-text, line-height 1.7

**CTA:** `[Learn More About the Conference →]` — btn-secondary (outlined dark)

### Right Column:
- Photograph: IIT campus or aerial nature view (~480×360px, `rounded-xl`)
- Right of image (or overlapping): stacked text items:
  ```
  Cleaner
  Environments
  —
  Healthier
  Communities
  —
  A More
  Sustainable Future
  ```
  Inter 14px, right-aligned, dark-text or on dark panel

---

## Section 6: Themes Preview

**Component:** `<ThemesPreview />`
**Background:** `#071710` (primary-dark)
**Layout:** Heading row + 5-card grid

### Heading row:
- **Eyebrow:** `—— CONFERENCE THEMES` (muted-green)
- **Heading (DM Serif, ~40px, light-text):** "Key Areas of Focus"
- **Right side:** "Explore All Themes →" (small Inter link, muted-green)

### Theme cards (5 cards, equal width grid):
Each card:
- Background: `#0D241B` or slightly lighter dark
- Border: `1px solid #294137`
- Center-aligned content
- Icon: Lucide icon ~28px, muted-green
- Label: Inter 13–14px, light-text, centered, 2 lines

Themes (from mockup):
1. Icon: leaf/recycle → "Waste Management and Resource Recovery"
2. Icon: recycle arrows → "Circular Economy and Sustainable Systems"
3. Icon: institution → "Policy, Governance and Social Impact"
4. Icon: settings/gear → "Innovation and Emerging Technologies"
5. Icon: globe → "Climate, Environment and Human Health"

Responsive: 5 columns desktop → 3 columns tablet → 2 columns mobile → 1 column small

Data source: Static content (themes don't change frequently) — can be hardcoded or from a `themes` table.

---

## Section 7: Speakers Preview

**Component:** `<SpeakersPreview />`
**Background:** `#FAF9F5` (soft-bg)
**Layout:** Heading row + 4-card speaker grid

### Heading row:
- **Eyebrow:** `—— KEYNOTE SPEAKERS`
- **Heading (DM Serif, ~40px):** "Eminent Voices, Global Perspectives"
- **Right side:** "View All Speakers →" (Inter link, emerald)

### Speaker cards (4 cards):
**`<SpeakerCardCompact />`** — horizontal layout:
- ~56px square image (grayscale or natural), `rounded-xl` or `rounded-full`
- Name: Inter 15px 600
- Institution: Inter 13px secondary-text
- Green line divider

Data source: `speakers` table, filtered to `type = 'keynote'`, `active = true`, ordered by `sort_order`

Responsive: 4 columns desktop → 2×2 tablet → 1 column mobile

---

## Section 8: Important Dates + Quick Links

**Component:** `<DatesPreview />`
**Background:** Split layout
- Left ~55%: dark `#071710` — Important Dates list
- Right ~45%: light `#FAF9F5` — Quick Links

### Left (Dark):
- **Eyebrow:** `—— IMPORTANT DATES` (muted-green)
- Dates list (table-style):
  ```
  Abstract Submission Deadline      15 January 2027
  Acceptance Notification           15 February 2027
  Registration Deadline             31 March 2027
  Conference Dates                  12 – 14 May 2027
  ```
  - Label: Inter 14px, light-text
  - Date: Inter 14px, muted-green, right-aligned
  - Thin dividers between rows
- Footer: "View All Dates →" (Inter 13px, muted-green link)

### Right (Light):
- **Eyebrow:** `—— QUICK LINKS`
- 3 Quick Link cards in a grid:
  - Submit Abstract (document icon)
  - Register Now (person icon)
  - Download Brochure (download icon)
- Each card: centered icon + label, white BG, border, hover effect

Data source: `important_dates` table (for left) — active dates ordered by date.

---

## Section 9: [Additional Home Sections]

> **Note:** The mockup shows the homepage ending at the Important Dates + Quick Links section before the footer. However, per the specification, the Home page must contain meaningful previews of ALL major conference sections. The following sections are to be designed to match the established visual language and added below Section 8, before the footer.

Each of the following sections should be added, using the same design language:

### Registration Preview
- Background: White or soft-bg
- Eyebrow: `—— REGISTRATION`
- Heading: e.g., "Join the Conversation"
- Brief description + fee categories summary
- CTA: "Register Now →"
- Data: `registration_categories` table

### Programme Preview
- Background: Primary-dark
- Eyebrow: `—— CONFERENCE PROGRAMME`
- Heading: e.g., "Three Days of Ideas"
- Brief description of programme format
- Preview: Day tabs showing Day 1 morning sessions
- CTA: "View Full Programme →"
- Data: `programme_items` table (first few items)

### Venue & Travel Preview
- Background: Soft-bg
- Eyebrow: `—— VENUE`
- Heading: "IIT Guwahati, Assam"
- Brief description + campus photo
- Transport summary (3 methods)
- CTA: "Venue & Travel Details →"

### Accommodation Preview
- Background: White
- Eyebrow: `—— ACCOMMODATION`
- Heading: "Stay with Comfort"
- 3 accommodation options as cards
- CTA: "View Accommodation →"
- Data: `accommodation_options` table

### Publications & Awards Preview
- Background: Primary-dark
- Eyebrow: `—— PUBLICATIONS & AWARDS`
- Heading: "High-Quality Research, Real-World Impact"
- 3 award categories shown
- CTA: "Learn More →"

### Sponsors Preview
- Background: Soft-bg
- Eyebrow: `—— OUR SPONSORS`
- Heading: "Partners in Progress"
- Platinum/Gold sponsor logos in rows
- CTA: "View All Sponsors →"
- Data: `sponsors` table

### Gallery Preview
- Background: White
- Eyebrow: `—— GALLERY`
- Heading: "Moments from Previous Editions"
- ~6 gallery images in masonry or grid
- CTA: "View Full Gallery →"
- Data: `gallery_items` table (featured = true)

### FAQ Preview
- Background: Soft-bg
- Eyebrow: `—— FREQUENTLY ASKED QUESTIONS`
- Heading: "Have Questions?"
- ~4 most common FAQs as accordion
- CTA: "View All FAQs →"
- Data: `faqs` table (featured = true)

### Contact / Final CTA
- Background: Warm-cream or light with leaf decoration
- Eyebrow: `—— TOGETHER FOR A CLEANER TOMORROW`
- Heading: "Let's Create a Sustainable Future" (DM Serif, large)
- Body: short invitation text
- CTA: "Register Now →"
- Leaf/botanical decoration (right side)

---

## Section 22: Footer

**Component:** `<Footer />`
**Background:** `#071710` (primary-dark)

See DESIGN-SYSTEM.md for footer structure.

---

## Home Page Meta

```ts
// app/page.tsx
export const metadata = {
  title: 'RECYCLE27 — International Conference on Sustainable Waste Management',
  description: 'Join RECYCLE27 at IIT Guwahati, May 12–14, 2027. An international conference on sustainable waste management and circular economy bringing together researchers, policymakers and industry experts.',
  openGraph: {
    title: 'RECYCLE27',
    description: 'International Conference on Sustainable Waste Management and Circular Economy',
    images: ['/og-image.jpg'],
  }
}
```
