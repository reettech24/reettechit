"use client";

export const dynamic = "force-dynamic";

import React from "react";
import Image from "next/image";

const modules = [
  {
    title: "Sales Module",
    img: "/aw.jpeg",
    points: [
      "Visualize sales trends and targets with intuitive dashboards",
      "Automate reminders for follow-ups and closures",
      "Assign leads to sales agents and monitor progress in real-time",
      "Export contextual sales data for deeper analytics",
    ],
  },
  {
    title: "Marketing Module",
    img: "/aw.jpeg",

    points: [
      "Visualize campaign performance",
      "Automate outreach via multiple channels",
      "Assign marketing responsibilities",
      "Gain deeper campaign insights",
    ],
  },
  {
    title: "Client Management",
    img: "/aw.jpeg",

    points: [
      "Track leads, follow-ups, and communication",
      "Manage documents and touchpoints",
      "Assign client ownership",
      "Build custom reports",
    ],
  },
  {
    title: "Employee Management",
    img: "/aw.jpeg",

    points: [
      "Track attendance and performance",
      "Simplify HR tasks",
      "Assign team responsibilities",
      "Centralized employee data access",
    ],
  },
  {
    title: "HR & Recruitment",
    img: "/aw.jpeg",

    points: [
      "Manage hiring process",
      "Track applicants",
      "Organize interviews",
      "Maintain employee onboarding",
    ],
  },
  {
    title: "Bill Generation & Management",
    img: "/aw.jpeg",

    points: [
      "Generate and send invoices",
      "Track bill payments",
      "Automate billing reminders",
      "Export billing reports",
    ],
  },
  {
    title: "Vendor Management",
    img: "/aw.jpeg",

    points: [
      "Manage vendor relationships",
      "Track vendor payments",
      "Organize contracts",
      "Evaluate performance",
    ],
  },
  {
    title: "Inventory Management",
    img: "/aw.jpeg",

    points: [
      "Track stock levels",
      "Automate reorder alerts",
      "Categorize inventory",
      "Export inventory reports",
    ],
  },
];

export default function Page() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-zinc-900 to-black text-white px-6 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto gap-10 items-center  my-20">
          {/* Left Text */}
          <div>
            <h1 className="text-4xl md:text-8xl font-semibold leading-tight">
              Seamless <span className="text-orange-500">Growth</span>
              <br />
              Smarter <span className="text-orange-500">Management</span>
            </h1>
            <p className=" absolute top-30 right-20 mt-6 text-xl text-gray-300 max-w-md">
              Nexus India BMS unifies every aspect of business management from
              sales and marketing to HR and inventory so you can operate
              smarter, faster, and with total control.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Dashboard Image */}
          <div className="relative w-full lg:w-10/12">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/Dashboard.png" // Replace with actual path
                alt="CRM Dashboard Preview"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="w-full lg:w-2/12 grid grid-cols-1 gap-8 text-center lg:text-left self-start">
            {[
              { value: "8+", label: "Modules" },
              { value: "20+", label: "Industries" },
              { value: "100+", label: "Businesses" },
            ].map((stat, i) => (
              <div key={i}>
                <h2 className="text-7xl font-bold text-white/90">
                  {stat.value}
                </h2>
                <p className="uppercase tracking-wide text-md text-white/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Overview */}
      <section className="bg-zinc-900 py-20">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-10">
            Explore Our Business Management Software Modules
          </h2>
          <p className="text-2xl max-w-5xl mx-auto text-gray-300 mb-20">
            Nexus India Business Management Software powers your business with a
            suite of modules designed to bring efficiency, intelligence, and
            actionable insights to every workflow.
          </p>
        </div>

        <div className="w-full">
          {modules.map((mod, idx) => (
            <div
              key={idx}
              className="group relative w-full transition-all duration-300 hover:bg-orange-500/85 hover:shadow-lg border-b border-gray-800"
            >
              {/* Full-screen background effect */}
              <div className="absolute inset-0 w-full h-full z-0 transition-all duration-300 group-hover:bg-orange-500/85" />

              {/* Content wrapper (z-10 to stay above bg) */}
              <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-10 py-16 px-4 ">
                {/* Image */}
                <div className="md:w-1/2 overflow-hidden rounded-xl">
                  <Image
                    src={mod.img}
                    alt={mod.title}
                    width={400}
                    height={300}
                    className="rounded-xl w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text */}
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-5xl font-semibold mb-4 group-hover:text-white transition-colors duration-300">
                    {mod.title}
                  </h3>
                  <ul className="list-disc text-2xl pl-5 space-y-1 text-gray-200 group-hover:text-white transition-colors duration-300">
                    {mod.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Need Section */}
      <section className="bg-zinc-900 py-20 px-4 text-center">
        <h2 className="text-3xl md:text-6xl font-bold mb-4">
          Need Something Custom?
        </h2>
        <p className="text-gray-300 max-w-6xl text-2xl mx-auto">
          Looking for a feature set tailored to your unique business needs? We
          offer fully customizable modules—re-engineered to streamline your
          processes and scale as you grow. Let us know your vision, and we’ll
          deliver a powerful solution built just for you.
        </p>
      </section>

      {/* Contact Us */}
      <section className=" bg-black text-white py-20 px-4">
        <div className="max-w-6xl font-semibold mx-auto mb-6">
          <h2 className="text-7xl mb-6">Your Next Step Is Simple</h2>
          <p className="text-orange-500 text-7xl">Contact Us</p>
        </div>
        <div className="max-w-6xl mx-auto flex mb-10 gap-6">
          <p className=" w-2/5 text-2xl ">
            Complete a short sign up form, and we'll help you begin with
            clarity, confidence and support every step of the way
          </p>

          {/* Form */}
          <form className=" flex flex-col gap-6 w-3/5 mx-auto">
            {/* Name */}
            <div className="flex flex-col">
              <label className="uppercase text-sm mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-transparent border-b border-gray-600 py-2 text-sm focus:outline-none"
              />
            </div>
            <div className=" flex flex-col md:flex-row gap-6">
              {/* Phone */}
              <div className="flex flex-col w-1/2">
                <label className="uppercase text-sm mb-1">
                  Your Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone"
                  className="bg-transparent border-b border-gray-600 py-2 text-sm focus:outline-none"
                />
              </div>
              {/* Email */}
              <div className="flex flex-col w-1/2">
                <label className="uppercase text-sm mb-1">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent border-b border-gray-600 py-2 text-sm focus:outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col md:col-span-2">
              <label className="uppercase text-sm mb-1">Your Message</label>
              <textarea
                placeholder="Writing your message here..."
                className="bg-transparent border-b border-gray-600 py-2 text-sm h-24 resize-none focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 mt-6">
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 uppercase tracking-wide text-sm"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
