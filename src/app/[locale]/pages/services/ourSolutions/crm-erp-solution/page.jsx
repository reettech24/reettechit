import CrmErpClient from "./CrmErpClient";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  let messages;
  try {
    messages = (await import(`../../../../../../../messages/${locale}.json`)).default;
  } catch (e) {
    messages = (await import(`../../../../../../../messages/en.json`)).default;
  }

  const meta = messages?.crm?.metadata || {};
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://reettechit.com";
  const canonicalUrl = `${baseUrl}/${locale}/pages/services/ourSolutions/crm-erp-solution`;

  const metaTitle =
    meta.title || "CRM & ERP Software Development | Custom Business Solutions";
  const metaDesc =
    meta.description ||
    "Get customized CRM & ERP software to manage customers, sales, finance, HR, inventory and operations with smart dashboards and seamless integrations.";

  return {
    title: metaTitle,
    description: metaDesc,
    keywords:
      meta.keywords ||
      "CRM software development, custom ERP software, business management software, inventory management, customer management system, Reet Technologies",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en/pages/services/ourSolutions/crm-erp-solution`,
        ar: `${baseUrl}/ar/pages/services/ourSolutions/crm-erp-solution`,
        jp: `${baseUrl}/jp/pages/services/ourSolutions/crm-erp-solution`,
        "x-default": `${baseUrl}/en/pages/services/ourSolutions/crm-erp-solution`,
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
          url: `${baseUrl}/test/43.jpeg`,
          width: 1200,
          height: 630,
          alt: "Reet Technologies CRM & ERP Software Development",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDesc,
      images: [`${baseUrl}/test/43.jpeg`],
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

export default async function Page() {
  return <CrmErpClient />;
}
