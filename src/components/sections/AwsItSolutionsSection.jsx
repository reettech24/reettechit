"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";

export default function AwsItSolutionsSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-white">

      {/* RIGHT IMAGE */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[65%]">

        <img
          src="/aboutheroimage6.jpg"
          alt="IT Solutions"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* LEFT FADE */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#050505]
            via-[#050505]/85
            via-[35%]
            to-transparent
          "
        />

        {/* TOP / BOTTOM FADE */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#050505]/30
            via-transparent
            to-[#050505]
          "
        />

        {/* SUBTLE IMAGE DESATURATION */}
        <div
          className="
            absolute
            inset-0
            bg-black/10
            mix-blend-multiply
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-[1500px]
          items-center
          px-6
          py-24
          sm:px-10
          lg:px-20
        "
      >

        <div className="w-full max-w-[620px]">

          {/* MICRO LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex items-center gap-4"
          >
            <span className="h-px w-7 bg-[#38BDF8]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-white/40">
              Service / IT Solutions
            </span>
          </motion.div>

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-[650px]
              text-5xl
              leading-[0.94]
              tracking-[-0.055em]
              sm:text-6xl
              md:text-7xl
              lg:text-[76px]
              xl:text-[88px]
              font-semibold
            "
          >
            Your Business
            <span className="block text-white/30">
              Progress Matters.
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="
              mt-8
              max-w-md
              text-sm
              leading-7
              text-white/45
              sm:text-base
            "
          >
            Building future-ready digital infrastructure and technology
            solutions that help businesses move forward.
          </motion.p>

          {/* POINTS */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-9 space-y-4"
          >

            <div className="flex items-center gap-4">
              <span className="h-px w-5 bg-white/20" />

              <span className="text-xs tracking-wide text-white/55">
                Personalised Client Consulting
              </span>
            </div>

            <div className="flex items-start gap-4">
              <span className="mt-2 h-px w-5 shrink-0 bg-white/20" />

              <span className="max-w-sm text-xs leading-6 tracking-wide text-white/55">
                End-to-end technology solutions built around your business.
              </span>
            </div>

          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link
              href="/pages/contact"
              className="
                group
                mt-10
                inline-flex
                items-center
                gap-4
                border-b
                border-white/20
                pb-3
                text-xs
                uppercase
                tracking-[0.18em]
                text-white
                transition-all
                duration-300
                hover:border-[#38BDF8]
                hover:text-[#38BDF8]
              "
            >
              Tell Us How Can We Help

              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </Link>
          </motion.div>

        </div>
      </div>

      {/* VERY SUBTLE BOTTOM LINE */}
      <div
        className="
          absolute
          bottom-0
          left-6
          right-6
          z-20
          h-px
          bg-white/[0.08]
          sm:left-10
          sm:right-10
          lg:left-20
          lg:right-20
        "
      />

    </section>
  );
}