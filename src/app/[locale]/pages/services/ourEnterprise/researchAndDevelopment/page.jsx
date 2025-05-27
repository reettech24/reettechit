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

      <section
        className="bg-[#070B2A] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/graduation.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70" />
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-6">
            Innovation Through Research & Development
          </h1>
          <p className="text-2xl max-w-3xl mx-auto">
            We don’t just follow trends — we create them. Our R&D team uncovers
            market truths and transforms them into actionable, brand-shaping
            strategies.
          </p>
        </div>
      </section>

      {/* Why R&D Section */}
      <section className=" relative overflow-hidden py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Why Invest in R&D?
            </h2>
            <p className="text-gray-600 mb-4">
              At Reet Technologies, innovation is at the core of everything we
              do. Our Research & Development (R&D) Services empower businesses
              to explore new ideas, develop cutting-edge solutions, and stay
              ahead in a rapidly evolving digital landscape.
            </p>
            <p className="text-gray-600 mb-4">
              We work closely with your team to identify opportunities,
              experiment with technologies, and create prototypes that lead to
              real-world impact. From product innovation to process improvement,
              our R&D solutions are designed to turn vision into value.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Uncover unmet consumer needs before your competitors do</li>
              <li>Test product-market fit through rapid prototyping</li>
              <li>Reduce risk and improve campaign efficiency</li>
              <li>Forecast cultural trends to future-proof your brand</li>
            </ul>
          </div>
          <img
            src="/design.jpeg"
            alt="R&D Illustration"
            className="shadow-lg"
          />
        </div>
        <div className="absolute -bottom-70 -right-20 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-[#070B2A] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">
            Core Research & Development Focus Areas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {focusAreas.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 shadow hover:shadow-xl transition duration-300"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className=" relative py-20 px-6 bg-[#070B2A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our R&D Journey</h2>
          <div className="relative border-l-2 border-indigo-500 pl-6 space-y-10">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-4 top-0 w-4 h-4 bg-indigo-500 rounded-full"></div>
                <h4 className="text-lg font-semibold text-white">
                  {item.year}
                </h4>
                <p className=" text-white/80">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
          <div className="absolute -bottom-90 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-indigo-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Impact in Action
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gray-800 p-6 rounded-xl shadow border-l-4 border-purple-600">
              <h4 className="text-xl font-semibold mb-2 text-white">
                Predictive AI for Fashion
              </h4>
              <p className="text-white/60">
                We built a fashion AI model that projected micro-trends 3 months
                in advance, resulting in a 28% sales uplift during key seasons.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow border-l-4 border-indigo-600">
              <h4 className="text-xl font-semibold mb-2 text-white">
                Green Branding for FMCG
              </h4>
              <p className="text-white/60">
                Our sustainability research helped a leading food brand redesign
                their packaging, leading to a 40% positive sentiment boost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-800 to-purple-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Let’s Research the Future Together
          </h2>
          <p className="text-lg mb-6">
            Whether you're a startup looking to disrupt or an enterprise aiming
            to evolve, Reet Technologies delivers the research and innovation
            power to make it happen.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-800 font-bold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Contact Us */}
      <ContactUsSection />
    </>
  );
}
