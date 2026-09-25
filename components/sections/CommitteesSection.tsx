import { Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";

const committees = [
  {
    title: "Organizing Committee",
    description:
      "The committee details will be announced by the conference organizers.",
    href: "/committees",
  },
  {
    title: "Scientific / Advisory Committee",
    description:
      "The committee details will be announced by the conference organizers.",
    href: "/committees",
  },
];

export function CommitteesSection() {
  return (
    <SectionWrapper theme="white" spacing="compact">
      <EyebrowLabel label="Committees" />
      <h2 className="font-display text-4xl">People Behind Recycle27</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {committees.map(({ title, description, href }) => (
          <article key={title} className="border border-light-border bg-white p-7">
            <Users />
            <h3 className="mt-6 font-display text-2xl">{title}</h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-secondary-text">{description}</p>
            <Button href={href} variant="secondary" className="mt-6">
              View Committee
            </Button>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
