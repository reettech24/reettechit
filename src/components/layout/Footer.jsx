"use client";

import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#0C0C0C] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Logo & Tagline */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Image
                src="/reetlogo.png"
                alt="Reet Technologies Logo"
                width={120}
                height={80}
                className="w-32 h-auto"
              />
              <span className="text-white font-semibold text-3xl uppercase leading-tight">
                Reet <br /> Technologies
              </span>
            </div>
            <p className="text-lg font-semibold text-white capitalize">
              {t("tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-xl">{t("quickLinks")}</h4>
            <ul className="flex flex-col gap-2 text-white/70 text-md">
              <li><a href="/pages/about" className="hover:text-white">{t("about")}</a></li>
              <li><a href="/pages/careers" className="hover:text-white">{t("careers")}</a></li>
              <li><a href="/pages/services" className="hover:text-white">{t("services")}</a></li>
              <li><a href="/pages/contact" className="hover:text-white">{t("contact")}</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-2">
            <h4 className="font-semibold text-xl">{t("products")}</h4>
            <ul className="gap-4 text-blue-500 font-medium text-md">
              <li><a href="#">{t("nexusIndia")}</a></li>
              <li><a href="#">{t("nexusOnline")}</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20" />

        {/* Addresses + Follow Us */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div>
            <p className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🇮🇳</span>{" "}
              <strong className="text-xl">Reet Technologies</strong>
            </p>
            <p className="text-lg">
              {t("address.line1")}
              <br />
              {t("address.line2")}
            </p>
            <p className="flex items-center gap-2 mt-1">
              <PhoneIcon className="w-4 h-4" /> +91 797-290-5758, <br/> +91 957-969-5319
            </p>
          </div>

          <div className="space-y-2 md:col-span-2 md:col-start-4">
            <h4 className="font-semibold text-xl">{t("followUs")}</h4>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-blue-500"><Twitter size={30} /></a> */}
              <a href="https://www.facebook.com/profile.php?id=61563815199946" className="text-blue-500"><Facebook size={30} /></a>
              <a href="https://www.instagram.com/reettechnologies/" className="text-blue-500"><Instagram size={30} /></a>
              <a href="https://www.linkedin.com/company/reet-technologies/posts/?feedView=all" className="text-blue-500"><Linkedin size={30} /></a>
              <a href="https://www.youtube.com/@ReetTechnologies" className="text-blue-500"><Youtube size={30} /></a>
            </div>
            <p className="flex items-center gap-2 text-xl">
              <EnvelopeIcon className="w-4 h-4" /> sales@reettechit.com
            </p>
          </div>
        </div>

        <hr className="border-white/20" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between text-md text-white/70 gap-2">
          <p>© {new Date().getFullYear()} Reet Technologies. {t("rights")}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="hover:text-white">{t("about")}</a><span>|</span>
            <a href="#" className="hover:text-white">{t("terms")}</a><span>|</span>
            <a href="#" className="hover:text-white">{t("privacy")}</a><span>|</span>
            <a href="#" className="hover:text-white">{t("refund")}</a><span>|</span>
            <a href="#" className="hover:text-white">{t("shipping")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
