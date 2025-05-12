"use client"

import React from 'react'
import ContactUsSection from '@/components/sections/ContactUsSection'
import TestimonialSection from '@/components/sections/TestimonialSection'

export default function page() {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="bg-[#081C3A] text-white py-48 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/logistics-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Digital Transformation in Logistics</h1>
          <p className="text-white/80 text-lg">Delivering real-time visibility, operational excellence, and automation across the supply chain</p>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Overcoming Modern Logistics Challenges</h2>
        <p className="text-gray-700">
          The logistics industry faces increasing demands for speed, accuracy, and transparency. With digital solutions,
          companies can optimize delivery routes, manage fleets efficiently, and offer real-time tracking to customers.
        </p>
      </section>

      {/* Solutions Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">Our Digital Solutions for Logistics</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: 'Fleet Tracking & Management',
                desc: 'Monitor vehicle locations, driver behavior, and route efficiency in real-time.',
                icon: '/icons/fleet.svg',
              },
              {
                title: 'Route Optimization',
                desc: 'Reduce fuel costs and delivery times with AI-powered routing tools.',
                icon: '/icons/route.svg',
              },
              {
                title: 'Supply Chain Visibility',
                desc: 'Improve transparency and inventory tracking across suppliers, distributors, and customers.',
                icon: '/icons/visibility.svg',
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

      {/* Benefits Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-10">Key Benefits for Logistics Providers</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              'Lower Delivery Costs',
              'Faster Fulfillment',
              'Real-Time Customer Updates',
              'Improved Driver Safety',
            ].map((benefit, i) => (
              <div key={i} className="p-4 rounded-xl bg-blue-50 shadow-sm">
                <p className="font-medium text-gray-800">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Use Case: Nationwide Courier Optimization</h3>
          <p className="text-gray-700 mb-4">
            A regional logistics company used our technology to optimize 300+ delivery routes, reducing fuel costs by 25%
            and improving on-time deliveries to 98%.
          </p>
          <a
            href="/case-studies/logistics"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            View Full Case Study
          </a>
        </div>
      </section>

      {/* Emerging Trends */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-10">Logistics Trends to Watch</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Green Logistics',
                desc: 'Sustainable practices like EV fleets and carbon tracking are becoming standard.',
              },
              {
                title: 'Last-Mile Automation',
                desc: 'Drones and autonomous vehicles are revolutionizing final-mile delivery.',
              },
              {
                title: 'Digital Twins',
                desc: 'Real-time virtual supply chains enable better forecasting and planning.',
              },
            ].map((trend, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl shadow">
                <h4 className="text-lg font-semibold mb-2">{trend.title}</h4>
                <p className="text-sm text-gray-600">{trend.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

       {/* Technology Stack */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Built with Powerful Technologies</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            We leverage cutting-edge tools and platforms to deliver logistics solutions that scale efficiently and securely.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {['AWS', 'Google Maps API', 'IoT Sensors', 'React.js', 'Next.js', 'MongoDB', 'PostgreSQL'].map((tech, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-800 font-medium px-4 py-2 rounded-full text-sm shadow"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logo Wall */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-10">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {['dhl', 'fedex', 'maersk', 'ups', 'blue-dart'].map((logo, idx) => (
              <img
                key={idx}
                src={`/logos/${logo}.png`}
                alt={`${logo} logo`}
                className="h-12 grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Expert Insight (Thought Leadership) */}
      <section className="py-20 bg-[#081C3A] text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Expert Insight</h3>
          <blockquote className="italic text-white/80 text-lg leading-relaxed">
            "Digitization isn’t just about faster deliveries—it’s about redefining how logistics companies make decisions,
            interact with clients, and future-proof their supply chains. Technology is not optional—it's a competitive necessity."
          </blockquote>
          <p className="mt-6 font-semibold text-white/60">– Logistics Innovation Lead, Global Transport Forum</p>
        </div>
      </section>

      {/* Call-To-Action */}
      <section className="bg-blue-600 text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">Let’s Drive Your Logistics Into the Future</h3>
        <p className="mb-6 text-white/90">From local distribution to global shipping, our tools empower logistics transformation at every level.</p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition"
        >
          Start Your Digital Journey
        </a>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Contact Us */}
      <ContactUsSection />
    </>
  )
}
