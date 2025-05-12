"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function NexusSolutionsSection() {
  return (
    <section
      className="relative w-full bg-cover bg-center py-28 px-6"
      style={{ backgroundImage: "url('/breadcrumb.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50 bg-opacity-60 z-0" />

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Explore Our Digital Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-white/80 mt-4"
        >
          Designed to help businesses grow, adapt, and lead in the digital era.
        </motion.p>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid gap-10 md:grid-cols-2">

      <div className="absolute inset-0 bg-black/10 bg-opacity-90 z-0" />

        {/* Nexus India */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-8 shadow-2xl transition-all duration-300"
           style={{ backgroundImage: "url('/nexusindiaimage.jpeg')" }}
        >
          <div className="flex items-center gap-4 mb-5">
            {/* <img src="/nexusindialogo.jpg" alt="Nexus India Icon" className="w-52 h-20" /> */}
            <h3 className="text-2xl font-bold text-white">Nexus India</h3>
          </div>
          <p className="text-white mb-4">
            A powerful digital initiative tailored to support India's small and medium-sized businesses.
          </p>
          <ul className="list-disc list-inside text-white mb-6 space-y-1">
            <li>Affordable tech solutions for SMEs</li>
            <li>Localized tools for e-commerce & logistics</li>
            <li>Easy onboarding and support</li>
            <li>Scalable to meet future growth</li>
          </ul>
          <a
            href="/products/nexus-india"
            className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition shadow"
          >
            Learn More
          </a>
        </motion.div>

        {/* Nexus Online Management */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-8 shadow-2xl transition-all duration-300 object-cover"
           style={{ backgroundImage: "url('/design.jpeg')" }}

        >
          <div className="flex items-center gap-4 mb-5">
            {/* <img src="/icons/management.svg" alt="Management Icon" className="w-12 h-12" /> */}
            <h3 className="text-2xl font-bold text-white">Nexus Online Management</h3>
          </div>
          <p className="text-white mb-4">
            Your all-in-one dashboard to manage operations, customers, and teams with ease.
          </p>
          <ul className="list-disc list-inside text-white mb-6 space-y-1">
            <li>Smart dashboards & real-time analytics</li>
            <li>Role-based user access and permissions</li>
            <li>Centralized data and project tools</li>
            <li>Custom integrations with APIs</li>
          </ul>
          <a
            href="/products/nexus-online-management"
            className="inline-block px-6 py-3 text-white bg-green-600 hover:bg-green-700 rounded-lg font-medium transition shadow"
          >
            Explore Platform
          </a>
        </motion.div>
      </div>
    </section>
  );
}
