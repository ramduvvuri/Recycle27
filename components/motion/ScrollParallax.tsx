"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "framer-motion";

interface ScrollParallaxProps {
  children: ReactNode;
  /** 
   * Parallax intensity/speed. 
   * Positive moves slower than scroll (pushes down relative to natural position). 
   * Negative moves faster.
   */
  speed?: number;
  /** Max distance in px */
  max?: number;
  axis?: "x" | "y";
  className?: string;
  as?: "div" | "section" | "span" | "ul" | "li" | "figure";
}

export function ScrollParallax({
  children,
  speed = 0.5,
  max = 24,
  axis = "y",
  className,
  as = "div",
}: ScrollParallaxProps) {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Track element intersection with viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map 0->1 progress to pixel movement. max provides the distance, speed provides direction.
  const direction = speed >= 0 ? 1 : -1;
  const movement = useTransform(scrollYProgress, [0, 1], [-max * direction, max * direction]);

  const Tag = motion[as as keyof typeof motion] as any;

  if (prefersReducedMotion) {
    return <Tag ref={ref} className={className}>{children}</Tag>;
  }

  return (
    <Tag
      ref={ref}
      style={{ [axis]: movement }}
      className={className}
    >
      {children}
    </Tag>
  );
}
