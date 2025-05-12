"use client";
import React from "react";
import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

const offerings = [
  {
    title: "Project Planning & Roadmapping",
    desc: "Strategic project blueprints and milestone mapping for smooth execution.",
  },
  {
    title: "Resource Allocation",
    desc: "Optimal distribution of your human, financial, and technical resources.",
  },
  {
    title: "Progress Monitoring",
    desc: "Real-time tracking with regular updates, reports, and checkpoints.",
  },
  {
    title: "Task Management",
    desc: "Delegate, track, and complete tasks using agile or waterfall models.",
  },
  {
    title: "Client Collaboration",
    desc: "Centralized platforms for communication, file sharing, and feedback.",
  },
  {
    title: "Post-Launch Support",
    desc: "Ongoing assistance, upgrades, and performance monitoring.",
  },
];

const lifecycleSteps = [
  "Discovery & Requirements Gathering",
  "Project Planning & Milestone Setup",
  "Task Assignment & Execution",
  "Monitoring & Quality Assurance",
  "Delivery & Client Feedback",
  "Post-Launch Support & Maintenance",
];

const tools = ["Slack", "Jira", "Trello", "Notion", "ClickUp", "Asana"];

const reasons = [
  "Proven expertise in Agile & Waterfall methodologies.",
  "Dedicated project managers for each client.",
  "Transparent communication & weekly reporting.",
  "Flexible engagement models and pricing.",
  "100% data security and compliance adherence.",
];

const successStories = [
  {
    title: "E-Commerce Expansion",
    desc: "Achieved 30% faster delivery using ClickUp & Slack.",
    result: "Saved $40K and improved team efficiency.",
  },
  {
    title: "Startup Launch Support",
    desc: "Used Notion, Jira for streamlined MVP execution.",
    result: "Reduced time-to-market by 40%.",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-indigo-600 to-blue-700 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-4">
            Efficient Project Management Services
          </h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto opacity-90">
            Empowering your team to plan, execute, and deliver successful
            projects with our expert solutions.
          </p>
          <button className="bg-white text-indigo-600 font-medium px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
            Request a Free Consultation
          </button>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {offerings.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Project Management Lifecycle
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {lifecycleSteps.map((step, index) => (
              <div
                key={index}
                className="bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-600 shadow-sm"
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
      <section className="py-24 bg-gray-100 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Tools & Platforms We Use</h2>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={`/tools/${tool.toLowerCase()}.svg`}
                  alt={tool}
                  className="w-14 h-14 mx-auto mb-3"
                />
                <p className="text-md font-medium">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Partner With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-xl shadow-sm">
                <p className="text-lg">✅ {reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow">
                <h4 className="text-2xl font-semibold text-indigo-700 mb-2">
                  {story.title}
                </h4>
                <p className="text-gray-700 mb-2">{story.desc}</p>
                <p className="text-gray-500 text-sm">{story.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials and Contact */}
      <TestimonialSection />

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-indigo-700 to-blue-700 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">
            Let’s Manage Your Next Project Seamlessly
          </h2>
          <p className="mb-6 text-lg max-w-2xl mx-auto">
            Connect with us for a custom project plan tailored to your goals and
            timeline.
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
