import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, FileText, FlaskConical, Globe2, Landmark, Sprout, UsersRound } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { PageHero } from "@/components/shared/PageHero";
import { FinalCTA } from "@/components/shared/FinalCTA";

const campus = "/images/waste/mrf-sorting-01.jpg";
const iitg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStTUVhLMFv8FbQ57jan2TCGcRyDFvWIgJ-32f259bs9Q&s=10";
const lab = "/images/research/env-lab-01.jpg";

const ButtonLink = ({ href, children, dark = false }: { href: string; children: ReactNode; dark?: boolean }) => (
  <Link href={href} className={`mt-7 inline-flex items-center gap-2 rounded-md border px-5 py-2.5 text-xs font-medium uppercase tracking-wider transition-colors ${dark ? "border-light-text text-light-text hover:bg-white/10" : "border-primary-emerald text-primary-emerald hover:bg-primary-emerald hover:text-white"}`}>
    {children}<ArrowRight size={14} />
  </Link>
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT THE CONFERENCE"
        title="Purpose Drives Progress"
        description="RECYCLE27 is a global platform to exchange knowledge, ideas and solutions for a sustainable and circular future."
        pageKey="about"
        sideText={["RETHINK", "REUSE", "RECYCLE", "A CLEANER", "TOMORROW"]}
      />
      <Breadcrumb items={[{ label: "About" }]} />

      {/* About RECYCLE27 */}
      <section className="bg-soft-bg py-10 md:py-16">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10 xl:px-12">
          <div className="relative w-full h-auto min-h-[500px] lg:h-[600px] group overflow-hidden bg-dark-bg flex flex-col lg:flex-row">
            <div className="absolute inset-0 z-0">
              <Image 
                src={campus} 
                alt="Waste sorting facility" 
                fill 
                sizes="100vw" 
                className="object-cover object-center opacity-80 transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-dark-bg/30 to-transparent lg:bg-gradient-to-r lg:from-dark-bg/90 lg:via-dark-bg/40" />
            </div>
            
            <div className="relative z-10 w-full lg:w-[55%] xl:w-[45%] h-full">
              <div className="bg-warm-cream/95 backdrop-blur-sm p-8 md:p-12 lg:p-16 shadow-2xl border-l-4 border-primary-emerald h-full flex flex-col justify-center min-h-[500px] lg:min-h-full">
                <div>
                  <EyebrowLabel label="Conference overview" />
                  <h2 className="font-display text-4xl leading-tight md:text-5xl text-dark-text mt-3 mb-5">About RECYCLE27</h2>
                  <div className="space-y-4">
                    <p className="text-[14.5px] leading-relaxed text-secondary-text">
                      RECYCLE27 is an international conference on sustainable waste management and circular economy, bringing together researchers, industry experts, policymakers and students from across the globe. The conference aims to foster collaboration, knowledge exchange and actionable outcomes to address pressing challenges of waste management and to build a cleaner, more resilient future.
                    </p>
                    <p className="text-[14.5px] leading-relaxed text-secondary-text">
                      Through technical sessions, keynote talks, panel discussions and networking opportunities, RECYCLE27 explores innovative solutions, policies and practices that accelerate the transition toward a circular and sustainable society.
                    </p>
                  </div>
                  <ButtonLink href="/themes">View Conference Themes</ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About IIT Guwahati */}
      <section className="bg-soft-bg pb-10 md:pb-16">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10 xl:px-12">
          <div className="relative w-full h-auto min-h-[500px] lg:h-[600px] group overflow-hidden bg-primary-dark flex flex-col lg:flex-row">
            <div className="absolute inset-0 z-0">
              <Image 
                src={iitg} 
                alt="IIT Guwahati campus" 
                fill 
                sizes="100vw" 
                className="object-cover object-center opacity-60 transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/40 to-primary-dark/90 lg:bg-gradient-to-l lg:from-primary-dark/95 lg:via-primary-dark/50" />
            </div>
            
            <div className="relative z-10 w-full lg:w-[55%] xl:w-[50%] h-full lg:ml-auto">
              <div className="bg-primary-dark/90 backdrop-blur-md p-8 md:p-12 lg:p-16 border-r-4 border-light-text/30 shadow-2xl h-full flex flex-col justify-center min-h-[500px] lg:min-h-full">
                <div>
                  <EyebrowLabel theme="dark" label="Indian Institute of Technology Guwahati" />
                  <h2 className="font-display text-4xl md:text-5xl text-light-text mt-3 mb-5">About IIT Guwahati</h2>
                  <p className="text-[14.5px] leading-relaxed text-light-text/80 mb-8">
                    Indian Institute of Technology Guwahati (IITG) is one of the premier institutions of national importance in India, known for its excellence in education, research and innovation. Set in a serene campus along the banks of the Brahmaputra, IITG provides a unique environment for interdisciplinary learning and research.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-6 border-t border-light-text/10">
                    {[
                      [Landmark, "Excellence in Education"],
                      [FlaskConical, "Cutting-edge Research"],
                      [UsersRound, "Vibrant Academic Community"],
                      [Sprout, "Commitment to a Sustainable Future"]
                    ].map(([Icon, text]) => {
                      const C = Icon as typeof Landmark;
                      return (
                        <div key={text as string} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-light-text/10 flex items-center justify-center shrink-0">
                            <C size={16} strokeWidth={1.5} className="text-light-text" />
                          </div>
                          <span className="font-display text-[15px] text-light-text/90">{text as string}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4">
                    <ButtonLink href="https://www.iitg.ac.in" dark>Visit IITG</ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About WMRG */}
      <section className="bg-soft-bg pb-12 md:pb-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10 xl:px-12">
          <div className="relative w-full h-auto min-h-[500px] lg:h-[600px] group overflow-hidden bg-dark-bg flex flex-col lg:flex-row">
            <div className="absolute inset-0 z-0">
              <Image 
                src={lab} 
                alt="Environmental Research Laboratory" 
                fill 
                sizes="100vw" 
                className="object-cover object-[center_30%] opacity-70 transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/40 to-transparent lg:bg-gradient-to-r lg:from-dark-bg/95 lg:via-dark-bg/40" />
            </div>
            
            <div className="relative z-10 w-full lg:w-[55%] xl:w-[45%] h-full">
              <div className="bg-warm-cream/95 backdrop-blur-sm p-8 md:p-12 lg:p-16 shadow-2xl border-l-4 border-primary-emerald h-full flex flex-col justify-center min-h-[500px] lg:min-h-full">
                <div>
                  <EyebrowLabel label="Waste Management Research Group" />
                  <h2 className="font-display text-4xl md:text-5xl text-dark-text mt-3 mb-5">About WMRG</h2>
                  <p className="text-[14.5px] leading-relaxed text-secondary-text mb-8">
                    The Waste Management Research Group (WMRG) at IIT Guwahati works towards advancing research and practice in sustainable waste management, resource recovery and circular economy solutions. Through interdisciplinary research, industry collaboration and policy engagement, WMRG strives to create a meaningful impact on environmental sustainability and public health.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-dark-border/10">
                    {[
                      [FileText, "Research and Innovation"],
                      [UsersRound, "Industry Collaboration"],
                      [Sprout, "Policy and Outreach"],
                      [Globe2, "Real-world Impact"]
                    ].map(([Icon, text]) => {
                      const C = Icon as typeof FileText;
                      return (
                        <div key={text as string} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary-emerald/10 flex items-center justify-center shrink-0">
                            <C size={16} strokeWidth={1.5} className="text-primary-emerald" />
                          </div>
                          <span className="font-medium text-[13px] text-dark-text leading-tight">{text as string}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4">
                    <ButtonLink href="/contact">Learn More About WMRG</ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
