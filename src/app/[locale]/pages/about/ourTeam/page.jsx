"use client"

import ContactUsSection from '@/components/sections/ContactUsSection'
import TestimonialSection from '@/components/sections/TestimonialSection'
import React from 'react'

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-[#0A0F2E] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/breadcrumb.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0A0F2E] opacity-70" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Our Team</h1>
          <p className="text-sm text-white/70">About Us / Our Team</p>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Built on Collaboration, Driven by Expertise</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Our people are the foundation of our success. With decades of combined experience across tech,
          business, design, and strategy — we bring together global talent committed to delivering excellence.
        </p>
      </section>

      {/* Meet the Team */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Meet Our Leadership</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                name: 'Anika Patel',
                title: 'Chief Executive Officer',
                img: '/team/anika.jpg',
                bio: 'Anika leads our global vision with over 15 years of experience in tech leadership and digital transformation.',
              },
              {
                name: 'James Carter',
                title: 'Head of Technology',
                img: '/team/james.jpg',
                bio: 'James architects scalable cloud systems and drives innovation across our technical teams.',
              },
              {
                name: 'Mei Wong',
                title: 'VP of Strategy',
                img: '/team/mei.jpg',
                bio: 'With deep experience in enterprise consulting, Mei ensures alignment between business goals and tech execution.',
              },
              {
                name: 'David Kim',
                title: 'Head of Product',
                img: '/team/david.jpg',
                bio: 'David brings a product-first mindset, ensuring customer-centric design and development workflows.',
              },
              {
                name: 'Sara Lopez',
                title: 'Director of Operations',
                img: '/team/sara.jpg',
                bio: 'Sara oversees operational excellence and ensures smooth client delivery across global teams.',
              },
              {
                name: 'Arjun Sharma',
                title: 'Lead Solutions Architect',
                img: '/team/arjun.jpg',
                bio: 'Arjun drives system architecture and client integrations, with a focus on security and scalability.',
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-blue-600 font-medium mb-2">{member.title}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Diversity */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Our Culture</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
          We believe in a culture of ownership, inclusion, and innovation. Our global team thrives on
          mutual respect and a shared passion for solving complex problems with simple, effective solutions.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array(4)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className="h-40 bg-gray-200 rounded-lg animate-pulse"
                title="Culture photo placeholder"
              />
            ))}
        </div>
      </section>

    
      <ContactUsSection />
    </>
  )
}
