"use client";

import React from "react";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ContactUsSection from "@/components/sections/ContactUsSection";

export default function page() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}

      <section
        className="relative bg-cover bg-center text-white py- sm:py-40 md:py-52"
        style={{ backgroundImage: "url('/banners/RE.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B2A]/80 to-[#1E1E3F]/80" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            Real Estate & Property Tech Solutions
          </h1>

          <p className="text-white text-base sm:text-lg leading-relaxed">
            Transforming Real Estate through Smart Technology
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Digitizing the Real Estate Experience
        </h2>
        <p className="text-gray-700 text-md">
          With innovative technological solutions our expertise helps Real
          Estate Domain in Lead Generation, Upgrading your business with AR,VR
          solutions helping Builders and Clients to have a clear vision of
          sample Flat and Building Premises with Project Details.
        </p>
      </section>

      {/* Key Challenges */}
      <section className=" relative overflow-hidden bg-[#070B2A] text-white  py-20 px-6">
        <div className="absolute -bottom-90 right-0 opacity-20 w-screen">
          <img src="/p2.png" alt="Nexus India Logo" className="" />
        </div>
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-10 text-center">
            Real Estate Industry Challenges
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              "Lack of digital presence & outdated websites",
              "Inefficient lead management & conversion",
              "Manual property listings and documentation",
              "Limited data-driven marketing",
              "No mobile-first experience",
            ].map((challenge, idx) => (
              <div
                key={idx}
                className="bg-gray-800 text-white hover:bg-gray-700 p-6 shadow-sm"
              >
                <p className="text-white/80 text-sm">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className=" relative overflow-hidden py-20 px-6 text-center bg-[#070B2A] text-white ">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">
            Nexus India's Real Estate Solutions
          </h3>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                title: "Property Listing Platforms",
                desc: "Fully searchable websites with filters, image galleries, and integrated maps.",
              },
              {
                title: "Lead Management Tools",
                desc: "CRM integration and automated workflows to track and convert leads efficiently.",
              },
              {
                title: "3D Virtual Tours & Video Walkthroughs",
                desc: "Immersive property viewing experiences that increase engagement and trust.",
              },
              {
                title: "Custom Mobile Apps",
                desc: "iOS/Android apps for property search, virtual visits, and appointment scheduling.",
              },
              {
                title: "Digital Marketing Services",
                desc: "SEO, PPC, social media, and content marketing tailored for real estate.",
              },
              {
                title: "Document Automation & E-signatures",
                desc: "Speed up closing time with online forms, digital contracts, and secure e-sign.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 shadow p-6 hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-lg mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-white/80">{item.desc}</p>
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
        <h3 className="text-2xl font-bold mb-8">Success Stories</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left text-sm">
          <div className="bg-gray-900 text-white p-6 shadow">
            <h4 className="font-semibold text-lg mb-2">
              30% Increase in Buyer Inquiries
            </h4>
            <p className="text-white/80">
              We helped a real estate firm revamp their listing portal and
              integrated CRM. The result was a 30% increase in buyer inquiries
              and faster response times.
            </p>
          </div>
          <div className="bg-gray-900 text-white p-6 shadow">
            <h4 className="font-semibold text-lg mb-2">
              Streamlined Property Management
            </h4>
            <p className="text-white/80">
              A residential group automated maintenance requests and tenant
              communication with a custom mobile app— saving over 200
              hours/month in manual work.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Nexus India */}
      <section className="relative overflow-hidden bg-[#070B2A] text-white py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">
            Why Choose Nexus India for Real Estate?
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "🏗️", title: "Industry Expertise" },
              { icon: "📱", title: "Mobile-First Focus" },
              { icon: "🧩", title: "Custom Integrations" },
              { icon: "🔒", title: "Data Security First" },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-800 p-6 shadow text-center">
                <div className="text-4xl mb-3 text-white">{item.icon}</div>
                <h4 className="font-semibold text-white/70">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights & Resources */}
      <section className="relative overflow-hidden bg-[#070B2A] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-10">
            Insights & Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "5 Digital Trends in Real Estate",
                excerpt:
                  "Explore how virtual tours, AI chatbots, and mobile apps are reshaping real estate.",
              },
              {
                title: "Checklist: Going Digital as a Broker",
                excerpt:
                  "Your go-to guide to building a digital-first real estate business.",
              },
              {
                title: "Case Study: 50% Lead Boost in 3 Months",
                excerpt:
                  "See how a realty group used our CRM solution to convert better and faster.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 shadow hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-lg mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-white/80">{item.excerpt}</p>
                <a
                  href="/resources"
                  className="text-blue-600 text-sm mt-3 inline-block hover:underline"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative overflow-hidden bg-[#070B2A] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            {[
              {
                q: "Can you integrate with existing property CRM systems?",
                a: "Yes, we specialize in custom API integrations with leading CRMs like Salesforce, Zoho, and more.",
              },
              {
                q: "Do you build real estate mobile apps?",
                a: "Absolutely. We build Android/iOS apps for property search, virtual visits, and lead tracking.",
              },
              {
                q: "Is Nexus India suitable for small agencies?",
                a: "Yes! Our solutions are designed to be scalable and budget-friendly for both large firms and small agencies.",
              },
            ].map((item, idx) => (
              <div key={idx}>
                <h4 className="font-semibold text-lg text-white">{item.q}</h4>
                <p className="text-sm text-white/80 mt-1">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-70 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA */}
      <section className="bg-blue-700 text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Take Your Real Estate Business Online
        </h3>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">
          Nexus India provides tailored, affordable digital solutions to help
          you list, promote, and close faster than ever.
        </p>
        <a
          href="/pages/contact"
          className="inline-block px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-gray-100 transition"
        >
          Contact Us Now
        </a>
      </section>

      {/* Contact Section */}
      <ContactUsSection />
    </div>
  );
}
