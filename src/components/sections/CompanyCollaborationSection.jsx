"use client";

import React from "react";
import { motion } from "framer-motion";

const collaborators = [
  { name: "NexGenEx Tech", logo: "/partners/logo.png" },
  { name: "TAW Designs & Architects", logo: "/partners/logo3.png" },
  { name: "Cludo bits", logo: "/partners/cludobits.png" },
  { name: "Data Vertex Technologies", logo: "/partners/datavertex.png" },
];

export default function CompanyCollaborationSection() {
  return (
    <section className="relative w-full py-28 px-6 bg-white overflow-hidden">
      {/* Decorative background elements */}
      <img
        src="/line-shape.png"
        alt="background"
        className="absolute top-0 left-0 w-72 text-blue-600 pointer-events-none "
      />
      <img
          src="/design.png"
        alt="background"
        className="absolute bottom-0 right-0 w-screen opacity-10 pointer-events-none"
      />

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 capitalize">
          In Collaboration With
        </h2>
        <div className="mt-4 h-1 w-16 mx-auto bg-blue-600 rounded-full" />
        <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
          We’re proud to work with industry leaders shaping the digital world through technology, architecture, and innovation.
        </p>
      </div>

      {/* Logos grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center justify-center">
        {collaborators.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white border border-gray-100 shadow-md hover:shadow-xl flex items-center justify-center p-6 h-32 transition duration-300 hover:-translate-y-1"
          >
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="max-h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
