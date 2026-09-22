# IMAGE-AND-ASSET-SPEC.md — Image Strategy and Asset Specifications

## Overview

Images are one of the most critical elements of the RECYCLE27 design. The site relies heavily on real photography of:
- IIT Guwahati campus
- Nature/environmental close-ups (leaves, forest, aerial river)
- Conference moments (speakers, sessions, audience)

All hero images use a dark overlay for text legibility. No decorative gradients are used — the "dark sections" are photography-backed.

---

## Image Storage

**Storage backend:** Supabase Storage (S3-compatible)

**Buckets:**
```
speakers/          # Speaker profile photos
gallery/           # Gallery images
sponsors/          # Sponsor logos
documents/         # Uploaded documents (PDFs, DOCX)
publications/      # Journal/publisher logos
heroes/            # Static hero images (committed to /public/images/heroes/)
site/              # OG image, favicon, brochure covers
```

Static hero images should be committed to the repo under `/public/images/heroes/` for reliability and performance. Dynamic content images (speakers, gallery, sponsors) live in Supabase Storage.

---

## Hero Images

Each page hero requires a full-width background photograph.

| Page | Description | Aspect | Min Size |
|------|-------------|--------|---------|
| Home | IIT campus building, aerial/lakeside view | 16:9 | 1920×1080 |
| About | Dramatic macro leaf close-up (wet leaves) | 16:9 | 1920×1080 |
| Speakers & Committees | Conference hall/auditorium with audience | 16:9 | 1920×1080 |
| Call for Abstracts | IIT building facade with "Research for a Cleaner Tomorrow" signage | 16:9 | 1920×1080 |
| Registration | IIT campus lakeside/aerial view | 16:9 | 1920×1080 |
| Venue & Travel | Aerial view of IIT Guwahati campus with lake | 16:9 | 1920×1080 |
| Publications & Awards | Books/research materials photograph | 16:9 | 1920×1080 |
| Sponsors | IIT building facade with "PEOPLE PARTNERSHIPS PROGRESS" visible | 16:9 | 1920×1080 |
| Gallery | IIT campus building exterior | 16:9 | 1920×1080 |
| FAQs | IIT building with tree canopy | 16:9 | 1920×1080 |
| Contact | IIT campus/aerial | 16:9 | 1920×1080 |

**Dark overlay applied to all heroes:**
```css
.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(7, 23, 16, 0.55);
}
```

**File naming:**
```
public/images/heroes/
├── home.jpg
├── about.jpg
├── speakers.jpg
├── call-for-abstracts.jpg
├── registration.jpg
├── venue-travel.jpg
├── publications.jpg
├── sponsors.jpg
├── gallery.jpg
├── faqs.jpg
└── contact.jpg
```

---

## Section Images (Non-Hero)

### About Page

| Image | Description | Aspect | Usage |
|-------|-------------|--------|-------|
| `about-conference.jpg` | IIT campus building/setting | 4:3 | Conference overview section, right column |
| `iitg-signboard.jpg` | IIT Guwahati campus signboard | 4:3 | About IIT section, right column |
| `wmrg-building.jpg` | Research/academic building on campus | 3:4 | WMRG section, right column |

### Home Sections

| Image | Description | Aspect | Usage |
|-------|-------------|--------|-------|
| `home-about.jpg` | Campus aerial or river view | 4:3 | About preview section |
| `home-leaf.jpg` | Close-up leaf photograph | 3:4 or 1:1 | Countdown section right column |

### Closing Quote Images (dark overlay sections)

| Image | Description | Pages Used |
|-------|-------------|-----------|
| `quote-mountain.jpg` | Mountain/valley forest view | About, Speakers, Sponsors |
| `quote-fern.jpg` | Close-up ferns in dark setting | Call for Abstracts |
| `quote-campus-dusk.jpg` | Campus at dusk/golden hour | Venue & Travel, Publications |

---

## Speaker Photos

**Format:** JPEG or WebP
**Dimensions:** 400×500px minimum (4:5 portrait ratio)
**Processing:** Convert to WebP on upload via Supabase Storage transform
**Fallback:** Initials avatar component if no photo available

```tsx
// Speaker image with fallback
function SpeakerPhoto({ name, imageUrl }: { name: string; imageUrl?: string }) {
  if (!imageUrl) {
    return <InitialsAvatar name={name} />
  }
  return (
    <Image
      src={imageUrl}
      alt={`Photo of ${name}`}
      width={200}
      height={250}
      className="rounded-xl object-cover"
    />
  )
}
```

**Storage path:** `speakers/{speaker-id}.webp`

---

## Gallery Images

**Format:** JPEG or WebP
**Dimensions:** Various — maintain originals, serve at appropriate sizes
**Next.js Image optimization:** Use `sizes` prop for responsive loading

**Three display sizes in the gallery grid:**
- Large (landscape): `aspect-[16/10]` — ~600×375px display
- Medium (portrait): `aspect-[4/5]` — ~400×500px display
- Small (landscape): `aspect-[3/2]` — ~400×267px display

**Naming convention:**
```
gallery/{edition}/{category}/{filename}.jpg
gallery/recycle26/inauguration/inaugural-session-01.jpg
gallery/recycle26/keynote/keynote-speaker-01.jpg
```

---

## Sponsor Logos

**Format:** PNG with transparent background (preferred), or SVG
**Dimensions:** Variable — served in white cards with fixed card dimensions
**Processing:** Admin uploads PNG/SVG, stored as-is

**Display sizes by tier:**
```
Platinum: max-width 200px, max-height 80px
Gold:     max-width 160px, max-height 64px
Silver:   max-width 130px, max-height 48px
Supporting: max-width 120px, max-height 40px
```

Cards have consistent white backgrounds regardless of logo size.

---

## Publication / Journal Logos

**Format:** PNG or SVG
**Dimensions:** ~120×48px display
**Examples from mockup:** Elsevier logo (grey), ACS Publications logo

---

## OG Image

**File:** `public/og-image.jpg`
**Dimensions:** 1200×630px
**Content:** RECYCLE27 wordmark + subtitle + date + IIT Guwahati campus background

---

## Favicon / Site Icons

```
public/
├── favicon.ico          # 32×32 legacy
├── favicon.svg          # Modern SVG favicon
├── apple-touch-icon.png # 180×180
└── manifest.json        # Web app manifest
```

[IMPLEMENTATION DECISION REQUIRED: Favicon design — minimal R27 or leaf+R27 mark]

---

## Botanical / Leaf Decoration

Used in:
- Home page countdown section (right)
- Gallery page closing CTA (right)
- FAQ sidebar quote block
- Some closing CTA sections

This is a **real close-up leaf photograph** NOT an SVG illustration (unless mockup specifically shows line-art).

From mockup analysis:
- The leaf image in countdown section is a real macro photograph
- The leaf in gallery CTA appears to be a slightly illustrated/simplified leaf
- The FAQ sidebar leaf is a real photograph with subtle overlay

[IMPLEMENTATION DECISION REQUIRED: Whether to use real photography or a consistent line-art leaf SVG for decorative elements. The mockup appears to use real photography for the leaf elements.]

---

## Image Component Pattern

Use Next.js `<Image>` for all images:

```tsx
import Image from 'next/image'

// Hero background (always present)
<div className="relative">
  <Image
    src="/images/heroes/about.jpg"
    alt="IIT Guwahati campus"
    fill
    priority        // LCP optimization — only for hero
    className="object-cover"
    sizes="100vw"
  />
  <div className="absolute inset-0 bg-primary-dark/55" />
</div>

// Content image (lazy loaded)
<Image
  src={imageSrc}
  alt={altText}
  width={480}
  height={360}
  className="rounded-xl object-cover"
  sizes="(max-width: 768px) 100vw, 480px"
/>

// Speaker thumbnail (lazy loaded)
<Image
  src={speaker.image_url}
  alt={`Professor ${speaker.name}`}
  width={200}
  height={250}
  className="rounded-xl object-cover aspect-[4/5]"
  sizes="(max-width: 640px) 50vw, 200px"
/>
```

---

## Alt Text Strategy

| Image type | Alt text pattern |
|-----------|-----------------|
| Hero images | "IIT Guwahati campus at [time/season]" |
| Speaker photos | "Photo of [Name], [Institution]" |
| Gallery images | Use `gallery_items.alt_text` from database |
| Sponsor logos | "[Sponsor name] logo" |
| Publication logos | "[Publisher name] logo" |
| Leaf decoration | "Decorative botanical element" |
| Closing quote backgrounds | "Scenic [location] landscape" |

---

## Performance Strategy

1. **Hero images** — `priority` flag on first viewport image; all others lazy
2. **Gallery** — Lazy load all gallery images; use placeholder blur
3. **Speaker photos** — Lazy load below fold; small sizes served for homepage compact cards
4. **Sponsor logos** — Lazy load; tiny file size from admin uploads
5. **Format** — Serve WebP via Next.js Image optimization when possible
6. **Sizing** — Always specify `sizes` prop to prevent over-fetching
7. **Quality** — Use Next.js default quality (75) for photos; logos at quality 90

---

## Image Aspect Ratio Reference

| Component | Ratio | CSS class |
|-----------|-------|-----------|
| Hero background | 16:9 | `aspect-video` / `fill` |
| Speaker card image | 4:5 | `aspect-[4/5]` |
| Speaker compact (home) | 1:1 | `aspect-square rounded-full` |
| Section content image | 4:3 | `aspect-[4/3]` |
| Gallery card (large) | 16:10 | `aspect-[16/10]` |
| Gallery card (portrait) | 4:5 | `aspect-[4/5]` |
| Gallery card (small) | 3:2 | `aspect-[3/2]` |
| Sponsor logos | variable | max-h constrained, auto width |
| Journal logos | variable | max-h constrained |
| IIT signboard | ~3:2 | `aspect-[3/2]` |
| WMRG building | ~3:4 | `aspect-[3/4]` |
