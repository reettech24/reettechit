"use client"

import React from 'react';
import ContactUsSection from '@/components/sections/ContactUsSection';
import TestimonialSection from '@/components/sections/TestimonialSection';

export default function page() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-[#0D1B2A] text-white py-48 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/bfsi-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">Transforming BFSI Through Technology</h1>
          <p className="text-white/70 max-w-3xl mx-auto">
            Delivering secure, customer-centric, and scalable digital solutions for banks, fintech, and insurance providers.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-6 bg-white text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Modern Solutions for a Trusted Industry</h2>
        <p className="text-gray-700">
          The BFSI sector is rapidly evolving with the advent of fintech innovations, blockchain, AI-powered customer support,
          and mobile-first services. To remain competitive and compliant, organizations need seamless, secure, and scalable
          digital strategies that put the customer first.
        </p>
      </section>

      {/* Feature Grid */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { title: 'Omnichannel Experience', desc: 'Unified experiences across mobile, web & branches.' },
            { title: 'Secure Architecture', desc: 'End-to-end encryption & compliance-ready systems.' },
            { title: 'AI-Driven Analytics', desc: 'Detect fraud & personalize banking with AI/ML.' },
            { title: 'Digital KYC', desc: 'Frictionless onboarding with e-KYC and biometric validation.' },
            { title: 'Cloud-Native Infra', desc: 'Scale with confidence using cloud-powered systems.' },
            { title: 'Regulatory Readiness', desc: 'Stay ahead with compliance automation tools.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Digital Transformation Timeline */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-10">Your Digital Transformation Journey</h3>
          <ol className="relative border-l border-gray-300 space-y-10 text-left">
            {[
              'Strategy Consultation & Compliance Audit',
              'Designing UX-First Banking Interfaces',
              'Building Scalable & Secure Platforms',
              'Data Integration & Legacy System Modernization',
              'Deployment, Monitoring & Optimization',
            ].map((step, i) => (
              <li key={i} className="ml-4">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-1.5" />
                <p className="text-lg font-medium text-blue-900">{`Step ${i + 1}: ${step}`}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h3 className="text-xl font-bold mb-8">Trusted by Institutions & Fintech Innovators</h3>
        <div className="flex justify-center items-center gap-10 flex-wrap max-w-5xl mx-auto">
          {['visa', 'mastercard', 'paypal', 'stripe', 'revolut'].map((logo, i) => (
            <img
              key={i}
              src={`/logos/${logo}.png`}
              alt={logo}
              className="h-10 grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </section>

      {/* Security & Certification */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Built with Compliance and Security at the Core</h3>
          <p className="text-gray-600 mb-6">
            Our platforms adhere to the most rigorous security protocols in the BFSI industry, including:
          </p>
          <ul className="grid md:grid-cols-2 gap-6 text-left text-gray-700">
            <li>✔ ISO 27001 & PCI-DSS Compliant</li>
            <li>✔ GDPR & RBI Guidelines Adherence</li>
            <li>✔ Secure API Gateways & Role-Based Access</li>
            <li>✔ Threat Monitoring & Incident Response Systems</li>
          </ul>
        </div>
      </section>

      {/* Use Case Scenarios */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-10">Use Cases in BFSI Digital Transformation</h3>
          <div className="space-y-8">
            {[
              {
                heading: 'Fintech Mobile Apps',
                desc: 'Custom mobile banking and insurance apps with biometric login, e-wallets, and AI chatbots.',
              },
              {
                heading: 'Blockchain in Finance',
                desc: 'Transparent and tamper-proof transactions for lending, claims, and remittances.',
              },
              {
                heading: 'Customer Identity Management',
                desc: 'Integrated identity systems for customer profiling, fraud prevention, and compliance.',
              },
            ].map((useCase, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <h4 className="font-semibold text-xl mb-2">{useCase.heading}</h4>
                <p className="text-gray-700">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Insights Section */}
      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-10">BFSI Insights & Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Top 5 Digital Trends in BFSI 2025',
                desc: 'Learn how banks and insurers are innovating faster than ever.',
              },
              {
                title: 'Guide to Cloud Compliance for Fintech',
                desc: 'A practical checklist to migrate securely and stay compliant.',
              },
              {
                title: 'AI in Fraud Detection: Case Studies',
                desc: 'How AI is redefining fraud mitigation in the financial world.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                <a href="#" className="text-blue-600 text-sm font-medium mt-3 inline-block">
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white text-center py-20 px-6">
        <h3 className="text-3xl font-bold mb-4">Ready to Reinvent Finance for the Digital Age?</h3>
        <p className="text-white/80 max-w-2xl mx-auto mb-6">
          Let us help you build secure, customer-centric, and future-proof digital platforms.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
        >
          Get a Consultation
        </a>
      </section>

    
      <ContactUsSection />
    </>
  );
}
