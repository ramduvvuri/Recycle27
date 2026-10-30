import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { themes } from "@/data/themes";

export default function ThemesPage() {
  return (
    <>
      <PageHero
        eyebrow="CONFERENCE THEMES"
        title="Conference Themes"
        description="Eight interconnected areas of focus for a more sustainable and resource-efficient future."
        pageKey="themes"
        sideText={["PEOPLE", "IDEAS", "SOLUTIONS", "A CLEANER", "TOMORROW"]}
      />

      <Breadcrumb items={[{ label: "Themes" }]} />

      {/* Eight Conference Themes */}
      <SectionWrapper theme="dark" spacing="generous">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {themes.map((theme) => {
            const Icon = theme.icon;
            return (
              <article
                key={theme.id}
                className="group flex flex-col border border-dark-border bg-secondary-dark p-7 rounded-xl hover:border-muted-green/40 transition-colors"
              >
                <span className="text-sm font-medium text-muted-green mb-4">
                  {theme.number}
                </span>
                <div className="mb-5">
                  <Icon className="text-muted-green" size={36} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-base leading-snug text-light-text mb-3 flex-1 font-medium">
                  {theme.title}
                </h3>
                <p className="text-xs leading-5 text-light-text/70">
                  {theme.description}
                </p>
              </article>
            );
          })}
        </div>
      </SectionWrapper>
    </>
  );
}
