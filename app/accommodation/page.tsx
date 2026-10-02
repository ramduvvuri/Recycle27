import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { AccommodationSection } from "@/components/sections/AccommodationSection";
import { FinalCTA } from "@/components/shared/FinalCTA";

export default function AccommodationPage() {
  return (
    <>
      <PageHero
        eyebrow="ACCOMMODATION"
        title="Stay with Comfort"
        description="Accommodation options and booking guidance will be shared here by the organizing committee."
        pageKey="accommodation"
        sideText={["PEOPLE", "IDEAS", "SOLUTIONS", "A CLEANER", "TOMORROW"]}
      />
      <Breadcrumb items={[{ label: "Accommodation" }]} />
      <AccommodationSection />
      <FinalCTA />
    </>
  );
}
