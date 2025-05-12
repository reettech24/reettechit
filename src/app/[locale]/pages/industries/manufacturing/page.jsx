"use client"

import React from 'react'
import ContactUsSection from '@/components/sections/ContactUsSection'
import TestimonialSection from '@/components/sections/TestimonialSection'

export default function page() {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="bg-[#0B1F3A] text-white py-48 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/manufacturing-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Digital Innovation for Manufacturing</h1>
          <p className="text-white/80">Transforming operations, streamlining supply chains, and empowering efficiency</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Unlock Efficiency & Innovation</h2>
        <p className="text-gray-700">
          From smart factories to predictive maintenance, the manufacturing sector is embracing technology to stay competitive. Our solutions enable streamlined workflows, enhanced visibility, and data-driven decisions for modern manufacturers.
        </p>
      </section>

      {/* Key Solutions */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">Solutions We Offer</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: 'Smart Factory Systems',
                desc: 'IoT and automation solutions to monitor, optimize, and control manufacturing processes in real-time.',
                icon: '/icons/factory.svg',
              },
              {
                title: 'Supply Chain Digitization',
                desc: 'Improve logistics, inventory, and procurement with integrated digital tools and analytics.',
                icon: '/icons/supply-chain.svg',
              },
              {
                title: 'Predictive Maintenance',
                desc: 'Use sensor data and machine learning to reduce downtime and extend equipment life.',
                icon: '/icons/maintenance.svg',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
                <img src={item.icon} alt={item.title} className="w-12 h-12 mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Case Study: 30% Productivity Increase</h3>
          <p className="text-gray-700 mb-4">
            Learn how a mid-sized manufacturing plant automated its production line and saw measurable improvements in output and quality.
          </p>
          <a
            href="/case-studies/manufacturing-efficiency"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Read Full Case Study
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-10">What You Gain</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              'Reduced Operational Costs',
              'Real-time Monitoring',
              'Improved Product Quality',
              'Faster Time to Market',
            ].map((benefit, i) => (
              <div key={i} className="p-4 rounded-xl bg-white shadow">
                <p className="font-medium text-gray-800">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Trends Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-10">Manufacturing Trends to Watch</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Industrial IoT (IIoT)',
                desc: 'Enhanced machine communication enables proactive decision-making.',
              },
              {
                title: 'AI & Robotics',
                desc: 'Smarter automation and robotics are revolutionizing production.',
              },
              {
                title: 'Sustainability',
                desc: 'Eco-friendly operations and green manufacturing are top priorities.',
              },
            ].map((trend, i) => (
              <div key={i} className="bg-gray-100 p-6 rounded-xl shadow">
                <h4 className="text-lg font-semibold mb-2">{trend.title}</h4>
                <p className="text-sm text-gray-600">{trend.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="bg-blue-600 text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">Looking to Digitally Transform Your Manufacturing?</h3>
        <p className="mb-6 text-white/90">We bring expertise, innovation, and results to your industrial operations.</p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition"
        >
          Talk to an Expert
        </a>
      </section>

      

      {/* Contact Us */}
      <ContactUsSection />
    </>
  )
}
