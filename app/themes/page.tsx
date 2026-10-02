import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { themes } from "@/data/themes";

export default function ThemesPage() {
  return (
    <>
      <PageHero
        eyebrow="CONFERENCE THEMES"
        title="Conference Themes"
        description="Ten interconnected areas of focus for a more sustainable and resource-efficient future."
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
              ReCYCLE 2027 explores ten interconnected themes that address the pressing challenges of sustainable waste management and circular economy. Each theme represents a critical dimension of our collective journey toward a cleaner, more resilient future.
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

        {/* Ten Theme Cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {themes.map((theme) => {
            const Icon = theme.icon;
            return (
              <article
                key={theme.id}
                className="group flex flex-col border border-light-border bg-soft-bg p-7 rounded-xl hover:border-primary-emerald/30 transition-colors"
              >
                <span className="text-sm font-medium text-primary-emerald mb-4">
                  {theme.number}
                </span>
                <div className="mb-5">
                  <Icon className="text-primary-emerald" size={36} />
                </div>
                <h3 className="font-display text-base leading-snug text-dark-text mb-3 flex-1">
                  {theme.title}
                </h3>
                <p className="text-xs leading-5 text-secondary-text">
                  {theme.description}
                </p>
              </article>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Shared Vision - Dark Section */}
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
              These ten themes form the foundation of ReCYCLE 2027&apos;s interdisciplinary approach. By bringing together diverse perspectives from academia, industry, policy, and practice, we aim to catalyze meaningful dialogue and actionable solutions for sustainable waste management.
            </p>
          </div>
        </div>

        {/* Theme Grid in Dark Section */}
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          {themes.map((theme) => {
            const Icon = theme.icon;
            return (
              <div
                key={theme.id}
                className="border border-dark-border bg-secondary-dark p-5 rounded-lg"
              >
                <span className="text-muted-green text-xs font-medium">{theme.number}</span>
                <div className="mt-4 mb-3">
                  <Icon className="text-muted-green" size={24} strokeWidth={1.5} />
                </div>
                <p className="text-sm leading-5 text-light-text">{theme.title}</p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      <FinalCTA />
    </>
  );
}
