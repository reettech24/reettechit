import HomePageClient from "@/components/pages/HomePageClient";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (e) {
    messages = (await import(`../../../messages/en.json`)).default;
  }

  const metaTitle =
    messages?.metadata?.title || "Reet Technologies | IT Solutions & Services | Web, Cloud, AWS & Software Development";
  const metaDesc =
    messages?.metadata?.description ||
    "Get professional IT solutions for your business. AWS & cloud services, web & mobile apps, software development, digital transformation and IT consulting.";

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://reettechit.com";
  const canonicalUrl = `${baseUrl}/${locale}`;

  return {
    title: metaTitle,
    description: metaDesc,
    keywords:
      "software development company, web app development, mobile application development, AWS cloud solutions, IT consulting, full stack development, AI ML integration, Pune IT company, Reet Technologies",
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

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "Reet Technologies",
    legalName: "Reet Technologies Pvt. Ltd.",
    url: baseUrl,
    logo: `${baseUrl}/reetlogo.png`,
    description:
      "Reet Technologies specializes in developing fast, secure, and scalable web applications, mobile applications, AWS cloud infrastructure, and AI/ML solutions.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 797-290-5758",
      contactType: "customer service",
      email: "sales@reettechit.com",
      availableLanguage: ["English", "Hindi", "Arabic", "Japanese"],
    },
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
    telephone: "+91 797-290-5758",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
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
      <HomePageClient />
    </>
  );
}
