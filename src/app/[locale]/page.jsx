'use client';
import AboutSection from '@/components/sections/AboutSection';
import ContactForm from '@/components/sections/ContactForm';
import ContactUsSection from '@/components/sections/ContactUsSection';
import Features from '@/components/sections/Features';
import Hero from '@/components/sections/Hero';
import HighlightsSection from '@/components/sections/HighlightsSection';
import ITSolutionsSection from '@/components/sections/ITSolutionsSection';
import NewsSection from '@/components/sections/NewsSection';
import NexusSolutionsSection from '@/components/sections/NexusSolutionsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TestimonialSection from '@/components/sections/TestimonialSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <AboutSection />
      <ITSolutionsSection />
      {/* <ContactForm />
      <Features />
      // <HighlightsSection /> */}
      <TestimonialSection />
      <NexusSolutionsSection />
      <ProjectsSection />
      {/* <ServicesSection />
      <NewsSection /> */}
      <ContactUsSection />
    </main>
  );
}
