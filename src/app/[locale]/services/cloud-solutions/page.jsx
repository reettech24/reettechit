import CloudSolutionsPage from "../../pages/services/cloud-solutions/page";

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
  const canonicalUrl = `${baseUrl}/${locale}/services/cloud-solutions`;

  return {
    title: meta.title || "Enterprise Cloud Solutions & AWS Managed Services | Reet Technologies",
    description:
      meta.description ||
      "Scalable cloud infrastructure, AWS EC2/S3/Lambda deployments, VPC networking, DevOps automation, cloud migration, server security & 24/7 server management services by Reet Technologies.",
    keywords:
      meta.keywords ||
      "cloud solutions, AWS managed services, cloud infrastructure, cloud migration, EC2 instance management, S3 storage solutions, cloud security, VPS hosting, server management services Pune, DevOps consulting, Reet Technologies cloud",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en/services/cloud-solutions`,
        ar: `${baseUrl}/ar/services/cloud-solutions`,
        jp: `${baseUrl}/jp/services/cloud-solutions`,
        "x-default": `${baseUrl}/en/services/cloud-solutions`,
      },
    },
    openGraph: {
      title: meta.title || "Enterprise Cloud Solutions & AWS Managed Services | Reet Technologies",
      description:
        meta.description ||
        "Scalable cloud infrastructure, AWS EC2/S3/Lambda deployments, VPC networking, DevOps automation, cloud migration, server security & 24/7 server management services by Reet Technologies.",
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
      title: meta.title || "Enterprise Cloud Solutions & AWS Managed Services | Reet Technologies",
      description:
        meta.description ||
        "Scalable cloud infrastructure, AWS EC2/S3/Lambda deployments, VPC networking, DevOps automation, cloud migration, server security & 24/7 server management services by Reet Technologies.",
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
  const canonicalUrl = `${baseUrl}/${locale}/services/cloud-solutions`;

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
