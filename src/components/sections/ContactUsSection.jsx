"use client";

import React, { useRef, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";

export default function ContactUsSection() {
  const t = useTranslations("contact");
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    firm: "",
    email: "",
    phone: "",
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
        { ...formData },
        "BCW7qT_gn3b4_hP4j"
      )
      .then(
        () => {
          setStatus("Message sent successfully! ✅");
          setFormData({
            name: "",
            firm: "",
            email: "",
            phone: "",
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

  return (
    <section className="py-20 px-6 lg:px-20 bg-[#070B2A] text-white">
      <div className="grid md:grid-cols-2 gap-12 items-start mb-5 lg:mb-3">
        {/* Left Side: Video */}
        <div>
          <div className="relative w-full h-fit overflow-hidden shadow-md">
            <video autoPlay loop muted playsInline className="object-cover">
              <source src="/contactusvideo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="relative self-center">
          <div className="absolute -top-40 right-0">
            <img src="/footer-shape-1.png" alt="Shape" />
          </div>
          <h3 className="text-3xl font-bold text-white uppercase mb-6">
            {t("get_in_touch")}
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 text-white">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("full_name")}
              className="w-full px-4 py-3 border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#2244f8]"
            />
            <input
              type="text"
              name="firm"
              value={formData.firm}
              onChange={handleChange}
              placeholder={t("firm_name") || "Firm / Company Name"}
              className="w-full px-4 py-3 border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#2244f8]"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("email_address")}
              className="w-full px-4 py-3 border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#2244f8]"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("phone_number") || "Phone Number"}
              className="w-full px-4 py-3 border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#2244f8]"
            />
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 bg-[#070B2A] text-white/70 focus:outline-none focus:ring-2 focus:ring-[#2244f8]"
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
                className="w-full px-4 py-3 border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#2244f8]"
              />
            )}

            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("message")}
              className="w-full px-4 py-3 border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#2244f8]"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-[#070B2A] px-6 py-3 hover:bg-yellow-500 transition"
            >
              {t("send_message")}
            </button>
            {status && <p className="text-white mt-2">{status}</p>}
          </form>
        </div>
      </div>

      {/* Contact Info Bar */}
      <div className="grid lg:grid-cols-3 bg-[#2244f8] text-white p-8 space-y-6 lg:space-y-0">
        <div>
          <h4 className="flex items-center gap-2 text-lg font-semibold">
            <Phone className="w-5 h-5" /> {t("call_us")}
          </h4>
          <p className="ml-7 text-xl font-bold mt-1">+91 797-290-5758</p>
        </div>
        <div>
          <h4 className="flex items-center gap-2 text-lg font-semibold">
            <Mail className="w-5 h-5" /> {t("make_quote")}
          </h4>
          <p className="ml-7 mt-1 font-medium">sales@reettechit.com</p>
          <p className="ml-7 mt-1 font-medium">reettech24@gmail.com</p>
        </div>
        <div>
          <h4 className="flex items-center gap-2 text-lg font-semibold">
            <MapPin className="w-5 h-5" /> {t("location")}
          </h4>
          <p className="ml-7 mt-1 font-medium">
            Dattanagar Road, Ambegaon Katraj Pune, Maharashtra 411046
          </p>
        </div>
      </div>
    </section>
  );
}
