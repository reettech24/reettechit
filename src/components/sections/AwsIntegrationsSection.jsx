"use client";

import React from "react";
import { motion } from "framer-motion";

const BACKGROUND_IMAGE = "/aboutheroimage2.jpg";

const logos = [
  {
    name: "Beyond 6 Senses",
    src: "/Client/beyond6senses.jpeg",
  },
  {
    name: "Civik",
    src: "/Client/civik-logo.svg",
  },
  {
    name: "Dimple Chem",
    src: "/Client/Dimple chem 1.jpg",
  },
  {
    name: "Happy Soul",
    src: "/Client/happy-soul-logo.jpg",
  },
  {
    name: "Vaachi Foundation",
    src: "/Client/vaachi-foundation.png",
  },
  {
    name: "Narendra Jain",
    src: "/Client/Narendra Jain Logo.jpg",
  },
  {
    name: "Sonali",
    src: "/Client/Sonali.png",
  },
  {
    name: "Texcarp",
    src: "/Client/Texcarp.png",
  },
];

const LogoCard = ({ logo }) => (
  <div
    className="
      group
      relative
      flex
      h-[145px]
      w-full
      shrink-0
      items-center
      justify-center
      overflow-hidden
      rounded-[24px]
      border
      border-white/[0.07]
      bg-[#0b0b0b]/70
      shadow-[0_20px_60px_rgba(0,0,0,0.35)]
      backdrop-blur-2xl
      transition-all
      duration-500
      hover:-translate-y-1
      hover:border-[#f6a821]/25
      hover:bg-[#101010]/80
      hover:shadow-[0_25px_70px_rgba(0,0,0,0.45)]
      sm:h-[160px]
      sm:rounded-[28px]
      lg:h-[170px]
      lg:rounded-[30px]
    "
  >
    {/* Liquid white reflection */}
    <div
      className="
        pointer-events-none
        absolute
        -left-20
        -top-20
        h-48
        w-48
        rounded-full
        bg-white/[0.055]
        blur-3xl
        transition-transform
        duration-700
        group-hover:translate-x-8
        group-hover:translate-y-6
      "
    />

    {/* Gold reflection */}
    <div
      className="
        pointer-events-none
        absolute
        -bottom-24
        -right-20
        h-48
        w-48
        rounded-full
        bg-[#f6a821]/[0.05]
        blur-3xl
        transition-transform
        duration-700
        group-hover:-translate-x-6
        group-hover:-translate-y-6
      "
    />

    {/* Top glass highlight */}
    <div
      className="
        pointer-events-none
        absolute
        left-8
        right-8
        top-0
        h-px
        bg-gradient-to-r
        from-transparent
        via-white/[0.14]
        to-transparent
      "
    />

    {/* Soft inner gradient */}
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        rounded-[inherit]
        bg-gradient-to-br
        from-white/[0.025]
        via-transparent
        to-[#f6a821]/[0.02]
        opacity-80
      "
    />

    {/* Logo */}
    <div
      className="
        relative
        z-10
        flex
        h-[105px]
        w-[88%]
        items-center
        justify-center
        sm:h-[115px]
        sm:w-[90%]
        lg:h-[125px]
        lg:w-[90%]
      "
    >
      <img
        src={logo.src}
        alt={logo.name}
        loading="lazy"
        className="
          block
          h-full
          w-full
          object-contain
          object-center
          opacity-65
          grayscale
          brightness-[1.25]
          transition-all
          duration-500
          group-hover:scale-[1.04]
          group-hover:opacity-100
          group-hover:grayscale-0
          group-hover:brightness-100
        "
      />
    </div>

    {/* Bottom hover glow */}
    <div
      className="
        pointer-events-none
        absolute
        bottom-0
        left-1/2
        h-10
        w-[65%]
        -translate-x-1/2
        rounded-full
        bg-[#f6a821]/[0.025]
        blur-2xl
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
      "
    />
  </div>
);

export default function AwsIntegrationsSection() {
  const leftLogos = [...logos, ...logos];

  const rightLogos = [
    ...logos.slice(4),
    ...logos,
    ...logos.slice(0, 4),
  ];

  return (
    <section
      className="
        relative
        isolate
        min-h-[100svh]
        w-full
        overflow-hidden
        bg-[#050505]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={BACKGROUND_IMAGE}
          alt=""
          aria-hidden="true"
          className="
            absolute
            right-[-5%]
            top-1/2
            h-[115%]
            w-[72%]
            -translate-y-1/2
            object-cover
            object-center
            opacity-[0.32]
            grayscale
            max-lg:right-[-15%]
            max-lg:w-[80%]
            max-lg:opacity-[0.24]
            max-md:right-[-25%]
            max-md:w-[95%]
            max-md:opacity-[0.18]
          "
        />

        {/* Left fade */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#050505]
            via-[#050505]/[0.94]
            via-[55%]
            to-[#050505]/[0.35]
            max-md:bg-gradient-to-b
            max-md:from-[#050505]
            max-md:via-[#050505]/[0.88]
            max-md:to-[#050505]/[0.45]
          "
        />

        {/* Top fade */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-[28%]
            bg-gradient-to-b
            from-[#050505]
            to-transparent
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[25%]
            bg-gradient-to-t
            from-[#050505]
            to-transparent
          "
        />

        {/* Overall darkening */}
        <div className="absolute inset-0 bg-black/[0.12]" />
      </div>

      {/* =====================================================
          GOLD ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-1/2
          z-[1]
          h-[620px]
          w-[620px]
          -translate-y-1/2
          rounded-full
          bg-[#f6a821]/[0.035]
          blur-[140px]
          max-md:right-[-280px]
          max-md:h-[500px]
          max-md:w-[500px]
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[100svh]
          w-full
          max-w-[1600px]
          grid-cols-1
          items-center
          gap-14
          px-6
          py-20
          sm:px-10
          sm:py-24
          lg:grid-cols-[0.8fr_1.2fr]
          lg:gap-20
          lg:px-16
          lg:py-16
          xl:px-20
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <div
          className="
            relative
            z-10
            max-lg:text-center
          "
        >
          {/* Label */}

          <div
            className="
              mb-8
              flex
              items-center
              gap-3
              max-lg:justify-center
            "
          >
            <span className="h-px w-7 bg-white/15" />

            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/35
              "
            >
              Our Network
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              max-w-[680px]
              text-[clamp(54px,6.5vw,84px)]
              font-semibold
              leading-[0.88]
              tracking-[-0.065em]
              text-white
              max-lg:mx-auto
              max-md:text-[48px]
              max-md:leading-[0.92]
            "
          >
            Built around
            <br />

            <span className="text-white/25">
              real businesses.
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-9
              max-w-[420px]
              text-[14px]
              leading-[1.8]
              tracking-[-0.01em]
              text-white/40
              max-lg:mx-auto
              max-md:mt-7
              max-md:text-[13px]
            "
          >
            Digital products and systems created for businesses
            building what comes next.
          </p>

          {/* Selected Clients */}

          <div
            className="
              mt-12
              flex
              items-center
              gap-4
              max-lg:justify-center
              max-md:mt-9
            "
          >
            <span className="h-px w-12 bg-white/15" />

            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.28em]
                text-white/30
              "
            >
              Selected Clients
            </span>
          </div>
        </div>

        {/* =================================================
            LOGO WALL
        ================================================== */}

        <div
          className="
            relative
            h-[580px]
            w-full
            overflow-hidden
            sm:h-[650px]
            lg:h-[680px]
            max-md:h-[500px]
          "
        >
          {/* Top fade */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              z-30
              h-28
              bg-gradient-to-b
              from-[#050505]
              via-[#050505]/90
              to-transparent
            "
          />

          {/* Bottom fade */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              z-30
              h-28
              bg-gradient-to-t
              from-[#050505]
              via-[#050505]/90
              to-transparent
            "
          />

          {/* =================================================
              TWO COLUMN LOGO WALL
          ================================================== */}

          <div
            className="
              grid
              h-full
              grid-cols-2
              gap-4
              sm:gap-6
              max-md:gap-3
            "
          >
            {/* LEFT COLUMN */}

            <div className="overflow-hidden">
              <motion.div
                className="
                  flex
                  flex-col
                  gap-4
                  sm:gap-6
                  max-md:gap-3
                "
                animate={{
                  y: ["0%", "-50%"],
                }}
                transition={{
                  duration: 34,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {leftLogos.map((logo, index) => (
                  <LogoCard
                    key={`left-${logo.name}-${index}`}
                    logo={logo}
                  />
                ))}
              </motion.div>
            </div>

            {/* RIGHT COLUMN */}

            <div
              className="
                overflow-hidden
                pt-16
                max-md:pt-10
              "
            >
              <motion.div
                className="
                  flex
                  flex-col
                  gap-4
                  sm:gap-6
                  max-md:gap-3
                "
                animate={{
                  y: ["-50%", "0%"],
                }}
                transition={{
                  duration: 38,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {rightLogos.map((logo, index) => (
                  <LogoCard
                    key={`right-${logo.name}-${index}`}
                    logo={logo}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM HAIRLINE
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-6
          right-6
          z-20
          h-px
          bg-white/[0.07]
          sm:left-10
          sm:right-10
          lg:left-16
          lg:right-16
          xl:left-20
          xl:right-20
        "
      />
    </section>
  );
}