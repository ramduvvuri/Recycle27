import Image from "next/image";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { keynoteSpeakers } from "@/data/speakers";

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

      {/* Keynote Speakers */}
      <SectionWrapper theme="white" spacing="compact">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-6">
          <div className="flex-1">
            <EyebrowLabel label="KEYNOTE SPEAKERS" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-dark-text leading-tight mt-4">
              Global Perspectives,<br />Local Impact
            </h2>
          </div>
          <div className="lg:max-w-md lg:text-right">
            <p className="text-sm leading-7 text-secondary-text mb-6">
              World-renowned experts sharing groundbreaking research and innovative solutions for sustainable waste management and circular economy transformation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {keynoteSpeakers.map((speaker) => (
            <article
              key={speaker.id}
              className="border border-light-border rounded-xl bg-soft-bg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/5] relative bg-soft-bg">
                {speaker.image ? (
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <Users size={48} className="text-primary-emerald/30" />
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-dark-text">{speaker.name}</h3>
                <p className="text-sm text-secondary-text mt-1">{speaker.affiliation}</p>
                {speaker.country && (
                  <p className="text-xs text-secondary-text/70 mt-0.5">{speaker.country}</p>
                )}
                {speaker.topic && (
                  <>
                    <div className="w-8 h-px bg-primary-emerald my-4" />
                    <p className="text-sm text-dark-text leading-relaxed">{speaker.topic}</p>
                  </>
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