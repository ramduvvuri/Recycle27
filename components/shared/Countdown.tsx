"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";
import { ScrollParallax } from "@/components/motion/ScrollParallax";

const target = new Date("2027-05-20T00:00:00+05:30").getTime();

type TimeRemaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeRemaining(): TimeRemaining {
  const distance = Math.max(0, target - Date.now());

  return {
    days: Math.floor(distance / 86400000),
    hours: Math.floor(distance / 3600000) % 24,
    minutes: Math.floor(distance / 60000) % 60,
    seconds: Math.floor(distance / 1000) % 60,
  };
}

const initialValue: TimeRemaining = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export function Countdown() {
  const [value, setValue] = useState<TimeRemaining>(initialValue);

  useEffect(() => {
     
    setValue(getTimeRemaining());
    const timer = window.setInterval(() => {
      setValue(getTimeRemaining());
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const segments = [
    {
      key: "days",
      label: "Days",
      value: String(value.days),
    },
    {
      key: "hours",
      label: "Hours",
      value: String(value.hours).padStart(2, "0"),
    },
    {
      key: "minutes",
      label: "Minutes",
      value: String(value.minutes).padStart(2, "0"),
    },
    {
      key: "seconds",
      label: "Seconds",
      value: String(value.seconds).padStart(2, "0"),
    },
  ];

  return (
    <section id="countdown" className="w-full relative bg-[#093522] h-auto lg:h-[84px] flex flex-col lg:flex-row overflow-hidden">
      
      {/* DESKTOP BACKGROUND LAYER */}
      <div className="hidden lg:block absolute inset-0 z-0">
        {/* Left Pale Green */}
        <div className="absolute left-0 top-0 bottom-0 w-[68%] bg-[#E8EAE3]" />
        
        {/* The Smooth S-Curve Divider */}
        <svg 
          className="absolute left-[68%] top-0 h-[84px] w-[120px] text-[#E8EAE3]" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          <path fill="currentColor" d="M0,0 L100,0 C60,0 40,100 0,100 Z" />
        </svg>
      </div>

      {/* MOBILE BACKGROUND */}
      <div className="lg:hidden absolute inset-0 z-0 bg-[#E8EAE3]" />

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 md:px-8 lg:px-10 xl:px-12 h-full flex flex-col lg:flex-row items-center justify-between py-6 lg:py-0">
        
        {/* LEFT COMPONENT - HEADING & TIMER */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-14 w-full lg:w-auto">
          
          {/* HEADING */}
          <div className="flex flex-col items-center lg:items-start shrink-0">
            <p className="text-[8px] md:text-[11px] font-bold uppercase tracking-[0.1em] text-[#365143] mb-[3px]">
              Conference Begins In
            </p>
            <div className="h-[2px] w-[26px] bg-[#8FA196]" />
          </div>

          {/* TIMER VALUES */}
          <div className="flex items-center gap-4 md:gap-5 lg:gap-6">
            {segments.map((segment, index) => (
              <div key={segment.key} className="flex items-center">
                <div className="flex flex-col items-center w-[46px] md:w-[50px] lg:w-[54px]">
                  <div className="font-display text-[22px] md:text-[30px] lg:text-[32px] font-medium leading-[1] text-[#123123] mb-[2px]">
                    {segment.value}
                  </div>
                  <div className="text-[8px] md:text-[11px] font-medium text-[#73887B]">
                    {segment.label}
                  </div>
                </div>

                {index < segments.length - 1 && (
                  <div className="mx-2 md:mx-3 lg:mx-4 h-8 w-px bg-[#123123]/15" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COMPONENT - LEAF & QUOTE */}
        <div className="hidden lg:flex items-center justify-end gap-4 lg:gap-5 mt-8 lg:mt-0 shrink-0 relative z-20 w-full lg:w-auto">
          <ScrollParallax speed={-0.1} max={8}>
            <Leaf 
              className="text-[#6C8A79] rotate-[-15deg]" 
              size={24} 
              strokeWidth={1.5} 
            />
          </ScrollParallax>
          <ScrollParallax speed={0.06} max={5}>
            <p className="font-display text-[14px] md:text-[15px] lg:text-[16px] leading-[1.25] text-[#E8EAE3] mr-2 lg:mr-0">
              <span className="block">Towards a</span>
              <span className="block">Circular and</span>
              <span className="block">Resource-Efficient Future</span>
            </p>
          </ScrollParallax>
        </div>

      </div>
    </section>
  );
}
