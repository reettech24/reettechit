"use client";

import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import React from "react";

export default function Page() {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="bg-[#0A0F2E] text-white py-56 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/breadcrumb.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0A0F2E] opacity-70"></div>
        <div className="relative z-10">
          <div className="text-4xl md:text-5xl font-bold mb-3">Our Focus</div>
          <div className="text-sm text-white/70">About Us / Our Focus</div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-2xl font-bold mb-4">Our Mission</div>
            <p className="text-gray-700">
              To empower organizations with cutting-edge digital solutions,
              driving efficiency, innovation, and measurable outcomes through
              tailored technology strategies.
            </p>
          </div>
          <div>
            <div className="text-2xl font-bold mb-4">Our Vision</div>
            <p className="text-gray-700">
              To be the most trusted consulting partner for startups,
              enterprises, and government bodies seeking transformative digital
              growth and sustainable value.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#070B2A] text-white py-20 px-6">
        <div className="  max-w-5xl mx-auto text-center">
          <div className="text-2xl font-bold mb-10 text-white">
            Our Core Values
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-white/80">
            {[
              ["Integrity", "We act with honesty and consistency."],
              [
                "Innovation",
                "We solve problems with creativity and technology.",
              ],
              ["Collaboration", "We work hand-in-hand with clients and teams."],
              ["Excellence", "We exceed expectations with quality results."],
            ].map(([title, desc], idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 shadow hover:shadow-md transition"
              >
                <div className="font-semibold text-lg mb-2 text-white">
                  {title}
                </div>
                <p className="text-sm text-white/80">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 relative bg-[#070B2A] text-white px-6 mx-auto">
        <div className="  max-w-5xl mx-auto text-center">
          <div className="text-2xl font-bold text-center mb-10 text-white">
            How We Work
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center text-gray-800">
            {[
              ["Discover", "We assess goals, gaps, and opportunities."],
              ["Design", "We craft smart, scalable digital strategies."],
              ["Develop", "We execute with agile, iterative delivery."],
              ["Deliver", "We measure success and optimize continuously."],
            ].map(([title, desc], idx) => (
              <div key={idx} className="p-6 bg-gray-800 transition">
                <div className="font-semibold text-lg text-white">{title}</div>
                <p className="text-sm mt-2 text-white/80">{desc}</p>
              </div>
            ))}
          </div>
        </div>
          <div className="absolute -bottom-0 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 px-6 bg-[#070B2A] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold mb-8 text-white">
            Trusted Worldwide
          </div>
          <p className="text-white/80 mb-8">
            We've served clients in North America, Europe, Asia, and the Middle
            East. Our team is equipped to handle the nuances of global-scale
            development and localization.
          </p>
          <img
            src="/about2.jpeg"
            alt="Global Presence"
            className="mx-auto w-full max-w-3xl shadow"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative px-6 bg-[#070B2A] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold text-center mb-10 text-white">
            Why Choose Us
          </div>
          <ul className="grid sm:grid-cols-2 gap-8 text-white/80 text-md">
            <li>
              <strong>✔ Experience:</strong> 10+ years of digital and IT
              transformation success.
            </li>
            <li>
              <strong>✔ Flexibility:</strong> Agile workflows, rapid
              prototyping, and scalable delivery.
            </li>
            <li>
              <strong>✔ Partnership:</strong> Long-term client relationships,
              not just transactions.
            </li>
            <li>
              <strong>✔ Expertise:</strong> Certified professionals in cloud,
              security, and AI.
            </li>
          </ul>
        </div>
          <div className="absolute -bottom-0 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Team Culture (optional) */}
      <section className="py-20 px-6 bg-white max-w-6xl mx-auto">
        <div className="text-2xl font-bold text-center mb-10">
          Our Team Culture
        </div>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          We foster an environment of curiosity, ownership, and innovation. We
          believe great products come from great teams—diverse, motivated, and
          focused on client success.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Replace with real team photos if desired */}
          {Array(4)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className="h-40 bg-gray-900"
              />
            ))}
        </div>
      </section>

      {/* Testimonials & Contact */}
      <TestimonialSection />
      <ContactUsSection />
    </>
  );
}
