import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import React from "react";

export default function Page() {
  return (
    <>
      {/* Hero Section */}

      <section
        className="bg-[#070B2A] text-white py-42z text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/AboutUs.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70" />
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-6">Software Development</h1>
          <p className="text-2xl max-w-3xl mx-auto">
            Building secure, scalable software solutions that empower your
            business to grow, innovate, and lead in your industry.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <div className="text-3xl font-bold mb-4">
          Custom Software Tailored to Your Business
        </div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We build secure, scalable, and high-performing software solutions —
          from SaaS platforms to internal enterprise systems — that solve your
          unique business challenges.
        </p>
      </section>

      {/* What We Build */}
      <section className="py-16 px-6 bg-[#070B2A] text-white w-full">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold mb-10">Solutions We Develop</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Applications",
                desc: "Responsive, secure platforms for B2B, B2C, or internal use.",
                icon: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
              },
              {
                title: "Mobile Apps",
                desc: "iOS/Android apps with excellent UI and performance.",
                icon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
              },
              {
                title: "Enterprise Software",
                desc: "Custom CRM, ERP, workflow, and automation platforms.",
                icon: "https://cdn-icons-png.flaticon.com/512/270/270798.png",
              },
              {
                title: "SaaS Products",
                desc: "Scalable cloud-based software as a service platforms.",
                icon: "https://cdn-icons-png.flaticon.com/512/2345/2345338.png",
              },
              {
                title: "API Development",
                desc: "RESTful and GraphQL APIs to integrate with your ecosystem.",
                icon: "https://cdn-icons-png.flaticon.com/512/1086/1086741.png",
              },
              {
                title: "Legacy System Modernization",
                desc: "Upgrade aging platforms into modern, agile systems.",
                icon: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 shadow-md shadow-black text-center hover:shadow-lg transition"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 mx-auto mb-4"
                />
                <div className="font-semibold text-lg text-black">
                  {item.title}
                </div>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="flex-1">
            <img
              src="/digitaltransformation.jpeg" // Replace with your actual image path
              alt="Why Partner With Us"
              className="w-full h-120 shadow-lg object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="text-2xl font-bold mb-6">Why Partner With Us?</div>
            <ul className="space-y-4 text-gray-700 text-md">
              <li>
                ✅ Proven track record with 100+ successful software deployments
              </li>
              <li>✅ Agile, DevOps & CI/CD expertise for rapid delivery</li>
              <li>✅ 100% custom development — no templates, no shortcuts</li>
              <li>✅ Dedicated project manager and full-stack team</li>
              <li>✅ Post-launch support and continuous optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 px-6 bg-[#070B2A] text-white w-full">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-2xl font-bold mb-10">
            Our Development Process
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-left text-sm text-gray-600">
            {[
              ["1. Discovery", "Understand goals, users, and technical needs."],
              [
                "2. Design & Plan",
                "UI/UX wireframes, architecture, and backlog.",
              ],
              [
                "3. Develop & Test",
                "Agile sprints, QA testing, user feedback loops.",
              ],
              [
                "4. Launch & Support",
                "Go live with monitoring, support, and iteration.",
              ],
            ].map(([title, desc], idx) => (
              <div key={idx} className="bg-white p-5 shadow shadow-black">
                <div className="text-lg font-medium mb-2">{title}</div>
                <div>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20  px-6 max-w-6xl mx-auto">
        <div className="text-2xl font-bold text-center mb-10">
          Industries We Serve
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-gray-700">
          {[
            "Healthcare",
            "Finance",
            "Retail",
            "Education",
            "Logistics",
            "GovTech",
            "Real Estate",
            "Media",
          ].map((sector, idx) => (
            <div key={idx} className="p-4 bg-gray-100 rounded-xl">
              {sector}
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-[#070B2A] text-white px-6 mx-auto">
        <div className="text-2xl font-bold text-center mb-10">
          Technologies We Use
        </div>
        <div className="flex justify-center flex-wrap gap-6">
          {[
            "react",
            "nodejs",
            "nextjs",
            "python",
            "aws",
            "docker",
            "mongodb",
          ].map((tech, idx) => (
            <img
              key={idx}
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
              alt={tech}
              className="w-12 h-12"
            />
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6 bg-white max-w-6xl mx-auto">
        <div className="text-2xl font-bold text-center mb-10">Case Studies</div>
        <div className="space-y-8">
          {[
            {
              title: "Retail SaaS Platform",
              summary:
                "Launched a scalable e-commerce engine for a B2B client, increasing conversion by 55%.",
              metrics: "Revenue ↑ 55% • Downtime ↓ 80%",
            },
            {
              title: "Government Portal",
              summary:
                "Modernized a citizen portal with accessibility and cybersecurity at its core.",
              metrics: "100% ADA compliant • Zero security incidents",
            },
            {
              title: "Healthcare App",
              summary:
                "Developed a HIPAA-compliant platform for patient scheduling and records.",
              metrics: "Launch in 3 months • 4.9★ average app rating",
            },
          ].map((cs, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow">
              <div className="text-lg font-semibold">{cs.title}</div>
              <p className="text-sm mt-1">{cs.summary}</p>
              <div className="text-sm text-blue-700 mt-2">{cs.metrics}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-20 px-6 bg-[#070B2A] text-white mx-auto text-center">
        <div className="text-2xl font-bold mb-12">Proven Results</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-blue-900">
          {[
            ["+120", "Projects Delivered"],
            ["+40%", "Faster Time to Market"],
            ["99.9%", "System Uptime"],
            ["+10Y", "Development Experience"],
          ].map(([stat, label], idx) => (
            <div key={idx} className="bg-blue-50 p-6 rounded-xl">
              <div className="text-3xl font-bold">{stat}</div>
              <div className="text-sm text-gray-600 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials & Contact */}
      <TestimonialSection />

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <div className="text-3xl font-bold mb-4">
          Let's Build Something Powerful Together
        </div>
        <p className="mb-6 text-white/80">
          Book a free consultation to discuss your next software project.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-100 transition">
          Schedule a Call
        </button>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50 max-w-5xl mx-auto">
        <div className="text-2xl font-bold text-center mb-10">
          Frequently Asked Questions
        </div>
        <div className="space-y-6">
          {[
            [
              "How long does a typical software project take?",
              "Timelines vary by scope, but most MVPs launch within 8–12 weeks.",
            ],
            [
              "Do you provide post-launch support?",
              "Yes, we offer ongoing maintenance, monitoring, and feature expansion.",
            ],
            [
              "Can we integrate with our existing systems?",
              "Absolutely. We specialize in API-first development and legacy integration.",
            ],
            [
              "What tech stack do you recommend?",
              "We recommend the best tools for your needs — typically React, Node, and AWS.",
            ],
          ].map(([q, a], idx) => (
            <details key={idx} className="bg-white p-4 rounded-md shadow">
              <summary className="cursor-pointer font-medium text-lg">
                {q}
              </summary>
              <p className="mt-2 text-gray-600 text-sm">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <ContactUsSection />
    </>
  );
}
