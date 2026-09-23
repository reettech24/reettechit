"use client";

import React from "react";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUpRight,
} from "lucide-react";
import {
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="relative overflow-hidden bg-[#030303] text-white">
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[300px] w-[300px] rounded-full bg-[#38BDF8]/[0.035] blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[300px] w-[300px] rounded-full bg-[#070B2A]/40 blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-12 sm:px-10 lg:px-16 xl:px-20">

        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_0.8fr_0.8fr_1.2fr] lg:gap-16">

          {/* Brand */}
          <div>
            <div dir="ltr" className="flex flex-row items-center gap-3 dir-ltr">
              <Image
                src="/reetlogo.png"
                alt="Reet Technologies"
                width={90}
                height={60}
                className="h-auto w-[72px] object-contain"
              />

              <div>
                <p className="text-lg font-semibold leading-tight tracking-[-0.02em]">
                  Reet
                </p>

                <p className="text-lg font-semibold leading-tight tracking-[-0.02em] text-white/80">
                  Technologies
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-[300px] text-sm leading-6 text-white/45">
              {t("tagline")}
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs text-white/35">
              <span className="h-px w-6 bg-[#38BDF8]/60" />
              Technology. Strategy. Growth.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#7DD3FC]">
              {t("quickLinks")}
            </h3>

            <ul className="space-y-3 text-sm text-white/55">
              <li>
                <a
                  href="/pages/about"
                  className="transition-colors hover:text-white"
                >
                  {t("about")}
                </a>
              </li>

              <li>
                <a
                  href="/pages/services"
                  className="transition-colors hover:text-white"
                >
                  {t("services")}
                </a>
              </li>

              <li>
                <a
                  href="/pages/careers"
                  className="transition-colors hover:text-white"
                >
                  {t("careers")}
                </a>
              </li>

              <li>
                <a
                  href="/pages/contact"
                  className="transition-colors hover:text-white"
                >
                  {t("contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#7DD3FC]">
              {t("products")}
            </h3>

            <ul className="space-y-3 text-sm text-white/55">
              <li>
                <a
                  href="#"
                  className="group inline-flex items-center gap-1 transition-colors hover:text-white"
                >
                  {t("nexusIndia")}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="group inline-flex items-center gap-1 transition-colors hover:text-white"
                >
                  {t("nexusOnline")}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#7DD3FC]">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-white/55">

              <p className="leading-6">
                {t("address.line2")}
              </p>

              <a
                href="tel:+917972905758"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <PhoneIcon className="h-3.5 w-3.5 text-[#7DD3FC]" />
                +91 797-290-5758
              </a>

              <a
                href="mailto:sales@reettechit.com"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <EnvelopeIcon className="h-3.5 w-3.5 text-[#7DD3FC]" />
                sales@reettechit.com
              </a>
            </div>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://www.facebook.com/profile.php?id=61563815199946"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-white/45 transition-all duration-300 hover:border-[#38BDF8]/30 hover:bg-[#38BDF8]/[0.08] hover:text-[#7DD3FC]"
              >
                <Facebook className="h-3.5 w-3.5" />
              </a>

              <a
                href="https://www.instagram.com/reettechnologies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-white/45 transition-all duration-300 hover:border-[#38BDF8]/30 hover:bg-[#38BDF8]/[0.08] hover:text-[#7DD3FC]"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>

              <a
                href="https://www.linkedin.com/company/reet-technologies/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-white/45 transition-all duration-300 hover:border-[#38BDF8]/30 hover:bg-[#38BDF8]/[0.08] hover:text-[#7DD3FC]"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>

              <a
                href="https://www.youtube.com/@ReetTechnologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-white/45 transition-all duration-300 hover:border-[#38BDF8]/30 hover:bg-[#38BDF8]/[0.08] hover:text-[#7DD3FC]"
              >
                <Youtube className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <div className="my-9 h-px bg-white/[0.08]" />

        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <div className="flex flex-col gap-4 text-xs text-white/35 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Reet Technologies.{" "}
            {t("rights")}
          </p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <a
              href="/pages/about"
              className="transition-colors hover:text-white"
            >
              {t("about")}
            </a>

            <span className="text-white/15">•</span>

            <a
              href="/pages/policies/termsConditions"
              className="transition-colors hover:text-white"
            >
              {t("terms")}
            </a>

            <span className="text-white/15">•</span>

            <a
              href="/pages/policies/privacyPolicy"
              className="transition-colors hover:text-white"
            >
              {t("privacy")}
            </a>

            <span className="text-white/15">•</span>

            <a
              href="/pages/policies/californiaPrivacyPolicy"
              className="transition-colors hover:text-white"
            >
              {t("california")}
            </a>

            <span className="text-white/15">•</span>

            <a
              href="/pages/policies/privacyPolicy"
              className="transition-colors hover:text-white"
            >
              {t("shipping")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};