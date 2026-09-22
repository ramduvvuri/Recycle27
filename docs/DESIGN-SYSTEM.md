# DESIGN-SYSTEM.md — Recycle27 Design System

## Color Tokens

All colors must be defined as CSS custom properties in `globals.css` and as Tailwind config extensions.

```css
:root {
  /* Backgrounds */
  --color-primary-dark:    #071710;   /* Deepest dark BG (hero, footer, dark sections) */
  --color-secondary-dark:  #0D241B;   /* Secondary dark BG (dark card areas) */
  --color-deep-emerald:    #145C3C;   /* Accent block BGs, active nav indicator */
  --color-primary-emerald: #1E8A5A;   /* Primary CTA button fill, eyebrow lines */
  --color-muted-green:     #8FA69A;   /* Muted decorative green, disabled states */
  --color-warm-cream:      #F2EFE6;   /* Cream accent (quote backgrounds, pullouts) */
  --color-soft-bg:         #FAF9F5;   /* Page background (light sections) */

  /* Text */
  --color-primary-dark-text: #111715; /* Default body text on light BG */
  --color-secondary-text:    #56615D; /* Secondary/meta text on light BG */
  --color-light-text:        #F5F3ED; /* Text on dark BG */

  /* Borders */
  --color-light-border: #D9DED8; /* Dividers on light backgrounds */
  --color-dark-border:  #294137; /* Dividers on dark backgrounds */
}
```

### Tailwind Extension (`tailwind.config.ts`)

```ts
colors: {
  'primary-dark':    '#071710',
  'secondary-dark':  '#0D241B',
  'deep-emerald':    '#145C3C',
  'primary-emerald': '#1E8A5A',
  'muted-green':     '#8FA69A',
  'warm-cream':      '#F2EFE6',
  'soft-bg':         '#FAF9F5',
  'dark-text':       '#111715',
  'secondary-text':  '#56615D',
  'light-text':      '#F5F3ED',
  'light-border':    '#D9DED8',
  'dark-border':     '#294137',
}
```

---

## Typography

### Font Families

```css
/* In globals.css or layout.tsx via next/font */
--font-display: 'DM Serif Display', Georgia, serif;
--font-body:    'Inter', system-ui, sans-serif;
```

### Type Scale

| Role | Family | Size (Desktop) | Size (Mobile) | Weight | Letter-Spacing | Line-Height |
|------|--------|---------------|--------------|--------|---------------|-------------|
| **Hero Title** | DM Serif Display | 80–96px | 48–56px | 400 | -0.01em | 1.05 |
| **Page Hero Title** | DM Serif Display | 56–72px | 40–48px | 400 | -0.01em | 1.1 |
| **Section Heading H2** | DM Serif Display | 40–48px | 28–36px | 400 | -0.01em | 1.2 |
| **Section Heading H3** | DM Serif Display | 28–36px | 22–28px | 400 | 0em | 1.25 |
| **Card Heading H4** | Inter | 18–20px | 16–18px | 600 | 0em | 1.4 |
| **Eyebrow Label** | Inter | 11–12px | 11px | 500 | 0.12–0.15em | 1.5 |
| **Body / Paragraph** | Inter | 15–16px | 14–15px | 400 | 0em | 1.7 |
| **Body Small** | Inter | 13–14px | 13px | 400 | 0em | 1.6 |
| **Nav Link** | Inter | 14px | — | 500 | 0em | 1 |
| **Button** | Inter | 14–15px | 14px | 500 | 0.01em | 1 |
| **Table Header** | Inter | 13px | 12px | 600 | 0.04em | 1.5 |
| **Date / Time** | Inter | 14px | 13px | 500 | 0em | 1.5 |
| **Large Quote** | DM Serif Display | 36–48px | 24–32px | 400 italic | 0em | 1.3 |

### Eyebrow Labels

Eyebrow labels appear above section headings. They are:
- ALL CAPS Inter, ~11–12px
- Letter-spacing: 0.12em
- Color: `--color-primary-emerald` (#1E8A5A) on light backgrounds
- Color: `--color-muted-green` (#8FA69A) on dark backgrounds
- Preceded by a short horizontal line (~24px) in the same color
- Pattern: `—— LABEL TEXT`

Example HTML structure:
```html
<div class="eyebrow">
  <span class="eyebrow-line"></span>
  <span class="eyebrow-text">CONFERENCE THEMES</span>
</div>
<h2>Key Areas of Focus</h2>
```

---

## Spacing System

Use Tailwind's default spacing scale. Define these semantic spacing tokens:

| Token | Value | Usage |
|-------|-------|-------|
| `section-y` | py-20 md:py-28 lg:py-32 | Standard section vertical padding |
| `section-y-sm` | py-12 md:py-16 | Compact section vertical padding |
| `container-x` | px-5 md:px-8 lg:px-12 | Horizontal content padding |
| `container-max` | max-w-7xl mx-auto | Max width container |
| `card-pad` | p-6 md:p-8 | Standard card internal padding |
| `card-pad-sm` | p-4 md:p-6 | Compact card internal padding |
| `gap-cards` | gap-4 md:gap-6 | Gap between cards in a grid |
| `eyebrow-mb` | mb-3 | Margin below eyebrow label |
| `heading-mb` | mb-4 md:mb-6 | Margin below major heading |
| `body-mb` | mb-8 md:mb-10 | Margin below body paragraph before CTA |

### Container Width

```html
<div class="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
  <!-- content -->
</div>
```

Max width: **1280px** (Tailwind `max-w-7xl`)

---

## Border Radius

| Component | Radius |
|-----------|--------|
| Buttons | `rounded-full` (pill) for primary CTA; `rounded-lg` for secondary |
| Cards | `rounded-xl` (12px) |
| Image thumbnails | `rounded-xl` |
| Input fields | `rounded-lg` (8px) |
| Badges/Tags | `rounded-full` |
| Table | No radius (flat) |
| Navbar dropdown | `rounded-xl` |

---

## Button System

### Primary Button (Filled Emerald)
- Background: `#1E8A5A` (primary-emerald)
- Text: `#F5F3ED` (light-text)
- Padding: `px-6 py-3`
- Font: Inter 14px, weight 500
- Border-radius: `rounded-full`
- Arrow icon: `→` or Lucide `ArrowRight` (16px, ml-2)
- Hover: background darkens to `#145C3C`
- Transition: 200ms ease

```html
<button class="btn-primary">Register Now →</button>
```

### Secondary Button (Outlined Dark)
- Background: transparent
- Border: 1.5px solid `#111715`
- Text: `#111715`
- Padding: `px-6 py-3`
- Font: Inter 14px, weight 500
- Border-radius: `rounded-full`
- Hover: background `#111715`, text `#F5F3ED`
- Transition: 200ms ease

Used for: "Submit Abstract →", "Learn More →", "Download Brochure"

### Secondary Button (Outlined Light, on dark BG)
- Background: transparent
- Border: 1.5px solid `#F5F3ED`
- Text: `#F5F3ED`
- Hover: background `rgba(255,255,255,0.1)`

### Icon Button (Dark Fill)
- Background: `#071710` (primary-dark)
- Text: `#F5F3ED`
- Padding: `px-6 py-3`
- Border-radius: `rounded-full`
- Includes leading icon

Used for: "Download Brochure" style buttons with document icon

---

## Card System

### Standard Card (Light)
```
Background: #FAF9F5 or white
Border: 1px solid #D9DED8
Border-radius: rounded-xl
Padding: p-6 md:p-8
```

### Dark Card (Dark BG sections)
```
Background: #0D241B
Border: 1px solid #294137
Border-radius: rounded-xl
Padding: p-6 md:p-8
```

### Icon Feature Card
```
Layout: icon (top or left) + heading + short description
Icon size: 24–32px stroke Lucide icon
Icon color: #1E8A5A on light, #8FA69A on dark
Background: white or #FAF9F5
Border: 1px solid #D9DED8
```

### Speaker Card
```
Layout: square/portrait image (top) + name + institution + country + divider line + topic
Image: aspect-square or 4:5, rounded-xl
Name: Inter 16px, weight 600
Institution: Inter 13px, color: secondary-text
Topic: Inter 14px, color: secondary-text, italic or normal
Divider: 24px line, color primary-emerald
```

### Keynote Speaker Card (Home preview)
```
Layout: small circular image (left) + name + institution stacked right
Image: 56×56px, rounded-full
Name: Inter 15px, weight 600
Institution: Inter 13px, secondary-text
```

---

## Icon System

- **Library:** Lucide React
- **Stroke weight:** 1.5px (default Lucide)
- **Size:** 20px (standard), 24px (feature/large)
- **Color on light BG:** `#111715` or `#1E8A5A`
- **Color on dark BG:** `#F5F3ED` or `#8FA69A`
- **Never colored icons**

---

## Dividers

```css
/* Horizontal section divider */
.divider { border-top: 1px solid var(--color-light-border); }
.divider-dark { border-top: 1px solid var(--color-dark-border); }

/* Short accent line (used in eyebrows) */
.accent-line {
  display: inline-block;
  width: 24px;
  height: 1.5px;
  background: var(--color-primary-emerald);
  margin-right: 10px;
  vertical-align: middle;
}
```

---

## Background Alternation

Sections alternate between:
1. `#FAF9F5` (soft-bg) — light section
2. `#FFFFFF` (white) — pure white section
3. `#071710` (primary-dark) — dark section (footer, some hero areas, closing CTAs)
4. `#0D241B` (secondary-dark) — dark card section

There should be a clear, intentional rhythm: light → dark → light → dark, etc.  
Do NOT alternate every single section — groupings of 2–3 light sections before a dark section is correct.

---

## Right-Side Vertical Text

Visible in mockups on all page heroes. This is:
- Small Inter uppercase text, ~10px, letter-spacing ~0.2em
- Rotated 90deg (or stacked vertically, text reads bottom-to-top)
- Positioned: absolute, right-side of hero
- Content varies per page:
  - Home hero: "RETHINK / REUSE / RECYCLE / FOR A BETTER TOMORROW"
  - About hero: "RETHINK / REUSE / RECYCLE / FOR A BETTER TOMORROW"
  - Speakers hero: "A / CLEANER / TOMORROW / TOGETHER"
  - Call for Abstracts: "PEOPLE / IDEAS / SOLUTIONS / A CLEANER / TOMORROW"
  - Venue hero: "PEOPLE / IDEAS / SOLUTIONS / A CLEANER / TOMORROW"
  - Gallery: "PEOPLE / IDEAS / SOLUTIONS / A CLEANER / TOMORROW"
- Color: `#F5F3ED` on dark hero, muted

This is a shared `<HeroSideText>` component accepting a `lines` prop.

---

## Scroll Indicator

Visible in Home mockup hero, bottom right area:
- Text: "SCROLL" in small uppercase Inter
- A thin vertical line (~40px) below it
- Color: `#F5F3ED` with ~60% opacity
- Position: absolute, bottom-right of hero
- Subtle fade-out animation that disappears once user scrolls

---

## Section Background Patterns (Subtle)

The "Conference Begins In" countdown section and some About section use a subtle leaf image overlay in the right column. This is:
- A real image (close-up leaf) with very high opacity or reduced opacity as a visual accent
- NOT a CSS pattern, NOT a gradient blob
- Must be actual photography

---

## Responsive Breakpoints

```ts
// tailwind.config.ts screens extension
screens: {
  'xs':  '375px',
  'sm':  '640px',
  'md':  '768px',
  'lg':  '1024px',
  'xl':  '1280px',
  '2xl': '1440px',
}
```

Breakpoint behavior:
- **Mobile (< 768px):** Single column, stacked layout, simplified hero
- **Tablet (768–1023px):** 2-column where applicable
- **Laptop (1024–1279px):** Full layout, slightly reduced spacing
- **Desktop (1280px+):** Full design as per mockups

---

## Logo / Wordmark

```
RECYCLE27
```
- **Font treatment:** "RECYCLE" in a heavier or contrasting style, "27" visually differentiated
- From mockup: "RECYCLE" appears in light/cream, "27" appears in `#1E8A5A` (primary-emerald) — making the "27" a color accent
- Used in: Navbar (top-left), Footer (bottom-left)
- Footer version: slightly larger with subtitle underneath

```html
<span class="logo-recycle">RECYCLE</span><span class="logo-27">27</span>
```

---

## Footer Structure

### Dark Footer Background: `#071710`
### Layout: 4 columns (desktop), 2 columns (tablet), stacked (mobile)

**Column 1 (left):**
```
RECYCLE27 [wordmark]
International Conference on Sustainable
Waste Management and Circular Economy
```

**Column 2:**
```
📍 IIT Guwahati
   Guwahati, Assam 781039, India
```
(Use Lucide MapPin icon, not emoji)

**Column 3:**
```
[LinkedIn icon] [X/Twitter icon] [YouTube icon]
—
Contact | Privacy Policy | Sitemap
```

**Column 4 (right):**
```
A CLEANER
TOMORROW
TOGETHER
```
(Stacked uppercase Inter, ~10–11px, letter-spacing heavy, right-aligned)

**Bottom Footer Line:**
```
© 2027 RECYCLE27. All rights reserved.
```
[IMPLEMENTATION DECISION REQUIRED: Confirm exact copyright line text]

---

## Announcement Bar

Sits between the hero and the next section on the Home page.

```
Structure: full-width dark-green bar (#145C3C or #1E8A5A)
Left: 🔔 icon (Lucide Bell) + "Latest Update" label + pipe + announcement text
Right: "View All Announcements →" link
Height: ~52px
Font: Inter 14px
```

This is a dynamic section — driven by admin-managed announcements.

---

## Image Overlay on Dark Heroes

All page heroes use a real photograph with a dark overlay for text legibility:
- Overlay: `rgba(7, 23, 16, 0.55)` (primary-dark at 55%)
- This reads visually as a dark environmental photograph, NOT a gradient
- Image must be served from `/public/images/heroes/`

---

## Form Elements

```css
input, textarea, select {
  border: 1px solid #D9DED8;
  border-radius: 8px;
  padding: 12px 16px;
  font-family: Inter;
  font-size: 14px;
  color: #111715;
  background: white;
}
input:focus, textarea:focus {
  outline: none;
  border-color: #1E8A5A;
  box-shadow: 0 0 0 3px rgba(30, 138, 90, 0.12);
}
label {
  font-size: 13px;
  font-weight: 500;
  color: #111715;
  margin-bottom: 6px;
}
```
