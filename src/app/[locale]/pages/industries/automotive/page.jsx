"use client"

import React from 'react';
import ContactUsSection from '@/components/sections/ContactUsSection';
import TestimonialSection from '@/components/sections/TestimonialSection';

export default function page() {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="bg-[#0F172A] text-white py-48 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/automotive-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Driving Innovation in the Automotive Industry</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            From smart manufacturing to connected vehicles — we fuel the digital evolution of automotive businesses.
          </p>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20 px-6 bg-white text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Accelerating Automotive Transformation</h2>
        <p className="text-gray-700">
          The automotive industry is undergoing a revolutionary shift toward digital-first operations, intelligent systems,
          and customer-centric models. We enable businesses to stay ahead through scalable, secure, and innovative technologies.
        </p>
      </section>

      {/* Automotive Solutions */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">Solutions We Offer</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: 'Connected Vehicle Systems',
                desc: 'Integrate IoT, GPS, and sensors for fleet tracking, diagnostics, and real-time alerts.',
                icon: '/icons/connected-car.png',
              },
              {
                title: 'Automotive eCommerce',
                desc: 'Sell parts, accessories, and vehicles online with advanced cataloging and user experience.',
                icon: '/icons/ecommerce-car.png',
              },
              {
                title: 'Smart Manufacturing',
                desc: 'Enhance production with predictive maintenance, automation, and robotics integration.',
                icon: '/icons/factory.png',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
                <img src={item.icon} alt={item.title} className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">Practical Applications</h3>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="font-semibold mb-2">🚗 Fleet Management</h4>
              <p className="text-gray-700">
                Monitor driver behavior, fuel usage, maintenance alerts, and real-time GPS tracking.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🛠️ Predictive Maintenance</h4>
              <p className="text-gray-700">
                Reduce downtime with AI-based diagnostics and early detection systems.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📦 Supply Chain Optimization</h4>
              <p className="text-gray-700">
                Real-time inventory tracking, vendor integration, and automated reordering.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📱 In-Car Infotainment</h4>
              <p className="text-gray-700">
                Create immersive driving experiences with entertainment, voice control, and smart assistants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h3 className="text-2xl font-bold mb-8">Technology Stack</h3>
        <div className="flex flex-wrap justify-center gap-6 text-gray-700">
          {['React', 'Next.js', 'AWS IoT', 'MongoDB', 'Node.js', 'Flutter', 'Python', 'Docker'].map((tech, idx) => (
            <span key={idx} className="bg-white px-4 py-2 rounded-full text-sm shadow">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">Our Performance at a Glance</h3>
          <div className="grid md:grid-cols-4 gap-10">
            {[
              { label: 'Projects Delivered', value: '80+' },
              { label: 'Connected Vehicles', value: '12K+' },
              { label: 'Fleet Uptime Increase', value: '18%' },
              { label: 'Automation ROI', value: '24%+' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow text-center">
                <h4 className="text-3xl font-bold text-blue-600">{item.value}</h4>
                <p className="text-gray-700 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Why Digital in Automotive */}
      <section className="py-20 px-6 bg-white text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Why Embrace Digital in Automotive?</h2>
        <p className="text-gray-700 mb-4">
          Digital transformation is redefining how the automotive sector designs, manufactures, sells, and services vehicles.
          With technologies like IoT, AI, and connected systems, businesses are improving safety, reducing costs, and creating
          exceptional customer experiences.
        </p>
      </section>

      {/* Customer Journey Timeline */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">Digital Journey of a Modern Auto Business</h3>
          <div className="relative border-l-2 border-blue-500 pl-6">
            {[
              {
                stage: 'Discovery & Engagement',
                desc: 'Reach potential customers through targeted digital campaigns, content, and SEO.',
              },
              {
                stage: 'Virtual Showroom',
                desc: 'Allow users to explore vehicles, features, and financing from their devices.',
              },
              {
                stage: 'Smart Operations',
                desc: 'Automate supply chains, streamline inventory, and optimize logistics digitally.',
              },
              {
                stage: 'After-Sales & Support',
                desc: 'Enable digital maintenance schedules, service booking, and loyalty programs.',
              },
            ].map((item, index) => (
              <div key={index} className="mb-10 ml-4">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-full w-fit mb-2">{item.stage}</div>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-20 px-6 bg-white text-center">
        <h3 className="text-2xl font-bold mb-8">Trusted by Leading Automotive Brands</h3>
        <div className="flex flex-wrap justify-center gap-10 items-center opacity-80">
          {['toyota', 'bosch', 'bmw', 'mahindra', 'audi'].map((brand, idx) => (
            <img
              key={idx}
              src={`/logos/${brand}.png`}
              alt={brand}
              className="h-10 grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-100 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {[
              {
                q: 'Can you integrate existing ERP/CRM systems?',
                a: 'Yes, we specialize in seamless API integrations with platforms like SAP, Salesforce, and Zoho.',
              },
              {
                q: 'Do you provide ongoing support?',
                a: 'Absolutely! We offer post-launch maintenance, performance monitoring, and feature updates.',
              },
              {
                q: 'What about data security?',
                a: 'We implement end-to-end encryption, role-based access, and industry-standard compliance measures.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow">
                <h4 className="font-semibold mb-2">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">Future-Proof Your Automotive Business</h3>
        <p className="mb-6 text-white/90">Embrace next-gen digital tools to stay competitive, connected, and customer-first.</p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-gray-100 transition"
        >
          Start Your Digital Journey
        </a>
      </section>

      {/* Testimonials & Contact */}
      <TestimonialSection />
      <ContactUsSection />
    </>
  );
}
