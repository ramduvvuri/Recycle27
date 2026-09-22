"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQList({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="divide-y divide-light-border border-y border-light-border">{items.map((item, index) => <div key={item.question}><button onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index} className="flex w-full items-center justify-between gap-6 py-5 text-left text-[15px] font-medium text-dark-text"><span>{item.question}</span><ChevronDown size={18} className={`shrink-0 transition-transform ${open === index ? "rotate-180" : ""}`} /></button>{open === index && <p className="max-w-3xl pb-5 text-sm leading-7 text-secondary-text">{item.answer}</p>}</div>)}</div>;
}
