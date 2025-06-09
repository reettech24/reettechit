"use client";
export const dynamic = "force-dynamic";


import React from "react";
import { useTranslations } from "next-intl";

import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function page() {
  const t = useTranslations("education");

  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-[#0D1B2A] text-white py-48 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/banners/education1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">{t("heroTitle")}</h1>
          <p className="text-white/70 max-w-2xl mx-auto">{t("heroSubtitle")}</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-6 bg-white text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">{t("overviewTitle")}</h2>
        <p className="text-gray-700">{t("overviewDesc")}</p>
      </section>

      {/* Features Grid */}
      <section className="bg-[#070B2A] relative overflow-hidden text-white py-20 px-6">
        <div className="absolute -bottom-90 right-0 opacity-10 w-screen">
          <img src="/p2.png" alt="Nexus India Logo" className="" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {t.raw("features").map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800 shadow p-6 hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold mb-2 text-white">
                {item.title}
              </h4>
              <p className="text-white/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Digital Learning Flow */}
      <section className=" relative bg-[#070B2A] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-10">{t("journeyTitle")}</h3>
          <ol className="relative border-l border-gray-300 space-y-10 text-left">
            {t.raw("journeySteps").map((item, idx) => (
              <li key={idx} className="ml-4">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-1.5" />
                <p className="text-lg font-medium text-blue-900">{`Step ${
                  idx + 1
                }: ${item}`}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="absolute -bottom-70 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Success Metrics */}
      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-6"> {t("metricsTitle")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-blue-900 font-semibold text-xl">
            {t.raw("metrics").map((metrics, idx) => (
              <div key={idx}>
                <span className="text-4xl block">{metrics.value}</span>
                {metrics.title}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 bg-[#070B2A] relative overflow-hidden text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-10"> {t("useCasesTitle")}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {t.raw("useCases").map((useCases, idx) => (
              <div key={idx} className="bg-gray-800 p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-2 text-white">
                  {useCases.title}
                </h4>
                <p className="text-white/80">{useCases.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#070B2A] relative overflow-hidden text-white py-20 px-6 text-center">
        <h2 className="text-2xl font-bold mb-10">{t("whyChooseTitle")}</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {t.raw("whyChooseFeatures").map((whyChooseFeatures, idx) => (
            <div key={idx} className="bg-gray-800 p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-blue-500 mb-2">
                {whyChooseFeatures}
              </h4>
              <p className="text-sm text-white/80">{t("whyChooseDesc")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-10">{t("sectorTitle")}</h3>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {t.raw("sectors").map((item, idx) => (
              <div key={idx} className="bg-gray-900 p-6 shadow">
                <h4 className="font-semibold text-lg mb-2 text-white">
                  {item.title}
                </h4>
                <p className=" text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Teasers */}
      <section className="bg-white py-20 px-6">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold"> {t("blogTitle")}</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.raw("blogs").map((item, idx) => (
            <div
              key={idx}
              className="block bg-gray-900 p-6 hover:shadow-lg transition"
            >
              <h4 className="font-semibold text-lg mb-2 text-white">{item}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white text-center py-20 px-6">
        <h3 className="text-3xl font-bold mb-4">{t("ctaTitle")}</h3>
        <p className="text-white/80 max-w-2xl mx-auto mb-6">{t("ctaDesc")}</p>
        <a
          href="/pages/contact"
          className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
        >
          {t("ctaBtn")}
        </a>
      </section>

      <TestimonialSection />

      <ContactUsSection />
    </>
  );
}
