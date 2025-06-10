"use client";
export const dynamic = "force-dynamic";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import Accordion from "@/components/ui/Accordion";
import ProjectShowcase from "@/components/sections/ProjectsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ContactUsSection from "@/components/sections/ContactUsSection";
import NexusSolutionsSection from "@/components/sections/NexusSolutionsSection";

const accordionData = {
  "Next Generation Consulting": {
    heading: "Next Generation Consulting",
    description:
      "Businesses want innovation at the heart of their operations in the quickly changing digital market, not just traditional strategies. By combining data-driven insights, flexible business models, and future tech solutions, Reet Technologies provides next-generation consulting services in Pune that will keep your company ahead of the curve. We produce faster, smarter, and highly scalable results than traditional consulting by combining AI, automation, sustainability, and agile techniques.In addition to offering advice, our top technology consulting firm in Pune gives you the tools you need to take the lead in the future.",
    videoTitle: "Why Consulting Matters",
    bulletPoints: [
      "Accelerate digital adaptation",
      "Leverage cutting-edge frameworks",
      "Foster innovation culture",
    ],
  },
  "Brand Portfolio Management": {
    heading: "Brand Portfolio Management",
    description:
      "Companies grow, scale, and develop by providing specialist brand portfolio management services. Your brand architecture will be clear, unified, and in line with your company's mission thanks to our unique brand strategy solutions.We assist companies in organizing and managing their brand portfolios for growth, clarity, and consistency at Reet Tech, Pune's go-to branding and strategy firm.",
    videoTitle: "Portfolio Growth Strategies",
    bulletPoints: [
      "Unified brand voice",
      "Insight-driven segmentation",
      "Strategic alignment",
    ],
  },
  "Project Management": {
    heading: "Project Management",
    description:
      "we help you bring your projects to life—on time and with precision. From web to mobile and cloud projects, we plan, execute, and deliver—so you can focus on growth.",
    videoTitle: "Project Execution Tips",
    bulletPoints: [
      "Agile frameworks",
      "Milestone tracking",
      "Effort optimization",
    ],
  },
  "Business & IT Consulting": {
    heading: "Business & IT Consulting",
    description:
      "Our consulting solutions integrate technology and business strategy, tailored for your digital growth.",
    videoTitle: "Why IT Consulting Matters",
    bulletPoints: [
      "Bridge business goals with tech capabilities",
      "Accelerate digital transformation",
      "Optimize IT investments and risk mitigation",
    ],
  },
  "Software Development": {
    heading: "Software Development",
    description:
      "We specialize in delivering custom software solutions designed to meet your exact business requirements. Whether you're a startup, SME, or enterprise, we develop powerful, scalable, and secure software using the latest technologies that integrate seamlessly with cloud servers and supporting hardware systems. Our team works closely with clients to understand their workflow, goals, and challenges—then builds tailored solutions that drive efficiency, automation, and growth.",
    videoTitle: "Modern Dev Workflows",
    bulletPoints: [
      "Robust architecture",
      "Scalable deployments",
      "Cloud-native practices",
    ],
  },
  "Digital Transformation": {
    heading: "Digital Transformation",
    description:
      "By combining the latest technologies with strategic methods, we at Reet Technologies lead digital transformation initiatives for companies in Pune. We help organizations in being more flexible, effective, and prepared for the future by automating processes and moving to the cloud.In today's fast-paced, tech-driven world, Digital Transformation is no longer a choice—it's a necessity. At Reet Technologies, we help businesses evolve by integrating advanced digital technologies into every aspect of their operations. Whether you're a startup or an enterprise, our tailored solutions drive innovation, boost efficiency, and unlock new growth opportunities.Digital Transformation refers to the process of using digital technologies to create new—or modify existing—business processes, culture, and customer experiences to meet changing business and market.",
    videoTitle: "Transforming with Tech",
    bulletPoints: [
      "Customer-centric workflows",
      "AI-powered decisioning",
      "Process automation",
    ],
  },
  "CRM & ERP Solutions": {
    heading: "CRM & ERP Solutions",
    description:
      " we specialize in developing customized CRM and ERP solutions that empower businesses to operate efficiently, make informed decisions, and stay competitive.",
    videoTitle: "Enterprise System Benefits",
    bulletPoints: [
      "Centralized operations",
      "Scalable integrations",
      "Workflow automation",
    ],
  },
};

export default function page() {
  const [selectedService, setSelectedService] = useState(
    "Business & IT Consulting"
  );
  const content = accordionData[selectedService];

  return (
    <div className="bg-[#f0f0f0]">
      {/* Top Banner */}
      <section
        className="bg-[#070B2A] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/breadcrumb.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Services & Solutions
          </h1>
          <p className="text-sm text-white/70">Home / Services & Solutions</p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-20 grid md:grid-cols-3 gap-12">
        {/* Sidebar */}
        <aside className="space-y-3">
          <div className="bg-black text-white p-4 flex justify-between items-center shadow">
            <span>Our Services</span>
            <span className="text-teal-400">→</span>
          </div>
          {Object.keys(accordionData).map((service, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedService(service)}
              className={`cursor-pointer p-4 flex justify-between items-center shadow-sm ${
                selectedService === service
                  ? "bg-[#070B2A] text-white"
                  : "bg-gray-100 text-black hover:bg-teal-50"
              }`}
            >
              <span>{service}</span>
              <span className="text-black/50">→</span>
            </div>
          ))}

          {/* Contact Form */}
          {/* <form className="bg-white border p-4 mt-6 space-y-4 rounded shadow">
            <div className="grid grid-cols-2 gap-2">
              <input placeholder="First Name" className="p-2 border rounded" />
              <input placeholder="Last Name" className="p-2 border rounded" />
            </div>
            <input placeholder="Email" className="p-2 border rounded w-full" />
            <input placeholder="Phone" className="p-2 border rounded w-full" />
            <textarea
              placeholder="Enter Message"
              rows={4}
              className="p-2 border rounded w-full"
            ></textarea>
            <button className="bg-black text-white py-2 px-4 rounded">
              Send Message
            </button>
          </form> */}
        </aside>

        {/* Content */}
        <main className="md:col-span-2 space-y-6">
          {/* <Image
            src="/websitedevelopment.webp"
            alt="ML"
            width={1000}
            height={300}
            className="h-[200px] object-cover rounded-lg shadow"
          /> */}
          <h2 className="text-4xl font-bold">{content.heading}</h2>

          {/* Video + Side Text */}
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="relative h-fit overflow-hidden items-center">
              {/* <Image
                src="/illu.png"
                alt="video"
                fill
                className="object-cover"
              /> */}
              <video autoPlay loop muted playsInline className="object-cover">
                <source src="/contactusvideo.mp4" type="video/mp4" />
              </video>
              {/* <div className="absolute inset-0 bg-black/20 flex justify-center items-center">
                <button className="bg-white text-teal-600 p-3 rounded-full shadow-lg">
                  <Play className="w-6 h-6" />
                </button>
              </div> */}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{content.videoTitle}</h3>
              <ul className="list-disc pl-4 text-gray-700 space-y-1">
                {content.bulletPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-gray-600 ">{content.description}</p>

          {/* FAQ Accordion */}
          <Accordion
            items={[
              {
                title: `How does ${content.heading} benefit my business?`,
                content:
                  "We bring strategic insight and executional capabilities tailored to your goals.",
              },
              {
                title: `What tools do you use in ${content.heading}?`,
                content:
                  "We use industry-standard frameworks and modern technologies aligned with global trends.",
              },
              {
                title: `How do I get started with ${content.heading}?`,
                content:
                  "Schedule a consultation and we'll take it from there.",
              },
            ]}
          />
        </main>
      </section>
      <NexusSolutionsSection />
      <ProjectShowcase />
      <TestimonialSection />
    </div>
  );
}
