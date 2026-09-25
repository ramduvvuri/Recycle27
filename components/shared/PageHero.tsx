"use client";

import type { ReactNode } from "react";
import { CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroSideText } from "@/components/ui/HeroSideText";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { PageHeroKey, getHeroImage } from "@/lib/heroImages";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  image?: string;
  pageKey?: PageHeroKey;
  actions?: boolean;
  children?: ReactNode;
  sideText?: string[];
  cinematic?: boolean;
  modalTrigger?: boolean;
  isHome?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  pageKey,
  actions = false,
  children,
  sideText,
  cinematic = false,
  modalTrigger = false,
  isHome = false,
}: PageHeroProps) {
  // Resolve image from pageKey if image is not explicitly provided
  const resolvedImage = image || (pageKey ? getHeroImage(pageKey) : undefined);

  // Home page uses its distinct landing hero with action buttons, countdown/updates banner and scroll indicator
  const isHomePage = isHome || (actions && children !== undefined);

  if (isHomePage) {
    return (
      <section
        className="relative isolate flex min-h-[650px] flex-col overflow-hidden bg-primary-dark pt-24 md:min-h-[750px]"
        style={resolvedImage ? { backgroundImage: `url(${resolvedImage})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
      >
        <div className="absolute inset-0 -z-10 bg-primary-dark/70" />
        <div className="mr-auto flex flex-1 flex-col justify-center px-5 pb-12 md:px-8 lg:px-10 xl:px-14">
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.17em] text-muted-green">{eyebrow}</p>
          <h1 className="max-w-4xl font-display text-5xl font-normal leading-[1.02] tracking-[-0.02em] text-light-text md:text-7xl lg:text-8xl">{title}</h1>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-light-text/90 md:text-base">{description}</p>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-light-text">
            <span className="flex items-center gap-2">
              <CalendarDays size={16} className="text-white" />
              12–14 May 2027
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-white" />
              IIT Guwahati, Assam, India
            </span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button modalTrigger showArrow className="rounded-md">
              Register Now
            </Button>
            <Button href="/call-for-abstracts" variant="secondary-light" showArrow className="rounded-md">
              Submit Abstract
            </Button>
          </div>
        </div>
        <HeroSideText lines={sideText || ["Rethink", "Reuse", "Recycle", "For a better tomorrow"]} />
        <ScrollIndicator className="bottom-28 right-10 xl:right-14" />
        {children}
      </section>
    );
  }

  // Standardized landing/hero for ALL internal pages (2.2x height)
  return (
    <section
      className="relative isolate flex min-h-[660px] items-end overflow-hidden bg-primary-dark py-12 md:min-h-[704px] md:py-14"
      style={resolvedImage ? { backgroundImage: `url(${resolvedImage})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
    >
      <div className="absolute inset-0 -z-10 bg-primary-dark/70" />
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-12">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-muted-green md:text-[13px]">
          {eyebrow}
        </p>
        <h1 className="max-w-5xl font-display text-5xl font-normal leading-[1.02] tracking-[-0.02em] text-light-text sm:text-6xl md:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-light-text/90 md:text-lg">
          {description}
        </p>
      </div>
      <HeroSideText lines={sideText || ["A", "CLEANER", "TOMORROW", "TOGETHER"]} />
      {children}
    </section>
  );
}
