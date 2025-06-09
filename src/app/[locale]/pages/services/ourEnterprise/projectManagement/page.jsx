"use client";
export const dynamic = "force-dynamic";

import React from "react";
import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import { useTranslations } from "next-intl";

const offerings = [
  {
    title: "projectManagement.offerings.0.title",
    desc: "projectManagement.offerings.0.desc",
  },
  {
    title: "projectManagement.offerings.1.title",
    desc: "projectManagement.offerings.1.desc",
  },
  {
    title: "projectManagement.offerings.2.title",
    desc: "projectManagement.offerings.2.desc",
  },
  {
    title: "projectManagement.offerings.3.title",
    desc: "projectManagement.offerings.3.desc",
  },
  {
    title: "projectManagement.offerings.4.title",
    desc: "projectManagement.offerings.4.desc",
  },
  {
    title: "projectManagement.offerings.5.title",
    desc: "projectManagement.offerings.5.desc",
  },
];

const lifecycleSteps = [
  "projectManagement.lifecycleSteps.0",
  "projectManagement.lifecycleSteps.1",
  "projectManagement.lifecycleSteps.2",
  "projectManagement.lifecycleSteps.3",
  "projectManagement.lifecycleSteps.4",
  "projectManagement.lifecycleSteps.5",
];

const tools = ["Slack", "Jira", "Trello", "Notion", "ClickUp", "Asana"];

const reasons = [
  "projectManagement.whyUsPoints.0",
  "projectManagement.whyUsPoints.1",
  "projectManagement.whyUsPoints.2",
  "projectManagement.whyUsPoints.3",
  "projectManagement.whyUsPoints.4",
];

const successStories = [
  {
    title: "projectManagement.successStories.0.title",
    desc: "projectManagement.successStories.0.desc",
    result: "projectManagement.successStories.0.result",
  },
  {
    title: "projectManagement.successStories.1.title",
    desc: "projectManagement.successStories.1.desc",
    result: "projectManagement.successStories.1.result",
  },
];

export default function Page() {
  const t = useTranslations();

  return (
    <>
      <section
        className="bg-[#070B2A] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/Team.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70" />
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-6">
            {t("projectManagement.heroTitle")}
          </h1>
          <p className="text-2xl max-w-3xl mx-auto">
            {t("projectManagement.heroDesc")}
          </p>
        </div>
      </section>

      <section className="bg-white relative overflow-hidden py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/nexusindiaonlinemanagement.jpeg"
            alt="Business foundation"
            className=" shadow"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">{t("projectManagement.introTitle")}</h2>
            <p className="text-gray-600 leading-relaxed">{t("projectManagement.introDesc")}</p>
          </div>
        </div>
        <div className="absolute -bottom-20 -right-20 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      <section className="py-24 bg-[#070B2A] relative overflow-hidden text-white">
        <div className=" max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            {t("projectManagement.offeringsTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {offerings.map((item, index) => (
              <div
                key={index}
                className="p-8 bg-gray-800 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {t(item.title)}
                </h4>
                <p className="text-white/80">{t(item.desc)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-40 -right-20 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-[#070B2A] text-white">
        <div className=" max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            {t("projectManagement.lifecycleTitle")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {lifecycleSteps.map((step, index) => (
              <div
                key={index}
                className="bg-indigo-100 p-6 xl border-l-4 border-indigo-600 shadow-sm"
              >
                <p className="text-indigo-800 font-medium mb-2">
                  Step {index + 1}
                </p>
                <p className="text-lg text-gray-700">{t(step)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-10 -right-20 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      <section className="py-24 bg-[#070B2A] text-white text-center">
        <div className=" max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">{t("projectManagement.toolsTitle")}</h2>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {tools.map((tool, index) => (
              <div
                key={index}
                className=" p-6 bg-white shadow hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={`/logos/${tool.toLowerCase()}.svg`}
                  alt={tool}
                  className="w-14 h-14 mx-auto mb-3"
                />
                <p className="text-md font-medium text-black">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className=" max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            {t("projectManagement.whyUsTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-gray-800 p-6 shadow-sm">
                <p className="text-lg text-white">✅ {t(reason)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-70 right-0 opacity-30 w-screen">
          <img src="/p2.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      <section className="py-24 bg-[#070B2A] text-white">
        <div className=" max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            {t("projectManagement.successStoriesTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gray-800 p-6 shadow">
                <h4 className="text-2xl font-semibold text-white mb-2">
                  {t(story.title)}
                </h4>
                <p className="mb-2 text-white/60">{t(story.desc)}</p>
                <p className="text-sm text-white/90">{t(story.result)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection />

      <section className="py-24 bg-gradient-to-r from-indigo-700 to-blue-700 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">
            {t("projectManagement.ctaTitle")}
          </h2>
          <p className="mb-6 text-lg max-w-2xl mx-auto">
            {t("projectManagement.ctaDesc")}
          </p>
          <button className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
            {t("projectManagement.ctaBtn")}
          </button>
        </div>
      </section>

      <ContactUsSection />
    </>
  );
}
