"use client";

import React from "react";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ContactUsSection from "@/components/sections/ContactUsSection";

export default function page() {
  const services = [
    {
      title: "Strategic Business Structuring",
      desc: "Build a solid organizational framework tailored to your industry and objectives.",
      img: "/images/business-structure.png",
    },
    {
      title: "Team Setup & HR Planning",
      desc: "Recruit and align the right talent with roles that drive performance and accountability.",
      img: "/images/hr-planning.png",
    },
    {
      title: "Process Optimization",
      desc: "Refine internal procedures to enhance productivity and efficiency.",
      img: "/images/process-optimization.png",
    },
    {
      title: "Technology Integration",
      desc: "Implement tech solutions that support your operational and business growth.",
      img: "/images/tech-integration.png",
    },
    {
      title: "Culture & Leadership Development",
      desc: "Shape a strong culture with leadership training and value-driven practices.",
      img: "/images/leadership.png",
    },
    {
      title: "Compliance & Documentation",
      desc: "Ensure all legal, financial, and regulatory requirements are in place from day one.",
      img: "/images/compliance.png",
    },
  ];

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
            Build a Future-Ready Business with Reet Technologies
          </h1>
          <p className="text-2xl max-w-3xl mx-auto">
            Whether you're launching a startup or optimizing an enterprise, we
            build strategic, scalable, and resilient foundations aligned with
            your business vision.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/about2.jpeg"
            alt="Business foundation"
            className=" shadow"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">At Reet Technologies</h2>
            <p className="text-gray-600 leading-relaxed">
              We specialize in building the foundation for your business
              success. Whether you're launching a startup or restructuring an
              existing organization, we create a robust, future-ready framework
              aligned with your strategic goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="bg-[#070B2A] text-white py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">What We Offer</h2>
          <p className="text-white/70 mt-2">
            Our Business Establishment services span strategy, people,
            processes, tech, and compliance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 shadow-md hover:bg-gray-700 hover:shadow-xl transition duration-300 text-center hover:scale-105"
            >
              {/* <img
                src={item.img}
                alt={item.title}
                className="w-14 h-14 mx-auto mb-4"
              /> */}
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-white/70 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Reet Tech */}
      <section className="bg-indigo-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/bpm2.jpg"
            alt="Why Reet Technologies"
            className=" shadow"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-indigo-800">
              Why Choose Reet Tech?
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Industry expertise across multiple domains</li>
              <li>Personalized consultation and strategy mapping</li>
              <li>End-to-end support from planning to execution</li>
              <li>Focus on long-term scalability and innovation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="bg-[#070B2A] text-white py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Trusted By Many</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {[
            { stat: "500+", label: "Businesses Empowered" },
            { stat: "12+", label: "Industries Served" },
            { stat: "4", label: "Continents Covered" },
          ].map((item, idx) => (
            <div key={idx}>
              <h3 className="text-4xl font-bold text-indigo-700">
                {item.stat}
              </h3>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Call To Action */}
      <section className="bg-indigo-800 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Build Something Powerful Together
        </h2>
        <p className="text-lg mb-6">
          Take the first step toward launching or scaling your business the
          right way.
        </p>
        <button className="bg-white text-indigo-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Book a Free Consultation
        </button>
      </section>

      {/* Contact Section */}
      <ContactUsSection />
    </>
  );
}
