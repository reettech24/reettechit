import ContactUsSection from '@/components/sections/ContactUsSection'
import TestimonialSection from '@/components/sections/TestimonialSection'
import React from 'react'

export default function page() {
  return (
    <>
        {/* Top Banner Section */}
        <section
        className="bg-[#070B2A] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/breadcrumb.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#070B2A] opacity-70"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Software Development</h1>
          <p className="text-sm text-white/70">Home / Services / Our Enterprise / Software Development</p>
        </div>
      </section>
    <TestimonialSection />
    <ContactUsSection />
    </>
  )
}
