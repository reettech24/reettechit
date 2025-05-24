"use client";

import React from "react";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ContactUsSection from "@/components/sections/ContactUsSection";
import Image from "next/image";

export default function page() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}

      <section
        className="relative bg-cover bg-center text-white py- sm:py-40 md:py-52"
        style={{ backgroundImage: "url('/banners/mobile.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B2A]/80 to-[#1E1E3F]/80" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            Retail & E-Commerce Solution
          </h1>

          <p className="text-white text-base sm:text-lg leading-relaxed">
            Digital Transformation for Next-Gen Retail
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Image
            src="/photos/crm1.jpg"
            alt="CRM ERP Overview"
            width={600}
            height={400}
            className="w-full"
          />
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#070B2A]">
              Empowering Retailers with Digital Innovation
            </h2>

            <p className="text-base sm:text-lg text-gray-700 mb-6">
              At Nexus India, we help retailers and e-commerce businesses thrive
              in an omnichannel world by providing scalable, customer-centric
              digital solutions. From online store development to inventory
              automation and AI-driven insights— we support the full commerce
              lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Overview */}

      {/* Industry Challenges */}
      <section className="relative overflow-hidden bg-[#070B2A] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Key Challenges in Retail & E-Commerce
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              "Changing customer expectations",
              "Inventory & supply chain inefficiencies",
              "Data fragmentation across platforms",
              "Customer loyalty and personalization",
              "Scaling operations affordably",
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-800 p-6 shadow-sm">
                <p className="text-white/80 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="relative overflow-hidden bg-[#070B2A] py-20 px-6  text-center">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-10 text-white">
            Tailored Solutions for the Modern Retailer
          </h3>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                title: "E-Commerce Website Development",
                desc: "Custom Shopify, WooCommerce, and headless CMS implementations that scale.",
              },
              {
                title: "Omnichannel Integration",
                desc: "Unified customer experience across web, mobile, POS, and third-party marketplaces.",
              },
              {
                title: "AI-Powered Analytics",
                desc: "Data insights to track sales, predict trends, and personalize offers in real time.",
              },
              {
                title: "Inventory & Supply Chain Tools",
                desc: "Automation and visibility tools to optimize logistics and inventory management.",
              },
              {
                title: "Digital Marketing Enablement",
                desc: "Targeted ad campaigns, SEO optimization, and customer engagement solutions.",
              },
              {
                title: "Mobile-First Experience",
                desc: "Fast, responsive mobile UX that drives conversions on any device.",
              },
            ].map((s, idx) => (
              <div
                key={idx}
                className="bg-gray-800 shadow p-6 hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-lg mb-2 text-white">
                  {s.title}
                </h4>
                <p className="text-sm text-white/80">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-70 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h3 className="text-2xl font-bold mb-8">Proven Results</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left text-sm">
          <div className="bg-gray-900 p-6  shadow">
            <h4 className="font-semibold text-lg mb-2 text-white">
              Boosting Online Revenue by 60%
            </h4>
            <p className="text-white/80">
              We partnered with a fashion retailer to build a mobile-optimized
              store with integrated CRM. Result: 60% sales growth in 4 months.
            </p>
          </div>
          <div className=" bg-gray-900 p-6 shadow">
            <h4 className="font-semibold text-lg mb-2 text-white">
              Automating Inventory Management
            </h4>
            <p className="text-white/80">
              For an electronics chain, we automated inventory across
              outlets—reducing out-of-stock issues by 45%.
            </p>
          </div>
        </div>
      </section>

      {/* Retail Trends Section */}
      <section className="relative overflow-hidden bg-[#070B2A] py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Retail Trends & Insights
          </h3>
          <p className=" mb-10 text-white/80">
            Stay ahead of the curve with insights into how technology is
            reshaping the retail landscape.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Personalized customer journeys are driving conversions.",
              "Mobile commerce continues to dominate online sales.",
              "AR & VR are enhancing the virtual shopping experience.",
            ].map((trend, idx) => (
              <div key={idx} className="bg-gray-800 p-5 shadow text-left">
                <p className="text-white/80">{trend}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="px-6 py-12 bg-[#070B2A] text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Trusted By</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
          {[1, 2, 3, 4, 5].map((num) => (
            <Image
              key={num}
              src={`/company/client-${num}.png`}
              alt="Client Logo"
              width={120}
              height={60}
            />
          ))}
        </div>
      </section>
      {/* FAQs */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h3>
        <div className="space-y-6">
          {[
            {
              q: "Do you offer platform migration services?",
              a: "Yes, we can migrate your store from Magento, WooCommerce, etc. to Shopify or headless solutions with no downtime.",
            },
            {
              q: "Can you integrate with our existing ERP or CRM?",
              a: "Absolutely. We specialize in API integrations for ERPs, CRMs, and 3rd-party tools.",
            },
            {
              q: "What’s the typical project timeline?",
              a: "Depending on scope, projects range from 4 to 12 weeks for design, development, and testing.",
            },
          ].map((item, idx) => (
            <div key={idx}>
              <h4 className="font-semibold">{item.q}</h4>
              <p className="text-sm text-gray-600 mt-2">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-[#070B2A] text-white py-20 px-6 text-center">
        <h3 className="text-2xl font-bold mb-6">Our Technology Stack</h3>
        <p className="text-white/80 mb-10 max-w-xl mx-auto">
          We work with reliable, modern, and scalable technologies to ensure
          your business runs smoothly.
        </p>
        <div className="flex justify-center flex-wrap gap-6">
          {[
            "Shopify",
            "WooCommerce",
            "Next.js",
            "Node.js",
            "Tailwind CSS",
            "AWS",
            "Stripe",
            "MongoDB",
          ].map((tech, idx) => (
            <div
              key={idx}
              className="bg-gray-800 hover:scale-125 duration-125  px-6 py-3 rounded-full shadow text-sm font-medium"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-8">Why Choose Nexus India?</h3>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: "💰", title: "Affordable Packages" },
            { icon: "⚙️", title: "Custom Development" },
            { icon: "📊", title: "Scalable Solutions" },
            { icon: "🤝", title: "End-to-End Support" },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-900 p-6 shadow text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-semibold text-white">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA */}
      <section className="bg-blue-700 text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Digitize Your Retail Business Today
        </h3>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">
          Whether you're a small business or an expanding e-commerce brand,
          Nexus India is here to help you grow with confidence.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-gray-100 transition"
        >
          Get In Touch
        </a>
      </section>

      {/* Contact */}
      <ContactUsSection />
    </div>
  );
}
