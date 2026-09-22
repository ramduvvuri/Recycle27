"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const target = new Date("2027-05-12T09:00:00+05:30").getTime();

function getTimeRemaining() {
  const distance = Math.max(0, target - Date.now());

  return {
    days: Math.floor(distance / 86400000),
    hours: Math.floor(distance / 3600000) % 24,
    minutes: Math.floor(distance / 60000) % 60,
    seconds: Math.floor(distance / 1000) % 60,
  };
}

export function Countdown() {
  const [value, setValue] = useState(getTimeRemaining);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setValue(getTimeRemaining());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const segments = [
    { key: "days", label: "Days", value: `${value.days}`.padStart(3, "0") },
    { key: "hours", label: "Hours", value: `${value.hours}`.padStart(2, "0") },
    { key: "minutes", label: "Minutes", value: `${value.minutes}`.padStart(2, "0") },
    { key: "seconds", label: "Seconds", value: `${value.seconds}`.padStart(2, "0") },
  ];

  return (
    <div className="w-full">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-3 py-6 md:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-10">
        <div className="flex-1">
          <p className="mb-5 text-[15px] font-medium tracking-[-0.02em] text-dark-text/80 md:text-[17px]">
            Conference begins in
          </p>

          <div className="grid grid-cols-4 gap-4 md:gap-8 lg:gap-10">
            {segments.map((segment) => (
              <div key={segment.key} className="min-w-0">
                <div className="font-display text-[clamp(2.5rem,5vw,6.4rem)] leading-none tracking-[-0.06em] text-dark-text">
                  {segment.value}
                </div>
                <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-dark-text/60">
                  {segment.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full lg:w-[500px] lg:max-w-[40%]">
          <div className="absolute left-0 top-0 hidden h-full w-px bg-[#173d31]/30 lg:block" />

          <div className="relative ml-0 lg:ml-12">
            <div className="pointer-events-none absolute -right-4 -top-8 z-0 h-[260px] w-[480px] overflow-hidden opacity-95 md:h-[300px] md:w-[560px] lg:h-[380px] lg:w-[620px]">
              <Image
                src="/images/leaf.png"
                alt=""
                fill
                className="object-cover object-left opacity-100 mix-blend-multiply"
                priority
              />
            </div>

            <div className="relative z-10 max-w-[440px] py-8 pl-0 lg:pl-10">
              <p className="font-display text-[clamp(2.8rem,4vw,5.4rem)] italic leading-[0.9] tracking-[-0.055em] text-dark-text">
                “Towards a circular
                <br />
                and sustainable
                <br />
                future.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
