import Image from 'next/image'
import ContactUsSection from '@/components/sections/ContactUsSection'
import TestimonialSection from '@/components/sections/TestimonialSection'
import React from 'react'
import ProjectShowcase from '@/components/sections/ProjectsSection'

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-52 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Web & Mobile Application Solutions</h1>
          <p className="text-base md:text-lg mb-6 max-w-3xl mx-auto">
            We design and develop responsive, scalable, and secure web and mobile applications that empower business growth and innovation.
          </p>
          <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Get a Free Quote
          </button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
        <div className="grid md:grid-cols-4 gap-6 text-left max-w-6xl mx-auto">
          {[
            ['Expert Team', 'Experienced developers, designers, and project managers.'],
            ['Agile Process', 'Iterative, transparent development with regular feedback loops.'],
            ['Scalable Solutions', 'We build apps to grow with your business.'],
            ['Customer Focused', 'We prioritize client needs and end-user satisfaction.'],
          ].map(([title, desc], i) => (
            <div key={i} className="p-6 rounded-xl bg-gray-50 shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Core Services (with icons or images) */}
      <section className="px-6 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Our Core Services</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            ['Custom Web Development', 'High-performance web apps built on modern frameworks.', '/images/web-dev.svg'],
            ['Mobile App Development', 'Android & iOS apps tailored to your goals.', '/images/mobile-dev.svg'],
            ['UI/UX Design', 'Delightful experiences that convert.', '/images/uiux.svg'],
            ['Backend & API', 'Secure, scalable backend systems.', '/images/backend.svg'],
            ['Maintenance & Support', 'Reliable updates & issue resolution.', '/images/support.svg'],
            ['Cross-Platform Solutions', 'React Native, Flutter, PWA expertise.', '/images/crossplatform.svg'],
          ].map(([title, desc, img], i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
              <Image src={img} alt={title} width={64} height={64} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="px-6 py-12 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Industries We Serve</h2>
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {['E-commerce', 'Healthcare', 'Fintech', 'Education', 'Travel & Hospitality', 'Logistics & Supply Chain'].map((industry) => (
            <div key={industry} className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold">{industry}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="px-6 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Technologies We Work With</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {[
            ['Frontend', 'React, Angular, Vue, Tailwind CSS'],
            ['Backend', 'Node.js, Python, PHP, Laravel'],
            ['Mobile', 'Flutter, React Native, Kotlin, Swift'],
            ['Database', 'MongoDB, MySQL, PostgreSQL'],
            ['Cloud', 'AWS, Azure, Docker, Firebase'],
            ['Others', 'Figma, GitHub, Web3, GraphQL'],
          ].map(([title, techs]) => (
            <div key={title} className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-600">{techs}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process Timeline */}
      <section className="px-6 py-12 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Our Development Process</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            ['Discovery', 'Understanding your needs and goals.'],
            ['Design', 'UI/UX wireframes & interactive prototypes.'],
            ['Development', 'Robust coding & rigorous testing.'],
            ['Deployment', 'Go live with ongoing support.'],
          ].map(([step, desc], idx) => (
            <div key={idx} className="bg-gray-100 p-6 rounded-xl shadow">
              <div className="text-4xl font-bold text-indigo-600 mb-2">{idx + 1}</div>
              <h3 className="text-lg font-semibold">{step}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

    <ProjectShowcase />

      {/* Client Logos */}
      <section className="px-6 py-12 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Trusted By</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
          {[1, 2, 3, 4, 5].map((num) => (
            <Image key={num} src={`/images/client-${num}.png`} alt="Client Logo" width={120} height={60} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white px-6 py-16 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Have an Idea? Let’s Build It Together</h2>
        <p className="max-w-2xl mx-auto text-sm md:text-base mb-6">
          Whether you're a startup or enterprise, we bring your digital vision to life. Get in touch for a free consultation.
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Contact Us Now
        </a>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* FAQ Section */}
      <section className="px-6 py-12 bg-white text-left max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        {[
          ['How long does it take to build a custom app?', 'Typical project duration ranges from 4 to 12 weeks depending on complexity.'],
          ['Do you sign NDAs?', 'Yes, we are happy to sign NDAs to protect your idea.'],
          ['Can I track the development progress?', 'Yes, we use agile tools and regular demos for transparency.'],
        ].map(([q, a], i) => (
          <div key={i} className="mb-6">
            <h3 className="font-semibold">{q}</h3>
            <p className="text-sm text-gray-600">{a}</p>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <div id="contact">
        <ContactUsSection />
      </div>
    </>
  )
}
