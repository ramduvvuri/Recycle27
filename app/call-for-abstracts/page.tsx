import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { AbstractsSection } from "@/components/sections/AbstractsSection";

export default function CallForAbstractsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Call for Abstracts" }]} />
      <AbstractsSection />
    </>
  );
}
