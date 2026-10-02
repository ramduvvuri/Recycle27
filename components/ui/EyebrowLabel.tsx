import { cn } from "@/lib/utils";

interface EyebrowLabelProps {
  label: string;
  theme?: "light" | "dark" | "hero";
  className?: string;
}

export function EyebrowLabel({ label, theme = "light", className }: EyebrowLabelProps) {
  const lineColor =
    theme === "hero" ? "bg-white/70" :
    theme === "dark"  ? "bg-muted-green" :
    "bg-primary-emerald";

  const textColor =
    theme === "hero" ? "text-white/80" :
    theme === "dark"  ? "text-muted-green" :
    "text-primary-emerald";

  return (
    <div className={cn("eyebrow", className)}>
      <span className={cn("eyebrow-line", lineColor)} />
      <span className={cn("eyebrow-text", textColor)}>
        {label}
      </span>
    </div>
  );
}
