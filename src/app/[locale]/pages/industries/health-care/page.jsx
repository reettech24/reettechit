"use client";

import React from "react";
import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function page() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-[#06283D] text-white py-48 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/banners/Healthcare1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Transforming Healthcare with Technology
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Empowering providers and patients through innovative digital health
            solutions.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6 bg-white text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Smarter Healthcare Starts Here
        </h2>
        <p className="text-gray-700 mb-8">
          Our Learning Management System (LMS) solutions simplify the
          educational process with intuitive and user-friendly software. Easily
          manage student records, financial transactions, electronic data, and
          more with our comprehensive and efficient solutions.
        </p>
      </section>

      {/* Solutions Section */}
      <section className="py-20 relative bg-[#070B2A] text-white  px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12 text-white">
            Key Healthcare Solutions
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Telemedicine Platforms",
                desc: "Secure, scalable virtual care systems for remote consultations and follow-ups.",
                icon: "/icons/telemedicine.png",
              },
              {
                title: "Patient Portals",
                desc: "Empowering patients with access to health records, appointments, and prescriptions.",
                icon: "/icons/patient-portal.png",
              },
              {
                title: "EHR Integration",
                desc: "Streamlining clinical workflows with intelligent electronic health record systems.",
                icon: "/icons/ehr.png",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 shadow hover:shadow-lg text-center"
              >
                {/* <img src={item.icon} alt={item.title} className="w-12 h-12 mx-auto mb-4" /> */}
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 relative bg-[#070B2A] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">Real-World Applications</h3>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="font-semibold mb-2">🧑‍⚕️ Clinics & Hospitals</h4>
              <p className="text-white/80">
                Manage appointments, patient records, billing, and virtual
                consultations in one secure platform.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">
                🏥 Home Healthcare Providers
              </h4>
              <p className="text-white/80">
                Enable remote monitoring, personalized dashboards, and
                communication tools for caregivers and families.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🏃 Wellness & Fitness Apps</h4>
              <p className="text-white/80">
                Design user-centric apps that sync with wearables, track vitals,
                and provide real-time health coaching.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🧬 Diagnostics Labs</h4>
              <p className="text-white/80">
                Digitize workflows from booking to reporting with automated
                notifications and report sharing.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-70 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Success Metrics */}
      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">Our Impact in Numbers</h3>
          <div className="grid md:grid-cols-4 gap-10">
            {[
              { label: "Health Apps Built", value: "25+" },
              { label: "Patient Records Managed", value: "500K+" },
              { label: "Uptime Guarantee", value: "99.9%" },
              { label: "Teleconsults Enabled", value: "200K+" },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-900 p-6  shadow text-center">
                <h4 className="text-3xl font-bold text-blue-500">
                  {item.value}
                </h4>
                <p className="text-white/80 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-[#070B2A] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">
            Why Healthcare Organizations Work With Us
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <ul className="space-y-4 text-white/80">
              <li>✅ HIPAA-compliant architecture</li>
              <li>✅ Seamless integration with hospital systems</li>
              <li>
                ✅ Scalable platforms for small clinics and large networks
              </li>
              <li>✅ Real-time analytics & patient monitoring</li>
            </ul>
            <ul className="space-y-4 text-white/80">
              <li>✅ Custom mobile apps for patients & staff</li>
              <li>✅ AI/ML powered diagnostics support</li>
              <li>✅ Robust data privacy & security protocols</li>
              <li>✅ User-centric interfaces for accessibility</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industry Insight */}
      <section className="py-20 bg-[#0A1F44] text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            Healthcare Digital Innovation Is No Longer Optional
          </h3>
          <p className="text-white/80">
            The shift toward virtual care, predictive analytics, and connected
            ecosystems is redefining modern medicine. Our goal is to ensure
            you're equipped to lead in this transformation.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 bg-[#070B2A] text-white text-center">
        <h3 className="text-2xl font-bold mb-8">Technology We Use</h3>
        <div className="flex flex-wrap justify-center gap-6 text-gray-600">
          {[
            "React",
            "Next.js",
            "AWS",
            "Firebase",
            "MongoDB",
            "Node.js",
            "Docker",
            "Figma",
          ].map((tech, idx) => (
            <span
              key={idx}
              className="bg-gray-100 px-4 py-2 rounded-full text-sm shadow"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#070B2A] text-white px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold">
                How do you ensure patient data privacy?
              </h4>
              <p className=" text-white/80">
                We follow industry best practices, including HIPAA and GDPR
                standards, with encrypted storage and secure APIs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">
                Can you integrate with existing EHR/EMR systems?
              </h4>
              <p className=" text-white/80">
                Yes, our solutions support HL7, FHIR, and custom APIs for smooth
                integrations.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">
                Do you build both web and mobile healthcare apps?
              </h4>
              <p className=" text-white/80">
                Absolutely. We create responsive web platforms and native/hybrid
                apps tailored for patients and healthcare providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-20 bg-white px-6 text-center">
        <h3 className="text-2xl font-bold mb-6">
          Trusted by Healthcare Innovators
        </h3>
        <p className="text-gray-600 mb-10">
          We’ve had the privilege of working with organizations pushing
          boundaries in digital care.
        </p>
        <div className="flex justify-center flex-wrap gap-6">
          <img src="/logos/hospital1.png" alt="Partner 1" className="h-12" />
          <img src="/logos/hospital2.png" alt="Partner 2" className="h-12" />
          <img src="/logos/hospital3.png" alt="Partner 3" className="h-12" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Let’s Build a Healthier Future Together
        </h3>
        <p className="mb-6 text-white/90">
          Collaborate with us to enhance patient care through technology-driven
          innovation.
        </p>
        <a
          href="/pages/contact"
          className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition"
        >
          Schedule a Free Consultation
        </a>
      </section>

      <TestimonialSection />

      <ContactUsSection />
    </>
  );
}
