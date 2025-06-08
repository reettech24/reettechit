"use client";

import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import { useTranslations } from "next-intl";
import React from "react";

export default function Page() {
  const t = useTranslations("softwaredevelopment");

  return (
    <>
      <section
        className="bg-[#070B2A] text-white py-42 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/AboutUs.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70" />
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-6">{t("heroTitle")}</h1>
          <p className="text-2xl max-w-3xl mx-auto">{t("heroDesc")}</p>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="text-3xl font-bold mb-4">{t("overviewTitle")}</div>
          <p className="text-gray-600 max-w-3xl mx-auto">{t("overviewDesc")}</p>
          <div className="absolute -bottom-0 -right-0 opacity-20 w-screen">
            <img src="/p1.png" alt="Nexus India Logo" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 px-6 bg-[#070B2A] text-white w-full">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold mb-10">{t("solutionsTitle")}</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.raw("solutions").map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 shadow-md shadow-black text-center hover:shadow-lg transition"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 mx-auto mb-4"
                />
                <div className="font-semibold text-lg text-white">{item.title}</div>
                <p className="text-sm text-white/80 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-70 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      <section className="relative overflow-hidden py-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img
              src="/digitaltransformation.jpeg"
              alt="Why Partner With Us"
              className="w-full h-120 shadow-lg object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="text-2xl font-bold mb-6">{t("whyUsTitle")}</div>
            <ul className="space-y-4 text-gray-700 text-md">
              {t.raw("whyUsPoints").map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="absolute -bottom-70 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" />
        </div>
      </section>

      <section className="py-20 px-6 bg-[#070B2A] text-white w-full">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-2xl font-bold mb-10">{t("processTitle")}</div>
          <div className="grid md:grid-cols-4 gap-6 text-left text-sm text-gray-600">
            {t.raw("processSteps").map((step, idx) => (
              <div key={idx} className="bg-gray-800 p-5 shadow shadow-black">
                <div className="text-lg font-medium mb-2 text-white">
                  {step.title}
                </div>
                <div className="text-white/80">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-2xl font-bold text-center mb-10">
            {t("industriesTitle")}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-gray-700">
            {t.raw("industries").map((sector, idx) => (
              <div key={idx} className="p-4 bg-gray-800 text-white">
                {sector}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-50 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" />
        </div>
      </section>

      <section className="py-20 relative overflow-hidden bg-[#070B2A] text-white px-6 mx-auto">
        <div className="text-2xl font-bold text-center mb-10">
          {t("techStackTitle")}
        </div>
        <div className="flex justify-center flex-wrap gap-6">
          {["react","nodejs","nextjs","python","docker","mongodb","javascript","typescript","kubernetes","redis","postgresql","firebase","flutter","java","kotlin","swift"].map((tech, idx) => (
            <img
              key={idx}
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
              alt={tech}
              className="w-12 h-12"
            />
          ))}
        </div>
        <div className="absolute -bottom-70 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" />
        </div>
      </section>

      <section className="py-20 px-6 relative overflow-hidden bg-white max-w-6xl mx-auto">
        <div className="text-2xl font-bold text-center mb-10">
          {t("caseStudiesTitle")}
        </div>
        <div className="space-y-8">
          {t.raw("caseStudies").map((cs, idx) => (
            <div key={idx} className="bg-gray-900 p-6 shadow">
              <div className="text-lg font-semibold text-white">{cs.title}</div>
              <p className="text-sm mt-1 text-white/80">{cs.summary}</p>
              <div className="text-sm text-blue-700 mt-2">{cs.metrics}</div>
            </div>
          ))}
        </div>
        <div className="absolute -bottom-70 right-0 opacity-30 w-screen">
          <img src="/p2.png" alt="Nexus India Logo" />
        </div>
      </section>

      <section className="py-20 px-6 bg-[#070B2A] text-white mx-auto text-center">
        <div className="text-2xl font-bold mb-12">{t("resultsTitle")}</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-blue-900">
          {t.raw("results").map((res, idx) => (
            <div key={idx} className="bg-blue-50 p-6">
              <div className="text-3xl font-bold">{res.value}</div>
              <div className="text-sm text-gray-600 mt-1">{res.label}</div>
            </div>
          ))}
        </div>
      </section>

      <TestimonialSection />

      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <div className="text-3xl font-bold mb-4">{t("ctaTitle")}</div>
        <p className="mb-6 text-white/80">{t("ctaDesc")}</p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-100 transition">
          {t("ctaBtn")}
        </button>
      </section>

      <section className="py-20 px-6 bg-[#070B2A] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-2xl font-bold text-center mb-10">
            {t("faqsTitle")}
          </div>
          <div className="space-y-6">
            {t.raw("faqs").map((faq, idx) => (
              <details key={idx} className="bg-white p-4 rounded-md shadow">
                <summary className="cursor-pointer font-medium text-lg text-black">
                  {faq.q}
                </summary>
                <p className="mt-2 text-black text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactUsSection />
    </>
  );
}
