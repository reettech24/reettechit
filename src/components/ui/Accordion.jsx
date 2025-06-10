"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 bg-gray-800 overflow-hidden transition-all"
        >
          <button
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
            className="w-full flex justify-between items-center px-5 py-4 bg-gray-800 hover:bg-gray-900 text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
          >
            <span className="font-medium text-white">{item.title}</span>
            <ChevronDown
              className={`w-5 h-5 transform transition-transform duration-300 text-white ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`px-5 text-white/80 text-sm transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-96 py-4 opacity-100" : "max-h-0 overflow-hidden opacity-0"
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
