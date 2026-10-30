import { Download, Award, BookOpen, Presentation, Layers } from "lucide-react";

import { Button } from "@/components/ui/Button";

import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

import { SectionWrapper } from "@/components/sections/SectionWrapper";




export default function PublicationsAwardsPage() {

  return (
    <div className="pt-[76px] sm:pt-[84px] md:pt-[88px]">
{/* Publication Opportunities Section */}

      <SectionWrapper theme="white" spacing="compact" className="pt-24 sm:pt-28 md:pt-32">

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">

          <div>

            <EyebrowLabel label="PUBLICATIONS" />

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-dark-text leading-tight mt-4">

              Publication Opportunities

            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-secondary-text">

              Selected high-quality papers presented at RECYCLE 2027 will be considered for publication in reputed indexed journals and academic partner volumes.

            </p>

            

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              {[

                {

                  title: "Selected Journal Publications",

                  description: "High-impact special issues and regular tracks in peer-reviewed environmental engineering and waste management journals.",

                  icon: <BookOpen size={32} />

                },

                {

                  title: "Publication Partners",

                  description: "Active collaborations with leading international scientific publishers focusing on circular economy and sustainability.",

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

                  className="flex w-full justify-between items-center border-b border-light-border py-4 text-left text-sm text-dark-text hover:text-primary-emerald transition-colors cursor-pointer"

                >

                  <span>{item}</span>

                  <Download size={16} />

                </button>

              ))}

            </div>

            <Button href="/call-for-abstracts" variant="secondary" showArrow className="mt-6 w-full">

              View Submission Guidelines →

            </Button>

          </div>

        </div>

      </SectionWrapper>



      {/* Awards Section */}

      <SectionWrapper theme="light" spacing="compact">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">

          <div className="flex-1">

            <EyebrowLabel label="AWARDS & HONORS" />

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-dark-text leading-tight mt-4">

              Recognizing Excellence

            </h2>

          </div>

          <div className="lg:max-w-md lg:text-right">

            <p className="text-sm leading-7 text-secondary-text">

              Outstanding contributions and innovative research will be recognized through prestigious conference awards across all technical themes.

            </p>

          </div>

        </div>



        <div className="grid gap-6 md:grid-cols-2">

          {/* Award 1: Best Oral Presentation Award */}

          <article className="border border-light-border rounded-xl bg-white p-8 hover:shadow-md transition-shadow">

            <div className="text-primary-emerald mb-6">

              <Presentation size={40} />

            </div>

            <h3 className="font-display text-2xl text-dark-text mb-3">

              Best Oral Presentation Award

            </h3>

            <p className="text-xs font-semibold text-primary-emerald uppercase tracking-wider mb-3">

              For Each Theme

            </p>

            <p className="text-sm leading-6 text-secondary-text">

              Conferred to authors presenting outstanding oral contributions that demonstrate high scientific merit, methodological clarity, originality, and engaging delivery within each of the eight conference themes.

            </p>

          </article>



          {/* Award 2: Best Poster Presentation Award */}

          <article className="border border-light-border rounded-xl bg-white p-8 hover:shadow-md transition-shadow">

            <div className="text-primary-emerald mb-6">

              <Layers size={40} />

            </div>

            <h3 className="font-display text-2xl text-dark-text mb-3">

              Best Poster Presentation Award

            </h3>

            <p className="text-xs font-semibold text-primary-emerald uppercase tracking-wider mb-3">

              For Each Theme

            </p>

            <p className="text-sm leading-6 text-secondary-text">

              Awarded to exceptional poster presentations exemplifying superior visual communication, rigorous research methodology, and active discussion with attendees across each of the eight conference themes.

            </p>

          </article>

        </div>



        <div className="mt-10 rounded-lg bg-warm-cream p-6 md:p-8 border border-light-border/60">

          <p className="text-sm leading-6 text-secondary-text">

            <strong className="text-dark-text">Evaluation Criteria:</strong> Awards will be evaluated by an expert judging panel during the conference based on originality, relevance, technical rigor, presentation quality, and answers during the interactive Q&amp;A sessions.

          </p>

        </div>

      </SectionWrapper>
    </div>
  );
}