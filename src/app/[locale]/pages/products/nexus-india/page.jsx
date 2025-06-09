"use client"
export const dynamic = "force-dynamic";


import React from 'react'
import ContactUsSection from '@/components/sections/ContactUsSection'
import TestimonialSection from '@/components/sections/TestimonialSection'

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-blue-700 text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/breadcrumb.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-80" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nexus India</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            A Digital Transformation Platform Built for India’s Small & Medium Businesses
          </p>
        </div>
      </section>

      {/* What is Nexus India */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">What is Nexus India?</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Nexus India is a comprehensive digital platform designed to empower small and medium enterprises (SMEs) across India. 
          From website development to branding, our all-in-one product helps businesses thrive online with affordable, easy-to-use tools.
        </p>
      </section>

      {/* Why Nexus */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-bold">Why Nexus India Stands Out</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mt-2">
            Our product is more than a service — it's your growth partner.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          {[
            {
              title: 'Affordable Pricing',
              desc: 'Pay only for what you need. Perfect for SMEs with limited budgets.',
              icon: '/icons/affordable.png',
            },
            {
              title: 'Tailored for India',
              desc: 'Localized tools, vernacular support, and regional SEO built-in.',
              icon: '/icons/india.png',
            },
            {
              title: 'Modular & Scalable',
              desc: 'Start small and grow as your business expands — no tech headaches.',
              icon: '/icons/scale.png',
            },
            {
              title: 'Impact-Driven',
              desc: 'We measure success not just in revenue but in livelihoods improved.',
              icon: '/icons/impact.png',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <img src={item.icon} alt={item.title} className="w-10 mb-4" />
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6">Industries We Serve</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-700">
          {['Retail', 'Healthcare', 'Education', 'Real Estate', 'Consulting', 'Manufacturing', 'Hospitality', 'Freelancers'].map((industry, idx) => (
            <div key={idx} className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold">Key Features</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mt-2">
            Everything your business needs to go digital — in one simple platform.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: 'Website Builder', desc: 'No code. Just drag, drop, and launch.', icon: '/icons/website.png' },
            { title: 'SEO Tools', desc: 'Rank higher locally & nationally.', icon: '/icons/seo.png' },
            { title: 'Digital Business Card', desc: 'Your brand, in everyone’s pocket.', icon: '/icons/card.png' },
            { title: 'Online Storefront', desc: 'Sell products or services online easily.', icon: '/icons/store.png' },
            { title: 'Multi-language Support', desc: 'Serve customers in local languages.', icon: '/icons/language.png' },
            { title: 'CRM & Lead Tracking', desc: 'Capture leads and manage clients.', icon: '/icons/crm.png' },
          ].map((feature, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <img src={feature.icon} alt={feature.title} className="w-10 mb-4" />
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 bg-gray-100 text-center px-6">
        <h3 className="text-2xl font-bold mb-4">See Nexus India in Action</h3>
        <p className="text-gray-600 mb-8">Watch our quick walkthrough demo and see how easy it is to get started.</p>
        <div className="max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/YOUR_DEMO_VIDEO_ID"
            title="Nexus India Demo"
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </section>

      {/* Partners / Logos */}
      <section className="py-16 bg-white text-center px-6">
        <h3 className="text-xl font-bold mb-6">Trusted By</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {['client1.png', 'client2.png', 'client3.png', 'client4.png'].map((logo, idx) => (
            <img key={idx} src={`/logos/${logo}`} alt={`Partner ${idx}`} className="h-12" />
          ))}
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 px-6 bg-blue-50 text-center">
        <h3 className="text-2xl font-bold mb-6">How to Get Started</h3>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            'Sign up on our platform',
            'Select the services you need',
            'Launch your digital identity',
            'Track growth via dashboard',
          ].map((step, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow">
              <div className="text-blue-600 font-bold text-3xl mb-2">0{idx + 1}</div>
              <p className="text-sm text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
        <div className="space-y-6 text-left text-gray-700">
          {[
            {
              q: 'Who is Nexus India built for?',
              a: 'Small and medium businesses across industries looking to grow their online presence affordably.',
            },
            {
              q: 'Do I need technical knowledge to use it?',
              a: 'Not at all. It’s designed for non-tech users with easy setup and support.',
            },
            {
              q: 'Is there a free trial?',
              a: 'Yes, we offer a 14-day free trial with access to all features.',
            },
            {
              q: 'Can I use it in regional languages?',
              a: 'Absolutely. Hindi, Marathi, Tamil, and more supported.',
            },
          ].map((item, idx) => (
            <div key={idx}>
              <strong className="block mb-1">{item.q}</strong>
              <p className="text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Bring Your Business Online with Nexus India</h3>
        <p className="mb-6 text-white/90 max-w-2xl mx-auto">
          Whether you run a shop, offer services, or build products — Nexus India is built to support your journey.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-gray-100 transition"
        >
          Request a Demo
        </a>
      </section>

      {/* Testimonials & Contact */}
      <TestimonialSection />
      <ContactUsSection />
    </>
  )
}
