import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { GallerySection } from "@/components/sections/GallerySection";

export default function GalleryPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Gallery" }]} />
      <GallerySection />
    </>
  );
}
