"use client";
export const dynamic = "force-dynamic";


import React from "react";
import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue-800 text-white py-52 text-center relative">
        <div className="absolute inset-0 bg-blue-900 opacity-80" />
        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Nexus India Management Platform
          </h1>
          <p className="text-white/80">
            Control. Collaborate. Scale. A single place to manage your business
            digitally.
          </p>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">
          Manage Everything in One Place
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Business Dashboard",
              desc: "Real-time metrics on sales, leads, website visitors, and engagement.",
              icon: "/icons/dashboard.png",
            },
            {
              title: "Team Access Controls",
              desc: "Add or remove team members, manage permissions and roles easily.",
              icon: "/icons/team.png",
            },
            {
              title: "Content Management",
              desc: "Update website content, blogs, or product listings from one simple interface.",
              icon: "/icons/content.png",
            },
            {
              title: "Customer Management",
              desc: "CRM integrated to track leads, conversations, and customer status.",
              icon: "/icons/crm.png",
            },
            {
              title: "Payment Integration",
              desc: "Track earnings, manage payouts and invoice clients securely.",
              icon: "/icons/payment.png",
            },
            {
              title: "Automation Tools",
              desc: "Set up notifications, auto-responses, and email/SMS triggers.",
              icon: "/icons/automation.png",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <img src={item.icon} alt={item.title} className="w-10 mb-4" />
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Live Dashboard Preview */}
      <section className="py-20 bg-gray-100 text-center px-6">
        <h2 className="text-2xl font-bold mb-6">See the Dashboard in Action</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Designed for simplicity. Explore the power of your business at your
          fingertips.
        </p>
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
          <img
            src="/images/dashboard-preview.png"
            alt="Dashboard Preview"
            className="w-full"
          />
        </div>
      </section>

      {/* Benefits for Admins */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-10">
          Why Business Owners Love Nexus Management
        </h3>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            "Easy to use, no training required.",
            "Affordable pricing for SMEs.",
            "Secure cloud infrastructure.",
            "Seamless mobile access.",
            "Ongoing support & updates.",
            "Compliant with Indian regulations.",
          ].map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-700 rounded-full p-2 font-bold text-sm">
                {idx + 1}
              </div>
              <p className="text-gray-700 text-sm">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-white py-20 px-6 text-center">
        <h3 className="text-2xl font-bold mb-10">Perfect for These Sectors</h3>
        <div className="grid md:grid-cols-4 gap-6 text-gray-700 text-sm">
          {[
            "Retail",
            "Clinics & Healthcare",
            "Tutors & Coaches",
            "Real Estate",
            "Consultants",
            "Restaurants",
            "Freelancers",
            "NGOs",
          ].map((useCase, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md"
            >
              {useCase}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h3>
        <div className="space-y-6 text-left text-gray-700">
          {[
            {
              q: "Do I need coding knowledge?",
              a: "No, everything is drag-and-drop and intuitive. You can manage everything yourself.",
            },
            {
              q: "Can I manage multiple branches?",
              a: "Yes, you can create profiles for different branches and manage them under one dashboard.",
            },
            {
              q: "Is there customer support?",
              a: "Yes, our support team is available via chat, email, and call for any help you need.",
            },
          ].map((item, idx) => (
            <div key={idx}>
              <strong className="block mb-1">{item.q}</strong>
              <p className="text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Take Control?</h3>
        <p className="mb-6 text-white/90 max-w-xl mx-auto">
          Empower your team, streamline your operations, and scale your impact —
          all with Nexus India.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-gray-100 transition"
        >
          Book a Free Demo
        </a>
      </section>

      <ContactUsSection />
    </>
  );
}
