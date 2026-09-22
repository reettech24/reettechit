"use client";

import React from "react";
import {
  Award,
  BriefcaseBusiness,
  Code2,
  Database,
  Headphones,
  MessageSquare,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react";

const logoImg = "/assets/images/REET TECH only logo.png";

const reasons = [
  {
    id: "01",
    title: "20+ Years of Technology Expertise",
    description:
      "Two decades of experience delivering innovative, reliable and future-ready technology solutions.",
    icon: Award,
  },
  {
    id: "02",
    title: "Industry-Focused Solutions",
    description:
      "Tailored solutions designed around the unique challenges and goals of every business.",
    icon: BriefcaseBusiness,
  },
  {
    id: "03",
    title: "End-to-End IT Services",
    description:
      "From consulting and strategy to development, deployment and ongoing support.",
    icon: Code2,
  },
  {
    id: "04",
    title: "Scalable & Secure Architecture",
    description:
      "Robust technology foundations designed to scale securely with your business.",
    icon: Database,
  },
  {
    id: "05",
    title: "Dedicated Technical Support",
    description:
      "Experienced technical support whenever your business needs it.",
    icon: Headphones,
  },
  {
    id: "06",
    title: "On-Time Project Delivery",
    description:
      "Structured processes and agile delivery designed to keep projects moving.",
    icon: Rocket,
  },
  {
    id: "07",
    title: "Transparent Communication",
    description:
      "Clear, open and consistent communication throughout every stage of delivery.",
    icon: MessageSquare,
  },
  {
    id: "08",
    title: "Long-Term Partnerships",
    description:
      "We build lasting relationships and become a technology partner in your growth.",
    icon: Users,
  },
];

export default function AwsChooseUsSection() {
  return (
    <section
      className="
        relative isolate w-full overflow-hidden
        bg-[#030712]
        px-5 py-20
        text-white

        sm:px-8 sm:py-24

        md:px-12

        lg:px-20 lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top electric blue glow */}
        <div
          className="
            absolute
            left-1/2
            top-[-380px]
            h-[720px]
            w-[1100px]
            -translate-x-1/2
            rounded-full
            bg-[#0F62FE]/[0.10]
            blur-[180px]
          "
        />

        {/* Right cyan atmosphere */}
        <div
          className="
            absolute
            right-[-260px]
            top-[28%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#38BDF8]/[0.055]
            blur-[180px]
          "
        />

        {/* Bottom cobalt atmosphere */}
        <div
          className="
            absolute
            bottom-[-300px]
            left-[-220px]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#1E40AF]/[0.09]
            blur-[180px]
          "
        />

        {/* Central radial light */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_50%_48%,rgba(15,98,254,0.07),transparent_34%)]
          "
        />

        {/* Technical grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.018]
            [background-image:linear-gradient(rgba(125,211,252,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.5)_1px,transparent_1px)]
            [background-size:100px_100px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1440px]">
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div
          className="
            grid gap-8

            lg:grid-cols-[1.2fr_0.8fr]
            lg:items-end
            lg:gap-24
          "
        >
          {/* LEFT */}
          <div>
            <div className="mb-6 flex items-center gap-3 sm:mb-7">
              <span
                className="
                  h-px w-8
                  bg-[#38BDF8]
                  shadow-[0_0_16px_rgba(56,189,248,0.55)]
                  sm:w-9
                "
              />

              <span
                className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.28em]
                  text-[#7DD3FC]/70
                  sm:tracking-[0.32em]
                "
              >
                Why Choose Us
              </span>
            </div>

            <h2
              className="
                max-w-5xl
                text-[42px]
                font-semibold
                leading-[0.96]
                tracking-[-0.055em]

                sm:text-5xl

                md:text-6xl

                lg:text-[76px]
                lg:leading-[0.94]
                lg:tracking-[-0.06em]
              "
            >
              Technology built

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-white
                  via-[#60A5FA]
                  to-[#38BDF8]
                  bg-clip-text
                  text-transparent
                "
              >
                around your growth.
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="lg:pb-2">
            <p
              className="
                max-w-md
                text-[13px]
                leading-6
                text-white/40

                sm:text-[15px]
                sm:leading-7
              "
            >
              Experience, engineering discipline and long-term thinking
              combined into technology partnerships built to move your
              business forward.
            </p>

            <div className="mt-6 flex items-center gap-3 sm:mt-7">
              <span className="h-px w-7 bg-white/15 sm:w-8" />

              <span
                className="
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.24em]
                  text-white/25
                  sm:tracking-[0.28em]
                "
              >
                The Nexgenex Approach
              </span>
            </div>
          </div>
        </div>

        {/* ===================================================
            MAIN TECHNOLOGY SYSTEM
        ==================================================== */}

        <div className="relative mt-14 sm:mt-16 lg:mt-24">
          {/* =================================================
              DESKTOP CONNECTING CIRCUITS
          ================================================== */}

          <svg
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              hidden
              h-full
              w-full
              lg:block
            "
            viewBox="0 0 1400 900"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* LEFT */}
            <path
              d="M 510 145 C 580 145, 610 300, 660 360"
              stroke="rgba(56,189,248,0.18)"
              strokeWidth="1"
            />

            <path
              d="M 510 350 C 570 350, 610 370, 660 390"
              stroke="rgba(56,189,248,0.18)"
              strokeWidth="1"
            />

            <path
              d="M 510 555 C 570 555, 610 430, 660 410"
              stroke="rgba(56,189,248,0.18)"
              strokeWidth="1"
            />

            <path
              d="M 510 760 C 580 760, 610 500, 660 440"
              stroke="rgba(56,189,248,0.18)"
              strokeWidth="1"
            />

            {/* RIGHT */}
            <path
              d="M 890 360 C 940 300, 980 145, 1040 145"
              stroke="rgba(56,189,248,0.18)"
              strokeWidth="1"
            />

            <path
              d="M 890 390 C 940 370, 980 350, 1040 350"
              stroke="rgba(56,189,248,0.18)"
              strokeWidth="1"
            />

            <path
              d="M 890 410 C 940 430, 980 555, 1040 555"
              stroke="rgba(56,189,248,0.18)"
              strokeWidth="1"
            />

            <path
              d="M 890 440 C 940 500, 980 760, 1040 760"
              stroke="rgba(56,189,248,0.18)"
              strokeWidth="1"
            />

            {/* ACTIVE PATHS */}
            <path
              d="M 510 350 C 570 350, 610 370, 660 390"
              stroke="#38BDF8"
              strokeWidth="1"
              strokeDasharray="3 9"
              opacity="0.55"
            />

            <path
              d="M 890 390 C 940 370, 980 350, 1040 350"
              stroke="#38BDF8"
              strokeWidth="1"
              strokeDasharray="3 9"
              opacity="0.55"
            />
          </svg>

          {/* =================================================
              DESKTOP
          ================================================== */}

          <div
            className="
              relative
              z-10
              hidden

              lg:grid
              lg:grid-cols-[1fr_300px_1fr]
              lg:items-center
              lg:gap-14
            "
          >
            {/* LEFT */}
            <div className="flex flex-col gap-5">
              {reasons.slice(0, 4).map((reason) => {
                const Icon = reason.icon;

                return (
                  <ReasonCard
                    key={reason.id}
                    reason={reason}
                    Icon={Icon}
                  />
                );
              })}
            </div>

            {/* CORE */}
            <TechnologyCore />

            {/* RIGHT */}
            <div className="flex flex-col gap-5">
              {reasons.slice(4, 8).map((reason) => {
                const Icon = reason.icon;

                return (
                  <ReasonCard
                    key={reason.id}
                    reason={reason}
                    Icon={Icon}
                  />
                );
              })}
            </div>
          </div>

          {/* =================================================
              MOBILE + TABLET
          ================================================== */}

          <div
            className="
              relative
              z-10

              lg:hidden
            "
          >
            {/* Core */}
            <div className="mb-8 sm:mb-10">
              <TechnologyCore />
            </div>

            {/* Cards */}
            <div
              className="
                grid
                grid-cols-1
                gap-3

                sm:grid-cols-2
                sm:gap-4
              "
            >
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <ReasonCard
                    key={reason.id}
                    reason={reason}
                    Icon={Icon}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM LINE
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-5
          right-5
          h-px
          bg-white/[0.06]

          sm:left-8
          sm:right-8

          md:left-12
          md:right-12

          lg:left-20
          lg:right-20
        "
      />
    </section>
  );
}

/* ===========================================================
   REASON CARD
=========================================================== */

function ReasonCard({ reason, Icon }) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[18px]

        border
        border-white/[0.075]

        bg-[rgba(15,30,66,0.55)]

        px-5
        py-5

        shadow-[0_15px_45px_rgba(0,0,0,0.20)]

        backdrop-blur-2xl

        transition-all
        duration-500

        hover:-translate-y-1
        hover:border-[#38BDF8]/25
        hover:bg-[rgba(15,30,66,0.68)]
        hover:shadow-[0_20px_55px_rgba(15,98,254,0.12)]

        sm:px-5
        sm:py-5

        lg:min-h-[150px]
      "
    >
      {/* Subtle blue atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-36
          w-36
          rounded-full
          bg-[#0F62FE]/[0.06]
          blur-3xl
          transition-all
          duration-700
          group-hover:scale-125
          group-hover:bg-[#0F62FE]/[0.10]
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 flex items-start gap-3.5 sm:gap-4">
        {/* ICON */}
        <div
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-[10px]

            border
            border-[#38BDF8]/15

            bg-[#0F62FE]/[0.07]

            text-[#60A5FA]

            transition-all
            duration-500

            group-hover:border-[#38BDF8]/30
            group-hover:bg-[#0F62FE]/[0.12]
            group-hover:text-[#38BDF8]

            sm:h-10
            sm:w-10
          "
        >
          <Icon
            size={17}
            strokeWidth={1.5}
          />
        </div>

        {/* TEXT */}
        <div className="min-w-0 flex-1">
          {/* NUMBER */}
          <div className="mb-2 flex items-center gap-2">
            <span
              className="
                font-mono
                text-[8px]
                tracking-[0.25em]
                text-[#38BDF8]/45
              "
            >
              {reason.id}
            </span>

            <span className="h-px w-4 bg-white/[0.08]" />
          </div>

          {/* TITLE */}
          <h3
            className="
              text-[14px]
              font-medium
              leading-[1.3]
              tracking-[-0.015em]
              text-white/85

              transition-colors
              duration-300

              group-hover:text-white

              sm:text-[15px]
            "
          >
            {reason.title}
          </h3>

          {/* DESCRIPTION */}
          <p
            className="
              mt-1.5
              max-w-[340px]
              text-[10px]
              leading-[1.6]
              text-white/30

              transition-colors
              duration-300

              group-hover:text-white/40

              sm:text-[11px]
              sm:leading-[1.65]
            "
          >
            {reason.description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ===========================================================
   TECHNOLOGY CORE
=========================================================== */

function TechnologyCore() {
  return (
    <div
      className="
        relative
        flex
        min-h-[270px]
        items-center
        justify-center

        sm:min-h-[300px]

        lg:min-h-[360px]
      "
    >
      {/* OUTER ATMOSPHERE */}
      <div
        className="
          pointer-events-none
          absolute
          h-[240px]
          w-[240px]
          rounded-full
          bg-[#0F62FE]/[0.06]
          blur-[70px]

          sm:h-[280px]
          sm:w-[280px]

          lg:h-[320px]
          lg:w-[320px]
          lg:blur-[80px]
        "
      />

      {/* OUTER RING */}
      <div
        className="
          absolute
          h-[210px]
          w-[210px]
          rounded-full
          border
          border-[#38BDF8]/[0.10]

          shadow-[0_0_60px_rgba(15,98,254,0.08)]

          sm:h-[235px]
          sm:w-[235px]

          lg:h-[270px]
          lg:w-[270px]
        "
      />

      {/* SECOND RING */}
      <div
        className="
          absolute
          h-[165px]
          w-[165px]
          rounded-full
          border
          border-[#60A5FA]/[0.12]

          sm:h-[185px]
          sm:w-[185px]

          lg:h-[215px]
          lg:w-[215px]
        "
      />

      {/* TECHNICAL DASH RING */}
      <div
        className="
          absolute
          h-[135px]
          w-[135px]
          rounded-full
          border
          border-dashed
          border-[#38BDF8]/[0.16]

          sm:h-[150px]
          sm:w-[150px]

          lg:h-[175px]
          lg:w-[175px]
        "
      />

      {/* CORE */}
      <div
        className="
          relative
          flex
          h-[105px]
          w-[105px]
          items-center
          justify-center

          rounded-full

          border
          border-[#38BDF8]/20

          bg-[rgba(15,30,66,0.72)]

          shadow-[0_0_60px_rgba(15,98,254,0.22),inset_0_1px_1px_rgba(255,255,255,0.10)]

          backdrop-blur-2xl

          sm:h-[115px]
          sm:w-[115px]

          lg:h-[130px]
          lg:w-[130px]
        "
      >
        {/* CORE LIGHT */}
        <div
          className="
            pointer-events-none
            absolute
            inset-4
            rounded-full
            bg-[#0F62FE]/[0.10]
            blur-2xl
          "
        />

        {/* LOGO */}
        <div
          className="
            relative
            z-10
            flex
            h-[62px]
            w-[62px]
            items-center
            justify-center

            sm:h-[68px]
            sm:w-[68px]

            lg:h-[76px]
            lg:w-[76px]
          "
        >
          <img
            src={logoImg}
            alt="REET Technologies Logo"
            loading="eager"
            className="
              max-h-full
              max-w-full
              object-contain
              opacity-90
              brightness-[1.1]
              contrast-[1.05]
            "
          />
        </div>
      </div>

      {/* CORE DOTS */}
      <span
        className="
          absolute
          left-[18%]
          top-[32%]
          h-1
          w-1
          rounded-full
          bg-[#38BDF8]
          shadow-[0_0_15px_rgba(56,189,248,0.8)]
          sm:h-1.5
          sm:w-1.5
        "
      />

      <span
        className="
          absolute
          bottom-[28%]
          right-[16%]
          h-1
          w-1
          rounded-full
          bg-[#60A5FA]
          shadow-[0_0_12px_rgba(96,165,250,0.8)]
        "
      />

      <span
        className="
          absolute
          right-[20%]
          top-[23%]
          h-1
          w-1
          rounded-full
          bg-[#7DD3FC]
          shadow-[0_0_12px_rgba(125,211,252,0.8)]
        "
      />

      {/* LABEL */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          whitespace-nowrap

          font-mono
          text-[7px]
          uppercase
          tracking-[0.28em]
          text-white/20

          sm:tracking-[0.32em]
        "
      >
        Technology Core
      </div>
    </div>
  );
}