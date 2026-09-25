import Image from "next/image";
import { CalendarDays, MapPin, Bell, FileText, Users, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { HeroSideText } from "@/components/ui/HeroSideText";
import { PageHero } from "./PageHero";
import { FinalCTA } from "./FinalCTA";

const heroImage = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80";

const highlights = [
  {
    number: "01",
    title: "Research-led exchange",
    description: "Share your work with researchers, practitioners and experts from around the world.",
    icon: FileText
  },
  {
    number: "02", 
    title: "Practical perspectives",
    description: "Gain insights from real-world applications and case studies in sustainable waste management.",
    icon: Users
  },
  {
    number: "03",
    title: "Meaningful connections",
    description: "Build relationships with peers, mentors and potential collaborators in the field.",
    icon: MessageSquare
  }
];

const timelineEvents = [
  {
    title: "Abstract Submission Deadline",
    date: "To be announced",
    icon: FileText
  },
  {
    title: "Acceptance Notification",
    date: "To be announced", 
    icon: Bell
  },
  {
    title: "Registration Deadline",
    date: "To be announced",
    icon: Users
  },
  {
    title: "Conference Dates",
    date: "12 – 14 May 2027",
    icon: CalendarDays
  }
];

export function DatesPage() {
  return (
    <>
      <PageHero
        eyebrow="CONFERENCE TIMELINE"
        title="Plan Your Participation"
        description="Key milestones for submission, registration and the conference at a glance."
        pageKey="dates"
        sideText={["PEOPLE", "IDEAS", "SOLUTIONS", "A CLEANER", "TOMORROW"]}
      />

      <Breadcrumb items={[{ label: "Important Dates" }]} />

      {/* Intro / Highlights Section */}
      <SectionWrapper theme="white" spacing="generous">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start">
          <div>
            <EyebrowLabel label="CONFERENCE TIMELINE" />
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-dark-text mt-4">
              Important Dates
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-secondary-text">
              Stay informed about key milestones for abstract submission, registration, and the conference schedule. Mark your calendar and plan your participation in RECYCLE27.
            </p>
          </div>
          
          {/* Three Large Cards */}
          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article 
                  key={highlight.number}
                  className="flex flex-col border border-light-border bg-soft-bg p-8 rounded-xl"
                >
                  <span className="text-sm font-medium text-primary-emerald mb-4">
                    {highlight.number}
                  </span>
                  <div className="mb-6">
                    <Icon className="text-primary-emerald" size={40} />
                  </div>
                  <h3 className="font-display text-xl leading-tight text-dark-text mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-sm leading-6 text-secondary-text flex-1">
                    {highlight.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Conference Timeline Section */}
      <SectionWrapper theme="dark" spacing="generous">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] items-start mb-16">
          <div>
            <EyebrowLabel theme="dark" label="KEY DATES" />
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-light-text mt-4">
              Conference Timeline
            </h2>
          </div>
          
          <div className="text-light-text/80">
            <p className="text-base leading-7">
              Mark your calendar and stay updated. All dates are tentative and will be updated soon.
            </p>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[7px] top-0 bottom-0 w-px bg-dark-border" />
            
            {/* Timeline Events */}
            <div className="space-y-0">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                const isLast = index === timelineEvents.length - 1;
                return (
                  <div key={event.title}>
                    <div className="flex gap-6 py-8">
                      {/* Icon with circular marker */}
                      <div className="relative flex-shrink-0">
                        <div className="absolute left-[7px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary-emerald" />
                        <div className="relative z-10 w-14 h-14 rounded-full bg-secondary-dark border-2 border-dark-border flex items-center justify-center">
                          <Icon className="text-muted-green" size={20} />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 flex items-start justify-between gap-8">
                        <div>
                          <h3 className="font-display text-xl md:text-2xl text-light-text">
                            {event.title}
                          </h3>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-medium text-muted-green">
                            {event.date}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Divider Line (except for last item) */}
                    {!isLast && (
                      <div className="ml-20 border-t border-dark-border" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Stay Informed Panel */}
      <SectionWrapper theme="dark" spacing="compact">
        <div className="max-w-4xl mx-auto">
          <div className="border border-dark-border bg-secondary-dark p-10 md:p-12 rounded-xl">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary-emerald/20 flex items-center justify-center">
                  <Bell className="text-primary-emerald" size={32} />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="font-display text-3xl md:text-4xl text-light-text mb-4">
                  Stay Informed
                </h2>
                <p className="text-base leading-7 text-light-text/80 mb-8 max-w-2xl">
                  Detailed dates, guidelines and updates will be shared soon. Keep checking this page for the latest information.
                </p>
                <Button href="/important-dates" variant="secondary-light" showArrow className="px-8 py-4">
                  Check for Updates
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Unified Final CTA */}
      <FinalCTA />
    </>
  );
}
