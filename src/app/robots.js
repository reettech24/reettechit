export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://reettechit.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/admin/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
