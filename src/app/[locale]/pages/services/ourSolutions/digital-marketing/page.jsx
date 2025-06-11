"use client";
export const dynamic = "force-dynamic";

import React from "react";
import { useTranslations } from "next-intl";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ContactUsSection from "@/components/sections/ContactUsSection";

export default function DigitalMarketingPage() {
  const t = useTranslations("digitalmarketing");

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-40 sm:py-40 md:py-52"
        style={{ backgroundImage: "url('/banners/DM.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B2A]/80 to-[#1E1E3F]/80" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            {t("heroTitle")}
          </h1>
          <p className="text-white text-base sm:text-lg leading-relaxed">
            {t("heroDesc")}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img src="/DM.jpg" alt="Marketing Team" className=" shadow-xl" />
          <div>
            <h2 className="text-3xl font-bold mb-4">{t("aboutTitle")}</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {t.raw("aboutPoints").map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#070B2A] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">
            {t("servicesTitle")}
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {t.raw("services").map((s, i) => (
              <div
                key={i}
                className="bg-gray-800 p-6 shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-white/80">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">{t("processTitle")}</h2>
          <div className="grid md:grid-cols-4 gap-8 text-left">
            {t.raw("processSteps").map((step, i) => (
              <div
                key={i}
                className="bg-gray-900 p-6 shadow-sm hover:shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-white/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-[#070B2A] text-white  py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">{t("industriesTitle")}</h2>
          <div className="flex flex-wrap justify-center gap-6 text-white">
            {t.raw("industries").map((sector, i) => (
              <span
                key={i}
                className="bg-gray-800 px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-[#070B2A] text-white px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-white">
              {t("whyUsTitle")}
            </h2>
            <ul className="text-white/80 space-y-3 list-disc list-inside">
              {t.raw("whyUsPoints").map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <img src="/test/17.jpeg" alt="Why Choose Us" className=" shadow-lg" />
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img src="/test/47.jpeg" alt="Results" className=" shadow-xl" />
          <div>
            <h2 className="text-3xl font-bold mb-4">{t("caseStudyTitle")}</h2>
            <p className="text-gray-700 mb-4">{t("caseStudyDesc")}</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {t.raw("caseStudyHighlights").map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#070B2A] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t("faqsTitle")}
          </h2>
          <div className="space-y-6">
            {t.raw("faqs").map((faq, i) => (
              <div key={i}>
                <h3 className="font-semibold text-lg">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white px-6 py-16 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">{t("ctaTitle")}</h2>
        <p className="max-w-2xl mx-auto text-sm md:text-base mb-6">
          {t("ctaDesc")}
        </p>
        <a
          href="/pages/contact"
          className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          {t("ctaBtn")}
        </a>
      </section>

      <TestimonialSection />
      <div id="contact">
        <ContactUsSection />
      </div>
    </>
  );
}
