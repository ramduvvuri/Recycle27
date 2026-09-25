import { FileText, User, Search } from "lucide-react";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";

const guidelines = [
  {
    title: "Originality",
    desc: "Abstracts must be original and not previously published or under review elsewhere.",
    icon: FileText,
  },
  {
    title: "Author Information",
    desc: "Include title, authors, affiliations and corresponding author details.",
    icon: User,
  },
  {
    title: "Content",
    desc: "Clearly mention objectives, methodology, key results and conclusions.",
    icon: FileText,
  },
  {
    title: "Relevance",
    desc: "The abstract should align with one or more of the conference themes.",
    icon: Search,
  },
  {
    title: "Submission Mode",
    desc: "All abstracts must be submitted through the Google Form.",
    icon: FileText,
  },
];

const importantDates = [
  { date: "15 January 2027", event: "Abstract Submission Deadline", highlight: true },
  { date: "15 February 2027", event: "Acceptance Notification", highlight: false },
  { date: "15 March 2027", event: "Registration Deadline", highlight: false },
  { date: "12–14 May 2027", event: "Conference Dates", highlight: true },
];

export function AbstractsSection() {
  return (
    <SectionWrapper theme="white" spacing="compact">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] relative">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-light-border -translate-x-1/2" />

        {/* Left: Submission Guidelines */}
        <div>
          <EyebrowLabel label="SUBMISSION GUIDELINES" />
          <h2 className="font-display text-4xl md:text-5xl leading-tight">Submission Guidelines</h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-secondary-text">
            Authors are invited to submit original and unpublished work related to the themes of
            RECYCLE27. The abstract should clearly state the objectives, methodology, key results and
            expected impact of the work.
          </p>
          <div className="mt-8 space-y-4">
            {guidelines.map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="flex gap-5 bg-soft-bg border border-light-border rounded-lg p-6"
              >
                <div className="shrink-0">
                  <Icon className="text-primary-emerald" size={28} />
                </div>
                <div>
                  <h3 className="font-display text-xl text-dark-text">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-secondary-text">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Important Dates */}
        <div>
          <EyebrowLabel label="IMPORTANT DATES" />
          <h2 className="font-display text-4xl md:text-5xl leading-tight">Important Dates</h2>
          <div className="mt-8 relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-light-border" />
            <div className="space-y-8">
              {importantDates.map(({ date, event, highlight }, i) => (
                <div key={i} className="relative pl-8">
                  <div
                    className={`absolute left-0 top-2 w-4 h-4 rounded-full border-2 ${
                      highlight
                        ? "border-primary-emerald bg-primary-emerald"
                        : "border-light-border bg-white"
                    }`}
                  />
                  <p className="text-sm font-medium text-secondary-text">{date}</p>
                  <p
                    className={`mt-1 font-display text-lg ${
                      highlight ? "text-primary-emerald" : "text-dark-text"
                    }`}
                  >
                    {event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
