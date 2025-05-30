"use client";

import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useTranslations } from "next-intl";
import "swiper/css";
import "swiper/css/navigation";

const testimonialsData = [
  {
    key: "testimonial1",
    avatar: "/avatars/avatar1.jpg",
  },
  {
    key: "testimonial2",
    avatar: "/avatars/avatar2.jpg",
  },
  {
    key: "testimonial3",
    avatar: "/reetlogo.png",
  },
  {
    key: "testimonial4",
    avatar: "/reetlogo.png",
  },
];

export default function TestimonialSection() {
  const t = useTranslations("testimonials");

  return (
    <section className="relative w-full bg-[#070B2A] py-30 text-center overflow-hidden px-4 lg:px-0">
      <div className="max-w-7xl mx-auto relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="relative max-w-4xl mx-auto"
        >
          {testimonialsData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group">
                <div className="bg-yellow-600 group-hover:bg-transparent group-hover:text-white transition-colors duration-300 text-center shadow-lg p-8 lg:p-6 max-w-2xl mx-auto">
                  <div className="relative w-24 h-24 mb-4 mx-auto">
                    <div className="w-24 h-24 rounded-full bg-[#070B2A] group-hover:bg-white shadow-xl flex items-center justify-center text-teal-500 text-4xl transition-colors duration-300">
                      &ldquo;
                    </div>
                  </div>
                  <h3 className="text-[#070B2A] text-lg font-semibold uppercase tracking-widest group-hover:text-white transition-colors">
                    {t(`${item.key}.name`)}
                  </h3>
                  <p className="text-[#070B2A] text-sm group-hover:text-gray-300 mb-6 transition-colors">
                    ({t(`${item.key}.role`)})
                  </p>
                  <p className="text-[#070B2A] text-sm lg:text-lg max-w-2xl group-hover:text-white transition-colors">
                    {t(`${item.key}.text`)}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <button className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full z-10 flex items-center justify-center">
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full z-10 flex items-center justify-center">
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </Swiper>
      </div>

      {/* Decorative Avatars */}
      <div className="absolute top-0 -right-0 opacity-20">
        <img src="/p1.png" alt="Nexus India Logo" />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <img src="/reetlogo.png" alt="avatar" className="w-10 h-10 rounded-full absolute top-10 left-20 shadow-md" />
        <img src="/reetlogo.png" alt="avatar" className="w-10 h-10 rounded-full absolute top-105 lg:top-80 left-20 lg:left-40 shadow-md" />
        <img src="/reetlogo.png" alt="avatar" className="w-10 h-10 rounded-full absolute top-0 right-28 shadow-md" />
        <img src="/reetlogo.png" alt="avatar" className="w-10 h-10 rounded-full absolute bottom-10 right-40 shadow-md" />
        <img src="/reetlogo.png" alt="avatar" className="w-10 h-10 rounded-full absolute top-15 lg:top-10 right-5 lg:right-120 shadow-md" />
      </div>
    </section>
  );
}
