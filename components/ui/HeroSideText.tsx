import { cn } from "@/lib/utils";

interface HeroSideTextProps {
  lines: string[];
  className?: string;
}

export function HeroSideText({ lines, className }: HeroSideTextProps) {
  return (
    <div
      className={cn(
        "absolute right-8 top-[46%] hidden -translate-y-1/2 flex-col items-end gap-1.5 lg:flex xl:right-14",
        className
      )}
    >
      <span className="mb-4 block h-[1.5px] w-10 shrink-0 bg-white/85" aria-hidden />
      {lines.map((line, i) => (
        <span
          key={i}
          className="whitespace-nowrap text-right font-body text-[13px] uppercase tracking-[0.2em] text-light-text/85"
        >
          {line}
        </span>
      ))}
    </div>
  );
}
