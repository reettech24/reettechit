"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useTranslations } from "next-intl";
import "swiper/css";
import "swiper/css/navigation";

const images = [
  "/DC1.jpg",
  "/logo3.png",
  "/softwaredevelopment.jpeg",
  "/AI.jpeg"
];

export default function ProjectShowcase() {
  const t = useTranslations("projectShowcase");
  const projects = t.raw("projects"); // get array of translated project objects

  return (
    <section className="bg-[#f0f0f0] w-full py-20 relative overflow-hidden">
      <div className="flex justify-between max-w-7xl mx-auto px-8 lg:px-0">
        <div>
          <p className="text-sm text-indigo-500 font-semibold mb-2 uppercase">
            {t("sectionLabel")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 max-w-xl">
            {t("heading")}
          </h2>
        </div>

        {/* Navigation Arrows */}
        <div className="-top-12 right-0 flex items-center gap-2 pr-4 z-10">
          <button className="swiper-prev w-12 h-12 bg-indigo-600 text-white rounded-full">
            <span className="sr-only">Prev</span>←
          </button>
          <button className="swiper-next w-12 h-12 bg-white border border-indigo-200 rounded-full text-indigo-500 hover:bg-indigo-50">
            <span className="sr-only">Next</span>→
          </button>
        </div>
      </div>

      <div className="max-w-7xl px-4 lg:px-0">
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="relative group overflow-hidden shadow-lg">
                  <img
                    src={images[index]}
                    alt={project.title}
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-[#070B2A] p-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white font-medium">
                        {project.category}
                      </p>
                      <h3 className="text-lg font-semibold text-white/80">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowUpRightIcon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
