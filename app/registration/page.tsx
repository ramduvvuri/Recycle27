"use client";

import { Check, Info, Download, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { indianFees, foreignFees, registrationIncludes } from "@/data/registration";

export default function RegistrationPage() {
  return (
    <>
      <PageHero
        eyebrow="JOIN THE CONFERENCE"
        title="Registration"
        description={
          <>
            Secure your place at ReCYCLE 2027 and become part of a global
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
              Register for ReCYCLE 2027
            </h2>
            <p className="mt-6 text-sm leading-7 text-secondary-text max-w-2xl mx-auto">
              Participants from academia, industry, government and civil society are
              invited to register for ReCYCLE 2027. Join us to exchange ideas, build
              collaborations and contribute to a more sustainable and circular future.
            </p>
          </div>

          {/* Registration Fees — Indian Nationals */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-5">
              <Users size={20} className="text-primary-emerald" />
              <h3 className="font-display text-2xl text-dark-text">Indian Nationals</h3>
            </div>
            <div className="overflow-x-auto rounded-xl border border-light-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-emerald text-light-text">
                    <th className="px-5 py-4 text-left font-medium">Category</th>
                    <th className="px-5 py-4 text-right font-medium">Registration Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-light-border">
                  {indianFees.map((fee) => (
                    <tr key={fee.id} className="bg-white hover:bg-soft-bg transition-colors">
                      <td className="px-5 py-4 font-medium text-dark-text">{fee.category}</td>
                      <td className="px-5 py-4 text-right font-semibold text-primary-emerald">{fee.display}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Registration Fees — Foreign Nationals */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-5">
              <Globe size={20} className="text-primary-emerald" />
              <h3 className="font-display text-2xl text-dark-text">Foreign Nationals</h3>
            </div>
            <div className="overflow-x-auto rounded-xl border border-light-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-emerald text-light-text">
                    <th className="px-5 py-4 text-left font-medium">Category</th>
                    <th className="px-5 py-4 text-right font-medium">Registration Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-light-border">
                  {foreignFees.map((fee) => (
                    <tr key={fee.id} className="bg-white hover:bg-soft-bg transition-colors">
                      <td className="px-5 py-4 font-medium text-dark-text">{fee.category}</td>
                      <td className="px-5 py-4 text-right font-semibold text-primary-emerald">{fee.display}</td>
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
            <h3 className="font-display text-2xl text-dark-text mb-6">What&apos;s Included</h3>
            <div className="grid grid-cols-2 gap-4">
              {registrationIncludes.map((item, index) => (
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

      <FinalCTA />
    </>
  );
}