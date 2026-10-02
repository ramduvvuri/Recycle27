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
  { id: 1, label: "Day 1", date: "12 May 2027" },
  { id: 2, label: "Day 2", date: "13 May 2027" },
  { id: 3, label: "Day 3", date: "14 May 2027" }
];

const programmeItems = [
  { time: "09:00 – 10:00", title: "Registration & Welcome Tea", subtitle: "", venue: "Main Foyer" },
  { time: "10:00 – 11:00", title: "Inaugural Session", subtitle: "Welcome Address, Conference Overview", venue: "Auditorium" },
  { time: "11:00 – 12:00", title: "Keynote Talk 1", subtitle: "Prof. Maria Gonzalez", venue: "Auditorium" },
  { time: "12:00 – 13:00", title: "Keynote Talk 2", subtitle: "Prof. Kenji Tanaka", venue: "Auditorium" },
  { time: "13:00 – 14:00", title: "Lunch Break", subtitle: "", venue: "Dining Hall" },
  { time: "14:00 – 15:30", title: "Technical Session 1", subtitle: "Waste Management and Resource Recovery", venue: "Hall A" },
  { time: "15:30 – 16:00", title: "Tea Break", subtitle: "", venue: "Main Foyer" },
  { time: "16:00 – 17:30", title: "Panel Discussion", subtitle: "Policy, Governance and Social Impact", venue: "Auditorium" },
  { time: "18:00 – 19:30", title: "Welcome Reception", subtitle: "", venue: "IITG Guest House" }
];

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
              A three-day programme featuring keynote talks, technical sessions,
              panel discussions, workshops and networking opportunities.
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

          {/* Programme Timeline */}
          <div className="space-y-4 mb-8">
            {programmeItems.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-sm text-secondary-text pt-2">
                  {item.time}
                </div>
                <div className="flex-1 border-l-2 border-primary-emerald pl-4">
                  <div className="bg-soft-bg rounded-lg p-5">
                    <h4 className="font-display text-lg text-dark-text">{item.title}</h4>
                    {item.subtitle && (
                      <p className="text-sm text-secondary-text mt-1">{item.subtitle}</p>
                    )}
                  </div>
                </div>
                <div className="flex-shrink-0 w-32 text-sm text-secondary-text pt-2 text-right">
                  {item.venue}
                </div>
              </div>
            ))}
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
