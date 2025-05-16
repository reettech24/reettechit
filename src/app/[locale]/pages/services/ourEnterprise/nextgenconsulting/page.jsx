"use client";
import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import React from "react";

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-40 text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          Next Generation Consulting
        </h1>
        <p className="text-2xl max-w-3xl mx-auto">
          Accelerate Your Digital Future with Innovation, Intelligence, and
          Impact.
        </p>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          At NextGen, we don’t just build solutions — we create transformative
          digital experiences that scale.
        </p>
      </section>

      {/* Why R&D Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="R&D Illustration"
            className="shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Why Next Generation Consulting?
            </h2>
            <p className="text-gray-600 mb-4">
              Businesses want innovation at the heart of their operations in the
              quickly changing digital market, not just traditional strategies.
              By combining data-driven insights, flexible business models, and
              future tech solutions, Reet Technologies provides next-generation
              consulting services in Pune that will keep your company ahead of
              the curve. We produce faster, smarter, and highly scalable results
              than traditional consulting by combining AI, automation,
              sustainability, and agile techniques. In addition to offering
              advice, our top technology consulting firm in Pune gives you the
              tools you need to take the lead in the future.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Future-Focused Strategy Development</li>
              <li> Technology-Driven Business Solutions</li>
              <li> Agile, Scalable & Sustainable Growth Models</li>
              <li>Industry-Specific Expertise Across Domains</li>
              <li>End-to-End Execution Support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white text-gray-900">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">What We Do Best</h2>
          <p className="text-gray-600 mt-3">
            Innovative services tailored to disrupt, deliver, and drive success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8 max-w-7xl mx-auto">
          {[
            {
              title: "AI & Automation Advisory",
              desc: "Harness artificial intelligence to automate, analyze, and accelerate your business workflows.",
            },
            {
              title: "Digital Transformation Strategy",
              desc: "Integrate scalable platforms for real-time operations, customer engagement, and data synergy.",
            },
            {
              title: "Business Model Innovation",
              desc: "Deliver intuitive, responsive, and conversion-optimized applications that users love.",
            },
            {
              title: "Data Analytics & Intelligence",
              desc: "Unlock data intelligence and future-proof your decisions with ML-backed models.",
            },
            {
              title: "Change Management Consulting",
              desc: "Drive growth with precision targeting, intelligent funnels, and ROI-led strategies.",
            },
            {
              title: "Customer Experience Optimization",
              desc: "Build high-performance, accessible, and SEO-optimized digital platforms.",
            },
            {
              title: "Cloud Strategy & IT Modernization",
              desc: "Create interactive, hyper-real environments for training, sales, and customer engagement.",
            },
            {
              title: "Sustainability & ESG Consulting",
              desc: "Create interactive, hyper-real environments for training, sales, and customer engagement.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-gray-100 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Industries We Empower</h2>
          <p className="text-gray-600 mt-3">
            From traditional sectors to emerging markets, we drive digital
            change.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-8 max-w-6xl mx-auto text-center">
          {[
            "Enterprises looking to digitally scale",
            "Startups entering high-growth phases",
            "Healthcare providers embracing telehealth & AI",
            "Retail & eCommerce brands seeking omnichannel strategies",
            "Manufacturing companies transitioning to Industry 4.0",
            " Educational institutions modernizing operations",
          ].map((industry, i) => (
            <div
              key={i}
              className="bg-white p-5 shadow-lg rounded-xl hover:bg-blue-50 transition"
            >
              <p className="font-medium">{industry}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            Why Forward-Thinking Brands Trust Us
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8">
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h4 className="font-semibold text-lg">
              Custom-Built for Your Growth
            </h4>
            <p className="text-gray-600 mt-2">
              We architect solutions based on your exact goals — no templates,
              no shortcuts.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h4 className="font-semibold text-lg">Top 1% Talent</h4>
            <p className="text-gray-600 mt-2">
              Collaborate with elite engineers, designers, and strategists
              obsessed with innovation.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h4 className="font-semibold text-lg">Scalable & Secure Tech</h4>
            <p className="text-gray-600 mt-2">
              We deliver secure, future-ready platforms that grow with your
              business.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h4 className="font-semibold text-lg">Results-Driven Process</h4>
            <p className="text-gray-600 mt-2">
              Our agile frameworks ensure faster delivery, real-time feedback,
              and tangible ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-900 text-white py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Proven Impact. Measurable Success.
          </h2>
          <p className="text-gray-400 mt-2">
            A glimpse into how we’ve helped clients redefine their digital
            roadmap.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">Smart Retail Enablement</h3>
            <p className="mt-2 text-gray-300">
              Enabled AI-led customer segmentation and automation for a D2C
              brand, boosting conversions by 42% in 3 months.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">AI in Diagnostics</h3>
            <p className="mt-2 text-gray-300">
              Developed a ML-backed tool for a diagnostics chain, reducing
              patient screening time from 40 minutes to under 10.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Stay Ahead of the Curve with Us
        </h2>
        <p className="text-gray-600 mb-6">
          In an ever-evolving marketplace, success belongs to those who adapt
          quickly. Our consulting framework helps you build an agile,
          data-powered, and tech-enabled business.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          Schedule a Free Strategy Session Today!
        </a>
      </section>

      <TestimonialSection />
      <ContactUsSection />
    </>
  );
}
