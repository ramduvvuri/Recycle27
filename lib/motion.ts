/**
 * RECYCLE 2027 — Global Motion Token System
 *
 * Single source of truth for all animation timing, easing, and distance.
 * Philosophy: motion should be FELT, not NOTICED.
 */

// ─── Duration ─────────────────────────────────────────────────────────────────
export const duration = {
  fast: 0.15,       // micro-interactions: button press, hover
  standard: 0.35,   // UI state transitions
  reveal: 0.55,     // section / element reveals
  slow: 0.75,       // cinematic reveals, hero text
  cinematic: 1.0,   // page-level entrance
} as const;

// ─── Easing ───────────────────────────────────────────────────────────────────
export const ease = {
  // Primary ease for reveals: starts fast, settles softly
  out: [0.22, 1, 0.36, 1] as const,
  // Subtle ease for micro-interactions
  inOut: [0.45, 0, 0.55, 1] as const,
  // Spring-like for interactive feedback
  spring: { type: "spring", stiffness: 400, damping: 40 } as const,
} as const;

// ─── Reveal distances (translateY) ───────────────────────────────────────────
export const distance = {
  xs: 8,   // eyebrow, secondary labels
  sm: 16,  // body text, captions
  md: 24,  // headings, cards
  lg: 32,  // sections, large blocks
} as const;

// ─── Stagger delay between children ──────────────────────────────────────────
export const stagger = {
  fast: 0.04,    // dense grids (8+ items)
  normal: 0.07,  // standard grids (4–8 items)
  slow: 0.10,    // sparse reveals (2–4 items)
} as const;

// ─── IntersectionObserver threshold ──────────────────────────────────────────
export const threshold = {
  section: 0.08,   // trigger when 8% of section visible
  card: 0.10,      // cards
  tight: 0.20,     // elements that need more visibility
} as const;

// ─── Pre-built Framer Motion variants ─────────────────────────────────────────

/** Standard fade-up reveal: the primary reveal pattern */
export const fadeUp = {
  hidden: { opacity: 0, y: distance.md },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.reveal, ease: ease.out },
  },
};

/** Smaller movement — for eyebrows, labels, secondary elements */
export const fadeUpSm = {
  hidden: { opacity: 0, y: distance.xs },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.standard, ease: ease.out },
  },
};

/** Fade-in only — for large sections, backgrounds, images */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.reveal, ease: ease.out },
  },
};

/** Fade from right for image collages / side elements */
export const fadeRight = {
  hidden: { opacity: 0, x: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: duration.slow, ease: ease.out },
  },
};

/** Container variant: staggers children */
export function staggerContainer(staggerChildren = stagger.normal, delayChildren = 0) {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren },
    },
  };
}

/** Heading entrance — slightly slower, slightly more travel */
export const headingReveal = {
  hidden: { opacity: 0, y: distance.sm },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: ease.out },
  },
};

/** Timeline line: scaleX from left */
export const timelineLine = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: ease.out },
  },
};
