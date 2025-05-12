"use client";

import React from "react";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ContactUsSection from "@/components/sections/ContactUsSection";

export default function page() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-800 to-indigo-900 text-white py-32 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">
          Building Strong Business Foundations
        </h1>
        <p className="text-xl max-w-3xl mx-auto opacity-90">
          From ideation to execution, we empower entrepreneurs to launch
          sustainable, scalable, and standout ventures.
        </p>
        <button className="mt-8 px-6 py-3 bg-white text-indigo-800 font-semibold rounded-full shadow hover:scale-105 hover:bg-gray-100 transition duration-300">
          Get Started Today
        </button>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Vision & Mission</h2>
        <p className="max-w-4xl mx-auto text-gray-600 leading-relaxed">
          We envision a business ecosystem where innovation meets action. Our
          mission is to guide, build, and amplify brands with cutting-edge
          strategies, efficient systems, and customer-first frameworks.
        </p>
      </section>

      {/* Value Proposition Banner */}
      <section className="bg-indigo-100 py-10 px-6 text-center">
        <h3 className="text-2xl font-bold text-indigo-800 mb-2">
          Why Choose Us?
        </h3>
        <p className="max-w-2xl mx-auto text-indigo-700">
          We don’t just consult — we co-create. Our holistic approach ensures
          every aspect of your business launch is validated, market-ready, and
          resilient in today’s ever-evolving landscape.
        </p>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What We Offer</h2>
          <p className="text-gray-600 mt-2">
            Expert support across every stage of your business establishment
            journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Business Strategy",
              desc: "Define your value proposition, market fit, and growth model.",
              img: "https://cdn-icons-png.flaticon.com/512/1907/1907555.png",
            },
            {
              title: "Brand Identity",
              desc: "Visual storytelling that builds emotional connection with customers.",
              img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            },
            {
              title: "Digital Infrastructure",
              desc: "Websites, apps & backend systems built for scale and UX excellence.",
              img: "https://cdn-icons-png.flaticon.com/512/891/891175.png",
            },
            {
              title: "Legal & Compliance",
              desc: "Ensure your business is compliant, protected, and future-ready.",
              img: "https://cdn-icons-png.flaticon.com/512/6012/6012883.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center hover:scale-105"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-14 h-14 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-white py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Process</h2>
          <p className="text-gray-600 mt-2">
            A frictionless experience that simplifies complexity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          {[
            "Discovery & Research",
            "Business Planning",
            "Implementation & Execution",
            "Launch & Growth",
          ].map((step, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl hover:shadow-lg transition duration-300 bg-gray-50"
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {index + 1}
              </div>
              <h4 className="font-semibold text-lg">{step}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-indigo-50 py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Real Results. Real Impact.</h2>
          <p className="text-indigo-700">
            Our clients' success is our best case study.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Retail Brand Launch</h3>
            <p className="text-gray-600">
              Supported a D2C fashion brand with strategic launch, Shopify
              setup, and influencer marketing. Achieved ₹1.2 Cr revenue in 6
              months.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">
              SME Digital Transformation
            </h3>
            <p className="text-gray-600">
              Revamped a 25-year-old family business with e-commerce, CRM, and
              full digital branding — driving 400% sales uplift.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="bg-white py-16 px-6">
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
