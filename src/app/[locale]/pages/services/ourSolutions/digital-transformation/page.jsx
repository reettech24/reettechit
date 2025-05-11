import ContactUsSection from '@/components/sections/ContactUsSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import Image from 'next/image';
import React from 'react';

export default function page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#070B2A] text-white py-70 lg:py-52 px-4 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Digital Transformation
          </h1>
          <p className="text-base sm:text-lg text-white/80">
            Empowering businesses to evolve through technology, automation, and digital strategies.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <Image
            src="/digital-transformation.jpg"
            alt="Digital Transformation"
            width={600}
            height={400}
            className="rounded-lg shadow w-full h-auto"
          />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#070B2A]">
              Why Digital Transformation?
            </h2>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              In today’s competitive environment, businesses need to adapt to survive...
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 text-sm sm:text-base">
              <li>Automation of core business functions</li>
              <li>Enhanced customer engagement</li>
              <li>Data-driven strategies</li>
              <li>Agile transformation across teams</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="bg-[#f2fafd] py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#070B2A] mb-6">
            Our Digital Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: 'Cloud Integration',
                description: 'Seamless migration to scalable cloud environments.',
                icon: '/icons/cloud.svg',
              },
              {
                title: 'Business Process Automation',
                description: 'Optimize operations with advanced workflows and RPA.',
                icon: '/icons/automation.svg',
              },
              {
                title: 'Customer Experience Platforms',
                description: 'Omnichannel support, CRMs, and personalized CX tools.',
                icon: '/icons/customer.svg',
              },
              {
                title: 'Data Analytics & BI',
                description: 'Transform data into insights with powerful analytics.',
                icon: '/icons/data.svg',
              },
              {
                title: 'Enterprise Mobility',
                description: 'Enable secure mobile access to business systems.',
                icon: '/icons/mobility.svg',
              },
              {
                title: 'Legacy System Modernization',
                description: 'Upgrade outdated systems for better performance.',
                icon: '/icons/upgrade.svg',
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-5 rounded shadow text-left">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                  className="mb-4"
                />
                <h3 className="font-semibold text-lg text-[#070B2A] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-20 bg-white border-t">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#070B2A] mb-6">
              Key Benefits for Your Business
            </h2>
            <ul className="space-y-4 text-gray-700 text-sm sm:text-base">
              <li>✓ Cost reduction through streamlined processes</li>
              <li>✓ Increased productivity and employee satisfaction</li>
              <li>✓ Real-time data access and intelligent forecasting</li>
              <li>✓ Enhanced collaboration and remote capabilities</li>
              <li>✓ Competitive advantage in a tech-driven world</li>
            </ul>
          </div>
          <Image
            src="/benefits.jpg"
            alt="Benefits"
            width={600}
            height={400}
            className="rounded-lg shadow w-full h-auto"
          />
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-20 bg-[#f2fafd]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#070B2A] mb-4">
            Real Impact, Proven Results
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Discover how we helped a logistics enterprise improve operational efficiency by 40%...
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition text-sm sm:text-base">
            View Case Study
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Contact */}
      <ContactUsSection />
    </>
  );
}
