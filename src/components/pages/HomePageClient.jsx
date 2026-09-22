"use client";

import Hero from "@/components/sections/Hero";
import AwsAboutHeroSection from "@/components/sections/AwsAboutHeroSection";
import AwsServicesCubesSection from "@/components/sections/AwsServicesCubesSection";
import AwsItSolutionsSection from "@/components/sections/AwsItSolutionsSection";
import AwsServicesCardsSection from "@/components/sections/AwsServicesCardsSection";
import AwsIntegrationsSection from "@/components/sections/AwsIntegrationsSection";
import AwsDigitalSolutionsSection from "@/components/sections/AwsDigitalSolutionsSection";
import AwsChooseUsSection from "@/components/sections/AwsChooseUsSection";
import AwsClientReviewsSection from "@/components/sections/AwsClientReviewsSection";
import ContactUsSection from "@/components/sections/ContactUsSection";
import CollaborationNetworkSection from "@/components/sections/CollaborationNetworkSection";

export default function HomePageClient() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#070B2A] text-white">
      <Hero />
      <AwsAboutHeroSection />
      <AwsServicesCubesSection />
      <AwsItSolutionsSection />
      <AwsServicesCardsSection />
      <AwsIntegrationsSection />
      <AwsDigitalSolutionsSection />
      <CollaborationNetworkSection/>
      <AwsChooseUsSection />
      <AwsClientReviewsSection />
      <ContactUsSection />
    </main>
  );
}
