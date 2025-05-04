"use client";

import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#070B2A] text-white py-10 border-t">
      <div className="mx-auto max-w-full px-6 grid md:grid-cols-3 gap-6 py-4 lg:px-12">
        {/* Left Section - Brand & About */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/reetlogo.png"
              alt="Reet Technologies Logo"
              width={40}
              height={40}
              className="w-24 h-auto"
            />
            <span className="text-white font-semibold text-2xl uppercase leading-tight">
              {t("reet")} <br /> {t("technology")}
            </span>
          </div>
          <p className="text-sm mt-2">{t("companyDescription")}</p>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">{t("quickLinks")}</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/pages/about" className="hover:text-white/80">
                {t("about")}
              </a>
            </li>
            <li>
              <a href="/pages/careers" className="hover:text-white/80">
                {t("careers")}
              </a>
            </li>
            <li>
              <a href="/pages/services" className="hover:text-white/80">
                {t("services")}
              </a>
            </li>
            <li>
              <a href="/pages/contact" className="hover:text-white/80">
                {t("contact")}
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold">{t("contact")}</h3>
          <div className="mt-2 space-y-2">
            <p className="flex items-center">
              <EnvelopeIcon className="h-5 w-5 mr-2 text-white/80" />
              <a
                href="mailto:work@reettechit.com"
                className="hover:text-white/80"
              >
                work@reettechit.com
              </a>
            </p>
            <p className="flex items-center">
              <PhoneIcon className="h-5 w-5 mr-2 text-white/80" />
              +91 1234567890
            </p>
            <p className="flex items-center">
              <MapPinIcon className="h-5 w-5 mr-2 text-white/80" />
              Pune, India
            </p>
          </div>

          <h3 className="text-lg font-semibold mt-4">{t("followUs")}</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-white/80 hover:text-gray-800">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-white/80 hover:text-gray-800">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-white/80 hover:text-gray-800">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-white/80 mt-6 border-t pt-4">
        © {new Date().getFullYear()} Reet Technologies. {t("rightsReserved")}
      </div>
    </footer>
  );
};
