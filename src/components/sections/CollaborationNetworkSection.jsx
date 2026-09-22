"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const collaborators = [
  {
    number: "01",
    name: "Nexgenex Labs",
    role: "Technology Collaboration",
    logo: "/company/client-5.png",
    url: "https://www.nexgenexlabs.com/",
  },
  {
    number: "02",
    name: "Texcarp",
    role: "Business Collaboration",
    logo: "/Client/Texcarp.png",
    url: "https://texcarp.vercel.app/",
  },
  {
    number: "03",
    name: "Beyond 6 Senses",
    role: "Creative Collaboration",
    logo: "/Client/beyond6senses.jpeg",
    url: "https://beyondsixsenses.com/",
  },
];

export default function CollaborationNetworkSection() {
  return (
    <section
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-[#050505]
        text-white
      "
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#f6a821]/[0.02]
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-32
            bg-gradient-to-b
            from-[#050505]
            to-transparent
          "
        />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-32
            bg-gradient-to-t
            from-[#050505]
            to-transparent
          "
        />
      </div>

      {/* Main content */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1600px]
          px-6
          py-20
          sm:px-10
          sm:py-24
          lg:px-16
          lg:py-28
          xl:px-20
        "
      >
        {/* =================================================
            HEADER
        ================================================== */}

        <div
          className="
            flex
            flex-col
            gap-8

            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:gap-16
          "
        >
          <div>
            {/* Label */}

            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#f6a821]/40" />

              <span
                className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-white/35
                "
              >
                Collaboration Network
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                max-w-[720px]
                text-[clamp(46px,6vw,78px)]
                font-semibold
                leading-[0.9]
                tracking-[-0.065em]
              "
            >
              Built through
              <br />

              <span className="text-white/25">
                collaboration.
              </span>
            </h2>
          </div>

          {/* Short description */}

          <p
            className="
              max-w-[390px]
              text-[13px]
              leading-[1.8]
              text-white/35
              lg:pb-2
            "
          >
            REET Technologies collaborates with specialized teams
            to bring technology, business and creative capabilities
            together.
          </p>
        </div>

        {/* =================================================
            COLLABORATORS
        ================================================== */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-4

            md:grid-cols-3
          "
        >
          {collaborators.map((item) => {
            const isExternal = item.url !== "#";

            return (
              <a
                key={item.name}
                href={item.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="
                  group
                  relative
                  block
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  p-6
                  backdrop-blur-2xl
                  transition-all
                  duration-500

                  hover:-translate-y-1
                  hover:border-[#f6a821]/20
                  hover:bg-white/[0.035]

                  sm:p-7
                  lg:p-8
                "
              >
                {/* Card glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-40
                    w-40
                    rounded-full
                    bg-white/[0.035]
                    blur-3xl
                    transition-transform
                    duration-700
                    group-hover:translate-x-5
                    group-hover:translate-y-5
                  "
                />

                {/* Top row */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      font-mono
                      text-[8px]
                      tracking-[0.2em]
                      text-white/20
                    "
                  >
                    {item.number}
                  </span>

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.07]
                      transition-all
                      duration-300
                      group-hover:border-[#f6a821]/30
                      group-hover:bg-[#f6a821]/[0.06]
                    "
                  >
                    <ArrowUpRight
                      className="
                        h-3.5
                        w-3.5
                        text-white/30
                        transition-colors
                        duration-300
                        group-hover:text-[#f6a821]
                      "
                    />
                  </div>
                </div>

                {/* Logo */}

                <div
                  className="
                    relative
                    z-10
                    mt-9
                    flex
                    h-[90px]
                    w-full
                    items-center
                  "
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    loading="lazy"
                    className="
                      max-h-[80px]
                      max-w-[75%]
                      object-contain
                      object-left
                      opacity-65
                      grayscale
                      brightness-[1.2]
                      transition-all
                      duration-500

                      group-hover:scale-[1.03]
                      group-hover:opacity-100
                      group-hover:grayscale-0
                      group-hover:brightness-100
                    "
                  />
                </div>

                {/* Bottom content */}

                <div className="relative z-10 mt-6">
                  <p
                    className="
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.25em]
                      text-[#f6a821]/60
                    "
                  >
                    {item.role}
                  </p>

                  <h3
                    className="
                      mt-2
                      text-[21px]
                      font-semibold
                      tracking-[-0.035em]
                      text-white
                    "
                  >
                    {item.name}
                  </h3>
                </div>

                {/* Bottom line */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-7
                    right-7
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.08]
                    to-transparent
                    transition-all
                    duration-500
                    group-hover:via-[#f6a821]/20
                  "
                />
              </a>
            );
          })}
        </div>
      </div>

      {/* Bottom hairline */}

      <div
        className="
          absolute
          bottom-0
          left-6
          right-6
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