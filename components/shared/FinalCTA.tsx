"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Recycle } from "lucide-react";
import { ScrollParallax } from "@/components/motion/ScrollParallax";

interface FinalCTAProps {
  eyebrow?: string;
  heading?: React.ReactNode;
  buttonText?: string;
  className?: string;
}

export function FinalCTA({
  eyebrow = "BE PART OF THE CHANGE",
  heading = (
    <>
      Join the Global Conversation<br />
      on Sustainable Waste Management
    </>
  ),
  buttonText = "Register Now",
  className = "",
}: FinalCTAProps) {
  return (
    <section id="cta" className={`relative hidden md:flex w-full overflow-hidden bg-[#064B36] flex-col md:flex-row items-center min-h-[140px] ${className}`}>
      
      {/* Background Recycle Motif */}
      <ScrollParallax speed={0.12} max={18} className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none translate-x-1/4">
        <Recycle size={300} strokeWidth={0.5} className="text-white" />
      </ScrollParallax>

      {/* Left Image Zone (32%) — composting / organic waste treatment */}
      <div className="relative w-full h-[200px] md:h-auto md:w-[32%] md:absolute md:left-0 md:top-0 md:bottom-0 shrink-0 overflow-hidden">
        <ScrollParallax speed={-0.08} max={20} className="absolute inset-0 w-full h-full scale-[1.1]">
          <Image
            src="/images/waste/composting-01.jpg"
            alt="Composting and organic waste treatment facility"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </ScrollParallax>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-6 py-10 md:py-8 md:pl-[36%] md:pr-10 lg:pr-16 lg:pl-[36%] gap-8">
        
        {/* Center: Message */}
        <div className="flex flex-col border-l border-white/20 pl-4 md:pl-6 shrink-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-px w-4 bg-white/40" />
            <p className="font-body text-[9.5px] font-bold tracking-[0.15em] text-white/90 uppercase">
              {eyebrow}
            </p>
          </div>
          <h2 className="font-display text-[22px] md:text-[26px] leading-[1.1] tracking-[-.02em] text-[#F5F1E5]">
            {heading}
          </h2>
        </div>

        {/* Right: Button */}
        <div className="shrink-0 flex justify-end">
          <Button modalTrigger showArrow variant="secondary-light" className="bg-[#F5F1E5] text-[#064B36] hover:bg-white border-0 h-[40px] px-6 text-[12px] font-medium shadow-sm transition-colors rounded-[3px]">
            {buttonText}
          </Button>
        </div>

      </div>
    </section>
  );
}

export { FinalCTA as ClosingCTA };
