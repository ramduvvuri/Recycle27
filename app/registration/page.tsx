"use client";

import { useState } from "react";
import { Check, Info, GraduationCap, Briefcase, Building2, Users, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { cn } from "@/lib/utils";

const heroImage = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80";

const registrationTypes = [
  { id: "student", name: "Student", subtitle: "UG / PG / PhD", icon: <GraduationCap size={32} /> },
  { id: "academic", name: "Academic", subtitle: "Faculty / Researcher", icon: <Briefcase size={32} /> },
  { id: "industry", name: "Industry", subtitle: "Professional", icon: <Building2 size={32} /> },
  { id: "others", name: "Others", subtitle: "Government / NGO", icon: <Users size={32} /> }
];

const feeData = [
  { category: "Student", earlyBird: "₹ 2,000", regular: "₹ 2,500", onsite: "₹ 3,000" },
  { category: "Academic", earlyBird: "₹ 4,000", regular: "₹ 5,000", onsite: "₹ 6,000" },
  { category: "Industry", earlyBird: "₹ 8,000", regular: "₹ 10,000", onsite: "₹ 12,000" },
  { category: "Others", earlyBird: "₹ 3,000", regular: "₹ 3,500", onsite: "₹ 4,000" }
];

const includedItems = [
  "Access to all technical sessions",
  "Conference kit and meals",
  "Networking opportunities",
  "Participation certificate"
];

export default function RegistrationPage() {
  const [selectedType, setSelectedType] = useState("student");

  return (
    <>
      <PageHero
        eyebrow="JOIN THE CONFERENCE"
        title="Registration"
        description={
          <>
            Secure your place at RECYCLE27 and become part of a global
            <br />community working towards a sustainable future.
          </>
        }
        pageKey="registration"
        sideText={["A", "CLEANER", "TOMORROW", "TOGETHER"]}
      />

      <Breadcrumb items={[{ label: "Registration" }]} />

      <SectionWrapper theme="white" spacing="compact">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <EyebrowLabel label="REGISTRATION" />
            <h2 className="font-display text-4xl md:text-5xl text-dark-text leading-tight mt-4">
              Register for RECYCLE27
            </h2>
            <p className="mt-6 text-sm leading-7 text-secondary-text max-w-2xl mx-auto">
              Participants from academia, industry, government and civil society are
              invited to register for RECYCLE27. Join us to exchange ideas, build
              collaborations and contribute to a more sustainable and circular future.
            </p>
          </div>

          {/* Registration Type Cards */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {registrationTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={cn(
                  "border rounded-xl p-6 text-left transition-all hover:shadow-md",
                  selectedType === type.id
                    ? "bg-primary-emerald border-primary-emerald text-light-text"
                    : "bg-soft-bg border-light-border text-dark-text hover:border-primary-emerald/50"
                )}
              >
                <div className={cn(
                  "mb-4",
                  selectedType === type.id ? "text-light-text" : "text-primary-emerald"
                )}>
                  {type.icon}
                </div>
                <h3 className="font-display text-lg font-semibold">{type.name}</h3>
                <p className={cn(
                  "text-sm mt-1",
                  selectedType === type.id ? "text-light-text/80" : "text-secondary-text"
                )}>
                  {type.subtitle}
                </p>
                {selectedType === type.id && (
                  <div className="w-8 h-px bg-light-text/40 mt-4" />
                )}
              </button>
            ))}
          </div>

          {/* Registration Fees Table */}
          <div className="mb-8">
            <h3 className="font-display text-2xl text-dark-text mb-6">Registration Fees</h3>
            <div className="overflow-x-auto rounded-xl border border-light-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-emerald text-light-text">
                    <th className="px-4 py-4 text-left font-medium">Category</th>
                    <th className="px-4 py-4 text-right font-medium">
                      Early Bird
                      <div className="text-xs font-normal opacity-80">Until 15 Feb 2027</div>
                    </th>
                    <th className="px-4 py-4 text-right font-medium">
                      Regular
                      <div className="text-xs font-normal opacity-80">Until 31 Mar 2027</div>
                    </th>
                    <th className="px-4 py-4 text-right font-medium">On-site</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-light-border">
                  {feeData.map((row, index) => (
                    <tr key={index} className="bg-white">
                      <td className="px-4 py-4 font-medium text-dark-text">{row.category}</td>
                      <td className="px-4 py-4 text-right text-secondary-text">{row.earlyBird}</td>
                      <td className="px-4 py-4 text-right text-secondary-text">{row.regular}</td>
                      <td className="px-4 py-4 text-right text-secondary-text">{row.onsite}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Registration CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button href="#" showArrow className="flex-1">
              Register Now
            </Button>
            <Button href="#" variant="secondary" icon={<Download size={16} />} className="flex-1">
              Download Registration Brochure
            </Button>
          </div>

          {/* What's Included */}
          <div className="mb-8">
            <h3 className="font-display text-2xl text-dark-text mb-6">What's Included</h3>
            <div className="grid grid-cols-2 gap-4">
              {includedItems.map((item, index) => (
                <div key={index} className="border border-light-border rounded-lg bg-soft-bg p-5">
                  <Check className="text-primary-emerald" size={20} />
                  <p className="mt-4 text-sm text-dark-text leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-warm-cream border border-light-border rounded-xl p-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary-emerald/10 flex items-center justify-center">
                  <Info className="text-primary-emerald" size={20} />
                </div>
              </div>
              <div>
                <h4 className="font-display text-lg text-dark-text mb-2">Important Note</h4>
                <p className="text-sm leading-6 text-secondary-text">
                  Registration is mandatory for all participants, including presenters and
                  co-authors. Presenters must ensure at least one author is registered.
                </p>
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