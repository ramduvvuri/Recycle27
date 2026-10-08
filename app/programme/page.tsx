"use client";

import { useState } from "react";
import { Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { cn } from "@/lib/utils";


const programmeDays = [
  { id: 1, label: "Day 1", date: "20th May 2027" },
  { id: 2, label: "Day 2", date: "21st May 2027" }
];

const daySummaries: Record<number, string> = {
  1: "Inauguration, Keynote Addresses, Technical Sessions, Cultural Evening & Welcome Gala Dinner.",
  2: "Plenary Lectures, Parallel Technical Sessions, Poster Sessions, Valedictory Function, and Award Distribution."
};

export default function ProgrammePage() {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <>
      <PageHero
        eyebrow="THREE DAYS OF IDEAS"
        title="Conference Programme"
        description={
          <>
            A considered programme of keynotes, technical sessions,
            <br />conversations and connection.
          </>
        }
        pageKey="programme"
        sideText={["A", "CLEANER", "TOMORROW", "TOGETHER"]}
      />

      <Breadcrumb items={[{ label: "Programme" }]} />

      {/* Centered Programme Layout */}
      <SectionWrapper theme="white" spacing="compact">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <EyebrowLabel label="CONFERENCE PROGRAMME" />
            <h2 className="font-display text-4xl md:text-5xl text-dark-text leading-tight mt-4">
              Programme
            </h2>
            <p className="mt-6 text-sm leading-7 text-secondary-text max-w-2xl mx-auto">
              A two-day programme featuring keynote talks, technical sessions,
              and networking opportunities.
            </p>
          </div>

          {/* Day Tabs */}
          <div className="flex gap-2 mb-8">
            {programmeDays.map((day) => (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                className={cn(
                  "flex-1 rounded-lg border px-4 py-3 text-center transition-all",
                  activeDay === day.id
                    ? "bg-primary-emerald border-primary-emerald text-light-text"
                    : "bg-white border-light-border text-dark-text hover:border-primary-emerald/50"
                )}
              >
                <div className="font-medium text-sm">{day.label}</div>
                <div className={cn(
                  "text-xs mt-1",
                  activeDay === day.id ? "text-light-text/80" : "text-secondary-text"
                )}>
                  {day.date}
                </div>
              </button>
            ))}
          </div>

          <div className="bg-soft-bg rounded-lg p-8 text-center mb-8 border border-light-border">
            <h3 className="font-display text-2xl text-dark-text mb-4">
              {programmeDays.find(d => d.id === activeDay)?.label} Overview
            </h3>
            <p className="text-secondary-text text-lg leading-relaxed">
              {daySummaries[activeDay]}
            </p>
            <div className="mt-8 space-y-4">
              <div className="p-4 bg-white rounded-md border border-light-border">
                <span className="font-semibold text-dark-text">Technical Sessions: </span>
                <span className="text-secondary-text">Will be updated soon</span>
              </div>
              <div className="p-4 bg-white rounded-md border border-light-border">
                <span className="font-semibold text-dark-text">Plenary Sessions: </span>
                <span className="text-secondary-text">Will be updated soon</span>
              </div>
            </div>
          </div>

          {/* Programme CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#" variant="secondary" icon={<Download size={16} />} className="flex-1">
              Download Full Programme
            </Button>
            <Button href="#" variant="secondary" icon={<Calendar size={16} />} className="flex-1">
              Add to Calendar
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Unified Final CTA */}
      <FinalCTA />
    </>
  );
}
