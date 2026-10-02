"use client";

/**
 * Stagger / StaggerItem — coordinated staggered reveal for lists and grids.
 *
 * The parent Stagger container uses useInView to gate all children.
 * Children stagger in sequence automatically.
 *
 * Usage:
 *   <Stagger>
 *     {items.map((item) => (
 *       <StaggerItem key={item.id}>
 *         <Card {...item} />
 *       </StaggerItem>
 *     ))}
 *   </Stagger>
 *
 *   // Dense grid — faster stagger
 *   <Stagger staggerDelay={0.04}>...</Stagger>
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, stagger as staggerTokens } from "@/lib/motion";

interface StaggerProps {
  children: React.ReactNode;
  /** ms delay between each child. Defaults to 'normal' (70ms) */
  staggerDelay?: number;
  /** Initial delay before first child animates */
  delayChildren?: number;
  threshold?: number;
  className?: string;
  as?: "div" | "ul" | "ol" | "section";
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}

export function Stagger({
  children,
  staggerDelay = staggerTokens.normal,
  delayChildren = 0,
  threshold = 0.06,
  className,
  as = "div",
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, className, as = "div" }: StaggerItemProps) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag variants={fadeUp} className={className}>
      {children}
    </Tag>
  );
}
