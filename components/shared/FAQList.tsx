"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ease, duration } from "@/lib/motion";

export function FAQList({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-light-border border-y border-light-border">
      {items.map((item, index) => (
        <div key={item.question}>
          <button
            onClick={() => setOpen(open === index ? null : index)}
            aria-expanded={open === index}
            className="flex w-full items-center justify-between gap-6 py-5 text-left text-[15px] font-medium text-dark-text"
          >
            <span>{item.question}</span>
            <motion.span
              animate={{ rotate: open === index ? 180 : 0 }}
              transition={{ duration: duration.fast, ease: ease.inOut }}
              className="shrink-0"
            >
              <ChevronDown size={18} />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {open === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: "auto",
                  opacity: 1,
                  transition: {
                    height: { duration: duration.standard, ease: ease.out },
                    opacity: { duration: duration.standard, ease: ease.out, delay: 0.04 },
                  },
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                  transition: {
                    height: { duration: duration.fast, ease: ease.inOut },
                    opacity: { duration: duration.fast },
                  },
                }}
                className="overflow-hidden"
              >
                <p className="max-w-3xl pb-5 text-sm leading-7 text-secondary-text">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
