'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button'; // Optional: use your design system

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-gradient-to-br from-white to-gray-50 overflow-hidden px-6 md:px-16">
      {/* Background Orb/Effect */}
      <div className="absolute -top-10 -right-10 w-[500px] h-[500px] bg-gradient-to-br from-purple-100 via-white to-blue-100 rounded-full opacity-30 blur-3xl z-0" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="flex-1 text-center md:text-left max-w-xl space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
            Building Future-Ready <br />
            <span className="text-blue-600">Web & Mobile Apps</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Reet Technologies is a software development company that specializes in building high-quality web and mobile applications tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition">
              Get a Free Quote
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
              View Our Work
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 relative w-full">
          <Image
            src="/illu2.png" // Replace with your custom futuristic graphic
            alt="Tech Illustration"
            width={800}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
