"use client";

import React from "react";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight, Brain, Zap } from "lucide-react";

export default function AwsAboutHeroSection() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#070B2A] text-white">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}
      <div className="absolute inset-0">

        <div
          className="
            absolute inset-0
            bg-cover bg-center
            lg:w-[58%]
            max-sm:bg-[center_top]
          "
          style={{
            backgroundImage: 'url("/aboutheroimage10.jpg")',
          }}
        />

        <div
          className="
            absolute inset-0
            bg-[#070B2A]/20
            lg:w-[62%]
          "
        />

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#070B2A]/20 to-[#070B2A]" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#070B2A] via-transparent to-[#070B2A]/20" />

        {/* Stronger mobile readability layer */}
        <div className="absolute inset-0 bg-[#070B2A]/25 sm:bg-transparent lg:hidden" />

      </div>


      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div
        className="
          relative mx-auto
          flex min-h-[88vh]
          max-w-[1440px]
          items-center
          px-6 py-20
          sm:px-10
          lg:px-16
          xl:px-24

          max-sm:min-h-0
          max-sm:items-end
          max-sm:px-4
          max-sm:py-10
          sm:max-md:py-14
        "
      >

        <div
          className="
            ml-auto
            w-full
            max-w-[650px]
            lg:mr-[2%]

            max-sm:mt-[180px]
            max-sm:max-w-full
            max-sm:ml-0
            sm:max-md:mt-[120px]
          "
        >

          {/* =================================================
              GLASS PANEL
          ================================================= */}
          <div
            className="
              relative
              rounded-[28px]
              bg-[#070B2A]/60
              p-7
              backdrop-blur-2xl
              sm:p-10
              lg:p-12

              max-sm:rounded-[22px]
              max-sm:p-5
              max-sm:backdrop-blur-xl
            "
          >

            {/* =================================================
                BRAND LABEL
            ================================================= */}
            <div
              className="
                mb-10
                flex items-center gap-3

                max-sm:mb-6
                max-sm:gap-2.5
              "
            >
              <span
                className="
                  h-[1px] w-7 bg-[#38BDF8]

                  max-sm:w-5
                "
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#7DD3FC]

                  max-sm:text-[8px]
                  max-sm:tracking-[0.2em]
                "
              >
                About Reet Technologies
              </span>
            </div>


            {/* =================================================
                HEADING
            ================================================= */}
            <h1
              className="
                max-w-[600px]
                text-[42px]
                font-semibold
                leading-[1.02]
                tracking-[-0.045em]
                sm:text-[54px]
                lg:text-[64px]

                max-sm:text-[34px]
                max-sm:leading-[1.04]
                max-sm:tracking-[-0.035em]
              "
            >
              Fueling business growth
              <br />
              <span className="text-[#7DD3FC]">
                through technology.
              </span>
            </h1>


            {/* =================================================
                INTRO
            ================================================= */}
            <p
              className="
                mt-7
                max-w-[560px]
                text-[16px]
                leading-7
                text-slate-300
                sm:text-[17px]

                max-sm:mt-5
                max-sm:text-[13px]
                max-sm:leading-6
              "
            >
              We help businesses turn technology into an advantage — with
              future-ready strategies, intelligent solutions, and digital
              systems built to evolve with the world around them.
            </p>


            {/* =================================================
                SERVICES
            ================================================= */}
            <div
              className="
                mt-10
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-2

                max-sm:mt-7
                max-sm:gap-3
              "
            >

              {/* DIGITAL TRANSFORMATION */}
              <div
                className="
                  rounded-2xl
                  border border-white/[0.08]
                  bg-white/[0.035]
                  p-5
                  transition-all
                  duration-300
                  hover:border-white/[0.16]
                  hover:bg-white/[0.06]

                  max-sm:rounded-xl
                  max-sm:p-4
                "
              >

                <div
                  className="
                    mb-5
                    flex h-10 w-10
                    items-center justify-center
                    rounded-xl
                    border border-[#38BDF8]/20
                    bg-[#38BDF8]/[0.08]

                    max-sm:mb-3
                    max-sm:h-9
                    max-sm:w-9
                    max-sm:rounded-lg
                  "
                >
                  <Zap
                    className="
                      h-4 w-4
                      text-[#7DD3FC]

                      max-sm:h-3.5
                      max-sm:w-3.5
                    "
                  />
                </div>

                <h2
                  className="
                    text-sm
                    font-semibold
                    text-white

                    max-sm:text-[12px]
                  "
                >
                  Digital Transformation
                </h2>

                <p
                  className="
                    mt-2
                    text-xs
                    leading-5
                    text-slate-400

                    max-sm:mt-1.5
                    max-sm:text-[11px]
                    max-sm:leading-[1.45rem]
                  "
                >
                  Transform your business with tailored, forward-thinking
                  digital solutions.
                </p>
              </div>


              {/* NEXT GEN CONSULTING */}
              <div
                className="
                  rounded-2xl
                  border border-white/[0.08]
                  bg-white/[0.035]
                  p-5
                  transition-all
                  duration-300
                  hover:border-white/[0.16]
                  hover:bg-white/[0.06]

                  max-sm:rounded-xl
                  max-sm:p-4
                "
              >

                <div
                  className="
                    mb-5
                    flex h-10 w-10
                    items-center justify-center
                    rounded-xl
                    border border-[#38BDF8]/20
                    bg-[#38BDF8]/[0.08]

                    max-sm:mb-3
                    max-sm:h-9
                    max-sm:w-9
                    max-sm:rounded-lg
                  "
                >
                  <Brain
                    className="
                      h-4 w-4
                      text-[#7DD3FC]

                      max-sm:h-3.5
                      max-sm:w-3.5
                    "
                  />
                </div>

                <h2
                  className="
                    text-sm
                    font-semibold
                    text-white

                    max-sm:text-[12px]
                  "
                >
                  Next Gen Consulting
                </h2>

                <p
                  className="
                    mt-2
                    text-xs
                    leading-5
                    text-slate-400

                    max-sm:mt-1.5
                    max-sm:text-[11px]
                    max-sm:leading-[1.45rem]
                  "
                >
                  Strategic technology guidance designed around your
                  business, not a template.
                </p>
              </div>

            </div>


            {/* =================================================
                CTA
            ================================================= */}
            <div
              className="
                mt-9
                border-t
                border-white/[0.08]
                pt-7

                max-sm:mt-6
                max-sm:pt-5
              "
            >

              <Link
                href="/pages/about"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  text-sm
                  font-semibold
                  text-white
                  transition-colors
                  hover:text-[#7DD3FC]

                  max-sm:gap-2.5
                  max-sm:text-[12px]
                "
              >
                Explore More

                <span
                  className="
                    flex
                    h-9 w-9
                    items-center justify-center
                    rounded-full
                    border border-white/10
                    transition-all
                    duration-300
                    group-hover:border-[#38BDF8]/40
                    group-hover:bg-[#38BDF8]/10

                    max-sm:h-8
                    max-sm:w-8
                  "
                >
                  <ArrowUpRight
                    className="
                      h-4 w-4

                      max-sm:h-3.5
                      max-sm:w-3.5
                    "
                  />
                </span>
              </Link>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}