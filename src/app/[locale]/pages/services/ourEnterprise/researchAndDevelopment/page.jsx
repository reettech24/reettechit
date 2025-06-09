"use client";
export const dynamic = "force-dynamic";

import React from "react";
import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("rnd");

  const focusAreas = t.raw("focusAreas");
  const timeline = t.raw("timeline");
  const impactStories = t.raw("impactStories");

  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-[#070B2A] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/graduation.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70" />
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-6">{t("heroTitle")}</h1>
          <p className="text-2xl max-w-3xl mx-auto">{t("heroDesc")}</p>
        </div>
      </section>

      {/* Why R&D Section */}
      <section className="relative overflow-hidden py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              {t("whyTitle")}
            </h2>
            {t.raw("whyParagraphs").map((para, idx) => (
              <p key={idx} className="text-gray-600 mb-4">
                {para}
              </p>
            ))}
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {t.raw("whyBullets").map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <img
            src="/design.jpeg"
            alt="R&D Illustration"
            className="shadow-lg"
          />
        </div>
        <div className="absolute -bottom-70 -right-20 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-[#070B2A] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">
            {t("focusTitle")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {focusAreas.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 shadow hover:shadow-xl transition duration-300"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20 px-6 bg-[#070B2A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">{t("timelineTitle")}</h2>
          <div className="relative border-l-2 border-indigo-500 pl-6 space-y-10">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-4 top-0 w-4 h-4 bg-indigo-500 rounded-full"></div>
                <h4 className="text-lg font-semibold text-white">
                  {item.year}
                </h4>
                <p className="text-white/80">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-90 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-indigo-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("impactTitle")}
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {impactStories.map((story, i) => (
              <div
                key={i}
                className={`bg-gray-800 p-6 rounded-xl shadow border-l-4 ${
                  i % 2 === 0 ? "border-purple-600" : "border-indigo-600"
                }`}
              >
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {story.title}
                </h4>
                <p className="text-white/60">{story.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-800 to-purple-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">{t("ctaTitle")}</h2>
          <p className="text-lg mb-6">{t("ctaDesc")}</p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-800 font-bold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            {t("ctaBtn")}
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Contact Us */}
      <ContactUsSection />
    </>
  );
}
