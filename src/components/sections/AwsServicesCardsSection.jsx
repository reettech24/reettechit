"use client";

import React, { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import {
  ArrowUpRight,
  Cloud,
  Database,
  HardDrive,
  Server,
  ShieldCheck,
  Cpu,
  Globe,
  Terminal,
  Boxes,
} from "lucide-react";

const slides = [
  {
    id: "aws",
    bg: "/assets/images/BG image.png",
    category: "AWS & DEVOPS",

    title: (
      <>
        Cloud
        <br />
        <span className="text-[#E2B141]">Controled</span>
        <br />
        <span className="text-white"> Performance</span>
      </>
    ),

    description:
      "End-to-end AWS and DevOps solutions designed to give your business greater control, security, reliability and performance.",

    route: "/services/aws-data-security",

    features: [
      {
        title: "Server Management",
        description: "Reliable infrastructure management.",
        icon: Server,
      },
      {
        title: "Compute Services",
        description: "Scalable environments for modern workloads.",
        icon: Cpu,
      },
      {
        title: "Database Services",
        description: "Secure and optimized database infrastructure.",
        icon: Database,
      },
      {
        title: "Storage Services",
        description: "Flexible storage for critical business data.",
        icon: HardDrive,
      },
    ],
  },

  {
    id: "server",
    bg: "/assets/images/ServerBG.png",
    category: "INFRASTRUCTURE",

    title: (
    <>
        Server
        <br />
        <span className="text-white">without</span>
        <br />
        <span className="text-[#E2B141]">Compromise</span>
      </>
    ),

    description:
      "From cloud servers to Linux environments, we build and manage reliable infrastructure that keeps your digital products running smoothly.",

    route: "/services/aws-data-security#server-management-section",

    features: [
      {
        title: "Cloud Servers",
        description: "Scalable and secure cloud environments.",
        icon: Cloud,
      },
      {
        title: "Web Servers",
        description: "Optimized environments for speed and stability.",
        icon: Globe,
      },
      {
        title: "VPS",
        description: "Flexible virtual infrastructure with control.",
        icon: Boxes,
      },
      {
        title: "Linux Servers",
        description: "Secure Linux environments for your stack.",
        icon: Terminal,
      },
    ],
  },

  {
    id: "data",
    bg: "/assets/images/DataManagementBG.png",
    category: "DATA & CLOUD",

    title: (
      <>
        Data
        <br />
        <span className="text-[#E2B141]">Scaling</span>
        <br />
        <span className="text-white">Performance</span>
      </>
    ),

    description:
      "Smart solutions for data migration, storage, security and cloud environments designed to scale with your business.",

    route: "/services/cloud-solutions",

    features: [
      {
        title: "Data Migration",
        description: "Seamless migration with minimal disruption.",
        icon: Database,
      },
      {
        title: "Data Storage",
        description: "Reliable and scalable business storage.",
        icon: HardDrive,
      },
      {
        title: "Data Security",
        description: "Layered protection for critical information.",
        icon: ShieldCheck,
      },
      {
        title: "Cloud Solutions",
        description: "Connected cloud environments for your business.",
        icon: Cloud,
      },
    ],
  },
];

function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <div
      className="
        group
        flex
        min-h-[82px]
        flex-col
        items-center
        justify-center
        rounded-2xl
        px-3
        py-4
        text-center

        border-[0.2px]
        border-[#E2B141]/20

        transition-all
        duration-300

        hover:border-[#E2B141]/30
        hover:bg-white/[0.025]
        hover:shadow-[0_0_30px_rgba(226,177,65,0.08)]

        sm:min-h-0
        sm:px-5
        sm:py-5
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          transition-transform
          duration-300
          group-hover:-translate-y-1

          sm:h-10
          sm:w-10
        "
      >
        <Icon
          className="
            h-8
            w-8
            text-[#E2B141]
            transition-all
            duration-300
            group-hover:text-[#F2C55C]
            group-hover:drop-shadow-[0_0_10px_rgba(226,177,65,0.35)]

            sm:h-10
            sm:w-10
          "
          strokeWidth={1.4}
        />
      </div>

      {/* Text */}
      <div className="mt-2.5 sm:mt-3">
        <h3
          className="
            text-[11px]
            font-semibold
            leading-tight
            tracking-[-0.01em]
            text-white
            transition-colors
            duration-300
            group-hover:text-[#F2C55C]

            sm:text-[16px]
          "
        >
          {feature.title}
        </h3>
      </div>
    </div>
  );
}

export default function AwsServicesCardsSection() {
  const sectionRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      window.requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();

        const scrollTop = Math.max(-rect.top, 0);

        /*
         * Desktop:
         * Keep the original 1 viewport = 1 slide behavior.
         *
         * Mobile:
         * Give each slide slightly more vertical breathing room.
         */
        const isMobile = window.innerWidth < 640;

        const viewportStep = isMobile
          ? window.innerHeight * 1.08
          : window.innerHeight;

        const slide = Math.min(
          slides.length - 1,
          Math.floor(
            (scrollTop + window.innerHeight * 0.5) /
              viewportStep
          )
        );

        setActiveSlide(slide);

        ticking = false;
      });

      ticking = true;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        bg-[#070B2A]

        h-[324vh]
        lg:h-[300vh]
      "
    >
      <div
        className="
          sticky
          top-0
          h-[100svh]
          min-h-[600px]
          w-full
          overflow-hidden
          bg-[#070B2A]

          sm:min-h-[680px]
        "
      >
        {/* =====================================================
            BACKGROUNDS
        ===================================================== */}

        {slides.map((slide, index) => {
          const isActive = index === activeSlide;

          return (
            <div
              key={slide.id}
              className={`
                absolute inset-0
                transition-all duration-[1000ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]

                ${
                  isActive
                    ? "z-20 scale-100 opacity-100"
                    : "z-0 scale-[1.03] opacity-0"
                }
              `}
            >
              {/* Image */}
              <div
                className="
                  absolute
                  inset-0
                  bg-cover
                  bg-center
                  bg-no-repeat

                  max-sm:bg-[position:62%_center]
                "
                style={{
                  backgroundImage: `url("${slide.bg}")`,
                }}
              />

              {/* Very light readability overlay */}
              <div className="absolute inset-0 bg-[#070B2A]/20" />

              {/* Only darken the content side */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#070B2A]/80 via-[#070B2A]/35 to-transparent" />

              {/* Bottom subtle fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent" />
            </div>
          );
        })}

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div
          className="
            relative
            z-30
            mx-auto
            flex
            h-full
            w-full
            max-w-[1440px]
            items-center

            px-5
            sm:px-10
            lg:px-16
            xl:px-24
          "
        >
          {slides.map((slide, index) => {
            const isActive = index === activeSlide;

            return (
              <div
                key={slide.id}
                className={`
                  absolute
                  left-5
                  right-5
                  top-1/2

                  sm:left-10
                  sm:right-10

                  lg:left-16
                  lg:right-16

                  xl:left-24
                  xl:right-24

                  transition-all
                  duration-[750ms]
                  ease-[cubic-bezier(0.16,1,0.3,1)]

                  ${
                    isActive
                      ? "-translate-y-1/2 translate-x-0 opacity-100"
                      : "-translate-y-[45%] translate-x-8 opacity-0 pointer-events-none"
                  }
                `}
              >
                <div
                  className="
                    grid
                    items-center
                    gap-7

                    sm:gap-10

                    lg:grid-cols-[1fr_0.8fr]
                    lg:gap-16
                  "
                >
                  {/* =================================================
                      LEFT CONTENT
                  ================================================= */}

                  <div className="max-w-[700px]">
                    {/* Label */}
                    <div
                      className="
                        mb-5
                        flex
                        items-center
                        gap-3

                        sm:mb-7
                      "
                    >
                      <span className="h-px w-6 bg-[#38BDF8] sm:w-7" />

                      <span
                        className="
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.24em]
                          text-[#7DD3FC]

                          sm:text-[10px]
                          sm:tracking-[0.3em]
                        "
                      >
                        {slide.category}
                      </span>
                    </div>

                    {/* Heading */}
                    <h2
                      className="
                        text-[40px]
                        font-semibold
                        leading-[0.98]
                        tracking-[-0.05em]
                        text-white

                        sm:text-[56px]

                        lg:text-[68px]

                        xl:text-[76px]
                      "
                    >
                      {slide.title}
                    </h2>

                    {/* Description */}
                    <p
                      className="
                        mt-5
                        max-w-[560px]
                        text-[13px]
                        leading-6
                        text-slate-300

                        sm:mt-7
                        sm:text-[16px]
                        sm:leading-7
                      "
                    >
                      {slide.description}
                    </p>

                    {/* Feature Cards */}
                    <div
                      className="
                        mt-6
                        grid
                        grid-cols-2
                        gap-2.5

                        sm:mt-8
                        sm:grid-cols-4
                        sm:gap-3
                      "
                    >
                      {slide.features.map((feature) => (
                        <FeatureCard
                          key={feature.title}
                          feature={feature}
                        />
                      ))}
                    </div>

                    {/* =================================================
                        MOBILE CTA
                    ================================================= */}

                    <div
                      className="
                        mt-6
                        flex
                        lg:hidden
                      "
                    >
                      <Link
                        href={slide.route}
                        className="
                          group
                          relative
                          inline-flex
                          items-center
                          gap-3
                          overflow-hidden
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.025]
                          py-1.5
                          pl-5
                          pr-1.5
                          text-[13px]
                          font-semibold
                          text-white
                          backdrop-blur-sm
                          transition-all
                          duration-500

                          hover:-translate-y-1
                          hover:border-[#38BDF8]/50
                          hover:bg-[#38BDF8]/[0.08]
                          hover:text-[#7DD3FC]
                          hover:shadow-[0_10px_35px_rgba(56,189,248,0.12)]
                        "
                      >
                        {/* Hover sweep */}
                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#38BDF8]/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                        <span className="relative z-10">
                          Explore More
                        </span>

                        {/* Arrow */}
                        <span
                          className="
                            relative
                            z-10
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.04]
                            transition-all
                            duration-500

                            group-hover:rotate-45
                            group-hover:border-[#38BDF8]/50
                            group-hover:bg-[#38BDF8]/15
                          "
                        >
                          <ArrowUpRight
                            className="
                              h-4
                              w-4
                              transition-transform
                              duration-500

                              group-hover:-rotate-45
                              group-hover:scale-110
                            "
                          />
                        </span>
                      </Link>
                    </div>
                  </div>

                  {/* =================================================
                      RIGHT CTA
                  ================================================= */}

                  <div className="hidden h-full min-h-[220px] flex-col items-end justify-end lg:flex">
                    <Link
                      href={slide.route}
                      className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full border border-white/10 bg-white/[0.025] py-2 pl-6 pr-2 text-[16px] font-semibold text-white backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#38BDF8]/50 hover:bg-[#38BDF8]/[0.08] hover:text-[#7DD3FC] hover:shadow-[0_10px_35px_rgba(56,189,248,0.12)]"
                    >
                      {/* Hover sweep */}
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#38BDF8]/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                      <span className="relative z-10">
                        Explore More
                      </span>

                      {/* Arrow */}
                      <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-all duration-500 group-hover:rotate-45 group-hover:border-[#38BDF8]/50 group-hover:bg-[#38BDF8]/15">
                        <ArrowUpRight
                          className="h-5 w-5 transition-transform duration-500 group-hover:-rotate-45 group-hover:scale-110"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            MOBILE SLIDE INDICATOR
        ===================================================== */}

        <div className="absolute bottom-5 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1.5 lg:hidden">
          {slides.map((slide, index) => (
            <span
              key={slide.id}
              className={`
                h-1
                rounded-full
                transition-all
                duration-500

                ${
                  index === activeSlide
                    ? "w-7 bg-[#E2B141]"
                    : "w-2 bg-white/25"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}