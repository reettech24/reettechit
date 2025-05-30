"use client";

import {
  ArrowUpRightIcon,
  SparklesIcon,
  Cog6ToothIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
  MegaphoneIcon,
  GlobeAltIcon,
  CubeTransparentIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";
import { useTranslations } from "next-intl"; // or from next-i18next if you're using it
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ITSolutionsSection() {
  const t = useTranslations("it_solutions");

  const rawServices = t.raw("services");

  const iconComponents = [
    SparklesIcon,
    Cog6ToothIcon,
    DevicePhoneMobileIcon,
    CpuChipIcon,
    MegaphoneIcon,
    GlobeAltIcon,
    CubeTransparentIcon,
    ShieldCheckIcon,
  ];

  const letterMap = ["D", "C", "M", "A", "M", "H", "A", "S"];

  const services = rawServices.map((service, index) => ({
    ...service,
    icon: iconComponents[index],
    letter: letterMap[index],
  }));

  return (
    <section className="bg-[#070B2A] w-full py-16 text-white text-center overflow-hidden">
      <div className="relative mb-20 py-8 px-6 text-white text-center">
        <p className="text-lg text-yellow-400 uppercase mb-2 tracking-widest">
          {t("our_services")}
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          {t("our_services")}{" "}
            <span className="text-yellow-400 uppercase  decoration-4">
           {t("main_subheading")}
            </span>{" "}
          {t("main_subheading2")}
        </h2>

        

        <div className="absolute -top-20 right-0">
          <img
            src="/line-element.png"
            alt="Decorative Element"
            className="w-[600px] h-[800px]"
          />
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className="w-full mx-auto px-2"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative bg-[#0D123C] hover:border-2 hover:border-teal-400 cursor-pointer rounded-xl p-6 py-20 my-4 flex flex-col items-center text-center h-full group"
                >
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-sm">
                    {service.letter}
                  </div>
                  <Icon className="h-12 w-12 mb-4 text-teal-400" />
                  <h3 className="text-xl font-semibold">
                    {service.title} <br /> {service.subtitle}
                  </h3>
                  <p className="text-md text-gray-300 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-1 text-teal-400 hover:underline text-md"
                  >
                    {t("read_more")} <ArrowUpRightIcon className="w-4 h-4" />
                  </a>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="mt-12">
          <a
            href="#"
            className="inline-block px-6 py-3 border border-white/30 rounded-md hover:bg-white/10 transition relative overflow-hidden"
          >
            {t("view_all_services")}
            <span className="absolute bottom-0 right-0 w-6 h-6 bg-yellow-400 rounded-full translate-x-1/2 translate-y-1/2" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl justify-center mx-auto gap-10 items-center py-8 text-white text-center">
        {/* Left Side Stats */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          <div className="flex flex-col space-y-16 text-center lg:text-left">
            <div>
              <h2 className="text-5xl font-bold text-white/80">10+</h2>
              <p className="uppercase tracking-wide text-sm text-white">
                {t("years_experience")}
              </p>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-white/80">8+</h2>
              <p className="uppercase tracking-wide text-sm text-white">
                {t("industries_catered")}
              </p>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-white/80">10+</h2>
              <p className="uppercase tracking-wide text-sm text-white">
                {t("multinational_clients")}
              </p>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-white/80">95%</h2>
              <p className="uppercase tracking-wide text-sm text-white">
                {t("client_retention")}
              </p>
            </div>
          </div>
          <div className="w-full max-w-md self-center">
            <Image
              src="/world.png"
              alt="Tech Sphere"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Side Content */}
        <div className="relative text-left space-y-6 px-8 lg:px-0">
          <p className="text-lg font-semibold text-yellow-400 uppercase">
            {t("section_title")}{" "}
            <span className="italic capitalize text-teal-400">
              {t("section_subtitle")}
            </span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-snug">
                 {t("business_heading")}{" "}
              <span className=" text-yellow-400 decoration-yellow-400 decoration-4 uppercase">
                {t("business_subheading")}
              </span>
          </h2>
          <p className="text-gray-300 max-w-lg">{t("description")}</p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircleIcon className="w-5 h-5 text-teal-400" />
              <span className="text-sm text-gray-300">{t("benefit_1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircleIcon className="w-5 h-5 text-teal-400" />
              <span className="text-sm text-gray-300">{t("benefit_2")}</span>
            </li>
          </ul>

          <button className="mt-6 bg-[#121a39] text-white px-6 py-3 overflow-hidden rounded-md font-semibold relative inline-flex items-center group">
            {t("button_cta")}
            <span className="absolute bottom-0 right-0 w-5 h-5 bg-yellow-400 rounded-tl-full group-hover:scale-200 transition-transform" />
          </button>

          <div className="absolute -top-20 -right-10">
            <img src="/mask-shape.png" alt="Shape" />
          </div>
        </div>
      </div>
    </section>
  );
}
