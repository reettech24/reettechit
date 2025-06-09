"use client";
export const dynamic = "force-dynamic";


import { useTranslations } from "next-intl";
import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import Image from "next/image";
import React from "react";

export default function page() {
  const t = useTranslations("digitaltransformation");
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-[#070B2A] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/DT.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70" />
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-6">{t("heroTitle")}</h1>
          <p className="text-2xl max-w-3xl mx-auto">{t("heroDesc")}</p>
        </div>
      </section>

      {/* Why R&D Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              {t("section1Title")}
            </h2>

            {t.raw("section1Points").map((item, idx) => (
              <p key={idx} className="text-gray-600 mb-4">
                {item}
              </p>
            ))}
          </div>
          <img src="/DT4.jpeg" alt="R&D Illustration" className="shadow-lg" />
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-20 bg-[#070B2A] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <Image
            src="/DT1.png"
            alt="Digital Transformation"
            width={600}
            height={400}
            className=" shadow w-full h-auto"
          />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              {t("overviewTitle")}
            </h2>
            <p className="text-white/80 mb-4 text-sm sm:text-base">
              {t("overviewDesc")}
            </p>
            <ul className="list-disc pl-5 text-white/60 space-y-2 text-sm sm:text-base">
              {t.raw("overviewPoints").map((item, idx) => (
                <li key={idx}> {item} </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#070B2A] text-white py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            {t("servicesTitle")}
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
            {t("servicesDesc")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-10">
            {t.raw("services").map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 hover:bg-gray-700 p-5 shadow text-left"
              >
                {/* Uncomment below line if using Next.js Image component */}
                {/* <Image src={service.icon} alt={service.title} width={40} height={40} className="mb-4" /> */}
                <h3 className="font-semibold text-lg text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-20 bg-white border-t">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#070B2A] mb-6">
              {t("benefitsTitle")}
            </h2>
            <ul className="space-y-4 text-gray-700 text-sm sm:text-base">
              {t.raw("benefits").map((item, idx) => (
                <li key={idx}> {item} </li>
              ))}
            </ul>
          </div>
          <Image
            src="/DT3.png"
            alt="Benefits"
            width={600}
            height={400}
            className=" shadow w-full h-auto"
          />
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-20 bg-[#070B2A] text-white ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {t("caseStudyTitle")}
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base">
            {t("caseStudyDesc")}
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition text-sm sm:text-base">
            {t("caseStudyCta")}
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Contact */}
      <ContactUsSection />
    </>
  );
}
