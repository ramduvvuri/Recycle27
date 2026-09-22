import type { ReactNode } from "react";
import { CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroSideText } from "@/components/ui/HeroSideText";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: ReactNode;
  image?: string;
  actions?: boolean;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, image, actions = false, children }: PageHeroProps) {
  return (
    <section
      className={`relative isolate flex overflow-hidden bg-primary-dark ${actions ? "min-h-screen flex-col pt-24" : "min-h-[300px] items-end py-12 md:min-h-[320px] md:py-14"}`}
      style={image ? { backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
    >
      <div className="absolute inset-0 -z-10 bg-primary-dark/70" />
      <div className={`w-full ${actions ? "mr-auto px-5 md:px-8 lg:px-10 xl:px-14 flex flex-1 flex-col justify-center pb-10" : "mx-auto max-w-7xl px-5 md:px-8 lg:px-12"}`}>
        <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.17em] text-muted-green">{eyebrow}</p>
        <h1 className={`max-w-4xl font-display font-normal leading-[1.02] tracking-[-0.02em] text-light-text ${actions ? "text-6xl md:text-[92px]" : "text-5xl md:text-[62px]"}`}>{title}</h1>
        <p className="mt-4 max-w-xl text-[15px] leading-7 text-light-text/90 md:text-base">{description}</p>
        {actions && (
          <>
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
              <Button href="/registration" showArrow className="rounded-md">
                Register Now
              </Button>
              <Button href="/call-for-abstracts" variant="secondary-light" showArrow className="rounded-md">
                Submit Abstract
              </Button>
            </div>
          </>
        )}
      </div>
      {actions && (
        <>
          <HeroSideText lines={["Rethink", "Reuse", "Recycle", "For a better tomorrow"]} />
          <ScrollIndicator className="bottom-28 right-10 xl:right-14" />
        </>
      )}
      {children}
    </section>
  );
}
