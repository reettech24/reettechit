"use client";
export const dynamic = "force-dynamic";

import React from "react";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ContactUsSection from "@/components/sections/ContactUsSection";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("bpm");

  const services = [
    "Brand Architecture Design",
    "Market Positioning Strategy",
    "Portfolio Rationalization",
    "M&A Brand Integration",
  ].map((_, i) => ({
    title: t(`services.${i}.title`),
    desc: t(`services.${i}.desc`),
    img: [
      "https://cdn-icons-png.flaticon.com/512/2933/2933189.png",
      "https://cdn-icons-png.flaticon.com/512/4775/4775473.png",
      "https://cdn-icons-png.flaticon.com/512/3703/3703373.png",
      "https://cdn-icons-png.flaticon.com/512/3208/3208726.png",
    ][i],
  }));

  const caseStudies = [0, 1].map((i) => ({
    title: t(`caseStudies.${i}.title`),
    desc: t(`caseStudies.${i}.desc`),
    img: [
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
      "https://images.unsplash.com/photo-1743385779347-1549dabf1320?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ][i],
  }));

  const processSteps = [0, 1, 2, 3].map((i) => ({
    title: t(`processSteps.${i}.title`),
    desc: t(`processSteps.${i}.desc`),
  }));

  const whyPoints = [0, 1].map((i) => ({
    title: t(`whyPoints.${i}.title`),
    desc: t(`whyPoints.${i}.desc`),
  }));

  return (
    <>
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

      <section className="bg-white relative overflow-hidden py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/test/9.jpg"
            alt="Business foundation"
            className=" shadow"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">{t("aboutTitle")}</h2>
            {t.raw("aboutParagraphs").map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-70 -right-20 opacity-20 w-screen">
          <img src="/p1.png" alt="Decor" />
        </div>
      </section>

      <section className=" relative overflow-hidden bg-white py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{t("servicesTitle")}</h2>
          <p className="text-gray-600 mt-2">{t("servicesDesc")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 shadow hover:shadow-lg transition"
            >
              <img src={item.img} alt={item.title} className="w-12 h-12 mb-4" />
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-white/80 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#070B2A] relative overflow-hidden text-white py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{t("caseTitle")}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {caseStudies.map((item, i) => (
            <div key={i} className="bg-white p-6 shadow">
              <img src={item.img} alt="Case Study" className=" mb-4" />
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{t("processTitle")}</h2>
          <p className="text-gray-600 mt-2">{t("processDesc")}</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {processSteps.map((item, i) => (
            <div key={i} className="bg-gray-800 text-white p-6 shadow">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className=" text-white/60 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#070B2A] text-white py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{t("whyTitle")}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {whyPoints.map((item, i) => (
            <div key={i} className="bg-gray-800 p-6 shadow">
              <h4 className="font-semibold text-lg text-white">{item.title}</h4>
              <p className="text-white/80 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#070B2A] py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-white font-bold">{t("clientsTitle")}</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {[
            "/partners/logo.png",
            "/partners/logo3.png",
            "/partners/dimplechemicals.png",
            "/partners/happysoul.png",
          ].map((logo, i) => (
            <img key={i} src={logo} alt="Client Logo" className="h-20 w-auto" />
          ))}
        </div>
      </section>

      <TestimonialSection />

      <section className="bg-indigo-700 text-white py-20 text-center px-6">
        <h2 className="text-3xl font-bold">{t("ctaTitle")}</h2>
        <p className="mt-4 text-lg">{t("ctaDesc")}</p>
        <button className="mt-6 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          {t("ctaBtn")}
        </button>
      </section>

      <ContactUsSection />
    </>
  );
}
