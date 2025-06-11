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
import { ChevronRightIcon } from "lucide-react";

const locales = [
  { code: "en", label: "English" },
  { code: "jp", label: "日本語" },
  { code: "ar", label: "العربية" },
];

const Enterprise = [
  {
    name: "Next Generation Consulting",
    description: "Innovative strategies tailored for future-ready businesses.",
    href: "/pages/services/ourEnterprise/nextgenconsulting",
  },
  {
    name: "Brand Portfolio Management",
    description: "Strategic development and management of brand ecosystems.",
    href: "/pages/services/ourEnterprise/brandPortfolioManagement",
  },
  {
    name: "Research & Development",
    description: "Data-driven innovation and product evolution frameworks.",
    href: "/pages/services/ourEnterprise/researchAndDevelopment",
  },
  {
    name: "Business Establishment",
    description:
      "From market entry to legal setup, launch your business smoothly.",
    href: "/pages/services/ourEnterprise/businessEstablishment",
  },
  {
    name: "Project Management",
    description: "Agile execution and control for diverse digital projects.",
    href: "/pages/services/ourEnterprise/projectManagement",
  },
  {
    name: "Business & IT Consulting",
    description: "Aligning IT systems with strategic business goals.",
    href: "/pages/services/ourEnterprise/businessAndItConsulting",
  },
  {
    name: "Software Development",
    description: "Custom software tailored to your business needs.",
    href: "/pages/services/ourEnterprise/softwareDevelopment",
  },
];

const Solutions = [
  {
    name: "Digital Transformation",
    description:
      "End-to-end transformation of business models through digital tech.",
    href: "/pages/services/ourSolutions/digital-transformation",
  },
  {
    name: "CRM & ERP Solutions",
    description:
      "Integrated systems to streamline customer and resource management.",
    href: "/pages/services/ourSolutions/crm-erp-solution",
  },
  {
    name: "Mobile & Web Applications",
    description: "Scalable, cross-platform mobile and web app development.",
    href: "/pages/services/ourSolutions/mobile-and-web-application",
  },
  {
    name: "AI & ML",
    description:
      "Advanced AI models and machine learning for smart automation.",
    href: "/pages/services/ourSolutions/ai-ml",
  },
  {
    name: "Digital Marketing",
    description: "Performance-driven SEO, social, and ad strategies.",
    href: "/pages/services/ourSolutions/digital-marketing",
  },
  // {
  //   name: "High End Website Development",
  //   description: "Bespoke, high-performance websites with modern UX/UI.",
  //   href: "/pages/services/high-end-web",
  // },
  {
    name: "AR & VR Solutions",
    description:
      "Immersive augmented and virtual reality solutions for enterprises.",
    href: "/pages/services/ourSolutions/ar-vr-solutions",
  },
  // {
  //   name: "Cyber Security",
  //   description: "Comprehensive security audits and cyber defense systems.",
  //   href: "/pages/services/cyber-security",
  // },
];

const Industries = [
  {
    name: "Retail & E-commerce",
    href: "/pages/industries/retail-E-commerce",
  },
  {
    name: "Real Estate",
    href: "/pages/industries/real-Estate",
  },
  {
    name: "Manufacturing",
    href: "/pages/industries/manufacturing",
  },
  {
    name: "Education",
    href: "/pages/industries/education",
  },
  {
    name: "BFSI",
    href: "/pages/industries/bfsi",
  },
  {
    name: "Health Care",
    href: "/pages/industries/health-care",
  },
  {
    name: "Logistics",
    href: "/pages/industries/logistics",
  },
  {
    name: "Automotive",
    href: "/pages/industries/automotive",
  },
];

const Products = [
  {
    name: "Nexus India App",
    href: "/pages/products/nexus-india",
  },
  {
    name: "Nexus Online Management",
    href: "/pages/products/nexus-online-management",
  },
];

const AboutUs = [
  {
    name: "Who We Are",
    href: "/pages/about",
  },
  {
    name: "Our Focus",
    href: "/pages/about/ourFocus",
  },
  {
    name: "Our Team",
    href: "/pages/about/ourTeam",
  },
];

const Careers = [
  {
    name: "Student Courses",
    href: "/pages/careers/courses",
  },
  {
    name: "Jobs & Hiring",
    href: "/pages/careers/jobs-hiring",
  },
];

export const Header = () => {
  const t = useTranslations("header");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [mobileIndustriesopen, setMobileIndustriesopen] = useState(false);
  const [showExpertise, setShowExpertise] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [mobileProductopen, setMobileProductopen] = useState(false);
  const [mobileAboutUsopen, setMobileAboutUsopen] = useState(false);
  const [mobileCareersopen, setMobileCareersopen] = useState(false);
  const pathname = usePathname();
  const currentLocale = useLocale();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
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
            {t("reet")} <br /> {t("technologies")}
          </span>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <div className="flex items-center gap-4">
            <Popover className="relative">
              <PopoverButton className="flex items-center hover:text-blue-300 transition">
                🌐 <ChevronDownIcon className="h-5 w-5 text-white" />
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

            <button
              // onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              onClick={toggleMobileMenu}
              className="text-white hover:text-blue-400 transition"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        <PopoverGroup className="hidden lg:flex gap-x-8 text-white font-medium text-lg">
          {/* Home */}
          <Link href="/" className="hover:text-blue-300 transition">
            {t("home")}
          </Link>

          <Popover className="relative group">
            <PopoverButton className="flex items-center gap-1 hover:text-blue-300 transition focus:outline-none">
              {t("services")}
              <ChevronDownIcon className="h-5 w-5" />
            </PopoverButton>

            <PopoverPanel className="absolute top-15 left-0 z-30 w-72 bg-[#070B2A] backdrop-blur-xl p-4 space-y-4 text-sm text-white/90 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
              {/* Our Expertise */}
              <div className="relative group/exp">
                <div className="w-full text-left font-semibold text-white hover:text-blue-300 flex justify-between items-center cursor-pointer">
                  Our Expertise <ChevronRightIcon className="w-4 h-4" />
                </div>
                <div className="absolute left-full -top-4 z-40 ml-4 w-72 bg-[#070B2A] backdrop-blur-xl p-4 space-y-2 text-white/90 invisible opacity-0 group-hover/exp:visible group-hover/exp:opacity-100 transition-all duration-300">
                  <Link
                    href="/pages/services/ourEnterprise/nextgenconsulting"
                    className="block"
                  >
                    Next Generation Consulting
                  </Link>
                  <Link
                    href="/pages/services/ourEnterprise/brandPortfolioManagement"
                    className="block"
                  >
                    Brand Portfolio Management
                  </Link>
                  <Link
                    href="/pages/services/ourEnterprise/researchAndDevelopment"
                    className="block"
                  >
                    Research & Development
                  </Link>
                  <Link
                    href="/pages/services/ourEnterprise/businessEstablishment"
                    className="block"
                  >
                    Business Establishment
                  </Link>
                  <Link
                    href="/pages/services/ourEnterprise/projectManagement"
                    className="block"
                  >
                    Project Management
                  </Link>
                  <Link
                    href="/pages/services/ourEnterprise/businessAndItConsulting"
                    className="block"
                  >
                    Business & IT Consulting
                  </Link>
                  <Link
                    href="/pages/services/ourEnterprise/softwareDevelopment"
                    className="block"
                  >
                    Software Development
                  </Link>
                </div>
              </div>

              {/* Our Solutions */}
              <div className="relative group/sol">
                <div className="w-full text-left font-semibold text-white hover:text-blue-300 flex justify-between items-center cursor-pointer">
                  Our Solutions <ChevronRightIcon className="w-4 h-4" />
                </div>
                <div className="absolute left-full -top-13 z-40 ml-4 w-72 bg-[#070B2A] backdrop-blur-xl p-4 space-y-2 text-white/90 invisible opacity-0 group-hover/sol:visible group-hover/sol:opacity-100 transition-all duration-300">
                  <Link
                    href="/pages/services/ourSolutions/digital-transformation"
                    className="block"
                  >
                    Digital Transformation
                  </Link>
                  <Link
                    href="/pages/services/ourSolutions/crm-erp-solution"
                    className="block"
                  >
                    CRM & ERP Solutions
                  </Link>
                  <Link
                    href="/pages/services/ourSolutions/mobile-and-web-application"
                    className="block"
                  >
                    Mobile & Web Applications
                  </Link>
                  <Link
                    href="/pages/services/ourSolutions/ai-ml"
                    className="block"
                  >
                    AI & ML
                  </Link>
                  <Link
                    href="/pages/services/ourSolutions/digital-marketing"
                    className="block"
                  >
                    Digital Marketing
                  </Link>
                  {/* <Link
                    href="/pages/services/ourSolutions/high-end-website-development"
                    className="block"
                  >
                    High End Website Development
                  </Link> */}
                  <Link
                    href="/pages/services/ourSolutions/ar-vr-solutions"
                    className="block"
                  >
                    AR & VR Solutions
                  </Link>
                  {/* <Link
                    href="/pages/services/ourSolutions/cyber-security"
                    className="block"
                  >
                    Cyber Security
                  </Link> */}
                </div>
              </div>

              <Link
                href="/pages/services"
                className="block font-semibold text-white"
              >
                Our Services & Solutions
              </Link>
            </PopoverPanel>
          </Popover>

          {/* Industries */}
          <Popover className="relative group">
            <PopoverButton className="flex items-center gap-1 hover:text-blue-300 transition focus:outline-none">
              {t("industries")} <ChevronDownIcon className="h-5 w-5" />
            </PopoverButton>
            <PopoverPanel className="absolute top-15 left-0 z-30 w-64 bg-[#070B2A] backdrop-blur-xl p-4 space-y-2 text-sm text-white/90 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
              <Link
                href="/pages/industries/retail-E-commerce"
                className="block"
              >
                Retail & E-commerce
              </Link>
              <Link href="/pages/industries/real-Estate" className="block">
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
              <Link href="/pages/industries/health-care" className="block">
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
          <Popover className="relative group">
            <PopoverButton className="flex items-center gap-1 hover:text-blue-300 transition focus:outline-none">
              {t("products")}
              <ChevronDownIcon className="h-5 w-5" />
            </PopoverButton>
            <PopoverPanel className="absolute top-15 left-0 z-30 w-64 bg-[#070B2A] backdrop-blur-xl p-4 space-y-2 text-sm text-white/90 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
              <Link href="/pages/products/nexus-india" className="block">
                Nexus India Applicaion
              </Link>
              <Link
                href="/pages/products/nexus-online-management"
                className="block"
              >
                Nexus Online Management
              </Link>
            </PopoverPanel>
          </Popover>

          {/* About Us */}
          <Popover className="relative group">
            <PopoverButton className="flex items-center gap-1 hover:text-blue-300 transition focus:outline-none">
              {t("aboutUs")} <ChevronDownIcon className="h-5 w-5" />
            </PopoverButton>
            <PopoverPanel className="absolute top-15 left-0 z-30 w-64 bg-[#070B2A] backdrop-blur-xl p-4 space-y-2 text-sm text-white/90 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
              <Link href="/pages/about" className="block hover:text-blue-300">
                Who We Are
              </Link>
              <Link
                href="/pages/about/ourFocus"
                className="block hover:text-blue-300"
              >
                Our Focus
              </Link>
              <Link
                href="/pages/about/ourTeam"
                className="block hover:text-blue-300"
              >
                Our Team
              </Link>
            </PopoverPanel>
          </Popover>

          {/* Career Courses */}
          <Popover className="relative group">
            <PopoverButton className="flex items-center gap-1 hover:text-blue-300 transition focus:outline-none">
              {t("careers")} <ChevronDownIcon className="h-5 w-5" />
            </PopoverButton>
            <PopoverPanel className="absolute top-15 left-0 z-30 w-64 bg-[#070B2A] backdrop-blur-xl p-4 space-y-2 text-sm text-white/90 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
              <Link href="/pages/careers/courses" className="block">
                Student Courses
              </Link>
              <Link href="/pages/careers/jobs-hiring" className="block">
                Jobs & Hiring
              </Link>
            </PopoverPanel>
          </Popover>

          {/* Contact */}
          <Link
            href="/pages/contact"
            className="hover:text-blue-300 transition"
          >
            {t("contact")}
          </Link>

          {/* Language Switcher */}
          <Popover className="relative group">
            <PopoverButton className="flex items-center gap-1 hover:text-blue-300 transition">
              🌐 <ChevronDownIcon className="h-5 w-5" />
            </PopoverButton>
            <PopoverPanel className="absolute right-0 top-15 w-40 p-4 bg-[#070B2A] backdrop-blur-xl text-sm text-white/80 space-y-2 z-40 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
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
      <div
        className={`off-canvas fixed inset-0 bg-black z-50 h-lvh transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="off-canvas__inner py-2 px-5 bg-black border-b-2 border-[#683e2a]">
          <div className="flex justify-between">
            <div className="flex items-center gap-3 py-2">
              <Image
                src="/reetlogo.png"
                alt="Reet Technologies Logo"
                width={40}
                height={40}
                className="w-16 h-auto"
              />
              <span className="text-white font-semibold text-xl uppercase leading-tight">
                {t("reet")} <br /> {t("technologies")}
              </span>
            </div>

            <button onClick={toggleMobileMenu} aria-label="Close menu">
              <XMarkIcon className="h-8 w-8 text-white" />
            </button>
          </div>
        </div>
        <div className="off-canvas__inner py-5 px-7">
          <nav className="off-canvas__nav">
            <PopoverGroup className=" lg:gap-x-12 text-lg font-medium text-white capitalizeg">
              <Link href="/" className="transition" onClick={toggleMobileMenu}>
                {t("home")}
              </Link>

              {/* Services Toggle */}
              <button
                onClick={() => {
                  setShowServices(!showServices);
                  setShowExpertise(false);
                  setShowSolutions(false);
                  setMobileIndustriesopen(false);
                }}
                className="flex items-center capitalize justify-between w-full gap-x-1 text-white hover:text-[#eed3b8] focus:outline-none"
              >
                Services
                <ChevronDownIcon
                  className={`h-5 w-5 transition ${
                    showServices ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Services Section (conditionally rendered) */}
              {showServices && (
                <div className="pl-4 py-2 space-y-2 text-sm text-white/90">
                  <Link
                    href="/pages/services"
                    className="block hover:text-blue-300"
                    onClick={toggleMobileMenu}
                  >
                    Our Services & Solutions
                  </Link>

                  {/* Our Expertise */}
                  <button
                    onClick={() => {
                      setShowExpertise(!showExpertise);
                      setShowSolutions(false);
                    }}
                    className="flex justify-between items-center w-full"
                  >
                    <span>Our Expertise</span>
                    <ChevronDownIcon
                      className={`w-5 h-5 transition ${
                        showExpertise ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {showExpertise && (
                    <div className="ml-4 space-y-1">
                      {Enterprise.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={toggleMobileMenu}
                          className="block hover:text-blue-300"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Our Solutions */}
                  <button
                    onClick={() => {
                      setShowSolutions(!showSolutions);
                      setShowExpertise(false);
                    }}
                    className="flex justify-between items-center w-full"
                  >
                    <span>Our Solutions</span>
                    <ChevronDownIcon
                      className={`w-5 h-5 transition ${
                        showSolutions ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {showSolutions && (
                    <div className="ml-4 space-y-1">
                      {Solutions.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={toggleMobileMenu}
                          className="block hover:text-blue-300"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Industries */}
              <button
                onClick={() => setMobileIndustriesopen(!mobileIndustriesopen)}
                className="flex items-center capitalize justify-between w-full gap-x-1 text-white hover:text-[#eed3b8] focus:outline-none"
              >
                Industries
                <ChevronDownIcon
                  className={`h-5 w-5 transition ${
                    mobileIndustriesopen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileIndustriesopen && (
                <div className="ml-4 space-y-1 text-sm text-white/80 my-2">
                  {Industries.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={toggleMobileMenu}
                      className="block"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* Our Products */}
              <button
                onClick={() => setMobileProductopen(!mobileProductopen)}
                className="flex items-center capitalize justify-between w-full gap-x-1 text-white hover:text-[#eed3b8] focus:outline-none"
              >
                Our Products
                <ChevronDownIcon
                  className={`h-5 w-5 transition ${
                    mobileProductopen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileProductopen && (
                <div className="ml-4 space-y-1 text-sm text-white/80 my-2">
                  {Products.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={toggleMobileMenu}
                      className="block"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* About Us */}
              <button
                onClick={() => setMobileAboutUsopen(!mobileAboutUsopen)}
                className="flex items-center capitalize justify-between w-full gap-x-1 text-white hover:text-[#eed3b8] focus:outline-none"
              >
                About Us
                <ChevronDownIcon
                  className={`h-5 w-5 transition ${
                    mobileAboutUsopen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileAboutUsopen && (
                <div className="ml-4 space-y-1 text-sm text-white/80 my-2">
                  {AboutUs.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={toggleMobileMenu}
                      className="block"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* Careers */}
              <button
                onClick={() => setMobileCareersopen(!mobileCareersopen)}
                className="flex items-center capitalize justify-between w-full gap-x-1 text-white hover:text-[#eed3b8] focus:outline-none"
              >
                Careers
                <ChevronDownIcon
                  className={`h-5 w-5 transition ${
                    mobileCareersopen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileCareersopen && (
                <div className="ml-4 space-y-1 text-sm text-white/80 my-2">
                  {Careers.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={toggleMobileMenu}
                      className="block"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href="/pages/contact"
                className="hover:text-blue-300 transition"
                onClick={toggleMobileMenu}
              >
                {t("contact")}
              </Link>
            </PopoverGroup>
          </nav>
        </div>
      </div>
    </header>
  );
};
