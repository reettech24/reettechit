"use client";

import React, { useEffect } from "react";
import "./AwsData.css";

const section1Bg = "/assets/images/section1backgd.png";
const section1RightImg = "/assets/images/section1right.png";
const section2Bg = "/assets/images/section2-bg-data-management.jpeg";
const section3Bg = "/assets/images/section3-bg-data-management.jpeg";
const section4Bg = "/assets/images/section4-bg-data-management.jpeg";
const section5Bg = "/assets/images/section5-bg-data-management.jpeg";
const databaseImg = "/assets/images/database.png";

const sqlServerImg = "/assets/images/tech-sqlserver.svg";
const mysqlImg = "/assets/images/tech-mysql.svg";
const postgresImg = "/assets/images/tech-postgres.svg";
const nosqlImg = "/assets/images/tech-nosql.svg";
const mongoImg = "/assets/images/tech-mongo.svg";
const awsDbImg = "/assets/images/tech-aws.svg";
const mariaImg = "/assets/images/tech-maria.svg";

const technologiesList = [
  {
    name: "SQL Server",
    description: "Powerful and reliable relational database.",
    icon: sqlServerImg,
  },
  {
    name: "MySQL",
    description: "Open-source database for modern applications.",
    icon: mysqlImg,
  },
  {
    name: "PostgreSQL",
    description: "Advanced, open-source relational database.",
    icon: postgresImg,
  },
  {
    name: "NoSQL Databases",
    description: "Flexible storage for diverse data types.",
    icon: nosqlImg,
  },
  {
    name: "MongoDB",
    description: "Scalable, flexible NoSQL database.",
    icon: mongoImg,
  },
  {
    name: "AWS Database Services",
    description: "Managed database solutions on AWS.",
    icon: awsDbImg,
  },
  {
    name: "MariaDB",
    description: "Reliable, open-source database.",
    icon: mariaImg,
  },
];

const keyServicesList = [
  {
    number: "01",
    title: "Auto Backups",
    description: "Reliable automated backups that keep critical business data protected and recoverable.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="17 8 12 3 7 8"></polyline>
        <line x1="12" y1="3" x2="12" y2="15"></line>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Space Management",
    description: "Efficient storage and server resource management for growing data environments.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="8" rx="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Data Classification",
    description: "Organize and separate data based on business needs, sensitivity, and access requirements.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Administration & Optimization",
    description: "Maintain, monitor, and optimize databases for reliability and peak performance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
  },
  {
    number: "05",
    title: "Data Recovery",
    description: "Rapid recovery strategies designed to minimize downtime and business disruption.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
  },
  {
    number: "06",
    title: "Security",
    description: "Protect databases with secure access controls, permissions, and security practices.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
  },
  {
    number: "07",
    title: "Storage Solution",
    description: "Flexible and scalable cloud storage designed for secure, accessible business data.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
      </svg>
    ),
  },
];

export default function AwsDataPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="aws-data-page">
      {/* 01. Hero Section */}
      <section
        className="aws-enterprise-hero-section"
        style={{ backgroundImage: `url(${section1Bg})` }}
      >
        <div className="aws-enterprise-container">
          <div className="aws-enterprise-left-content">
            <div className="aws-title-group">
              <div className="aws-eyebrow-label">
                <span className="eyebrow-line"></span>
                <span>DATA SOLUTIONS</span>
              </div>
              <h1 className="aws-enterprise-main-title">
                Data Management{" "}
                <span className="indigo-services-text">Services</span>
              </h1>
            </div>

            <h3 className="aws-enterprise-sub-title">
              Secure, Organized & Scalable Data Solutions
            </h3>

            <p className="aws-enterprise-description">
              Data is one of the most valuable assets of any business. Reet
              Technologies provides comprehensive Data Management Services to
              help organizations securely store, manage, organize, and protect
              their critical business information.
            </p>
          </div>

          <div className="aws-enterprise-right-content">
            <img
              src={section1RightImg}
              alt="Data Management Visualization"
              className="aws-enterprise-right-img"
            />
          </div>
        </div>
      </section>

      {/* 02. Introduction Section */}
      <section
        className="aws-intro-section aws-section2-two-part-theme"
        style={{ backgroundImage: `url(${section2Bg})` }}
      >
        <div className="aws-section2-two-part-container">
          <div className="aws-section2-left-content">
            <div className="aws-eyebrow-label">
              <span className="eyebrow-line"></span>
              <span>OUR SOLUTIONS</span>
            </div>
            <h2 className="aws-services-title-custom">
              Our Data Management <span className="indigo-services-text">Solutions</span>
            </h2>
            <p className="aws-services-desc-primary">
              Comprehensive solutions designed to help organizations securely manage, protect, organize, and maximize the value of their business data.
            </p>
            <p className="aws-services-desc-secondary">
              From secure backup and storage to migration, optimization, security, and analytics, our solutions help keep your data reliable, accessible, and ready for growth.
            </p>
          </div>

          <div className="aws-section2-right-grid">
            <div className="aws-tilted-card">
              <div className="solution-icon-frame">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
              </div>
              <div className="aws-tilted-card-content">
                <h3>Data Backup & Recovery</h3>
              </div>
            </div>

            <div className="aws-tilted-card">
              <div className="solution-icon-frame">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              </div>
              <div className="aws-tilted-card-content">
                <h3>Database Administration</h3>
              </div>
            </div>

            <div className="aws-tilted-card">
              <div className="solution-icon-frame">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="8" rx="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
              </div>
              <div className="aws-tilted-card-content">
                <h3>Data Storage Management</h3>
              </div>
            </div>

            <div className="aws-tilted-card">
              <div className="solution-icon-frame">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 3 21 3 21 8"></polyline>
                  <line x1="4" y1="20" x2="21" y2="3"></line>
                  <polyline points="21 16 21 21 16 21"></polyline>
                  <line x1="15" y1="15" x2="21" y2="21"></line>
                  <line x1="4" y1="4" x2="9" y2="9"></line>
                </svg>
              </div>
              <div className="aws-tilted-card-content">
                <h3>Data Migration Services</h3>
              </div>
            </div>

            <div className="aws-tilted-card">
              <div className="solution-icon-frame">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="aws-tilted-card-content">
                <h3>Database Performance Optimization</h3>
              </div>
            </div>

            <div className="aws-tilted-card">
              <div className="solution-icon-frame">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <div className="aws-tilted-card-content">
                <h3>Data Security & Encryption</h3>
              </div>
            </div>

            <div className="aws-tilted-card">
              <div className="solution-icon-frame">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="21 8 21 21 3 21 3 8"></polyline>
                  <rect x="1" y="3" width="22" height="5"></rect>
                  <line x1="10" y1="12" x2="14" y2="12"></line>
                </svg>
              </div>
              <div className="aws-tilted-card-content">
                <h3>Data Archiving Solutions</h3>
              </div>
            </div>

            <div className="aws-tilted-card">
              <div className="solution-icon-frame">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <div className="aws-tilted-card-content">
                <h3>Structured & Unstructured Data Management</h3>
              </div>
            </div>

            <div className="aws-tilted-card">
              <div className="solution-icon-frame">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                </svg>
              </div>
              <div className="aws-tilted-card-content">
                <h3>Cloud Data Storage Solutions</h3>
              </div>
            </div>

            <div className="aws-tilted-card">
              <div className="solution-icon-frame">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
              </div>
              <div className="aws-tilted-card-content">
                <h3>Business Data Analytics Support</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Technologies Section */}
      <section
        className="aws-tech-ecosystem-section"
        style={{ backgroundImage: `url(${section3Bg})` }}
      >
        <div className="aws-tech-ecosystem-container">
          <div className="tech-ecosystem-header">
            <div className="aws-eyebrow-label center-eyebrow">
              <span className="eyebrow-line"></span>
              <span>OUR TECHNOLOGIES</span>
            </div>
            <h2 className="tech-ecosystem-main-title">
              Database Technologies <br />
              <span className="indigo-services-text">We Support</span>
            </h2>
            <div className="tech-heading-gold-accent"></div>
            <p className="tech-ecosystem-desc">
              We work with a wide range of database technologies to deliver flexible, secure, and high-performing data solutions.
            </p>
          </div>

          <div className="tech-ecosystem-wrapper">
            <div className="tech-ecosystem-row tech-row-4">
              {technologiesList.slice(0, 4).map((tech, index) => (
                <div key={index} className="tech-ecosystem-item">
                  <div className="tech-icon-circle-showcase">
                    <img src={tech.icon} alt={tech.name} className="tech-showcase-logo" />
                  </div>
                  <h3 className="tech-showcase-name">{tech.name}</h3>
                  <p className="tech-showcase-desc">{tech.description}</p>
                </div>
              ))}
            </div>

            <div className="tech-ecosystem-row tech-row-3">
              {technologiesList.slice(4, 7).map((tech, index) => (
                <div key={index} className="tech-ecosystem-item">
                  <div className="tech-icon-circle-showcase">
                    <img src={tech.icon} alt={tech.name} className="tech-showcase-logo" />
                  </div>
                  <h3 className="tech-showcase-name">{tech.name}</h3>
                  <p className="tech-showcase-desc">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section
        className="ks-key-services-section"
        style={{ backgroundImage: `url(${section4Bg})` }}
      >
        <div className="ks-services-container-custom">
          <div className="ks-services-header-center">
            <div className="aws-eyebrow-label center-eyebrow">
              <span className="eyebrow-line"></span>
              <span>OUR EXPERTISE</span>
            </div>
            <h2 className="ks-services-main-title">
              Key <span className="indigo-services-text">Services</span>
            </h2>
            <div className="tech-heading-gold-accent"></div>
            <p className="ks-services-subtitle-custom">
              End-to-end database management services to ensure your data stays secure, organized, and always available.
            </p>
          </div>

          <div className="ks-services-grid-wrapper">
            <div className="ks-services-row ks-row-4">
              {keyServicesList.slice(0, 4).map((service, index) => (
                <div key={index} className="ks-service-angular-tile">
                  <div className="ks-tile-icon-container">
                    {service.icon}
                  </div>
                  <div className="ks-tile-content">
                    <h3 className="ks-tile-title">{service.title}</h3>
                    <p className="ks-tile-desc">{service.description}</p>
                  </div>
                  <span className="ks-tile-number">{service.number}</span>
                </div>
              ))}
            </div>

            <div className="ks-services-row ks-row-3">
              {keyServicesList.slice(4, 7).map((service, index) => (
                <div key={index} className="ks-service-angular-tile">
                  <div className="ks-tile-icon-container">
                    {service.icon}
                  </div>
                  <div className="ks-tile-content">
                    <h3 className="ks-tile-title">{service.title}</h3>
                    <p className="ks-tile-desc">{service.description}</p>
                  </div>
                  <span className="ks-tile-number">{service.number}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section
        className="bb-network-benefits-section"
        style={{ backgroundImage: `url(${section5Bg})` }}
      >
        <div className="bb-network-overlay"></div>

        <div className="bb-network-container">
          <div className="bb-network-header">
            <div className="aws-eyebrow-label center-eyebrow">
              <span className="eyebrow-line"></span>
              <span>BUSINESS BENEFITS</span>
            </div>
            <h2 className="bb-network-main-title">
              Business <span className="indigo-services-text">Benefits</span>
            </h2>
            <div className="tech-heading-gold-accent"></div>
            <p className="bb-network-subtitle">
              Smarter data management delivers measurable advantages that accelerate your enterprise operations.
            </p>
          </div>

          <div className="bb-network-layout-grid">
            {/* Left 3 Cards */}
            <div className="bb-network-side bb-left-side">
              <div className="bb-floating-benefit-card bb-card-left-1">
                <div className="bb-floating-content">
                  <div className="bb-title-with-gold">
                    <span className="bb-gold-dash"></span>
                    <h4>Improved Data Security</h4>
                  </div>
                  <p>Strengthen protection of your critical data from evolving threats and unauthorized access.</p>
                </div>
                <div className="bb-glow-icon-node">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
              </div>

              <div className="bb-floating-benefit-card bb-card-left-2">
                <div className="bb-floating-content">
                  <div className="bb-title-with-gold">
                    <span className="bb-gold-dash"></span>
                    <h4>Faster Data Access</h4>
                  </div>
                  <p>Streamlined systems enable quick and seamless access to the right information.</p>
                </div>
                <div className="bb-glow-icon-node">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
              </div>

              <div className="bb-floating-benefit-card bb-card-left-3">
                <div className="bb-floating-content">
                  <div className="bb-title-with-gold">
                    <span className="bb-gold-dash"></span>
                    <h4>Optimized Storage Utilization</h4>
                  </div>
                  <p>Intelligent storage strategies reduce costs and improve resource efficiency.</p>
                </div>
                <div className="bb-glow-icon-node">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06-.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Center Database Image */}
            <div className="bb-network-center-space">
              <div className="bb-center-glow-backdrop"></div>
              <img src={databaseImg} alt="Database Infrastructure" className="bb-database-center-img" />
            </div>

            {/* Right 3 Cards */}
            <div className="bb-network-side bb-right-side">
              <div className="bb-floating-benefit-card bb-card-right-1">
                <div className="bb-glow-icon-node">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                </div>
                <div className="bb-floating-content">
                  <div className="bb-title-with-gold">
                    <span className="bb-gold-dash"></span>
                    <h4>Reduced Risk of Data Loss</h4>
                  </div>
                  <p>Reliable backup and recovery frameworks help ensure complete business continuity.</p>
                </div>
              </div>

              <div className="bb-floating-benefit-card bb-card-right-2">
                <div className="bb-glow-icon-node">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                </div>
                <div className="bb-floating-content">
                  <div className="bb-title-with-gold">
                    <span className="bb-gold-dash"></span>
                    <h4>Better Business Decision-Making</h4>
                  </div>
                  <p>Clean, accurate and accessible data empowers smarter and more confident enterprise decisions.</p>
                </div>
              </div>

              <div className="bb-floating-benefit-card bb-card-right-3">
                <div className="bb-glow-icon-node">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <polyline points="9 15 11 17 15 13"></polyline>
                  </svg>
                </div>
                <div className="bb-floating-content">
                  <div className="bb-title-with-gold">
                    <span className="bb-gold-dash"></span>
                    <h4>Regulatory Compliance Support</h4>
                  </div>
                  <p>Stay aligned with industry standards and reduce compliance-related risks effortlessly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
