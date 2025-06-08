"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import ProjectShowcase from "@/components/sections/ProjectsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import NexusSolutionsSection from "@/components/sections/NexusSolutionsSection";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="bg-[#f0f0f0] text-gray-800">
      {/* Top Banner */}
      <section
        className="bg-[#070B2A] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/breadcrumb.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            {t("bannerTitle")}
          </h1>
          <p className="text-sm text-white/70">{t("breadcrumb")}</p>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Image
            src="/test/4.jpg"
            alt="CRM ERP Overview"
            width={600}
            height={400}
            className="w-full"
          />
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#070B2A]">
              {t("empowerTitle")}
            </h2>

            <p className="text-base sm:text-md text-gray-700 mb-6">
              {t("empowerDescription1")}
            </p>
            <p className="text-base sm:text-md text-gray-700 mb-6">
              {t("empowerDescription2")}
            </p>
            <p className="text-base sm:text-md text-gray-700 mb-6">
              {t("empowerDescription3")}
            </p>

            {/* <div className=" ">
              <ul className="space-y-4 text-sm  text-black/80">
                {t.raw("empowerPoints").map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </section>

      <section className=" relative py-20 px-6 bg-white">
        <div className="absolute -top-20 -left-20">
          <img
            src="/left-shape.png"
            alt="shape"
            className=" h-96 opacity-100"
          />
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              {t("missionTitle")}
            </h2>
            <p className="text-gray-600 mb-4">{t("missionText")}</p>
          </div>
          <img
            src="/Team.jpeg"
            alt="Mission"
            className="shadow-lg object-cover h-full z-10"
          />
        </div>
      </section>

      <section className=" relative py-20 px-6 bg-white">
        <div className="absolute -top-20 -left-20">
          <img
            src="/left-shape.png"
            alt="shape"
            className=" h-96 opacity-100"
          />
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/Team.jpeg"
            alt="Vision"
            className="shadow-lg object-cover h-full z-10"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              {t("visionTitle")}
            </h2>
            <p className="text-gray-600 mb-4">{t("visionText")}</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#070B2A] text-white py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10">{t("coreValuesTitle")}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {t.raw("coreValues").map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-800 shadow hover:shadow-md">
                <div className="text-4xl mb-4">
                  {["💡", "🤝", "🌐", "🚀"][idx]}
                </div>
                <h4 className="font-semibold text-lg text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-white/80 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-2xl font-bold mb-10">{t("journeyTitle")}</h2>
        <div className="space-y-6 max-w-4xl mx-auto text-left text-sm text-gray-700">
          {t.raw("journey").map((event, idx) => (
            <div key={idx}>{event}</div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-6 relative text-center bg-[#070B2A] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10">{t("leadershipTitle")}</h2>
          <div className="grid md:grid-cols-4 gap-10">
            {t.raw("leadership").map((person, idx) => (
              <div key={idx} className="text-center z-10">
                <img
                  src={
                    [
                      "/work/pankaj.jpg",
                      "/logo3.png",
                      "/work/jai.jpg",
                      "/logo3.png",
                      "/logo3.png",
                      "/work/ash.jpg",

                      "/work/durvesh.png",
                      "/logo3.png",
                    ][idx]
                  }
                  alt={person.name}
                  className="w-80 h-80 mx-auto mb-4 object-cover"
                />
                <h4 className="font-semibold text-white">{person.name}</h4>
                <p className="text-sm text-white/80">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-0 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Culture */}
      <section className="bg-[#070B2A] text-white py-20 px-6 text-center">
        <h2 className="text-2xl font-bold mb-8 text-white">
          {t("cultureTitle")}
        </h2>
        <p className="max-w-3xl mx-auto text-sm text-white/80 mb-10">
          {t("cultureText")}
        </p>
        <img
          src="/about2.jpeg"
          alt="Company Culture"
          className="mx-auto shadow-lg md:max-w-4xl"
        />
      </section>

      <ProjectShowcase />
      <NexusSolutionsSection />
      <TestimonialSection />

      {/* CTA */}
      <section className="bg-blue-700 text-white py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">{t("ctaTitle")}</h3>
        <p className="mb-6 text-white/90 max-w-xl mx-auto">{t("ctaDesc")}</p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-gray-100 transition"
        >
          {t("ctaBtn")}
        </a>
      </section>
    </div>
  );
}
