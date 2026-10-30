import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, FileText, FlaskConical, Globe2, Landmark, Sprout, UsersRound } from "lucide-react";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

const campus = "/images/about/recycle_about.jpeg";
const iitg = "/images/IITG entrance.png";
const lab = "/images/about/wmrg_group.jpeg";

const ButtonLink = ({ href, children, dark = false }: { href: string; children: ReactNode; dark?: boolean }) => (
  <Link href={href} className={`mt-7 inline-flex items-center gap-2 rounded-md border px-5 py-2.5 text-xs font-medium uppercase tracking-wider transition-colors ${dark ? "border-light-text text-light-text hover:bg-white/10" : "border-primary-emerald text-primary-emerald hover:bg-primary-emerald hover:text-white"}`}>
    {children}<ArrowRight size={14} />
  </Link>
);

export default function AboutPage() {
  return (
    <div className="pt-[76px] sm:pt-[84px] md:pt-[88px]">
      {/* 1. About RECYCLE 2027 */}
      <section className="bg-soft-bg py-8 md:py-14">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10 xl:px-12">
          <div className="grid lg:grid-cols-12 gap-8 items-center bg-[#F4F1EA] border border-light-border rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-sm overflow-hidden">
            
            {/* Text Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <EyebrowLabel label="Conference overview" />
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-dark-text mt-3 mb-5 leading-tight font-medium">
                About RECYCLE 2027
              </h1>
              <div className="space-y-4 text-[14.5px] sm:text-[15px] leading-relaxed text-secondary-text">
                <p>
                  Starting off as a symposium in 2012, a Waste Management Research Group (WMRG) IIT Guwahati initiative, Recycle gradually grew into an international conference in just a few years.
                </p>
                <p>
                  Recycle 2027 provides an excellent platform for discussing and sharing ideas, methods, and approaches for effective waste management, emphasizing the core issues of solid waste management, water, and wastewater.
                </p>
              </div>
              <div className="mt-7">
                <ButtonLink href="/themes">View Conference Themes</ButtonLink>
              </div>
            </div>

            {/* Image Column: Unskewed, unstretched, color-blended */}
            <div className="lg:col-span-5 relative w-full h-[300px] sm:h-[360px] lg:h-[400px] rounded-xl overflow-hidden bg-[#0C3826] border border-[#0C3826]/20 shadow-md flex items-center justify-center">
              {/* Ambient blurred backdrop for seamless color mixing */}
              <Image
                src={campus}
                alt=""
                aria-hidden="true"
                fill
                className="object-cover blur-2xl opacity-35 scale-110 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#072519]/70 via-transparent to-[#072519]/40 pointer-events-none" />
              
              {/* Original image: object-contain with padding — zero skew, zero stretch */}
              <Image
                src={campus}
                alt="RECYCLE 2027 Conference Overview"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain p-2 sm:p-4 transition-transform duration-700 ease-out hover:scale-[1.02]"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. About IIT Guwahati */}
      <section className="bg-soft-bg pb-8 md:pb-14">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10 xl:px-12">
          <div className="grid lg:grid-cols-12 gap-8 items-center bg-[#072A1E] text-white border border-[#072A1E] rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-md overflow-hidden">
            
            {/* Image Column: Left side for alternating rhythm */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative w-full h-[300px] sm:h-[360px] lg:h-[400px] rounded-xl overflow-hidden bg-[#041E15] border border-white/10 shadow-md flex items-center justify-center">
              {/* Ambient blur backdrop */}
              <Image
                src={iitg}
                alt=""
                aria-hidden="true"
                fill
                className="object-cover blur-2xl opacity-35 scale-110 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041E15]/80 via-transparent to-[#041E15]/50 pointer-events-none" />
              
              {/* Authentic IITG Entrance Photo: object-contain with padding */}
              <Image
                src={iitg}
                alt="Indian Institute of Technology Guwahati Campus"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain p-2 sm:p-4 transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
              <EyebrowLabel theme="dark" label="Indian Institute of Technology Guwahati" />
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mt-3 mb-5 leading-tight font-medium">
                About IIT Guwahati
              </h2>
              <p className="text-[14.5px] sm:text-[15px] leading-relaxed text-white/80 mb-6">
                Indian Institute of Technology Guwahati (IITG), established in 1994, is one of India&apos;s leading institutes of technology and excellence. At present, the institute has eleven departments, nine centres, and five schools of interdisciplinary academic centres. IITG has a world-class infrastructure with state-of-the-art scientific and engineering instruments for carrying out advanced research across a sprawling 704.25-acre campus on the north bank of the Brahmaputra River.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-5 border-t border-white/15">
                {[
                  [Landmark, "Excellence in Education"],
                  [FlaskConical, "Cutting-edge Research"],
                  [UsersRound, "Vibrant Academic Community"],
                  [Sprout, "Commitment to a Sustainable Future"]
                ].map(([Icon, text]) => {
                  const C = Icon as typeof Landmark;
                  return (
                    <div key={text as string} className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <C size={14} strokeWidth={1.7} className="text-[#A2E2C8]" />
                      </div>
                      <span className="font-display text-[14px] text-white/90">{text as string}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-7">
                <ButtonLink href="https://www.iitg.ac.in" dark>Visit IITG</ButtonLink>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. About WMRG */}
      <section className="bg-soft-bg pb-12 md:pb-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10 xl:px-12">
          <div className="grid lg:grid-cols-12 gap-8 items-center bg-[#F4F1EA] border border-light-border rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-sm overflow-hidden">
            
            {/* Text Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <EyebrowLabel label="Waste Management Research Group" />
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-dark-text mt-3 mb-5 leading-tight font-medium">
                About WMRG
              </h2>
              <p className="text-[14.5px] sm:text-[15px] leading-relaxed text-secondary-text mb-6">
                The Waste Management Research Group (WMRG) at the Indian Institute of Technology Guwahati, led by Prof. Ajay Kalamdhad and Dr. Meena Khwairakpam, is dedicated to advancing sustainable solutions in environmental engineering and waste management. The group&apos;s research spans composting, anaerobic digestion, pyrolysis, landfill management, water and wastewater treatment, and other emerging areas of environmental sustainability and resource recovery. Beyond research, WMRG is a close-knit academic family where members learn, collaborate, and contribute meaningful solutions for a sustainable future.
              </p>

              <div className="grid grid-cols-2 gap-3.5 pt-5 border-t border-dark-border/10">
                {[
                  [FileText, "Research and Innovation"],
                  [UsersRound, "Industry Collaboration"],
                  [Sprout, "Policy and Outreach"],
                  [Globe2, "Real-world Impact"]
                ].map(([Icon, text]) => {
                  const C = Icon as typeof FileText;
                  return (
                    <div key={text as string} className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-primary-emerald/10 flex items-center justify-center shrink-0">
                        <C size={14} strokeWidth={1.7} className="text-primary-emerald" />
                      </div>
                      <span className="font-medium text-[13px] text-dark-text leading-tight">{text as string}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Image Column: Unskewed, unstretched WMRG Group photo */}
            <div className="lg:col-span-5 relative w-full h-[300px] sm:h-[360px] lg:h-[400px] rounded-xl overflow-hidden bg-[#0C3826] border border-[#0C3826]/20 shadow-md flex items-center justify-center">
              {/* Ambient blurred backdrop for seamless color mixing */}
              <Image
                src={lab}
                alt=""
                aria-hidden="true"
                fill
                className="object-cover blur-2xl opacity-35 scale-110 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#072519]/70 via-transparent to-[#072519]/40 pointer-events-none" />
              
              {/* Group photo: object-contain with padding — zero skew, zero stretch */}
              <Image
                src={lab}
                alt="Waste Management Research Group (WMRG)"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain p-2 sm:p-4 transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
