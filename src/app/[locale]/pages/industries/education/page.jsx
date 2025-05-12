"use client"

import React from "react";
import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function page() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-[#0D1B2A] text-white py-48 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/education-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">
            Empowering Education Through Technology
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Transform learning experiences with digital-first solutions for
            institutions, educators, and students.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-6 bg-white text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Modernizing Learning for a Digital Era
        </h2>
        <p className="text-gray-700">
          From K-12 schools to higher education and professional training,
          digital transformation is reshaping how we teach, learn, and grow. Our
          solutions help academic institutions enhance accessibility,
          collaboration, and personalized learning with the power of technology.
        </p>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: "Virtual Classrooms",
              desc: "Seamless live sessions, discussions, and breakout rooms.",
            },
            {
              title: "LMS Integration",
              desc: "Custom LMS solutions for scalable content delivery.",
            },
            {
              title: "Mobile-First Learning",
              desc: "Engage learners across devices, anytime, anywhere.",
            },
            {
              title: "AI-Powered Analytics",
              desc: "Track performance, attendance & learning outcomes in real time.",
            },
            {
              title: "Gamification & Microlearning",
              desc: "Boost engagement through bite-sized, interactive modules.",
            },
            {
              title: "Accessibility First",
              desc: "Compliant with WCAG standards for inclusive learning.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Digital Learning Flow */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-10">
            Digital Learning Experience Journey
          </h3>
          <ol className="relative border-l border-gray-300 space-y-10 text-left">
            {[
              "Onboarding & Curriculum Mapping",
              "Interactive Content Creation",
              "Virtual & Hybrid Delivery Modes",
              "Student Feedback & Progress Tracking",
              "Data-Driven Iteration & Personalization",
            ].map((step, i) => (
              <li key={i} className="ml-4">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-1.5" />
                <p className="text-lg font-medium text-blue-900">{`Step ${
                  i + 1
                }: ${step}`}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-6">What Our Clients Achieved</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-blue-900 font-semibold text-xl">
            <div>
              <span className="text-4xl block">95%</span>
              Improved Student Engagement
            </div>
            <div>
              <span className="text-4xl block">80%</span>
              Faster Course Completion Rates
            </div>
            <div>
              <span className="text-4xl block">60%</span>
              Reduction in Dropouts
            </div>
            <div>
              <span className="text-4xl block">100K+</span>
              Learners Reached Globally
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-10">Use Cases</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "University Learning Portals",
                desc: "Manage semester-based academic workflows and research modules.",
              },
              {
                title: "EdTech Startups",
                desc: "Scalable architecture for rapid content delivery & gamified features.",
              },
              {
                title: "Corporate Training",
                desc: "Microlearning + certification-based modules for employees.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-100 p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h2 className="text-2xl font-bold mb-10">
          Why Choose Us for Education Transformation?
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            "Scalable Architecture",
            "Multi-Language Support",
            "24/7 Platform Reliability",
            "Secure Data Handling",
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                {feature}
              </h4>
              <p className="text-sm text-gray-600">
                We ensure our education systems are built for performance,
                reach, and trust.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 bg-white">
        <div className="text-center mb-10">
          <h3 className="text-xl font-bold">
            Trusted by Institutions Across the Globe
          </h3>
        </div>
        <div className="flex justify-center gap-10 flex-wrap px-6">
          {["/logo1.png", "/logo2.png", "/logo3.png", "/logo4.png"].map(
            (src, i) => (
              <img
                key={i}
                src={src}
                alt={`Partner ${i + 1}`}
                className="h-12 grayscale hover:grayscale-0 transition"
              />
            )
          )}
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-10">
            Tailored Solutions for Every Education Sector
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Higher Education Portals",
                desc: "Scalable solutions for universities and colleges to manage online lectures, materials, and assignments.",
              },
              {
                title: "School Learning Apps",
                desc: "Custom mobile apps designed to help K-12 institutions with assessments and daily interactions.",
              },
              {
                title: "Online Coaching Platforms",
                desc: "Serve coaching centers with tools for scheduling, testing, and certification.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Teasers */}
      <section className="bg-white py-20 px-6">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold">Latest Insights on EdTech</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "How AI Is Reshaping Virtual Classrooms",
              link: "#",
            },
            {
              title: "Gamification: Boosting Learner Motivation",
              link: "#",
            },
            {
              title: "Blended Learning: The Future of Education",
              link: "#",
            },
          ].map((blog, i) => (
            <a
              key={i}
              href={blog.link}
              className="block bg-gray-100 p-6 rounded-xl hover:shadow-lg transition"
            >
              <h4 className="font-semibold text-lg mb-2">{blog.title}</h4>
              <p className="text-sm text-blue-700">Read More →</p>
            </a>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white text-center py-20 px-6">
        <h3 className="text-3xl font-bold mb-4">Digitize, Educate, Elevate</h3>
        <p className="text-white/80 max-w-2xl mx-auto mb-6">
          Whether you're running a school, university, or an online learning
          platform, we help you scale with innovation and impact.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
        >
          Talk to Us
        </a>
      </section>

      <ContactUsSection />
    </>
  );
}
