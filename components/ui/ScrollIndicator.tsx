"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollIndicatorProps {
  className?: string;
}

export function ScrollIndicator({ className }: ScrollIndicatorProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <motion.div 
      style={{ opacity }}
      className={cn("absolute bottom-12 right-12 hidden lg:flex flex-col items-center gap-4", className)}
    >
      <span className="font-body text-[10px] tracking-[0.2em] uppercase text-light-text [writing-mode:vertical-rl] opacity-60">
        SCROLL
      </span>
      <motion.div 
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-[1px] h-10 bg-light-text/60" 
      />
    </motion.div>
  );
}
