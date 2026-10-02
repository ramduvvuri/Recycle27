import Image from "next/image";
import { Bell, MapPin, Wifi, Utensils, Bus, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";

const photo = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

const introItems = [
  "Research-led exchange",
  "Practical perspectives",
  "Meaningful connections",
];

const stayOptions = [
  {
    title: "On-Campus Hostels",
    description: "Affordable and convenient accommodation within the IIT Guwahati campus.",
    image: "photo-1555854877-bab0e564b8d5",
  },
  {
    title: "Guest Houses",
    description: "Comfortable guest house facilities for guests and attendees.",
    image: "photo-1522771739844-6a9f6d5f14af",
  },
  {
    title: "Nearby Hotels",
    description: "Selected hotels in Guwahati offering special conference rates.",
    image: "photo-1566073771259-6a8506099945",
  },
];

const amenities = [
  { Icon: Wifi, title: "Wi-Fi Connectivity" },
  { Icon: Utensils, title: "Dining Facilities" },
  { Icon: Bus, title: "Campus Transport" },
  { Icon: Shield, title: "Safety & Security" },
  { Icon: MapPin, title: "Close to Conference Venue" },
];

export function AccommodationSection() {
  return (
    <>
      {/* Intro */}
      <SectionWrapper theme="white" spacing="compact">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-light-border -translate-x-1/2" />
          <div>
            <EyebrowLabel label="AT IIT GUWAHATI" />
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Accommodation Options
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-secondary-text">
              RECYCLE27 attendees will have access to various accommodation options ranging from
              on-campus hostels to nearby hotels. The organizing committee will provide detailed
              booking guidance and recommendations.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {introItems.map((item, i) => (
              <article
                key={item}
                className="flex min-h-52 flex-col justify-between border border-light-border bg-soft-bg p-6"
              >
                <span className="text-sm text-primary-emerald font-medium">0{i + 1}</span>
                <h3 className="text-lg font-display text-dark-text leading-tight">{item}</h3>
                <p className="text-sm leading-6 text-secondary-text">
                  Details will be announced by the conference team.
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Stay options */}
      <SectionWrapper theme="white" spacing="compact">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <EyebrowLabel label="ACCOMMODATION TYPES" />
            <h2 className="font-display text-4xl md:text-5xl leading-tight">Stay Options</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-secondary-text text-right">
            Choose from various accommodation options tailored to your preferences and budget.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {stayOptions.map(({ title, description, image }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-xl border border-light-border bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={photo(image)}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  alt={title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-dark-text leading-tight">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-secondary-text">{description}</p>
                <Button href="#" variant="secondary" showArrow className="mt-6 text-sm">
                  Details Coming Soon
                </Button>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>

      {/* Amenities */}
      <SectionWrapper theme="light" spacing="compact">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <EyebrowLabel label="AMENITIES" />
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Facilities &amp; Amenities
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-secondary-text text-right">
            All accommodation options are equipped with essential facilities to ensure a comfortable
            stay.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {amenities.map(({ Icon, title }) => (
            <div key={title} className="border border-light-border bg-white p-6 rounded-lg">
              <Icon className="text-primary-emerald" size={24} />
              <h3 className="mt-6 font-display text-lg text-dark-text leading-tight">{title}</h3>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Information panel */}
      <SectionWrapper theme="white" spacing="compact">
        <div className="relative overflow-hidden rounded-2xl bg-warm-cream p-8 md:p-12 lg:p-16">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-80 h-80">
            <Image
              src="/images/leaf.png"
              alt="Leaf decoration"
              fill
              className="object-contain object-right-bottom"
            />
          </div>
          <div className="relative max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="text-primary-emerald" size={24} />
              <span className="text-sm font-medium uppercase tracking-[0.12em] text-primary-emerald">
                IMPORTANT
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-dark-text leading-tight mb-4">
              Information Coming Soon
            </h2>
            <p className="text-base leading-7 text-secondary-text mb-8">
              Detailed accommodation options, booking links, pricing and important guidelines will
              be updated here shortly. Please keep checking the page for the latest information.
            </p>
            <Button href="#" variant="icon" showArrow className="text-sm">
              Check for Updates
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
