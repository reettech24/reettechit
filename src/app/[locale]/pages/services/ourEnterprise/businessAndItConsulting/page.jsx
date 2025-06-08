"use client";

import { useTranslations } from "next-intl";
import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import React from "react";

export default function Page() {
  const t = useTranslations("businessConsulting");

  const services = t.raw("coreServices");
  const whoWeServe = t.raw("whoWeServe");
  const consultingApproach = t.raw("consultingApproach");
  const whyChooseUs = t.raw("whyChooseUs");

  return (
    <>
      <section
        className="bg-[#070B2A] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/banners/careers.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70" />
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-6">
            {t("heroTitle")}
          </h1>
          <p className="text-2xl max-w-3xl mx-auto">{t("heroDesc")}</p>
        </div>
      </section>

      <section className="bg-white relative overflow-hidden py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 leading-relaxed">{t("introText")}</p>
          </div>
          <img
            src="/aboutsectionintrosecond.jpeg"
            alt="Business foundation"
            className=" shadow"
          />
        </div>
        <div className="absolute -bottom-70 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      <section className="py-20 px-6 w-full relative bg-[#070B2A] text-white">
        <div className=" max-w-6xl mx-auto text-center">
          <div className="text-3xl font-bold text-center mb-12">
            {t("coreServicesTitle")}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-xl font-semibold text-white">
                  {service.title}
                </div>
                <div className="text-sm mt-2 text-white/80">{service.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-85 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      <section className="py-20 w-full bg-[#070B2A] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="text-3xl font-bold mb-12">{t("whoWeServeTitle")}</div>
          <div className="flex justify-center flex-wrap gap-12">
            {whoWeServe.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                  <img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className="w-16 h-16 mb-2"
                />
                <div className="font-medium text-lg">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className=" relative overflow-hidden py-20 px-6 w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src="/about2.jpeg"
              alt="Consulting Approach"
              className=" shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2">
            <div className="text-3xl font-bold mb-6 text-center md:text-left">
              {t("consultingApproachTitle")}
            </div>
            <div className="grid gap-6 text-lg text-gray-700">
              {consultingApproach.map((step, idx) => (
                <div key={idx}>
                  <strong>{step.step}:</strong> {step.desc}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute -bottom-70 right-0 opacity-30 w-screen">
          <img src="/p2.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      <section className=" py-20 px-6 w-full bg-[#070B2A] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-3xl font-bold text-center mb-10">
            {t("whyChooseUsTitle")}
          </div>
          <ul className="space-y-4 text-lg text-white/80">
            {whyChooseUs.map((point, index) => (
              <li key={index}>
                ✅ <strong>{point.label}:</strong> {point.desc}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <TestimonialSection />
      <ContactUsSection />
    </>
  );
}
