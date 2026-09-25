import { FileText, Search, Download } from "lucide-react";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";

const publicationTypes = [
  "Conference Proceedings",
  "Selected Journal Publications",
  "Publication Partners",
];

const authorResources = [
  "Paper Template (LaTeX)",
  "Paper Template (Word)",
  "Formatting Guidelines",
  "Submission Checklist",
];

const awards = ["Best Paper Award", "Best Student Paper Award", "Best Poster Award"];

export function PublicationsSection() {
  return (
    <SectionWrapper theme="white" spacing="compact">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr]">
        <div>
          <EyebrowLabel label="Publications" />
          <h2 className="font-display text-4xl">Publication Opportunities</h2>
          <p className="mt-4 text-sm leading-7 text-secondary-text">
            Selected high-quality papers presented at RECYCLE27 will be considered for publication
            in reputed journals and conference proceedings.
          </p>
          <div className="mt-6 grid gap-2 md:grid-cols-3">
            {publicationTypes.map((label) => (
              <div key={label} className="border border-light-border p-5">
                <FileText />
                <h3 className="mt-6 font-display text-lg">{label}</h3>
                <p className="mt-2 text-xs leading-5 text-secondary-text">
                  Details are subject to final confirmation.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Author resources sidebar */}
        <div className="bg-warm-cream p-6">
          <h3 className="font-display text-xl">Author Resources</h3>
          {authorResources.map((resource) => (
            <button
              key={resource}
              className="flex w-full justify-between border-b border-light-border py-4 text-left text-sm"
            >
              {resource}
              <Download size={15} />
            </button>
          ))}
        </div>
      </div>

      {/* Awards */}
      <EyebrowLabel label="Awards" className="mt-12" />
      <h2 className="font-display text-4xl">Recognizing Excellence</h2>
      <div className="mt-6 grid gap-2 md:grid-cols-3">
        {awards.map((award) => (
          <div key={award} className="bg-soft-bg p-6">
            <Search />
            <h3 className="mt-8 font-display text-xl">{award}</h3>
            <p className="mt-2 text-sm text-secondary-text">
              Recognition details will be announced soon.
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
