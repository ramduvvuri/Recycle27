import Image from "next/image";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { getSpeakers } from "@/lib/supabase/queries";
import type { Speaker } from "@/types/database";

// ─── Static fallback data (shown when DB is empty) ───────────────────────────
const FALLBACK_KEYNOTE: Speaker[] = [
  { id: "f1", name: "Prof. Maria Gonzalez", designation: "Professor", institution: "University of Barcelona, Spain", country: "Spain", topic: "Circular Economy in Urban Planning", speaker_type: "keynote", image_url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80", sort_order: 0, is_active: true },
  { id: "f2", name: "Prof. Kenji Tanaka", designation: "Professor", institution: "University of Tokyo, Japan", country: "Japan", topic: "Waste-to-Energy Technologies", speaker_type: "keynote", image_url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80", sort_order: 1, is_active: true },
  { id: "f3", name: "Dr. Sarah Mitchell", designation: "Researcher", institution: "MIT, USA", country: "USA", topic: "Sustainable Materials Science", speaker_type: "keynote", image_url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80", sort_order: 2, is_active: true },
  { id: "f4", name: "Prof. Arvind Rao", designation: "Professor", institution: "IIT Delhi, India", country: "India", topic: "Policy Frameworks for Circular Economy", speaker_type: "keynote", image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80", sort_order: 3, is_active: true },
];
const FALLBACK_PLENARY: Speaker[] = [
  { id: "f5", name: "Dr. Emily Chen", designation: "Researcher", institution: "Stanford University, USA", country: "USA", topic: "Digital Technologies in Waste Management", speaker_type: "plenary", sort_order: 0, is_active: true },
  { id: "f6", name: "Prof. Hans Mueller", designation: "Professor", institution: "Technical University Munich, Germany", country: "Germany", topic: "Industrial Symbiosis and Resource Recovery", speaker_type: "plenary", sort_order: 1, is_active: true },
  { id: "f7", name: "Dr. Aisha Patel", designation: "Researcher", institution: "University of Cape Town, South Africa", country: "South Africa", topic: "Informal Waste Sector Integration", speaker_type: "plenary", sort_order: 2, is_active: true },
  { id: "f8", name: "Prof. Carlos Rodriguez", designation: "Professor", institution: "University of São Paulo, Brazil", country: "Brazil", topic: "Bio-based Materials and Circular Design", speaker_type: "plenary", sort_order: 3, is_active: true },
];

export default async function SpeakersPage() {
  const [dbKeynote, dbPlenary] = await Promise.all([
    getSpeakers("keynote"),
    getSpeakers("plenary"),
  ]);

  const keynoteSpeakers = dbKeynote.length > 0 ? dbKeynote : FALLBACK_KEYNOTE;
  const plenarySpeakers = dbPlenary.length > 0 ? dbPlenary : FALLBACK_PLENARY;

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keynoteSpeakers.map((speaker) => (
            <article
              key={speaker.id}
              className="border border-light-border rounded-xl bg-soft-bg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/5] relative bg-soft-bg">
                {speaker.image_url ? (
                  <Image
                    src={speaker.image_url}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <Users size={48} className="text-primary-emerald/30" />
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-dark-text">{speaker.name}</h3>
                <p className="text-sm text-secondary-text mt-1">{speaker.institution}</p>
                {speaker.country && <p className="text-xs text-secondary-text/70 mt-0.5">{speaker.country}</p>}
                <div className="w-8 h-px bg-primary-emerald my-4" />
                <p className="text-sm text-dark-text leading-relaxed">{speaker.topic ?? "Topic to be announced"}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>

      {/* Plenary Speakers */}
      <SectionWrapper theme="light" spacing="compact">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-6">
          <div className="flex-1">
            <EyebrowLabel label="PLENARY SPEAKERS" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-dark-text leading-tight mt-4">
              Insightful Discussions,<br />Deeper Understanding
            </h2>
          </div>
          <div className="lg:max-w-md lg:text-right">
            <p className="text-sm leading-7 text-secondary-text mb-6">
              Engaging sessions led by distinguished academics and industry practitioners exploring cutting-edge developments in circular economy research.
            </p>
            <Button href="/speakers" variant="secondary" showArrow>
              View All Speakers
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {plenarySpeakers.map((speaker) => (
            <article
              key={speaker.id}
              className="border border-light-border rounded-lg bg-white p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-soft-bg flex-shrink-0 overflow-hidden">
                  {speaker.image_url ? (
                    <Image
                      src={speaker.image_url}
                      alt={speaker.name}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary-emerald/10 flex items-center justify-center">
                      <Users className="text-primary-emerald" size={24} />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg text-dark-text truncate">{speaker.name}</h3>
                  <p className="text-xs text-secondary-text mt-1 truncate">{speaker.institution}</p>
                  <div className="w-6 h-px bg-primary-emerald my-3" />
                  <p className="text-xs text-dark-text leading-snug line-clamp-2">
                    {speaker.topic ?? "Topic to be announced"}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <FinalCTA />
    </>
  );
}