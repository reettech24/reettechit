"use client";
export const dynamic = "force-dynamic";


import React from "react";
import { useTranslations } from "next-intl";

import TestimonialSection from "@/components/sections/TestimonialSection";
import ContactUsSection from "@/components/sections/ContactUsSection";

export default function page() {
  const t = useTranslations("realEstate");

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py- sm:py-40 md:py-52"
        style={{ backgroundImage: "url('/banners/RE.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B2A]/80 to-[#1E1E3F]/80" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            {t("heroTitle")}
          </h1>
          <p className="text-white text-base sm:text-lg leading-relaxed">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">{t("introTitle")}</h2>
        <p className="text-gray-700 text-md mb-3">{t("introContent")}</p>
        <div className="">
          <p className="text-xl text-black mb-3">{t("understandTitle")}</p>
          <ul className="space-y-4 text-sm text-black/80">
            {t.raw("problems").map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="relative overflow-hidden bg-[#070B2A] text-white py-20 px-6">
        <div className="absolute -bottom-90 right-0 opacity-20 w-screen">
          <img src="/p2.png" alt="Nexus India Logo" />
        </div>
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-10">{t("challengesTitle")}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {t.raw("challenges").map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 text-white hover:bg-gray-700 p-6 shadow-sm"
              >
                <p className="text-white/80 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="relative overflow-hidden py-20 px-6 text-center bg-[#070B2A] text-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">{t("solutionsTitle")}</h3>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {t.raw("solutions").map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 shadow p-6 hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-lg mb-2 text-white">{item.title}</h4>
                <p className="text-sm text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-70 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" />
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h3 className="text-2xl font-bold mb-8">{t("caseStudiesTitle")}</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left text-sm">
          {t.raw("caseStudies").map((item, idx) => (
            <div key={idx} className="bg-gray-900 text-white p-6 shadow">
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-white/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Nexus India */}
      <section className="relative overflow-hidden bg-[#070B2A] text-white py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">{t("whyTitle")}</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {t.raw("why").map((item, idx) => (
              <div key={idx} className="bg-gray-800 p-6 shadow text-center">
                <div className="text-4xl mb-3 text-white">{item.icon}</div>
                <h4 className="font-semibold text-white/70">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights & Resources */}
      <section className="relative overflow-hidden bg-[#070B2A] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-10">{t("insightsTitle")}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {t.raw("insights").map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 shadow hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-lg mb-2 text-white">{item.title}</h4>
                <p className="text-sm text-white/80">{item.excerpt}</p>
                <a
                  href="/resources"
                  className="text-blue-600 text-sm mt-3 inline-block hover:underline"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative overflow-hidden bg-[#070B2A] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">{t("faqTitle")}</h3>
          <div className="space-y-6">
            {t.raw("faqs").map((item, idx) => (
              <div key={idx}>
                <h4 className="font-semibold text-lg text-white">{item.q}</h4>
                <p className="text-sm text-white/80 mt-1">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-70 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" />
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA */}
      <section className="bg-blue-700 text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">{t("ctaTitle")}</h3>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">{t("ctaDesc")}</p>
        <a
          href="/pages/contact"
          className="inline-block px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-gray-100 transition"
        >
          {t("ctaButton")}
        </a>
      </section>

      {/* Contact Section */}
      <ContactUsSection />
    </div>
  );
}
