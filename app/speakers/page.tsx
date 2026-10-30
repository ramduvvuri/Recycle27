import Image from "next/image";
import { Users } from "lucide-react";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { speakers } from "@/data/speakers";

export default function SpeakersPage() {
  return (
    <div className="pt-[76px] sm:pt-[84px] md:pt-[88px]">
      {/* Speakers Section */}
      <SectionWrapper theme="white" spacing="compact">
        <div className="mb-10">
          <EyebrowLabel label="TENTATIVE SPEAKERS" />
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-dark-text leading-tight mt-3 font-medium">
            Tentative Speakers
          </h1>
          <p className="mt-3 text-sm sm:text-base text-secondary-text max-w-xl">
            Meet tentative keynote and invited speakers shaping the future of sustainable waste management and circular economy.
          </p>
        </div>

        {/* 4 speakers in a row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker) => (
            <article
              key={speaker.id}
              className="border border-light-border rounded-xl bg-soft-bg overflow-hidden hover:shadow-lg hover:border-primary-emerald/30 transition-all flex flex-col group"
            >
              <div className="aspect-[4/4.5] relative bg-[#e7eee5] overflow-hidden">
                {speaker.image ? (
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <Users size={36} className="text-primary-emerald/30" />
                  </div>
                )}
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg text-dark-text leading-snug font-medium">
                    {speaker.name}
                  </h3>
                  {speaker.title && (
                    <p className="text-xs font-semibold text-primary-emerald mt-1">
                      {speaker.title}
                    </p>
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
    </div>
  );
}
