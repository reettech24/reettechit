"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ContactUsSection() {
  const t = useTranslations("contact");

  return (
    <div>
      <section className="py-20 px-6 lg:px-20 bg-[#070B2A]">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-5 lg:mb-3">
          {/* Left Video */}
          <div>
            <div className="relative w-full h-fit overflow-hidden shadow-md">
              <video autoPlay loop muted playsInline className="object-cover">
                <source src="/contactusvideo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Right Form */}
          <div className="relative self-center">
            <div className="absolute -top-40 right-0">
              <img src="/footer-shape-1.png" alt="Shape" />
            </div>
            <h3 className="text-3xl font-bold text-white uppercase mb-6">
              {t("get_in_touch")}
            </h3>
            <form className="space-y-4 text-white">
              <input
                type="text"
                placeholder={t("full_name")}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2244f8]"
              />
              <input
                type="email"
                placeholder={t("email_address")}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2244f8]"
              />
              <input
                type="text"
                placeholder={t("subject")}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2244f8]"
              />
              <textarea
                rows={5}
                placeholder={t("message")}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2244f8]"
              ></textarea>
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
        <div className="grid lg:grid-cols-3 bg-[#2244f8] text-white p-8 space-y-6">
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
    </div>
  );
}
