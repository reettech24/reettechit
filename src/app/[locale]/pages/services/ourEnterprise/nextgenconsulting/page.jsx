"use client";
import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const services = [
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
    desc: "Build strategies that meet tomorrow’s environmental and ethical standards today.",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}

      <section
        className="bg-[#070B2A] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/Nexnus.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70" />
        <div className="relative z-10">
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
        </div>
      </section>

      {/* Why R&D Section */}
      <section className=" relative py-20 px-6 bg-white">
        <div className="absolute -top-20 -left-20">
          <img
            src="/left-shape.png"
            alt="Nexus India Logo"
            className=" h-96 opacity-100"
          />
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/Team.jpeg"
            alt="R&D Illustration"
            className="shadow-lg object-cover h-full z-10"
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
      <section className="relative py-24 bg-[#070B2A] text-white overflow-hidden">
        {/* Background Decorations */}
        <img
          src="/design.png"
          alt="Decor"
          className="absolute bottom-0 left-0 w-[600px] h-screen opacity-10 pointer-events-none"
        />
        <img
          src="/footer-shape-1.png"
          alt="Decor"
          className="absolute top-0 right-0 w-[600px] pointer-events-none"
        />

        {/* Title */}
        <div className="text-center mb-14 relative z-10">
          <h2 className="text-4xl font-bold">What We Do Best</h2>
          <p className="text-white/60 mt-3">
            Innovative services tailored to disrupt, deliver, and drive success.
          </p>
        </div>

        {/* Swiper Navigation (outside) */}

        {/* Swiper Carousel */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 mb-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Pagination, Navigation, Autoplay]}
          >
            {services.map((service, i) => (
              <SwiperSlide key={i}>
                <div className="bg-gray-800 shadow-xl p-5 h-full hover:shadow-2xl transition duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-blue-700">
                    {service.title}
                  </h3>
                  <p className=" py-3 text-white/80">{service.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex  z-10">
          <div className="swiper-button-prev !bg-white/20 !text-white !w-12 !h-12 !flex !items-center !justify-center hover:!bg-white/30 transition" />
          <div className="swiper-button-next !bg-white/20 !text-white !w-12 !h-12 !flex !items-center !justify-center hover:!bg-white/30 transition" />
        </div>
      </section>

      {/* Industries We Serve */}
      <section className=" relative overflow-hidden bg-gray-100 py-20">
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
              className="bg-white p-5 shadow-lg  hover:bg-gray-800 hover:text-white transition"
            >
              <p className="font-medium ">{industry}</p>
            </div>
          ))}
        </div>

        <div className="absolute -bottom-0 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      <section className="bg-[#070B2A] relative text-white py-28">
        {/* <div className="absolute -top-40 opacity-20">
          <img src="/smoke.png" alt="Nexus India Logo" className="" />
        </div> */}

        <div className="absolute -top-20 -left-20">
          <img
            src="/left-shape.png"
            alt="Nexus India Logo"
            className=" h-96 opacity-100"
          />
        </div>

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
          <div className="bg-gray-800 p-6  shadow-md">
            <h3 className="text-xl font-semibold">Smart Retail Enablement</h3>
            <p className="mt-2 text-gray-300">
              Enabled AI-led customer segmentation and automation for a D2C
              brand, boosting conversions by 42% in 3 months.
            </p>
          </div>
          <div className="bg-gray-800 p-6  shadow-md">
            <h3 className="text-xl font-semibold">AI in Diagnostics</h3>
            <p className="mt-2 text-gray-300">
              Developed a ML-backed tool for a diagnostics chain, reducing
              patient screening time from 40 minutes to under 10.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className=" relative py-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
          {/* Text Side */}
          <div className="md:w-1/2">
            <div className="text-left md:text-left mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Forward-Thinking Brands Trust Us
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-5  shadow-md">
                <h4 className="font-semibold text-lg text-white">
                  Custom-Built for Your Growth
                </h4>
                <p className="text-white/80 mt-2">
                  We architect solutions based on your exact goals — no
                  templates, no shortcuts.
                </p>
              </div>
              <div className="bg-gray-800 p-5  shadow-md">
                <h4 className="font-semibold text-lg text-white">
                  Top 1% Talent
                </h4>
                <p className=" mt-2 text-white/80">
                  Collaborate with elite engineers, designers, and strategists
                  obsessed with innovation.
                </p>
              </div>
              <div className="bg-gray-800 p-5  shadow-md">
                <h4 className="font-semibold text-lg text-white ">
                  Scalable & Secure Tech
                </h4>
                <p className="text-white/80 mt-2">
                  We deliver secure, future-ready platforms that grow with your
                  business.
                </p>
              </div>
              <div className="bg-gray-800 p-5  shadow-md">
                <h4 className="font-semibold text-lg text-white">
                  Results-Driven Process
                </h4>
                <p className="text-white/80 mt-2">
                  Our agile frameworks ensure faster delivery, real-time
                  feedback, and tangible ROI.
                </p>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="md:w-1/2 object-cover">
            <img
              src="/about2.jpeg"
              alt="Why choose us"
              className="w-full shadow-lg object-cover"
            />
          </div>
        </div>
          <div className="absolute -bottom-70 right-0 opacity-30 w-screen">
          <img src="/p2.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Case Studies */}

      <TestimonialSection />

      {/* Contact Us */}
      <section className="relative bg-[#070B2A]/10 py-24 overflow-hidden">
        {/* Decorative background PNGs */}
        {/* <img
          src="/design.png"
          alt="Decorative Dots"
          className="absolute top-10 left-10 w-48 opacity-20 pointer-events-none"
        /> */}
        <img
          src="/design.png"
          alt="Abstract Shape"
          className="absolute bottom-0 right-0 w-[500px] opacity-20 pointer-events-none"
        />

        <div className="relative z-10 bg-[#070B2A]/40 max-w-4xl mx-auto px-6 text-center">
          <div className="bg-yellow-500 shadow-2xl p-10 md:p-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Stay Ahead of the Curve with Us
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              In an ever-evolving marketplace, success belongs to those who
              adapt quickly. Our consulting framework helps you build an agile,
              data-powered, and tech-enabled business.
            </p>
            <a
              href="/pages/contact"
              className="inline-block bg-[#070B2A] hover:bg-[#070B2A]/60 text-white px-8 py-4 text-lg font-medium transition duration-300 shadow-lg"
            >
              Schedule a Free Strategy Session Today!
            </a>
          </div>
        </div>
      </section>

      <ContactUsSection />
    </>
  );
}
