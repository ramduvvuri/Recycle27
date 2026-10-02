"use client";

/**
 * Reveal — scroll-triggered fade+translateY reveal component.
 *
 * Fires ONCE when the element enters the viewport (no re-animation on scroll up).
 * Respects prefers-reduced-motion.
 *
 * Usage:
 *   <Reveal>
 *     <YourComponent />
 *   </Reveal>
 *
 *   <Reveal variant="fadeRight" delay={0.15}>
 *     <ImageCollage />
 *   </Reveal>
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, fadeUpSm, fadeIn, fadeRight, headingReveal, ease } from "@/lib/motion";

type RevealVariant = "fadeUp" | "fadeUpSm" | "fadeIn" | "fadeRight" | "heading";

const VARIANTS = {
  fadeUp,
  fadeUpSm,
  fadeIn,
  fadeRight,
  heading: headingReveal,
};

interface RevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  /** Additional delay in seconds before the animation starts */
  delay?: number;
  /** Custom threshold: fraction of the element that must be visible (0–1) */
  threshold?: number;
  className?: string;
  /** Override the as element type */
  as?: "div" | "section" | "article" | "li" | "span";
}

export function Reveal({
  children,
  variant = "fadeUp",
  delay = 0,
  threshold = 0.08,
  className,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const baseVariant = VARIANTS[variant];

  // When delay is provided, inject it into the transition
  const variants = delay > 0
    ? {
        hidden: baseVariant.hidden,
        visible: {
          ...baseVariant.visible,
          transition: {
            ...(baseVariant.visible as { transition?: object }).transition,
            delay,
          },
        },
      }
    : baseVariant;

  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </Tag>
  );
}
