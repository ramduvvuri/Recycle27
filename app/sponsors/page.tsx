import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { SponsorsSection } from "@/components/sections/SponsorsSection";
import { FinalCTA } from "@/components/shared/FinalCTA";

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships for a sustainable tomorrow"
        title="Our Sponsors"
        description="Collaborating for impact. Together for a cleaner future."
        pageKey="sponsors"
        sideText={["PARTNERS", "IMPACT", "SUSTAINABLE", "FUTURE"]}
      />
      <Breadcrumb items={[{ label: "Sponsors" }]} />
      <SponsorsSection />
      <FinalCTA />
    </>
  );
}
