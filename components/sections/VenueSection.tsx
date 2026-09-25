import Image from "next/image";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { QuoteBlock } from "@/components/ui/QuoteBlock";

const photo = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

const travelModes = [
  {
    mode: "Airport",
    detail: "Lokpriya Gopinath Bordoloi International Airport",
  },
  {
    mode: "Rail",
    detail: "Guwahati Railway Station",
  },
  {
    mode: "Road",
    detail: "Local transport and taxis",
  },
];

export function VenueSection() {
  return (
    <>
      <SectionWrapper theme="white" spacing="compact">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <EyebrowLabel label="CONFERENCE VENUE" />
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Indian Institute of
              <br />
              Technology Guwahati
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-secondary-text">
              RECYCLE27 will be held at the Indian Institute of Technology Guwahati (IITG), a
              premier institute nestled on the banks of the Brahmaputra, known for its vibrant
              academic environment and picturesque campus.
            </p>
            <div className="mt-8 flex items-start gap-3 text-sm text-secondary-text">
              <MapPin className="mt-1 shrink-0 text-primary-emerald" size={20} />
              <p>
                Indian Institute of Technology Guwahati
                <br />
                Guwahati, Assam 781039, India
              </p>
            </div>
            <Button
              href="https://maps.google.com"
              variant="secondary"
              showArrow
              className="mt-8"
            >
              View on Google Maps
            </Button>
            <div className="mt-12 relative">
              <div className="absolute -left-4 -top-8 w-16 h-16 opacity-20">
                <Image src="/images/leaf.png" alt="" width={64} height={64} className="object-contain" />
              </div>
              <QuoteBlock
                quote="A beautiful campus<br/>for a brighter tomorrow."
                theme="light"
                className="relative"
              />
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-light-border">
            <Image
              src={photo("photo-1524666041070-9d87656c25b3")}
              fill
              sizes="(max-width:768px) 100vw, 60vw"
              alt="IIT Guwahati campus"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary-dark/10" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="rounded-xl bg-white/95 backdrop-blur p-6 shadow-lg text-center">
                <MapPin className="mx-auto text-primary-emerald" size={32} />
                <strong className="mt-3 block text-lg font-display">IIT Guwahati</strong>
                <p className="mt-1 text-sm text-secondary-text">Click to view on Google Maps</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper theme="light" spacing="compact">
        <EyebrowLabel label="HOW TO REACH" />
        <h2 className="font-display text-4xl">Getting to IIT Guwahati</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {travelModes.map(({ mode, detail }) => (
            <div key={mode} className="border border-light-border bg-white p-6">
              <MapPin className="text-primary-emerald" />
              <h3 className="mt-7 font-semibold">{mode}</h3>
              <p className="mt-2 text-sm leading-6 text-secondary-text">
                {detail}. Final travel guidance will be published closer to the event.
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
