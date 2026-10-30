import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { AccommodationSection } from "@/components/sections/AccommodationSection";

export default function AccommodationPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Accommodation" }]} />
      <AccommodationSection />
    </>
  );
}
