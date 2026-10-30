"use client";



import { useState } from "react";

import { Download, Calendar, Clock, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/Button";

import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

import { SectionWrapper } from "@/components/sections/SectionWrapper";



import { cn } from "@/lib/utils";

import { tentativeSchedule, ScheduleItem } from "@/data/programme";



export default function ProgrammePage() {

  const [activeDayId, setActiveDayId] = useState(1);

  const activeDay = tentativeSchedule.find((d) => d.id === activeDayId) || tentativeSchedule[0];



  const getCategoryBadge = (category: ScheduleItem["category"]) => {

    switch (category) {

      case "keynote":

        return "bg-primary-emerald/10 text-primary-emerald border-primary-emerald/25";

      case "technical":

        return "bg-[#113224]/10 text-[#113224] border-[#113224]/20";

      case "ceremony":

        return "bg-[#0C5A3D]/10 text-[#0C5A3D] border-[#0C5A3D]/25 font-semibold";

      case "break":

        return "bg-amber-600/10 text-amber-800 border-amber-600/20";

      case "special":

        return "bg-purple-700/10 text-purple-900 border-purple-700/20";

      default:

        return "bg-soft-bg text-secondary-text border-light-border";

    }

  };



  return (
    <div className="pt-[76px] sm:pt-[84px] md:pt-[88px]">
{/* Main Schedule Section */}

      <SectionWrapper theme="white" spacing="compact">

        <div className="max-w-4xl mx-auto">

          {/* Header */}

          <div className="text-center mb-10">

            <EyebrowLabel label="TENTATIVE SCHEDULE" />

            <h2 className="font-display text-4xl md:text-5xl text-dark-text leading-tight mt-4">

              Two-Day Conference Schedule

            </h2>

            <p className="mt-4 text-sm leading-7 text-secondary-text max-w-2xl mx-auto">

              The official conference takes place on <strong>20–21 May 2027</strong> at IIT Guwahati.

              Select a day below to view the scheduled sessions and timings.

            </p>

          </div>



          {/* Day Tabs */}

          <div className="flex gap-3 mb-10">

            {tentativeSchedule.map((day) => (

              <button

                key={day.id}

                onClick={() => setActiveDayId(day.id)}

                className={cn(

                  "flex-1 rounded-xl border px-5 py-4 text-center transition-all cursor-pointer",

                  activeDayId === day.id

                    ? "bg-primary-emerald border-primary-emerald text-light-text shadow-md scale-[1.01]"

                    : "bg-soft-bg border-light-border text-dark-text hover:border-primary-emerald/40 hover:bg-white"

                )}

              >

                <div className="font-display text-lg font-semibold">{day.label}</div>

                <div

                  className={cn(

                    "text-xs mt-1 font-medium",

                    activeDayId === day.id ? "text-light-text/90" : "text-secondary-text"

                  )}

                >

                  {day.fullDate}

                </div>

              </button>

            ))}

          </div>



          {/* Schedule List */}

          <div className="bg-soft-bg rounded-2xl border border-light-border p-5 sm:p-8 mb-10 shadow-sm">

            <div className="flex items-center justify-between pb-6 mb-6 border-b border-light-border/80">

              <div>

                <h3 className="font-display text-2xl text-dark-text font-semibold">

                  {activeDay.label} — {activeDay.date}

                </h3>

                <p className="text-xs text-secondary-text mt-1">

                  All timings are in Indian Standard Time (IST)

                </p>

              </div>

              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary-emerald/10 text-primary-emerald border border-primary-emerald/20">

                <Clock size={12} /> Tentative

              </span>

            </div>



            <div className="space-y-3">

              {activeDay.schedule.map((item, index) => (

                <div

                  key={index}

                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white rounded-xl border border-light-border/80 hover:border-primary-emerald/30 transition-colors"

                >

                  {/* Time Badge */}

                  <div className="flex items-center gap-2 sm:w-44 shrink-0">

                    <Clock size={14} className="text-primary-emerald shrink-0" />

                    <span className="font-body text-sm font-semibold text-dark-text tracking-tight">

                      {item.time}

                    </span>

                  </div>



                  {/* Session Title */}

                  <div className="flex-1">

                    <h4 className="font-body text-[15px] font-medium text-dark-text leading-snug">

                      {item.session}

                    </h4>

                  </div>



                  {/* Category Pill */}

                  <div className="shrink-0 self-start sm:self-center">

                    <span

                      className={cn(

                        "inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium border uppercase tracking-wider",

                        getCategoryBadge(item.category)

                      )}

                    >

                      {item.category === "break" ? "Break" : item.category}

                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>



          {/* Programme CTA Buttons */}

          <div className="flex flex-col sm:flex-row gap-4">

            <Button

              href="/call-for-abstracts"

              variant="primary"

              showArrow

              className="flex-1 py-3.5"

            >

              Submit Your Abstract

            </Button>

            <Button

              href="/downloads/abstract-format.docx"

              download="abstract-format.docx"

              variant="secondary"

              icon={<Download size={16} />}

              className="flex-1 py-3.5"

            >

              Download Abstract Format

            </Button>

          </div>

        </div>

      </SectionWrapper>



      {/* Unified Final CTA */}
    </div>
  );
}