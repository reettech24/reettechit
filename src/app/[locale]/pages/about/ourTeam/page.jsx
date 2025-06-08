"use client";

import ContactUsSection from "@/components/sections/ContactUsSection";
import { useTranslations } from "next-intl";
import React from "react";

export default function Page() {
  const t = useTranslations("aboutoutteam");

  const teamMembers = [
    {
      title: t("featureItems.0.title"),
      desc: t("featureItems.0.desc"),
      image: "/work/pankaj.jpg",
    },
    {
      title: t("featureItems.1.title"),
      desc: t("featureItems.1.desc"),
       image: "/work/jai.jpg",

    },
    {
      title: t("featureItems.2.title"),
      desc: t("featureItems.2.desc"),
      image: "/logo3.png",
    },
    {
      title: t("featureItems.3.title"),
      desc: t("featureItems.3.desc"),
      image: "/logo3.png",
    },
    {
      title: t("featureItems.4.title"),
      desc: t("featureItems.4.desc"),
      image: "/logo3.png",
    },
    {
      title: t("featureItems.5.title"),
      desc: t("featureItems.5.desc"),
      image: "/logo3.png",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-[#0A0F2E] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/breadcrumb.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0A0F2E] opacity-70" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{t("heroTitle")}</h1>
          <p className="text-sm text-white/70">{t("heroDesc")}</p>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">{t("overviewTitle")}</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">{t("overviewDesc")}</p>
      </section>

      {/* Meet the Team */}
      <section className="py-20 px-6 bg-[#070B2A] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            {t("heroTitle")}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-gray-800 shadow p-6 text-center hover:shadow-lg transition"
              >
                <img
                  src={member.image}
                  alt={member.title}
                  className="w-60 h-60 mx-auto object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-white">{member.title}</h3>
                <p className="text-sm text-white/80">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Diversity */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">{t("cultureTitle")}</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
          {t("cultureDesc")}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array(4)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className="h-40 bg-gray-200 rounded-lg animate-pulse"
                title="Culture photo placeholder"
              />
            ))}
        </div>
      </section>

      <ContactUsSection />
    </>
  );
}
