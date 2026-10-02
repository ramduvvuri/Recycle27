
import { FileText, Download, Search, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

import { FinalCTA } from "@/components/shared/FinalCTA";


export default function PublicationsAwardsPage() {
  return (
    <>
      <PageHero
        eyebrow="KNOWLEDGE FOR A CLEANER TOMORROW"
        title={
          <>
            Publications &
            <br />Awards
          </>
        }
        description="High-quality research, real-world impact."
        pageKey="publications"
        sideText={["CIRCULAR", "SOLUTIONS", "FOR A", "BETTER", "TOMORROW"]}
      />

      <Breadcrumb items={[{ label: "Publications & Awards" }]} />

      {/* Publication Opportunities Section */}
      <SectionWrapper theme="white" spacing="compact">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <EyebrowLabel label="PUBLICATIONS" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-dark-text leading-tight mt-4">
              Publication Opportunities
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-secondary-text">
              Selected high-quality papers presented at RECYCLE27 will be considered for publication in reputed journals and conference proceedings.
            </p>
            
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Conference Proceedings",
                  description: "Peer-reviewed proceedings of selected papers presented at RECYCLE27.",
                  icon: <FileText size={32} />
                },
                {
                  title: "Selected Journal Publications",
                  description: "High-impact journals for outstanding research contributions.",
                  icon: <BookOpen size={32} />
                },
                {
                  title: "Publication Partners",
                  description: "Collaboration with leading academic publishers in sustainability.",
                  icon: <Award size={32} />
                }
              ].map((item) => (
                <article
                  key={item.title}
                  className="border border-light-border rounded-xl bg-soft-bg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="text-primary-emerald mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-xl text-dark-text">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-secondary-text">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="bg-warm-cream rounded-xl p-8">
            <h3 className="font-display text-2xl text-dark-text mb-6">Author Resources</h3>
            <div className="space-y-4">
              {[
                "Paper Template (LaTeX)",
                "Paper Template (Word)",
                "Formatting Guidelines",
                "Submission Checklist"
              ].map((item) => (
                <button
                  key={item}
                  className="flex w-full justify-between items-center border-b border-light-border py-4 text-left text-sm text-dark-text hover:text-primary-emerald transition-colors"
                >
                  <span>{item}</span>
                  <Download size={16} />
                </button>
              ))}
            </div>
            <Button href="#" variant="secondary" showArrow className="mt-6 w-full">
              View All Resources →
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Journals Section */}
      <SectionWrapper theme="light" spacing="compact">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-6">
          <div className="flex-1">
            <EyebrowLabel label="JOURNALS (INDICATIVE)" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-dark-text leading-tight mt-4">
              Potential Publication Venues
            </h2>
          </div>
          <div className="lg:max-w-md lg:text-right">
            <p className="text-sm leading-7 text-secondary-text">
              Selected papers may be considered for publication in these journals subject to approval and compliance with publication policies.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Journal of Cleaner Production",
            "Waste Management",
            "Resources, Conservation & Recycling",
            "Environmental Science & Technology"
          ].map((journal) => (
            <article
              key={journal}
              className="border border-light-border rounded-xl bg-white p-6 hover:shadow-md transition-shadow"
            >
              <div className="h-12 mb-4 flex items-center justify-center bg-soft-bg rounded-lg">
                <BookOpen className="text-primary-emerald" size={24} />
              </div>
              <h3 className="font-display text-lg text-dark-text leading-tight">{journal}</h3>
              <p className="mt-2 text-xs text-secondary-text">Elsevier / Springer</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      {/* Awards Section */}
      <SectionWrapper theme="white" spacing="compact">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-6">
          <div className="flex-1">
            <EyebrowLabel label="AWARDS" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-dark-text leading-tight mt-4">
              Recognizing Excellence
            </h2>
          </div>
          <div className="lg:max-w-md lg:text-right">
            <p className="text-sm leading-7 text-secondary-text">
              Outstanding contributions and innovative research will be recognized through various awards during the conference.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Best Paper Award",
              description: "Recognizing the most impactful research paper presented at RECYCLE27.",
              icon: <Award size={40} />
            },
            {
              title: "Best Student Paper Award",
              description: "Celebrating exceptional research contributions from student participants.",
              icon: <Search size={40} />
            },
            {
              title: "Best Poster Award",
              description: "Honoring outstanding visual presentation and communication of research.",
              icon: <FileText size={40} />
            }
          ].map((award) => (
            <article
              key={award.title}
              className="border border-light-border rounded-xl bg-soft-bg p-8 hover:shadow-md transition-shadow"
            >
              <div className="text-primary-emerald mb-6">
                {award.icon}
              </div>
              <h3 className="font-display text-2xl text-dark-text mb-4">{award.title}</h3>
              <p className="text-sm leading-6 text-secondary-text">
                {award.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-lg bg-warm-cream p-6 md:p-8">
          <p className="text-sm leading-6 text-secondary-text">
            <strong className="text-dark-text">Note:</strong> Award details, eligibility criteria and selection process will be announced soon.
          </p>
        </div>
      </SectionWrapper>

      {/* Unified Final CTA */}
      <FinalCTA />
    </>
  );
}
