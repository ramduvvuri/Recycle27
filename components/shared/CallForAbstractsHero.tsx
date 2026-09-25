import { Button } from "@/components/ui/Button";
import { HeroSideText } from "@/components/ui/HeroSideText";
import { Download } from "lucide-react";

export function CallForAbstractsHero() {
  return (
    <section className="relative isolate flex overflow-hidden bg-primary-dark min-h-[700px] md:min-h-[800px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/heroes/hero-sunset.png")' }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-dark/90 via-primary-dark/70 to-primary-dark/30" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 xl:px-14 flex flex-col justify-center py-16 md:py-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.17em] text-muted-green">
            SHARE IDEAS · SPARK SOLUTIONS · SHAPE A CLEANER TOMORROW
          </p>
          
          {/* Main Heading */}
          <h1 className="font-display font-normal leading-[1.02] tracking-[-0.02em] text-light-text text-5xl md:text-6xl lg:text-7xl">
            Call for Abstracts
          </h1>
          
          {/* Description */}
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-light-text/90 md:text-base">
            We invite researchers, practitioners, industry experts and students
            to submit abstracts on innovative solutions for sustainable waste
            management and circular economy.
          </p>
          
          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button 
              href="/call-for-abstracts" 
              showArrow 
              className="px-8 py-4 text-base rounded-md bg-primary-emerald hover:bg-deep-emerald"
            >
              Submit Abstract →
            </Button>
            <Button 
              href="#" 
              variant="secondary-light" 
              icon={<Download size={18} />}
              className="px-8 py-4 text-base rounded-md border-light-text/50"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
      
      {/* Vertical Text */}
      <HeroSideText lines={["PEOPLE", "IDEAS", "SOLUTIONS", "A CLEANER", "TOMORROW"]} />
    </section>
  );
}