"use client";

import React from "react";
import { useTranslations } from "next-intl";

import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function page() {
  const t = useTranslations("healthcare");

  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-[#06283D] text-white py-48 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/banners/Healthcare1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("heroTitle")}
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">{t("heroDesc")}</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6 bg-white text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">{t("overviewTitle")}</h2>
        <p className="text-gray-700 mb-8">{t("overviewDesc")}</p>
      </section>

      {/* Solutions Section */}
      <section className="py-20 relative bg-[#070B2A] text-white  px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12 text-white">
            {t("featureTitle")}
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {t.raw("featureItems").map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 shadow hover:shadow-lg text-center"
              >
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 relative bg-[#070B2A] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8"> {t("useCasesTitle")}</h3>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {t.raw("useCases").map((item, idx) => (
              <div key={idx} className="">
                <h4 className="font-semibold mb-2">{item.heading}</h4>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-70 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Success Metrics */}
      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">{t("metricsTitle")}</h3>
          <div className="grid md:grid-cols-4 gap-10">
            {t.raw("metrics").map((item, idx) => (
              <div key={idx} className="bg-gray-900 p-6  shadow text-center">
                <h4 className="text-3xl font-bold text-blue-500">
                  {item.value}
                </h4>
                <p className="text-white/80 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-[#070B2A] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">{t("whyUsTitle")}</h3>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {t.raw("whyUsPointsone").map((item, idx) => (
              <ul key={idx} className="space-y-4 text-white/80">
                <li>✅ {item}</li>
              </ul>
            ))}
            {t.raw("whyUsPointstwo").map((item, idx) => (
              <ul key={idx} className="space-y-4 text-white/80">
                <li>✅ {item}</li>
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Insight */}
      <section className="py-20 bg-[#0A1F44] text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">{t("insightTitle")}</h3>
          <p className="text-white/80">{t("insightDesc")}</p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 bg-[#070B2A] text-white text-center">
        <h3 className="text-2xl font-bold mb-8">{t("technologyTitle")}</h3>
        <div className="flex flex-wrap justify-center gap-6 text-gray-600">
          {t.raw("technologyStack").map((item, idx) => (
            <span
              key={idx}
              className="bg-gray-100 px-4 py-2 rounded-full text-sm shadow"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#070B2A] text-white px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">
            {t("faqTitle")}
          </h3>
          <div className="space-y-6">
            {t.raw("faqs").map((item, idx) => (
              <div key={idx}>
                <h4 className="font-semibold">{item.question}</h4>
                <p className=" text-white/80">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-20 bg-white px-6 text-center">
        <h3 className="text-2xl font-bold mb-6">{t("partnersTitle")}</h3>
        <p className="text-gray-600 mb-10">{t("partnersDesc")}</p>
        <div className="flex justify-center flex-wrap gap-6">
          <img src="/logos/hospital1.png" alt="Partner 1" className="h-12" />
          <img src="/logos/hospital2.png" alt="Partner 2" className="h-12" />
          <img src="/logos/hospital3.png" alt="Partner 3" className="h-12" />
        </div>
      </section>

      {/* CTA */}
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

      <TestimonialSection />

      <ContactUsSection />
    </>
  );
}
