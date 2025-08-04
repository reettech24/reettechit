"use client";

export const dynamic = "force-dynamic";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

import React from "react";
import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/24/outline";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const industries = [
  { name: "Retail", emoji: "🛒", bg: "/nexusindia/n4.jpg" },
  { name: "Healthcare", emoji: "🩺", bg: "/bg/healthcare.jpg" },
  { name: "Education", emoji: "🎓", bg: "/bg/education.jpg" },
  { name: "Real Estate", emoji: "🏠", bg: "/nexusindia/n4.jpg" },
  { name: "Consulting", emoji: "💼", bg: "/bg/consulting.jpg" },
  { name: "Manufacturing", emoji: "🏭", bg: "/bg/manufacturing.jpg" },
  { name: "Hospitality", emoji: "🏨", bg: "/bg/hospitality.jpg" },
];

const whyChooseData = [
  {
    id: "01",
    title: "All-in-One Digital Platform",
    desc: "A dedicated space for Small & Medium Enterprises, Startups, NGOs, and Social Initiatives to thrive online.",
  },
  {
    id: "02",
    title: "Affordable Marketing Solutions",
    desc: "Promote your business or cause at nominal charges—because big dreams shouldn’t need big budgets.",
  },
  {
    id: "03",
    title: "Empowered Women & Youth-Centric",
    desc: "We uplift women and youth entrepreneurs through accessible tech, skill training, and growth tools.",
  },
  {
    id: "04",
    title: "Social Impact Driven",
    desc: "We Care beyond Busines-aciverly supporting animal welfare and social cause with real-time action and connectivity",
  },
  {
    id: "05",
    title: "Free user Registration",
    desc: "Join Our platform without any cost and start exploring growth opportunities.",
  },
  {
    id: "06",
    title: "Dierct Business Connections",
    desc: "Connect directly with cerified business owners, service providers and social contreibutors.",
  },
  {
    id: "07",
    title: "Personalized adveritsing options",
    desc: "Choose form a variety of promotional tools to suit your budget and audience type.",
  },
  {
    id: "08",
    title: "Simplified Onboarding Process",
    desc: "Easy online registration, profile setup. and document submission with fast verification.",
  },
  {
    id: "09",
    title: "Pan india reach with local focus",
    desc: "Wether you're a local brand or national startup, Nexus India helps amplify your presence.",
  },
  {
    id: "10",
    title: "Transparent & Trustworthy",
    desc: "No Hidden costs. No middlemen. Just pure value for every rupee you invest",
  },
];

const timelineSteps = [
  {
    title: "Visit the Portal",
    desc: (
      <>
        Head to{" "}
        <a
          href="https://www.nexusindiaonline.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-black"
        >
          www.nexusindiaonline.com
        </a>{" "}
        and click the “Register Your Business” option to begin.
      </>
    ),
  },
  {
    title: "Complete the Registration Form",
    desc: "Fill in your business information using our intuitive form—designed to be simple and quick.",
  },
  {
    title: "Upload Documents for Verification",
    desc: "Fill in your business information using our intuitive form—designed to be simple and quick.",
  },
  {
    title: "Proceed With Secure Payment",
    desc: "Fill in your business information using our intuitive form—designed to be simple and quick.",
  },
  {
    title: "Receive Confirmation & Access your Dashboard",
    desc: "Fill in your business information using our intuitive form—designed to be simple and quick.",
  },
  {
    title: "Build Your Business Profile",
    desc: "Fill in your business information using our intuitive form—designed to be simple and quick.",
  },
  {
    title: "Go Live & Get Discorverd",
    desc: "Fill in your business information using our intuitive form—designed to be simple and quick.",
  },
  // Add more steps here if needed
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen max-w-8xl overflow-hidden bg-gradient-to-b from-zinc-900 to-black text-center py-16">
        <Image
          src="/NI.png"
          alt="Nexus Icon"
          width={300}
          height={80}
          className="mx-auto"
        />
        <Image
          src="/NEXUS_INDIA.png"
          alt="Nexus Icon"
          width={600}
          height={80}
          className="mx-auto w-[300px] h-[30px] sm:w-[600px] sm:h-[50px] mb-8"
        />
        <Image
          src="/NEXUS_INDIA_TEXT.png"
          alt="Nexus Icon"
          width={600}
          height={80}
          className="mx-auto w-[300px] h-[30px] sm:w-[600px] sm:h-[50px]"
        />
        {/* <h1 className="text-4xl font-bold">NEXUS INDIA</h1>
        <p className="text-orange-500 text-lg">Big Dreams, Small Budget</p> */}

        <div className=" absolute top-124 -right-324  sm:top-130 sm:-right-185  border-t-5 border-zinc-500 bg-zinc-900 w-[3000px] h-[3000px] rounded-full animate-glow-blink"></div>
      </section>

      <section className="relative bg-gradient-to-b from-zinc-900 to-black py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto text-xl sm:text-2xl lg:text-3xl mt-6 text-gray-300 mb-24 sm:mb-32">
          <p className="leading-snug">
            <span className="text-base sm:text-lg lg:text-xl mr-60 text-orange-500/85 block sm:inline">
              [ABOUT US]
            </span>
            Unlock your business’s full potential with Nexus India{" "}
            <Image
              src="/stars.png"
              alt="Nexus Icon"
              width={50}
              height={40}
              className="inline-block align-middle"
            />{" "}
            where innovation meets affordability{" "}
            <Image
              src="/arrow.png"
              alt="Nexus Icon"
              width={80}
              height={50}
              className="inline-block align-middle"
            />
            <br className="block sm:hidden" />
            We empower SMEs to thrive online with tailor-made websites, SEO
            magic, and digital marketing that turns clicks into loyal customers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-2">
          {[
            {
              Image: "/Icon1.png",
              title: "Connecting Remote Businesses",
              desc: "A dedicated marketplace that bridges the gap for small businesses in remote regions. giving them a platform to reach wider audiences with ease",
            },
            {
              Image: "/Icon2.png",
              title: "Affordable Access, Unlimited Growth",
              desc: "Empowering small enterprises with cost-effective digital tools and online storefronts to boost sales and visibility without heacy inverstemts.",
            },
            {
              Image: "/Icon3.png",
              title: "Community Driven Success",
              desc: "Fostering local economic growth while supporting social causes including women empowerment and animal welfare, creating a marketplace with heart.",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-zinc-800 p-8 sm:p-10 rounded-2xl shadow-md hover:shadow-orange-500/20"
            >
              <div className="flex justify-between mb-4 items-center">
                <p className="text-orange-500/85 text-xl">0{idx + 1}</p>
                <Image
                  src={card.Image}
                  alt={card.title}
                  width={50}
                  height={50}
                  className="w-10 h-10 sm:w-16 sm:h-16"
                />
                {/* <PhoneIcon className="w-10 text-orange-500/85" /> */}
              </div>
              <h3 className="text-white text-lg sm:text-2xl mb-2">
                {card.title}
              </h3>
              <p className="text-base text-gray-400">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Areas */}
      <section className=" bg-orange-500/85 sm:bg-zinc-900 hover:bg-orange-500/85 py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto text-left">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-8 text-white">
            KEY AREAS
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl text-white">
            Nexus India was dedicated to creating impact through focused support
            in three key areas: Women Welfare, Animal Welfare, and Startups. Our
            initiative aims to strengthen local businesses, raise awareness, and
            foster digitally empowered, stronger communities across India.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-12 max-w-6xl mx-auto">
          {[
            {
              src: "ww3.jpeg",
              title: "Women Welfare",
              desc: "Empowering women entrepreneurs and leaders with digital tools, training, and mentorship.",
            },
            {
              src: "aw.jpeg",
              title: "Animal Welfare",
              desc: "Supporting stray and domestic animal care through health, shelter, and education drives.",
            },
            {
              src: "si.jpeg",
              title: "Startup Incubation",
              desc: "Helping local startups scale with digital strategy, visibility, and tech support.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative group w-full sm:w-[368px] overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={`/${item.src}`}
                alt={item.title}
                width={368}
                height={300}
                className="object-cover w-full h-80 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 flex flex-col justify-center text-white">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#1f1f1f]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-l border-e border-gray-600 py-16 sm:py-20">
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center mb-10 sm:mb-16">
            Why Choose Us?
          </h2>

          <div className="relative flex flex-col gap-12 sm:gap-16">
            {whyChooseData.map((item, index) => (
              <div
                key={item.id}
                className={`relative px-4 sm:px-10 w-full ${
                  index % 2 === 1
                    ? "sm:ml-auto sm:max-w-2xl text-left"
                    : "sm:mr-auto sm:max-w-2xl text-left"
                }`}
              >
                <div className="bg-[#2f2f2f] text-white rounded-xl p-6 sm:p-8 shadow-md relative">
                  <h3 className="text-xl  sm:text-2xl font-semibold text-orange-400 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-300">
                    {item.desc}
                  </p>
                  <p className="absolute top-0 right-1.5 sm:right-12 text-3xl sm:text-4xl font-bold text-gray-400 opacity-40">
                    {item.id}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center flex-wrap gap-6">
            <div className="sm:flex-1">
              <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight text-black">
                REGISTER <br />
                YOUR <span className="text-orange-500 font-bold">BUSINESS</span>
              </h2>
              <p className="mt-4 text-gray-700 text-base sm:text-lg md:text-xl max-w-4xl">
                Become part of a platform that bridges digital access for SMEs
                and social impact causes. Benefit from tailored support and
                guidance at every step of your growth journey. Experience
                measurable return from affordable, high-ROI digital services.
              </p>
            </div>

            {/* Help Button */}
            <div className="sm:flex-shrink-0">
              <button className="bg-orange-500 text-white px-5 py-2 rounded-md sm:mt-0 hover:bg-orange-600 transition w-full sm:w-auto">
                Need Help?
              </button>
            </div>
          </div>

          {/* Timeline Steps */}
          <div className="mt-16 relative border-l-4 max-w-2xl mx-auto border-orange-400 pl-6 space-y-12">
            {timelineSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-9.5 top-0 w-6 h-6 bg-orange-500 rounded-full border-4 border-white z-10" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-orange-500">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-6xl font-semibold mx-auto mb-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Your Next Step Is Simple
          </h2>
          <p className="text-orange-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Contact Us
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
          <p className="text-lg sm:text-xl md:text-2xl lg:w-2/5">
            Complete a short sign up form, and we'll help you begin with
            clarity, confidence and support every step of the way
          </p>

          {/* Form */}
          <form className="flex flex-col gap-6 w-full lg:w-3/5">
            {/* Name */}
            <div className="flex flex-col">
              <label className="uppercase text-sm mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-transparent border-b border-gray-600 py-2 text-sm focus:outline-none"
              />
            </div>

            {/* Phone + Email */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col w-full md:w-1/2">
                <label className="uppercase text-sm mb-1">
                  Your Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone"
                  className="bg-transparent border-b border-gray-600 py-2 text-sm focus:outline-none"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2">
                <label className="uppercase text-sm mb-1">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent border-b border-gray-600 py-2 text-sm focus:outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="uppercase text-sm mb-1">Your Message</label>
              <textarea
                placeholder="Writing your message here..."
                className="bg-transparent border-b border-gray-600 py-2 text-sm h-24 resize-none focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 uppercase tracking-wide text-sm"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

// @keyframes glow-blink {
//     0%,
//     100% {
//       box-shadow: 0 -100px 200px -50px rgba(255, 115, 0, 0.4);
//     }
//     50% {
//       box-shadow: 0 -100px 200px -50px rgba(255, 115, 0, 0.8);
//     }
//   }

// @keyframes glow-blink {
//   0%,
//   100% {
//     box-shadow: 0 -100px 200px -50px rgba(192, 192, 192, 0.729); /* light silver */
//   }
//   50% {
//     box-shadow: 0 -100px 200px -50px rgba(192, 192, 192, 0.56); /* stronger silver */
//   }
// }
