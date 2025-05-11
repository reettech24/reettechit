"use client";

import React from "react";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ContactUsSection from "@/components/sections/ContactUsSection";

export default function DigitalMarketingPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-32 text-white"
        style={{ backgroundImage: "url('/images/digital-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Grow Smarter with Digital Marketing
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            We help you attract, engage & convert the right audience online.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/images/marketing-team.jpg"
            alt="Marketing Team"
            className="rounded-2xl shadow-xl"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">
              End-to-End Digital Growth Partner
            </h2>
            <p className="text-gray-700 mb-4">
              We create growth strategies that combine creativity with
              data-driven insights to get real, measurable results across
              channels.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>SEO, Ads, Email, Social, Influencer & Affiliate Marketing</li>
              <li>Dedicated experts, weekly reports & A/B testing</li>
              <li>360° support for startups, D2C brands, and enterprises</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "SEO",
                desc: "Get ranked & found on Google.",
                img: "/images/services/seo.png",
              },
              {
                title: "PPC Advertising",
                desc: "Laser-targeted Google & Meta ads.",
                img: "/images/services/ppc.png",
              },
              {
                title: "Social Media Marketing",
                desc: "Build community & awareness.",
                img: "/images/services/social-media.png",
              },
              {
                title: "Email Marketing",
                desc: "Convert leads with automation.",
                img: "/images/services/email.png",
              },
              {
                title: "Content Marketing",
                desc: "Educate, inform, and engage.",
                img: "/images/services/content.png",
              },
              {
                title: "Analytics & CRO",
                desc: "Optimize conversions continuously.",
                img: "/images/services/analytics.png",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-16 h-16 mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">
            Our Proven Marketing Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-left">
            {[
              {
                title: "1. Research & Audit",
                desc: "We analyze your market, audience, and competitors.",
              },
              {
                title: "2. Strategy Design",
                desc: "We define a tailored multi-channel roadmap.",
              },
              {
                title: "3. Execution",
                desc: "Our team runs and optimizes campaigns.",
              },
              {
                title: "4. Report & Scale",
                desc: "You get transparent performance updates with scale-up plans.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Industries We Serve</h2>
          <div className="flex flex-wrap justify-center gap-6 text-white">
            {[
              "E-commerce",
              "Real Estate",
              "Healthcare",
              "Education",
              "Fintech",
              "Startups",
            ].map((sector) => (
              <span
                key={sector}
                className="bg-blue-600 px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Our Digital Marketing Services?
            </h2>
            <ul className="text-gray-700 space-y-3 list-disc list-inside">
              <li>Proven Track Record with 200+ clients</li>
              <li>Certified Google & Meta Experts</li>
              <li>ROI-focused strategies & budget optimization</li>
              <li>Fast support with a dedicated account manager</li>
              <li>100% transparency & ethical practices</li>
            </ul>
          </div>
          <img
            src="/images/why-choose-us.jpg"
            alt="Why Choose Us"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/images/case-study.jpg"
            alt="Results"
            className="rounded-2xl shadow-xl"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Case Study: 10X ROAS for D2C Brand
            </h2>
            <p className="text-gray-700 mb-4">
              We scaled an apparel brand from ₹1.5L to ₹10L+ monthly revenue
              using Meta ads, influencer marketing, and landing page
              optimization.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>+210% Organic Growth</li>
              <li>35% Reduction in CPA</li>
              <li>Avg. ROAS 10x in 3 months</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* FAQs */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">FAQs</h2>
          <div className="space-y-6">
            {[
              {
                q: "How do you measure campaign success?",
                a: "We track KPIs like traffic, leads, ROAS, CPA, conversions, and user engagement through advanced analytics tools.",
              },
              {
                q: "Is there a minimum budget to start?",
                a: "Our solutions scale with you. We create budget-friendly strategies based on your goals — starting from as low as ₹15K/month.",
              },
              {
                q: "Will I get reports?",
                a: "Yes. You’ll receive detailed monthly reports plus weekly check-ins with key insights and next steps.",
              },
            ].map((faq, i) => (
              <div key={i}>
                <h3 className="font-semibold text-lg">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-20 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-white/80 mb-8">
            Let’s design a digital strategy that delivers measurable results for
            your brand.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-900 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Book a Free Strategy Call
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact">
        <ContactUsSection />
      </div>
    </>
  );
}
