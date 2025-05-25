"use client";

import React from "react";
import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import Image from "next/image";

export default function page() {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="bg-[#0B1F3A] text-white py-48 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/banners/manufact.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Digital Innovation for Manufacturing
          </h1>
          <p className="text-white/80">
            Transforming operations, streamlining supply chains, and empowering
            efficiency
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Unlock Efficiency & Innovation
        </h2>
        <p className="text-gray-700">
          From smart factories to predictive maintenance, the manufacturing
          sector is embracing technology to stay competitive. Our solutions
          enable streamlined workflows, enhanced visibility, and data-driven
          decisions for modern manufacturers.
        </p>
      </section>

      <section className=" relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6 lg:px-20 bg-white">
           <div className="absolute -bottom-70 right-0 opacity-30 w-screen">
          <img src="/p2.png" alt="Nexus India Logo" className="" />
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Image
            src="/photos/crm1.jpg"
            alt="CRM ERP Overview"
            width={600}
            height={400}
            className="w-full z-10"
          />
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#070B2A]">
              At Reet Technologies
            </h2>

            <p className="text-base sm:text-lg text-gray-700 mb-6">
              We offer innovative technological solutions tailored to the
              manufacturing industry, addressing the key challenges in
              production processes, quality control, and supply chain
              management. Our expert solutions enhance quality, defect
              management, risk management, and safety for factories, industries,
              warehouses, and storage facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Key Solutions */}
      <section className="relative overflow-hidden bg-[#070B2A] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">
            Solutions We Offer
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Smart Factory Systems",
                desc: "IoT and automation solutions to monitor, optimize, and control manufacturing processes in real-time.",
                icon: "/icons/factory.svg",
              },
              {
                title: "Supply Chain Digitization",
                desc: "Improve logistics, inventory, and procurement with integrated digital tools and analytics.",
                icon: "/icons/supply-chain.svg",
              },
              {
                title: "Predictive Maintenance",
                desc: "Use sensor data and machine learning to reduce downtime and extend equipment life.",
                icon: "/icons/maintenance.svg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-800 p-6 shadow text-center hover:shadow-lg transition"
              >
                {/* <img src={item.icon} alt={item.title} className="w-12 h-12 mx-auto mb-4" /> */}
                <h4 className="font-semibold text-lg mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-70 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-6 relative overflow-hidden bg-[#070B2A] text-white ">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Case Study: 30% Productivity Increase
          </h3>
          <p className="text-white/80 mb-4">
            Learn how a mid-sized manufacturing plant automated its production
            line and saw measurable improvements in output and quality.
          </p>
          {/* <a
            href="/case-studies/manufacturing-efficiency"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Read Full Case Study
          </a> */}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-10">What You Gain</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Reduced Operational Costs",
              "Real-time Monitoring",
              "Improved Product Quality",
              "Faster Time to Market",
            ].map((benefit, i) => (
              <div key={i} className="p-4 bg-gray-900 shadow">
                <p className="font-medium text-white">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Trends Section */}
      <section className="py-20 px-6 relative overflow-hidden bg-[#070B2A] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-10 text-white">
            Manufacturing Trends to Watch
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Industrial IoT (IIoT)",
                desc: "Enhanced machine communication enables proactive decision-making.",
              },
              {
                title: "AI & Robotics",
                desc: "Smarter automation and robotics are revolutionizing production.",
              },
              {
                title: "Sustainability",
                desc: "Eco-friendly operations and green manufacturing are top priorities.",
              },
            ].map((trend, i) => (
              <div key={i} className="bg-gray-800 p-6 shadow">
                <h4 className="text-lg font-semibold mb-2 text-white">
                  {trend.title}
                </h4>
                <p className="text-sm text-white/80">{trend.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="bg-blue-600 text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Looking to Digitally Transform Your Manufacturing?
        </h3>
        <p className="mb-6 text-white/90">
          We bring expertise, innovation, and results to your industrial
          operations.
        </p>
        <a
          href="/pages/contact"
          className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition"
        >
          Talk to an Expert
        </a>
      </section>

      {/* Contact Us */}
      <ContactUsSection />
    </>
  );
}
