import CloudSolutionsPage from "../../pages/services/aws-data-security/page";

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
  const canonicalUrl = `${baseUrl}/${locale}/services/aws-data-security`;

  const metaTitle = meta.title || "AWS & Cloud Solutions | Cloud Infrastructure & DevOps";
  const metaDesc =
    meta.description ||
    "Get reliable AWS and cloud solutions for your business, including cloud infrastructure, server management, AWS migration, security, backups, monitoring and DevOps services.";

  return {
    title: metaTitle,
    description: metaDesc,
    keywords:
      meta.keywords ||
      "cloud solutions, AWS managed services, cloud infrastructure, cloud migration, EC2 instance management, S3 storage solutions, cloud security, VPS hosting, server management services Pune, DevOps consulting, Reet Technologies cloud",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en/services/aws-data-security`,
        ar: `${baseUrl}/ar/services/aws-data-security`,
        jp: `${baseUrl}/jp/services/aws-data-security`,
        "x-default": `${baseUrl}/en/services/aws-data-security`,
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
          alt: "Reet Technologies Enterprise Cloud Solutions & AWS Managed Services",
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

export default async function Page({ params }) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://reettechit.com";
  const canonicalUrl = `${baseUrl}/${locale}/services/aws-data-security`;

  const techServiceSchema = {
    "@context": "https://schema.org",
    "@type": "TechService",
    "@id": `${canonicalUrl}#service`,
    name: "Enterprise Cloud Solutions & AWS Managed Services",
    provider: {
      "@type": "Organization",
      name: "Reet Technologies",
      url: baseUrl,
      logo: `${baseUrl}/reetlogo.png`,
    },
    serviceType: "Cloud Infrastructure & Managed Server Services",
    areaServed: "Worldwide",
    url: canonicalUrl,
    description:
      "Scalable cloud infrastructure setup, AWS EC2, S3, Lambda deployments, VPC network isolation, server security hardening, performance monitoring, and 24/7 disaster recovery planning.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cloud Solutions Catalog",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AWS EC2 Instance Deployment & Management",
            description: "Scalable cloud virtual servers configured for peak performance and auto-scaling.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cloud Migration Services",
            description: "Seamless workload, database, and asset migration to cloud with zero downtime.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Server Management & Security Hardening",
            description: "24/7 server health monitoring, security patch management, and SSL integration.",
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
        name: "Cloud Solutions",
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
      <CloudSolutionsPage />
    </>
  );
}
