"use client";

import { useTranslations } from "next-intl";

import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import React from "react";

export default function Page() {
  const t = useTranslations("aboutourfocus");

  return (
    <>
      {/* Hero Banner */}
      <section
        className="bg-[#0A0F2E] text-white py-56 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/breadcrumb.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0A0F2E] opacity-70"></div>
        <div className="relative z-10">
          <div className="text-4xl md:text-5xl font-bold mb-3">
            {" "}
            {t("heroTitle")}
          </div>
          <div className="text-sm text-white/70"> {t("heroDesc")}</div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {t.raw("featureItems").map((item, idx) => (
            <div key={idx}>
              <div className="text-2xl font-bold mb-4"> {item.title}</div>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#070B2A] text-white py-20 px-6">
        <div className="  max-w-5xl mx-auto text-center">
          <div className="text-2xl font-bold mb-10 text-white">
            {t("coreValuesTitle")}
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-white/80">
           
            {t.raw("coreValues").map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 shadow hover:shadow-md transition"
              >
                <div className="font-semibold text-lg mb-2 text-white">
                  {item.title}
                </div>
                <p className="text-sm text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 relative bg-[#070B2A] text-white px-6 mx-auto">
        <div className="  max-w-5xl mx-auto text-center">
          <div className="text-2xl font-bold text-center mb-10 text-white">
            {t("workProcessTitle")}
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center text-gray-800">
          
            {t.raw("workProcess").map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-800 transition">
                <div className="font-semibold text-lg text-white">
                  {item.title}
                </div>
                <p className="text-sm mt-2 text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-0 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 px-6 bg-[#070B2A] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold mb-8 text-white">
            {t("globalReachTitle")}
          </div>
          <p className="text-white/80 mb-8">{t("globalReachDesc")}</p>
          <img
            src="/about2.jpeg"
            alt="Global Presence"
            className="mx-auto w-full max-w-3xl shadow"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative px-6 bg-[#070B2A] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold text-center mb-10 text-white">
            {t("whyChooseUsTitle")}
          </div>
          <ul className="grid sm:grid-cols-2 gap-8 text-white/80 text-md">
       
            {t.raw("whyChooseUs").map((item, idx) => (
              <li key={idx}>
                <strong>{item} </strong>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute -bottom-0 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Team Culture (optional) */}
      <section className="py-20 px-6 bg-white max-w-6xl mx-auto">
        <div className="text-2xl font-bold text-center mb-10">
          {t("teamCultureTitle")}
        </div>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          {t("teamCultureDesc")}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Replace with real team photos if desired */}
          {Array(4)
            .fill(0)
            .map((_, idx) => (
              <div key={idx} className="h-40 bg-gray-900" />
            ))}
        </div>
      </section>

      {/* Testimonials & Contact */}
      <TestimonialSection />
      <ContactUsSection />
    </>
  );
}
