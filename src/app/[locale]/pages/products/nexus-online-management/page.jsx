"use client";

export const dynamic = "force-dynamic";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Image from "next/image";

const modules = [
  {
    title: "Sales Module",
    img: "/crm1.png",
    points: [
      "Visualize sales trends and targets with intuitive dashboards",
      "Automate reminders for follow-ups and closures",
      "Assign leads to sales agents and monitor progress in real-time",
      "Export contextual sales data for deeper analytics",
    ],
  },
  {
    title: "Marketing Module",
    img: "/crm2.png",

    points: [
      "Visualize campaign performance",
      "Automate outreach via multiple channels",
      "Assign marketing responsibilities",
      "Gain deeper campaign insights",
    ],
  },
  {
    title: "Client Management",
    img: "/crm3.png",

    points: [
      "Track leads, follow-ups, and communication",
      "Manage documents and touchpoints",
      "Assign client ownership",
      "Build custom reports",
    ],
  },
  {
    title: "Employee Management",
    img: "/crm4.png",

    points: [
      "Track attendance and performance",
      "Simplify HR tasks",
      "Assign team responsibilities",
      "Centralized employee data access",
    ],
  },
  {
    title: "HR & Recruitment",
    img: "/crm5.png",

    points: [
      "Manage hiring process",
      "Track applicants",
      "Organize interviews",
      "Maintain employee onboarding",
    ],
  },
  {
    title: "Bill Generation & Management",
    img: "/crm6.png",

    points: [
      "Generate and send invoices",
      "Track bill payments",
      "Automate billing reminders",
      "Export billing reports",
    ],
  },
  {
    title: "Vendor Management",
    img: "/crm7.png",

    points: [
      "Manage vendor relationships",
      "Track vendor payments",
      "Organize contracts",
      "Evaluate performance",
    ],
  },
  {
    title: "Inventory Management",
    img: "/crm8.png",

    points: [
      "Track stock levels",
      "Automate reorder alerts",
      "Categorize inventory",
      "Export inventory reports",
    ],
  },
];

export default function Page() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  const stats = [
    { value: 8, label: "Modules" },
    { value: 20, label: "Industries" },
    { value: 100, label: "Businesses" },
  ];

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-zinc-900 to-black text-white px-4 sm:px-6 py-30 sm:py-20 overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col gap-8">
    {/* Left Text */}
    <div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold leading-tight text-left lg:text-left">
        Seamless <span className="text-orange-500">Growth</span>
        <br />
        Smarter <span className="text-orange-500">Management</span>
      </h1>
      <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 lg:absolute lg:top-20 lg:-right-0">
        Nexus India BMS unifies every aspect of business management from sales and
        marketing to HR and inventory so you can operate smarter, faster, and with
        total control.
      </p>
    </div>

    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mt-10">
      {/* Dashboard Image */}
      <div className="w-full lg:w-10/12">
        <div className="rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/Dashboard.png"
            alt="CRM Dashboard Preview"
            width={800}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      {/* Stats Counter */}
      <div
        ref={ref}
        className="w-full sm:w-6/12 lg:w-2/12 grid grid-cols-3 md:grid-cols-1 gap-8 text-center self-start lg:text-left mt-10 lg:mt-0"
      >
        {stats.map((stat, i) => (
          <div key={i}>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white/90">
              {startCount ? <CountUp end={stat.value} duration={5} /> : "0"}+
            </h2>
            <p className="uppercase tracking-wide text-sm sm:text-md text-white/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Modules Overview */}
      <section className="bg-zinc-900 py-20">
        <div className="max-w-6xl mx-auto text-left md:text-center mb-20 px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-10 leading-tight">
            Explore Our Business{" "}
            <span className="text-orange-500 block">
              Management Software Modules
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-2xl max-w-5xl mx-auto text-gray-300 mb-20">
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
              <div className="absolute inset-0 w-full h-full z-0 transition-all duration-300 group-hover:bg-orange-500/85" />

              <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-10 py-12 md:py-16 px-4">
                {/* Image */}
                <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
                  <Image
                    src={mod.img}
                    alt={mod.title}
                    width={400}
                    height={300}
                    className="rounded-xl w-full h-64 sm:h-80 md:h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 group-hover:text-white transition-colors duration-300">
                    {mod.title}
                  </h3>
                  <ul className="list-disc text-base sm:text-lg md:text-xl lg:text-2xl pl-5 space-y-1 text-gray-200 group-hover:text-white transition-colors duration-300">
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
      <section className="bg-zinc-900 py-20 px-4 text-left md:text-center">
        <h2 className="text-3xl md:text-6xl font-bold mb-4">
          Need Something Custom?
        </h2>
        <p className="text-gray-300 max-w-6xl text-lg md:text-2xl mx-auto">
          Looking for a feature set tailored to your unique business needs? We
          offer fully customizable modules—re-engineered to streamline your
          processes and scale as you grow. Let us know your vision, and we’ll
          deliver a powerful solution built just for you.
        </p>
      </section>

      {/* Contact Us */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-6xl font-semibold mx-auto mb-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Your Next Step Is Simple
          </h2>
          <p className="text-orange-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Contact Us
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
          <p className="text-lg sm:text-xl md:text-2xl lg:w-2/5">
            Complete a short sign up form, and we'll help you begin with
            clarity, confidence and support every step of the way
          </p>

          {/* Form */}
          <form className="flex flex-col gap-6 w-full lg:w-3/5">
            {/* Name */}
            <div className="flex flex-col">
              <label className="uppercase text-sm mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-transparent border-b border-gray-600 py-2 text-sm focus:outline-none"
              />
            </div>

            {/* Phone + Email */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col w-full md:w-1/2">
                <label className="uppercase text-sm mb-1">
                  Your Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone"
                  className="bg-transparent border-b border-gray-600 py-2 text-sm focus:outline-none"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2">
                <label className="uppercase text-sm mb-1">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent border-b border-gray-600 py-2 text-sm focus:outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="uppercase text-sm mb-1">Your Message</label>
              <textarea
                placeholder="Writing your message here..."
                className="bg-transparent border-b border-gray-600 py-2 text-sm h-24 resize-none focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-6">
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
