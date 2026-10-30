import Image from "next/image";
import { Users, MapPin, GraduationCap } from "lucide-react";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { advisoryCommittee, studentCommittee } from "@/data/committees";

export default function CommitteesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Committees" }]} />

      <SectionWrapper theme="white" spacing="compact">
        {/* Conference Leadership */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="flex-1">
            <EyebrowLabel label="ORGANIZING COMMITTEE" />
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-dark-text leading-tight mt-3 font-medium">
              Conference Leadership
            </h1>
            <p className="mt-3 text-sm sm:text-base text-secondary-text max-w-xl">
              Meet the faculty members, researchers and student organizers working behind RECYCLE 2027.
            </p>
          </div>
        </div>

        <div className="space-y-14">
          {/* Core Roles: Patron, Chairman, Convenor */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Patron */}
            <div>
              <h3 className="font-display text-xl text-primary-emerald mb-6 pb-2 border-b border-primary-emerald/20">Patron</h3>
              <div className="space-y-6">
                {advisoryCommittee.patrons.map((member) => (
                  <div key={member.id} className="bg-soft-bg rounded-xl p-5 border border-light-border flex items-start gap-4 hover:shadow-md transition-shadow">
                    <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-lg overflow-hidden shrink-0 bg-white border border-light-border/60 shadow-sm">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover object-top"
                          sizes="96px"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-recycle-sage text-recycle-green/40">
                          <Users size={28} />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-lg text-dark-text mb-1 leading-snug">{member.name}</h4>
                      <p className="text-xs font-semibold text-primary-emerald mb-2 leading-tight">{member.role}</p>
                      <p className="text-xs text-secondary-text flex items-center gap-1.5">
                        <MapPin size={12} className="shrink-0 text-primary-emerald/70" /> {member.affiliation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chairman */}
            <div>
              <h3 className="font-display text-xl text-primary-emerald mb-6 pb-2 border-b border-primary-emerald/20">Chairman</h3>
              <div className="space-y-6">
                {advisoryCommittee.chairmen.map((member) => (
                  <div key={member.id} className="bg-soft-bg rounded-xl p-5 border border-light-border flex items-start gap-4 hover:shadow-md transition-shadow">
                    <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-lg overflow-hidden shrink-0 bg-white border border-light-border/60 shadow-sm">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover object-top"
                          sizes="96px"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-recycle-sage text-recycle-green/40">
                          <Users size={28} />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-lg text-dark-text mb-1 leading-snug">{member.name}</h4>
                      <p className="text-xs font-semibold text-primary-emerald mb-2 leading-tight">{member.role}</p>
                      <p className="text-xs text-secondary-text flex items-center gap-1.5">
                        <MapPin size={12} className="shrink-0 text-primary-emerald/70" /> {member.affiliation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Convenor */}
            <div>
              <h3 className="font-display text-xl text-primary-emerald mb-6 pb-2 border-b border-primary-emerald/20">Convenor</h3>
              <div className="space-y-6">
                {advisoryCommittee.convenors.map((member) => (
                  <div key={member.id} className="bg-soft-bg rounded-xl p-5 border border-light-border flex items-start gap-4 hover:shadow-md transition-shadow">
                    <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-lg overflow-hidden shrink-0 bg-white border border-light-border/60 shadow-sm">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover object-top"
                          sizes="96px"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-recycle-sage text-recycle-green/40">
                          <Users size={28} />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-lg text-dark-text mb-1 leading-snug">{member.name}</h4>
                      <p className="text-xs font-semibold text-primary-emerald mb-2 leading-tight">{member.role}</p>
                      <p className="text-xs text-secondary-text flex items-center gap-1.5">
                        <MapPin size={12} className="shrink-0 text-primary-emerald/70" /> {member.affiliation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="h-px bg-light-border w-full" />

          {/* Student Organizing Team */}
          <div>
            <div className="mb-8">
              <EyebrowLabel label="STUDENT ORGANIZING TEAM" />
              <h3 className="font-display text-3xl md:text-4xl text-dark-text leading-tight mt-3">
                Student Organizing Committee
              </h3>
            </div>

            {/* Core Organizing Members */}
            <div className="mb-10">
              <h4 className="font-display text-xl text-primary-emerald mb-5 pb-2 border-b border-primary-emerald/20">
                Core Organizing Members
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {studentCommittee.coreMembers.map((student) => (
                  <div
                    key={student.id}
                    className="bg-soft-bg rounded-xl p-5 border border-light-border flex items-start gap-4 hover:shadow-md hover:border-primary-emerald/30 transition-all"
                  >
                    <div className="relative w-20 h-24 sm:w-22 sm:h-26 rounded-lg overflow-hidden shrink-0 bg-white border border-light-border/60 shadow-sm">
                      {student.image ? (
                        <Image
                          src={student.image}
                          alt={student.name}
                          fill
                          className="object-cover object-top"
                          sizes="88px"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-recycle-sage text-recycle-green/40">
                          <GraduationCap size={28} />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-display text-base text-dark-text mb-1 leading-snug font-medium">
                        {student.name}
                      </h5>
                      <p className="text-[11.5px] font-semibold text-primary-emerald mb-1 leading-tight">
                        {student.role}
                      </p>
                      <p className="text-[11.5px] text-secondary-text flex items-center gap-1">
                        <MapPin size={11} className="shrink-0 text-primary-emerald/70" />
                        <span className="truncate">{student.affiliation}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Organizing Members */}
            <div>
              <h4 className="font-display text-xl text-primary-emerald mb-5 pb-2 border-b border-primary-emerald/20">
                Other Organizing Members
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {studentCommittee.otherMembers.map((student) => (
                  <div
                    key={student.id}
                    className="bg-soft-bg rounded-lg p-3.5 border border-light-border flex items-start gap-3 hover:shadow-sm hover:border-primary-emerald/30 transition-all"
                  >
                    <div className="relative w-14 h-16 rounded-md overflow-hidden shrink-0 bg-white border border-light-border/50 shadow-sm">
                      {student.image ? (
                        <Image
                          src={student.image}
                          alt={student.name}
                          fill
                          className="object-cover object-top"
                          sizes="64px"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-recycle-sage text-recycle-green/40">
                          <GraduationCap size={20} />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-display text-[13.5px] text-dark-text mb-0.5 leading-snug font-medium truncate">
                        {student.name}
                      </h5>
                      <p className="text-[10px] font-semibold text-primary-emerald mb-0.5 leading-tight">
                        {student.role}
                      </p>
                      <p className="text-[10px] text-secondary-text truncate leading-tight">
                        {student.affiliation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </SectionWrapper>
    </>
  );
}
