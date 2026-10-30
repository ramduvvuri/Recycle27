import Image from "next/image";
import { Users, MapPin } from "lucide-react";
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

        {/* Speaker cards formatted like committee member cards, slightly larger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker) => (
            <article
              key={speaker.id}
              className="bg-soft-bg rounded-xl p-5 sm:p-6 border border-light-border flex items-start gap-4 sm:gap-5 hover:shadow-md hover:border-primary-emerald/30 transition-all duration-300 group"
            >
              <div className="relative w-24 h-28 sm:w-28 sm:h-34 rounded-lg overflow-hidden shrink-0 bg-white border border-light-border/60 shadow-sm">
                {speaker.image ? (
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 96px, 112px"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-recycle-sage text-recycle-green/40">
                    <Users size={32} />
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-lg sm:text-xl text-dark-text mb-1 leading-snug font-medium group-hover:text-primary-emerald transition-colors">
                  {speaker.name}
                </h3>
                {speaker.title && (
                  <p className="text-xs sm:text-[13px] font-semibold text-primary-emerald mb-1.5 leading-tight">
                    {speaker.title}
                  </p>
                )}
                <p className="text-xs sm:text-[13px] text-secondary-text flex items-start gap-1.5 leading-relaxed">
                  <MapPin size={13} className="shrink-0 text-primary-emerald/70 mt-0.5" />
                  <span>
                    {speaker.department ? `${speaker.department}, ` : ""}{speaker.affiliation}
                  </span>
                </p>
                {speaker.country && (
                  <div className="mt-2.5">
                    <span className="inline-block text-[11px] font-medium text-primary-emerald bg-primary-emerald/10 px-2.5 py-0.5 rounded-md">
                      {speaker.country}
                    </span>
                  </div>
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
