"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface FinalCTAProps {
  eyebrow?: string;
  heading?: React.ReactNode;
  description?: string;
  buttonText?: string;
  className?: string;
}

export function FinalCTA({
  eyebrow = "BE PART OF A LARGER PURPOSE",
  heading = (
    <>
      Ideas for a<br />
      Cleaner Tomorrow
    </>
  ),
  description = "Join a global community working towards a circular and sustainable world through research, innovation and collaboration.",
  buttonText = "Register Now",
  className = "",
}: FinalCTAProps) {
  return (
    <section className={`relative isolate overflow-hidden bg-soft-bg py-20 md:py-28 ${className}`}>
      {/* Decorative leaf artwork */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-full select-none opacity-15 md:w-1/2">
        <Image
          src="/images/leaf.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="border-l-2 border-primary-emerald pl-6 md:pl-8">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-primary-emerald">
              {eyebrow}
            </p>
            <h2 className="font-display text-4xl leading-tight text-dark-text md:text-5xl">
              {heading}
            </h2>
          </div>

          {/* Right Column */}
          <div>
            <p className="mb-8 max-w-md text-sm leading-7 text-secondary-text">
              {description}
            </p>
            <Button modalTrigger showArrow>
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { FinalCTA as ClosingCTA };
