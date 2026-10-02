import { cn } from "@/lib/utils";
import React from "react";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  theme?: "light" | "white" | "dark" | "dark-secondary" | "transparent";
  spacing?: "normal" | "compact" | "generous" | "editorial" | "cards" | "moderate" | "none";
  className?: string;
  containerClassName?: string;
}

export function SectionWrapper({
  children,
  theme = "light",
  spacing = "normal",
  className,
  containerClassName,
  ...props
}: SectionWrapperProps) {
  const themes = {
    light: "bg-soft-bg text-dark-text",
    white: "bg-white text-dark-text",
    dark: "bg-primary-dark text-light-text",
    "dark-secondary": "bg-secondary-dark text-light-text",
    transparent: "bg-transparent",
  };

  const spacings = {
    normal: "py-14 md:py-16 lg:py-20",
    compact: "py-10 md:py-12",
    moderate: "py-12 md:py-14",
    cards: "py-12 md:py-16",
    editorial: "py-12 md:py-16 lg:py-20",
    generous: "py-16 md:py-20 lg:py-24",
    none: "py-0",
  };

  return (
    <section
      className={cn(themes[theme], spacings[spacing], className)}
      {...props}
    >
      <div className={cn("max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10 xl:px-12 w-full", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
