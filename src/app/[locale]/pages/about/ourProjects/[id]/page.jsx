"use client";

export const dynamic = "force-dynamic";

import React, { use, useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { getProjectById, projectsData } from "@/data/projectsData";
import "./project-detail-erp-software.css";
import "../project-page.css";

export default function DynamicProjectPage({ params }) {
  const resolvedParams = use(params);
  const projectId = resolvedParams?.id;

  const project = getProjectById(projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  // Asset Mappings per project ID matching project-pages codebase
  const getProjectAssets = (id) => {
    switch (id) {
      case "chemical-erp":
        return {
          heroBg: "/assets/images/section1-bg-chemical-erp.jpeg",
          rightImg: "/assets/images/section1-right-img-chemical-erp.png",
          ctaBg: "/assets/images/section4-bg-chemical-erp.jpeg",
          techBg: "/assets/images/section5bg.png",
          title: "CRM ERP FOR CORPORATE COMPANIES",
          category: "Enterprise Resource Planning",
          desc: "A specialized ERP solution designed for formula-based chemical manufacturing, lot traceability, regulatory compliance, special zoning, and automated hazard labeling.",
          industry: "Chemical Manufacturing and Corporate ERP",
          projectType: "Web Application",
          liveUrl: "https://chemical-erp.vercel.app",
          gallery: Array.from({ length: 25 }, (_, i) => ({
            title: `Dashboard View ${i + 1}`,
            image: `/assets/images/${i + 1}.jpg`,
          })),
        };

      case "nexus-india":
        return {
          heroBg: "/assets/images/section1-bg-nexus-india.png",
          rightImg: "/assets/images/right-img-section1-nexus-india.png",
          ctaBg: "/assets/images/section4-bg-chemical-erp.jpeg",
          techBg: "/assets/images/section5bg.png",
          title: "NEXUS INDIA",
          category: "Ecommerce and Custom Software",
          desc: "A professional business platform providing innovative solutions and services designed to help businesses grow, connect with customers, and build a strong digital presence.",
          industry: "Ecommerce",
          projectType: "Software",
          liveUrl: "https://nexusindiaonline.com",
          gallery: Array.from({ length: 25 }, (_, i) => ({
            title: `Nexus Screen ${i + 1}`,
            image: `/assets/images/nexus-${i + 1}.png`,
          })),
        };

      case "beyond-six-senses":
        return {
          heroBg: "/assets/images/section1-bg-beyond-six-senses.png",
          rightImg: "/assets/images/right-img-section1-beyond-six-senses.png",
          ctaBg: "/assets/images/section4-bg-chemical-erp.jpeg",
          techBg: "/assets/images/section5bg.png",
          title: "BEYOND SIX SENSES",
          category: "Website & Consulting",
          desc: "A transformational wellness and counselling web portal designed to inspire mindfulness, session scheduling, and personal evolution.",
          industry: "Wellness & Health",
          projectType: "Website",
          liveUrl: "https://beyondsixsenses.com",
          gallery: Array.from({ length: 15 }, (_, i) => ({
            title: `Beyond Six Senses Screen ${i + 1}`,
            image: `/assets/images/${(i % 12) + 1}.jpg`,
          })),
        };

      case "smart-tailoring":
        return {
          heroBg: "/assets/images/section1-bg-smart-tailoring.png",
          rightImg: "/assets/images/right-img-section1-smart-tailoring.png",
          ctaBg: "/assets/images/section4-bg-chemical-erp.jpeg",
          techBg: "/assets/images/section5bg.png",
          title: "SMART TAILORING",
          category: "Website & Custom Software",
          desc: "A digital bespoke tailoring solution simplifying custom measurements, fabric selection, order tracking, and fitting management.",
          industry: "Apparel & Retail",
          projectType: "Web Application",
          liveUrl: "https://smarttailoring.vercel.app",
          gallery: Array.from({ length: 10 }, (_, i) => ({
            title: `Tailoring Screen ${i + 1}`,
            image: `/assets/images/sonali-creation-${i + 1}.png`,
          })),
        };

      case "marigold":
        return {
          heroBg: "/assets/images/marigold-hero-bg.png",
          rightImg: "/assets/images/marigold-right-img.png",
          ctaBg: "/assets/images/section4-bg-chemical-erp.jpeg",
          techBg: "/assets/images/section5bg.png",
          title: "MARIGOLD",
          category: "Website",
          desc: "Luxury hospitality web portal designed for venue bookings, resort showcases, and fine dining reservations.",
          industry: "Hospitality & Events",
          projectType: "Website",
          liveUrl: "https://marigold.vercel.app",
          gallery: Array.from({ length: 10 }, (_, i) => ({
            title: `Marigold Screen ${i + 1}`,
            image: `/assets/images/${i + 1}.jpg`,
          })),
        };

      case "cajnk":
        return {
          heroBg: "/assets/images/cajnk-hero-bg.png",
          rightImg: "/assets/images/cajnk-right-side-img.png",
          ctaBg: "/assets/images/section4-bg-chemical-erp.jpeg",
          techBg: "/assets/images/section5bg.png",
          title: "CAJNK",
          category: "Website",
          desc: "Corporate auditing and legal tax consulting portal built to streamline client document uploads and statutory compliance.",
          industry: "Finance & Advisory",
          projectType: "Website",
          liveUrl: "https://cajnk.vercel.app",
          gallery: Array.from({ length: 10 }, (_, i) => ({
            title: `CAJNK Screen ${i + 1}`,
            image: `/assets/images/${i + 1}.jpg`,
          })),
        };

      case "lpc":
        return {
          heroBg: "/assets/images/lpc-facility-bg-hero section.png",
          rightImg: "/assets/images/lpc-right-side-img.png",
          ctaBg: "/assets/images/section4-bg-chemical-erp.jpeg",
          techBg: "/assets/images/section5bg.png",
          title: "LPC CONSULTING",
          category: "Website",
          desc: "Corporate legal advisory web presence showcasing dispute resolution, contract archives, and client consultations.",
          industry: "Legal Services",
          projectType: "Website",
          liveUrl: "https://lpcconsulting.vercel.app",
          gallery: Array.from({ length: 10 }, (_, i) => ({
            title: `LPC Screen ${i + 1}`,
            image: `/assets/images/${i + 1}.jpg`,
          })),
        };

      case "civik-experiences":
        return {
          heroBg: "/assets/images/civik-experiences-hero-bg.png",
          rightImg: "/assets/images/civik-experiences-right-img.png",
          ctaBg: "/assets/images/section4-bg-chemical-erp.jpeg",
          techBg: "/assets/images/section5bg.png",
          title: "CIVIK EXPERIENCES",
          category: "Website",
          desc: "Experiential tourism and adventure travel portal featuring dynamic trip itineraries and online reservation checkout.",
          industry: "Travel & Adventure",
          projectType: "Website",
          liveUrl: "https://civikexperiences.vercel.app",
          gallery: Array.from({ length: 10 }, (_, i) => ({
            title: `Civik Screen ${i + 1}`,
            image: `/assets/images/${i + 1}.jpg`,
          })),
        };

      case "vaachi":
        return {
          heroBg: "/assets/images/vaachi-bg-hero-section-img.png",
          rightImg: "/assets/images/vaachi-right-side-img.png",
          ctaBg: "/assets/images/section4-bg-chemical-erp.jpeg",
          techBg: "/assets/images/section5bg.png",
          title: "VAACHI",
          category: "Website",
          desc: "Luxury artisan jewelry digital gallery showcasing hand-crafted collections with progressive high-res imagery.",
          industry: "Jewelry & Luxury",
          projectType: "Website",
          liveUrl: "https://vaachi.vercel.app",
          gallery: Array.from({ length: 10 }, (_, i) => ({
            title: `Vaachi Screen ${i + 1}`,
            image: `/assets/images/${i + 1}.jpg`,
          })),
        };

      case "texcarp":
      default:
        return {
          heroBg: "/assets/images/section1bg.png",
          rightImg: "/assets/images/texcarp-project.png",
          ctaBg: "/assets/images/section4-bg-chemical-erp.jpeg",
          techBg: "/assets/images/section5bg.png",
          title: project?.title || "TEXCARP",
          category: project?.category || "Website & Software",
          desc: project?.desc || "Industrial textile manufacturing and loom telemetry management portal.",
          industry: "Textile Manufacturing",
          projectType: "Web Application",
          liveUrl: "https://texcarp.vercel.app",
          gallery: Array.from({ length: 10 }, (_, i) => ({
            title: `Screen ${i + 1}`,
            image: `/assets/images/${i + 1}.jpg`,
          })),
        };
    }
  };

  const assets = getProjectAssets(projectId);

  const techStackList = [
    { name: "React", icon: "/assets/images/react.png" },
    { name: "Node.js", icon: "/assets/images/node-js.png" },
    { name: "MongoDB", icon: "/assets/images/mongodb.png" },
    { name: "AWS", icon: "/assets/images/aws.png" },
    { name: "Figma", icon: "/assets/images/figma.png" },
  ];

  const [activeImage, setActiveImage] = useState(assets.gallery[0]?.image || "/assets/images/1.jpg");

  // Reset active image when project changes
  useEffect(() => {
    if (assets.gallery[0]?.image) {
      setActiveImage(assets.gallery[0].image);
    }
  }, [projectId]);

  if (!project) {
    return (
      <div className="reet-portfolio min-h-screen flex items-center justify-center p-8 text-center">
        <div className="bg-[#111318] border border-sky-500/30 p-10 rounded-2xl max-w-md">
          <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-slate-400 mb-6 text-sm">
            Requested project standard ID "{projectId}" does not exist.
          </p>
          <Link
            href="/pages/about/ourProjects"
            className="px-6 py-3 bg-[#38bdf8] text-slate-950 font-bold rounded-lg inline-block text-sm"
          >
            ← Back to All Projects
          </Link>
        </div>
      </div>
    );
  }

  // Calculate Next & Prev project IDs
  const currentIndex = projectsData.findIndex((p) => p.id === project.id);
  const prevProject = projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <div className="project-detail-page pt-16">
      {/* BACK NAVIGATION */}
   

      {/* SECTION 1: HERO OVERVIEW */}
      <section
        className="project-hero-section"
        style={{ backgroundImage: `url(${assets.heroBg})` }}
      >
        <div className="project-hero-container">
          <div className="project-hero-left">
            <div className="project-number-label-group">
              <div className="project-detail-label-line-wrap">
                <span className="project-detail-line"></span>
                <span className="project-detail-label">PROJECT OVERVIEW</span>
              </div>
            </div>

            <h1 className="project-hero-title">
              {assets.title.split(" ")[0]} <br />
              <span className="highlight-electric">
                {assets.title.split(" ").slice(1).join(" ") || assets.title}
              </span>
            </h1>

            <div className="project-category-pill">{assets.category}</div>

            <p className="project-hero-desc">{assets.desc}</p>

            <div className="project-meta-row">
              <div className="project-meta-item">
                <span className="meta-label">Industry</span>
                <span className="meta-value">{assets.industry}</span>
              </div>

              <div className="project-meta-divider"></div>

              <div className="project-meta-item">
                <span className="meta-label">Project Type</span>
                <span className="meta-value">{assets.projectType}</span>
              </div>
            </div>

            {assets.liveUrl && (
              <div className="mt-8">
                <a
                  href={assets.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#38bdf8] text-[#070b2a] font-extrabold rounded-xl hover:bg-sky-300 transition-all shadow-lg shadow-sky-500/25 text-sm group"
                >
                  <span>Visit Live Project</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            )}
          </div>

          <div className="project-hero-right">
            <div className="project-visual-wrapper">
              <img src={assets.rightImg} alt={`${assets.title} Visualization`} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TECH STACK */}
      <section
        className="project-tech-section"
        style={{ backgroundImage: `url(${assets.techBg})` }}
      >
        <div className="project-tech-container">
          <div className="project-tech-left">
            <div className="project-tech-label-group">
              <span className="project-tech-line"></span>
              <span className="project-tech-label">TECH STACK</span>
            </div>

            <h2 className="project-tech-title">
              Technologies <br />
              <span className="highlight-electric">We Used</span>
            </h2>

            <p className="project-tech-desc">
              A powerful combination of modern technologies to build a secure,
              scalable, and high-performance solution.
            </p>
          </div>

          <div className="project-tech-right">
            <div className="project-tech-grid">
              {techStackList.map((tech, index) => (
                <div className="project-tech-card" key={index}>
                  <div className="project-tech-icon-box">
                    <img src={tech.icon} alt={tech.name} />
                  </div>
                  <span className="project-tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROJECT GALLERY - Display only for Ecommerce & Software / Web Applications */}
      {assets.projectType !== "Website" && (
        <section
          className="project-photos-section"
          style={{ backgroundImage: `url(${assets.techBg})` }}
        >
          <div className="project-photos-outer-wrapper">
            <div className="project-photos-container">
              <div className="project-photos-left">
                <div className="project-photos-number-label-group">
                  <div className="project-photos-label-line-wrap">
                    <span className="project-photos-line"></span>
                    <span className="project-photos-label">PROJECT GALLERY</span>
                  </div>
                </div>

                <h2 className="project-photos-title">
                  Project <br />
                  <span className="highlight-electric">Gallery</span>
                </h2>

                <p className="project-photos-desc">
                  Here are some glimpses of the project, showcasing the design and
                  functionality.
                </p>
              </div>

              <div className="project-photos-right">
                <div className="project-gallery-wrapper">
                  <div className="project-large-screenshot">
                    <img src={activeImage} alt={`${assets.title} Active Gallery`} />
                  </div>
                </div>
              </div>
            </div>

            <div className="project-scroller-wrapper">
              <div className="project-scroller-track">
                {assets.gallery.concat(assets.gallery).map((item, index) => (
                  <div
                    className="project-small-screenshot-card"
                    key={index}
                    onClick={() => setActiveImage(item.image)}
                  >
                    <img src={item.image} alt={item.title} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: PREVIOUS / NEXT PROJECT SWITCHER */}
      <section className="max-w-[1600px] mx-auto px-8 py-10 border-t border-slate-800/80">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href={`/pages/about/ourProjects/${prevProject.id}`}
            className="w-full sm:w-auto p-4 bg-[#111318] border border-slate-800 rounded-xl hover:border-sky-500/50 transition-all text-left block"
          >
            <span className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-wider block mb-1">
              ← PREVIOUS PROJECT
            </span>
            <span className="text-base font-bold text-white block">
              {prevProject.title}
            </span>
          </Link>

          <Link
            href={`/pages/about/ourProjects/${nextProject.id}`}
            className="w-full sm:w-auto p-4 bg-[#111318] border border-slate-800 rounded-xl hover:border-sky-500/50 transition-all text-right block"
          >
            <span className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-wider block mb-1">
              NEXT PROJECT →
            </span>
            <span className="text-base font-bold text-white block">
              {nextProject.title}
            </span>
          </Link>
        </div>
      </section>

      {/* SECTION 5: TAKE ACTION CTA */}
      <section
        className="project-cta-section"
        style={{ backgroundImage: `url(${assets.ctaBg})` }}
      >
        <div className="project-cta-container">
          <div className="project-cta-left">
            <div className="project-cta-number-label-group">
              <div className="project-cta-label-line-wrap">
                <span className="project-cta-line"></span>
                <span className="project-cta-label">TAKE ACTION</span>
              </div>
            </div>

            <h2 className="project-cta-title">
              Interested in <span className="highlight-electric">a Demo?</span>
            </h2>

            <p className="project-cta-desc">
              See how our digital solution can help your business grow. Get in touch
              with us for a personalized demo.
            </p>
          </div>

          <div className="project-cta-center">
            <Link href="/pages/contact" className="project-cta-btn">
              <svg
                className="project-cta-paperplane"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22 2L11 13"
                  stroke="#38bdf8"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 2L15 22L11 13L2 9L22 2Z"
                  stroke="#38bdf8"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Enquiry for Demo</span>
              <span className="project-cta-btn-arrow">&rarr;</span>
            </Link>
          </div>

          <div className="project-cta-right">
            <div className="project-cta-arrow-group">
              <svg
                className="project-cta-arrow-svg"
                viewBox="0 0 100 50"
                fill="none"
              >
                <path
                  d="M10 40 Q 50 10, 90 35"
                  stroke="#E2B141"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                />
                <path
                  d="M75 28 L90 35 L80 45"
                  stroke="#E2B141"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="project-cta-hint">
                Let's talk <br /> about your needs!
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
