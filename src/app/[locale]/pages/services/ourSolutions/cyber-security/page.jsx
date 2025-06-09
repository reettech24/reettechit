"use client";
export const dynamic = "force-dynamic";

import ContactUsSection from "@/components/sections/ContactUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import React from "react";

export default function page() {
  return (
    <>
      <TestimonialSection />
      <ContactUsSection />
    </>
  );
}
