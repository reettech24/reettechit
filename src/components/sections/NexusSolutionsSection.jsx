'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function NexusSolutionsSection() {
  const t = useTranslations('nexusSolutionsSection');

  return (
    <section
      className="relative w-full bg-cover bg-center py-28 px-6 overflow-hidden"
      style={{ backgroundImage: "url('/breadcrumb.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 bg-opacity-60 z-0" />

      {/* Heading */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          {t('title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-white/80 mt-4"
        >
          {t('description')}
        </motion.p>
      </div>

      {/* Content Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid gap-20 md:grid-cols-2">

        {/* Left floating logo */}
        <div className="absolute -top-50 -left-60 z-10">
          <img src="/NI.png" alt="Nexus India Logo" className="w-96 h-96 object-contain opacity-80" />
        </div>

        {/* Nexus India Card */}
        <div className="relative flex flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative bg-white shadow-2xl transition-all duration-300 overflow-hidden w-full"
            style={{
              backgroundImage: "url('/nexusindiaimage.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/60 z-0" />
            <div className="relative z-10 p-8">
              <h3 className="text-2xl font-bold text-orange-500 mb-2 uppercase">{t('nexusIndia.name')}</h3>
              <h3 className="text-xl font-bold text-blue-200 mb-4 uppercase">{t('nexusIndia.tagline')}</h3>
              <p className="text-white mb-4">{t('nexusIndia.description')}</p>
              <ul className="list-disc list-inside text-white mb-6 space-y-1">
                {t.raw('nexusIndia.features').map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <a
                href="/products/nexus-india"
                className="inline-block px-6 py-3 text-white bg-orange-500 hover:bg-orange-600 font-medium transition shadow"
              >
                {t('nexusIndia.buttonText')}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Nexus Online Management Card */}
        <div className="relative flex flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative bg-white shadow-2xl transition-all duration-300 overflow-hidden w-full"
            style={{
              backgroundImage: "url('/design.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/60 z-0" />
            <div className="relative z-10 p-8">
              <h3 className="text-2xl font-bold text-orange-500 mb-2 uppercase">{t('nexusOnline.name')}</h3>
              <h3 className="text-xl font-bold text-blue-200 mb-4 uppercase">{t('nexusOnline.tagline')}</h3>
              <p className="text-white mb-4">{t('nexusOnline.description')}</p>
              <ul className="list-disc list-inside text-white mb-6 space-y-1">
                {t.raw('nexusOnline.features').map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <a
                href="/products/nexus-online-management"
                className="inline-block px-6 py-3 text-white bg-orange-500 hover:bg-orange-600 font-medium transition shadow"
              >
                {t('nexusOnline.buttonText')}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right floating logo */}
        <div className="absolute -bottom-40 -right-40 z-10">
          <img src="/NI.png" alt="Nexus India Logo" className="w-96 h-96 object-contain opacity-40" />
        </div>
      </div>
    </section>
  );
}
