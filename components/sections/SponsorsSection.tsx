import Image from "next/image";
import { FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { sponsorTiers } from "@/lib/content/sponsors";

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

        {/* Sponsor tiers */}
        <h2 className="mt-12 font-display text-5xl md:text-6xl">Our Valued Partners</h2>
        {sponsorTiers.map(({ title, sponsors, cols }) => (
          <div key={title}>
            <h3 className="mt-8 text-lg font-medium text-secondary-text">{title}</h3>
            <div className={`mt-6 grid gap-4 ${cols}`}>
              {sponsors.map(({ name, logo }) => (
                <div
                  key={name}
                  className="flex h-32 items-center justify-center border border-light-border bg-white p-6"
                >
                  <Image
                    src={logo}
                    alt={name}
                    width={200}
                    height={80}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </SectionWrapper>
    </>
  );
}
