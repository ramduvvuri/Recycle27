import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { SponsorsSection } from "@/components/sections/SponsorsSection";

export default function SponsorsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Sponsors" }]} />
      <SponsorsSection />
    </>
  );
}
