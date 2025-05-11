import ContactUsSection from '@/components/sections/ContactUsSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import Image from 'next/image';
import React from 'react';

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-32 sm:py-40 md:py-52"
        style={{ backgroundImage: "url('/breadcrumb.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B2A]/90 to-[#1E1E3F]/90" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">CRM & ERP Solutions</h1>
          <p className="text-white/70 text-sm sm:text-base">Home / Services / Our Solution / CRM & ERP Solutions</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Image
            src="/crm-erp-overview.jpg"
            alt="CRM ERP Overview"
            width={600}
            height={400}
            className="w-full rounded-lg shadow-xl"
          />
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#070B2A]">Unified Business Management</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              Streamline your business with our end-to-end CRM & ERP solutions. From managing leads to automating finances,
              we empower every department with data-driven workflows.
            </p>
            <ul className="space-y-4 text-gray-600 text-base">
              <li className="flex items-start gap-3"><span className="text-[#070B2A] font-bold">•</span> Lead tracking & sales automation</li>
              <li className="flex items-start gap-3"><span className="text-[#070B2A] font-bold">•</span> All-in-one: Inventory, HR, Finance</li>
              <li className="flex items-start gap-3"><span className="text-[#070B2A] font-bold">•</span> Role-based dashboards</li>
              <li className="flex items-start gap-3"><span className="text-[#070B2A] font-bold">•</span> Integrated workflows</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="bg-gradient-to-br from-[#F9FAFB] to-[#E2E8F0] py-16 sm:py-24 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#070B2A] mb-4">Core Functionalities</h2>
          <p className="text-gray-600 mb-10">Explore essential modules tailored for business automation and growth.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 text-left">
            {[
              { title: 'Sales & Lead Management', desc: 'Track leads, nurture prospects, and optimize your pipeline.', icon: '/icons/sales.svg' },
              { title: 'Customer Support', desc: 'Case tracking, SLA management, and multi-channel communication.', icon: '/icons/support.svg' },
              { title: 'Finance & Billing', desc: 'Automated billing, invoicing, and financial analytics.', icon: '/icons/finance.svg' },
              { title: 'Inventory & SCM', desc: 'Live stock tracking, purchase orders, and supplier integration.', icon: '/icons/inventory.svg' },
              { title: 'HR & Payroll', desc: 'Employee records, payroll automation, and performance tracking.', icon: '/icons/hr.svg' },
              { title: 'Reports & Insights', desc: 'Advanced analytics and customizable reports for smarter decisions.', icon: '/icons/reports.svg' }
            ].map((mod, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                <Image src={mod.icon} alt={mod.title} width={40} height={40} className="mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-[#070B2A] mb-2">{mod.title}</h3>
                <p className="text-gray-600 text-sm">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="bg-[#070B2A] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Choose Our CRM & ERP?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 text-left">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Complete Customization</h3>
              <p className="text-white/80 mb-4">Every module and dashboard can be tailored to your team’s exact workflow and needs.</p>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Cloud-Native</h3>
              <p className="text-white/80 mb-4">Access your platform anywhere, anytime with enterprise-grade cloud hosting.</p>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Seamless Integration</h3>
              <p className="text-white/80">Connect with third-party tools including WhatsApp, Email, Payment Gateways, and more.</p>
            </div>
            <Image src="/erp-benefits.jpg" alt="ERP Benefits" width={600} height={400} className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#070B2A] mb-6">Our CRM & ERP Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-10 text-left">
            <div className="bg-gradient-to-tl from-[#E6F6FF] to-[#F2FAFD] p-6 sm:p-8 rounded-xl shadow">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#070B2A] mb-2">Nexus India App</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                A powerful CRM tailored for Indian SMBs. Features smart lead capture, multilingual support, and GST-ready invoicing.
              </p>
              <ul className="list-disc pl-5 mt-4 text-gray-600 text-sm space-y-1">
                <li>WhatsApp & email integrations</li>
                <li>Auto follow-ups & reminders</li>
                <li>Deadline-based task management</li>
              </ul>
            </div>
            <div className="bg-gradient-to-tl from-[#E6F6FF] to-[#F2FAFD] p-6 sm:p-8 rounded-xl shadow">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#070B2A] mb-2">Nexus Online Management</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                An ERP suite covering accounting, logistics, HR, and operations—secure and AI-ready.
              </p>
              <ul className="list-disc pl-5 mt-4 text-gray-600 text-sm space-y-1">
                <li>Role-based access control</li>
                <li>Smart inventory & expenses</li>
                <li>Attendance & payroll tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-20 bg-[#070B2A] text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to streamline your business?</h2>
        <p className="text-white/80 max-w-xl mx-auto mb-6">
          Contact us today to implement a CRM & ERP solution that fits your needs and scales with your goals.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 sm:px-8 sm:py-3 bg-white text-[#070B2A] font-semibold rounded hover:bg-gray-100 transition"
        >
          Get in Touch
        </a>
      </section>

      {/* Industry Use Cases */}
      <section className="bg-gray-100 py-16 sm:py-24 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#070B2A] mb-6">Industry Use Cases</h2>
          <p className="text-gray-600 mb-10">CRM & ERP that adapts to different industries effortlessly.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 text-left">
            {['Retail & E-commerce', 'Healthcare', 'Manufacturing', 'Education', 'Real Estate', 'Logistics'].map((sector, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
                <h3 className="text-lg sm:text-xl font-semibold text-[#070B2A] mb-2">{sector}</h3>
                <p className="text-gray-600 text-sm">Custom workflows, integrations, and reports for the {sector.toLowerCase()} sector.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Contact */}
      <ContactUsSection />
    </>
  );
}
