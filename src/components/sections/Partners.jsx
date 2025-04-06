'use client';
import React from 'react';
import Image from 'next/image';

const partners = [
  { name: 'Partner One', logo: '/logo.png' },
  { name: 'Partner Two', logo: '/logo.png' },
  { name: 'Partner Three', logo: '/logo.png' },
  { name: 'Partner Four', logo: '/logo.png' },
  { name: 'Partner Five', logo: '/logo.png' },
];

const Partners = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Partners</h2>
        <p className="text-gray-600 mb-10">
          We collaborate with industry-leading companies to deliver exceptional digital experiences.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center hover:scale-105 transition-transform">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
