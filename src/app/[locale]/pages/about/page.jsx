'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import ProjectShowcase from '@/components/sections/ProjectsSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import AboutSection from '@/components/sections/AboutSection';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="bg-[#f0f0f0] text-gray-800">
      {/* Top Banner */}
      <section
        className="bg-[#070B2A] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/breadcrumb.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">About Us</h1>
          <p className="text-sm text-white/70">Home / Who We Are</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-3">Mission</h3>
            <p className="text-gray-700 text-sm">
              To empower small and medium-sized enterprises (SMEs) across India with innovative, affordable digital solutions that foster growth, efficiency, and impact.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Vision</h3>
            <p className="text-gray-700 text-sm">
              To become the most trusted digital transformation partner for SMEs by simplifying technology and amplifying opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-10">Our Core Values</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: '💡', title: 'Innovation', desc: 'We build for the future with creative and scalable solutions.' },
            { icon: '🤝', title: 'Integrity', desc: 'We operate transparently and ethically in everything we do.' },
            { icon: '🌐', title: 'Accessibility', desc: 'We make tech accessible to businesses of all sizes.' },
            { icon: '🚀', title: 'Growth', desc: 'We help clients grow—and grow alongside them.' },
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="font-semibold text-lg">{item.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey / Timeline */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-2xl font-bold mb-10">Our Journey</h2>
        <div className="space-y-6 max-w-4xl mx-auto text-left text-sm text-gray-700">
          <div>
            <strong>2019:</strong> Founded with a mission to serve India’s SMEs.
          </div>
          <div>
            <strong>2020:</strong> Launched first version of Nexus platform with 50+ businesses onboarded.
          </div>
          <div>
            <strong>2022:</strong> Expanded features with CRM, payments, and content management.
          </div>
          <div>
            <strong>2024:</strong> Serving 10,000+ SMEs with remote teams and regional presence.
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-10">Meet Our Leadership</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { name: 'Ravi Kapoor', role: 'Founder & CEO', image: '/team/ravi.jpg' },
            { name: 'Anita Verma', role: 'Chief Product Officer', image: '/team/anita.jpg' },
            { name: 'Rohit Sinha', role: 'Head of Engineering', image: '/team/rohit.jpg' },
          ].map((person, idx) => (
            <div key={idx} className="text-center">
              <img src={person.image} alt={person.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h4 className="font-semibold">{person.name}</h4>
              <p className="text-sm text-gray-600">{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-2xl font-bold mb-8">What It's Like Working Here</h2>
        <p className="max-w-3xl mx-auto text-sm text-gray-600 mb-10">
          At Nexus India, we nurture a culture of collaboration, inclusion, and continuous learning. Whether remote or onsite, every team member is encouraged to bring ideas to the table and make meaningful contributions.
        </p>
        <img src="/images/culture.jpg" alt="Company Culture" className="rounded-xl mx-auto shadow-lg max-w-4xl" />
      </section>

      {/* Project Showcase */}
      <ProjectShowcase />

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA */}
      <section className="bg-blue-700 text-white py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Work with Us?</h3>
        <p className="mb-6 text-white/90 max-w-xl mx-auto">
          Whether you’re a business looking to scale or a professional looking to contribute—we’d love to connect.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
