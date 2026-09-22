import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import React from "react";

interface InfoNoteProps {
  children: React.ReactNode;
  className?: string;
}

export function InfoNote({ children, className }: InfoNoteProps) {
  return (
    <div className={cn("flex items-start gap-4 p-6 bg-warm-cream border-l-4 border-primary-emerald rounded-r-xl", className)}>
      <Info className="w-6 h-6 text-primary-emerald flex-shrink-0 mt-0.5" />
      <div className="font-body text-[14px] md:text-[15px] text-dark-text leading-[1.6]">
        {children}
      </div>
    </div>
  );
}
