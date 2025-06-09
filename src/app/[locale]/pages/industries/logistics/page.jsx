"use client";
export const dynamic = "force-dynamic";


import React from "react";
import { useTranslations } from "next-intl";

import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function page() {
    const t = useTranslations("logistic");
  
  return (
    <>
      {/* Hero Banner */}
      <section
        className="bg-[#081C3A] text-white py-56 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/banners/logistics2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {" "}
            {t("heroTitle")}
          </h1>
          <p className="text-white/80 text-lg">{t("heroDescription")}</p>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          {t("industryChallengesTitle")}
        </h2>
        <p className="text-gray-700">{t("industryChallengesDescription")}</p>
      </section>

      {/* Solutions Section */}
      <section className="relative bg-[#070B2A] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12 text-white">
            {t("solutionsTitle")}
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Fleet Tracking & Management",
                desc: "Monitor vehicle locations, driver behavior, and route efficiency in real-time.",
                icon: "/icons/fleet.svg",
              },
              {
                title: "Route Optimization",
                desc: "Reduce fuel costs and delivery times with AI-powered routing tools.",
                icon: "/icons/route.svg",
              },
              {
                title: "Supply Chain Visibility",
                desc: "Improve transparency and inventory tracking across suppliers, distributors, and customers.",
                icon: "/icons/visibility.svg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-800 p-6 shadow text-center hover:shadow-lg transition"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 mx-auto mb-4"
                />
                <h4 className="font-semibold text-lg mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
            {t.raw("solutions").map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 shadow text-center hover:shadow-lg transition"
              >
                {/* <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 mx-auto mb-4"
                /> */}
                <h4 className="font-semibold text-lg mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-10">{t("benefitsTitle")}</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Lower Delivery Costs",
              "Faster Fulfillment",
              "Real-Time Customer Updates",
              "Improved Driver Safety",
            ].map((benefit, i) => (
              <div key={i} className="p-4 bg-gray-900 shadow-sm">
                <p className="font-medium text-white/80">{benefit}</p>
              </div>
            ))}
            {t.raw("benefits").map((item, idx) => (
              <div key={idx} className="p-4 bg-gray-900 shadow-sm">
                <p className="font-medium text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">{t("useCaseTitle")}</h3>
          <p className="text-gray-700 mb-4">{t("useCaseDescription")}</p>
          <a
            href="/case-studies/logistics"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {t("useCaseCTA")}
          </a>
        </div>
      </section>

      {/* Emerging Trends */}
      <section className="py-20 px-6 relative bg-[#070B2A] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-10 text-white">
            {t("trendsTitle")}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Green Logistics",
                desc: "Sustainable practices like EV fleets and carbon tracking are becoming standard.",
              },
              {
                title: "Last-Mile Automation",
                desc: "Drones and autonomous vehicles are revolutionizing final-mile delivery.",
              },
              {
                title: "Digital Twins",
                desc: "Real-time virtual supply chains enable better forecasting and planning.",
              },
            ].map((trend, i) => (
              <div key={i} className="bg-gray-800 p-6 shadow">
                <h4 className="text-lg font-semibold mb-2 text-white">
                  {trend.title}
                </h4>
                <p className="text-sm text-white/80">{trend.desc}</p>
              </div>
            ))}
            {t.raw("trends").map((item, idx) => (
              <div key={idx} className="bg-gray-800 p-6 shadow">
                <h4 className="text-lg font-semibold mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-6 relative bg-[#070B2A] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">
            {t("techStackTitle")}
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-10">
            {t("techStackDescription")}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "AWS",
              "Google Maps API",
              "IoT Sensors",
              "React.js",
              "Next.js",
              "MongoDB",
              "PostgreSQL",
            ].map((tech, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-800 font-medium px-4 py-2 rounded-full text-sm shadow"
              >
                {tech}
              </span>
            ))}
            {t.raw("techStack").map((item, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-800 font-medium px-4 py-2 rounded-full text-sm shadow"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-90 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Client Logo Wall */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-10">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {['dhl', 'fedex', 'maersk', 'ups', 'blue-dart'].map((logo, idx) => (
              <img
                key={idx}
                src={`/logos/${logo}.png`}
                alt={`${logo} logo`}
                className="h-12 grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Expert Insight (Thought Leadership) */}
      <section className="py-20 bg-[#081C3A] text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">
            {" "}
            {t("expertInsightTitle")}
          </h3>
          <blockquote className="italic text-white/80 text-lg leading-relaxed">
            {t("expertQuote")}
          </blockquote>
          <p className="mt-6 font-semibold text-white/60">
            {t("expertAuthor")}
          </p>
        </div>
      </section>

      {/* Call-To-Action */}
      <section className="bg-blue-600 text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">{t("ctaTitle")}</h3>
        <p className="mb-6 text-white/90">{t("ctaDescription")}</p>
        <a
          href="/pages/contact"
          className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition"
        >
          {t("ctaButton")}
        </a>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Contact Us */}
      <ContactUsSection />
    </>
  );
}
