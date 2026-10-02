import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { GallerySection } from "@/components/sections/GallerySection";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { conference } from "@/data/conference";

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Moments · people · ideas · impact"
        title="Gallery"
        description={`A glimpse into the people, discussions and experiences that make ${conference.shortName} a vibrant platform for collaboration and change.`}
        pageKey="gallery"
        sideText={["PEOPLE", "IDEAS", "SOLUTIONS", "A CLEANER", "TOMORROW"]}
      />
      <Breadcrumb items={[{ label: "Gallery" }]} />
      <GallerySection />
      <FinalCTA />
    </>
  );
}
