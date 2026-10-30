import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FAQsSection } from "@/components/sections/FAQsSection";

export default function FAQsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "FAQs" }]} />
      <FAQsSection />
    </>
  );
}
