'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import ProjectShowcase from '@/components/sections/ProjectsSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import AboutSection from '@/components/sections/AboutSection';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="bg-[#f0f0f0]">
    {/* Top Banner */}
    <section
      className="bg-[#070B2A] text-white py-52 text-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/breadcrumb.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          About US
        </h1>
        <p className="text-sm text-white/70">Home / Who We Are</p>
      </div>
    </section>
    <AboutSection />
    <ProjectShowcase />
    <TestimonialSection />
  </div>
  );
}
