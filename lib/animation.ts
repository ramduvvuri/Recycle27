export const DURATION = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  slower: 0.7,
};

export const EASE = {
  out: [0.0, 0.0, 0.2, 1], // standard easeOut
  inOut: [0.4, 0.0, 0.2, 1], // standard easeInOut
  spring: { type: "spring", damping: 30, stiffness: 200 },
  editorial: [0.25, 0.46, 0.45, 0.94], // slightly soft easeOut for editorial feel
};

export const STAGGER = {
  children: 0.08, // between sibling elements
  cards: 0.1, // between cards
  list: 0.06, // between list items
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE.editorial },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER.cards,
      delayChildren: 0.1,
    },
  },
};

export const cardReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE.out },
  },
};

export const imageReveal = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.7, ease: EASE.editorial, delay: 0.1 },
  },
};
