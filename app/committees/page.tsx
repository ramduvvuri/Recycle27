import Image from "next/image";
import Link from "next/link";
import { Users, FileText, Award, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FinalCTA } from "@/components/shared/FinalCTA";

const heroImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=85";

const organizingCommittee = [
  { name: "Prof. A. Sharma", role: "Chair", institution: "IIT Guwahati" },
  { name: "Dr. B. Das", role: "Co-Chair", institution: "IIT Guwahati" },
  { name: "Prof. C. Patel", role: "Member", institution: "IIT Delhi" },
  { name: "Dr. D. Kumar", role: "Member", institution: "IIT Bombay" }
];

const scientificCommittee = [
  { name: "Prof. E. Williams", role: "Chair", institution: "MIT, USA" },
  { name: "Dr. F. Tanaka", role: "Member", institution: "University of Tokyo" },
  { name: "Prof. G. Mueller", role: "Member", institution: "TU Munich" },
  { name: "Dr. H. Chen", role: "Member", institution: "Stanford University" }
];

export default function CommitteesPage() {
  return (
    <>
      <PageHero
        eyebrow="PEOPLE · IDEAS · COLLABORATION"
        title="Committees"
        description={
          <>
            Meet the researchers, faculty members and professionals working
            <br />behind RECYCLE27 to shape a meaningful and impactful conference.
          </>
        }
        pageKey="committees"
        sideText={["A", "CLEANER", "TOMORROW", "TOGETHER"]}
      />

      <Breadcrumb items={[{ label: "Committees" }]} />

      {/* Committee Overview Section */}
      <SectionWrapper theme="white" spacing="compact">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-6">
          <div className="flex-1">
            <EyebrowLabel label="COMMITTEES" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-dark-text leading-tight mt-4">
              People Behind RECYCLE27
            </h2>
          </div>
          <div className="lg:max-w-md lg:text-right">
            <p className="text-sm leading-7 text-secondary-text">
              Distinguished teams of experts from academia, industry and policy working together to shape a meaningful and impactful conference experience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Organizing Committee",
              description: "The core team responsible for conference planning, logistics, speaker coordination and overall execution of RECYCLE27. Committed to delivering a seamless and enriching experience for all participants.",
              icon: <Users size={48} />
            },
            {
              title: "Scientific / Advisory Committee",
              description: "Expert panel providing guidance on conference themes, abstract selection, programme development and ensuring high academic standards. Bringing together leading minds in sustainable waste management research.",
              icon: <FileText size={48} />
            }
          ].map((committee) => (
            <article 
              key={committee.title}
              className="border border-light-border rounded-xl bg-soft-bg p-8 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="text-primary-emerald mb-6">
                  {committee.icon}
                </div>
                <h3 className="font-display text-2xl text-dark-text mb-4">{committee.title}</h3>
                <p className="text-sm leading-7 text-secondary-text mb-6">
                  {committee.description}
                </p>
                <Button href={committee.title === "Organizing Committee" ? "#organizing-committee" : "#scientific-committee"} variant="secondary" showArrow>
                  View {committee.title} →
                </Button>
              </div>
              {/* Subtle decorative element */}
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
                <div className="w-full h-full bg-primary-emerald rounded-full blur-3xl" />
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>

      {/* Organizing Committee Section */}
      <SectionWrapper theme="light" spacing="compact">
        <div id="organizing-committee" />
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-6">
          <div className="flex-1">
            <EyebrowLabel label="ORGANIZING COMMITTEE" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-dark-text leading-tight mt-4">
              Conference Leadership
            </h2>
          </div>
          <div className="lg:max-w-md lg:text-right">
            <p className="text-sm leading-7 text-secondary-text">
              The core team responsible for strategic planning, overall coordination and ensuring the successful execution of RECYCLE27.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {organizingCommittee.map((member) => (
            <article 
              key={member.name}
              className="border border-light-border rounded-lg bg-soft-bg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-primary-emerald/10 flex items-center justify-center flex-shrink-0">
                  <Users className="text-primary-emerald" size={24} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg text-dark-text">{member.name}</h3>
                  <p className="text-xs text-primary-emerald font-medium">{member.role}</p>
                </div>
              </div>
              <p className="text-sm text-secondary-text">{member.institution}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      {/* Scientific/Advisory Committee Section */}
      <SectionWrapper theme="white" spacing="compact">
        <div id="scientific-committee" />
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-6">
          <div className="flex-1">
            <EyebrowLabel label="SCIENTIFIC / ADVISORY COMMITTEE" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-dark-text leading-tight mt-4">
              Expert Guidance
            </h2>
          </div>
          <div className="lg:max-w-md lg:text-right">
            <p className="text-sm leading-7 text-secondary-text">
              Distinguished academics and researchers providing strategic direction on conference themes, content quality and academic standards.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scientificCommittee.map((member) => (
            <article 
              key={member.name}
              className="border border-light-border rounded-lg bg-white p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-primary-emerald/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-primary-emerald" size={24} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg text-dark-text">{member.name}</h3>
                  <p className="text-xs text-primary-emerald font-medium">{member.role}</p>
                </div>
              </div>
              <p className="text-sm text-secondary-text">{member.institution}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      {/* Committee Roles Section */}
      <SectionWrapper theme="white" spacing="compact">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-6">
          <div className="flex-1">
            <EyebrowLabel label="COMMITTEE ROLES" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-dark-text leading-tight mt-4">
              Key Responsibilities
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Programme Development",
              description: "Curating sessions, selecting speakers, and ensuring a balanced and impactful conference programme.",
              icon: <FileText size={40} />
            },
            {
              title: "Abstract Review",
              description: "Evaluating submissions, maintaining academic standards, and selecting high-quality research presentations.",
              icon: <Award size={40} />
            },
            {
              title: "Strategic Guidance",
              description: "Providing direction on conference themes, industry partnerships, and long-term vision for RECYCLE27.",
              icon: <Users size={40} />
            }
          ].map((role) => (
            <article 
              key={role.title}
              className="border border-light-border rounded-xl bg-soft-bg p-6 hover:shadow-md transition-shadow"
            >
              <div className="text-primary-emerald mb-4">
                {role.icon}
              </div>
              <h3 className="font-display text-xl text-dark-text mb-3">{role.title}</h3>
              <p className="text-sm leading-6 text-secondary-text">
                {role.description}
              </p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      {/* Unified Final CTA */}
      <FinalCTA />
    </>
  );
}