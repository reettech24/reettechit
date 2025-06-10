"use client";
export const dynamic = "force-dynamic";


import React from "react";
import { useTranslations } from "next-intl";

import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import Image from "next/image";

export default function page() {
  const t = useTranslations("manufacturing");

  return (
    <>
      {/* Hero Banner */}
      <section
        className="bg-[#0B1F3A] text-white py-48 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/banners/manufact.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("heroTitle")}
          </h1>
          <p className="text-white/80">{t("heroSubtitle")}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">{t("overviewTitle")}</h2>
        <p className="text-gray-700">{t("overviewDescription")}</p>
      </section>

      <section className=" relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6 lg:px-20 bg-white">
        <div className="absolute -bottom-70 right-0 opacity-30 w-screen">
          <img src="/p2.png" alt="Nexus India Logo" className="" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Image
            src="/photos/manufacturing.jpeg"
            alt="CRM ERP Overview"
            width={600}
            height={400}
            className="w-full z-10"
          />
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#070B2A]">
              {t("aboutTitle")}
            </h2>

            <p className="text-base sm:text-lg text-gray-700 mb-6">
              {t("aboutText")}
            </p>
            <div className="">
              <p className="text-xl text-black mb-3">{t("problemTitle")}</p>
              <ul className="space-y-4 text-sm text-black/80">
                {t.raw("problems").map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Solutions */}
      <section className="relative overflow-hidden bg-[#070B2A] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">
            {t("solutionsTitle")}
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {t.raw("solutions").map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 shadow text-center hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-lg mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-70 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-6 relative overflow-hidden bg-[#070B2A] text-white ">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">
            {t("caseStudyTitle")}
          </h3>
          <p className="text-white/80 mb-4">{t("caseStudyDesc")}</p>
          {/* <a
            href="/case-studies/manufacturing-efficiency"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Read Full Case Study
          </a> */}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-10"> {t("benefitsTitle")}</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {t.raw("benefits").map((item, idx) => (
              <div key={idx} className="p-4 bg-gray-900 shadow">
                <p className="font-medium text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Trends Section */}
      <section className="py-20 px-6 relative overflow-hidden bg-[#070B2A] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-10 text-white">
            {t("trendsTitle")}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {t.raw("trends").map((item, idx) => (
              <div key={idx} className="bg-gray-800 p-6 shadow">
                <h4 className="text-lg font-semibold mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="bg-blue-600 text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">{t("ctaTitle")}</h3>
        <p className="mb-6 text-white/90">{t("ctaDesc")}</p>
        <a
          href="/pages/contact"
          className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition"
        >
          {t("ctaBtn")}
        </a>
      </section>

      {/* Contact Us */}
      <ContactUsSection />
    </>
  );
}
