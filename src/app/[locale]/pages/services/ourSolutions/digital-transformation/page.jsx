import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-[#070B2A] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/DT.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70" />
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-6">
            Digital Transformation
          </h1>
          <p className="text-2xl max-w-3xl mx-auto">
            Empowering businesses to evolve through technology, automation, and
            digital strategies.
          </p>
        </div>
      </section>

      {/* Why R&D Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Embrace the Future with Digital Transformation
            </h2>
            <p className="text-gray-600 mb-4">
              By combining the Latest technologies with strategic methods, we at
              Reet Technologies lead digital transformation initiatives for
              companies in Pune. We help organizations in being more flexible,
              effective, and prepared for the future by automating processes and
              moving to the cloud.
            </p>
            <p className="text-gray-600 mb-4">
              In today's fast-paced, tech-driven world, Digital Transformation
              is no longer a choice—it's a necessity. At Reet Technologies, we
              help businesses evolve by integrating advanced digital
              technologies into every aspect of their operations. Whether you're
              a startup or an enterprise, our tailored solutions drive
              innovation, boost efficiency, and unlock new growth opportunities.
            </p>
            <p className="text-gray-600 mb-4">
              Digital Transformation refers to the process of using digital
              technologies to create new—or modify existing—business processes,
              culture, and customer experiences to meet changing business and
              market
            </p>
          </div>
          <img
            src="/DT4.jpeg"
            alt="R&D Illustration"
            className="shadow-lg"
          />
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-20 bg-[#070B2A] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <Image
            src="/DT1.png"
            alt="Digital Transformation"
            width={600}
            height={400}
            className=" shadow w-full h-auto"
          />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Why Digital Transformation?
            </h2>
            <p className="text-white/80 mb-4 text-sm sm:text-base">
              In today’s competitive environment, businesses need to adapt to
              survive...
            </p>
            <ul className="list-disc pl-5 text-white/60 space-y-2 text-sm sm:text-base">
              <li>Automation of core business functions</li>
              <li>Enhanced customer engagement</li>
              <li>Data-driven strategies</li>
              <li>Agile transformation across teams</li>
            </ul>
          </div>
        </div>
      </section>

    <section className="bg-[#070B2A] text-white py-16 px-4 sm:px-6 lg:px-20">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
      Our Digital Transformation Services
    </h2>
    <p className="text-white/80 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
      We provide a comprehensive suite of services that empower your business to thrive in the digital age.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-10">
      {[
        {
          title: "Digital Strategy & Consulting",
          description: "Tailored digital roadmaps to guide your transformation journey.",
          icon: "/icons/strategy.svg",
        },
        {
          title: "Cloud Migration & Infrastructure",
          description: "Move to scalable, secure, and efficient cloud environments.",
          icon: "/icons/cloud.svg",
        },
        {
          title: "AI & Automation Integration",
          description: "Boost productivity through AI-driven processes and smart automation.",
          icon: "/icons/ai.svg",
        },
        {
          title: "IoT & Smart Systems",
          description: "Enable smart connectivity across devices and platforms.",
          icon: "/icons/iot.svg",
        },
        {
          title: "Legacy System Modernization",
          description: "Revamp old systems to meet modern demands and performance.",
          icon: "/icons/upgrade.svg",
        },
        {
          title: "Custom Software & App Development",
          description: "Build tailored digital products that match your business goals.",
          icon: "/icons/development.svg",
        },
        {
          title: "UI/UX Design & Digital Experience",
          description: "Craft intuitive, engaging, and accessible digital interfaces.",
          icon: "/icons/ux.svg",
        },
        {
          title: "Cybersecurity & Compliance Solutions",
          description: "Protect your systems and ensure regulatory compliance.",
          icon: "/icons/security.svg",
        },
      ].map((service, index) => (
        <div
          key={index}
          className="bg-gray-800 hover:bg-gray-700 p-5 shadow text-left"
        >
          {/* Uncomment below line if using Next.js Image component */}
          {/* <Image src={service.icon} alt={service.title} width={40} height={40} className="mb-4" /> */}
          <h3 className="font-semibold text-lg text-white mb-2">
            {service.title}
          </h3>
          <p className="text-white/80 text-sm">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Transformation Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-20 bg-white border-t">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#070B2A] mb-6">
              Key Benefits for Your Business
            </h2>
            <ul className="space-y-4 text-gray-700 text-sm sm:text-base">
              <li>✓ Cost reduction through streamlined processes</li>
              <li>✓ Increased productivity and employee satisfaction</li>
              <li>✓ Real-time data access and intelligent forecasting</li>
              <li>✓ Enhanced collaboration and remote capabilities</li>
              <li>✓ Competitive advantage in a tech-driven world</li>
            </ul>
          </div>
          <Image
            src="/DT3.png"
            alt="Benefits"
            width={600}
            height={400}
            className=" shadow w-full h-auto"
          />
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-20 bg-[#070B2A] text-white ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Real Impact, Proven Results
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base">
            Discover how we helped a logistics enterprise improve operational
            efficiency by 40%...
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition text-sm sm:text-base">
            book a free consultation
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Contact */}
      <ContactUsSection />
    </>
  );
}
