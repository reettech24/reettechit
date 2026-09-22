"use client";

import React, { useState, useEffect, useRef } from "react";
import "./CloudDetailsPage.css";

const awsHomeBanner = "/assets/images/bannerimage.jpeg";
const section3BgImage = "/assets/images/secondsection.jpeg";
const serverTypesBgImage = "/assets/images/servertypesnew.png";
const serverTypesRightImage = "/assets/images/servertypesrightside.png";
const section7BgImage = "/assets/images/servermanagement.png";
const serverManagementBg = "/assets/images/servermanagementbg.png";
const section9BgImage = "/assets/images/section9.png";

const scriptCodeSlate1 = [
  'const design = "Figma";',
  'const code = "Next.js";',
  "",
  "function buildProduct() {",
  "    return design + code;",
  "}",
];

const scriptCodeSlate2 = [
  "npm run build",
  "building project...",
  "build successful ✓",
];

const renderHighlightedCode = (text) => {
  const lines = text.split("\n");
  return lines.map((line, lIdx) => {
    if (line.trim().startsWith("//") || line.trim().startsWith("#")) {
      return (
        <div key={lIdx} className="syntax-comment">
          {line}
        </div>
      );
    }

    const parts = line.split(/('(?:\\'|[^'])*'|"(?:\\"|[^"])*")/g);

    return (
      <div key={lIdx} className="syntax-line">
        {parts.map((part, pIdx) => {
          if (part.startsWith("'") || part.startsWith('"')) {
            return (
              <span key={pIdx} className="syntax-string">
                {part}
              </span>
            );
          }

          const tokens = part.split(
            /(\b(?:import|from|const|new|await|if|export|default|return|true|false|pipeline|trigger|resource|deploy_strategy|echo|function)\b|\b(?:EC2|AutoScaling|ELBv2|CloudWatch|SecurityGroup|VPCManager|Metrics|console)\b|[{}\(\)\[\]:,.;=])/g
          );

          return tokens.map((token, tIdx) => {
            if (
              [
                "import",
                "from",
                "const",
                "new",
                "await",
                "if",
                "export",
                "default",
                "return",
                "true",
                "false",
                "pipeline",
                "trigger",
                "resource",
                "deploy_strategy",
                "echo",
                "function",
              ].includes(token)
            ) {
              return <span key={tIdx} className="syntax-keyword">{token}</span>;
            }
            if (
              [
                "EC2",
                "AutoScaling",
                "ELBv2",
                "CloudWatch",
                "SecurityGroup",
                "VPCManager",
                "Metrics",
                "console",
              ].includes(token)
            ) {
              return <span key={tIdx} className="syntax-class">{token}</span>;
            }
            if (
              ["{", "}", "(", ")", "[", "]", ":", ",", ";", ".", "="].includes(
                token
              )
            ) {
              return <span key={tIdx} className="syntax-symbol">{token}</span>;
            }
            return <span key={tIdx} className="syntax-variable">{token}</span>;
          });
        })}
      </div>
    );
  });
};

const awsExpertiseItems = [
  {
    id: "ex1",
    title: "AWS EC2 Instance Deployment & Management",
    theme: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    ),
  },
  {
    id: "ex2",
    title: "AWS S3 Bucket Configuration & Storage Management",
    theme: "green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <path d="M3 6h18"></path>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      </svg>
    ),
  },
  {
    id: "ex3",
    title: "AWS Lambda Serverless Solutions",
    theme: "purple",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    id: "ex4",
    title: "AWS VPC Network Configuration",
    theme: "orange",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
      </svg>
    ),
  },
  {
    id: "ex5",
    title: "AWS RDS Database Management",
    theme: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
  },
  {
    id: "ex6",
    title: "Cloud Infrastructure Monitoring",
    theme: "green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    ),
  },
  {
    id: "ex7",
    title: "Data Backup & Disaster Recovery Planning",
    theme: "purple",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="17 8 12 3 7 8"></polyline>
        <line x1="12" y1="3" x2="12" y2="15"></line>
      </svg>
    ),
  },
  {
    id: "ex8",
    title: "AWS Security & Access Management",
    theme: "orange",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
  },
  {
    id: "ex9",
    title: "Cost Optimization & Resource Utilization",
    theme: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
  },
  {
    id: "ex10",
    title: "Performance Monitoring & Troubleshooting",
    theme: "green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
  },
  {
    id: "ex11",
    title: "Cloud Migration Services",
    theme: "purple",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
      </svg>
    ),
  },
  {
    id: "ex12",
    title: "Auto Scaling & Load Balancer Configuration",
    theme: "orange",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    ),
  },
];

const awsCloudServices = [
  {
    id: "s1",
    title: "Cloud Infrastructure",
    theme: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    desc: "Build reliable and scalable cloud infrastructure tailored to your business requirements.",
  },
  {
    id: "s2",
    title: "Cloud Migration",
    theme: "green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    desc: "Move applications, databases, and workloads to the cloud with minimal disruption.",
  },
  {
    id: "s3",
    title: "Cloud Scalability",
    theme: "purple",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    desc: "Scale computing and storage resources based on your dynamic business demand.",
  },
  {
    id: "s4",
    title: "Cloud Security",
    theme: "orange",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    desc: "Protect your infrastructure, applications, and data with robust security practices.",
  },
  {
    id: "s5",
    title: "Backup & Recovery",
    theme: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    desc: "Keep critical business data protected with reliable backup and recovery strategies.",
  },
  {
    id: "s6",
    title: "Cloud Optimization",
    theme: "green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    desc: "Improve performance while optimizing cloud resource utilization and costs.",
  },
];

const serverTypesData = [
  {
    id: "st1",
    title: "Cloud Servers",
    desc: "Scalable and secure cloud infrastructure",
    colorTheme: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="st-svg">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
      </svg>
    ),
  },
  {
    id: "st2",
    title: "Web Servers",
    desc: "High-performance web hosting solutions",
    colorTheme: "purple",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="st-svg">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
  },
  {
    id: "st3",
    title: "VPS (Virtual Private Servers)",
    desc: "Dedicated resources with full control",
    colorTheme: "orange",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="st-svg">
        <rect x="2" y="3" width="20" height="6" rx="1" ry="1"></rect>
        <rect x="2" y="15" width="20" height="6" rx="1" ry="1"></rect>
      </svg>
    ),
  },
  {
    id: "st4",
    title: "VPC Infrastructure",
    desc: "Isolated and secure network environments",
    colorTheme: "green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="st-svg">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
    ),
  },
  {
    id: "st5",
    title: "Dedicated Servers",
    desc: "Maximum performance for critical workloads",
    colorTheme: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="st-svg">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
        <line x1="8" y1="6" x2="16" y2="6"></line>
      </svg>
    ),
  },
  {
    id: "st6",
    title: "Application Servers",
    desc: "Reliable environments for your applications",
    colorTheme: "purple",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="st-svg">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
      </svg>
    ),
  },
  {
    id: "st7",
    title: "Database Servers",
    desc: "Secure and optimized data management",
    colorTheme: "green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="st-svg">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
  },
  {
    id: "st8",
    title: "Linux Servers",
    desc: "Stable, flexible and cost-effective solutions",
    colorTheme: "orange",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="st-svg">
        <path d="M12 2a10 10 0 0 0-7.5 16.5c1 1 2 2 2.5 3.5h10c.5-1.5 1.5-2.5 2.5-3.5A10 10 0 0 0 12 2z"></path>
      </svg>
    ),
  },
];

const ourServerMgmtServicesData = [
  {
    id: "osm1",
    title: "Server Setup & Configuration",
    desc: "Complete setup and configuration tailored to your business needs.",
    theme: "green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="osm-svg">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <circle cx="16" cy="18" r="2"></circle>
      </svg>
    ),
  },
  {
    id: "osm2",
    title: "Performance Monitoring",
    desc: "24/7 monitoring to track performance and ensure maximum uptime.",
    theme: "purple",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="osm-svg">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    ),
  },
  {
    id: "osm3",
    title: "Security Hardening",
    desc: "Strengthening your servers with advanced security measures.",
    theme: "orange",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="osm-svg">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
  },
  {
    id: "osm4",
    title: "Patch Management & Updates",
    desc: "Regular updates and patch management for security and stability.",
    theme: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="osm-svg">
        <polyline points="23 4 23 10 17 10"></polyline>
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
      </svg>
    ),
  },
  {
    id: "osm5",
    title: "Backup Configuration",
    desc: "Automated backups to protect your critical data.",
    theme: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="osm-svg">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="17 8 12 3 7 8"></polyline>
        <line x1="12" y1="3" x2="12" y2="15"></line>
      </svg>
    ),
  },
  {
    id: "osm6",
    title: "Disaster Recovery Planning",
    desc: "Robust recovery strategies to ensure business continuity.",
    theme: "green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="osm-svg">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
      </svg>
    ),
  },
  {
    id: "osm7",
    title: "Resource Optimization",
    desc: "Optimize server resources for maximum efficiency and cost savings.",
    theme: "purple",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="osm-svg">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
  },
  {
    id: "osm8",
    title: "Server Migration Services",
    desc: "Seamless migration with zero data loss and minimal downtime.",
    theme: "orange",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="osm-svg">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="16" y1="16" x2="22" y2="16"></line>
        <polyline points="19 13 22 16 19 19"></polyline>
      </svg>
    ),
  },
  {
    id: "osm9",
    title: "SSL Certificate Installation",
    desc: "Install and configure SSL certificates for secure encrypted connections.",
    theme: "purple",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="osm-svg">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
  },
  {
    id: "osm10",
    title: "User & Access Management",
    desc: "Manage users, roles & permissions with secure access control.",
    theme: "orange",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="osm-svg">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    id: "osm11",
    title: "Database Server Management",
    desc: "Expert management of database servers for peak performance.",
    theme: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="osm-svg">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
  },
  {
    id: "osm12",
    title: "Technical Support & Troubleshooting",
    desc: "24/7 expert support for all your server-related issues.",
    theme: "green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="osm-svg">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
      </svg>
    ),
  },
];

const keyFeaturesData = [
  {
    id: "kf1",
    side: "left",
    theme: "blue",
    titleHighlight: "Installation, Configuration & Activation",
    titleRest: "of AWS Instances",
    icon: (
      <div className="kf-brand-aws">
        <span className="kf-aws-text">aws</span>
        <div className="kf-aws-smile"></div>
      </div>
    ),
  },
  {
    id: "kf2",
    side: "left",
    theme: "green",
    titleHighlight: "Automated",
    titleRest: "Data Backup Solutions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="kf-svg-icon">
        <path d="M3 15v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4"></path>
        <polyline points="17 8 12 3 7 8"></polyline>
        <line x1="12" y1="3" x2="12" y2="15"></line>
      </svg>
    ),
  },
  {
    id: "kf3",
    side: "left",
    theme: "purple",
    titleHighlight: "Secure Data",
    titleRest: "Storage & Management",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="kf-svg-icon">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
  },
  {
    id: "kf4",
    side: "left",
    theme: "orange",
    titleHighlight: "Complete",
    titleRest: "Server Monitoring & Administration",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="kf-svg-icon">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
  {
    id: "kf5",
    side: "right",
    theme: "green",
    titleHighlight: "Linux Server",
    titleRest: "Management & Optimization",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="kf-svg-icon">
        <path d="M12 2a10 10 0 0 0-7.5 16.5c1 1 2 2 2.5 3.5h10c.5-1.5 1.5-2.5 2.5-3.5A10 10 0 0 0 12 2z"></path>
        <circle cx="9" cy="10" r="1.5" fill="currentColor"></circle>
        <circle cx="15" cy="10" r="1.5" fill="currentColor"></circle>
      </svg>
    ),
  },
  {
    id: "kf6",
    side: "right",
    theme: "blue",
    titleHighlight: "Cloud",
    titleRest: "Security Implementation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="kf-svg-icon">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
  },
  {
    id: "kf7",
    side: "right",
    theme: "purple",
    titleHighlight: "Infrastructure",
    titleRest: "Performance Optimization",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="kf-svg-icon">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
  },
  {
    id: "kf8",
    side: "right",
    theme: "orange",
    titleHighlight: "24/7",
    titleRest: "Monitoring & Technical Support",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="kf-svg-icon">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.63-5.63"></path>
      </svg>
    ),
  },
];

const benefitsData = [
  {
    id: "b1",
    title: "Reduced Infrastructure Costs",
    desc: "Optimize cloud resource provisioning and eliminate unnecessary overhead with pay-as-you-go financial models.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bnf-svg">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
  },
  {
    id: "b2",
    title: "Enhanced Security & Compliance",
    desc: "Safeguard sensitive business files and user data using multi-layered enterprise grade access protocols.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bnf-svg">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
  },
  {
    id: "b3",
    title: "High Availability & Reliability",
    desc: "Ensure your apps stay online 24/7 with zero downtime architecture and automatic redundancy distribution.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bnf-svg">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
  },
  {
    id: "b4",
    title: "Faster Application Performance",
    desc: "Accelerate response times globally via high-speed edge networks and balanced server load handling.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bnf-svg">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
  },
  {
    id: "b5",
    title: "Scalable Cloud Infrastructure",
    desc: "Seamlessly expand memory, compute capacity, and storage blocks instantly as your user base scales.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bnf-svg">
        <polyline points="15 3 21 3 21 9"></polyline>
        <polyline points="9 21 3 21 3 15"></polyline>
        <line x1="21" y1="3" x2="14" y2="10"></line>
        <line x1="3" y1="21" x2="10" y2="14"></line>
      </svg>
    ),
  },
  {
    id: "b6",
    title: "Business Continuity & Disaster Recovery",
    desc: "Protect against data loss with automated instant snapshots and rapid recovery pipelines.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bnf-svg">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.63-5.63"></path>
      </svg>
    ),
  },
];

export default function CloudSolutionsPage() {
  const [activeNode, setActiveNode] = useState("s1");

  const [displayedText1, setDisplayedText1] = useState("");
  const [lineIdx1, setLineIdx1] = useState(0);
  const [charIdx1, setCharIdx1] = useState(0);

  const [displayedText2, setDisplayedText2] = useState("");
  const [lineIdx2, setLineIdx2] = useState(0);
  const [charIdx2, setCharIdx2] = useState(0);

  const editorBodyRef1 = useRef(null);
  const editorBodyRef2 = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (editorBodyRef1.current)
      editorBodyRef1.current.scrollTop = editorBodyRef1.current.scrollHeight;
  }, [displayedText1]);

  useEffect(() => {
    if (editorBodyRef2.current)
      editorBodyRef2.current.scrollTop = editorBodyRef2.current.scrollHeight;
  }, [displayedText2]);

  useEffect(() => {
    if (lineIdx1 < scriptCodeSlate1.length) {
      const currentLine = scriptCodeSlate1[lineIdx1];
      if (charIdx1 < currentLine.length) {
        const timer = setTimeout(() => {
          setDisplayedText1((prev) => prev + currentLine[charIdx1]);
          setCharIdx1((prev) => prev + 1);
        }, 15);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setDisplayedText1((prev) => prev + "\n");
          setLineIdx1((prev) => prev + 1);
          setCharIdx1(0);
        }, 20);
        return () => clearTimeout(timer);
      }
    } else {
      const timer = setTimeout(() => {
        setDisplayedText1("");
        setLineIdx1(0);
        setCharIdx1(0);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [lineIdx1, charIdx1]);

  useEffect(() => {
    if (lineIdx2 < scriptCodeSlate2.length) {
      const currentLine = scriptCodeSlate2[lineIdx2];
      if (charIdx2 < currentLine.length) {
        const timer = setTimeout(() => {
          setDisplayedText2((prev) => prev + currentLine[charIdx2]);
          setCharIdx2((prev) => prev + 1);
        }, 15);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setDisplayedText2((prev) => prev + "\n");
          setLineIdx2((prev) => prev + 1);
          setCharIdx2(0);
        }, 20);
        return () => clearTimeout(timer);
      }
    } else {
      const timer = setTimeout(() => {
        setDisplayedText2("");
        setLineIdx2(0);
        setCharIdx2(0);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [lineIdx2, charIdx2]);

  const [coords4, setCoords4] = useState({ x: 0, y: 0 });
  const handleMouseMove4 = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords4({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };
  const handleMouseLeave4 = () => setCoords4({ x: 0, y: 0 });

  const [coords5, setCoords5] = useState({ x: 0, y: 0 });
  const handleMouseMove5 = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords5({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };
  const handleMouseLeave5 = () => setCoords5({ x: 0, y: 0 });

  return (
    <div className="cd-page-full-wrapper">
      <section
        className="cd-root"
        style={{
          backgroundImage: `
            linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.55) 100%),
            url(${awsHomeBanner})
          `,
        }}
      >
        <div className="cd-container">
          <div className="cd-left">
            <div className="cd-badge">
              <span className="cd-badge-dot"></span>
              <span className="cd-badge-text">CLOUD &amp; SERVER SOLUTIONS</span>
            </div>

            <h1 className="cd-title">
              <span className="cd-title-sub">AWS &amp; DEVOPS,</span>
              <span className="cd-title-main">
                <span className="cd-text-white-pure">SERVER MANAGEMENT</span>
              </span>
            </h1>

            <div className="cd-feature-list">
              <div className="feature-item">
                <div className="feature-icon cyan-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="custom-f-svg">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <rect x="9" y="10" width="6" height="5" rx="1"></rect>
                    <path d="M10 10V8a2 2 0 1 1 4 0v2"></path>
                  </svg>
                </div>
                <div className="feature-straight-line cyan-line"></div>
                <div className="feature-content-box">
                  <h3 className="feature-heading cyan-heading">SECURE.</h3>
                  <p className="feature-subtext">Built to protect what matters most.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon orange-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="custom-f-svg">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l-.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06-.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </div>
                <div className="feature-straight-line orange-line"></div>
                <div className="feature-content-box">
                  <h3 className="feature-heading orange-heading">OPTIMIZE.</h3>
                  <p className="feature-subtext">Maximize performance and efficiency.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon purple-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="custom-f-svg">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                </div>
                <div className="feature-straight-line purple-line"></div>
                <div className="feature-content-box">
                  <h3 className="feature-heading purple-heading">SCALE.</h3>
                  <p className="feature-subtext">Seamlessly grow with your business.</p>
                </div>
              </div>
            </div>

            <p className="cd-description">
              Build a secure, scalable, and high-performance cloud environment with
              smart server management solutions designed to help your business grow.
            </p>
          </div>

          <div className="cd-right">
            <div className="slates-composition-wrapper">
              <div className="code-slate-card new-slate-tl">
                <div className="slate-header">
                  <span className="slate-filename">Editor</span>
                </div>
                <div className="slate-editor-body" ref={editorBodyRef1}>
                  <pre className="code-display">
                    {renderHighlightedCode(displayedText1)}
                    <span className="typing-cursor">|</span>
                  </pre>
                </div>
              </div>

              <div className="code-slate-card new-slate-tr">
                <div className="ai-agent-header">
                  <div className="ai-agent-status-wrapper">
                    <span className="ai-green-dot"></span>
                    <span className="ai-agent-title">AI AGENT</span>
                  </div>
                  <span className="ai-online-text">Online</span>
                </div>
                <div className="ai-agent-body">
                  <div className="ai-pill-bubble designing-pill">Designing UI...</div>
                  <div className="ai-pill-bubble generating-pill">Generating Code...</div>
                  <div className="ai-pill-bubble deploy-pill">Deploy Ready ✓</div>
                </div>
                <div className="ai-agent-footer-glow"></div>
              </div>

              <div className="code-slate-card new-slate-br">
                <div className="slate-header">
                  <span className="slate-filename">Figma Design</span>
                </div>
                <div className="mockup-ui-body">
                  <div className="mockup-line-group">
                    <div className="mockup-line short"></div>
                    <div className="mockup-line short"></div>
                    <div className="mockup-line short"></div>
                  </div>
                  <div className="mockup-main-box"></div>
                  <div className="mockup-footer-row">
                    <div className="mockup-mini-card"></div>
                    <div className="mockup-mini-card"></div>
                  </div>
                </div>
              </div>

              <div className="code-slate-card new-slate-bl">
                <div className="slate-editor-body terminal-body" ref={editorBodyRef2}>
                  <pre className="code-display">
                    {renderHighlightedCode(displayedText2)}
                    <span className="typing-cursor">|</span>
                  </pre>
                </div>
              </div>
            </div>

            <div className="cd-hero-action-container">
              <button
                className="cd-server-mgmt-link-btn"
                onClick={() => {
                  const targetEl = document.getElementById("server-management-section");
                  if (targetEl) {
                    targetEl.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span>Go To Server Management</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="btn-arrow-svg">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen w-full overflow-hidden bg-[#070B2A] text-white">
        {/* Background Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="/videos/compressvideoSection2.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Subtle overlays */}
        <div className="absolute inset-0 bg-[#292929]/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#292929]/95 via-[#292929]/65 to-[#292929]/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/20" />

        {/* Main Content */}
        <div className="relative mx-auto flex min-h-[80vh] max-w-[1440px] items-center px-6 py-20 sm:px-10 lg:px-16 xl:px-24">

          {/* Left Content */}
          <div className="relative z-20 w-full max-w-[650px]">

            {/* Label */}
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-7 bg-[#38BDF8]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7DD3FC]">
                Managed Cloud Architecture
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[44px] font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-[56px] lg:text-[68px]">
              AWS Cloud Management
              <br />
              <span className="text-[#7DD3FC]">&amp; Support</span>
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-[590px] text-[15px] leading-7 text-slate-300 sm:text-[16px]">
              Reet Technologies offers professional AWS Managed Services
              designed to help businesses leverage the full power of Amazon Web
              Services. Our cloud experts manage, monitor, optimize, and secure
              your AWS environment, enabling you to focus on your core business
              operations.
            </p>

            <p className="mt-5 max-w-[590px] text-[15px] leading-7 text-slate-400 sm:text-[16px]">
              We provide ongoing monthly and annual AWS management plans to
              ensure optimal cloud performance, cost efficiency, and
              infrastructure reliability.
            </p>
          </div>


        </div>
      </section>

      <section
        className="comprehensive-aws-root"
        style={{
          backgroundImage: `
            linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.55) 100%),
            url(${section3BgImage})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="section-header-centered">
          <div className="header-badge">
            <span>OUR AWS EXPERTISE INCLUDES</span>
          </div>
          <h2 className="section-main-title section-title-compact comp-heading-white">
            Comprehensive AWS Solutions<br />
            <span className="comp-heading-white-sub">For Your Business</span>
          </h2>
          <p className="section-sub-title comp-sub-white">
            We deliver secure, scalable, and high-performance cloud solutions tailored to your business needs.
          </p>
        </div>

        <div className="comprehensive-3col-wrapper">
          <div className="comp-column col-top-mobile">
            {awsExpertiseItems.slice(0, 6).map((item) => (
              <div key={item.id} className={`comp-expertise-row comp-theme-${item.theme}`}>
                <span className="comp-row-icon">{item.icon}</span>
                <span className="comp-row-title">{item.title}</span>
              </div>
            ))}
          </div>

          <div className="comp-column col-middle">
            <div className="comp-graphic-stage">
              <svg className="comp-svg-network" viewBox="0 0 500 500">
                <line x1="250" y1="250" x2="250" y2="70" className="comp-net-wire wire-blue" />
                <line x1="250" y1="250" x2="410" y2="130" className="comp-net-wire wire-green" />
                <line x1="250" y1="250" x2="430" y2="290" className="comp-net-wire wire-purple" />
                <line x1="250" y1="250" x2="370" y2="400" className="comp-net-wire wire-orange" />
                <line x1="250" y1="250" x2="250" y2="430" className="comp-net-wire wire-blue" />
                <line x1="250" y1="250" x2="130" y2="400" className="comp-net-wire wire-green" />
                <line x1="250" y1="250" x2="70" y2="290" className="comp-net-wire wire-purple" />
                <line x1="250" y1="250" x2="90" y2="130" className="comp-net-wire wire-orange" />
              </svg>

              <div className="comp-center-cloud-node official-aws-cloud">
                <div className="comp-cloud-glow"></div>
                <svg className="official-cloud-svg" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M125.8 45.4C124.2 30.6 111.4 19.3 95.8 19.3C83.2 19.3 72.5 26.6 67.5 37.1C61.4 31.8 53.4 28.5 44.5 28.5C24.4 28.5 8.1 44.8 8.1 64.9C8.1 69 8.8 73 10.1 76.7H128.8C141 76.7 151 66.7 151 54.5C151 43.1 142.1 33.7 130.8 32.7C129.8 37.7 128.1 41.7 125.8 45.4Z" fill="#ffffff" stroke="#ff9900" strokeWidth="6" strokeLinejoin="round" />
                </svg>
                <div className="comp-cloud-inner">
                  <span className="comp-aws-text">aws</span>
                  <div className="comp-aws-smile"></div>
                </div>
              </div>

              <div className="comp-sat-node node-top sat-blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sat-icon"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg></div>
              <div className="comp-sat-node node-top-right sat-green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sat-icon"><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></div>
              <div className="comp-sat-node node-right sat-purple"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sat-icon"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg></div>
              <div className="comp-sat-node node-bottom-right sat-orange"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sat-icon"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
              <div className="comp-sat-node node-bottom sat-blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sat-icon"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>
              <div className="comp-sat-node node-bottom-left sat-green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sat-icon"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg></div>
              <div className="comp-sat-node node-left sat-purple"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sat-icon"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div>
              <div className="comp-sat-node node-top-left sat-orange"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sat-icon"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
            </div>
          </div>

          <div className="comp-column col-bottom-mobile">
            {awsExpertiseItems.slice(6, 12).map((item) => (
              <div key={item.id} className={`comp-expertise-row comp-theme-${item.theme}`}>
                <span className="comp-row-icon">{item.icon}</span>
                <span className="comp-row-title">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="aws-services-root" id="aws-services-section" style={{ backgroundColor: "#F0F0F0", color: "#17243D", paddingTop: "75px", paddingBottom: "75px", minHeight: "96vh" }}>
        <div className="section-header-centered" style={{ marginBottom: "25px" }}>
          <div className="header-badge aws-sec4-badge-darkblue">
            <span>3D CLOUD ECOSYSTEM</span>
          </div>
          <h2 className="section-main-title aws-sec4-title-solid-black">
            AWS CLOUD SOLUTIONS BUILT FOR<br />
            <span className="aws-sec4-black-sub">YOUR BUSINESS</span>
          </h2>
          <p className="section-sub-title aws-sec4-desc-solid-black">
            We design and manage cloud environments that are secure, flexible, and ready to scale with your business.
          </p>
        </div>

        <div className="hub-3d-layout-wrapper">
          <div className="services-column col-left col-top-mobile-sec4">
            {awsCloudServices.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className={`service-glass-card service-theme-${item.theme} ${activeNode === item.id ? "active-node-card" : ""}`}
                onMouseEnter={() => setActiveNode(item.id)}
              >
                <div className="card-top-row">
                  <span className="service-icon-box">{item.icon}</span>
                  <span className="service-status-tag">AWS CERTIFIED</span>
                </div>
                <h3 className="service-card-title">{item.title}</h3>
                <p className="service-card-desc">{item.desc}</p>
                <div className="card-hover-border"></div>
              </div>
            ))}
          </div>

          <div
            className="hub-central-scene-container col-middle-mobile-sec4"
            onMouseMove={handleMouseMove4}
            onMouseLeave={handleMouseLeave4}
            style={{ height: "520px" }}
          >
            <div
              className="hub-3d-canvas"
              style={{
                transform: `rotateX(${coords4.y * -12}deg) rotateY(${coords4.x * 14}deg)`,
              }}
            >
              <div className="hub-orbital-ring ring-major"></div>
              <div className="hub-orbital-ring ring-minor"></div>

              <svg className="hub-connections-svg" viewBox="0 0 500 500">
                <line x1="250" y1="250" x2="60" y2="120" className="hub-laser-wire wire-blue" />
                <line x1="250" y1="250" x2="440" y2="120" className="hub-laser-wire wire-green" />
                <line x1="250" y1="250" x2="60" y2="380" className="hub-laser-wire wire-purple" />
                <line x1="250" y1="250" x2="440" y2="380" className="hub-laser-wire wire-orange" />
                <circle cx="60" cy="120" r="4" fill="#38bdf8" />
                <circle cx="440" cy="120" r="4" fill="#4ade80" />
                <circle cx="60" cy="380" r="4" fill="#c084fc" />
                <circle cx="440" cy="380" r="4" fill="#ff9900" />
              </svg>

              <div className="quantum-holo-node" style={{ width: "260px", height: "260px" }}>
                <div className="holo-orbit-ring ring-one"></div>
                <div className="holo-orbit-ring ring-two"></div>

                <div className="holo-center-box-multi">
                  <div className="holo-inner-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "42px", height: "42px" }}>
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="services-column col-right col-bottom-mobile-sec4">
            {awsCloudServices.slice(3, 6).map((item) => (
              <div
                key={item.id}
                className={`service-glass-card service-theme-${item.theme} ${activeNode === item.id ? "active-node-card" : ""}`}
                onMouseEnter={() => setActiveNode(item.id)}
              >
                <div className="card-top-row">
                  <span className="service-icon-box">{item.icon}</span>
                  <span className="service-status-tag">AWS SECURE</span>
                </div>
                <h3 className="service-card-title">{item.title}</h3>
                <p className="service-card-desc">{item.desc}</p>
                <div className="card-hover-border"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="key-features-root">
        <div className="section-header-centered" style={{ marginBottom: "25px" }}>
          <div className="header-badge kf-header-badge-purple">
            <span>OUR STRENGTH</span>
          </div>
          <h2 className="section-main-title kf-main-title">
            Key <span className="kf-title-gradient">Features</span>
          </h2>
          <p className="section-sub-title kf-sub-title">
            Powerful cloud solutions designed to ensure security, performance and peace of mind.
          </p>
        </div>

        <div className="kf-layout-wrapper">
          <div className="kf-column kf-col-top-mobile">
            {keyFeaturesData.slice(0, 4).map((item) => (
              <div key={item.id} className={`kf-feature-row kf-theme-${item.theme}`}>
                <div className={`kf-icon-box kf-icon-${item.theme}`}>{item.icon}</div>
                <div className="kf-text-content">
                  <span className={`kf-check-icon kf-chk-${item.theme}`}>✓</span>
                  <span className="kf-row-title">
                    <strong className={`kf-highlight-text kf-hl-${item.theme}`}>{item.titleHighlight}</strong> {item.titleRest}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div
            className="kf-central-stage kf-col-middle-mobile"
            onMouseMove={handleMouseMove5}
            onMouseLeave={handleMouseLeave5}
          >
            <div
              className="kf-3d-canvas"
              style={{
                transform: `rotateX(${coords5.y * -8}deg) rotateY(${coords5.x * 10}deg)`,
              }}
            >
              <div className="kf-orbit-circle kf-circle-1"></div>
              <div className="kf-orbit-circle kf-circle-2"></div>
              <div className="kf-orbit-circle kf-circle-3"></div>
              <div className="kf-orbit-arc kf-arc-1"></div>
              <div className="kf-orbit-arc kf-arc-2"></div>

              <svg className="kf-svg-connections" viewBox="0 0 460 460">
                <line x1="230" y1="230" x2="45" y2="75" className="kf-laser-line" />
                <line x1="230" y1="230" x2="45" y2="160" className="kf-laser-line" />
                <line x1="230" y1="230" x2="45" y2="245" className="kf-laser-line" />
                <line x1="230" y1="230" x2="45" y2="330" className="kf-laser-line" />

                <line x1="230" y1="230" x2="415" y2="75" className="kf-laser-line-purple" />
                <line x1="230" y1="230" x2="415" y2="160" className="kf-laser-line-purple" />
                <line x1="230" y1="230" x2="415" y2="245" className="kf-laser-line-purple" />
                <line x1="230" y1="230" x2="415" y2="330" className="kf-laser-line-purple" />

                <circle cx="45" cy="75" r="4" fill="#38bdf8" />
                <circle cx="45" cy="160" r="4" fill="#38bdf8" />
                <circle cx="45" cy="245" r="4" fill="#38bdf8" />
                <circle cx="45" cy="330" r="4" fill="#38bdf8" />

                <circle cx="415" cy="75" r="4" fill="#c084fc" />
                <circle cx="415" cy="160" r="4" fill="#c084fc" />
                <circle cx="415" cy="245" r="4" fill="#c084fc" />
                <circle cx="415" cy="330" r="4" fill="#c084fc" />
              </svg>

              <div className="kf-image-cloud-center">
                <svg className="kf-img-cloud-svg" viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M110 40C108.5 27 97 17 83.5 17C72.5 17 63 23.5 58.5 32.8C53.2 28.1 46.2 25.2 38.5 25.2C21 25.2 6.8 39.4 6.8 56.9C6.8 60.5 7.4 64 8.7 67.2H112C122.5 67.2 131 58.7 131 48.2C131 38.2 123.2 30 113.2 29.1C112.3 33.5 110.8 37 110 40Z" stroke="url(#cloudGrad)" strokeWidth="3.5" strokeLinejoin="round" fill="rgba(14, 165, 233, 0.05)" />
                  <defs>
                    <linearGradient id="cloudGrad" x1="6.8" y1="17" x2="131" y2="67.2" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#38bdf8" />
                      <stop offset="1" stopColor="#c084fc" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <div className="kf-column kf-col-bottom-mobile">
            {keyFeaturesData.slice(4, 8).map((item) => (
              <div key={item.id} className={`kf-feature-row kf-theme-${item.theme}`}>
                <div className={`kf-icon-box kf-icon-${item.theme}`}>{item.icon}</div>
                <div className="kf-text-content">
                  <span className={`kf-check-icon kf-chk-${item.theme}`}>✓</span>
                  <span className="kf-row-title">
                    <strong className={`kf-highlight-text kf-hl-${item.theme}`}>{item.titleHighlight}</strong> {item.titleRest}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section-root">
        <div className="section-header-centered" style={{ marginBottom: "25px" }}>
          <div className="header-badge bnf-header-badge">
            <span>VALUE &amp; ADVANTAGES</span>
          </div>
          <h2 className="section-main-title bnf-main-title">
            Key <span className="bnf-title-gradient">Benefits</span>
          </h2>
          <p className="section-sub-title bnf-sub-title">
            Empower your enterprise with future-proof cloud engineering built for maximum ROI and performance.
          </p>
        </div>

        <div className="bnf-grid-wrapper">
          {benefitsData.map((item, index) => (
            <div
              key={item.id}
              className="bnf-card-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bnf-card-glow"></div>
              <div className="bnf-card-content">
                <div className="bnf-icon-wrapper">
                  {item.icon}
                </div>
                <h3 className="bnf-card-title">{item.title}</h3>
                <p className="bnf-card-desc">{item.desc}</p>
              </div>
              <div className="bnf-card-border-glow"></div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="server-management-section"
        className="server-mgmt-root"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.45) 100%),
            url(${section7BgImage})
          `,
        }}
      >
        <div className="server-mgmt-container">
          <div className="server-mgmt-left">
            <div className="server-mgmt-badge server-mgmt-badge-purple">
              <span className="server-mgmt-badge-dot server-mgmt-dot-purple"></span>
              <span>RELIABLE INFRASTRUCTURE</span>
            </div>

            <h2 className="server-mgmt-title">
              Server Management <br />
              <span className="server-mgmt-title-gradient">&amp; Server Administration</span>
            </h2>

            <p className="server-mgmt-text-main">
              Our Server Management Services ensure your business applications and websites operate smoothly with minimal downtime. We manage various server environments and provide proactive monitoring, maintenance, troubleshooting, and security updates with precision.
            </p>

            <p className="server-mgmt-text-sub">
              Our certified professionals have deep experience managing Linux and cloud-based infrastructures across multiple enterprise platforms seamlessly.
            </p>
          </div>

          <div
            className="server-mgmt-right"
            onMouseMove={(e) => {
              if (window.innerWidth <= 1200) return;
              const rect = e.currentTarget.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
              const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
              const wrapper = e.currentTarget.querySelector(".nexus-3d-wrapper");
              if (wrapper)
                wrapper.style.transform = `rotateX(${y * -18}deg) rotateY(${x * 18}deg)`;
            }}
            onMouseLeave={(e) => {
              if (window.innerWidth <= 1200) return;
              const wrapper = e.currentTarget.querySelector(".nexus-3d-wrapper");
              if (wrapper)
                wrapper.style.transform = `rotateX(0deg) rotateY(0deg)`;
            }}
          >
            <div className="nexus-3d-wrapper">
              <div className="nexus-orbit-ring ring-outer"></div>
              <div className="nexus-orbit-ring ring-inner"></div>

              <div className="nexus-core-card">
                <div className="nexus-card-header">
                  <span className="nexus-live-badge">
                    <span className="nexus-pulse-dot"></span> LIVE NEXUS
                  </span>
                  <span className="nexus-sys-status">SECURE &amp; SYNCED</span>
                </div>

                <div className="nexus-metrics-grid">
                  <div className="nexus-metric-box">
                    <span className="m-label">UPTIME</span>
                    <span className="m-value green-text">99.99%</span>
                  </div>
                  <div className="nexus-metric-box">
                    <span className="m-label">CPU LOAD</span>
                    <span className="m-value cyan-text">14.2%</span>
                  </div>
                  <div className="nexus-metric-box">
                    <span className="m-label">SECURITY</span>
                    <span className="m-value purple-text">ENCRYPTED</span>
                  </div>
                </div>

                <div className="nexus-activity-bar">
                  <div className="activity-progress"></div>
                </div>
              </div>

              <div className="nexus-floating-badge badge-top">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="badge-svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                <span>Firewall Active</span>
              </div>

              <div className="nexus-floating-badge badge-bottom">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="badge-svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                <span>Zero Downtime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="server-types-root"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.45) 100%),
            url(${serverTypesBgImage})
          `,
        }}
      >
        <div className="server-types-container-split">
          <div className="server-types-left-col">
            <div className="server-types-header-left">
              <div className="st-sub-badge-left">
                <span className="st-badge-line"></span>
                <span className="st-badge-text">OUR INFRASTRUCTURE</span>
              </div>
              <h2 className="st-main-title-left">
                SERVER <span className="st-title-blue">TYPES</span>
              </h2>
              <p className="st-header-desc-left">
                We manage a wide range of server environments to meet your business needs with flexibility, security and high performance.
              </p>
            </div>

            <div className="server-types-grid-2col">
              {serverTypesData.map((item) => (
                <div key={item.id} className={`st-card-item-pro st-theme-${item.colorTheme}`}>
                  <div className="st-card-glow"></div>
                  <div className="st-card-inner-pro">
                    <div className={`st-icon-box-pro st-icon-${item.colorTheme}`}>
                      {item.icon}
                    </div>
                    <h3 className="st-card-title-pro">{item.title}</h3>
                    <p className="st-card-desc-pro">{item.desc}</p>
                  </div>
                  <div className="st-card-border-glow"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="server-types-right-col">
            <div className="server-types-visual-wrapper">
              <div className="server-types-visual-glow"></div>
              <img
                src={serverTypesRightImage}
                alt="Server Types Visualization"
                className="server-types-visual-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="osm-services-root"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.45) 100%),
            url(${serverManagementBg})
          `,
        }}
      >
        <div className="osm-container" style={{ alignItems: "center", textAlign: "center", gap: "35px" }}>
          <div className="osm-header" style={{ alignItems: "center", textAlign: "center", margin: "0 auto" }}>
            <div className="osm-top-subtitle" style={{ justifyContent: "center" }}>
              <span className="osm-sub-dash"></span>
              <span>OUR</span>
              <span className="osm-sub-dash"></span>
            </div>
            <h2 className="osm-main-heading">
              <span className="osm-green-word">Server</span> Management
            </h2>
            <div className="osm-sub-heading-box" style={{ justifyContent: "center" }}>
              <div className="osm-heading-line"></div>
              <span className="osm-sub-title-text">SERVICES INCLUDE</span>
              <div className="osm-heading-line"></div>
            </div>
            <p className="osm-intro-desc" style={{ margin: "12px auto 0 auto", textAlign: "center" }}>
              We provide comprehensive server management solutions to keep your infrastructure secure, optimized, and always available.
            </p>
          </div>

          <div className="osm-grid">
            {ourServerMgmtServicesData.map((item) => (
              <div key={item.id} className={`osm-card osm-theme-${item.theme}`}>
                <div className="osm-card-top-banner"></div>
                <div className="osm-card-content">
                  <div className={`osm-icon-wrapper osm-icon-${item.theme}`}>
                    {item.icon}
                  </div>
                  <div className="osm-text-area">
                    <h3 className="osm-card-title">{item.title}</h3>
                    <p className="osm-card-desc">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
