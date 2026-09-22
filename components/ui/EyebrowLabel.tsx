import { cn } from "@/lib/utils";

interface EyebrowLabelProps {
  label: string;
  theme?: "light" | "dark";
  className?: string;
}

export function EyebrowLabel({ label, theme = "light", className }: EyebrowLabelProps) {
  return (
    <div className={cn("eyebrow", className)}>
      <span 
        className={cn("eyebrow-line", 
          theme === "light" ? "bg-primary-emerald" : "bg-muted-green"
        )} 
      />
      <span 
        className={cn("eyebrow-text",
          theme === "light" ? "text-primary-emerald" : "text-muted-green"
        )}
      >
        {label}
      </span>
    </div>
  );
}
