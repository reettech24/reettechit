"use client"

import React from 'react';
import TestimonialSection from '@/components/sections/TestimonialSection';
import ContactUsSection from '@/components/sections/ContactUsSection';

export default function page() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="bg-[#070B2A] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/industries/retail-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Retail & E-Commerce Solutions</h1>
          <p className="text-white/70">Digital Transformation for Next-Gen Retail</p>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Empowering Retailers with Digital Innovation</h2>
        <p className="text-gray-600 text-md">
          At Nexus India, we help retailers and e-commerce businesses thrive in an omnichannel world by providing scalable,
          customer-centric digital solutions. From online store development to inventory automation and AI-driven insights—
          we support the full commerce lifecycle.
        </p>
      </section>

      {/* Industry Challenges */}
      <section className="bg-white py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-center">Key Challenges in Retail & E-Commerce</h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            'Changing customer expectations',
            'Inventory & supply chain inefficiencies',
            'Data fragmentation across platforms',
            'Customer loyalty and personalization',
            'Scaling operations affordably',
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <p className="text-gray-700 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-10">Tailored Solutions for the Modern Retailer</h3>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {[
            {
              title: 'E-Commerce Website Development',
              desc: 'Custom Shopify, WooCommerce, and headless CMS implementations that scale.',
            },
            {
              title: 'Omnichannel Integration',
              desc: 'Unified customer experience across web, mobile, POS, and third-party marketplaces.',
            },
            {
              title: 'AI-Powered Analytics',
              desc: 'Data insights to track sales, predict trends, and personalize offers in real time.',
            },
            {
              title: 'Inventory & Supply Chain Tools',
              desc: 'Automation and visibility tools to optimize logistics and inventory management.',
            },
            {
              title: 'Digital Marketing Enablement',
              desc: 'Targeted ad campaigns, SEO optimization, and customer engagement solutions.',
            },
            {
              title: 'Mobile-First Experience',
              desc: 'Fast, responsive mobile UX that drives conversions on any device.',
            },
          ].map((s, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2">{s.title}</h4>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h3 className="text-2xl font-bold mb-8">Proven Results</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left text-sm">
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg mb-2">Boosting Online Revenue by 60%</h4>
            <p className="text-gray-600">
              We partnered with a fashion retailer to build a mobile-optimized store with integrated CRM. Result: 60% sales growth in 4 months.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg mb-2">Automating Inventory Management</h4>
            <p className="text-gray-600">
              For an electronics chain, we automated inventory across outlets—reducing out-of-stock issues by 45%.
            </p>
          </div>
        </div>
      </section>

      {/* Retail Trends Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6">Retail Trends & Insights</h3>
        <p className="text-gray-600 mb-10">
          Stay ahead of the curve with insights into how technology is reshaping the retail landscape.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            'Personalized customer journeys are driving conversions.',
            'Mobile commerce continues to dominate online sales.',
            'AR & VR are enhancing the virtual shopping experience.',
          ].map((trend, idx) => (
            <div key={idx} className="bg-white p-5 shadow rounded-xl text-left">
              <p className="text-gray-700">{trend}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Logos */}
      <section className="bg-white py-20 px-6 text-center">
        <h3 className="text-2xl font-bold mb-6">Trusted By</h3>
        <div className="flex justify-center items-center flex-wrap gap-10">
          {['client1.png', 'client2.png', 'client3.png', 'client4.png'].map((logo, idx) => (
            <img
              key={idx}
              src={`/logos/${logo}`}
              alt="Client logo"
              className="h-12 w-auto grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
        <div className="space-y-6">
          {[
            {
              q: 'Do you offer platform migration services?',
              a: 'Yes, we can migrate your store from Magento, WooCommerce, etc. to Shopify or headless solutions with no downtime.',
            },
            {
              q: 'Can you integrate with our existing ERP or CRM?',
              a: 'Absolutely. We specialize in API integrations for ERPs, CRMs, and 3rd-party tools.',
            },
            {
              q: 'What’s the typical project timeline?',
              a: 'Depending on scope, projects range from 4 to 12 weeks for design, development, and testing.',
            },
          ].map((item, idx) => (
            <div key={idx}>
              <h4 className="font-semibold">{item.q}</h4>
              <p className="text-sm text-gray-600 mt-2">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h3 className="text-2xl font-bold mb-6">Our Technology Stack</h3>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          We work with reliable, modern, and scalable technologies to ensure your business runs smoothly.
        </p>
        <div className="flex justify-center flex-wrap gap-6">
          {['Shopify', 'WooCommerce', 'Next.js', 'Node.js', 'Tailwind CSS', 'AWS', 'Stripe', 'MongoDB'].map((tech, idx) => (
            <div
              key={idx}
              className="bg-white px-6 py-3 rounded-full shadow text-sm font-medium"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-8">Why Choose Nexus India?</h3>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: '💰', title: 'Affordable Packages' },
            { icon: '⚙️', title: 'Custom Development' },
            { icon: '📊', title: 'Scalable Solutions' },
            { icon: '🤝', title: 'End-to-End Support' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-semibold">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA */}
      <section className="bg-blue-700 text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">Digitize Your Retail Business Today</h3>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">
          Whether you're a small business or an expanding e-commerce brand, Nexus India is here to help you grow with confidence.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-gray-100 transition"
        >
          Get In Touch
        </a>
      </section>

      {/* Contact */}
      <ContactUsSection />
    </div>
  );
}
