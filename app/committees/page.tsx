import { Users, GraduationCap, MapPin } from "lucide-react";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { advisoryCommittee } from "@/data/committees";

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

      <SectionWrapper theme="white" spacing="compact">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="flex-1">
            <EyebrowLabel label="ADVISORY COMMITTEE" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-dark-text leading-tight mt-4">
              Our Advisory Committee
            </h2>
          </div>
        </div>

        <div className="space-y-16">
          
          {/* Core Roles: Patron, Chairman, Convenor */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Patron */}
            <div>
              <h3 className="font-display text-xl text-primary-emerald mb-6 pb-2 border-b border-primary-emerald/20">Patron</h3>
              <div className="space-y-6">
                {advisoryCommittee.patrons.map((member) => (
                  <div key={member.id} className="bg-soft-bg rounded-lg p-5 border border-light-border">
                    <h4 className="font-display text-lg text-dark-text mb-1">{member.name}</h4>
                    <p className="text-sm font-medium text-primary-emerald mb-2">{member.role}</p>
                    <p className="text-xs text-secondary-text flex items-center gap-1.5">
                      <MapPin size={12} className="shrink-0" /> {member.affiliation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Chairman */}
            <div>
              <h3 className="font-display text-xl text-primary-emerald mb-6 pb-2 border-b border-primary-emerald/20">Chairman</h3>
              <div className="space-y-6">
                {advisoryCommittee.chairmen.map((member) => (
                  <div key={member.id} className="bg-soft-bg rounded-lg p-5 border border-light-border">
                    <h4 className="font-display text-lg text-dark-text mb-1">{member.name}</h4>
                    <p className="text-sm font-medium text-primary-emerald mb-2">{member.role}</p>
                    <p className="text-xs text-secondary-text flex items-center gap-1.5">
                      <MapPin size={12} className="shrink-0" /> {member.affiliation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Convenor */}
            <div>
              <h3 className="font-display text-xl text-primary-emerald mb-6 pb-2 border-b border-primary-emerald/20">Convenor</h3>
              <div className="space-y-6">
                {advisoryCommittee.convenors.map((member) => (
                  <div key={member.id} className="bg-soft-bg rounded-lg p-5 border border-light-border">
                    <h4 className="font-display text-lg text-dark-text mb-1">{member.name}</h4>
                    <p className="text-sm font-medium text-primary-emerald mb-2">{member.role}</p>
                    <p className="text-xs text-secondary-text flex items-center gap-1.5">
                      <MapPin size={12} className="shrink-0" /> {member.affiliation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="h-px bg-light-border w-full" />

          {/* International Members */}
          <div>
            <h3 className="font-display text-2xl text-dark-text mb-8">International Members</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {advisoryCommittee.internationalMembers.map((member) => (
                <div key={member.id} className="flex items-start gap-3 p-4 rounded-lg hover:bg-soft-bg transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary-emerald/10 flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap size={16} className="text-primary-emerald" />
                  </div>
                  <div>
                    <h4 className="font-medium text-dark-text text-[15px]">{member.name}</h4>
                    <p className="text-[13px] text-secondary-text mt-1 leading-snug">{member.affiliation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-light-border w-full" />

          {/* National Members */}
          <div>
            <h3 className="font-display text-2xl text-dark-text mb-8">National Members</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {advisoryCommittee.nationalMembers.map((member) => (
                <div key={member.id} className="flex items-start gap-3 p-4 rounded-lg hover:bg-soft-bg transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary-emerald/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Users size={16} className="text-primary-emerald" />
                  </div>
                  <div>
                    <h4 className="font-medium text-dark-text text-[15px]">{member.name}</h4>
                    <p className="text-[13px] text-secondary-text mt-1 leading-snug">{member.affiliation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </SectionWrapper>

      <FinalCTA />
    </>
  );
}