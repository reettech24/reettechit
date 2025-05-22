"use client";
import React from "react";
import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

const offerings = [
  {
    title: "End-to-End Project Planning",
    desc: "Clear roadmaps, timelines, and milestones tailored to your business goals.",
  },
  {
    title: "Agile & Waterfall Methodologies",
    desc: "Flexible management approaches tailored to your project scope and style.",
  },
  {
    title: "Design & Development Oversight",
    desc: "Supervised UI/UX, coding, and deployment for seamless delivery.",
  },
  {
    title: "Technical Support & Troubleshooting",
    desc: "Ongoing assistance during and post-deployment to ensure stability.",
  },
  {
    title: "Team Coordination & Resource Management",
    desc: "Efficient collaboration between developers, designers, and stakeholders.",
  },
  {
    title: "Risk Management & Quality Assurance",
    desc: "Proactive issue resolution and thorough testing to guarantee excellence.",
  },
];

const lifecycleSteps = [
  "Discovery & Requirements Gathering",
  "Project Planning & Milestone Setup",
  "UI/UX & Development Oversight",
  "QA Testing & Risk Mitigation",
  "Client Review & Feedback Loop",
  "Launch & Post-Deployment Support",
];

const tools = ["Slack", "Jira", "Trello", "Notion", "ClickUp", "Asana"];

const reasons = [
  "Expert management of web, mobile, cloud, and custom software projects.",
  "Use of modern tools like Jira, Trello, Git, and Asana for transparent tracking.",
  "Dedicated project managers and technical leads for each engagement.",
  "Clear, consistent communication and weekly progress updates.",
  "Proven success across industries, from startups to enterprise clients.",
];

const successStories = [
  {
    title: "E-Commerce Expansion",
    desc: "ClickUp and Slack enhanced visibility and communication.",
    result: "Saved $40K and improved team productivity by 30%.",
  },
  {
    title: "Startup MVP Launch",
    desc: "Used Notion and Jira to execute lean development for MVP.",
    result: "Reduced time-to-market by 40%.",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-[#070B2A] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/Team.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70" />
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-6">
            Project Management Services
          </h1>
          <p className="text-2xl max-w-3xl mx-auto">
            Empowering your team to plan, execute, and deliver successful
            projects with our expert solutions.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/nexusindiaonlinemanagement.jpeg"
            alt="Business foundation"
            className=" shadow"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">At Reet Technologies</h2>
            <p className="text-gray-600 leading-relaxed">
            we help you bring your projects to life—on
              time and with precision. From web to mobile and cloud projects, we
              plan, execute, and deliver—so you can focus on growth.
            </p>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24 bg-[#070B2A] text-white">
        <div className=" max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {offerings.map((item, index) => (
              <div
                key={index}
                className="p-8 bg-gray-800 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                <h4 className="text-xl font-semibold mb-2 text-white">{item.title}</h4>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="py-24 bg-[#070B2A] text-white">
        <div className=" max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Project Lifecycle
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {lifecycleSteps.map((step, index) => (
              <div
                key={index}
                className="bg-indigo-100 p-6 xl border-l-4 border-indigo-600 shadow-sm"
              >
                <p className="text-indigo-800 font-medium mb-2">
                  Step {index + 1}
                </p>
                <p className="text-lg text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-24 bg-[#070B2A] text-white text-center">
        <div className=" max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Tools & Platforms We Use</h2>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {tools.map((tool, index) => (
              <div
                key={index}
                className=" p-6 bg-white shadow hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={`/logos/${tool.toLowerCase()}.svg`}
                  alt={tool}
                  className="w-14 h-14 mx-auto mb-3"
                />
                <p className="text-md font-medium text-black">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-white">
        <div className=" max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Partner With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-gray-100 p-6 shadow-sm">
                <p className="text-lg">✅ {reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-[#070B2A] text-white">
        <div className=" max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gray-800 p-6 shadow">
                <h4 className="text-2xl font-semibold text-white mb-2">
                  {story.title}
                </h4>
                <p className="mb-2 text-white/60">{story.desc}</p>
                <p className="text-sm text-white/90">{story.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection />

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-indigo-700 to-blue-700 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">
            Let’s Manage Your Next Project Seamlessly
          </h2>
          <p className="mb-6 text-lg max-w-2xl mx-auto">
            Contact Reet Technologies today and let’s bring your vision to life
            — efficiently, transparently, and on schedule.
          </p>
          <button className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
            Book a Free Consultation
          </button>
        </div>
      </section>

      <ContactUsSection />
    </>
  );
}
