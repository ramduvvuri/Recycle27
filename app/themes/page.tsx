import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { themes } from "@/data/themes";

export default function ThemesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Themes" }]} />

      {/* Eight Conference Themes */}
      <SectionWrapper theme="dark" spacing="generous">
        <div className="mb-10">
          <EyebrowLabel theme="dark" label="CONFERENCE THEMES" />
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-light-text leading-tight mt-3 font-medium">
            Conference Themes
          </h1>
          <p className="mt-3 text-sm sm:text-base text-light-text/70 max-w-xl">
            Eight interconnected areas of focus for a more sustainable and resource-efficient future.
          </p>
        </div>

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
