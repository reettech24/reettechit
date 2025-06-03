"use client";

import React from "react";
import { useTranslations } from "next-intl";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ContactUsSection from "@/components/sections/ContactUsSection";
import Image from "next/image";

export default function page() {
  const t = useTranslations("retail&ecommerce");
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}

      <section
        className="relative bg-cover bg-center text-white py-40 md:py-52"
        style={{ backgroundImage: "url('/banners/mobile.jpg')" }}
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

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Image
            src="/test/4.jpg"
            alt="CRM ERP Overview"
            width={600}
            height={400}
            className="w-full"
          />
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#070B2A]">
              {t("empowerTitle")}
            </h2>

            <p className="text-base sm:text-md text-gray-700 mb-6">
              {t("empowerDescription")}
            </p>

            <div className=" ">
              <ul className="space-y-4 text-sm  text-black/80">
                {t.raw("empowerPoints").map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Overview */}

      {/* Industry Challenges */}
      <section className="relative overflow-hidden bg-[#070B2A] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">
            {t("challengesTitle")}
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {t.raw("challenges").map((item, idx) => (
              <div key={idx} className="bg-gray-800 p-6 shadow-sm">
                <p className="text-white/80 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="relative overflow-hidden bg-[#070B2A] py-20 px-6  text-center">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-10 text-white">
            {t("solutionsTitle")}
          </h3>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {t.raw("solutions").map((s, idx) => (
              <div
                key={idx}
                className="bg-gray-800 shadow p-6 hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-lg mb-2 text-white">
                  {s.title}
                </h4>
                <p className="text-sm text-white/80">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-70 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h3 className="text-2xl font-bold mb-8">{t("caseStudiesTitle")}</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left text-sm">
          {t.raw("caseStudies").map((item, idx) => (
            <div key={idx} className="bg-gray-900 p-6 shadow">
              <h4 className="font-semibold text-lg mb-2 text-white">
                {item.title}
              </h4>
              <p className="text-white/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Retail Trends Section */}
      <section className="relative overflow-hidden bg-[#070B2A] py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-white">
            {t("trendsTitle")}
          </h3>
          <p className=" mb-10 text-white/80">{t("trendsDesc")}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {t.raw("trends").map((trend, idx) => (
              <div key={idx} className="bg-gray-800 p-5 shadow text-left">
                <p className="text-white/80">{trend}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="px-6 py-12 bg-[#070B2A] text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Trusted By</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
          {[1, 2, 3, 4, 5].map((num) => (
            <Image
              key={num}
              src={`/company/client-${num}.png`}
              alt="Client Logo"
              width={120}
              height={60}
            />
          ))}
        </div>
      </section>
      {/* FAQs */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-center">{t("faqsTitle")}</h3>
        <div className="space-y-6">
          {t.raw("faqs").map((item, idx) => (
            <div key={idx}>
              <h4 className="font-semibold">{item.q}</h4>
              <p className="text-sm text-gray-600 mt-2">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-[#070B2A] text-white py-20 px-6 text-center">
        <h3 className="text-2xl font-bold mb-6"> {t("techTitle")}</h3>
        <p className="text-white/80 mb-10 max-w-xl mx-auto">{t("techDesc")}</p>
        <div className="flex justify-center flex-wrap gap-6">
          {t.raw("techStack").map((tech, idx) => (
            <div
              key={idx}
              className="bg-gray-800 hover:scale-125 duration-125  px-6 py-3 rounded-full shadow text-sm font-medium"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-8">{t("whyTitle")}</h3>
        <div className="grid md:grid-cols-4 gap-8">
          {t.raw("whyPoints").map((item, idx) => (
            <div key={idx} className="bg-gray-900 p-6 shadow text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-semibold text-white">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA */}
      <section className="bg-blue-700 text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">{t("ctaTitle")}</h3>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">{t("ctaDesc")}</p>

        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-gray-100 transition"
        >
          {t("ctaButton")}
        </a>
      </section>

      {/* Contact */}
      <ContactUsSection />
    </div>
  );
}
