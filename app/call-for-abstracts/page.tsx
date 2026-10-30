import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { AbstractsSection } from "@/components/sections/AbstractsSection";
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="SHARE IDEAS · SPARK SOLUTIONS · SHAPE A CLEANER TOMORROW"
        title="Call for Abstracts"
        description="We invite researchers, postdoctoral scholars, industry professionals, and students to submit abstracts for original research, case studies, and technological advancements."
        pageKey="abstracts"
        sideText={["PEOPLE", "IDEAS", "SOLUTIONS", "A CLEANER", "TOMORROW"]}
      >
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3 w-full sm:w-auto">
          <Button
            href="https://forms.gle/4eU138P4ADZpaCva7"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            showArrow
            className="w-full sm:w-auto px-6 py-3"
          >
            Submit Abstract
          </Button>
          <Button
            href="/downloads/abstract-format.docx"
            download="abstract-format.docx"
            variant="secondary-light"
            icon={<Download size={16} />}
            className="w-full sm:w-auto px-6 py-3"
          >
            Download Abstract Format
          </Button>
        </div>
      </PageHero>
      <Breadcrumb items={[{ label: "Call for Abstracts" }]} />
      <AbstractsSection />
    </>
  );
}
