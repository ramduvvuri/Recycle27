# ANIMATION-SPEC.md — Recycle27 Animation System

## Animation Philosophy

Animations must feel **editorial and intentional**. Every motion has a purpose. Nothing bounces constantly. Nothing spins. No particles. No WebGL. No heavy shaders.

Target feeling: **a high-quality print magazine coming to life**.

All animations must respect `prefers-reduced-motion`. When this preference is set, animations should be eliminated or replaced with instant state changes.

---

## Library

**Primary:** Framer Motion (`framer-motion`)
**Secondary:** CSS Transitions (for simple hover effects)
**Scroll detection:** Framer Motion's `useInView` or Intersection Observer

---

## Global Animation Tokens

```ts
// lib/animation.ts — Shared animation variants

export const DURATION = {
  fast:    0.15,
  normal:  0.3,
  slow:    0.5,
  slower:  0.7,
}

export const EASE = {
  out:       [0.0, 0.0, 0.2, 1],      // standard easeOut
  inOut:     [0.4, 0.0, 0.2, 1],      // standard easeInOut
  spring:    { type: 'spring', damping: 30, stiffness: 200 },
  editorial: [0.25, 0.46, 0.45, 0.94], // slightly soft easeOut for editorial feel
}

export const STAGGER = {
  children:  0.08,  // between sibling elements
  cards:     0.1,   // between cards
  list:      0.06,  // between list items
}
```

---

## Section Reveal Animations

Every content section that enters the viewport triggers a reveal.

### Standard Reveal (fade + translate up)

```ts
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE.editorial }
  }
}
```

**Usage:** Wrap section headings, body text, and CTA buttons.
**Trigger:** `whileInView`, once only (`once: true`)
**Margin:** `viewport={{ once: true, margin: "-80px" }}`

### Staggered Card Reveal

```ts
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER.cards,
      delayChildren: 0.1,
    }
  }
}

export const cardReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE.out }
  }
}
```

**Usage:** Speaker grid, theme cards, gallery grid, sponsor logos.

### Image Reveal (mask/clip reveal)

```ts
export const imageReveal = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 0.7, ease: EASE.editorial, delay: 0.1 }
  }
}
```

**Usage:** Section images that slide in from right. Used in About section, Venue section hero images.

---

## Specific Component Animations

### Navbar (on scroll)

**Trigger:** `window.scrollY > 80`

```ts
// Navbar style change — CSS class swap, NOT Framer
// .navbar-scrolled class adds:
// background: rgba(255,255,255,0.95)
// backdrop-filter: blur(8px)
// box-shadow: 0 1px 0 rgba(0,0,0,0.08)
// transition: background 0.25s ease, box-shadow 0.25s ease
```

No Framer Motion needed here — use a simple `useEffect` + `useState` + CSS class swap.

---

### Countdown Timer

**Behavior:** Numbers update every second.

```ts
// When a digit changes (e.g. seconds ticking down):
// subtle scale pulse: 1 → 1.05 → 1 over 0.2s
// opacity flash: 1 → 0.6 → 1 over 0.2s
```

Keep this very subtle — it should not be distracting.

---

### Scroll Indicator (Hero)

```ts
// Vertical line pulses slowly (not bounces):
// opacity: [1, 0.3, 1] over 2s, infinite
// Entire scroll indicator fades out when user scrolls > 100px
```

---

### Announcement Bar (Home)

```ts
// On page load: slides down from above
// delay: 0.8s (after hero elements appear)
// duration: 0.4s ease-out
```

---

### Speaker Cards (Hover)

```css
/* CSS only — no Framer needed */
.speaker-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.speaker-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(7,23,16,0.12);
}
```

---

### Gallery Cards (Hover)

```css
.gallery-card {
  overflow: hidden;
}
.gallery-card img {
  transition: transform 0.4s ease;
}
.gallery-card:hover img {
  transform: scale(1.04);
}
.gallery-card .overlay {
  transition: opacity 0.3s ease;
  opacity: 0.5;
}
.gallery-card:hover .overlay {
  opacity: 0.75;
}
```

---

### FAQ Accordion (Open/Close)

```ts
// Framer Motion AnimatePresence + max-height animation
// Enter: height 0 → auto, opacity 0 → 1, duration 0.25s
// Exit:  height auto → 0, opacity 1 → 0, duration 0.2s
```

```tsx
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.25, ease: EASE.out }}
    >
      {answer}
    </motion.div>
  )}
</AnimatePresence>
```

---

### Programme Tab Switching

```ts
// Tab content: fade in when day changes
// duration: 0.2s ease
// Underline indicator slides between tabs: layoutId animation

<motion.div
  layoutId="programme-tab-indicator"
  className="tab-indicator"
/>
```

---

### Button Hover Effects

**Primary button:**
```css
.btn-primary {
  transition: background-color 0.2s ease, transform 0.15s ease;
}
.btn-primary:hover {
  background-color: #145C3C;
  transform: translateY(-1px);
}
.btn-primary:active {
  transform: translateY(0);
}
```

**Arrow icon in buttons:**
```css
.btn-primary .arrow-icon {
  transition: transform 0.2s ease;
}
.btn-primary:hover .arrow-icon {
  transform: translateX(3px);
}
```

---

### Sponsor Logo (Hover)

```css
.sponsor-logo {
  filter: grayscale(20%);
  opacity: 0.85;
  transition: filter 0.2s ease, opacity 0.2s ease, transform 0.2s ease;
}
.sponsor-logo:hover {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.04);
}
```

---

## Page Transition

**Implementation:** Next.js App Router + Framer Motion page wrapper

```tsx
// components/layout/PageTransition.tsx
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: EASE.out }}
    >
      {children}
    </motion.div>
  )
}
```

Applied in `app/layout.tsx` or per-page layout.

---

## Hero Entrance Sequence (Home)

Elements should appear in a staggered sequence on load:

```
t=0.0s: Hero image/background is immediately visible (no delay)
t=0.2s: Eyebrow text fades in (fadeUp)
t=0.35s: Main RECYCLE27 title fades in (fadeUp, larger y offset: 40px)
t=0.5s: Subtitle fades in (fadeUp)
t=0.65s: Date + venue row fades in (fadeUp)
t=0.75s: CTA buttons fade in (fadeUp, stagger between buttons: 0.1s)
t=0.9s: Right-side text fades in (fade only, no translate)
t=1.1s: Scroll indicator fades in
```

This must feel like a graceful entrance, NOT a frantic sequence.

---

## Inner Page Hero Entrance

```
t=0.0s: Background image visible
t=0.2s: Eyebrow + title fade up
t=0.4s: Subtitle fade up
t=0.5s: CTAs fade up (if present)
```

---

## Restrained Parallax

Used ONLY in hero sections on scroll:

```ts
// Hero background image scrolls at ~0.4x rate
const { scrollYProgress } = useScroll()
const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

// Applied to hero background image
<motion.div style={{ y }}>
  <Image ... />
</motion.div>
```

**DO NOT** use parallax anywhere outside of hero backgrounds.

---

## Elements That Should NOT Animate

- Footer (static)
- Tables (static)
- Form inputs (CSS focus states only)
- Breadcrumb (static)
- Navbar logo (static, only the background changes on scroll)
- Admin panel (minimal transitions only)

---

## Reduced Motion Implementation

```ts
// lib/animation.ts
import { useReducedMotion } from 'framer-motion'

export function useAnimationConfig() {
  const shouldReduceMotion = useReducedMotion()
  
  if (shouldReduceMotion) {
    return {
      fadeUp: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
      staggerContainer: {},
      cardReveal: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
      // etc.
    }
  }
  
  return { fadeUp, staggerContainer, cardReveal, ... }
}
```

Or use the global `useReducedMotion` hook and conditionally apply variants.

---

## Animation Do's and Don'ts

### ✅ DO
- Fade in sections as they enter viewport
- Stagger sibling elements with small delay
- Use subtle translateY (max 32px)
- Use CSS transitions for hover effects
- Use spring animations for interactive elements (tabs, toggles)
- Respect prefers-reduced-motion
- Keep all animations under 0.7s duration

### ❌ DON'T
- Rotate or spin elements decoratively
- Use scale transforms > 1.08
- Bounce elements (bouncy spring, CSS bounce)
- Animate every single paragraph as it enters
- Use 3D transforms (rotateX, perspective)
- Add parallax to anything other than hero backgrounds
- Use continuous looping animations on body content (except countdown, scroll indicator)
- Animate layout properties (width, height, position) unnecessarily
- Chain more than 3 sequential animations
