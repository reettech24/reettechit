"use client";

import React from "react";
import { Link } from "@/i18n/navigation";
import {
  ArrowUpRight,
  Code2,
  ShoppingCart,
  Headphones,
  TrendingUp,
  LayoutDashboard,
  Users,
  Database,
  Plug,
} from "lucide-react";

const nexusLogoImg = "/assets/images/Nexus India Logo-01.jpg";

const solutions = [
  {
    id: "01",
    product: "NEXUS INDIA",
    label: "SMALL BUSINESS TECHNOLOGY",

    title: "The Caring Market",

    description:
      "Practical, affordable and scalable technology helping India's small and medium-sized businesses move forward.",

    features: [
      {
        icon: Code2,
        title: "Affordable Tech",
        description: "Cost-effective technology tailored for SMEs.",
      },
      {
        icon: ShoppingCart,
        title: "Localized Tools",
        description: "Specialized tools for commerce and logistics.",
      },
      {
        icon: Headphones,
        title: "Easy Support",
        description: "Smooth onboarding with dedicated support.",
      },
      {
        icon: TrendingUp,
        title: "Built to Scale",
        description: "Technology that grows with your business.",
      },
    ],

    href: "https://nexusindiaonline.com",
    isExternal: true,
  },

  {
    id: "02",
    product: "NEXUS INDIA",
    label: "BUSINESS MANAGEMENT",

    title: "Business Management Software",

    description:
      "One connected platform to simplify operations, centralize information and help teams work smarter.",

    features: [
      {
        icon: LayoutDashboard,
        title: "Smart Dashboards",
        description: "Real-time analytics and dynamic visual reports.",
      },
      {
        icon: Users,
        title: "Role-Based Access",
        description: "Secure permissions for teams and staff.",
      },
      {
        icon: Database,
        title: "Centralized Data",
        description: "Unified information and collaboration tools.",
      },
      {
        icon: Plug,
        title: "Custom Integrations",
        description: "Connect REST APIs and third-party platforms.",
      },
    ],

    href: "//pages/about/ourProjects/chemical-erp",
  },
];

export default function AwsDigitalSolutionsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#070B2A] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-24 xl:px-24">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Blue atmosphere */}
        <div
          className="
            absolute
            left-[15%]
            top-[-320px]
            h-[620px]
            w-[850px]
            rounded-full
            bg-[#0F62FE]/[0.045]
            blur-[180px]
          "
        />

        {/* Orange atmosphere */}
        <div
          className="
            absolute
            left-[-180px]
            top-[20%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#FF6A00]/[0.035]
            blur-[180px]
          "
        />

        {/* Amber atmosphere */}
        <div
          className="
            absolute
            right-[5%]
            top-[38%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#FFB000]/[0.025]
            blur-[180px]
          "
        />

        {/* Cyan atmosphere */}
        <div
          className="
            absolute
            bottom-[-300px]
            right-[-150px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#38BDF8]/[0.03]
            blur-[180px]
          "
        />

        {/* Warm radial light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(255,122,0,0.035),transparent_38%)]" />

        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-[1320px]">


        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div>

            <div className="mb-6 flex items-center gap-3">

              <span className="h-px w-8 bg-[#FF7A00]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#FF9A3C]">
                Explore Our Digital Solutions
              </span>

            </div>


            <h2
              className="
                max-w-[760px]
                text-[42px]
                font-semibold
                leading-[0.96]
                tracking-[-0.055em]
                sm:text-[56px]
                lg:text-[76px]
              "
            >
              Technology that
              <br />

              <span className="bg-gradient-to-r from-[#FF8A00] via-[#FFB347] to-[#7DD3FC] bg-clip-text text-transparent">
                solves real problems.
              </span>
            </h2>

          </div>


          <div className="max-w-[430px] lg:pb-2">

            <p className="text-[15px] leading-7 text-slate-400 sm:text-[16px]">
              Designed to help businesses grow, adapt and lead in the
              digital era — with practical technology built around
              real-world needs.
            </p>

          </div>

        </div>


        {/* =====================================================
            PRODUCT GRID
        ===================================================== */}

        <div className="mt-14 grid gap-7 lg:grid-cols-2">

          {solutions.map((solution) => (
            <ProductCard
              key={solution.id}
              solution={solution}
            />
          ))}

        </div>

      </div>
    </section>
  );
}


/* =============================================================
   PRODUCT CARD
============================================================= */

function ProductCard({ solution }) {
  return (
    <article
      className="
        group
        relative
        min-h-[650px]
        overflow-hidden
        rounded-[26px]
        border
        border-[#FF7A00]/[0.13]
        bg-[linear-gradient(145deg,rgba(20,14,11,0.97),rgba(7,11,42,0.96))]
        shadow-[0_25px_80px_rgba(0,0,0,0.22)]
        transition-all
        duration-700
        hover:border-[#FF7A00]/30
        hover:shadow-[0_30px_100px_rgba(0,0,0,0.3)]
      "
    >

      {/* =====================================================
          TOP EDGE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-8
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#FF7A00]/70
          to-[#38BDF8]/30
        "
      />


      {/* =====================================================
          TOP RIGHT LASER
      ===================================================== */}

      <div className="pointer-events-none absolute right-0 top-0 h-[260px] w-[370px] overflow-hidden">

        {/* Dot field */}
        <div
          className="
            absolute
            right-[-25px]
            top-[10px]
            h-[160px]
            w-[220px]
            opacity-[0.13]
          "
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(125,211,252,.8) 1px, transparent 1px)",
            backgroundSize: "12px 12px",
            maskImage:
              "linear-gradient(135deg, transparent 10%, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(135deg, transparent 10%, black 60%, transparent 100%)",
          }}
        />

        {/* Curve */}
        <svg
          viewBox="0 0 370 240"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >

          <defs>

            <filter
              id={`topGlow-${solution.id}`}
              x="-30%"
              y="-30%"
              width="160%"
              height="160%"
            >

              <feGaussianBlur
                stdDeviation="4"
                result="blur"
              />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>

            </filter>

          </defs>


          <path
            d="M80,-20 Q175,110 390,130"
            fill="none"
            stroke="#00D2FF"
            strokeWidth="2.5"
            filter={`url(#topGlow-${solution.id})`}
          />

          <path
            d="M20,-10 Q145,90 370,105"
            fill="none"
            stroke="rgba(0,210,255,.3)"
            strokeWidth="1"
          />

        </svg>


        <div
          className="
            absolute
            right-[-110px]
            top-[-100px]
            h-[310px]
            w-[310px]
            rounded-full
            bg-[#00D2FF]/[0.055]
            blur-[80px]
          "
        />

      </div>


      {/* =====================================================
          ORANGE GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          left-[-100px]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#FF6A00]/[0.15]
          blur-[110px]
          transition-all
          duration-700
          group-hover:bg-[#FF6A00]/[0.20]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-170px]
          left-[20%]
          h-[300px]
          w-[400px]
          rounded-full
          bg-[#FFB000]/[0.055]
          blur-[110px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          right-[-100px]
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#0066FF]/[0.11]
          blur-[105px]
        "
      />


      {/* =====================================================
          CONNECTED WAVE
      ===================================================== */}

      <svg
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-[280px]
          w-full
          opacity-95
        "
        viewBox="0 0 600 300"
        preserveAspectRatio="none"
      >

        <defs>

          <linearGradient
            id={`orangeWave-${solution.id}`}
            x1="0%"
            y1="100%"
            x2="50%"
            y2="0%"
          >

            <stop
              offset="0%"
              stopColor="#FF4500"
              stopOpacity="0.34"
            />

            <stop
              offset="55%"
              stopColor="#FF7700"
              stopOpacity="0.15"
            />

            <stop
              offset="100%"
              stopColor="#FFAA00"
              stopOpacity="0"
            />

          </linearGradient>


          <linearGradient
            id={`blueWave-${solution.id}`}
            x1="100%"
            y1="100%"
            x2="50%"
            y2="0%"
          >

            <stop
              offset="0%"
              stopColor="#0066FF"
              stopOpacity="0.23"
            />

            <stop
              offset="55%"
              stopColor="#00D2FF"
              stopOpacity="0.09"
            />

            <stop
              offset="100%"
              stopColor="#00D2FF"
              stopOpacity="0"
            />

          </linearGradient>


          <filter
            id={`waveGlow-${solution.id}`}
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >

            <feGaussianBlur
              stdDeviation="4"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>

          </filter>

        </defs>


        {/* Orange body */}
        <path
          d="M-20,320 L-20,80 Q80,240 220,265 Q360,285 620,120 L620,320 Z"
          fill={`url(#orangeWave-${solution.id})`}
        />


        {/* Blue body */}
        <path
          d="M620,320 L620,100 Q420,240 280,260 Q150,275 -20,210 L-20,320 Z"
          fill={`url(#blueWave-${solution.id})`}
        />


        {/* Orange laser */}
        <path
          d="M-20,80 Q80,240 220,265 Q360,285 620,120"
          fill="none"
          stroke="#FF7B00"
          strokeWidth="3.2"
          filter={`url(#waveGlow-${solution.id})`}
        />


        {/* Cyan laser */}
        <path
          d="M-20,210 Q150,275 280,260 Q420,240 620,100"
          fill="none"
          stroke="#00D2FF"
          strokeWidth="2.7"
          filter={`url(#waveGlow-${solution.id})`}
        />


        {/* Secondary cyan line */}
        <path
          d="M60,280 Q200,295 320,270 Q460,240 620,70"
          fill="none"
          stroke="rgba(0,210,255,.30)"
          strokeWidth="1"
        />

      </svg>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[650px]
          flex-col
          p-8
          sm:p-9
          lg:p-10
        "
      >

        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-4">

            {/* Logo */}
            <div
              className="
                flex
                h-[62px]
                w-[62px]
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-[14px]
                border
                border-[#FF7A00]/20
                bg-white/[0.055]
                p-1
                shadow-[0_0_30px_rgba(255,122,0,0.07)]
              "
            >

              <img
                src={nexusLogoImg}
                alt="Nexus India"
                className="h-full w-full object-contain"
              />

            </div>


            <div>

              <div className="flex items-center gap-2">

                <span
                  className="
                    text-[12px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#FF8A00]
                  "
                >
                  {solution.product}
                </span>

                <span className="h-1 w-1 rounded-full bg-[#00D2FF]" />

              </div>


              <p
                className="
                  mt-1.5
                  text-[10px]
                  uppercase
                  tracking-[0.24em]
                  text-[#7DD3FC]/55
                "
              >
                {solution.label}
              </p>

            </div>

          </div>


          <span
            className="
              font-mono
              text-[11px]
              tracking-[0.2em]
              text-[#FF8A00]/30
            "
          >
            {solution.id}
          </span>

        </div>


        {/* ===================================================
            TITLE
        =================================================== */}

        <div className="mt-12 max-w-[600px]">

          <div className="mb-5 flex items-center gap-3">

            <span className="h-px w-8 bg-[#FF7A00]" />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.28em]
                text-[#FFB347]/60
              "
            >
              Digital Solution
            </span>

          </div>


          <h3
            className="
              text-[38px]
              font-semibold
              leading-[1]
              tracking-[-0.045em]
              text-white
              sm:text-[44px]
            "
          >
            {solution.title}
          </h3>


          <p
            className="
              mt-6
              max-w-[550px]
              text-[15px]
              leading-7
              text-slate-400
              sm:text-[16px]
            "
          >
            {solution.description}
          </p>

        </div>


        {/* ===================================================
            FEATURES
        =================================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-x-8
            gap-y-6
            border-t
            border-[#FF7A00]/[0.10]
            pt-7
            sm:grid-cols-2
          "
        >

          {solution.features.map((feature) => {

            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group/feature
                  flex
                  items-start
                  gap-3.5
                "
              >

                {/* Icon */}
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-[11px]
                    border
                    border-[#FF7A00]/20
                    bg-[#FF7A00]/[0.045]
                    transition-all
                    duration-300
                    group-hover/feature:border-[#FF7A00]/45
                    group-hover/feature:bg-[#FF7A00]/[0.09]
                    group-hover/feature:shadow-[0_0_20px_rgba(255,122,0,0.08)]
                  "
                >

                  <Icon
                    className="h-[17px] w-[17px] text-[#FFB347]"
                    strokeWidth={1.5}
                  />

                </div>


                {/* Text */}
                <div>

                  <h4
                    className="
                      text-[13px]
                      font-semibold
                      leading-5
                      text-white/85
                    "
                  >
                    {feature.title}
                  </h4>


                  <p
                    className="
                      mt-1
                      text-[11.5px]
                      leading-5
                      text-white/40
                    "
                  >
                    {feature.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>


        {/* ===================================================
            CTA
        =================================================== */}

        <div className="mt-auto pt-11">
          {solution.isExternal ? (
            <a
              href={solution.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group/cta
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#FF7A00]/50
                bg-[#FF7A00]/[0.09]
                px-6
                py-3
                text-[12px]
                font-semibold
                text-white
                shadow-[0_0_30px_rgba(255,122,0,0.06)]
                transition-all
                duration-300
                hover:border-[#FF8A00]/80
                hover:bg-[#FF7A00]/[0.16]
                hover:shadow-[0_0_30px_rgba(255,122,0,0.14)]
              "
            >
              <span>Learn More</span>
              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-[#FF7A00]
                  text-[#120D0A]
                  transition-transform
                  duration-300
                  group-hover/cta:translate-x-1
                "
              >
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          ) : (
            <Link
              href={solution.href}
              className="
                group/cta
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#FF7A00]/50
                bg-[#FF7A00]/[0.09]
                px-6
                py-3
                text-[12px]
                font-semibold
                text-white
                shadow-[0_0_30px_rgba(255,122,0,0.06)]
                transition-all
                duration-300
                hover:border-[#FF8A00]/80
                hover:bg-[#FF7A00]/[0.16]
                hover:shadow-[0_0_30px_rgba(255,122,0,0.14)]
              "
            >
              <span>Learn More</span>
              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-[#FF7A00]
                  text-[#120D0A]
                  transition-transform
                  duration-300
                  group-hover/cta:translate-x-1
                "
              >
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          )}
        </div>

      </div>

    </article>
  );
}