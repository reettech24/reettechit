"use client";

import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import React from "react";

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-[#0A1A3F] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/breadcrumb.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0A1A3F] opacity-80" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Join Our Team</h1>
          <p className="text-white/70">Career / Jobs & Hiring</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          We’re Hiring Passionate Innovators
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          We're always looking for people who want to make a difference. At our
          company, you'll work on impactful projects, collaborate with brilliant
          minds, and grow your career in a supportive environment.
        </p>
      </section>

      {/* Job Openings */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">
            Current Job Openings
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Developer",
                location: "Remote / India",
                type: "Full-Time",
                desc: "Work with React and modern UI frameworks to build world-class web experiences.",
              },
              {
                title: "Cloud DevOps Engineer",
                location: "Hyderabad, India",
                type: "Full-Time",
                desc: "Deploy and manage scalable, secure infrastructure using AWS and CI/CD pipelines.",
              },
              {
                title: "Project Manager (Agile)",
                location: "Remote / Hybrid",
                type: "Contract",
                desc: "Manage sprints and deliverables while keeping teams aligned and stakeholders informed.",
              },
              {
                title: "Cybersecurity Analyst",
                location: "Delhi NCR",
                type: "Full-Time",
                desc: "Monitor and protect infrastructure, perform threat assessments and audits.",
              },
              {
                title: "Business Analyst",
                location: "Pune",
                type: "Internship",
                desc: "Support product strategy through market research and stakeholder interviews.",
              },
            ].map((job, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
              >
                <h4 className="text-xl font-semibold mb-2">{job.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{job.desc}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{job.location}</span>
                  <span>{job.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Company */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Life at [Company Name]</h3>
          <p className="text-gray-600 mb-10">
            We’re more than just coworkers—we’re a community.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {["culture1.jpg", "culture2.jpg", "culture3.jpg"].map(
              (img, idx) => (
                <img
                  key={idx}
                  src={`/${img}`}
                  alt="Life at Company"
                  className="rounded-xl object-cover h-64 w-full shadow-md"
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold">Why Work With Us?</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mt-2">
            More than just a job — it’s a journey of learning, impact, and
            collaboration.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <img
              src="/icons/growth.png"
              className="w-12 mx-auto mb-3"
              alt="Career Growth"
            />
            <h4 className="font-semibold">Career Growth</h4>
            <p className="text-sm text-gray-600 mt-2">
              We invest in your learning, skills, and professional development.
            </p>
          </div>
          <div>
            <img
              src="/icons/flexible.png"
              className="w-12 mx-auto mb-3"
              alt="Flexibility"
            />
            <h4 className="font-semibold">Flexible Work</h4>
            <p className="text-sm text-gray-600 mt-2">
              Remote-friendly culture with work-life balance built in.
            </p>
          </div>
          <div>
            <img
              src="/icons/diversity.png"
              className="w-12 mx-auto mb-3"
              alt="Culture"
            />
            <h4 className="font-semibold">Inclusive Culture</h4>
            <p className="text-sm text-gray-600 mt-2">
              We value diversity, transparency, and honest collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Perks & Benefits</h3>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                icon: "🩺",
                title: "Health Insurance",
                desc: "Comprehensive coverage for you and your family.",
              },
              {
                icon: "💻",
                title: "Remote Setup Stipend",
                desc: "Home office allowance for productivity and comfort.",
              },
              {
                icon: "🏖️",
                title: "Paid Time Off",
                desc: "Ample vacation and personal leave to recharge.",
              },
              {
                icon: "📚",
                title: "Learning Budget",
                desc: "Invest in your professional development and skills.",
              },
              {
                icon: "🌍",
                title: "Diverse Team",
                desc: "Collaborate with global talent from multiple backgrounds.",
              },
              {
                icon: "🏆",
                title: "Recognition Program",
                desc: "Celebrate wins and outstanding contributions regularly.",
              },
            ].map((perk, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-3">{perk.icon}</div>
                <h4 className="font-semibold text-lg mb-1">{perk.title}</h4>
                <p className="text-sm text-gray-600">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Spotlight */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Employee Spotlight</h3>
          <blockquote className="italic text-gray-700 mb-4">
            "Joining [Company] has been a transformative experience—supportive
            team, meaningful projects, and constant growth!"
          </blockquote>
          <p className="font-semibold">— Priya M., Product Designer</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center rounded-t-3xl">
        <h3 className="text-3xl font-bold mb-4">
          Ready to Take the Next Step?
        </h3>
        <p className="mb-6 text-white/90">
          Join a mission-driven company where your work truly matters. Apply now
          or share your resume.
        </p>
        <a
          href="/apply"
          className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition"
        >
          Apply Now
        </a>
      </section>

      <ContactUsSection />
    </>
  );
}
