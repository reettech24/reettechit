"use client";
export const dynamic = "force-dynamic";


import { useTranslations } from "next-intl";

import ContactUsSection from "@/components/sections/ContactUsSection";
import NexusSolutionsSection from "@/components/sections/NexusSolutionsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import Image from "next/image";
import React from "react";

export default function Page() {
  const t = useTranslations("crm");

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-40 sm:py-40 md:py-52"
        style={{ backgroundImage: "url('/banners/R&D1.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B2A]/80 to-[#1E1E3F]/80" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            {t("heroTitle")}
          </h1>

          <p className="text-white text-base sm:text-lg leading-relaxed">
            {t("heroDesc")}
          </p>
        </div>
      </section>
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Image
            src="/test/43.jpeg"
            alt="CRM ERP Overview"
            width={600}
            height={400}
            className="w-full h-96 object-cover"
          />
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#070B2A]">
              {t("overviewTitle")}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              {t("overviewDesc")}
            </p>
            <ul className="space-y-4 text-gray-600 text-base">
              <li>
                ✅ Tailor-Made CRM Solutions for Smart Customer Management
              </li>
              <li>✅ ERP Solutions Designed for Operational Excellence</li>
              <li>✅ Advanced Inventory Management Software</li>
              <li>✅ Make Informed Business Decisions with Smart Dashboards</li>
              {/* 
              {t.raw("whyUsPointstwo").map((item, idx) => (
                <li key={idx}>✅ {item}</li>
              ))} */}
            </ul>
          </div>
        </div>
      </section>
      {/* Core Modules */}
      <section className="bg-[#070B2A] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("coreModulesTitle")}
          </h2>
          <p className="text-white/80 mb-10">{t("coreModulesDesc")}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 text-left">
            {/* {[
              {
                title: "Sales & Lead Management",
                desc: "Track leads, nurture prospects, and optimize your pipeline.",
                icon: "/icons/sales.svg",
              },
              {
                title: "Customer Support",
                desc: "Case tracking, SLA management, and multi-channel communication.",
                icon: "/icons/support.svg",
              },
              {
                title: "Finance & Billing",
                desc: "Automated billing, invoicing, and financial analytics.",
                icon: "/icons/finance.svg",
              },
              {
                title: "Inventory & SCM",
                desc: "Live stock tracking, purchase orders, and supplier integration.",
                icon: "/icons/inventory.svg",
              },
              {
                title: "HR & Payroll",
                desc: "Employee records, payroll automation, and performance tracking.",
                icon: "/icons/hr.svg",
              },
              {
                title: "Reports & Insights",
                desc: "Advanced analytics and customizable reports for smarter decisions.",
                icon: "/icons/reports.svg",
              },
            ].map((mod, index) => (
              <div
                key={index}
                className="bg-gray-800 hover:bg-gray-700 p-6 sm:p-8 shadow-lg hover:scale-105 transition-transform"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {mod.title}
                </h3>
                <p className="text-white/80 text-sm">{mod.desc}</p>
              </div>
            ))} */}
            {t.raw("coreModules").map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 hover:bg-gray-700 p-6 sm:p-8 shadow-lg hover:scale-105 transition-transform"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Overview */}
      <section className="bg-[#070B2A] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t("featuresOverviewTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 text-left">
            <div>
              {/* <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Complete Customization
              </h3>
              <p className="text-white/80 mb-4">
                Every module and dashboard can be tailored to your team’s exact
                workflow and needs.
              </p>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Cloud-Native
              </h3>
              <p className="text-white/80 mb-4">
                Access your platform anywhere, anytime with enterprise-grade
                cloud hosting.
              </p>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Seamless Integration
              </h3>
              <p className="text-white/80">
                Connect with third-party tools including WhatsApp, Email,
                Payment Gateways, and more.
              </p> */}

              {t.raw("featuresOverview").map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>
            <Image
              src="/photos/crm3.jpg"
              alt="ERP Benefits"
              width={600}
              height={400}
              className="w-full shadow-lg"
            />
          </div>
        </div>
      </section>
      <NexusSolutionsSection />
      {/* Industry Use Cases */}
      <section className="bg-gray-100 py-16 sm:py-24 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#070B2A] mb-6">
            {t("industryUseCasesTitle")}
          </h2>
          <p className="text-gray-600 mb-10">{t("industryUseCasesDesc")}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 text-left">
            {/* {[
              "Retail & E-commerce",
              "Healthcare",
              "Manufacturing",
              "Education",
              "Real Estate",
              "Logistics",
            ].map((sector, i) => (
              <div
                key={i}
                className=" bg-gray-900 hover:bg-gray-800 p-6 shadow hover:shadow-xl transition"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {sector}
                </h3>
                <p className="text-white/70 text-sm ">
                  Custom workflows, integrations, and reports for the{" "}
                  {sector.toLowerCase()} sector.
                </p>
              </div>
            ))} */}
            {t.raw("industryUseCases").map((item, idx) => (
              <div
                key={idx}
                className=" bg-gray-900 hover:bg-gray-800 p-6 shadow hover:shadow-xl transition"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm ">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#070B2A] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {" "}
            {t("crmFeaturesTitle")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {/* {[
              "Lead & sales management",
              "Customer segmentation & tracking",
              "Email & SMS campaign automation",
              "Custom dashboards with real-time analytics",
              "Integrated support ticketing system",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 hover:bg-gray-700 p-6 shadow-md rounded transition"
              >
                <h3 className="text-lg font-semibold mb-2">{item}</h3>
              </div>
            ))} */}
            {t.raw("crmFeatures").map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 hover:bg-gray-700 p-6 shadow-md rounded transition"
              >
                <h3 className="text-lg font-semibold mb-2">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-100 text-[#070B2A] py-16 sm:py-24 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t("erpModulesTitle")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {/* {[
              "Finance & accounting",
              "Human resources management",
              "Procurement & supply chain",
              "Production planning & control",
              "Compliance and reporting automation",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white hover:bg-gray-50 p-6 shadow-md rounded transition"
              >
                <h3 className="text-lg font-semibold mb-2">{item}</h3>
              </div>
            ))} */}
            {t.raw("erpModules").map((item, idx) => (
              <div
                key={idx}
                className="bg-white hover:bg-gray-50 p-6 shadow-md rounded transition"
              >
                <h3 className="text-lg font-semibold mb-2">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Inventory Management */}
      <section className="bg-[#070B2A] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t("inventoryHighlightsTitle")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {/* {[
              "Stock level monitoring and alerts",
              "Barcode & batch tracking",
              "Purchase and order management",
              "Warehouse & logistics integration",
              "Inventory dashboards and reporting",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 hover:bg-gray-700 p-6 shadow-md rounded transition"
              >
                <h3 className="text-lg font-semibold mb-2">{item}</h3>
              </div>
            ))} */}
            {t.raw("inventoryHighlights").map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 shadow hover:shadow-lg text-center"
              >
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {item}
                </h4>
                <p className="text-white/80 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-20 bg-[#070B2A] text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t("ctaTitle")}</h2>
        <p className="text-white/80 max-w-xl mx-auto mb-6">{t("ctaDesc")}</p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 sm:px-8 sm:py-3 bg-white text-[#070B2A] font-semibold rounded hover:bg-gray-100 transition"
        >
          {t("ctaBtn")}
        </a>
      </section>
      {/* Testimonials */}
      <TestimonialSection />
      {/* Contact */}
      <ContactUsSection />
    </>
  );
}
