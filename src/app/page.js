import Image from "next/image";
import "../styles/globals.css";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import NewsSection from "@/components/sections/NewsSection";
import HighlightsSection from "@/components/sections/HighlightsSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Partners />
      <ServicesSection />
      <NewsSection />
      <HighlightsSection />
    </main>
  );
}
