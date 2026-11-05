"use client";

import { useState, type CSSProperties } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3 w-full">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div
            key={item.question}
            data-reveal="up"
            style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
            className={`rounded-2xl border transition-colors duration-300 ${
              open ? "border-[#b6e87d] bg-[#f4fde8]" : "border-gray-200 bg-gray-50 hover:border-gray-300"
            }`}
          >
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : index)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left text-base sm:text-lg font-semibold text-black cursor-pointer"
            >
              {item.question}
              <ChevronDown
                className={`w-5 h-5 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-gray-600 text-sm sm:text-[14.5px] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
