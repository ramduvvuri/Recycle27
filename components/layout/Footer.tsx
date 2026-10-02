import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { contactInfo } from "@/data/contact";
import { conference } from "@/data/conference";

export function Footer() {
  return (
    <footer className="w-full bg-[#F6F2E8] text-[#113224] border-t border-[#0C5A3D]/12">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8 lg:px-10 xl:px-12 py-4 md:py-5">

        {/* Three-column footer grid */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0">

          {/* ── Region 1: Organized By (≈52%) ─────────────────────────── */}
          <div className="flex-1 lg:pr-8 xl:pr-10">
            <h3 className="font-body font-semibold text-[11px] tracking-[0.08em] uppercase text-[#113224]/70 mb-2.5">
              Organized by
            </h3>

            {/* Three organizer logos in one horizontal row */}
            <div className="flex flex-row flex-wrap items-center gap-x-6 gap-y-3">

              {/* WMRG */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="relative w-[34px] h-[34px] shrink-0 border border-[#0C5A3D]/20 rounded-full overflow-hidden bg-white flex items-center justify-center shadow-sm">
                  <Image
                    src="/images/logo-wmrg.jpg"
                    alt="WMRG"
                    fill
                    className="object-contain p-[1px]"
                    sizes="34px"
                  />
                </div>
                <p className="font-body text-[10px] leading-[1.25] font-medium text-[#113224]/80 max-w-[100px]">
                  Waste Management<br />Research Group (WMRG)
                </p>
              </div>

              {/* AWASR */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="relative w-[34px] h-[34px] shrink-0 border border-[#0C5A3D]/20 rounded-full overflow-hidden bg-white flex items-center justify-center shadow-sm">
                  <Image
                    src="/images/sponsors/awasr_crop.png"
                    alt="AWASR"
                    fill
                    className="object-contain p-[1px]"
                    sizes="34px"
                  />
                </div>
                <p className="font-body text-[10px] leading-[1.25] font-medium text-[#113224]/80 max-w-[70px]">
                  AWASR<br />Society
                </p>
              </div>

              {/* IITG */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="relative w-[34px] h-[34px] shrink-0 border border-[#0C5A3D]/20 rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center">
                  <Image
                    src="/images/logo-iitg.png"
                    alt="IIT Guwahati"
                    fill
                    className="object-contain p-[4px]"
                    sizes="34px"
                  />
                </div>
                <p className="font-body text-[10px] leading-[1.25] font-medium text-[#113224]/80 max-w-[160px]">
                  Department of Civil Engineering<br />
                  Indian Institute of Technology Guwahati
                </p>
              </div>

            </div>
          </div>

          {/* ── Vertical Divider 1 ─────────────────────────────────────── */}
          <div className="hidden lg:block w-px bg-[#0C5A3D]/12 self-stretch shrink-0" />

          {/* ── Region 2: Contact Us (≈23%) ───────────────────────────── */}
          <div className="lg:w-[230px] xl:w-[250px] shrink-0 lg:px-8 xl:px-10">
            <h3 className="font-body font-semibold text-[11px] tracking-[0.08em] uppercase text-[#113224]/70 mb-2.5">
              Contact Us
            </h3>

            <div className="flex flex-col gap-[7px]">
              {/* Phone */}
              <div className="flex items-start gap-[7px]">
                <Phone
                  size={11}
                  strokeWidth={2.3}
                  className="text-[#0C5A3D] shrink-0 mt-[2px]"
                />
                <p className="font-body text-[10.5px] leading-[1.4] font-medium text-[#113224]/80">
                  {contactInfo.phones.map((phone, i) => (
                    <span key={phone}>{phone}{i < contactInfo.phones.length - 1 ? <br /> : ""}</span>
                  ))}
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-[7px]">
                <Mail
                  size={11}
                  strokeWidth={2.3}
                  className="text-[#0C5A3D] shrink-0 mt-[2px]"
                />
                <p className="font-body text-[10.5px] leading-[1.4] font-medium text-[#113224]/80">
                  {contactInfo.emails.map((email, i) => (
                    <span key={email}>
                      <a href={`mailto:${email}`} className="hover:text-[#0C5A3D] transition-colors break-all">{email}</a>
                      {i < contactInfo.emails.length - 1 ? <br /> : ""}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>

          {/* ── Vertical Divider 2 ─────────────────────────────────────── */}
          <div className="hidden lg:block w-px bg-[#0C5A3D]/12 self-stretch shrink-0" />

          {/* ── Region 3: Conference Venue (≈25%) ─────────────────────── */}
          <div className="lg:w-[240px] xl:w-[260px] shrink-0 lg:pl-8 xl:pl-10 flex flex-col justify-between">
            <div>
              <h3 className="font-body font-semibold text-[11px] tracking-[0.08em] uppercase text-[#113224]/70 mb-2.5">
                Conference Venue
              </h3>

              <div className="flex items-start gap-[7px]">
                <MapPin
                  size={11}
                  strokeWidth={2.3}
                  className="text-[#0C5A3D] shrink-0 mt-[2px]"
                />
                <p className="font-body text-[10.5px] leading-[1.5] font-medium text-[#113224]/80">
                  Conference Centre<br />
                  Indian Institute of Technology Guwahati<br />
                  Guwahati – 781039, Assam, India
                </p>
              </div>
            </div>

            {/* Copyright — bottom of venue column */}
            <p className="mt-3 font-body text-[8.5px] text-[#113224]/38 font-medium">
              © {conference.year} {conference.shortName}. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
