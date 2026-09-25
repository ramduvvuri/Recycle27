import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";
import { SectionWrapper } from "@/components/sections/SectionWrapper";

const photo = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

const filters = [
  "All",
  "Inauguration",
  "Technical Sessions",
  "Workshops",
  "Cultural Events",
  "Campus",
  "People",
  "Previous Editions",
];

const items = [
  { title: "Inaugural Session", category: "RECYCLE26", id: "photo-1540575467063-178a50c2df87", span: "md:col-span-2", aspect: "aspect-[16/10]" },
  { title: "Keynote Talk", category: "RECYCLE26", id: "photo-1503428593586-e225b39bddfe", span: "md:col-span-1", aspect: "aspect-[4/5]" },
  { title: "IIT Guwahati Campus", category: "A Sustainable Tomorrow", id: "photo-1562774053-701939374585", span: "md:col-span-1", aspect: "aspect-[4/5]" },
  { title: "Poster Presentation", category: "RECYCLE26", id: "photo-1551836022-d5d88e9218df", span: "md:col-span-1", aspect: "aspect-[4/3]" },
  { title: "Engaged Audience", category: "RECYCLE25", id: "photo-1524178232363-1fb2b075b655", span: "md:col-span-2", aspect: "aspect-[16/10]" },
  { title: "Panel Discussion", category: "RECYCLE26", id: "photo-1544531585-9847b68c8c86", span: "md:col-span-1", aspect: "aspect-[4/3]" },
  { title: "Cultural Evening", category: "RECYCLE26", id: "photo-1524666041070-9d87656c25b3", span: "md:col-span-1", aspect: "aspect-[4/5]" },
  { title: "Serene Evenings", category: "IIT Guwahati", id: "photo-1441974231531-c6227db76b6e", span: "md:col-span-1", aspect: "aspect-[4/5]" },
  { title: "Conference Merchandise", category: "RECYCLE26", id: "photo-1540575467063-178a50c2df87", span: "md:col-span-1", aspect: "aspect-[4/5]" },
  { title: "Campus Moments", category: "RECYCLE26", id: "photo-1503428593586-e225b39bddfe", span: "md:col-span-1", aspect: "aspect-[4/5]" },
];

export function GallerySection() {
  return (
    <SectionWrapper theme="white" spacing="compact">
      {/* Filter bar */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-6">
        <div className="flex flex-wrap gap-3">
          {filters.map((label, i) => (
            <button
              key={label}
              className={`border px-5 py-2.5 text-sm transition-colors rounded-sm ${
                i === 0
                  ? "border-primary-dark bg-primary-dark text-light-text"
                  : "border-light-border bg-white text-secondary-text hover:border-primary-emerald/50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-2 border border-light-border bg-white px-5 py-2.5 text-sm text-dark-text hover:bg-soft-bg rounded-sm transition-colors whitespace-nowrap">
          <ImageIcon size={16} className="text-secondary-text" />
          View as Slideshow &rarr;
        </button>
      </div>

      {/* Masonry-style grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <article
            key={i}
            className={`relative overflow-hidden rounded-xl ${item.span} ${item.aspect} group cursor-pointer`}
          >
            <Image
              src={photo(item.id)}
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              alt={item.title}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-light-text flex justify-between items-end">
              <div>
                <strong className="block text-lg font-medium tracking-wide">{item.title}</strong>
                <span className="text-sm text-light-text/70 mt-1 block">{item.category}</span>
              </div>
              <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                <ImageIcon size={18} className="text-white" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
