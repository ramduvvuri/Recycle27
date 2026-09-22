import { cn } from "@/lib/utils";
import React from "react";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  theme?: "light" | "white" | "dark" | "dark-secondary" | "transparent";
  spacing?: "normal" | "compact" | "none";
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
    normal: "py-20 md:py-28 lg:py-32",
    compact: "py-12 md:py-16",
    none: "py-0",
  };

  return (
    <section
      className={cn(themes[theme], spacings[spacing], className)}
      {...props}
    >
      <div className={cn("max-w-7xl mx-auto px-5 md:px-8 lg:px-12 w-full", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
