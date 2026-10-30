import Image from "next/image";
import { Users } from "lucide-react";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { speakers } from "@/data/speakers";

export default function SpeakersPage() {
  return (
    <>
      <PageHero
        eyebrow="PEOPLE · PERSPECTIVES · PARTNERSHIPS"
        title="Tentative Speakers"
        description="Meet tentative keynote and invited speakers shaping the future of sustainable waste management and circular economy."
        pageKey="speakers"
        sideText={["A", "CLEANER", "TOMORROW", "TOGETHER"]}
      />

      <Breadcrumb items={[{ label: "Speakers" }]} />

      {/* Speakers Section */}
      <SectionWrapper theme="white" spacing="compact">
        <div className="mb-8">
          <EyebrowLabel label="TENTATIVE SPEAKERS" />
          <h2 className="font-display text-3xl sm:text-4xl text-dark-text leading-tight mt-3">
            Tentative Speakers
          </h2>
        </div>

        {/* Compact speaker cards (~0.4x scale, editorial grid) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 sm:gap-4">
          {speakers.map((speaker) => (
            <article
              key={speaker.id}
              className="border border-light-border/80 rounded-lg bg-soft-bg overflow-hidden hover:shadow-md hover:border-primary-emerald/30 transition-all flex flex-col group"
            >
              <div className="aspect-[4/4.5] relative bg-[#e7eee5] overflow-hidden">
                {speaker.image ? (
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <Users size={32} className="text-primary-emerald/30" />
                  </div>
                )}
              </div>
              <div className="p-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-[13.5px] sm:text-[14px] text-dark-text leading-snug font-medium line-clamp-1">
                    {speaker.name}
                  </h3>
                  {speaker.title && (
                    <p className="text-[10.5px] font-semibold text-primary-emerald mt-0.5 line-clamp-1">
                      {speaker.title}
                    </p>
                  )}
                  <p className="text-[10px] text-secondary-text mt-1 leading-[1.35] line-clamp-2">
                    {speaker.department ? `${speaker.department}, ` : ""}{speaker.affiliation}
                  </p>
                </div>
                {speaker.country && (
                  <p className="text-[9.5px] font-medium text-secondary-text/75 mt-2 pt-1.5 border-t border-light-border/50">
                    {speaker.country}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 border border-light-border rounded-lg bg-soft-bg p-6 text-center">
          <h3 className="font-display text-xl text-dark-text mb-2">More Speakers to be Announced</h3>
          <p className="text-xs sm:text-sm leading-6 text-secondary-text max-w-lg mx-auto">
            Additional keynote, plenary, and invited speakers will be announced as confirmations are received. Check back for updates.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
