"use client";

import React from "react";
import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function page() {
  const focusAreas = [
    {
      title: "Consumer Behavior Lab",
      desc: "We decode human insights, buying patterns, and emotional triggers to craft precision-targeted brand experiences.",
      icon: "https://cdn-icons-png.flaticon.com/512/3270/3270985.png",
    },
    {
      title: "AI & Market Prediction",
      desc: "Our AI models analyze data trends to predict future shifts and enable proactive business decisions.",
      icon: "https://cdn-icons-png.flaticon.com/512/3884/3884010.png",
    },
    {
      title: "Sustainable Branding",
      desc: "We innovate eco-conscious branding methods, packaging, and positioning aligned with modern ethical values.",
      icon: "https://cdn-icons-png.flaticon.com/512/1850/1850516.png",
    },
    {
      title: "UX Research & Prototyping",
      desc: "We design, test, and iterate interfaces that deliver intuitive user journeys based on real feedback loops.",
      icon: "https://cdn-icons-png.flaticon.com/512/9068/9068701.png",
    },
    {
      title: "Digital Transformation",
      desc: "From legacy processes to cloud-native platforms, we reimagine how brands evolve in the digital world.",
      icon: "https://cdn-icons-png.flaticon.com/512/2097/2097264.png",
    },
    {
      title: "Cultural Foresight",
      desc: "Our cultural intelligence tools detect shifts in values, language, and art—guiding future-proof branding.",
      icon: "https://cdn-icons-png.flaticon.com/512/235/235861.png",
    },
  ];

  const timeline = [
    {
      year: "2021",
      event:
        "Established our dedicated R&D wing to explore behavioral data and AI-driven brand strategies.",
    },
    {
      year: "2022",
      event:
        "Launched predictive branding AI for ecommerce clients, increasing engagement by 38%.",
    },
    {
      year: "2023",
      event:
        "Partnered with sustainability researchers to develop green design frameworks for FMCG packaging.",
    },
    {
      year: "2024",
      event:
        "Integrated UX research labs and launched 17+ prototypes across health, finance, and education sectors.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white py-40 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-700/30 to-indigo-900/50 mix-blend-overlay"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Innovation Through Research & Development
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            We don’t just follow trends — we create them. Our R&D team uncovers
            market truths and transforms them into actionable, brand-shaping
            strategies.
          </p>
        </div>
      </section>

      {/* Why R&D Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Why Invest in R&D?
            </h2>
            <p className="text-gray-600 mb-4">
              In today’s hypercompetitive landscape, innovation isn’t
              optional—it’s survival. Our R&D process bridges creativity with
              analytics to build strategies that outperform and endure.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Uncover unmet consumer needs before your competitors do</li>
              <li>Test product-market fit through rapid prototyping</li>
              <li>Reduce risk and improve campaign efficiency</li>
              <li>Forecast cultural trends to future-proof your brand</li>
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="R&D Illustration"
            className="shadow-lg"
          />
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">
            Core R&D Focus Areas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {focusAreas.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow hover:shadow-xl transition duration-300"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our R&D Journey</h2>
          <div className="relative border-l-2 border-indigo-500 pl-6 space-y-10">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-4 top-0 w-4 h-4 bg-indigo-500 rounded-full"></div>
                <h4 className="text-lg font-semibold">{item.year}</h4>
                <p className="text-gray-600">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-indigo-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Impact in Action
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-6 rounded-xl shadow border-l-4 border-purple-600">
              <h4 className="text-xl font-semibold mb-2">
                Predictive AI for Fashion
              </h4>
              <p className="text-gray-700">
                We built a fashion AI model that projected micro-trends 3 months
                in advance, resulting in a 28% sales uplift during key seasons.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border-l-4 border-indigo-600">
              <h4 className="text-xl font-semibold mb-2">
                Green Branding for FMCG
              </h4>
              <p className="text-gray-700">
                Our sustainability research helped a leading food brand redesign
                their packaging, leading to a 40% positive sentiment boost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-800 to-purple-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Let’s Research the Future Together
          </h2>
          <p className="text-lg mb-6">
            Partner with our team to craft intelligent, insight-backed
            strategies. Whether you're an enterprise or a startup—we’re ready to
            innovate with you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-800 font-bold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      {/* Contact Us */}
      <ContactUsSection />
    </>
  );
}
