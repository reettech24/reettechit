"use client";
export const dynamic = "force-dynamic";


import React from "react";
import { useTranslations } from "next-intl";

import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function page() {
  const t = useTranslations("bfsi");

  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-[#0D1B2A] text-white py-56 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/banners/bfsi.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4"> {t("heroTitle")}</h1>
          <p className="text-white/70 max-w-3xl mx-auto">{t("heroDesc")} </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-6 bg-white text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">{t("overviewTitle")}</h2>
        <p className="text-gray-700">{t("overviewDesc")}</p>
      </section>

      {/* Feature Grid */}
      <section className="bg-[#070B2A] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* {[
            {
              title: "Omnichannel Experience",
              desc: "Unified experiences across mobile, web & branches.",
            },
            {
              title: "Secure Architecture",
              desc: "End-to-end encryption & compliance-ready systems.",
            },
            {
              title: "AI-Driven Analytics",
              desc: "Detect fraud & personalize banking with AI/ML.",
            },
            {
              title: "Digital KYC",
              desc: "Frictionless onboarding with e-KYC and biometric validation.",
            },
            {
              title: "Cloud-Native Infra",
              desc: "Scale with confidence using cloud-powered systems.",
            },
            {
              title: "Regulatory Readiness",
              desc: "Stay ahead with compliance automation tools.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 shadow hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold mb-2 text-white">
                {item.title}
              </h4>
              <p className="text-white/80">{item.desc}</p>
            </div>
          ))} */}

          {t.raw("featureItems").map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 shadow hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold mb-2 text-white">
                {item.title}
              </h4>
              <p className="text-white/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Digital Transformation Timeline */}
      <section className="bg-[#070B2A] relative overflow-hidden text-white  py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-10">{t("journeyTitle")}</h3>
          <ol className="relative border-l border-gray-300 space-y-10 text-left">
            {/* {[
              "Strategy Consultation & Compliance Audit",
              "Designing UX-First Banking Interfaces",
              "Building Scalable & Secure Platforms",
              "Data Integration & Legacy System Modernization",
              "Deployment, Monitoring & Optimization",
            ].map((step, i) => (
              <li key={i} className="ml-4">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-1.5" />
                <p className="text-lg font-medium text-blue-900">{`Step ${
                  i + 1
                }: ${step}`}</p>
              </li>
            ))} */}

            {t.raw("journeySteps").map((point, idx) => (
              <li key={idx} className="ml-4">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-1.5" />
                <p className="text-lg font-medium text-blue-900">{`Step ${
                  idx + 1
                }: ${point}`}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="absolute -bottom-20 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Partner Logos */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h3 className="text-xl font-bold mb-8">{t("partnersTitle")}</h3>
        <div className="flex justify-center items-center gap-10 flex-wrap max-w-5xl mx-auto">
          {["visa", "mastercard", "paypal", "stripe", "revolut"].map(
            (logo, i) => (
              <img
                key={i}
                src={`/logos/${logo}.png`}
                alt={logo}
                className="h-10 grayscale hover:grayscale-0 transition"
              />
            )
          )}
        </div>
      </section>

      {/* Security & Certification */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">{t("partnersTitle")}</h3>
          <p className="text-gray-600 mb-6">{t("securityTitle")}</p>
       
          <ul className="grid md:grid-cols-2 gap-6 text-left text-gray-700">
            {t.raw("securityPoints").map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Use Case Scenarios */}
      <section className="py-20 px-6 relative bg-[#070B2A] text-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-10 text-white">
            {t("useCasesTitle")}
          </h3>
          <div className="space-y-8">
         

            {t.raw("useCases").map((item, idx) => (
              <div key={idx} className="bg-gray-800 p-6">
                <h4 className="font-semibold text-xl mb-2 text-white">
                  {item.heading}
                </h4>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-10">
            {t("insightsTitle")}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
          
            {t.raw("insights").map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-900 p-6 shadow hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-lg mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
