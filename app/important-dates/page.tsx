import { Bell } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { importantDates } from "@/data/importantDates";

export default function ImportantDatesPage() {
  return (
    <div className="pt-[76px] sm:pt-[84px] md:pt-[88px]">
      {/* Conference Timeline Section (White Theme matching Programme Schedule) */}
      <SectionWrapper theme="white" spacing="generous">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] items-start mb-16">
          <div>
            <EyebrowLabel label="KEY DATES" />
            <h1 className="font-display text-4xl md:text-5xl leading-tight text-dark-text mt-4 font-medium">
              Conference Timeline
            </h1>
          </div>

          <div className="text-secondary-text">
            <p className="text-base leading-7">
              All deadlines are at 11:59 PM IST on the specified date.
            </p>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line: centered at 28px down the vertical axis of the 56px (w-14) circles */}
            <div className="absolute left-[27px] top-6 bottom-6 w-[2px] bg-[#0C5A3D]/25" />

            {/* Timeline Events */}
            <div className="space-y-0">
              {importantDates.map((event, index) => {
                const Icon = event.icon;
                const isLast = index === importantDates.length - 1;
                return (
                  <div key={event.id}>
                    <div className="flex items-center gap-6 py-7">
                      {/* Icon with circular marker: 56px x 56px with center at 28px */}
                      <div className="relative flex-shrink-0">
                        <div className="relative z-10 w-14 h-14 rounded-full bg-white border-2 border-primary-emerald/40 flex items-center justify-center shadow-sm transition-transform duration-300 hover:scale-105">
                          <Icon className="text-primary-emerald" size={22} strokeWidth={1.8} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex items-center justify-between gap-6 sm:gap-8 min-w-0">
                        <div>
                          <h2 className="font-display text-lg sm:text-xl md:text-2xl text-dark-text font-medium leading-snug">
                            {event.label}
                          </h2>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-sm sm:text-base md:text-lg font-semibold text-primary-emerald whitespace-nowrap">
                            {event.date}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Divider Line (except for last item) */}
                    {!isLast && (
                      <div className="ml-20 border-t border-light-border/60" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Stay Informed Panel */}
      <SectionWrapper theme="light" spacing="compact">
        <div className="max-w-4xl mx-auto">
          <div className="border border-light-border bg-white p-8 md:p-12 rounded-xl shadow-sm">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-primary-emerald/10 flex items-center justify-center">
                  <Bell className="text-primary-emerald" size={28} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl text-dark-text mb-3">
                  Stay Informed
                </h3>
                <p className="text-sm sm:text-base leading-7 text-secondary-text mb-6 max-w-2xl">
                  For the latest updates on RECYCLE 2027, keep checking this page or contact us at recycle2k27@iitg.ac.in.
                </p>
                <Button href="/contact" variant="primary" showArrow className="px-6 py-3">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
