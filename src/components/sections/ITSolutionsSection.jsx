"use client";

import {
  ArrowUpRightIcon,
  CloudIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
  PuzzlePieceIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    title: "Clouds",
    subtitle: "Backup Services",
    description:
      "Secure your data with scalable and reliable cloud backup solutions.",
    icon: CloudIcon,
    letter: "C",
  },
  {
    title: "Mobile and",
    subtitle: "Remote Networking",
    description:
      "Stay connected with seamless mobile and remote access setups.",
    icon: DevicePhoneMobileIcon,
    letter: "M",
  },
  {
    title: "Data Backup",
    subtitle: "and Restoration",
    description: "Protect and restore your critical data effortlessly.",
    icon: ServerIcon,
    letter: "D",
  },
  {
    title: "Product",
    subtitle: "development",
    description: "Innovative product development from concept to deployment.",
    icon: PuzzlePieceIcon,
    letter: "P",
  },
  {
    title: "Voice Over",
    subtitle: "Internet Protocol",
    description: "Crystal-clear VOIP services for modern communication.",
    icon: PhoneIcon,
    letter: "V",
  },
];

export default function ITSolutionsSection() {
  return (
    <>
      <section className="bg-[#070B2A] w-full py-16 text-white text-center">
        <div className=" mb-20 py-8 px-6 text-white text-center">
          <p className="text-sm text-teal-400 uppercase mb-2 tracking-widest">
            service it solutions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            All Professional{" "}
            <span className="text-teal-400 underline decoration-4">
              REET Solutions
            </span>{" "}
            & Services
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            // navigation
            // pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            className=" w-full mx-auto px-2"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative bg-[#0D123C] rounded-xl p-6 py-20 flex flex-col items-center text-center h-full group"
                >
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-sm">
                    {service.letter}
                  </div>
                  <service.icon
                    className="h-12 w-12 mb-4 text-teal-400 transition-transform group-hover:scale-110
              "
                  />
                  <h3 className="text-lg font-semibold">
                    {service.title} <br /> {service.subtitle}
                  </h3>
                  <motion.p className="text-sm text-gray-300 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </motion.p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-1 text-teal-400 hover:underline text-sm"
                  >
                    Read Out More <ArrowUpRightIcon className="w-4 h-4" />
                  </a>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-12">
            <a
              href="#"
              className="inline-block px-6 py-3 border border-white/30 rounded-md hover:bg-white/10 transition relative overflow-hidden"
            >
              View All Services
              <span className="absolute bottom-0 right-0 w-6 h-6 bg-teal-400 rounded-full translate-x-1/2 translate-y-1/2" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl justify-center mx-auto gap-10 items-center py-8 text-white text-center">
          {/* Left side stats and sphere */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
            <div className="flex flex-col space-y-16 text-center lg:text-left">
              <div>
                <h2 className="text-5xl font-bold text-white/80">10+</h2>
                <p className="uppercase tracking-wide text-sm text-white">
                  Experience
                </p>
              </div>
              <div>
                <h2 className="text-5xl font-bold text-white/80">8+</h2>
                <p className="uppercase tracking-wide text-sm text-white">
                  Industries Catered
                </p>
              </div>
              <div>
                <h2 className="text-5xl font-bold text-white/80">10+</h2>
                <p className="uppercase tracking-wide text-sm text-white">
                  Multinational Clients
                </p>
              </div>
              <div>
                <h2 className="text-5xl font-bold text-white/80">95%</h2>
                <p className="uppercase tracking-wide text-sm text-white">
                  Client Retention
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

          {/* Right side content */}
          <div className="text-left space-y-6 px-8 lg:px-0">
            <p className="text-sm font-semibold text-teal-400">
              service <span className="italic text-white">it solutions</span>
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-snug">
              Your Business{" "}
              <span className="underline decoration-teal-400 decoration-4">
                Progress Matters
              </span>
            </h2>
            <p className="text-gray-300 max-w-lg">
              Our company provides a full range of services for the construction
              of private houses and cottages since 19
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-teal-400" />
                <span className="text-sm text-gray-300">
                  Personalised Client Consulting
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-teal-400" />
                <span className="text-sm text-gray-300">
                  Providing end to end Tech Solutions for your business Problems
                </span>
              </li>
            </ul>

            <button className="mt-6 bg-[#121a39] text-white px-6 py-3 rounded-md font-semibold relative inline-flex items-center group">
              Tell Us How Can We Help
              <span className="absolute bottom-0 right-0 w-5 h-5 bg-teal-400 rounded-tl-full group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
