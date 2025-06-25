"use client";

import React, { useRef, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function ContactUsSection() {
  const t = useTranslations("contact");
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    firm: "",
    email: "",
    phone: "",
    subject: "Web Development",
    custom_query: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

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

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.firm.trim()) newErrors.firm = "Firm name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email address.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = "Invalid phone number.";
    if (!formData.subject) newErrors.subject = "Please select a subject.";
    if (formData.subject === "Other" && !formData.custom_query.trim())
      newErrors.custom_query = "Please specify your custom query.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    toast.loading("Sending...", { id: "contact-toast" });

    emailjs
      .send(
        "service_tq10qxx",
        "template_vz09a9m",
        { ...formData },
        "dS08Hy3gaFiNSD_du"
      )
      .then(() => {
        toast.success("Message sent successfully! ✅", { id: "contact-toast" });
        setFormData({
          name: "",
          firm: "",
          email: "",
          phone: "",
          subject: "Web Development",
          custom_query: "",
          message: "",
        });
        setErrors({});
      })
      .catch(() => {
        toast.error("Failed to send message ❌", { id: "contact-toast" });
      });
  };

  const inputBase =
    "w-full px-4 py-3 border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#2244f8]";
  const errorStyle = "border-red-500";

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
              className={`${inputBase} ${errors.name ? errorStyle : ""}`}
            />
            {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

            <input
              type="text"
              name="firm"
              value={formData.firm}
              onChange={handleChange}
              placeholder={t("firm_name") || "Firm / Company Name"}
              className={`${inputBase} ${errors.firm ? errorStyle : ""}`}
            />
            {errors.firm && <p className="text-red-400 text-sm">{errors.firm}</p>}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("email_address")}
              className={`${inputBase} ${errors.email ? errorStyle : ""}`}
            />
            {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("phone_number") || "Phone Number"}
              className={`${inputBase} ${errors.phone ? errorStyle : ""}`}
            />
            {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}

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
              <>
                <textarea
                  name="custom_query"
                  value={formData.custom_query}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Please specify your query"
                  className={`${inputBase} ${errors.custom_query ? errorStyle : ""}`}
                />
                {errors.custom_query && (
                  <p className="text-red-400 text-sm">{errors.custom_query}</p>
                )}
              </>
            )}

            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("message")}
              className={`${inputBase} ${errors.message ? errorStyle : ""}`}
            />
            {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}

            <button
              type="submit"
              className="bg-yellow-400 text-[#070B2A] px-6 py-3 hover:bg-yellow-500 transition"
            >
              {t("send_message")}
            </button>
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
