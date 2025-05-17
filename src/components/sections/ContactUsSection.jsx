"use client";

import { Mail, Phone, MapPin, Play } from "lucide-react";
import Image from "next/image";

export default function ContactUsSection() {
  return (
    <div>
      {/* Top Banner Section */}

      {/* Info + Form Section */}
      <section className="py-20 px-6 lg:px-20 bg-[#070B2A]">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-5 lg:mb-3">
          {/* Left Info Card */}
          <div>
            <div className=" relative w-full h-fit overflow-hidden shadow-md">
              <video
                autoPlay
                loop
                muted
                playsInline
                // alt="Contact support"
                // fill
                className="object-cover"
              >
                <source src="/contactusvideo.mp4" type="video/mp4" />
              </video>
              {/* <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
                <button className="bg-white text-[#2244f8] rounded-full p-3 shadow-lg">
                  <Play className="w-6 h-6" />
                </button>
              </div> */}
            </div>
          </div>

          {/* Right Form */}
          <div className=" relative self-center">

             <div className="absolute -top-40 right-0">
            <img
              src="/footer-shape-1.png"
              alt="Nexus India Logo"
              className=""
            />
          </div>
            <h3 className="text-3xl font-bold text-white uppercase mb-6">
              Get In Touch
            </h3>
            <form className="space-y-4 text-white">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#2244f8]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#2244f8]"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#2244f8]"
              />
              <textarea
                rows={5}
                placeholder="Message"
                className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#2244f8]"
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-400 text-[#070B2A] px-6 py-3  hover:bg-yellow-500 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 bg-[#2244f8] text-white p-8 space-y-6">
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold">
              <Phone className="w-5 h-5" /> Call Us 7/24
            </h4>
            <p className="ml-7 text-xl font-bold mt-1">+91 797-290-5758</p>
          </div>
          {/* <hr className="border-white/20" /> */}
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold">
              <Mail className="w-5 h-5" /> Make a Quote
            </h4>
            <p className="ml-7 mt-1 font-medium">sales@reettechit.com</p>
            <p className="ml-7 mt-1 font-medium">reettech24@gmail.com</p>
          </div>
          {/* <hr className="border-white/20" /> */}
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold">
              <MapPin className="w-5 h-5" /> Location
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
