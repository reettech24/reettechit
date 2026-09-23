"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Quote,
  Star,
} from "lucide-react";
import { useTranslations } from "next-intl";

const partnerImages = {
  testimonial1: "/partners/dimplechemicals.png",
  testimonial2: "/partners/logo3.png",
  testimonial3: "/partners/puneeta.png",
  testimonial4: "/Client/Texcarp.png",
  testimonial5: "/Client/beyond6senses.jpeg",
};

const defaultTestimonialKeys = [
  "testimonial1",
  "testimonial2",
  "testimonial3",
  "testimonial4",
  "testimonial5",
];

export default function AwsClientReviewsSection() {
  const t = useTranslations("testimonials");
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const reviewsData = defaultTestimonialKeys.map((key, index) => ({
    id: index + 1,
    name: t(`${key}.name`),
    role: t(`${key}.role`),
    image:
      partnerImages[key] ||
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
    rating: 5,
    review: t(`${key}.text`),
  }));

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const interval = setInterval(() => {
      if (isPaused) return;

      const cardWidth = 430;
      const maxScroll =
        container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - 20) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: cardWidth,
          behavior: "smooth",
        });
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleScroll = (direction) => {
    const container = scrollRef.current;

    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -430 : 430,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#070B2A]
        px-6
        py-24
        text-white
        sm:px-10
        lg:px-16
        xl:px-24
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Soft blue atmosphere */}
        <div
          className="
            absolute
            left-1/2
            top-[-300px]
            h-[600px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-[#0F62FE]/[0.08]
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            bottom-[-250px]
            right-[-200px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#38BDF8]/[0.045]
            blur-[160px]
          "
        />

        {/* Very subtle grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.015]
            [background-image:linear-gradient(rgba(125,211,252,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.6)_1px,transparent_1px)]
            [background-size:100px_100px]
          "
        />

        {/* Bottom gradient */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[35%]
            bg-gradient-to-t
            from-[#030712]/40
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-[1440px]">
        {/* Header */}
        <div
          className="
            grid
            gap-10
            lg:grid-cols-[1.15fr_0.85fr]
            lg:items-end
            lg:gap-24
          "
        >
          {/* Left */}
          <div>
            {/* Label */}
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-7 bg-[#38BDF8]" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#7DD3FC]
                "
              >
                Testimonials
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                max-w-[700px]
                text-[42px]
                font-semibold
                leading-[1.02]
                tracking-[-0.045em]
                sm:text-[54px]
                lg:text-[76px]
              "
            >
              What our
              <br />

              <span className="text-[#7DD3FC]">
                clients say.
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="lg:pb-1">
            <p
              className="
                max-w-[540px]
                text-[16px]
                leading-7
                text-slate-300
                sm:text-[17px]
              "
            >
              We believe the strongest measure of our work is the
              experience of the businesses and teams we work with.
              Here is what they have to say about working with us.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-8 bg-white/10" />

              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-slate-500
                "
              >
                Client Feedback
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            CONTROLS
        ====================================================== */}

        <div className="mt-14 flex items-center justify-between lg:mt-16">
          <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
            Selected experiences
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Previous testimonial"
              className="
                group
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.035]
                text-white/50
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-[#38BDF8]/30
                hover:bg-[#38BDF8]/[0.08]
                hover:text-[#7DD3FC]
              "
            >
              <ArrowLeft
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:-translate-x-0.5
                "
                strokeWidth={1.5}
              />
            </button>

            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Next testimonial"
              className="
                group
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.035]
                text-white/50
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-[#38BDF8]/30
                hover:bg-[#38BDF8]/[0.08]
                hover:text-[#7DD3FC]
              "
            >
              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                "
                strokeWidth={1.5}
              />
            </button>
          </div>
        </div>

        {/* =====================================================
            TESTIMONIAL CARDS
        ====================================================== */}

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="
            mt-7
            flex
            gap-5
            overflow-x-auto
            pb-5
            snap-x
            snap-mandatory
            scrollbar-none
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {reviewsData.map((client) => (
            <ReviewCard
              key={client.id}
              client={client}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   REVIEW CARD
============================================================ */

function ReviewCard({ client }) {
  return (
    <article
      className="
        group
        relative
        min-w-[calc(100vw-48px)]
        snap-center
        overflow-hidden
        rounded-[24px]
        border
        border-white/[0.08]
        bg-white/[0.035]
        p-6
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:border-[#38BDF8]/25
        hover:bg-white/[0.055]
        sm:min-w-[400px]
        sm:p-7
        lg:min-w-[430px]
      "
    >
      {/* =====================================================
          GLASS HIGHLIGHT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-8
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#38BDF8]/35
          to-transparent
        "
      />

      {/* Soft internal glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-48
          w-48
          rounded-full
          bg-[#38BDF8]/[0.055]
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-[#38BDF8]/[0.10]
        "
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="
                font-mono
                text-[9px]
                tracking-[0.2em]
                text-[#7DD3FC]/60
              "
            >
              0{client.id}
            </span>

            <span className="h-px w-5 bg-white/[0.10]" />

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-slate-500
              "
            >
              Client
            </span>
          </div>

          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/[0.08]
              bg-white/[0.025]
              text-[#7DD3FC]/50
              transition-all
              duration-300
              group-hover:border-[#38BDF8]/20
              group-hover:text-[#7DD3FC]
            "
          >
            <Quote
              className="h-4 w-4"
              strokeWidth={1.3}
            />
          </div>
        </div>

        {/* Review */}
        <div className="mt-8">
          <p
            className="
              min-h-[145px]
              text-[15px]
              font-normal
              leading-[1.8]
              text-slate-300
              transition-colors
              duration-300
              group-hover:text-slate-200
            "
          >
            “{client.review}”
          </p>
        </div>

        {/* Divider */}
        <div className="my-7 h-px bg-white/[0.08]" />

        {/* Footer */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-4">
            {/* Avatar */}
            <div
              className="
                relative
                h-11
                w-11
                shrink-0
                rounded-full
                border
                border-[#38BDF8]/20
                bg-[#070B2A]
                p-[2px]
              "
            >
              <img
                src={client.image}
                alt={client.name}
                loading="lazy"
                className="
                  h-full
                  w-full
                  rounded-full
                  object-contain
                  bg-white/10
                  p-0.5
                  transition-all
                  duration-500
                "
              />
            </div>

            <div className="min-w-0">
              <h3
                className="
                  truncate
                  text-[13px]
                  font-semibold
                  text-white
                "
              >
                {client.name}
              </h3>

              <p
                className="
                  mt-1
                  truncate
                  text-[10px]
                  uppercase
                  tracking-[0.12em]
                  text-slate-500
                "
              >
                {client.role}
              </p>
            </div>
          </div>

          {/* Rating */}
          <div
            className="
              flex
              shrink-0
              items-center
              gap-1.5
              rounded-full
              border
              border-white/[0.08]
              bg-white/[0.035]
              px-3
              py-1.5
            "
          >
            <Star
              className="h-3 w-3 text-[#7DD3FC]"
              fill="currentColor"
              strokeWidth={1}
            />

            <span
              className="
                text-[9px]
                font-medium
                tracking-[0.08em]
                text-slate-400
              "
            >
              {client.rating}.0
            </span>
          </div>
        </div>

        {/* Hover arrow */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            right-0
            flex
            h-7
            w-7
            translate-y-2
            items-center
            justify-center
            text-[#38BDF8]/0
            transition-all
            duration-300
            group-hover:translate-y-0
            group-hover:text-[#38BDF8]/60
          "
        >
          <ArrowUpRight
            className="h-4 w-4"
            strokeWidth={1.3}
          />
        </div>
      </div>
    </article>
  );
}