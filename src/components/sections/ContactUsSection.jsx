"use client";

export const dynamic = "force-dynamic";

import React, { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send,
} from "lucide-react";
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ContactPage() {
  const t = useTranslations("contactus");
  const c = useTranslations("contact");
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

  // ============================================================
  // FORM LOGIC — UNCHANGED
  // ============================================================

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{6,14}$/;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.firm.trim()) {
      newErrors.firm = "Firm name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (
      !phoneRegex.test(formData.phone.replace(/\D/g, ""))
    ) {
      newErrors.phone = "Invalid phone number.";
    }

    if (!formData.subject) {
      newErrors.subject = "Please select a subject.";
    }

    if (
      formData.subject === "Other" &&
      !formData.custom_query.trim()
    ) {
      newErrors.custom_query =
        "Please specify your custom query.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    toast.loading("Sending...", {
      id: "contact-toast",
    });

    emailjs
      .send(
        "service_tq10qxx",
        "template_vz09a9m",
        { ...formData },
        "dS08Hy3gaFiNSD_du"
      )
      .then(() => {
        toast.success("Message sent successfully! ✅", {
          id: "contact-toast",
        });

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
        toast.error("Failed to send message ❌", {
          id: "contact-toast",
        });
      });
  };

  // ============================================================
  // DESIGN TOKENS
  // ============================================================

  const inputBase = `
    h-[52px]
    w-full
    rounded-[12px]
    border
    border-slate-200/90
    bg-white/65
    px-4
    text-[14px]
    text-[#070B2A]
    placeholder:text-slate-400
    outline-none
    backdrop-blur-xl
    transition-all
    duration-300
    focus:border-[#0F62FE]/45
    focus:bg-white/85
    focus:ring-4
    focus:ring-[#0F62FE]/[0.06]
  `;

  const errorStyle =
    "border-red-400 focus:border-red-400 focus:ring-red-400/10";

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#F7F9FC] text-[#070B2A]">
      {/* ========================================================
          PAGE ATMOSPHERE
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main blue atmosphere */}

        <div
          className="
            absolute
            -left-[12%]
            top-[8%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#0F62FE]/[0.035]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            right-[-12%]
            top-[28%]
            h-[620px]
            w-[620px]
            rounded-full
            bg-[#38BDF8]/[0.04]
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            bottom-[-25%]
            left-[35%]
            h-[550px]
            w-[550px]
            rounded-full
            bg-[#1E40AF]/[0.025]
            blur-[140px]
          "
        />

        {/* Very subtle grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.012]
            [background-image:linear-gradient(rgba(15,98,254,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(15,98,254,0.7)_1px,transparent_1px)]
            [background-size:100px_100px]
          "
        />
      </div>

      {/* ========================================================
          CONTENT WRAPPER
      ========================================================= */}

      <div className="relative mx-auto w-full max-w-[1600px]">
        {/* ======================================================
            HERO
        ======================================================= */}

        <section
          className="
            px-6
            pb-12
            pt-20

            sm:px-10
            sm:pb-14
            sm:pt-24

            lg:px-16
            lg:pb-16
            lg:pt-28

            xl:px-20

            2xl:px-24
          "
        >
          <div
            className="
              grid
              gap-8

              lg:grid-cols-[1.35fr_0.65fr]
              lg:items-end
              lg:gap-16

              xl:grid-cols-[1.3fr_0.7fr]
              xl:gap-24
            "
          >
            {/* LEFT */}

            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#0F62FE]" />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-[#0F62FE]
                  "
                >
                  Contact Us
                </span>
              </div>

              <h1
                className="
                  max-w-[920px]
                  text-[42px]
                  font-semibold
                  leading-[0.96]
                  tracking-[-0.055em]
                  text-[#070B2A]

                  sm:text-[54px]

                  lg:text-[68px]

                  xl:text-[76px]

                  2xl:text-[82px]
                "
              >
                Let&apos;s turn your
                <br />
                <span className="text-[#0F62FE]">
                  idea into reality.
                </span>
              </h1>
            </div>

            {/* RIGHT */}

            <div className="max-w-[420px] lg:pb-2">
              <p
                className="
                  text-[14px]
                  leading-6
                  text-slate-500

                  sm:text-[15px]
                  sm:leading-7

                  lg:text-[16px]
                "
              >
                Tell us what you&apos;re building, what you&apos;re
                trying to solve, or where you want to go next.
                We&apos;ll start the conversation from there.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-9 bg-slate-200" />

                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-slate-400
                  "
                >
                  Beyond Tomorrow
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
            MAIN CONTACT AREA
        ======================================================= */}

        <section
          className="
            px-6
            pb-16

            sm:px-10
            sm:pb-20

            lg:px-16
            lg:pb-24

            xl:px-20

            2xl:px-24
          "
        >
          <div
            className="
              grid
              gap-5

              lg:grid-cols-[0.96fr_1.04fr]
              lg:gap-6

              xl:grid-cols-[0.95fr_1.05fr]
              xl:gap-7
            "
          >
            {/* ==================================================
                VIDEO GLASS PANEL
            =================================================== */}

            <div
              className="
                group
                relative
                min-h-[440px]
                overflow-hidden
                rounded-[24px]
                border
                border-white/70
                bg-white/[0.28]
                shadow-[0_30px_80px_rgba(7,11,42,0.08)]
                backdrop-blur-2xl

                sm:min-h-[500px]

                lg:min-h-[610px]

                xl:min-h-[640px]
              "
            >
              {/* Video */}

              <video
                autoPlay
                loop
                muted
                playsInline
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-[1200ms]
                  group-hover:scale-[1.025]
                "
              >
                <source
                  src="/contactusvideo.mp4"
                  type="video/mp4"
                />

                Your browser does not support the video tag.
              </video>

              {/* Glass overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-b
                  from-[#070B2A]/5
                  via-[#070B2A]/5
                  to-[#070B2A]/75
                "
              />

              {/* Soft blue reflection */}

              <div
                className="
                  absolute
                  -right-20
                  -top-20
                  h-64
                  w-64
                  rounded-full
                  bg-[#38BDF8]/10
                  blur-[80px]
                "
              />

              {/* Top glass badge */}

              <div
                className="
                  absolute
                  left-6
                  top-6

                  sm:left-7
                  sm:top-7

                  lg:left-8
                  lg:top-8
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-white/[0.12]
                    px-3.5
                    py-2
                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]
                    backdrop-blur-xl
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />

                  <span
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.23em]
                      text-white/80
                    "
                  >
                    Start a conversation
                  </span>
                </div>
              </div>

              {/* Bottom content */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-6

                  sm:p-8

                  lg:p-9

                  xl:p-10
                "
              >
                <div className="mb-4 h-px w-8 bg-[#38BDF8]" />

                <h2
                  className="
                    max-w-[520px]
                    text-[28px]
                    font-semibold
                    leading-[1.05]
                    tracking-[-0.04em]
                    text-white

                    sm:text-[34px]

                    lg:text-[38px]
                  "
                >
                  Good projects begin
                  <br />
                  with good conversations.
                </h2>

                <p
                  className="
                    mt-4
                    max-w-[430px]
                    text-[12px]
                    leading-6
                    text-white/60

                    sm:text-[13px]
                  "
                >
                  Whether you have a defined project or just an
                  early idea, we&apos;re open to hearing about it.
                </p>
              </div>
            </div>

            {/* ==================================================
                FORM GLASS PANEL
            =================================================== */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[24px]
                border
                border-white/80
                bg-white/[0.62]
                shadow-[0_30px_80px_rgba(7,11,42,0.07)]
                backdrop-blur-2xl
              "
            >
              {/* Glass reflection */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-72
                  w-72
                  rounded-full
                  bg-[#38BDF8]/[0.06]
                  blur-[90px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  left-10
                  right-10
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#38BDF8]/30
                  to-transparent
                "
              />

              <div
                className="
                  relative
                  p-6

                  sm:p-8

                  lg:p-9

                  xl:p-10
                "
              >
                {/* Heading */}

                <div className="mb-7">
                  <div className="mb-5 flex items-center gap-3">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-[#0F62FE]/10
                        bg-[#0F62FE]/[0.06]
                        text-[#0F62FE]
                        shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)]
                      "
                    >
                      <Send
                        className="h-4 w-4"
                        strokeWidth={1.6}
                      />
                    </div>

                    <span
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.27em]
                        text-[#0F62FE]
                      "
                    >
                      Project Enquiry
                    </span>
                  </div>

                  <h3
                    className="
                      text-[30px]
                      font-semibold
                      leading-none
                      tracking-[-0.045em]
                      text-[#070B2A]

                      sm:text-[34px]

                      lg:text-[38px]
                    "
                  >
                    {t("journeyTitle") ||
                      t("get_in_touch")}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-[520px]
                      text-[13px]
                      leading-6
                      text-slate-500
                    "
                  >
                    Share a few details about your project and
                    we&apos;ll get back to you.
                  </p>
                </div>

                {/* =================================================
                    FORM
                ================================================== */}

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Name / Firm */}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        className="
                          mb-1.5
                          block
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-slate-500
                        "
                      >
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={
                          t("journeySteps.0") ||
                          "Full Name"
                        }
                        className={`${inputBase} ${errors.name
                          ? errorStyle
                          : ""
                          }`}
                      />

                      {errors.name && (
                        <p className="mt-1.5 text-[11px] text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        className="
                          mb-1.5
                          block
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-slate-500
                        "
                      >
                        Company
                      </label>

                      <input
                        type="text"
                        name="firm"
                        value={formData.firm}
                        onChange={handleChange}
                        placeholder={
                          t("journeySteps.1") ||
                          "Firm / Company Name"
                        }
                        className={`${inputBase} ${errors.firm
                          ? errorStyle
                          : ""
                          }`}
                      />

                      {errors.firm && (
                        <p className="mt-1.5 text-[11px] text-red-500">
                          {errors.firm}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}

                  <div>
                    <label
                      className="
                        mb-1.5
                        block
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-slate-500
                      "
                    >
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={
                        t("journeySteps.2") ||
                        "Email Address"
                      }
                      className={`${inputBase} ${errors.email
                        ? errorStyle
                        : ""
                        }`}
                    />

                    {errors.email && (
                      <p className="mt-1.5 text-[11px] text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}

                  <div>
                    <label
                      className="
                        mb-1.5
                        block
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-slate-500
                      "
                    >
                      Phone Number
                    </label>

                    <PhoneInput
                      country={"in"}
                      value={formData.phone}
                      onChange={(phone) => {
                        setFormData((prev) => ({
                          ...prev,
                          phone,
                        }));

                        setErrors((prev) => ({
                          ...prev,
                          phone: "",
                        }));
                      }}
                      inputProps={{
                        name: "phone",
                        required: true,
                      }}
                      containerClass="
                        !w-full
                        !rounded-[12px]
                        !border
                        !border-slate-200/90
                        !bg-white/65
                        focus-within:!border-[#0F62FE]/45
                        focus-within:!ring-4
                        focus-within:!ring-[#0F62FE]/[0.06]
                      "
                      inputClass="
                        !w-full
                        !h-[52px]
                        !rounded-[12px]
                        !border-none
                        !bg-transparent
                        !text-[#070B2A]
                        !text-[14px]
                        !pl-16
                        !pr-4
                        placeholder:!text-slate-400
                      "
                      buttonClass="
                        !border-none
                        !border-r
                        !border-slate-200
                        !bg-transparent
                        !px-3
                      "
                      dropdownClass="
                        !bg-white
                        !text-[#070B2A]
                      "
                      placeholder={
                        t("journeySteps.3") ||
                        "Phone Number"
                      }
                    />

                    {errors.phone && (
                      <p className="mt-1.5 text-[11px] text-red-500">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Service */}

                  <div>
                    <label
                      className="
                        mb-1.5
                        block
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-slate-500
                      "
                    >
                      Service
                    </label>

                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="
                        h-[52px]
                        w-full
                        appearance-none
                        rounded-[12px]
                        border
                        border-slate-200/90
                        bg-white/65
                        px-4
                        text-[14px]
                        text-[#070B2A]
                        outline-none
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        focus:border-[#0F62FE]/45
                        focus:bg-white/85
                        focus:ring-4
                        focus:ring-[#0F62FE]/[0.06]
                      "
                    >
                      {serviceOptions.map(
                        (option, idx) => (
                          <option
                            key={idx}
                            value={option}
                          >
                            {option}
                          </option>
                        )
                      )}
                    </select>

                    {errors.subject && (
                      <p className="mt-1.5 text-[11px] text-red-500">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Custom query */}

                  {formData.subject === "Other" && (
                    <div>
                      <label
                        className="
                          mb-1.5
                          block
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-slate-500
                        "
                      >
                        Your Query
                      </label>

                      <textarea
                        name="custom_query"
                        value={formData.custom_query}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Please specify your query"
                        className={`${inputBase} !h-auto !py-3.5 ${errors.custom_query
                          ? errorStyle
                          : ""
                          }`}
                      />

                      {errors.custom_query && (
                        <p className="mt-1.5 text-[11px] text-red-500">
                          {errors.custom_query}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Message */}

                  <div>
                    <label
                      className="
                        mb-1.5
                        block
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-slate-500
                      "
                    >
                      Message
                    </label>

                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={
                        t("journeySteps.5") ||
                        "Message"
                      }
                      className={`${inputBase} !h-auto !py-3.5 ${errors.message
                        ? errorStyle
                        : ""
                        }`}
                    />

                    {errors.message && (
                      <p className="mt-1.5 text-[11px] text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}

                  <button
                    type="submit"
                    className="
                      group
                      mt-1
                      flex
                      h-[54px]
                      w-full
                      items-center
                      justify-between
                      rounded-[12px]
                      bg-[#070B2A]
                      px-5
                      text-sm
                      font-semibold
                      text-white
                      shadow-[0_12px_30px_rgba(7,11,42,0.12)]
                      transition-all
                      duration-300

                      hover:bg-[#0F62FE]
                      hover:shadow-[0_14px_35px_rgba(15,98,254,0.18)]
                    "
                  >
                    <span>
                      {t("ctaBtn") ||
                        t("send_message")}
                    </span>

                    <span
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        bg-white/10
                        transition-all
                        duration-300

                        group-hover:bg-white/15
                      "
                    >
                      <ArrowUpRight
                        className="
                          h-4
                          w-4
                          transition-transform
                          duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                        strokeWidth={1.6}
                      />
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}