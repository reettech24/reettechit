"use client";
export const dynamic = "force-dynamic";

import { useTranslations } from "next-intl";
import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import React from "react";

export default function Page() {
  const t = useTranslations("jobshiring");

  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-[#0A1A3F] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/breadcrumb.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0A1A3F] opacity-80" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            {" "}
            {t("heroTitle")}
          </h1>
          <p className="text-white/70"> {t("heroDesc")}</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{t("overviewTitle")}</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">{t("overviewDesc")}</p>
      </section>

      {/* Job Openings */}
      <section className="relative bg-[#070B2A] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-white">
            {t("availableJobsTitle")}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.raw("featureItems").map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 shadow hover:shadow-xl transition"
              >
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-white/80 mb-3">{item.desc}</p>
                <div className="flex justify-between text-sm text-whaite/60">
                  {/* <span>{job.location}</span>
                  <span>{job.type}</span> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-70 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Life at Company */}
      <section className="py-20 px-6 relative overflow-hidden bg-[#070B2A] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 text-white">
            {t("securityTitle")}
          </h3>
          <p className="text-white/80 mb-10">{t("securityDesc")}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {["/test/20.jpeg", "/test/21.jpeg", "/test/32.jpeg"].map(
              (img, idx) => (
                <img
                  key={idx}
                  src={`${img}`}
                  alt="Life at Company"
                  className=" object-cover h-64 w-full shadow-md z-10"
                />
              )
            )}
          </div>
        </div>

        <div className="absolute -bottom-0 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold"> {t("journeyTitle")}</h3>
          <p className="text-black max-w-3xl mx-auto mt-2">
            More than just a job — it’s a journey of learning, impact, and
            collaboration.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {t.raw("journeySteps").map((item, idx) => (
            <div key={idx} className="bg-gray-900 p-6 shadow-sm rounded-md">
              <img
                src={`/test/${20 + idx}.jpeg`} // Assumes filenames like 20.jpeg, 21.jpeg, etc.
                alt="Life at Company"
                className="object-cover h-64 w-full mb-4 rounded shadow-md"
              />
              <h4 className="font-semibold text-white text-lg">{item}</h4>
              <p className="text-sm text-white/80 mt-2">
                We value diversity, transparency, and honest collaboration.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="relative bg-[#070B2A] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">
            {t("partnersTitle")}
          </h3>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            
            {t.raw("securityPoints").map((perk, idx) => (
              <div key={idx} className="bg-gray-800 p-6 shadow-sm">
                <div className="text-3xl mb-3">{perk.icon}</div>
                <h4 className="font-semibold text-lg mb-1 text-white">
                  {perk.title}
                </h4>
                <p className="text-sm text-white/80">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-70 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Employee Spotlight */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Employee Spotlight</h3>
          <blockquote className="italic text-gray-700 mb-4">
            "Joining Reet Technologies has been a transformative
            experience—supportive team, meaningful projects, and constant
            growth!"
          </blockquote>
          <p className="font-semibold">— Priya M., Product Designer</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black text-white py-20 px-6 text-center rounded-t-3xl">
        <h3 className="text-3xl font-bold mb-4">{t("ctaTitle")}</h3>
        <p className="mb-6 text-white/90">{t("ctaDesc")}</p>
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
