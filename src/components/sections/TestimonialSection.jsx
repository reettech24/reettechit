"use client";

import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "HAHIMLAM DIRAT",
    role: "WEB DEVELOPER",
    text: `It is wanting to come here and afterward our office is something we consider it the little we are pleased with. Magnet; difficult to leave it. Our office is additionally a big name.`,
    avatar: "/avatars/avatar1.jpg",
  },
  {
    name: "REEMA KUMARI",
    role: "PROJECT MANAGER",
    text: `Working here has completely transformed my perspective on team collaboration. The support and innovation in the workspace are unmatched.`,
    avatar: "/avatars/avatar2.jpg",
  },
  {
    name: "ARJUN PATEL",
    role: "UI/UX DESIGNER",
    text: `From flexible working hours to an extremely talented peer group, I’ve found everything I ever wanted in a workplace.`,
    avatar: "/reetlogo.png",
  },
  {
    name: "SANA SHAIKH",
    role: "MARKETING HEAD",
    text: `Reet Technologies believes in growth—of business and people. Proud to be part of this journey.`,
    avatar: "/reetlogo.png",
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative w-full bg-[#f0f0f0] py-30 mx-0 text-center overflow-hidden px-4 lg:px-0">
      <div className="max-w-7xl mx-auto relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          className="relative max-w-4xl mx-auto"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 mb-4">
                  <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center text-teal-500 text-4xl">
                    &ldquo;
                  </div>
                </div>
                <h3 className="text-lg font-semibold uppercase tracking-widest">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mb-6">({item.role})</p>
                <p className="text-lg max-w-2xl text-gray-800">{item.text}</p>
              </div>
            </SwiperSlide>
          ))}

          <button className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#f0f0f0]   rounded-full z-10 flex items-center justify-center shadow-md">
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#f0f0f0]   rounded-full z-10 flex items-center justify-center shadow-md">
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </Swiper>
      </div>

      {/* Decorative avatars */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/reetlogo.png"
          alt="avatar"
          className="w-10 h-10 rounded-full absolute top-10 left-20 shadow-md"
        />
        <img
          src="/reetlogo.png"
          alt="avatar"
          className="w-10 h-10 rounded-full absolute top-105 lg:top-80 left-20 lg:left-40 shadow-md"
        />
        <img
          src="/reetlogo.png"
          alt="avatar"
          className="w-10 h-10 rounded-full absolute top-0 right-28 shadow-md"
        />
        <img
          src="/reetlogo.png"
          alt="avatar"
          className="w-10 h-10 rounded-full absolute bottom-10 right-40 shadow-md"
        />
        <img
          src="/reetlogo.png"
          alt="avatar"
          className="w-10 h-10 rounded-full absolute top-15 lg:top-10 right-5 lg:right-120 shadow-md"
        />
      </div>
    </section>
  );
}
