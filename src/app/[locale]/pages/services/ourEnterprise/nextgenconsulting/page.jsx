"use client";
import ContactUsSection from '@/components/sections/ContactUsSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import React from 'react';

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-40 text-center">
        <h1 className="text-5xl font-extrabold mb-6">NextGen Consulting</h1>
        <p className="text-2xl max-w-3xl mx-auto">
          Accelerate Your Digital Future with Innovation, Intelligence, and Impact.
        </p>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          At NextGen, we don’t just build solutions — we create transformative digital experiences that scale.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white text-gray-900">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">What We Do Best</h2>
          <p className="text-gray-600 mt-3">Innovative services tailored to disrupt, deliver, and drive success.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8 max-w-7xl mx-auto">
          {[
            { title: 'AI-Powered Digital Transformation', desc: 'Harness artificial intelligence to automate, analyze, and accelerate your business workflows.' },
            { title: 'Smart CRM & ERP Solutions', desc: 'Integrate scalable platforms for real-time operations, customer engagement, and data synergy.' },
            { title: 'Bespoke Mobile & Web Apps', desc: 'Deliver intuitive, responsive, and conversion-optimized applications that users love.' },
            { title: 'Predictive AI & Machine Learning', desc: 'Unlock data intelligence and future-proof your decisions with ML-backed models.' },
            { title: 'Performance Digital Marketing', desc: 'Drive growth with precision targeting, intelligent funnels, and ROI-led strategies.' },
            { title: 'Enterprise-Grade Web Development', desc: 'Build high-performance, accessible, and SEO-optimized digital platforms.' },
            { title: 'Immersive AR & VR Experiences', desc: 'Create interactive, hyper-real environments for training, sales, and customer engagement.' },
          ].map((service, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-gray-100 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Industries We Empower</h2>
          <p className="text-gray-600 mt-3">From traditional sectors to emerging markets, we drive digital change.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8 max-w-6xl mx-auto text-center">
          {[
            'E-commerce & Retail',
            'Digital Healthcare',
            'Smart Manufacturing',
            'Next-Gen Education',
            'FinTech & BFSI',
            'Supply Chain & Logistics',
            'Automotive Tech',
            'Real Estate Innovation',
          ].map((industry, i) => (
            <div key={i} className="bg-white p-5 shadow-lg rounded-xl hover:bg-blue-50 transition">
              <p className="font-medium">{industry}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Why Forward-Thinking Brands Trust Us</h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8">
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h4 className="font-semibold text-lg">Custom-Built for Your Growth</h4>
            <p className="text-gray-600 mt-2">We architect solutions based on your exact goals — no templates, no shortcuts.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h4 className="font-semibold text-lg">Top 1% Talent</h4>
            <p className="text-gray-600 mt-2">Collaborate with elite engineers, designers, and strategists obsessed with innovation.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h4 className="font-semibold text-lg">Scalable & Secure Tech</h4>
            <p className="text-gray-600 mt-2">We deliver secure, future-ready platforms that grow with your business.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h4 className="font-semibold text-lg">Results-Driven Process</h4>
            <p className="text-gray-600 mt-2">Our agile frameworks ensure faster delivery, real-time feedback, and tangible ROI.</p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-900 text-white py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Proven Impact. Measurable Success.</h2>
          <p className="text-gray-400 mt-2">A glimpse into how we’ve helped clients redefine their digital roadmap.</p>
        </div>
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">Smart Retail Enablement</h3>
            <p className="mt-2 text-gray-300">
              Enabled AI-led customer segmentation and automation for a D2C brand, boosting conversions by 42% in 3 months.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">AI in Diagnostics</h3>
            <p className="mt-2 text-gray-300">
              Developed a ML-backed tool for a diagnostics chain, reducing patient screening time from 40 minutes to under 10.
            </p>
          </div>
        </div>
      </section>

  

      {/* Contact Us */}
      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Start Your Transformation Journey</h2>
        <p className="text-gray-600 mb-6">Book a consultation with our experts and explore what's possible.</p>
        <a
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          Book a Free Strategy Call
        </a>
      </section>

      <TestimonialSection />
      <ContactUsSection />
    </>
  );
}
