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

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center overflow-hidden py-68 h-screen text-center text-white bg-nexus-primary"
        // style={{ backgroundImage: "url('/photos/rm373batch2-04.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-xs" />
        <div className="relative z-10">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4 uppercase"
          >
            Nexus India
            <br />
            <span className=" text-nexus-secondary uppercase">
              The Caring Market
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-white/90 uppercase text-xl md:text-2xl max-w-3xl mx-auto font-bold"
          >
            Big dreams, <span className=" text-nexus-secondary">Small </span>{" "}
            budget
          </motion.p>
        </div>

        <div className="absolute -top-20 right-160 opacity-40 w-screen">
          <img src="/NI.png" alt="Nexus India Logo" className="" />
        </div>
        <div className="absolute top-20 left-250 opacity-90 w-screen z-10">
          <img src="/NI.png" alt="Nexus India Logo" className=" h-80 w-80" />
        </div>
        <div className="absolute -bottom-20 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* What is Nexus */}
      <motion.section
        className="relative  mx-auto text-center items-start bg-cover bg-en bg-[#f0f0f0] overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        // style={{ backgroundImage: "url('/nexusindia/n3.jpg')" }}
      >
        <div className="max-w-6xl py-24 px-6 mx-auto text-center">
          {/* <div className="absolute inset-0 -z-10 opacity-5 bg-[url('/p1.png')] bg-repeat" /> */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-nexus-secondary mb-6"
          >
            What is Nexus India?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-black text-lg md:text-xl leading-relaxed max-w-4xl mx-auto"
          >
            Nexus India is a comprehensive digital platform designed to empower
            small and medium enterprises (SMEs) across India. From website
            development to branding, our all-in-one product helps businesses
            thrive online with affordable, easy-to-use tools.
          </motion.p>
        </div>

        <div className="absolute -bottom-20 -right-0 opacity-40 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </motion.section>

      {/* Why Nexus */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-24 px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <motion.h3
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-nexus-secondary mb-4"
          >
            Why Nexus India Stands Out
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-white text-lg max-w-3xl mx-auto"
          >
            Our product is more than a service — it's your growth partner.
          </motion.p>
        </div>
        <div className="absolute -bottom-20 -right-20 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>

        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 z-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              title: "Affordable Pricing",
              desc: "Pay only for what you need. Perfect for SMEs with limited budgets.",
              icon: "/NI1.jpg",
            },
            {
              title: "Tailored for India",
              desc: "Localized tools, vernacular support, and regional SEO built-in.",
              icon: "/NI2.jpg",
            },
            {
              title: "Modular & Scalable",
              desc: "Start small and grow as your business expands — no tech headaches.",
              icon: "/NI3.jpg",
            },
            {
              title: "Impact-Driven",
              desc: "We measure success not just in revenue but in livelihoods improved.",
              icon: "/NI4.jpg",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="glassmorphic bg-cover bg-black bg-no-repeat h-80 p-6 rounded-2xl shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] hover:scale-[1.03] transition-all duration-300 ease-in-out"
              // style={{ backgroundImage: `url(${item.icon})` }}
            >
              <div className="neumorphic-inner w-48 h-44 object-cover flex items-center justify-center mx-auto mb-4">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full"
                />
              </div>
              <h4 className="text-lg font-semibold text-nexus-secondary mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-white">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Industries Slider */}
      <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <motion.h3
          className="text-center text-4xl font-bold mb-10 text-nexus-secondary"
          variants={fadeInUp}
        >
          Industries We Serve
        </motion.h3>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 3.5 },
          }}
          modules={[Autoplay]}
          className="px-6"
        >
          {industries.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-72 bg-cover bg-center rounded-xl flex items-center justify-center relative overflow-hidden"
                style={{ backgroundImage: `url(${item.bg})` }}
              >
                <div className="absolute inset-0 bg-black/40 z-0" />
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-2">{item.emoji}</div>
                  <div className="text-lg font-bold uppercase">{item.name}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute -bottom-20 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Key Features */}
      <motion.section
        className="relative bg-nexus-primary bg-cover bg-center bg-no-repeat overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={stagger}
        viewport={{ once: true }}
        // style={{ backgroundImage: "url('/nexusindia/n2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-3xl" />
        <div className="py-24 px-6 max-w-7xl mx-auto text-center z-50">
          {/* Optional subtle pattern or tint background */}
          {/* <div className="absolute inset-0 -z-10 bg-[url('/nexusindia/n1.jpg')] bg-repeat opacity-5 pointer-events-none" /> */}

          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 z-20">
              Key Features
            </h3>
            <p className="text-white text-lg max-w-3xl mx-auto">
              Everything your business needs to go digital — in one simple
              platform.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Website Builder",
                desc: "No code. Just drag, drop, and launch.",
                icon: "/test/ar2.jpeg",
              },
              {
                title: "SEO Tools",
                desc: "Rank higher locally & nationally.",
                icon: "/test/ar2.jpeg",
              },
              {
                title: "Digital Business Card",
                desc: "Your brand, in everyone’s pocket.",
                icon: "/test/ar2.jpeg",
              },
              {
                title: "Online Storefront",
                desc: "Sell products or services online easily.",
                icon: "/test/ar2.jpeg",
              },
              {
                title: "Multi-language Support",
                desc: "Serve customers in local languages.",
                icon: "/test/ar2.jpeg",
              },
              {
                title: "CRM & Lead Tracking",
                desc: "Capture leads and manage clients.",
                icon: "/test/ar2.jpeg",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="glassmorphic rounded-2xl p-6 flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-300 shadow-md"
              >
                <div className="w-16 h-16 bg-white/70 shadow-inner rounded-full flex items-center justify-center mb-4">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-8 h-8"
                  />
                </div>
                <h4 className="text-lg font-extrabold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-white">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-20 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </motion.section>

      {/* Trusted By Logos */}
      <motion.section
        className=" relative py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-white text-center overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Trusted By Businesses Nationwide
        </h3>
        <p className="text-gray-500 mb-10 max-w-2xl mx-auto text-sm md:text-base">
          Join the growing network of SMEs and startups using Nexus India to
          power their digital journey.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
          {[
            "client-1.png",
            "client-2.png",
            "client-3.png",
            "client-4.png",
            "client-6.png",
          ].map((logo, idx) => (
            <div
              key={idx}
              className="transition transform hover:scale-105 duration-300 ease-in-out z-10"
            >
              <img
                src={`/company/${logo}`}
                alt={`Client ${idx + 1}`}
                className="h-20 w-auto opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>

        <div className="absolute -bottom-20 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </motion.section>

      {/* Get Started */}
      <motion.section
        className="py-20 px-6 bg-blue-50 text-center"
        initial="hidden"
        whileInView="visible"
        variants={stagger}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold mb-8">How to Get Started</h3>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            "Sign up on our platform",
            "Select the services you need",
            "Launch your digital identity",
            "Track growth via dashboard",
          ].map((step, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="text-blue-600 font-bold text-4xl mb-2">
                0{idx + 1}
              </div>
              <p className="text-sm text-gray-700">{step}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        className="py-20 px-6 bg-[#070B2A] relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={stagger}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6 text-left text-white">
            {[
              {
                q: "Who is Nexus India built for?",
                a: "Small and medium businesses across industries looking to grow their online presence affordably.",
              },
              {
                q: "Do I need technical knowledge to use it?",
                a: "Not at all. It’s designed for non-tech users with easy setup and support.",
              },
              {
                q: "Is there a free trial?",
                a: "Yes, we offer a 14-day free trial with access to all features.",
              },
              {
                q: "Can I use it in regional languages?",
                a: "Absolutely. Hindi, Marathi, Tamil, and more supported.",
              },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <strong className="block text-lg font-medium mb-1">
                  {item.q}
                </strong>
                <p className="text-sm text-white/90">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-20 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="bg-[#070B2A] text-white py-20 px-6 text-center relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl font-bold mb-4">
          Bring Your Business Online with Nexus India
        </h3>
        <p className="mb-6 text-white/90 max-w-2xl mx-auto text-lg">
          Whether you run a shop, offer services, or build products — Nexus
          India is built to support your journey.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-gray-100 transition"
        >
          Request a Demo
        </a>

        <div className="absolute -bottom-20 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </motion.section>

      {/* Testimonials & Contact */}
      <TestimonialSection />
      <ContactUsSection />
    </>
  );
}
