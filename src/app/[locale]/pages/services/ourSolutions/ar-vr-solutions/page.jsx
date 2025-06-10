"use client";
export const dynamic = "force-dynamic";

import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import React from "react";
import VRSection from "@/components/sections/VRSection";

export default function page() {
  const t = useTranslations("arvr");

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[url('/vr.jpeg')] bg-cover bg-center py-80 h-screen text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/30 z-0"></div>
        <motion.div
          className="relative z-10 text-center px-6"
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

      {/* Immersive VR Background Effect */}
      <section className="relative overflow-hidden">
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video> */}
        <div className="relative py-24 px-6 lg:px-20 z-10 text-center">
          <h2 className="text-4xl font-bold text-[#070B2A] mb-6">
            {t("sectiontitle")}
          </h2>
          <p className="text-gray-800 text-lg max-w-3xl mx-auto">
            {t("sectiondesc")}
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className=" relative bg-[#070B2A] text-white py-24 px-6 lg:px-20">
        <div className="absolute -top-20 -left-20 ">
          <img src="/left-shape.png" alt="Nexus India Logo" className=" h-96" />
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t("overviewTitle")}
          </h2>
          <p className="text-white/80 text-lg">{t("overviewDesc")}</p>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className=" relative overflow-hidden py-24 px-6 lg:px-20 bg-[#070B2A] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t("industriesTitle")}
          </h2>
          <p className="text-white/60 mb-10">{t("industriesdesc")}</p>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {t.raw("industries").map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6  shadow hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="absolute -bottom-70 -right-20 opacity-20 w-screen">
            <img src="/p1.png" alt="Nexus India Logo" className="" />
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-[#070B2A] text-white py-24 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">
            {" "}
            {t("technologiesTitle")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.raw("technologies").map((item, idx) => (
              <div key={idx} className="bg-[#10163A] p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Glassmorphism & 3D Tilt */}
      <section className="  bg-[#070B2A] text-white py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            {t("whychosearvr")}
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {t.raw("featureItems").map((item, idx) => (
              <Tilt
                key={idx}
                glareEnable={true}
                glareMaxOpacity={0.45}
                className="glare-wrapper"
              >
                <motion.div
                  className="backdrop-blur-xl bg-gray-900 p-8 shadow-lg border border-white/20 hover:scale-105 transition-transform"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                >
                  {/* <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="mb-4"
                  /> */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Glassmorphism & 3D Tilt */}
      <section className="bg-gradient-to-br from-[#F0F4FF] to-[#E0EAFF] py-24 px-0 lg:p-0">
        <VRSection />
      </section>

      {/* Why Us */}
      <section className="bg-white py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <Image
            src="/test/ar1.jpeg"
            alt="AR VR Showcase"
            width={600}
            height={400}
            className=" shadow-xl"
          />
          <div>
            <h2 className="text-4xl font-bold text-[#070B2A] mb-6">
              {t("whyUsTitle")}
            </h2>
            <ul className="space-y-4 text-gray-700 text-base">
              {t.raw("whyUsPoints").map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#070B2A] to-[#1E1E3F] text-white text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">{t("ctaTitle")}</h2>
        <p className="mb-8 text-white/70">{t("ctaDesc")}</p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 rounded-full bg-white text-[#070B2A] font-semibold hover:bg-gray-200 transition"
        >
          {t("ctaBtn")}
        </a>
      </section>

      {/* Contact */}
      <ContactUsSection />
    </>
  );
}
