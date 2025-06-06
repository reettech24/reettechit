import Image from "next/image";
import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import React from "react";
import ProjectShowcase from "@/components/sections/ProjectsSection";

export default function Page() {
  return (
    <>
      {/* Hero Section */}

      <section
        className="relative bg-cover bg-center text-white py- sm:py-40 md:py-52"
        style={{ backgroundImage: "url('/banners/mobile.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B2A]/80 to-[#1E1E3F]/80" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            Web & Mobile Application Solutions
          </h1>

          <p className="text-white text-base sm:text-lg leading-relaxed">
            We design and develop responsive, scalable, and secure web and
            mobile applications that empower business growth and innovation.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Image
            src="/photos/crm1.jpg"
            alt="CRM ERP Overview"
            width={600}
            height={400}
            className="w-full"
          />
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#070B2A]">
              At Reet Technologies,
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              we specialize in building high-performance mobile and web
              applications in Pune tailored to your business goals. Whether you
              need a customer-facing mobile app or a secure, data-driven web
              platform, we deliver powerful, feature-rich solutions designed for
              modern users. Our experienced developers help startups, SMEs, and
              enterprises build apps that improve engagement, increase
              efficiency, and support digital transformation. At Reet
              Technologies, we specialize in developing customized CRM and ERP
              solutions that empower businesses to operate efficiently, make
              informed decisions, and stay competitive. Whether you're managing
              customers, inventory, or streamlining operations—our platforms are
              built for your exact needs.
            </p>
            <ul className="space-y-4 text-gray-600 text-base">
              <li>✅ Agile development for fast delivery</li>
              <li>✅ Customized UI/UX design for your audience</li>
              <li>✅ High-security standards & data privacy compliance</li>
              <li>✅ Scalable backend and cloud integration</li>
              <li>✅ Post-launch support, analytics & app optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-[#070B2A] text-white text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
        <div className="grid md:grid-cols-4 gap-6 text-left max-w-6xl mx-auto">
          {[
            [
              "Expert Team",
              "Experienced developers, designers, and project managers.",
            ],
            [
              "Agile Process",
              "Iterative, transparent development with regular feedback loops.",
            ],
            ["Scalable Solutions", "We build apps to grow with your business."],
            [
              "Customer Focused",
              "We prioritize client needs and end-user satisfaction.",
            ],
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="p-6 bg-gray-800 shadow hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2 text-white">{title}</h3>
              <p className="text-sm text-white/60">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Core Services (with icons or images) */}
      <section className=" relative px-6 py-12 bg-[#070B2A] text-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Core Services
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            [
              "Custom Web Development",
              "High-performance web apps built on modern frameworks.",
              "/images/web-dev.svg",
            ],
            [
              "Mobile App Development",
              "Android & iOS apps tailored to your goals.",
              "/images/mobile-dev.svg",
            ],
            [
              "UI/UX Design",
              "Delightful experiences that convert.",
              "/images/uiux.svg",
            ],
            [
              "Backend & API",
              "Secure, scalable backend systems.",
              "/images/backend.svg",
            ],
            [
              "Maintenance & Support",
              "Reliable updates & issue resolution.",
              "/images/support.svg",
            ],
            [
              "Cross-Platform Solutions",
              "React Native, Flutter, PWA expertise.",
              "/images/crossplatform.svg",
            ],
          ].map(([title, desc, img], i) => (
            <div
              key={i}
              className="bg-gray-800 p-6 shadow text-center hover:shadow-lg transition"
            >
              {/* <Image
                src={img}
                alt={title}
                width={64}
                height={64}
                className="mx-auto mb-4"
              /> */}
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-white/60">{desc}</p>
            </div>
          ))}
        </div>

        <div className="absolute -bottom-0 right-0 opacity-10 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="px-6 py-12 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Industries We Serve</h2>
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {[
            "E-commerce",
            "Healthcare",
            "Fintech",
            "Education",
            "Travel & Hospitality",
            "Logistics & Supply Chain",
          ].map((industry) => (
            <div key={industry} className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold">{industry}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-20 bg-[#070B2A] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
          
            <p className="text-base sm:text-lg text-white/70 mb-6">
              Our web app development solutions empower businesses to operate
              smarter and reach users across any device. We build scalable,
              secure, and responsive web applications that are tailored for
              performance, user experience, and business growth.
            </p>
            <ul className="space-y-4 text-white/70   text-base">
              <li>✅ Custom business portals and dashboards</li>
              <li>✅ E-commerce platforms and online booking systems</li>
              <li>✅ Secure user management and login systems</li>
              <li>✅ Cloud-based architecture & database management</li>
              <li>✅ Integration with CRM, ERP, and third-party tools</li>
            </ul>
          </div>
          <Image
            src="/photos/crm1.jpg"
            alt="CRM ERP Overview"
            width={600}
            height={400}
            className="w-full"
          />
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="px-6 py-12 bg-[#070B2A] text-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Technologies We Work With
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {[
            ["Frontend", "React, Angular, Vue, Tailwind CSS"],
            ["Backend", "Node.js, Python, PHP, Laravel"],
            ["Mobile", "Flutter, React Native, Kotlin, Swift"],
            ["Database", "MongoDB, MySQL, PostgreSQL"],
            ["Cloud", "AWS, Azure, Docker, Firebase"],
            ["Others", "Figma, GitHub, Web3, GraphQL"],
          ].map(([title, techs]) => (
            <div key={title} className="bg-gray-800 p-6 shadow">
              <h3 className="font-semibold mb-2 text-white">{title}</h3>
              <p className="text-sm text-white/60">{techs}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process Timeline */}
      <section className="px-6 py-12 bg-[#f0f0f0] text-center">
        <h2 className="text-3xl font-bold mb-10">Our Development Process</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            ["Discovery", "Understanding your needs and goals."],
            ["Design", "UI/UX wireframes & interactive prototypes."],
            ["Development", "Robust coding & rigorous testing."],
            ["Deployment", "Go live with ongoing support."],
          ].map(([step, desc], idx) => (
            <div
              key={idx}
              className="bg-gray-800 hover:bg-gray-700 p-6  shadow"
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {idx + 1}
              </div>
              <h3 className="text-lg font-semibold text-white">{step}</h3>
              <p className="text-sm text-white/60">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Logos */}
      <section className="px-6 py-12 bg-[#070B2A] text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Trusted By</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
          {[1, 2, 3, 4, 5].map((num) => (
            <Image
              key={num}
              src={`/company/client-${num}.png`}
              alt="Client Logo"
              width={120}
              height={60}
            />
          ))}
        </div>
      </section>

      <ProjectShowcase />

      {/* Call to Action */}
      <section className="bg-black text-white px-6 py-16 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Have an Idea? Let’s Build It Together
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-base mb-6">
          Whether you're a startup or enterprise, we bring your digital vision
          to life. Get in touch for a free consultation.
        </p>
        <a
          href="#contact"
          className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Contact Us Now
        </a>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Contact Section */}
      <div id="contact">
        <ContactUsSection />
      </div>
    </>
  );
}
