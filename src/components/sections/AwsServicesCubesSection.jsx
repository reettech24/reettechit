"use client";

import React from "react";
import { Link } from "@/i18n/navigation";
import {
  Code,
  ShieldCheck,
  Sparkles,
  Cog,
  Smartphone,
  Brain,
  Megaphone,
  Glasses,
  ArrowUpRight,
} from "lucide-react";

const servicesData = [
  {
    title: "High-End Website Development",
    description:
      "Craft pixel-perfect, enterprise-grade websites that convert.",
    icon: Code,
    link: "/pages/services/ourSolutions/mobile-and-web-application",
  },
  {
    title: "CRM & ERP Solutions",
    description:
      "Streamline operations with custom CRM and ERP platforms.",
    icon: Cog,
    link: "/pages/services/ourSolutions/crm-erp-solution",
  },
  {
    title: "Mobile & Web Applications",
    description:
      "Engaging, high-performance mobile and web app development.",
    icon: Smartphone,
    link: "/pages/services/ourSolutions/mobile-and-web-application",
  },

  {
    title: "Digital Transformation",
    description:
      "Accelerate your business with innovative digital solutions.",
    icon: Sparkles,
    link: "/pages/services/ourSolutions/digital-transformation",
  },
  {
    title: "Cyber Security",
    description:
      "Protect your assets with comprehensive cyber defense solutions.",
    icon: ShieldCheck,
    link: "/services/cloud-solutions",
  },

  {
    title: "AI & Machine Learning",
    description:
      "Unlock intelligent automation with cutting-edge AI/ML.",
    icon: Brain,
    link: "/pages/services/ourSolutions/ai-ml",
  },
  {
    title: "Digital Marketing",
    description:
      "Maximize reach and ROI through strategic digital campaigns.",
    icon: Megaphone,
    link: "/pages/services/ourSolutions/digital-marketing",
  },
  {
    title: "AR & VR Solutions",
    description:
      "Immersive augmented and virtual reality experiences.",
    icon: Glasses,
    link: "/pages/services/ourSolutions/ar-vr-solutions",
  },
];

export default function AwsServicesCubesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-5 py-24 text-[#070B2A] sm:px-8 md:px-12 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-[1440px]">

        {/* HEADER */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-20">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#38BDF8]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#070B2A]">
                Our Services
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[72px]">
              Technology that moves
              <span className="block text-[#070B2A]">
                your business forward.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-500 sm:text-base">
            From digital experiences to intelligent systems, we build
            technology around the way your business works, grows, and evolves.
          </p>
        </div>

        {/* SERVICES */}
        <div
          className="
            -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto
            px-5 pb-4
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0
            lg:grid-cols-4
          "
        >
          {servicesData.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.link}
                className="
                  group relative flex min-h-[330px]
                  min-w-[calc(66.666667vw-20px)]
                  snap-start flex-col overflow-hidden
                  rounded-[32px]
                  border border-[#292929]/20
                  bg-gradient-to-br
                  from-[#292929]/30
                  via-[#292929]/15
                  to-[#292929]/[0.08]
                  p-7
                  shadow-[0_18px_50px_rgba(7,11,42,0.08)]
                  backdrop-blur-2xl
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-[#292929]/40
                  hover:shadow-[0_25px_70px_rgba(56,189,248,0.16)]
                  sm:min-w-0
                  sm:snap-none
                  sm:p-8
                "
              >



                {/* ICON */}
                <div
                  className="
                    relative z-10
                    flex h-12 w-12 items-center justify-center
                    rounded-2xl
                    border border-white/50
                    bg-white/35
                    text-[#070B2A]
                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)]
                    backdrop-blur-xl
                    transition-all duration-500
                    group-hover:bg-white/50
                  "
                >
                  <Icon
                    size={20}
                    strokeWidth={1.7}
                  />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 mt-auto">
                  <h3 className="max-w-[280px] text-lg font-semibold leading-[1.25] tracking-[-0.025em] text-[#070B2A] sm:text-xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-[290px] text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                </div>

                {/* ARROW */}
                <div className="relative z-10 mt-7 flex justify-end">
                  <span
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-full
                      border border-white/50
                      bg-white/35
                      text-[#070B2A]
                      shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)]
                      backdrop-blur-xl
                      transition-all duration-500
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:bg-white/60
                    "
                  >
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.8}
                    />
                  </span>
                </div>

              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}