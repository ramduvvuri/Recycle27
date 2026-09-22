"use client";
import { useEffect, useState } from "react";
const target = new Date("2027-05-12T09:00:00+05:30").getTime();
function remaining() { const distance = Math.max(0, target - Date.now()); return [Math.floor(distance / 86400000), Math.floor(distance / 3600000) % 24, Math.floor(distance / 60000) % 60, Math.floor(distance / 1000) % 60]; }
export function Countdown() { const [value, setValue] = useState(remaining); useEffect(() => { const id = window.setInterval(() => setValue(remaining()), 1000); return () => window.clearInterval(id); }, []); return <div className="grid grid-cols-4 gap-3 sm:gap-7">{["Days", "Hours", "Minutes", "Seconds"].map((label, index) => <div key={label}><strong className="block font-body text-3xl font-light tracking-tight text-dark-text sm:text-6xl">{String(value[index]).padStart(2, "0")}</strong><span className="mt-1 block text-[10px] uppercase tracking-[0.12em] text-secondary-text">{label}</span></div>)}</div>; }
