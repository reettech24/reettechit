export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://reettechit.com";
  const locales = ["en", "ar", "jp"];

  const routes = [
    // Core Navigation & Service Pages
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "/services/cloud-solutions", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services/aws-data-security", priority: 0.9, changeFrequency: "weekly" },
    { path: "/pages/services/aws-data-security", priority: 0.9, changeFrequency: "weekly" },
    { path: "/pages/services/ourSolutions/crm-erp-solution", priority: 0.9, changeFrequency: "weekly" },
    { path: "/pages/services/ourSolutions/mobile-and-web-application", priority: 0.9, changeFrequency: "weekly" },
    { path: "/pages/services/ourSolutions/digital-transformation", priority: 0.85, changeFrequency: "weekly" },
    { path: "/pages/services/ourSolutions/ai-ml", priority: 0.85, changeFrequency: "weekly" },
    { path: "/pages/services/ourSolutions/digital-marketing", priority: 0.85, changeFrequency: "weekly" },
    { path: "/pages/services/ourSolutions/ar-vr-solutions", priority: 0.85, changeFrequency: "weekly" },
    { path: "/pages/services/ourSolutions/cyber-security", priority: 0.85, changeFrequency: "weekly" },
    { path: "/pages/careers/courses", priority: 0.9, changeFrequency: "weekly" },
    { path: "/pages/services", priority: 0.85, changeFrequency: "weekly" },
    { path: "/pages/services/ourEnterprise", priority: 0.8, changeFrequency: "weekly" },
    { path: "/pages/services/ourSolutions", priority: 0.8, changeFrequency: "weekly" },

    // About & Careers
    { path: "/pages/about", priority: 0.85, changeFrequency: "monthly" },
    { path: "/pages/about/ourFocus", priority: 0.75, changeFrequency: "monthly" },
    { path: "/pages/about/ourTeam", priority: 0.75, changeFrequency: "monthly" },
    { path: "/pages/about/ourProjects", priority: 0.8, changeFrequency: "weekly" },
    { path: "/pages/about/collabration", priority: 0.7, changeFrequency: "monthly" },
    { path: "/pages/contact", priority: 0.85, changeFrequency: "monthly" },
    { path: "/pages/careers", priority: 0.8, changeFrequency: "weekly" },
    { path: "/pages/careers/jobs-hiring", priority: 0.8, changeFrequency: "weekly" },

    // Products
    { path: "/pages/products", priority: 0.8, changeFrequency: "monthly" },
    { path: "/pages/products/nexus-india", priority: 0.85, changeFrequency: "weekly" },
    { path: "/pages/products/nexus-online-management", priority: 0.85, changeFrequency: "weekly" },

    // Industry Solutions
    { path: "/pages/industries/automotive", priority: 0.75, changeFrequency: "monthly" },
    { path: "/pages/industries/bfsi", priority: 0.75, changeFrequency: "monthly" },
    { path: "/pages/industries/education", priority: 0.75, changeFrequency: "monthly" },
    { path: "/pages/industries/health-care", priority: 0.75, changeFrequency: "monthly" },
    { path: "/pages/industries/logistics", priority: 0.75, changeFrequency: "monthly" },
    { path: "/pages/industries/manufacturing", priority: 0.75, changeFrequency: "monthly" },
    { path: "/pages/industries/real-Estate", priority: 0.75, changeFrequency: "monthly" },
    { path: "/pages/industries/retail-E-commerce", priority: 0.75, changeFrequency: "monthly" },

    // Policies
    { path: "/pages/policies/privacyPolicy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/pages/policies/termsConditions", priority: 0.3, changeFrequency: "yearly" },
    { path: "/pages/policies/californiaPrivacyPolicy", priority: 0.3, changeFrequency: "yearly" },
  ];

  const entries = [];

  for (const route of routes) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route.path}`,
            ar: `${baseUrl}/ar${route.path}`,
            jp: `${baseUrl}/jp${route.path}`,
            "x-default": `${baseUrl}/en${route.path}`,
          },
        },
      });
    }
  }

  return entries;
}
