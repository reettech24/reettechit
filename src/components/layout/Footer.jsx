"use client";

import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

export const Footer = () => {
  return (
    <footer className="bg-[#0C0C0C] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Left - Logo + Tagline */}
          <div className="space-y-2">
            {/* <Image
              src="/reetlogo.png"
              alt="Reet Logo"
              width={140}
              height={80}
            /> */}
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
              Where Ideas meet execution.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-xl">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-white/70 text-md">
              <li>
                <a href="/pages/about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/pages/careers" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="/pages/services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/pages/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-2">
            <h4 className="font-semibold text-xl">Products</h4>
            <ul className=" gap-4 text-blue-500 font-medium text-md">
              <li>
                <a href="#">Nexus India</a>
              </li>
              <li>
                <a href="#">nexus Online Management</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
        </div>

        <hr className="border-white/20" />

        {/* Addresses + Follow Us */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div>
            <p className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🇮🇳</span>{" "}
              <strong className="text-xl">Reet Technologies Pvt. Ltd.</strong>
            </p>
            <p className="text-lg">
              Hinjewadi Phase 1, Pune,
              <br />
              Maharashtra 411028
            </p>
            <p className="flex items-center gap-2 mt-1">
              <PhoneIcon className="w-4 h-4" /> +91 1234567890
            </p>
          </div>

          <div className="space-y-2 md:col-span-2 md:col-start-4">
            <h4 className="font-semibold text-xl">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500">
                <Twitter size={30} />
              </a>
              <a href="#" className="text-blue-500">
                <Facebook size={30} />
              </a>
              <a href="#" className="text-blue-500">
                <Instagram size={30} />
              </a>
              <a href="#" className="text-blue-500">
                <Linkedin size={30} />
              </a>
              <a href="#" className="text-blue-500">
                <Youtube size={30} />
              </a>
            </div>
            <p className="flex items-center gap-2 text-xl">
              <EnvelopeIcon className="w-4 h-4" /> contact@reettechit.com
            </p>
          </div>
        </div>

        <hr className="border-white/20" />

        {/* Bottom links */}
        <div className="flex flex-col md:flex-row justify-between text-md text-white/70 gap-2">
          <p>
            © {new Date().getFullYear()} Reet Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="hover:text-white">
              About Us
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white">
              Terms & Condition
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white">
              Cancellation & Refund Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white">
              Shipping & Delivery Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
