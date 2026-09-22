import { cn } from "@/lib/utils";

interface QuoteBlockProps {
  quote: string;
  theme?: "light" | "dark" | "cream";
  className?: string;
}

export function QuoteBlock({ quote, theme = "dark", className }: QuoteBlockProps) {
  const themes = {
    light: "text-primary-dark",
    dark: "text-light-text",
    cream: "text-primary-dark",
  };

  return (
    <blockquote
      className={cn(
        "font-display italic text-[24px] md:text-[32px] lg:text-[48px] leading-[1.3]",
        themes[theme],
        className
      )}
    >
      &ldquo;{quote}&rdquo;
    </blockquote>
  );
}
