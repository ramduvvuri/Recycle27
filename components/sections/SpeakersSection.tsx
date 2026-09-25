import Image from "next/image";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";

const photo = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

const keynoteIds = [
  "photo-1540575467063-178a50c2df87",
  "photo-1503428593586-e225b39bddfe",
  "photo-1562774053-701939374585",
  "photo-1551836022-d5d88e9218df",
];

const keynoteSpeakers = ["Maria Gonzalez", "Kenji Tanaka", "Sarah Mitchell", "Arvind Rao"];
const plenarySpeakers = ["Emily Chen", "Hans Mueller", "Aisha Patel", "Carlos Rodriguez"];

export function SpeakersSection() {
  return (
    <>
      {/* Keynote speakers */}
      <SectionWrapper theme="white" spacing="compact">
        <div className="flex items-end justify-between gap-5">
          <div>
            <EyebrowLabel label="Keynote speakers" />
            <h2 className="font-display text-4xl">Global Perspectives, Local Impact</h2>
          </div>
          <Button href="/speakers" variant="secondary">
            View All Speakers
          </Button>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          {keynoteSpeakers.map((name, i) => (
            <article key={name} className="border border-light-border p-4">
              <div className="aspect-[4/5] bg-soft-bg">
                <Image
                  src={photo(keynoteIds[i])}
                  width={320}
                  height={400}
                  alt={`Speaker ${name}`}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-4 font-display text-xl">Prof. {name}</h3>
              <p className="text-xs text-secondary-text">Speaker profile to be announced</p>
              <span className="mt-4 block h-px w-6 bg-primary-emerald" />
              <p className="mt-3 text-sm">Circular economy and sustainable systems</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      {/* Plenary speakers */}
      <SectionWrapper theme="light" spacing="compact">
        <div className="flex items-end justify-between gap-5">
          <div>
            <EyebrowLabel label="Plenary speakers" />
            <h2 className="font-display text-4xl">Insightful Discussions, Deeper Understanding</h2>
          </div>
          <Button href="/speakers" variant="secondary">
            View All Speakers
          </Button>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          {plenarySpeakers.map((name) => (
            <article key={name} className="border border-light-border bg-white p-5">
              <Users />
              <h3 className="mt-6 font-display text-lg">{name}</h3>
              <p className="mt-2 text-xs text-secondary-text">Speaker profile to be announced</p>
              <span className="mt-4 block h-px w-6 bg-primary-emerald" />
              <p className="mt-3 text-sm">Circular economy and sustainable systems</p>
            </article>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
