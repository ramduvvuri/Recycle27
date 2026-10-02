"use client";

/**
 * PageTransition — wraps route content in a subtle fade entrance.
 *
 * Applied in the root layout around {children}.
 * The navbar stays fixed and does NOT re-animate on route change.
 * Only the page content transitions.
 *
 * Uses AnimatePresence + motion.div.
 * Duration: 300ms — fast enough to feel responsive.
 */

import { motion } from "framer-motion";
import { ease, duration } from "@/lib/motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

const pageVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.standard,
      ease: ease.out,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: duration.fast,
      ease: ease.inOut,
    },
  },
};

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
