"use client";

import React from "react";
import { Mail, Phone, MapPin, Play } from "lucide-react";
import Image from "next/image";

export default function page() {
  return (
    <div>
      {/* Top Banner Section */}
      <section
        className="bg-[#070B2A] text-white py-52 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/breadcrumb.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#070B2A] opacity-70"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
          <p className="text-sm text-white/70">Home / Contact Us</p>
        </div>
      </section>

      {/* Info + Form Section */}
      <section className="py-20 px-6 lg:px-20 bg-[#070B2A] overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Info Card */}
          <div>
            <div className="bg-[#2244f8] text-white p-8 rounded-lg space-y-6">
              <div>
                <h4 className="flex items-center gap-2 text-lg font-semibold">
                  <Phone className="w-5 h-5" /> Call Us 7/24
                </h4>
                <p className="ml-7 text-xl font-bold mt-1">+91 123-456-7890</p>
              </div>
              <hr className="border-white/20" />
              <div>
                <h4 className="flex items-center gap-2 text-lg font-semibold">
                  <Mail className="w-5 h-5" /> Make a Quote
                </h4>
                <p className="ml-7 mt-1 font-medium">support@reettechit.com</p>
              </div>
              <hr className="border-white/20" />
              <div>
                <h4 className="flex items-center gap-2 text-lg font-semibold">
                  <MapPin className="w-5 h-5" /> Location
                </h4>
                <p className="ml-7 mt-1 font-medium">
                  Hinjewadi Phase 1, Pune, Maharashtra
                </p>
              </div>
            </div>

            <div className="mt-8 relative w-full h-64 rounded-md overflow-hidden shadow-md">
              <Image
                src="/illu.png"
                alt="Contact support"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
                <button className="bg-white text-[#2244f8] rounded-full p-3 shadow-lg">
                  <Play className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Get In Touch</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 placeholder-white/40 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2244f8]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 placeholder-white/40 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2244f8]"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 placeholder-white/40 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2244f8]"
              />
              <textarea
                rows={5}
                placeholder="Message"
                className="w-full px-4 py-3 placeholder-white/40 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2244f8]"
              ></textarea>
              <button
                type="submit"
                className="bg-[#2244f8] text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        {/* <div className="absolute -bottom-140 -right-0 opacity-20 w-screen">
          <img src="/p1.png" alt="Nexus India Logo" className="" />
        </div> */}
      </section>

      {/* Embedded Google Map */}
      <section className="h-[400px] w-full">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3685740577196!2d73.7300972751556!3d18.509983382576288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbb6dfeb3b81%3A0x84de89a49ff45a6f!2sHinjewadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={""}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d460479.901003808!2d73.23563575744629!3d18.448916640527468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eacd9ab69bf7%3A0x53519bbf068e9be9!2sRenaissance%20-%20Project%20by%20Krishna%20Developers!5e1!3m2!1sen!2sus!4v1748289989375!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={""}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10264.101790527155!2d73.8422636895683!3d18.45182023491473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eacd9ab69bf7%3A0x53519bbf068e9be9!2sRenaissance%20-%20Project%20by%20Krishna%20Developers!5e1!3m2!1sen!2sus!4v1748290274174!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={""}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
