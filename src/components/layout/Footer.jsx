import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react"; // Importing icons from lucide-react
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/20/solid"; // Heroicons for contact info

export const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10 border-t">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Left Section - Brand & About */}
        <div>
          {/* <h2 className="text-2xl font-bold">Puneeta Ranjan</h2> */}
          <Image
            alt=""
            src="/logo.png"
            width={100}
            height={100}
            className=" w-60"
          />

          <p className="text-sm mt-2">
            Reet Technologies is a software development company that specializes
            in building high-quality web and mobile applications.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/about" className="hover:text-gray-600">
                About
              </a>
            </li>
            {/* <li><a href="/paintings" className="hover:text-gray-600">Painting Categories</a></li>
            <li><a href="/past-shows" className="hover:text-gray-600">Past Shows</a></li> */}
            {/* <li><a href="/media" className="hover:text-gray-600">Media</a></li> */}
            <li>
              <a href="/media" className="hover:text-gray-600">
                Careers
              </a>
            </li>
            <li>
              <a href="/blogs" className="hover:text-gray-600">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-600">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact & Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <div className="mt-2 space-y-2">
            <p className="flex items-center">
              <EnvelopeIcon className="h-5 w-5 mr-2 text-gray-600" />
              <a
                href="mailto:info@puneetaranjan.com"
                className="hover:text-gray-600"
              >
                work@reettechit.com
              </a>
            </p>
            <p className="flex items-center">
              <PhoneIcon className="h-5 w-5 mr-2 text-gray-600" />
              +91 1234567890
            </p>
            <p className="flex items-center">
              <MapPinIcon className="h-5 w-5 mr-2 text-gray-600" />
              Pune, India
            </p>
          </div>

          <h3 className="text-lg font-semibold mt-4">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-500 mt-6 border-t pt-4">
        © {new Date().getFullYear()} Reet Technologies. All Rights Reserved.
      </div>
    </footer>
  );
};
