"use client";

import React from "react";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ContactUsSection from "@/components/sections/ContactUsSection";

export default function page() {
  return (
    <>
      {/* Hero Section */}

      <section
        className="bg-[#070B2A] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/bpm2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70" />
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-6">
            Brand Portfolio Management
          </h1>
          <p className="text-2xl max-w-3xl mx-auto">
            Strategically managing your brand family to maximize reach,
            resonance, and revenue.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className=" relative overflow-hidden bg-white py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What We Offer</h2>
          <p className="text-gray-600 mt-2">
            Comprehensive brand portfolio solutions for growing businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Brand Architecture Design",
              desc: "Establish a clear structure for your brand hierarchy to eliminate confusion and enhance synergy.",
              img: "https://cdn-icons-png.flaticon.com/512/2933/2933189.png",
            },
            {
              title: "Market Positioning Strategy",
              desc: "Differentiate your brands with precise market positioning that speaks directly to your audience.",
              img: "https://cdn-icons-png.flaticon.com/512/4775/4775473.png",
            },
            {
              title: "Portfolio Rationalization",
              desc: "Remove overlap and focus resources where it matters by identifying underperforming or redundant brands.",
              img: "https://cdn-icons-png.flaticon.com/512/3703/3703373.png",
            },
            {
              title: "M&A Brand Integration",
              desc: "Seamlessly merge or rebrand after acquisitions to retain equity and reduce friction.",
              img: "https://cdn-icons-png.flaticon.com/512/3208/3208726.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 shadow hover:shadow-lg transition"
            >
              <img src={item.img} alt={item.title} className="w-12 h-12 mb-4" />
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-white/80 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="absolute -bottom-70 -right-20 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Case Study Section */}
      <section className="bg-[#070B2A] relative overflow-hidden text-white py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Real Impact We've Delivered</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="bg-white p-6 shadow">
            <img
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df"
              alt="Case Study"
              className=" mb-4"
            />
            <h3 className="text-xl font-bold">Repositioning Legacy Brands</h3>
            <p className="text-gray-600 mt-2">
              We helped a 40-year-old brand portfolio modernize and expand into
              the Gen Z market—resulting in a 28% increase in market share
              within one year.
            </p>
          </div>
          <div className="bg-white p-6 shadow">
            <img
              src="https://images.unsplash.com/photo-1743385779347-1549dabf1320?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Case Study"
              className=" mb-4"
            />
            <h3 className="text-xl font-bold">M&A Brand Integration</h3>
            <p className="text-gray-600 mt-2">
              After a major acquisition, our team created a unified brand
              ecosystem that retained loyalty while reducing operational costs
              by 22%.
            </p>
          </div>
        </div>
        <div className="absolute -bottom-70 -right-20 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Our Process Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Proven Process</h2>
          <p className="text-gray-600 mt-2">
            We follow a structured approach to deliver measurable brand value.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {[
            [
              "Discovery",
              "Deep dive into your brand history, goals, and market.",
            ],
            [
              "Diagnosis",
              "Identify gaps, overlaps, and opportunities in your portfolio.",
            ],
            ["Design", "Craft a clear architecture and positioning strategy."],
            [
              "Deployment",
              "Execute with precision while measuring brand performance.",
            ],
          ].map(([title, desc], i) => (
            <div key={i} className="bg-gray-800 text-white p-6 shadow">
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className=" text-white/60 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#070B2A] text-white py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Why Partner With Us?</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-6 shadow">
            <h4 className="font-semibold text-lg text-white">
              Strategic Thinkers
            </h4>
            <p className="text-white/80 mt-2">
              Our brand consultants are strategists who blend creativity with
              data to make informed decisions.
            </p>
          </div>
          <div className="bg-gray-800 p-6 shadow">
            <h4 className="font-semibold text-lg text-white">
              Proven Portfolio Models
            </h4>
            <p className="text-white/80 mt-2">
              We leverage frameworks used by Fortune 500 companies to structure
              and grow brand portfolios efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="bg-white py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Trusted By Leading Brands</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {[
            "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png",
            "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
            "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
          ].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Client Logo"
              className="h-10 w-auto"
            />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Call to Action */}
      <section className="bg-indigo-700 text-white py-20 text-center px-6">
        <h2 className="text-3xl font-bold">
          Let’s Build a Powerful Brand Ecosystem
        </h2>
        <p className="mt-4 text-lg">
          Start maximizing your brand portfolio’s potential today.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Schedule a Free Consultation
        </button>
      </section>

      {/* Contact Us Section */}
      <ContactUsSection />
    </>
  );
}
