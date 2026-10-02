import { FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";

const benefits = ["Brand Visibility", "Engagement", "Social Impact", "Long-term Partnerships"];

export function SponsorsSection() {
  return (
    <>
      <SectionWrapper theme="white" spacing="compact">
        <EyebrowLabel label="Partner with us" />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] items-center">
          <div>
            <h2 className="font-display text-5xl md:text-6xl leading-tight">
              Why Partner with RECYCLE27
            </h2>
            <p className="mt-6 text-base leading-8 text-secondary-text max-w-2xl">
              RECYCLE27 brings together a global community of researchers, industry leaders,
              policymakers and students working towards a sustainable future.
            </p>
          </div>
          <div className="flex gap-4">
            <Button href="/contact" icon={<FileText size={18} />}>
              Sponsorship Brochure
            </Button>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((label) => (
            <div key={label} className="bg-soft-bg p-8 border border-light-border">
              <Users size={32} className="text-primary-emerald" />
              <h3 className="mt-8 font-display text-2xl">{label}</h3>
              <p className="mt-3 text-sm leading-6 text-secondary-text">
                Collaborate for a cleaner future.
              </p>
            </div>
          ))}
        </div>

        {/* Coming soon state */}
        <div className="mt-16 sm:mt-24 rounded-2xl border border-light-border bg-soft-bg p-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-dark-text mb-4">
            Sponsors Coming Soon
          </h2>
          <p className="text-secondary-text max-w-lg mx-auto">
            Our sponsorship partners will be announced shortly. If you are interested in partnering with RECYCLE27, please download our sponsorship brochure or contact our team.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="primary">
              Contact Organizing Team
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
