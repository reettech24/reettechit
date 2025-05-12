"use client"

import ContactUsSection from '@/components/sections/ContactUsSection'
import TestimonialSection from '@/components/sections/TestimonialSection'
import React from 'react'

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-[#0C1E3C] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/breadcrumb.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0C1E3C] opacity-80" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Student Courses</h1>
          <p className="text-white/70">Career / Courses for Students</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Empowering Students for the Digital Future</h2>
        <p className="text-gray-700">
          Our curated courses bridge academic theory with industry-ready skills. Designed by professionals, these hands-on
          programs prepare you for the tech world — whether you're launching a startup or joining a global company.
        </p>
      </section>

      {/* Courses Grid */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">Available Courses</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Full-Stack Web Development',
                desc: 'Build complete websites and apps using HTML, CSS, JavaScript, React, and Node.js.',
                duration: '12 weeks',
              },
              {
                title: 'Cloud Computing with AWS & Azure',
                desc: 'Learn the essentials of deploying, scaling, and managing cloud infrastructure.',
                duration: '8 weeks',
              },
              {
                title: 'Data Science & Machine Learning',
                desc: 'Analyze data and create predictive models using Python, pandas, and scikit-learn.',
                duration: '10 weeks',
              },
              {
                title: 'Cybersecurity Fundamentals',
                desc: 'Understand threats, encryption, and defense strategies in modern IT environments.',
                duration: '6 weeks',
              },
              {
                title: 'Agile Project Management',
                desc: 'Master tools like Jira and methodologies like Scrum to manage software teams.',
                duration: '4 weeks',
              },
              {
                title: 'UI/UX Design',
                desc: 'Design user-centric interfaces using Figma, wireframes, and design systems.',
                duration: '6 weeks',
              },
            ].map((course, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition text-center"
              >
                <h4 className="text-xl font-semibold mb-2">{course.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{course.desc}</p>
                <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                  Duration: {course.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold">Why Learn With Us?</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mt-2">
            Our student-first philosophy combines mentorship, industry projects, and career guidance.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <img src="/icons/mentorship.png" className="w-12 mx-auto mb-3" alt="Mentorship" />
            <h4 className="font-semibold">1-on-1 Mentorship</h4>
            <p className="text-sm text-gray-600 mt-2">Get guidance from experts working at top tech firms.</p>
          </div>
          <div>
            <img src="/icons/certificate.png" className="w-12 mx-auto mb-3" alt="Certification" />
            <h4 className="font-semibold">Industry Certification</h4>
            <p className="text-sm text-gray-600 mt-2">Earn certificates that boost your resume and confidence.</p>
          </div>
          <div>
            <img src="/icons/project.png" className="w-12 mx-auto mb-3" alt="Projects" />
            <h4 className="font-semibold">Real Projects</h4>
            <p className="text-sm text-gray-600 mt-2">Work on real-world use cases and build a portfolio.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center rounded-t-3xl">
        <h3 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h3>
        <p className="mb-6 text-white/90">
          Apply today and join hundreds of students building successful tech careers with us.
        </p>
        <a
          href="/apply"
          className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition"
        >
          Apply Now
        </a>
      </section>

      <ContactUsSection />
    </>
  )
}
