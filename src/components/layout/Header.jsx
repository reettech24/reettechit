"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { usePathname, useRouter, Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const locales = [
  { code: "en", label: "English" },
  { code: "jp", label: "日本語" },
  { code: "ar", label: "العربية" },
];

export const Header = () => {
  const t = useTranslations("header");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const currentLocale = useLocale();

  return (
    <header className="sticky top-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <nav
        className="mx-auto max-w-full flex items-center justify-between px-6 py-4 lg:px-12"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/reetlogo.png"
            alt="Reet Technologies Logo"
            width={40}
            height={40}
            className="w-16 h-auto"
          />
          <span className="text-white font-semibold text-xl uppercase leading-tight">
            {t("reet")} <br /> {t("technology")}
          </span>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-blue-400 transition"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <PopoverGroup className="hidden lg:flex gap-x-8 text-white font-medium text-lg">
          {/* Home */}
          <Link href="/" className="hover:text-blue-300 transition">
            {t("home")}
          </Link>

          {/* Services */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-1 hover:text-blue-300 transition focus:outline-none">
              {t("services")}
              <ChevronDownIcon className="h-5 w-5" />
            </PopoverButton>
            <PopoverPanel className="absolute top-15 left-0 z-30 w-64 bg-white/10 backdrop-blur-xl p-4 rounded-xl space-y-2 text-sm text-white/90">
              <div className="font-semibold text-white mb-1">Our Expertise</div>
              <Link href="/pages/services/consulting" className="block">
                Next Gen Consulting
              </Link>
              <Link href="/pages/services/brand" className="block">
                Brand Portfolio Management
              </Link>
              <Link href="/pages/services/rnd" className="block">
                Research & Development
              </Link>
              <Link href="/pages/services/business-setup" className="block">
                Business Establishment
              </Link>
              <Link href="/pages/services/project" className="block">
                Project Management
              </Link>
              <Link href="/pages/services/it-consulting" className="block">
                Business & IT Consulting
              </Link>
              <Link href="/pages/services/software-dev" className="block">
                Software Development
              </Link>

              <div className="font-semibold text-white mt-4">Our Solutions</div>
              <Link
                href="/pages/solutions/digital-transformation"
                className="block"
              >
                Digital Transformation
              </Link>
              <Link href="/pages/solutions/crm-erp" className="block">
                CRM & ERP
              </Link>
              <Link href="/pages/solutions/web-mobile" className="block">
                Web & Mobile Apps
              </Link>
              <Link href="/pages/solutions/ai-ml" className="block">
                AI & ML
              </Link>
              <Link href="/pages/solutions/marketing" className="block">
                Digital Marketing
              </Link>
              <Link href="/pages/solutions/high-end-web" className="block">
                High-End Web Dev
              </Link>
              <Link href="/pages/solutions/ar-vr" className="block">
                AR & VR
              </Link>
              <Link href="/pages/solutions/cyber-security" className="block">
                Cyber Security
              </Link>
            </PopoverPanel>
          </Popover>

          {/* Industries */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-1 hover:text-blue-300 transition focus:outline-none">
              {t("industries")} <ChevronDownIcon className="h-5 w-5" />
            </PopoverButton>
            <PopoverPanel className="absolute top-15 left-0 z-30 w-64 bg-white/10 backdrop-blur-xl p-4 rounded-xl space-y-2 text-sm text-white/90">
              <Link href="/pages/industries/retail" className="block">
                Retail & E-commerce
              </Link>
              <Link href="/pages/industries/real-estate" className="block">
                Real Estate
              </Link>
              <Link href="/pages/industries/manufacturing" className="block">
                Manufacturing
              </Link>
              <Link href="/pages/industries/education" className="block">
                Education
              </Link>
              <Link href="/pages/industries/bfsi" className="block">
                BFSI
              </Link>
              <Link href="/pages/industries/healthcare" className="block">
                Health Care
              </Link>
              <Link href="/pages/industries/logistics" className="block">
                Logistics
              </Link>
              <Link href="/pages/industries/automotive" className="block">
                Automotive
              </Link>
            </PopoverPanel>
          </Popover>

          {/* Our Products */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-1 hover:text-blue-300 transition focus:outline-none">
              {t("ourProducts")}
              <ChevronDownIcon className="h-5 w-5" />
            </PopoverButton>
            <PopoverPanel className="absolute top-15 left-0 z-30 w-64 bg-white/10 backdrop-blur-xl p-4 rounded-xl space-y-2 text-sm text-white/90">
              <Link href="/pages/products/nexus-india" className="block">
                Nexus India App
              </Link>
              <Link href="/pages/products/nexus-online" className="block">
                Nexus Online Management
              </Link>
            </PopoverPanel>
          </Popover>

          {/* About Us */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-1 hover:text-blue-300 transition focus:outline-none">
              {t("aboutUs")} <ChevronDownIcon className="h-5 w-5" />
            </PopoverButton>
            <PopoverPanel className="absolute top-15 left-0 z-30 w-64 bg-white/10 backdrop-blur-xl p-4 rounded-xl space-y-2 text-sm text-white/90">
              <Link
                href="/pages/about/who-we-are"
                className="block hover:text-blue-300"
              >
                Who We Are
              </Link>
              <Link
                href="/pages/about/focus"
                className="block hover:text-blue-300"
              >
                Our Focus
              </Link>
              <Link
                href="/pages/about/team"
                className="block hover:text-blue-300"
              >
                Our Team
              </Link>
            </PopoverPanel>
          </Popover>

          {/* Career Courses */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-1 hover:text-blue-300 transition focus:outline-none">
              {t("careers")} <ChevronDownIcon className="h-5 w-5" />
            </PopoverButton>
            <PopoverPanel className="absolute top-15 left-0 z-30 w-64 bg-white/10 backdrop-blur-xl p-4 rounded-xl space-y-2 text-sm text-white/90">
              <Link href="/pages/careers/courses" className="block">
                Student Courses
              </Link>
              <Link href="/pages/careers/jobs" className="block">
                Jobs & Hiring
              </Link>
            </PopoverPanel>
          </Popover>

          {/* Collaborate */}
          {/* <Popover className="relative">
            <PopoverButton className="flex items-center gap-1 hover:text-blue-300 transition">
              Collaborate <ChevronDownIcon className="h-5 w-5" />
            </PopoverButton>
            <PopoverPanel className="absolute top-15 left-0 z-30 w-64 bg-white/10 backdrop-blur-xl p-4 rounded-xl space-y-2 text-sm text-white/90">
              <Link href="/pages/collaborate/channel-partner" className="block">Channel Partner</Link>
              <Link href="/pages/collaborate/tech-partner" className="block">Tech Partnership</Link>
              <Link href="/pages/collaborate/company-partner" className="block">Company Partnership</Link>
              <Link href="/pages/collaborate/outsourcing" className="block">Outsourcing</Link>
            </PopoverPanel>
          </Popover> */}

          {/* Contact */}
          <Link
            href="/pages/contact"
            className="hover:text-blue-300 transition"
          >
            {t("contact")}
          </Link>

          {/* Language Switcher */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-1 hover:text-blue-300 transition">
              🌐 <ChevronDownIcon className="h-5 w-5" />
            </PopoverButton>
            <PopoverPanel className="absolute right-0 top-15 w-40 p-4 bg-white/10 backdrop-blur-xl rounded-xl text-sm text-white/80 space-y-2 z-40">
              {locales.map(({ code, label }) => (
                <Link
                  key={code}
                  href={pathname}
                  locale={code}
                  className={`block w-full text-left hover:text-blue-300 ${
                    currentLocale === code ? "font-bold" : ""
                  }`}
                >
                  {label}
                </Link>
              ))}
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
      </nav>

      {/* Mobile Nav placeholder */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 py-4 bg-black/80 backdrop-blur-xl text-white space-y-4">
          <p className="text-sm text-white/70">Mobile menu coming soon...</p>
        </div>
      )}
    </header>
  );
};
