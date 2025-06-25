"use client";
export const dynamic = "force-dynamic";

import { motion } from "framer-motion";
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

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-60 text-center text-white"
        style={{ backgroundImage: "url('/photos/rm373batch2-04.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-xs" />
        <div className="relative z-10">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4"
          >
            Nexus India
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto font-light"
          >
            A Digital Transformation Platform Built for India’s Small & Medium
            Businesses
          </motion.p>
        </div>
      </section>

      {/* What is Nexus */}
      <motion.section
        className="relative py-24 px-6 max-w-6xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <div className="absolute inset-0 -z-10 opacity-5 bg-[url('/pattern.svg')] bg-repeat" />
        <motion.h2
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold text-blue-900 mb-6"
        >
          What is Nexus India?
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto"
        >
          Nexus India is a comprehensive digital platform designed to empower
          small and medium enterprises (SMEs) across India. From website
          development to branding, our all-in-one product helps businesses
          thrive online with affordable, easy-to-use tools.
        </motion.p>
      </motion.section>

      {/* Why Nexus */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <motion.h3
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4"
          >
            Why Nexus India Stands Out
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-600 text-lg max-w-3xl mx-auto"
          >
            Our product is more than a service — it's your growth partner.
          </motion.p>
        </div>
        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              title: "Affordable Pricing",
              desc: "Pay only for what you need. Perfect for SMEs with limited budgets.",
              icon: "/icons/affordable.png",
            },
            {
              title: "Tailored for India",
              desc: "Localized tools, vernacular support, and regional SEO built-in.",
              icon: "/icons/india.png",
            },
            {
              title: "Modular & Scalable",
              desc: "Start small and grow as your business expands — no tech headaches.",
              icon: "/icons/scale.png",
            },
            {
              title: "Impact-Driven",
              desc: "We measure success not just in revenue but in livelihoods improved.",
              icon: "/icons/impact.png",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl border-t-4 border-blue-600 hover:scale-[1.02] transition-all duration-300 ease-in-out"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Industries */}
      <motion.section
        className="py-20 px-6 max-w-6xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        variants={stagger}
        viewport={{ once: true }}
      >
        <motion.h3 variants={fadeInUp} className="text-3xl font-bold mb-10">
          Industries We Serve
        </motion.h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-700">
          {[
            "Retail",
            "Healthcare",
            "Education",
            "Real Estate",
            "Consulting",
            "Manufacturing",
            "Hospitality",
            "Freelancers",
          ].map((industry, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-gray-100 py-4 px-6 rounded-lg shadow hover:shadow-md transition"
            >
              {industry}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        className="bg-white py-20 px-6 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={stagger}
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-2">Key Features</h3>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Everything your business needs to go digital — in one simple
            platform.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Website Builder",
              desc: "No code. Just drag, drop, and launch.",
              icon: "/icons/website.png",
            },
            {
              title: "SEO Tools",
              desc: "Rank higher locally & nationally.",
              icon: "/icons/seo.png",
            },
            {
              title: "Digital Business Card",
              desc: "Your brand, in everyone’s pocket.",
              icon: "/icons/card.png",
            },
            {
              title: "Online Storefront",
              desc: "Sell products or services online easily.",
              icon: "/icons/store.png",
            },
            {
              title: "Multi-language Support",
              desc: "Serve customers in local languages.",
              icon: "/icons/language.png",
            },
            {
              title: "CRM & Lead Tracking",
              desc: "Capture leads and manage clients.",
              icon: "/icons/crm.png",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-10 mb-4"
              />
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Video Demo */}
      <motion.section
        className="py-20 bg-gray-100 text-center px-6"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold mb-4">See Nexus India in Action</h3>
        <p className="text-gray-600 mb-8 text-lg">
          Watch our quick walkthrough demo and see how easy it is to get
          started.
        </p>
        <div className="max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/YOUR_DEMO_VIDEO_ID"
            title="Nexus India Demo"
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </motion.section>

      {/* Logos */}
      <motion.section
        className="py-16 bg-white text-center px-6"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold mb-6">Trusted By</h3>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {["client1.png", "client2.png", "client3.png", "client4.png"].map(
            (logo, idx) => (
              <img
                key={idx}
                src={`/logos/${logo}`}
                alt={`Partner ${idx}`}
                className="h-12 grayscale hover:grayscale-0 transition"
              />
            )
          )}
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
        className="py-20 px-6 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={stagger}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h3>
        <div className="space-y-6 text-left text-gray-700">
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
              <p className="text-sm text-gray-600">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="bg-blue-700 text-white py-20 px-6 text-center"
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
      </motion.section>

      {/* Testimonials & Contact */}
      <TestimonialSection />
      <ContactUsSection />
    </>
  );
}
