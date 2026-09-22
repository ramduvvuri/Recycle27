import { cn } from "@/lib/utils";
import React from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
  level?: 2 | 3;
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  children,
  level = 2,
  theme = "light",
  className,
}: SectionHeadingProps) {
  const Component: React.ElementType = level === 2 ? "h2" : "h3";
  
  return (
    <Component
      className={cn(
        "font-display tracking-[-0.01em]",
        level === 2 ? "text-[28px] md:text-[36px] lg:text-[48px] leading-[1.2] mb-4 md:mb-6" : "text-[22px] md:text-[28px] lg:text-[36px] leading-[1.25] mb-4",
        theme === "light" ? "text-primary-dark" : "text-light-text",
        className
      )}
    >
      {children}
    </Component>
  );
}
