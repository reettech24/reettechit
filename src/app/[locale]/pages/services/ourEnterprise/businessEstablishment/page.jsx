"use client";
export const dynamic = "force-dynamic";


import React from "react";
import { useTranslations } from "next-intl";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ContactUsSection from "@/components/sections/ContactUsSection";

export default function page() {
  const t = useTranslations("businessEstablishment");

  const services = [
    {
      title: t("services.0.title"),
      desc: t("services.0.desc"),
      img: "/images/business-structure.png",
    },
    {
      title: t("services.1.title"),
      desc: t("services.1.desc"),
      img: "/images/hr-planning.png",
    },
    {
      title: t("services.2.title"),
      desc: t("services.2.desc"),
      img: "/images/process-optimization.png",
    },
    {
      title: t("services.3.title"),
      desc: t("services.3.desc"),
      img: "/images/tech-integration.png",
    },
    {
      title: t("services.4.title"),
      desc: t("services.4.desc"),
      img: "/images/leadership.png",
    },
    {
      title: t("services.5.title"),
      desc: t("services.5.desc"),
      img: "/images/compliance.png",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-[#070B2A] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/bpm2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70" />
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-6">{t("heroTitle")}</h1>
          <p className="text-2xl max-w-3xl mx-auto">{t("heroDesc")}</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-white relative overflow-hidden py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/about2.jpeg"
            alt="Business foundation"
            className=" shadow"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">{t("overviewTitle")}</h2>
            <p className="text-gray-600 leading-relaxed">{t("overviewParagraphs.0")}</p>
            <p className="text-gray-600 leading-relaxed">{t("overviewParagraphs.1")}</p>
          </div>
        </div>
        <div className="absolute -bottom-70 -right-20 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Services Offered */}
      <section className="bg-[#070B2A] relative overflow-hidden text-white py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">{t("servicesTitle")}</h2>
          <p className="text-white/70 mt-2">{t("servicesSubheading")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 shadow-md hover:bg-gray-700 hover:shadow-xl transition duration-300 text-center hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-white/70 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="absolute -bottom-30 -right-20 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Why Choose Reet Tech */}
      <section className="bg-indigo-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/bpm2.jpg"
            alt="Why Reet Technologies"
            className=" shadow"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-indigo-800">{t("whyChooseTitle")}</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              {t.raw("whyChoosePoints").map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="bg-[#070B2A] text-white py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{t("trustedTitle")}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {t.raw("trustStats").map((item, idx) => (
            <div key={idx}>
              <h3 className="text-4xl font-bold text-indigo-700">{item.stat}</h3>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Call To Action */}
      <section className="bg-indigo-800 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">{t("ctaTitle")}</h2>
        <p className="text-lg mb-6">{t("ctaDesc")}</p>
        <button className="bg-white text-indigo-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          {t("ctaBtn")}
        </button>
      </section>

      {/* Contact Section */}
      <ContactUsSection />
    </>
  );
}
