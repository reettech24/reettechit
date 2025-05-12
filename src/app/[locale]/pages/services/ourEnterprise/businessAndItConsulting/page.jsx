import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col items-center w-full text-gray-800">
      <div
        className="w-full bg-black text-white text-center py-40 px-6 bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?technology,business,innovation')",
        }}
      >
        <div className="">
          <div className="text-4xl md:text-5xl font-extrabold leading-tight">
            Digital Solutions for Ambitious Organizations
          </div>
          <div className="text-lg md:text-xl mt-4 opacity-90">
            Scalable IT & Business Consulting for Startups, Enterprises, and Government
          </div>
          <button className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-2xl font-medium transition duration-300 shadow-md">
            Let's Talk
          </button>
        </div>
      </div>

      <div className="py-20 px-6 w-full max-w-6xl">
        <div className="text-3xl font-bold text-center mb-12">Our Core Services</div>
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
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              <img
                src={`https://source.unsplash.com/80x80/?${service.img}`}
                alt={`${service.title} icon`}
                className="mx-auto mb-4 rounded-full"
              />
              <div className="text-xl font-semibold">{service.title}</div>
              <div className="text-sm mt-2 text-gray-600">{service.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-20 w-full bg-gray-100">
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
                <img src={client.icon} alt={`${client.name} icon`} className="w-16 h-16 mb-2" />
                <div className="font-medium text-lg">{client.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-6 w-full max-w-4xl">
        <div className="text-3xl font-bold text-center mb-10">Consulting Approach</div>
        <div className="grid gap-6 text-lg text-gray-700">
          <div><strong>1. Discover:</strong> We assess current systems, pain points, and growth goals.</div>
          <div><strong>2. Strategize:</strong> We develop a plan using frameworks like ITIL, TOGAF, or Agile.</div>
          <div><strong>3. Execute:</strong> We implement scalable solutions with minimal disruption.</div>
          <div><strong>4. Optimize:</strong> We track KPIs, iterate, and ensure continuous improvement.</div>
        </div>
      </div>

      <div className="bg-white py-20 px-6 w-full max-w-5xl">
        <div className="text-3xl font-bold text-center mb-10">Tech Stack & Frameworks</div>
        <div className="flex justify-center flex-wrap gap-10">
          {["888700", "888701", "888702", "888703"].map((code, idx) => (
            <img
              key={idx}
              src={`https://cdn-icons-png.flaticon.com/512/888/${code}.png`}
              alt="Tool icon"
              className="w-14 h-14"
            />
          ))}
        </div>
      </div>

      <div className="py-20 px-6 w-full max-w-5xl">
        <div className="text-3xl font-bold text-center mb-10">Client Impact</div>
        <div className="space-y-8">
          {[
            {
              title: "Retail Tech Startup",
              result: "Launched MVP e-commerce platform with 60% increase in online revenue.",
              impact: "Sales up 60%, customer acquisition cost down 30%",
            },
            {
              title: "Manufacturing Enterprise",
              result: "Cloud migration led to 40% drop in infrastructure costs.",
              impact: "99.9% uptime, 2x faster deployment cycles",
            },
            {
              title: "State Agency",
              result: "Implemented NIST-compliant cybersecurity framework.",
              impact: "0 breaches in 24 months, full audit compliance",
            },
          ].map((caseStudy, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md">
              <div className="text-xl font-semibold">{caseStudy.title}</div>
              <div className="text-gray-700 mt-2">{caseStudy.result}</div>
              <div className="text-sm text-gray-500 mt-1">{caseStudy.impact}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-20 px-6 w-full max-w-4xl">
        <div className="text-3xl font-bold text-center mb-10">Why Choose Us</div>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            ✅ <strong>Proven Success:</strong> Over 100 completed projects with measurable results.
          </li>
          <li>
            ✅ <strong>Tailored Consulting:</strong> Customized strategies aligned with your vision.
          </li>
          <li>
            ✅ <strong>Dedicated Experts:</strong> Cross-functional teams that partner with you end-to-end.
          </li>
          <li>
            ✅ <strong>Multi-Sector Knowledge:</strong> Deep experience across tech, enterprise, and public sectors.
          </li>
        </ul>
      </div>

      <TestimonialSection />
      <ContactUsSection />
    </div>
  );
}
