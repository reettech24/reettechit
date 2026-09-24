import HomePageClient from "@/components/pages/HomePageClient";
import { Link } from "@/i18n/navigation";

const servicesList = [
  {
    title: "High-End Website Development",
    description:
      "Custom, high-performance website development for modern businesses.",
    icon: "Code",
    link: "/pages/about/ourProjects",
  },

  {
    title: "CRM & ERP Solutions",
    description:
      "Custom CRM and ERP solutions to streamline business operations and growth.",
    icon: "Cog",
    link: "/pages/services/ourSolutions/crm-erp-solution",
  },

  {
    title: "Mobile & Web Applications",
    description:
      "Scalable mobile and web application development for modern businesses.",
    icon: "Smartphone",
    link: "/pages/services/ourSolutions/mobile-and-web-application",
  },

  {
    title: "Digital Transformation",
    description:
      "Digital transformation solutions to improve efficiency, automation and growth.",
    icon: "Sparkles",
    link: "/pages/services/ourSolutions/digital-transformation",
  },

  {
    title: "Cyber Security",
    description:
      "Secure your business with reliable cyber security and data protection solutions.",
    icon: "ShieldCheck",
    link: "/services/data-management-services",
  },

  {
    title: "AI & Machine Learning",
    description:
      "AI and machine learning solutions for automation, insights and business growth.",
    icon: "Brain",
    link: "/pages/services/ourSolutions/ai-ml",
  },

  {
    title: "Digital Marketing",
    description:
      "Maximize reach and ROI through strategic digital campaigns.",
    icon: "Megaphone",
    link: "/pages/services/ourSolutions/digital-marketing",
  },

  {
    title: "AR & VR Solutions",
    description:
      "Immersive augmented and virtual reality experiences.",
    icon: "Glasses",
    link: "/pages/services/ourSolutions/ar-vr-solutions",
  },
];

export async function generateMetadata({ params }) {
  const { locale } = await params;

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (e) {
    messages = (await import(`../../../messages/en.json`)).default;
  }

  const metaTitle =
    messages?.metadata?.title || "Reet Technologies | IT Solutions & Services";
  const metaDesc =
    messages?.metadata?.description ||
    "Get professional IT solutions for your business. High-End Website Development, CRM & ERP Solutions, Mobile & Web Applications, Digital Transformation, Cyber Security, AI & Machine Learning, Digital Marketing, AR & VR Solutions.";

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://reettechit.com";
  const canonicalUrl = `${baseUrl}/${locale}`;

  return {
    title: metaTitle,
    description: metaDesc,
    keywords:
      "High-End Website Development, CRM & ERP Solutions, Mobile & Web Applications, Digital Transformation, Cyber Security, AI & Machine Learning, Digital Marketing, AR & VR Solutions, software development company, web app development, mobile application development, AWS cloud solutions, IT consulting, full stack development, AI ML integration, Pune IT company, Reet Technologies",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
        jp: `${baseUrl}/jp`,
        "x-default": `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      url: canonicalUrl,
      siteName: "Reet Technologies",
      locale: locale,
      type: "website",
      images: [
        {
          url: `${baseUrl}/assets/images/bannerimage.jpeg`,
          width: 1200,
          height: 630,
          alt: "Reet Technologies - Enterprise Web and Mobile Application Development",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDesc,
      images: [`${baseUrl}/assets/images/bannerimage.jpeg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function Home({ params }) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://reettechit.com";
  const canonicalUrl = `${baseUrl}/${locale}`;

  const servicesCatalogSchema = {
    "@type": "OfferCatalog",
    name: "Reet Technologies Key Services & Solutions",
    itemListElement: servicesList.map((service, index) => ({
      "@type": "Offer",
      position: index + 1,
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: `${baseUrl}/${locale}${service.link}`,
      },
    })),
  };

  const servicesItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${canonicalUrl}#services-catalog`,
    name: "Core IT Services & Digital Solutions",
    description: "Comprehensive enterprise IT services provided by Reet Technologies.",
    itemListElement: servicesList.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      description: service.description,
      url: `${baseUrl}/${locale}${service.link}`,
    })),
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "Reet Technologies",
    legalName: "Reet Technologies Pvt. Ltd.",
    url: baseUrl,
    logo: `${baseUrl}/reetlogo.png`,
    description:
      "Reet Technologies specializes in developing fast, secure, and scalable web applications, mobile applications, AWS cloud infrastructure, CRM & ERP systems, and AI/ML solutions.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 90229 93526",
      contactType: "customer service",
      email: "sales@reettechit.com",
      availableLanguage: ["English", "Hindi", "Arabic", "Japanese"],
    },
    hasOfferCatalog: servicesCatalogSchema,
    sameAs: [
      "https://github.com",
      "https://linkedin.com",
      "https://twitter.com",
      "https://instagram.com",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "Reet Technologies",
    description: "Building Future-Ready Applications & Enterprise IT Solutions",
    publisher: {
      "@type": "Organization",
      name: "Reet Technologies",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/#localbusiness`,
    name: "Reet Technologies - Software & Cloud Development Company",
    image: `${baseUrl}/reetlogo.png`,
    url: canonicalUrl,
    telephone: "+91 90229 93526",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    hasOfferCatalog: servicesCatalogSchema,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesItemListSchema) }}
      />

      {/* SEO Service Linkings & Microdata Markings for Search Engine Crawlers */}
      <section
        aria-label="Core Services & Solutions SEO Links"
        className="sr-only"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <h2 itemProp="name">Reet Technologies - Core IT Services & Solutions</h2>
        <meta itemProp="description" content="Explore our enterprise IT solutions, custom software, cloud, and digital services." />
        <ul>
          {servicesList.map((service, index) => (
            <li
              key={index}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content={String(index + 1)} />
              <article itemScope itemType="https://schema.org/Service">
                <Link
                  href={service.link}
                  itemProp="url"
                  title={service.title}
                  rel="bookmark"
                >
                  <span itemProp="name">{service.title}</span>
                </Link>
                <p itemProp="description">{service.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <HomePageClient />
    </>
  );
}
