"use client";
export const dynamic = "force-dynamic";


import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import React from "react";
import { useTranslations } from "next-intl";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Page() {
  const t = useTranslations("consulting");
  const services = t.raw("services");
  const industries = t.raw("industries");
  const impactStories = t.raw("impactStories");
  const trustPoints = t.raw("trustPoints");

  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-[#070B2A] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/Nexnus.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70" />
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-6">{t("heroTitle")}</h1>
          <p className="text-2xl max-w-3xl mx-auto">{t("heroDesc")}</p>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">{t("heroSubtext")}</p>
        </div>
      </section>

      {/* Why Section */}
      <section className="relative py-20 px-6 bg-white">
        <div className="absolute -top-20 -left-20">
          <img src="/left-shape.png" alt="Nexus India Logo" className="h-96 opacity-100" />
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img src="/Team.jpeg" alt="R&D Illustration" className="shadow-lg object-cover h-full z-10" />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">{t("whyTitle")}</h2>
            {t.raw("whyParagraphs").map((para, i) => (
              <p className="text-gray-600 mb-4" key={i}>{para}</p>
            ))}
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {t.raw("whyBullets").map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 bg-[#070B2A] text-white overflow-hidden">
        <img src="/design.png" alt="Decor" className="absolute bottom-0 left-0 w-[600px] h-screen opacity-10 pointer-events-none" />
        <img src="/footer-shape-1.png" alt="Decor" className="absolute top-0 right-0 w-[600px] pointer-events-none" />

        <div className="text-center mb-14 relative z-10">
          <h2 className="text-4xl font-bold">{t("servicesTitle")}</h2>
          <p className="text-white/60 mt-3">{t("servicesDesc")}</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 mb-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
            modules={[Pagination, Navigation, Autoplay]}
          >
            {services.map((service, i) => (
              <SwiperSlide key={i}>
                <div className="bg-gray-800 shadow-xl p-5 h-full hover:shadow-2xl transition duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-blue-700">{service.title}</h3>
                  <p className="py-3 text-white/80">{service.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex z-10">
          <div className="swiper-button-prev !bg-white/20 !text-white !w-12 !h-12 !flex !items-center !justify-center hover:!bg-white/30 transition" />
          <div className="swiper-button-next !bg-white/20 !text-white !w-12 !h-12 !flex !items-center !justify-center hover:!bg-white/30 transition" />
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative overflow-hidden bg-gray-100 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">{t("industriesTitle")}</h2>
          <p className="text-gray-600 mt-3">{t("industriesDesc")}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-8 max-w-6xl mx-auto text-center">
          {industries.map((industry, i) => (
            <div key={i} className="bg-white p-5 shadow-lg hover:bg-gray-800 hover:text-white transition">
              <p className="font-medium">{industry}</p>
            </div>
          ))}
        </div>
        <div className="absolute -bottom-0 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" />
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-[#070B2A] relative text-white py-28">
        <div className="absolute -top-20 -left-20">
          <img src="/left-shape.png" alt="Nexus India Logo" className="h-96 opacity-100" />
        </div>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">{t("impactTitle")}</h2>
          <p className="text-gray-400 mt-2">{t("impactDesc")}</p>
        </div>
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-8">
          {impactStories.map((story, i) => (
            <div className="bg-gray-800 p-6 shadow-md" key={i}>
              <h3 className="text-xl font-semibold">{story.title}</h3>
              <p className="mt-2 text-gray-300">{story.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Trust Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
          <div className="md:w-1/2">
            <div className="text-left md:text-left mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("whyTrustTitle")}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {trustPoints.map((point, i) => (
                <div className="bg-gray-800 p-5 shadow-md" key={i}>
                  <h4 className="font-semibold text-lg text-white">{point.title}</h4>
                  <p className="text-white/80 mt-2">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 object-cover">
            <img src="/about2.jpeg" alt="Why choose us" className="w-full shadow-lg object-cover" />
          </div>
        </div>
        <div className="absolute -bottom-70 right-0 opacity-30 w-screen">
          <img src="/p2.png" alt="Nexus India Logo" />
        </div>
      </section>

      {/* Case Studies */}
      <TestimonialSection />

      {/* CTA */}
      <section className="relative bg-[#070B2A]/10 py-24 overflow-hidden">
        <img src="/design.png" alt="Abstract Shape" className="absolute bottom-0 right-0 w-[500px] opacity-20 pointer-events-none" />
        <div className="relative z-10 bg-[#070B2A]/40 max-w-4xl mx-auto px-6 text-center">
          <div className="bg-yellow-500 shadow-2xl p-10 md:p-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t("ctaTitle")}</h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">{t("ctaDesc")}</p>
            <a href="/pages/contact" className="inline-block bg-[#070B2A] hover:bg-[#070B2A]/60 text-white px-8 py-4 text-lg font-medium transition duration-300 shadow-lg">
              {t("ctaBtn")}
            </a>
          </div>
        </div>
      </section>

      <ContactUsSection />
    </>
  );
}
