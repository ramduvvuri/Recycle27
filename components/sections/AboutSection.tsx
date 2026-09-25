import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { QuoteBlock } from "@/components/ui/QuoteBlock";

const photo = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export function AboutSection() {
  return (
    <>
      <SectionWrapper theme="white" spacing="compact">
        <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <div>
            <EyebrowLabel label="Conference overview" />
            <h2 className="font-display text-4xl md:text-5xl">About RECYCLE27</h2>
            <p className="mt-5 text-sm leading-7 text-secondary-text">
              RECYCLE27 is an international conference on sustainable waste management and circular
              economy, bringing together researchers, industry experts, policymakers and students
              from across the globe. The conference aims to foster collaboration, knowledge exchange
              and actionable outcomes to address pressing challenges of waste management and to build
              a cleaner, more resilient future.
            </p>
            <p className="mt-4 text-sm leading-7 text-secondary-text">
              Through technical sessions, keynote talks, panel discussions and networking
              opportunities, RECYCLE27 will explore innovative solutions, policies and practices that
              can accelerate the transition toward a circular and sustainable society.
            </p>
            <Button href="/themes" variant="icon" className="mt-6">
              View Conference Themes
            </Button>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={photo("photo-1562774053-701939374585")}
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                alt="IIT Guwahati campus"
                className="object-cover"
              />
            </div>
            <div className="ml-auto -mt-20 max-w-[230px] bg-warm-cream p-6">
              <p className="font-display text-2xl leading-tight">
                Ideas for a Cleaner, Healthier and More Circular World.
              </p>
              <span className="mt-5 block h-px w-7 bg-primary-emerald" />
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper theme="dark" spacing="compact">
        <div className="grid gap-10 lg:grid-cols-[1fr_.7fr_.5fr]">
          <div>
            <EyebrowLabel theme="dark" label="Indian Institute of Technology Guwahati" />
            <h2 className="font-display text-4xl">About IIT Guwahati</h2>
            <p className="mt-5 text-sm leading-7 text-light-text/80">
              IIT Guwahati is a premier institute located on the banks of the Brahmaputra River in
              Assam, India. Known for its vibrant academic environment and picturesque campus, IITG
              has been at the forefront of education, research and innovation in various fields
              including engineering, science and humanities.
            </p>
            <p className="mt-4 text-sm leading-7 text-light-text/80">
              The institute is committed to excellence in education and research, fostering a culture
              of innovation and entrepreneurship. With state-of-the-art facilities and distinguished
              faculty, IIT Guwahati continues to contribute significantly to the nation's
              technological and scientific advancement.
            </p>
          </div>
          <div className="col-span-2 space-y-3">
            {[
              {
                n: "01",
                title: "Research Excellence",
                desc: "Cutting-edge research in sustainable technologies and circular economy solutions.",
              },
              {
                n: "02",
                title: "Innovation Hub",
                desc: "Fostering entrepreneurship and technological innovation for a sustainable future.",
              },
              {
                n: "03",
                title: "Sustainable Campus",
                desc: "Committed to environmental stewardship and green practices on campus.",
              },
            ].map(({ n, title, desc }) => (
              <div key={n} className="bg-secondary-dark p-5">
                <span className="text-muted-green">{n}</span>
                <h3 className="mt-12 font-display text-xl text-light-text">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-light-text/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
