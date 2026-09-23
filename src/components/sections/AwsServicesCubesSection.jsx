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
    link: "/pages/about/ourProjects",
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
    link: "/services/data-management-services",
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
                border border-slate-200/80
                bg-gradient-to-br from-[#D9DDE2] via-[#E8EBEE] to-white
                p-7
                shadow-[0_10px_30px_rgba(7,11,42,0.06)]
                transform-gpu [backface-visibility:hidden] [will-change:transform]
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#38BDF8]/50
                hover:shadow-[0_20px_50px_rgba(56,189,248,0.15)]
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
                    border border-slate-200
                    bg-white
                    text-[#070B2A]
                    shadow-xs
                    transition-all duration-300
                    group-hover:border-[#38BDF8]/40
                    group-hover:bg-[#E6F9F0]
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
                      border border-slate-200
                      bg-white
                      text-[#070B2A]
                      shadow-xs
                      transition-all duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:bg-[#070B2A]
                      group-hover:text-white
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