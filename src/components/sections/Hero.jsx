"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  const t = useTranslations("hero");

  const keys = ["headline1", "headline2", "headline3", "headline4"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % keys.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full items-end overflow-hidden bg-[#070B2A] text-white">
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src="/reet_Banner.mp4" type="video/mp4" />
      </video>

      {/* VIDEO CONTRAST */}
      <div className="absolute inset-0 z-[1] bg-[#070B2A]/10" />

      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#070B2A] via-[#070B2A]/25 to-transparent" />

      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#070B2A]/45 via-transparent to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 w-full px-5 pb-10 sm:px-8 sm:pb-14 md:px-12 md:pb-16 lg:px-20 lg:pb-20 xl:px-28">
        <div className="max-w-[1050px]">

          {/* EYEBROW */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-9 bg-[#38BDF8]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7DD3FC] sm:text-xs">
              Reet Technologies
            </span>
          </div>

          {/* HEADLINE */}
          <div className="min-h-[115px] sm:min-h-[150px] lg:min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.h1
                key={keys[index]}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  max-w-5xl
                  text-3xl
                  font-semibold
                  leading-[1.02]
                  tracking-[-0.045em]
                  text-white
                  sm:text-5xl
                  md:text-6xl
                  lg:text-[52px]
                  xl:text-[64px]
                "
              >
                {t(keys[index])}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* DESCRIPTION */}
          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/70 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
            {t("subtext")}
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center">

            <Link
              href="/pages/contact"
              className="
                group
                inline-flex
                h-12
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#38BDF8]
                px-6
                text-sm
                font-semibold
                text-[#070B2A]
                shadow-[0_12px_40px_rgba(56,189,248,0.18)]
                transition-all
                duration-300
                hover:bg-[#7DD3FC]
                hover:shadow-[0_16px_50px_rgba(56,189,248,0.28)]
                sm:h-13
                sm:px-7
              "
            >
              {t("cta1")}

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#070B2A]/10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={16} strokeWidth={2} />
              </span>
            </Link>

            <Link
              href="/pages/about/ourProjects"
              className="
                inline-flex
                h-12
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/10
                px-6
                text-sm
                font-medium
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-white/30
                hover:bg-white/15
                sm:h-13
                sm:px-7
              "
            >
              {t("cta2")}
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] h-20 bg-gradient-to-t from-[#070B2A] to-transparent" />
    </section>
  );
};

export default Hero;