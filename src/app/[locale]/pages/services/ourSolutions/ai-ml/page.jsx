"use client";
export const dynamic = "force-dynamic";


import React from "react";
import { useTranslations } from "next-intl";

import TestimonialSection from "@/components/sections/TestimonialSection";
import ContactUsSection from "@/components/sections/ContactUsSection";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AiMlSolutionsPage() {
  const t = useTranslations("aiml");

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[url('/Instagram.jpeg')] bg-cover bg-center h-screen py-60 lg:py-80 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/30 z-0"></div>
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            {t("heroTitle")}
          </h1>
          <p className="text-white/70 text-lg">{t("heroDesc")}</p>
        </motion.div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Image
            src="/test/2.jpg"
            alt="CRM ERP Overview"
            width={600}
            height={400}
            className="w-full"
          />
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-700">
              {t("overviewTitle")}
            </h2>

            <p className="text-base sm:text-lg text-gray-700 mb-6">
              {t("overviewDesc")}
            </p>
            <ul className="space-y-4 text-gray-600 text-base">
              <li>✅ Predictive analytics for accurate forecasting</li>
              <li>✅ Customized UI/UX design for your audience</li>
              <li>✅ Real-time data classification and clustering</li>
              <li>✅ Pattern recognition for improved strategy</li>
              <li>✅ Scalable machine learning deployment</li>
              {/* {t.raw("whyUsPointsone").map((item, idx) => (
                <ul key={idx} className="space-y-4 text-white/80">
                  <li>✅ {item}</li>
                </ul>
              ))} */}
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {t.raw("featureItems").map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-8 shadow-lg border border-gray-700 hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-[#070B2A] text-white py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            {t("industriesTitle")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-800">
            {t.raw("industries").map((item, idx) => (
              <div
                key={idx}
                className="bg-white hover:bg-indigo-50 p-6 shadow border border-gray-200 transition"
              >
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-indigo-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Image
                        src="/test/5.jpg"

            alt="CRM ERP Overview"
            width={600}
            height={400}
            className="w-full"
          />
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              {t("journeyTitle")}
            </h2>
            <ol className="space-y-6 text-left max-w-3xl mx-auto">
              {t.raw("journeySteps").map((item, idx) => (
                <li
                  key={idx}
                  className="relative text-white/80 pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:h-4 before:w-4 before:rounded-full before:bg-indigo-400"
                >
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-white py-20 px-6 text-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t("caseStudyTitle")}
            </h3>
            <p className="mb-6 text-gray-700">{t("caseStudyDesc")}</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              {t.raw("caseStudyPoints").map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <img
                                  src="/test/4.jpg"

              alt="Case Study"
              className=" shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#070B2A] text-white py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            {t("whyChooseUsTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                desc: "Our AI scientists, engineers, and domain experts bring years of experience.",
                icon: "👨‍🔬",
              },
              {
                title: "Customized Solutions",
                desc: "We tailor AI models specifically for your business needs.",
                icon: "🛠️",
              },
              {
                title: "Ethical AI Practices",
                desc: "Our solutions prioritize transparency, fairness, and responsibility.",
                icon: "⚖️",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 shadow-md hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
            {t.raw("whyChooseUs").map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 shadow-md hover:shadow-lg transition"
              >
                {/* <div className="text-4xl mb-4">{item.icon}</div> */}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="bg-[#070B2A] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            {t("technologiesTitle")}
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-gray-800 text-sm font-medium">
            {t.raw("technologies").map((item, idx) => (
              <span
                key={idx}
                className="bg-gray-100 px-4 py-2 rounded-full shadow-sm hover:bg-indigo-50 transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="bg-indigo-950 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            {t("successStoriesTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.raw("successStories").map((item, idx) => (
              <div key={idx} className="bg-indigo-800 p-6 shadow">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-indigo-100">{item.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#070B2A] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            {t("faqTitle")}
          </h2>
          <div className="space-y-6">
            {t.raw("faqs").map((item, idx) => (
              <div key={idx} className="border border-gray-200 p-6 ">
                <h4 className="text-lg font-semibold mb-2">{item.q}</h4>
                <p className="text-white/80">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-800 text-white text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">{t("ctaTitle")}</h2>
          <p className="text-lg text-white/80 mb-10">
            Our AI/ML team is ready to design intelligent solutions tailored to
            {t("ctaDesc")}
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-indigo-900 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-indigo-100 transition"
          >
            {t("ctaBtn")}
          </a>
        </div>
      </section>

      {/* Testimonials & Contact */}
      <TestimonialSection />
      <div id="contact">
        <ContactUsSection />
      </div>
    </>
  );
}
