"use client";
export const dynamic = "force-dynamic";

import { useTranslations } from "next-intl";
import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import React from "react";

export default function Page() {
  const t = useTranslations("studentcourses");

  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-[#0C1E3C] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/breadcrumb.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0C1E3C] opacity-80" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            {t("heroTitle")}
          </h1>
          <p className="text-white/70"> {t("heroDesc")}</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">{t("overviewTitle")}</h2>
        <p className="text-gray-700">{t("overviewDesc")}</p>
      </section>

      {/* Courses Grid */}
      <section className=" relative bg-[#070B2A] text-white py-20 px-6">
        <div className="absolute -top-0 -right-0">
          <img src="/mask-shape.png" alt="Nexus India Logo" className=" h-96" />
        </div>
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12 text-white">
            {t("availableCoursesTitle")}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.raw("featureItems").map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 shadow hover:shadow-xl transition text-center"
              >
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-sm mb-3 text-white/80">{item.desc}</p>
                <span className="inline-block px-3 py-1 text-sm text-blue-400 rounded-full">
                  Duration: {item.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className=" relative py-20 bg-[#070B2A] text-white px-6 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white">
              {t("journeyTitle")}
            </h3>
            <p className="text-white/80 max-w-3xl mx-auto mt-2">
              {/* {t("featureTitle")} */}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <img
                src="/logo3.png"
                className="w-40 mx-auto mb-3"
                alt="Mentorship"
              />
              <h4 className="font-semibold">1-on-1 Mentorship</h4>
              <p className="text-sm text-white/80 mt-2">
                Get guidance from experts working at top tech firms.
              </p>
            </div>
            <div>
              <img
                src="/logo3.png"
                className="w-40 mx-auto mb-3"
                alt="Mentorship"
              />
              <h4 className="font-semibold">Industry Certification</h4>
              <p className="text-sm text-white/80 mt-2">
                Earn certificates that boost your resume and confidence.
              </p>
            </div>
            <div>
              <img
                src="/logo3.png"
                className="w-40 mx-auto mb-3"
                alt="Mentorship"
              />
              <h4 className="font-semibold">Real Projects</h4>
              <p className="text-sm text-white/80 mt-2">
                Work on real-world use cases and build a portfolio.
              </p>
            </div>
            {t.raw("journeySteps").map((item, idx) => (
              <div key={idx}>
                <img
                  src="/logo3.png"
                  className="w-40 mx-auto mb-3"
                  alt="Mentorship"
                />
                <h4 className="font-semibold">{item}</h4>
                <p className="text-sm text-white/80 mt-2">
                  Work on real-world use cases and build a portfolio.
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-75 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">{t("partnersTitle")}</h3>
        <p className="mb-6 text-white/90">{t("securityTitle")}</p>
        <a
          href="/pages/contact"
          className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition"
        >
          {t("ctaBtn")}
        </a>
      </section>

      <ContactUsSection />
    </>
  );
}
