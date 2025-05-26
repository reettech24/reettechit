"use client";

import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import React from "react";

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-[#0C1E3C] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/breadcrumb.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0C1E3C] opacity-80" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Student Courses
          </h1>
          <p className="text-white/70">Career / Courses for Students</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Empowering Students for the Digital Future
        </h2>
        <p className="text-gray-700">
          Our curated courses bridge academic theory with industry-ready skills.
          Designed by professionals, these hands-on programs prepare you for the
          tech world — whether you're launching a startup or joining a global
          company.
        </p>
      </section>

      {/* Courses Grid */}
      <section className=" relative bg-[#070B2A] text-white py-20 px-6">
        <div className="absolute -top-0 -right-0">
          <img src="/mask-shape.png" alt="Nexus India Logo" className=" h-96" />
        </div>
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12 text-white">
            Available Courses
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Full-Stack Web Development",
                desc: "Build complete websites and apps using HTML, CSS, JavaScript, React, and Node.js.",
                duration: "12 weeks",
              },
              {
                title: "Cloud Computing with AWS & Azure",
                desc: "Learn the essentials of deploying, scaling, and managing cloud infrastructure.",
                duration: "8 weeks",
              },
              {
                title: "Data Science & Machine Learning",
                desc: "Analyze data and create predictive models using Python, pandas, and scikit-learn.",
                duration: "10 weeks",
              },
              {
                title: "Cybersecurity Fundamentals",
                desc: "Understand threats, encryption, and defense strategies in modern IT environments.",
                duration: "6 weeks",
              },
              {
                title: "Agile Project Management",
                desc: "Master tools like Jira and methodologies like Scrum to manage software teams.",
                duration: "4 weeks",
              },
              {
                title: "UI/UX Design",
                desc: "Design user-centric interfaces using Figma, wireframes, and design systems.",
                duration: "6 weeks",
              },
            ].map((course, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 shadow hover:shadow-xl transition text-center"
              >
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {course.title}
                </h4>
                <p className="text-sm mb-3 text-white/80">{course.desc}</p>
                <span className="inline-block px-3 py-1 text-sm text-blue-400 rounded-full">
                  Duration: {course.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className=" relative py-20 bg-[#070B2A] text-white px-6 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white">
              Why Learn With Us?
            </h3>
            <p className="text-white/80 max-w-3xl mx-auto mt-2">
              Our student-first philosophy combines mentorship, industry
              projects, and career guidance.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <img
                src="/logo3.png"
                className="w-40 mx-auto mb-3"
                alt="Mentorship"
              />
              <h4 className="font-semibold">1-on-1 Mentorship</h4>
              <p className="text-sm text-white/80 mt-2">
                Get guidance from experts working at top tech firms.
              </p>
            </div>
            <div>
              <img
                src="/logo3.png"
                className="w-40 mx-auto mb-3"
                alt="Mentorship"
              />
              <h4 className="font-semibold">Industry Certification</h4>
              <p className="text-sm text-white/80 mt-2">
                Earn certificates that boost your resume and confidence.
              </p>
            </div>
            <div>
              <img
                src="/logo3.png"
                className="w-40 mx-auto mb-3"
                alt="Mentorship"
              />
              <h4 className="font-semibold">Real Projects</h4>
              <p className="text-sm text-white/80 mt-2">
                Work on real-world use cases and build a portfolio.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-75 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">
          Ready to Start Your Learning Journey?
        </h3>
        <p className="mb-6 text-white/90">
          Apply today and join hundreds of students building successful tech
          careers with us.
        </p>
        <a
          href="/pages/contact"
          className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition"
        >
          Apply Now
        </a>
      </section>

      <ContactUsSection />
    </>
  );
}
