import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { AbstractsSection } from "@/components/sections/AbstractsSection";
import { FinalCTA } from "@/components/shared/FinalCTA";

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="SHARE IDEAS · SPARK SOLUTIONS · SHAPE A CLEANER TOMORROW"
        title="Call for Abstracts"
        description="We invite researchers, practitioners, industry experts and students to submit abstracts on innovative solutions for sustainable waste management and circular economy."
        pageKey="abstracts"
        sideText={["PEOPLE", "IDEAS", "SOLUTIONS", "A CLEANER", "TOMORROW"]}
      />
      <Breadcrumb items={[{ label: "Call for Abstracts" }]} />
      <AbstractsSection />
      <FinalCTA />
    </>
  );
}
