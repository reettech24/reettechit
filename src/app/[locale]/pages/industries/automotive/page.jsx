"use client";
export const dynamic = "force-dynamic";


import React from "react";
import { useTranslations } from "next-intl";

import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function page() {
  const t = useTranslations("automotive");

  return (
    <>
      {/* Hero Banner */}
      <section
        className="bg-[#0F172A] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/banners/automotive.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("heroTitle")}
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">{t("heroDesc")}</p>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20 px-6 bg-white text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">{t("overviewTitle")}</h2>
        <p className="text-gray-700">{t("overviewDesc")}</p>
        <p className="text-gray-700">{t("overviewExtra")}</p>
      </section>

      {/* Automotive Solutions */}
      <section className="py-20 relative bg-[#070B2A] text-white px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12 text-white">
            Solutions We Offer
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {t.raw("featureItems").map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 shadow hover:shadow-lg text-center"
              >
                {/* <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 mx-auto mb-4"
                /> */}
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
              <div key={idx}>
                <h4 className="font-semibold mb-2">{item.heading}</h4>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-80 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h3 className="text-2xl font-bold mb-8"> {t("techStackTitle")}</h3>
        <div className="flex flex-wrap justify-center gap-6 text-gray-700">
          {t.raw("techStack").map((item, idx) => (
            <span
              key={idx}
              className="p-4 bg-gray-900 text-white  y-2 rounded-full text-sm shadow"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">{t("impactTitle")}</h3>
          <div className="grid md:grid-cols-4 gap-10">
            {t.raw("impactMetrics").map((item, idx) => (
              <div key={idx} className="bg-white p-6 shadow text-center">
                <h4 className="text-3xl font-bold text-blue-600">
                  {item.value}
                </h4>
                <p className="text-gray-700 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Digital in Automotive */}
      <section className="py-20 px-6 relative bg-[#070B2A] text-white text-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t("whyDigitalTitle")}</h2>
          <p className="text-white/80 mb-4">{t("whyDigitalDesc")}</p>
        </div>
      </section>

      {/* Customer Journey Timeline */}
      <section className="relative bg-[#070B2A] text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12 text-white">
            {t("journeyTitle")}
          </h3>
          <div className="relative border-l-2 border-blue-500 pl-6">
            {t.raw("journeySteps").map((item, idx) => (
              <div key={idx} className="mb-10 ml-4">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-full w-fit mb-2">
                  {item.stage}
                </div>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-60 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-20 px-6 bg-white text-center">
        <h3 className="text-2xl font-bold mb-8">{t("partnersTitle")}</h3>
        <div className="flex flex-wrap justify-center gap-10 items-center opacity-80">
          {["toyota", "bosch", "bmw", "mahindra", "audi"].map((brand, idx) => (
            <img
              key={idx}
              src={`/logos/${brand}.png`}
              alt={brand}
              className="h-10 grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative bg-[#070B2A] text-white px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            {t("faqTitle")}
          </h3>
          <div className="space-y-6">
          
            {t.raw("faq").map((item, idx) => (
              <div key={idx} className="bg-gray-800 p-6 shadow">
                <h4 className="font-semibold mb-2 text-white">{item.q}</h4>
                <p className="text-white/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">{t("ctaTitle")}</h3>
        <p className="mb-6 text-white/90">{t("ctaDesc")}</p>
        <a
          href="/pages/contact"
          className="inline-block px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-gray-100 transition"
        >
          {t("ctaBtn")}
        </a>
      </section>

      {/* Testimonials & Contact */}
      <TestimonialSection />
      <ContactUsSection />
    </>
  );
}
