import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import React from "react";

export default function Page() {
  return (
    <>
      <section
        className="bg-[#070B2A] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/banners/careers.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70" />
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-6">
            Digital Solutions for Ambitious Organizations
          </h1>
          <p className="text-2xl max-w-3xl mx-auto">
            Scalable IT & Business Consulting for Startups, Enterprises, and
            Government
          </p>
        </div>
      </section>
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 leading-relaxed">
              In order to help businesses and beyond improve productivity,
              increase profitability, and maintain their competitiveness in a
              market that is changing quickly, Reet Tech offers professional
              business and IT consulting services. To provide actual commercial
              outcomes, we integrate technical know-how with strategic insight.
            </p>
          </div>
          <img
            src="/aboutsectionintrosecond.jpeg"
            alt="Business foundation"
            className=" shadow"
          />
        </div>
      </section>

      <section className="py-20 px-6 w-full bg-[#070B2A] text-white">
        <div className=" max-w-6xl mx-auto text-center">
          <div className="text-3xl font-bold text-center mb-12">
            Our Core Services
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Transformation",
                desc: "Streamline operations using AI, automation, and cloud-native tools.",
                img: "technology",
              },
              {
                title: "Strategic IT Consulting",
                desc: "Build tailored IT roadmaps to align tech with business growth.",
                img: "strategy",
              },
              {
                title: "Cloud Migration & Infra",
                desc: "Modernize your stack with scalable cloud solutions (AWS, Azure, GCP).",
                img: "cloud",
              },
              {
                title: "Cybersecurity & Compliance",
                desc: "Protect systems, manage risks, and stay ahead of regulations.",
                img: "security",
              },
              {
                title: "Software Integration",
                desc: "Evaluate, implement, and integrate best-fit tools for productivity.",
                img: "integration",
              },
              {
                title: "Data & Intelligence",
                desc: "Transform raw data into insights with real-time analytics and dashboards.",
                img: "analytics",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-800  p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-xl font-semibold text-white">
                  {service.title}
                </div>
                <div className="text-sm mt-2 text-white/80">{service.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 w-full bg-[#070B2A] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="text-3xl font-bold mb-12">Who We Serve</div>
          <div className="flex justify-center flex-wrap gap-12">
            {[
              {
                name: "Startups",
                icon: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
              },
              {
                name: "Enterprises",
                icon: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
              },
              {
                name: "Government",
                icon: "https://cdn-icons-png.flaticon.com/512/1702/1702876.png",
              },
            ].map((client, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={client.icon}
                  alt={`${client.name} icon`}
                  className="w-16 h-16 mb-2"
                />
                <div className="font-medium text-lg">{client.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/about2.jpeg" // Replace with your actual image path
              alt="Consulting Approach"
              className=" shadow-lg"
            />
          </div>

          {/* Right Text Content */}
          <div className="w-full md:w-1/2">
            <div className="text-3xl font-bold mb-6 text-center md:text-left">
              Consulting Approach
            </div>
            <div className="grid gap-6 text-lg text-gray-700">
              <div>
                <strong>1. Discover:</strong> We assess current systems, pain
                points, and growth goals.
              </div>
              <div>
                <strong>2. Strategize:</strong> We develop a plan using
                frameworks like ITIL, TOGAF, or Agile.
              </div>
              <div>
                <strong>3. Execute:</strong> We implement scalable solutions
                with minimal disruption.
              </div>
              <div>
                <strong>4. Optimize:</strong> We track KPIs, iterate, and ensure
                continuous improvement.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-20 px-6 w-full bg-[#070B2A] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-3xl font-bold text-center mb-10">
            Why Choose Us
          </div>
          <ul className="space-y-4 text-lg text-white/80">
            <li>
              ✅ <strong>Proven Success:</strong> Over 100 completed projects
              with measurable results.
            </li>
            <li>
              ✅ <strong>Tailored Consulting:</strong> Customized strategies
              aligned with your vision.
            </li>
            <li>
              ✅ <strong>Dedicated Experts:</strong> Cross-functional teams that
              partner with you end-to-end.
            </li>
            <li>
              ✅ <strong>Multi-Sector Knowledge:</strong> Deep experience across
              tech, enterprise, and public sectors.
            </li>
          </ul>
        </div>
      </section>

      <TestimonialSection />
      <ContactUsSection />
    </>
  );
}
