import Image from "next/image";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { speakers } from "@/data/speakers";

export default function SpeakersPage() {
  return (
    <>
      <PageHero
        eyebrow="PEOPLE · PERSPECTIVES · PARTNERSHIPS"
        title="Speakers"
        description={
          <>
            Meet distinguished researchers, practitioners and leaders shaping
            <br />the future of sustainable waste management and circular economy.
          </>
        }
        pageKey="speakers"
        sideText={["A", "CLEANER", "TOMORROW", "TOGETHER"]}
      />

      <Breadcrumb items={[{ label: "Speakers" }]} />

      {/* Speakers Section */}
      <SectionWrapper theme="white" spacing="compact">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div className="flex-1">
            <EyebrowLabel label="DISTINGUISHED SPEAKERS" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-dark-text leading-tight mt-4">
              Global Perspectives,<br />Local Impact
            </h2>
          </div>
          <div className="lg:max-w-md lg:text-right">
            <p className="text-sm leading-7 text-secondary-text mb-6">
              World-renowned experts and researchers sharing groundbreaking research and innovative solutions for sustainable waste management and circular economy transformation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {speakers.map((speaker) => (
            <article
              key={speaker.id}
              className="border border-light-border rounded-xl bg-soft-bg overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="aspect-[4/5] relative bg-soft-bg">
                {speaker.image ? (
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <Users size={48} className="text-primary-emerald/30" />
                  </div>
                )}
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg text-dark-text leading-snug">{speaker.name}</h3>
                  {speaker.title && (
                    <p className="text-xs font-semibold text-primary-emerald mt-1">{speaker.title}</p>
                  )}
                  <p className="text-xs text-secondary-text mt-1.5 leading-relaxed">
                    {speaker.department ? `${speaker.department}, ` : ""}{speaker.affiliation}
                  </p>
                </div>
                {speaker.country && (
                  <p className="text-[11px] font-medium text-secondary-text/75 mt-3 pt-2 border-t border-light-border/60">
                    {speaker.country}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 border border-light-border rounded-xl bg-soft-bg p-8 text-center">
          <h3 className="font-display text-2xl text-dark-text mb-3">More Speakers to be Announced</h3>
          <p className="text-sm leading-7 text-secondary-text max-w-xl mx-auto">
            Additional keynote, plenary, and invited speakers will be announced as confirmations are received. Check back for updates.
          </p>
        </div>
      </SectionWrapper>

      <FinalCTA />
    </>
  );
}