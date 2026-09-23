import AwsDataPage from "../../pages/services/data-management-services/page";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  
  let messages;
  try {
    messages = (await import(`../../../../../messages/${locale}.json`)).default;
  } catch (e) {
    messages = (await import(`../../../../../messages/en.json`)).default;
  }

  const meta = messages?.cloudsolutions?.metadata || {};
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://reettechit.com";
  const canonicalUrl = `${baseUrl}/${locale}/services/data-management-services`;

  const metaTitle = meta.title || "Data Management Services | Enterprise Database & Data Security";
  const metaDesc =
    meta.description ||
    "Professional Data Management Services for enterprise businesses, including automated data backups, database optimization, cloud data migration, data security and encryption.";

  return {
    title: metaTitle,
    description: metaDesc,
    keywords:
      meta.keywords ||
      "Data Management Services, enterprise data management, database administration, data security, automated backups, database optimization, data encryption",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en/services/data-management-services`,
        ar: `${baseUrl}/ar/services/data-management-services`,
        jp: `${baseUrl}/jp/services/data-management-services`,
        "x-default": `${baseUrl}/en/services/data-management-services`,
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
          url: `${baseUrl}/assets/images/section2-bg-data-management.jpeg`,
          width: 1200,
          height: 630,
          alt: "Reet Technologies Data Management Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDesc,
      images: [`${baseUrl}/assets/images/section2-bg-data-management.jpeg`],
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

export default async function Page({ params }) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://reettechit.com";
  const canonicalUrl = `${baseUrl}/${locale}/services/data-management-services`;

  const techServiceSchema = {
    "@context": "https://schema.org",
    "@type": "TechService",
    "@id": `${canonicalUrl}#service`,
    name: "AWS & Data Security Services",
    provider: {
      "@type": "Organization",
      name: "Reet Technologies",
      url: baseUrl,
      logo: `${baseUrl}/reetlogo.png`,
    },
    serviceType: "Data Management & Security Services",
    areaServed: "Worldwide",
    url: canonicalUrl,
    description:
      "Data Management Services, automated data backups, storage space management, database optimization, data recovery, and security encryption.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Data Security Services Catalog",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Data Backup & Recovery",
            description: "Automated backup pipelines and rapid disaster recovery solutions.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Database Administration & Optimization",
            description: "High-performance database management for SQL Server, MySQL, PostgreSQL, MongoDB, and AWS DBs.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Data Security & Encryption",
            description: "Enterprise-grade data classification, access control, and end-to-end security encryption.",
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${baseUrl}/${locale}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "AWS & Data Security",
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AwsDataPage />
    </>
  );
}
