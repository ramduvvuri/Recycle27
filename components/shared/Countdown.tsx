"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const target = new Date("2027-05-12T09:00:00+05:30").getTime();

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

/*
 * Static initial value prevents hydration mismatch.
 * The actual countdown is calculated after hydration.
 */
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
      value: String(value.days).padStart(3, "0"),
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
    <section className="w-full border-y border-black/75 bg-[#f5f3ee]">
      <div className="mx-auto flex w-full max-w-[1440px] items-stretch">
        {/* =========================
            COUNTDOWN
        ========================== */}
        <div className="flex min-w-0 flex-1 items-center px-10 py-12 sm:px-12 sm:py-14 lg:px-16">
          <div className="w-full">
            <p className="mb-6 text-[13px] font-medium tracking-[-0.01em] text-[#111] sm:text-[15px]">
              Conference Begins In
            </p>

            <div className="flex items-center">
              {segments.map((segment, index) => (
                <div
                  key={segment.key}
                  className="flex items-center"
                >
                  <div className="w-[120px] text-center sm:w-[140px] md:w-[160px]">
                    <div className="font-display text-[48px] font-medium leading-none tracking-[-0.05em] text-[#111] sm:text-[54px] md:text-[60px]">
                      {segment.value}
                    </div>

                    <div className="mt-3 text-[10px] font-medium uppercase tracking-[0.10em] text-[#111]/70 sm:text-[11px] md:text-[12px]">
                      {segment.label}
                    </div>
                  </div>

                  {index < segments.length - 1 && (
                    <div className="mx-2 h-16 w-px bg-black/15 sm:mx-4 sm:h-20" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================
            LEAF
        ========================== */}
        <div className="relative hidden h-[210px] w-[230px] shrink-0 overflow-hidden sm:block">
          <Image
            src="/images/leaf.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="230px"
          />
        </div>

        {/* =========================
            QUOTE
        ========================== */}
        <div className="flex w-[360px] shrink-0 items-center px-10 sm:w-[390px] sm:px-12 md:w-[420px]">
          <div className="border-l-[2px] border-primary-emerald pl-7">
            <p className="font-display text-[24px] italic leading-[1.2] tracking-[-0.025em] text-[#111] sm:text-[26px] md:text-[28px]">
              “Towards a circular and sustainable future.”
            </p>

            <div className="mt-6 h-px w-10 bg-black/45" />
          </div>
        </div>
      </div>
    </section>
  );
}
