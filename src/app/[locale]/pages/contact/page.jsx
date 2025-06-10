"use client";
export const dynamic = "force-dynamic";

import React, { useRef, useState } from "react";
import { Mail, Phone, MapPin, Play } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const t = useTranslations("contactus");
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    firm: "",
    email: "",
    phone: "", // ✅ Added phone here
    subject: "Web Development",
    custom_query: "",
    message: "",
  });

  const serviceOptions = [
    "Web Development",
    "Mobile App Development",
    "AR/VR Solutions",
    "AI/ML Services",
    "Digital Marketing",
    "Project Management",
    "Brand Consulting",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_mbu89yq",
        "template_uyjes9m",
        {
          ...formData,
        },
        "BCW7qT_gn3b4_hP4j"
      )
      .then(
        () => {
          setStatus("Message sent successfully! ✅");
          setFormData({
            name: "",
            firm: "",
            email: "",
            phone: "", // ✅ Reset phone too
            subject: "Web Development",
            custom_query: "",
            message: "",
          });
        },
        () => {
          setStatus("Failed to send message ❌");
        }
      );
  };

  const contactItems = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: t("featureItems.0.title"),
      desc: t("featureItems.0.desc"),
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: t("featureItems.1.title"),
      desc: t("featureItems.1.desc"),
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: t("featureItems.2.title"),
      desc: t("featureItems.2.desc"),
    },
  ];

  const formPlaceholders = [
    t("journeySteps.0"),
    t("journeySteps.1"),
    t("journeySteps.2"),
    t("journeySteps.3"),
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-[#070B2A] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/breadcrumb.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#070B2A] opacity-70" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{t("heroTitle")}</h1>
          <p className="text-sm text-white/70">{t("heroDesc")}</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 lg:px-20 bg-[#070B2A] overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <div className="bg-[#2244f8] text-white p-8 rounded-lg space-y-6">
              {contactItems.map((item, idx) => (
                <div key={idx}>
                  <h4 className="flex items-center gap-2 text-lg font-semibold">
                    {item.icon} {item.title}
                  </h4>
                  <p className="ml-7 mt-1 font-medium">{item.desc}</p>
                  {idx < contactItems.length - 1 && (
                    <hr className="border-white/20 mt-4" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 relative w-full h-64 rounded-md overflow-hidden shadow-md">
              <Image
                src="/Services.jpeg"
                alt="Contact preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
                <button className="bg-white text-[#2244f8] rounded-full p-3 shadow-lg">
                  <Play className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">{t("journeyTitle")}</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={formPlaceholders[0]}
                className="w-full px-4 py-3 placeholder-white/40 border text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2244f8]"
              />
              <input
                type="text"
                name="firm"
                value={formData.firm}
                onChange={handleChange}
                placeholder="Firm / Company Name"
                className="w-full px-4 py-3 placeholder-white/40 border text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2244f8]"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={formPlaceholders[1]}
                className="w-full px-4 py-3 placeholder-white/40 border text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2244f8]"
              />
              {/* ✅ Phone Field */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 placeholder-white/40 border text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2244f8]"
              />
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 text-white/70 bg-[#070B2A] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2244f8]"
              >
                {serviceOptions.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {formData.subject === "Other" && (
                <textarea
                  name="custom_query"
                  value={formData.custom_query}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Please specify your query"
                  className="w-full px-4 py-3 placeholder-white/40 border text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2244f8]"
                />
              )}
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={formPlaceholders[3]}
                className="w-full px-4 py-3 placeholder-white/40 border text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2244f8]"
              />
              <button
                type="submit"
                className="bg-[#2244f8] text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                {t("ctaBtn")}
              </button>
              {status && <p className="text-white mt-2">{status}</p>}
            </form>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10264.101790527155!2d73.8422636895683!3d18.45182023491473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eacd9ab69bf7%3A0x53519bbf068e9be9!2sRenaissance%20-%20Project%20by%20Krishna%20Developers!5e1!3m2!1sen!2sus!4v1748290274174!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
