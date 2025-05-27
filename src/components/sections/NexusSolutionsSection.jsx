"use client";

import React from "react";
import { motion } from "framer-motion";

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

      <div className="relative z-10 max-w-6xl mx-auto grid gap-20 md:grid-cols-2">
        {/* Nexus India */}
        <div className="absolute -top-50 -left-60 z-10">
          <img
            src="/NI.png"
            alt="Nexus India Logo"
            className="w-96 h-96 object-contain opacity-80"
          />
        </div>
        <div className="relative flex flex-col items-center">
          {/* Floating Logo */}

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative bg-white shadow-2xl transition-all duration-300 overflow-hidden w-full"
            style={{
              backgroundImage: "url('/nexusindiaimage.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60 z-0" />
            <div className="relative z-10 p-8">
              <h3 className="text-2xl font-bold text-orange-500 mb-2 uppercase">
                Nexus India
              </h3>
              <h3 className="text-xl font-bold text-blue-200 mb-4 uppercase">
                The Caring Market
              </h3>
              <p className="text-white mb-4">
                A powerful digital initiative tailored to support India's small
                and medium-sized businesses.
              </p>
              <ul className="list-disc list-inside text-white mb-6 space-y-1">
                <li>Affordable tech solutions for SMEs</li>
                <li>Localized tools for e-commerce & logistics</li>
                <li>Easy onboarding and support</li>
                <li>Scalable to meet future growth</li>
              </ul>
              <a
                href="/products/nexus-india"
                className="inline-block px-6 py-3 text-white bg-orange-500 hover:bg-orange-600 font-medium transition shadow"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>

        {/* Nexus Online Management */}
        <div className="relative flex flex-col items-center">
          {/* Floating Logo */}
          {/* <div className="absolute -top-14 z-20 bg-white rounded-full p-3 shadow-xl">
            <img src="/nexusindiaimage.jpeg" alt="Management Logo" className="w-20 h-20 object-contain" />
          </div> */}

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative bg-white shadow-2xl transition-all duration-300 overflow-hidden w-full "
            style={{
              backgroundImage: "url('/design.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60 z-0" />
            <div className="relative z-10 p-8">
              <h3 className="text-2xl font-bold text-orange-500 mb-2 uppercase">
                Nexus India
              </h3>
              <h3 className="text-xl font-bold text-blue-200 mb-4 uppercase">
                The Business Management Software
              </h3>
              {/* <h3 className="text-2xl font-bold text-white mb-4">
                Nexus India The Business Management Software
              </h3> */}
              <p className="text-white mb-4">
                Your all-in-one dashboard to manage operations, customers, and
                teams with ease.
              </p>
              <ul className="list-disc list-inside text-white mb-6 space-y-1">
                <li>Smart dashboards & real-time analytics</li>
                <li>Role-based user access and permissions</li>
                <li>Centralized data and project tools</li>
                <li>Custom integrations with APIs</li>
              </ul>
              <a
                href="/products/nexus-online-management"
                className="inline-block px-6 py-3 text-white bg-orange-500 hover:bg-orange-600 font-medium transition shadow"
              >
                Explore Platform
              </a>
            </div>
          </motion.div>
        </div>

           <div className="absolute -bottom-40 -right-40 z-10">
          <img
            src="/NI.png"
            alt="Nexus India Logo"
            className="w-96 h-96 object-contain opacity-40"
          />
        </div>
      </div>
    </section>
  );
}
