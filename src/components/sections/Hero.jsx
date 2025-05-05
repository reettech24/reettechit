'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('hero');

  const keys = ['headline1', 'headline2', 'headline3', 'headline4'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % keys.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" w-full min-h-screen overflow-hidden bg-black text-white flex items-center px-6 md:px-12 lg:px-28">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="items-center pt-70 lg:pt-80 z-0 max-w-6xl min-h-fit space-y-8">
        <AnimatePresence mode="wait">
          <motion.h1
            key={keys[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight lg:h-32 z-0"
          >
            {t(keys[index])}
          </motion.h1>
        </AnimatePresence>

        <p className="text-sm sm:text-xl text-gray-300 max-w-2xl">
          {t('subtext')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-2 text-md lg:text-lg">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition">
            {t('cta1')}
          </button>
          <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
            {t('cta2')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
