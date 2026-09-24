"use client";

import React from "react";
import { Check, ArrowUpRight } from "lucide-react";

const BACKGROUND_IMAGE = "/aboutheroimage2.jpg";

// Replace this with your WhatsApp number.
// Format: country code + number, without +, spaces or -
const WHATSAPP_NUMBER = "919022993526";

const plans = [
  {
    id: "basic",
    name: "Basic",
    subtitle: "Single-page website",
    price: "₹ 1,100/-",
    gst: "+ GST",
    usd: "≈ $20 USD",
    featured: false,
    iconType: "single",
    features: [
      "One scrollable landing page",
      "Mobile-friendly layout",
      "Contact form & map",
      "3-day turnaround",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    subtitle: "3-page website",
    price: "₹ 2,500/-",
    gst: "+ GST",
    usd: "≈ $40 USD",
    featured: true,
    badgeText: "Most chosen",
    iconType: "triple",
    features: [
      "Home, About & Services/Contact pages",
      "Mobile-friendly layout",
      "Contact form & map",
      "Basic on-page SEO setup",
      "5-day turnaround",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    subtitle: "7-page website",
    price: "₹ 5,000/-",
    gst: "+ GST",
    usd: "≈ $100 USD",
    featured: false,
    iconType: "six",
    features: [
      "Up to 7 pages (Home, About, Services, Blog, Contact + 2 more)",
      "Mobile-friendly layout",
      "Contact form & map",
      "On-page SEO across all pages",
      "7-day turnaround",
    ],
  },
];

const RenderTopIcon = ({ type }) => {
  if (type === "single") {
    return (
      <div className="flex items-center">
        <div className="h-4 w-4 rounded-[3px] border border-white/20 bg-white/10" />
      </div>
    );
  }

  if (type === "triple") {
    return (
      <div className="flex items-end gap-1">
        <div className="h-5 w-2.5 rounded-[2px] bg-[#f6a821]" />
        <div className="h-5 w-2.5 rounded-[2px] border border-[#f6a821]/40 bg-[#f6a821]/20" />
        <div className="h-5 w-2.5 rounded-[2px] border border-[#f6a821]/40 bg-[#f6a821]/20" />
      </div>
    );
  }

  return (
    <div className="flex items-end gap-1">
      <div className="h-5 w-2 rounded-[2px] bg-white/50" />
      <div className="h-5 w-2 rounded-[2px] bg-white/50" />
      <div className="h-5 w-2 rounded-[2px] border border-white/20 bg-white/10" />
      <div className="h-5 w-2 rounded-[2px] border border-white/20 bg-white/10" />
      <div className="h-5 w-2 rounded-[2px] border border-white/20 bg-white/10" />
      <div className="h-5 w-2 rounded-[2px] border border-white/20 bg-white/10" />
    </div>
  );
};

const getWhatsAppUrl = (plan) => {
  const message = `Hi REET Technologies,

I'm interested in the ${plan.name} website package.

Package: ${plan.name}
Website: ${plan.subtitle}
Price: ${plan.price} ${plan.gst}
International: ${plan.usd}

I would like to discuss the package and get started.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
};

export default function WebsitePlansSection() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#050505] text-white">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={BACKGROUND_IMAGE}
          alt=""
          className="absolute -right-[10%] top-0 h-full w-[65%] object-cover object-center opacity-[0.16] grayscale"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/95 via-[55%] to-[#050505]/35" />

        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050505] to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28 xl:px-20">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#f6a821]/50" />

              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">
                Website Services
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[0.92] tracking-[-0.055em] text-white sm:text-5xl md:text-6xl lg:text-[72px]">
              Professional Website
              <br />
              <span className="text-[#f6a821]">
                Designs for Your Business
              </span>
            </h2>
          </div>

          <div className="max-w-[360px] pb-1">
            <p className="text-[13px] leading-[1.8] text-white/40">
              Modern, high-converting websites designed to make your business
              look credible, professional, and ready to scale.
            </p>

            <div className="mt-4 font-mono text-[8px] uppercase tracking-[0.25em] text-[#f6a821]/60">
              India · Worldwide
            </div>
          </div>
        </div>

        {/* =====================================================
            PRICING GRID
        ===================================================== */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`
                group relative flex flex-col justify-between
                overflow-hidden rounded-[30px]
                border p-8
                backdrop-blur-2xl
                transition-all duration-500
                hover:-translate-y-1.5

                ${
                  plan.featured
                    ? "border-[#f6a821]/30 bg-[#0e0e0e]/85 hover:border-[#f6a821]/70 hover:shadow-[0_0_45px_rgba(246,168,33,0.16),0_25px_70px_rgba(0,0,0,0.45)]"
                    : "border-white/[0.08] bg-[#0b0b0b]/70 hover:border-[#f6a821]/35 hover:bg-[#0d0d0d]/85 hover:shadow-[0_0_45px_rgba(246,168,33,0.10),0_25px_70px_rgba(0,0,0,0.55)]"
                }
              `}
            >
              {/* =================================================
                  HOVER GLOW
                  Invisible normally.
                  Appears only when card is hovered.
              ================================================= */}
              <div
                className={`
                  pointer-events-none absolute -inset-[1px]
                  rounded-[30px]
                  opacity-0
                  blur-xl
                  transition-opacity duration-500
                  group-hover:opacity-100
                  ${
                    plan.featured
                      ? "bg-[#f6a821]/[0.10]"
                      : "bg-[#f6a821]/[0.055]"
                  }
                `}
              />

              {/* Keep card content above glow */}
              <div className="relative z-10 flex h-full flex-col justify-between">

                {/* =================================================
                    TOP
                ================================================= */}
                <div>
                  <div className="mb-6 pt-1">
                    <RenderTopIcon type={plan.iconType} />
                  </div>

                  {/* Featured Badge */}
                  {plan.featured && (
                    <div className="absolute right-0 top-0">
                      <span className="inline-block rounded-full border border-[#f6a821]/50 bg-[#f6a821] px-4 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#050505] shadow-[0_4px_15px_rgba(246,168,33,0.15)]">
                        {plan.badgeText}
                      </span>
                    </div>
                  )}

                  {/* =================================================
                      PLAN HEADER
                  ================================================= */}
                  <h3 className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#f6a821]">
                    {plan.name}
                  </h3>

                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
                    {plan.subtitle}
                  </p>

                  {/* =================================================
                      PRICING
                  ================================================= */}
                  <div className="my-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {plan.price}
                      </span>
                    </div>

                    <div className="mt-2 flex items-center gap-2 font-mono text-[11px] text-white/40">
                      <span>{plan.gst}</span>

                      <span>•</span>

                      <span className="font-semibold text-[#f6a821]/80">
                        {plan.usd}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="mb-6 h-px w-full bg-white/[0.08]" />

                  {/* =================================================
                      FEATURES
                  ================================================= */}
                  <ul className="mb-8 space-y-3.5">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[12px] leading-5 text-white/70"
                      >
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#f6a821]/30 bg-[#f6a821]/10 text-[#f6a821]">
                          <Check
                            className="h-3 w-3"
                            strokeWidth={2.5}
                          />
                        </div>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* =================================================
                    WHATSAPP BUTTON
                ================================================= */}
                <a
                  href={getWhatsAppUrl(plan)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    group/btn flex h-12 w-full
                    items-center justify-between
                    rounded-2xl px-5
                    text-xs font-semibold
                    transition-all duration-300

                    ${
                      plan.featured
                        ? "bg-[#f6a821] text-[#050505] hover:bg-[#ffb638] hover:shadow-[0_8px_30px_rgba(246,168,33,0.25)]"
                        : "border border-white/[0.12] bg-white/[0.04] text-white hover:border-[#f6a821]/40 hover:bg-white/[0.08] hover:text-[#f6a821] hover:shadow-[0_8px_30px_rgba(246,168,33,0.08)]"
                    }
                  `}
                >
                  <span>Connect on WhatsApp</span>

                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}