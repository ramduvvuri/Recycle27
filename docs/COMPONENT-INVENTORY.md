# COMPONENT-INVENTORY.md — Recycle27 Component Map

## Component Organization

```
components/
├── layout/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── AnnouncementBar.tsx
│   └── Breadcrumb.tsx
├── ui/
│   ├── Button.tsx
│   ├── EyebrowLabel.tsx
│   ├── SectionHeading.tsx
│   ├── HeroSideText.tsx
│   ├── ScrollIndicator.tsx
│   ├── Divider.tsx
│   ├── Badge.tsx
│   ├── InfoNote.tsx
│   └── QuoteBlock.tsx
├── sections/
│   ├── PageHero.tsx
│   ├── SectionWrapper.tsx
│   └── ClosingCTA.tsx
├── speakers/
│   ├── SpeakerCard.tsx
│   ├── SpeakerCardCompact.tsx
│   └── SpeakerGrid.tsx
├── programme/
│   ├── ProgrammeTabs.tsx
│   ├── ProgrammeRow.tsx
│   └── ProgrammeTable.tsx
├── dates/
│   ├── ImportantDatesList.tsx
│   ├── DateRow.tsx
│   └── Countdown.tsx
├── gallery/
│   ├── GalleryGrid.tsx
│   ├── GalleryCard.tsx
│   ├── GalleryFilter.tsx
│   └── GalleryLightbox.tsx
├── sponsors/
│   ├── SponsorTier.tsx
│   └── SponsorLogo.tsx
├── faqs/
│   ├── FAQSidebar.tsx
│   ├── FAQSection.tsx
│   └── FAQAccordion.tsx
├── forms/
│   ├── ContactForm.tsx
│   ├── FormField.tsx
│   └── FormSelect.tsx
├── cards/
│   ├── FeatureCard.tsx
│   ├── QuickLinkCard.tsx
│   ├── TransportCard.tsx
│   ├── AccommodationCard.tsx
│   └── ThemeCard.tsx
└── home/
    ├── HeroSection.tsx
    ├── CountdownSection.tsx
    ├── AboutPreview.tsx
    ├── ThemesPreview.tsx
    ├── SpeakersPreview.tsx
    ├── DatesPreview.tsx
    ├── RegistrationPreview.tsx
    ├── ProgrammePreview.tsx
    ├── VenuePreview.tsx
    ├── AccommodationPreview.tsx
    ├── PublicationsPreview.tsx
    ├── SponsorsPreview.tsx
    ├── GalleryPreview.tsx
    ├── FAQPreview.tsx
    └── ContactCTA.tsx
```

---

## Layout Components

### `Navbar.tsx`
**Location:** `components/layout/Navbar.tsx`
**Purpose:** Floating navigation present on all public pages

**Props:**
```ts
interface NavbarProps {
  // No props — reads from site settings / static config
}
```

**Behavior:**
- Position: `fixed top-0` with `z-50`
- Default state (at top): transparent or very slight background tint
- Scrolled state (after ~80px): gains `bg-white/95 backdrop-blur-sm shadow-sm`
- Height: ~64px (desktop), ~56px (mobile)
- Contains: Logo (left), nav links (center), Register Now button (right)
- Active page detection via `usePathname()`
- Active link shows underline: `border-b-2 border-primary-emerald`
- "More" link shows dropdown chevron and opens dropdown on hover/click
- Mobile: hamburger button → slides in full-screen or drawer menu
- Register Now button: `btn-primary rounded-full px-5 py-2.5 text-sm`

**State:**
- `isScrolled: boolean`
- `isMoreOpen: boolean`
- `isMobileOpen: boolean`

---

### `Footer.tsx`
**Location:** `components/layout/Footer.tsx`
**Purpose:** Shared footer on all public pages

**Layout (4-column grid):**
1. Logo + tagline
2. Address with map pin icon
3. Social icons + nav links
4. Right-side identity text

**Behavior:** Static — no dynamic data except possibly social links from site settings

---

### `AnnouncementBar.tsx`
**Location:** `components/layout/AnnouncementBar.tsx`
**Purpose:** Full-width announcement band between hero and main content on Home page

**Props:**
```ts
interface AnnouncementBarProps {
  announcement: {
    text: string;
    link?: string;
  };
  allAnnouncementsLink: string;
}
```

**Layout:**
- Background: `#1E8A5A` or `#145C3C`
- Left: Bell icon + "Latest Update" bold label + `|` divider + announcement text
- Right: "View All Announcements →" link
- Height: `h-12 md:h-14`
- Font: Inter 13–14px, text-light

---

### `Breadcrumb.tsx`
**Location:** `components/layout/Breadcrumb.tsx`
**Purpose:** Page breadcrumb displayed immediately below hero

**Props:**
```ts
interface BreadcrumbProps {
  items: Array<{ label: string; href?: string }>;
}
```

**Appearance:**
- Light background strip: `bg-white border-b border-light-border`
- Content: `Home > About` with `>` separator
- Font: Inter 13px, secondary-text
- "Home" links to `/`
- Current page is not linked (no href)

---

## UI Primitive Components

### `Button.tsx`
**Location:** `components/ui/Button.tsx`

**Props:**
```ts
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'secondary-light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}
```

Renders as `<a>` when `href` is provided, `<button>` otherwise.

---

### `EyebrowLabel.tsx`
**Location:** `components/ui/EyebrowLabel.tsx`

**Props:**
```ts
interface EyebrowLabelProps {
  text: string;
  variant?: 'light' | 'dark';  // light=on light BG, dark=on dark BG
}
```

**Renders:**
```html
<div class="eyebrow">
  <span class="eyebrow-line"></span>
  <span class="eyebrow-text">CONFERENCE OVERVIEW</span>
</div>
```

---

### `SectionHeading.tsx`
**Location:** `components/ui/SectionHeading.tsx`

**Props:**
```ts
interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  eyebrowVariant?: 'light' | 'dark';
  headingVariant?: 'light' | 'dark';
  align?: 'left' | 'center';
  ctaLabel?: string;
  ctaHref?: string;
}
```

Renders eyebrow (if provided), then H2 heading, then optional subheading or CTA link inline with heading.

---

### `PageHero.tsx`
**Location:** `components/sections/PageHero.tsx`
**Purpose:** Reusable dark hero section for all inner pages

**Props:**
```ts
interface PageHeroProps {
  eyebrow: string;
  title: string | React.ReactNode;  // allows line breaks in title
  subtitle?: string;
  backgroundImage: string;          // path to hero image
  ctaPrimary?: { label: string; href: string; external?: boolean };
  ctaSecondary?: { label: string; href: string; icon?: React.ReactNode };
  sideText?: string[];              // lines of vertical side text
  dateVenue?: boolean;              // show date + venue row
}
```

**Structure:**
```
[dark overlay on image]
[eyebrow label] [eyebrow • text • dots]
[H1 title]
[subtitle]
[cta buttons row]
[right side: vertical text]
```

**Height:** `min-h-[480px] md:min-h-[540px]` for inner pages

---

### `HeroSideText.tsx`
**Location:** `components/ui/HeroSideText.tsx`

**Props:**
```ts
interface HeroSideTextProps {
  lines: string[];
  variant?: 'light' | 'dark';
}
```

Renders the vertical right-side text visible in every hero (e.g., "RETHINK", "REUSE", "RECYCLE", "FOR A BETTER TOMORROW"). Implementation: position absolute right, use writing-mode or rotated text.

---

### `QuoteBlock.tsx`
**Location:** `components/ui/QuoteBlock.tsx`
**Purpose:** Full-width dark editorial quote sections (appear at the bottom of About, Gallery, Sponsors, etc.)

**Props:**
```ts
interface QuoteBlockProps {
  quote: string;
  backgroundImage?: string;
  rightText?: string[];
}
```

**Visual:**
- Full-width section, dark overlay on nature photograph
- Large italic DM Serif quote text (left ~60%)
- Right ~40%: stacked small uppercase words
- Very light divider line beneath quote

---

### `InfoNote.tsx`
**Location:** `components/ui/InfoNote.tsx`
**Purpose:** Info callout box with "i" icon

**Props:**
```ts
interface InfoNoteProps {
  text: string;
  variant?: 'info' | 'warning';
}
```

**Appearance:** Light background, rounded, "i" circle icon (Lucide `Info`), Inter 13px text. Seen in Publications & Awards page ("Award details...will be announced soon") and Registration page.

---

### `ClosingCTA.tsx`
**Location:** `components/sections/ClosingCTA.tsx`
**Purpose:** Final CTA section before footer on most pages

**Props:**
```ts
interface ClosingCTAProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  ctaLabel: string;
  ctaHref: string;
  backgroundImage?: string;
  rightText?: string[];
  leafDecoration?: boolean;  // show decorative leaf illustration on right
}
```

**Appearance:** Light cream or dark background depending on page, with heading (DM Serif), body text, and single CTA button. Right side may have a botanical leaf illustration or nature photograph.

---

## Speaker Components

### `SpeakerCard.tsx`
**Location:** `components/speakers/SpeakerCard.tsx`
**Purpose:** Full speaker card used on /speakers page

**Props:**
```ts
interface SpeakerCardProps {
  speaker: {
    name: string;
    designation: string;
    institution: string;
    country: string;
    topic: string;
    image: string;
    type: 'keynote' | 'plenary' | 'invited';
  }
}
```

**Layout:**
- Top: square/4:5 image, `rounded-xl`
- Below image: Name (Inter 16px 600), Institution+Country (Inter 13px secondary-text)
- Short green line divider (24px)
- Topic text (Inter 14px, secondary-text)

---

### `SpeakerCardCompact.tsx`
**Location:** `components/speakers/SpeakerCardCompact.tsx`
**Purpose:** Compact horizontal speaker card used on Home speakers preview

**Props:**
```ts
interface SpeakerCardCompactProps {
  speaker: {
    name: string;
    institution: string;
    country: string;
    image: string;
  }
}
```

**Layout:** 56px circular image (left) + Name/Institution stacked (right). Small green line below the block.

---

## Programme Components

### `ProgrammeTabs.tsx`
**Props:**
```ts
interface ProgrammeTabsProps {
  days: Array<{
    label: string;  // "Day 1"
    date: string;   // "12 May 2027"
  }>;
  activeDay: number;
  onDayChange: (day: number) => void;
}
```

**Appearance:** Three tab buttons in a row (dark-filled for active, white for inactive). Day label + date beneath.

---

### `ProgrammeRow.tsx`
**Props:**
```ts
interface ProgrammeRowProps {
  item: {
    time: string;
    title: string;
    description?: string;
    location: string;
    type: 'session' | 'break' | 'keynote' | 'panel' | 'social';
  }
}
```

**Layout:** Left border line (thin, emerald or muted), time (left column, Inter 13px), title + description (middle, Inter 14–15px), location (right, Inter 13px secondary-text).

---

## Dates Components

### `Countdown.tsx`
**Location:** `components/dates/Countdown.tsx`
**Purpose:** Live countdown timer to conference start date

**Props:**
```ts
interface CountdownProps {
  targetDate: string;  // ISO date string from admin settings
}
```

**Appearance:**
- 4 numbers: Days, Hours, Minutes, Seconds
- Large Inter number (~64–80px, weight 300–400)
- Label below each: "Days", "Hours", etc. (Inter 12px, secondary-text)
- No borders/boxes between numbers — just spacing

---

### `ImportantDatesList.tsx`
**Location:** `components/dates/ImportantDatesList.tsx`
**Purpose:** Timeline-style list of important dates

**Props:**
```ts
interface ImportantDatesListProps {
  dates: Array<{
    label: string;
    date: string;
    passed: boolean;
    current: boolean;
  }>;
  variant?: 'timeline' | 'table';
}
```

**Timeline variant (used in Call for Abstracts page):**
- Left: vertical line
- Dot: filled circle (emerald = current, gray = future, dark = past)
- Right: date (Inter 16px 600), label below (Inter 14px secondary)

**Table variant (used in Home and sidebar):**
- Two columns: label (left) and date (right, emerald color)
- Thin horizontal dividers between rows

---

## Gallery Components

### `GalleryFilter.tsx`
**Location:** `components/gallery/GalleryFilter.tsx`

**Props:**
```ts
interface GalleryFilterProps {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
  showSlideshow?: boolean;
}
```

**Appearance:** Row of pill/tab buttons. Active = filled dark. "View as Slideshow →" button on the right side.

---

### `GalleryCard.tsx`
**Location:** `components/gallery/GalleryCard.tsx`

**Props:**
```ts
interface GalleryCardProps {
  image: {
    src: string;
    title: string;
    caption: string;
    category: string;
  };
  size?: 'large' | 'medium' | 'small';
}
```

**Appearance:**
- Image fills card fully
- Dark overlay on hover with title/caption revealed
- Bottom: title (Inter 14px white) + caption (Inter 12px muted) overlaid on image
- Image icon in bottom-right corner (Lucide `Image` icon, white)
- Border-radius: `rounded-xl` on the image container
- Varied aspect ratios: first row has one large landscape + one portrait + one landscape

---

## FAQ Components

### `FAQSidebar.tsx`
**Props:**
```ts
interface FAQSidebarProps {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
  quote?: string;
  contactCTA?: boolean;
}
```

**Layout:**
- Width: ~220px (desktop), hidden/drawer (mobile)
- Category list: "All Questions", "General", "Registration", etc.
- Active: filled dark background
- Below list: editorial quote box with leaf image + quote text
- Below quote: "Contact Us →" button

---

### `FAQAccordion.tsx`
**Props:**
```ts
interface FAQAccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}
```

**Appearance:**
- Row with question text (Inter 14px 500) + chevron icon (right)
- Border-bottom between items
- Expanded: answer slides in below question
- Subtle animation: max-height transition

---

## Form Components

### `ContactForm.tsx`
**Location:** `components/forms/ContactForm.tsx`

**Fields:**
- Your Name (text input, required)
- Your Email (email input, required)
- Subject (select dropdown with options: Registration, Abstract Submission, Sponsorship, General, Other)
- Message (textarea, ~5 rows, required)
- Send Message button (btn-primary, full width)

**Validation:** Client-side + server action
**Success state:** Inline success message (no page reload)
**Error state:** Inline field errors

---

## Card Components

### `ThemeCard.tsx`
**Location:** `components/cards/ThemeCard.tsx`
**Purpose:** Individual conference theme card used in themes grid

**Props:**
```ts
interface ThemeCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  variant?: 'dark' | 'light';
}
```

**Dark variant (Home themes section):**
- Background: `#0D241B` or `#111715`
- Icon: muted-green Lucide icon, ~28px
- Title: Inter 14px, light-text, centered below icon
- Padding: p-6 md:p-8
- Aspect: roughly square

---

### `FeatureCard.tsx`
**Location:** `components/cards/FeatureCard.tsx`

**Props:**
```ts
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: 'light' | 'dark';
}
```

Used in: About page (WMRG features), Sponsors page (partnership benefits), Contact page (query types).

---

### `QuickLinkCard.tsx`
**Location:** `components/cards/QuickLinkCard.tsx`

**Props:**
```ts
interface QuickLinkCardProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  external?: boolean;
}
```

Used in: Home page Quick Links section (Submit Abstract, Register Now, Download Brochure).

---

### `TransportCard.tsx`
**Location:** `components/cards/TransportCard.tsx`

**Props:**
```ts
interface TransportCardProps {
  icon: React.ReactNode;
  from: string;
  description: string;
  duration: string;
}
```

Used in: Venue & Travel page transport options section.

---

## Home-Specific Section Components

Each section of the homepage has a dedicated component:

| Component | Section | Key Content |
|-----------|---------|-------------|
| `HeroSection.tsx` | Home Hero | Title, date, venue, 2 CTAs, side text, scroll indicator |
| `CountdownSection.tsx` | Countdown | Timer + leaf image + quote text |
| `AboutPreview.tsx` | About RECYCLE27 | Heading, body, CTA, image right, 3 pillars |
| `ThemesPreview.tsx` | Conference Themes | 5 dark theme cards in a grid |
| `SpeakersPreview.tsx` | Keynote Speakers | 4 compact speaker cards |
| `DatesPreview.tsx` | Important Dates | Table-style list + Quick Links panel |
| `RegistrationPreview.tsx` | [CONTENT PLACEHOLDER] | Preview of registration |
| `ProgrammePreview.tsx` | [CONTENT PLACEHOLDER] | Preview of programme |
| `VenuePreview.tsx` | [CONTENT PLACEHOLDER] | Preview of venue |
| `AccommodationPreview.tsx` | [CONTENT PLACEHOLDER] | Preview of accommodation |
| `PublicationsPreview.tsx` | [CONTENT PLACEHOLDER] | Preview of publications |
| `SponsorsPreview.tsx` | [CONTENT PLACEHOLDER] | Sponsor logos strip |
| `GalleryPreview.tsx` | [CONTENT PLACEHOLDER] | Gallery strip |
| `FAQPreview.tsx` | [CONTENT PLACEHOLDER] | FAQ accordion preview |
| `ContactCTA.tsx` | Contact/Final CTA | Final register CTA before footer |
