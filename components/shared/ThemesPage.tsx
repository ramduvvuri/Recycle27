import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Recycle, Globe, Shield, Lightbulb, Leaf, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { PageHero } from "./PageHero";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { HeroSideText } from "@/components/ui/HeroSideText";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { FinalCTA } from "./FinalCTA";

const heroImage = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80";

const themes = [
  {
    number: "01",
    title: "Waste Management and Resource Recovery",
    description: "Advanced strategies for waste minimization, segregation, treatment, and resource recovery.",
    icon: Recycle,
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80"
  },
  {
    number: "02",
    title: "Circular Economy and Sustainable Systems",
    description: "Designing systems that keep materials in use, eliminate waste, and regenerate natural systems.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80"
  },
  {
    number: "03",
    title: "Policy, Governance and Social Impact",
    description: "Regulatory frameworks, governance models, and social dimensions of sustainable waste management.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    number: "04",
    title: "Innovation and Emerging Technologies",
    description: "Cutting-edge technologies, digital solutions, and innovative approaches to waste challenges.",
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    number: "05",
    title: "Climate, Environment and Human Health",
    description: "Interconnections between waste management, climate change, environmental quality, and public health.",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
  }
];

export function ThemesPage() {
  return (
    <>
      <PageHero
        eyebrow="CONFERENCE THEMES"
        title="Conference Themes"
        description="Five connected areas of focus for a more resourceful and resilient future."
        pageKey="themes"
        sideText={["PEOPLE", "IDEAS", "SOLUTIONS", "A CLEANER", "TOMORROW"]}
      />

      <Breadcrumb items={[{ label: "Themes" }]} />

      {/* Key Areas of Focus */}
      <SectionWrapper theme="white" spacing="generous">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start">
          <div>
            <EyebrowLabel label="OUR FOCUS" />
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-dark-text mt-4">
              Key Areas of Focus
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-secondary-text">
              RECYCLE27 explores five interconnected themes that address the pressing challenges of sustainable waste management and circular economy. Each theme represents a critical dimension of our collective journey toward a cleaner, more resilient future.
            </p>
          </div>
          
          <div className="relative">
            <QuoteBlock 
              quote="Interdisciplinary ideas today, a more sustainable tomorrow." 
              theme="light"
              className="mb-8"
            />
          </div>
        </div>

        {/* Five Large Theme Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {themes.map((theme) => {
            const Icon = theme.icon;
            return (
              <article 
                key={theme.number}
                className="group flex flex-col border border-light-border bg-soft-bg p-8 rounded-xl hover:border-primary-emerald/30 transition-colors"
              >
                <span className="text-sm font-medium text-primary-emerald mb-4">
                  {theme.number}
                </span>
                <div className="mb-6">
                  <Icon className="text-primary-emerald" size={40} />
                </div>
                <h3 className="font-display text-xl leading-tight text-dark-text mb-3">
                  {theme.title}
                </h3>
                <p className="text-sm leading-6 text-secondary-text mb-6 flex-1">
                  {theme.description}
                </p>
                <Link 
                  href="#" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-emerald hover:text-deep-emerald transition-colors"
                >
                  Learn more
                  <ArrowRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Shared Vision - Dark Section with Image Cards */}
      <SectionWrapper theme="dark" spacing="generous">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] items-start mb-16">
          <div>
            <EyebrowLabel theme="dark" label="A SHARED VISION" />
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-light-text mt-4">
              A shared agenda for change.
            </h2>
          </div>
          
          <div className="text-light-text/80">
            <p className="text-base leading-7">
              These five themes form the foundation of RECYCLE27's interdisciplinary approach. By bringing together diverse perspectives from academia, industry, policy, and practice, we aim to catalyze meaningful dialogue and actionable solutions that address the complex challenges of sustainable waste management.
            </p>
          </div>
        </div>

        {/* Five Large Image Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {themes.map((theme) => (
            <article 
              key={theme.number}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer"
            >
              <Image 
                src={theme.image} 
                alt={theme.title}
                fill
                sizes="(max-width:768px) 50vw, 20vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-sm font-medium text-muted-green mb-2">
                  {theme.number}
                </span>
                <h3 className="font-display text-lg leading-tight text-light-text">
                  {theme.title}
                </h3>
                <div className="mt-4 flex justify-end">
                  <div className="h-10 w-10 rounded-full border-2 border-light-text/50 flex items-center justify-center group-hover:border-primary-emerald group-hover:bg-primary-emerald/20 transition-all">
                    <ArrowRight size={18} className="text-light-text" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>

      {/* Unified Final CTA */}
      <FinalCTA />
    </>
  );
}
