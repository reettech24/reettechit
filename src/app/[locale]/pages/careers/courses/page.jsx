import CoursesClient from "./CoursesClient";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  let messages;
  try {
    messages = (await import(`../../../../../../messages/${locale}.json`)).default;
  } catch (e) {
    messages = (await import(`../../../../../../messages/en.json`)).default;
  }

  const meta = messages?.studentcourses?.metadata || {};
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://reettechit.com";
  const canonicalUrl = `${baseUrl}/${locale}/pages/careers/courses`;

  return {
    title: meta.title || "Industry-Ready Student Courses & Tech Internships | Reet Technologies",
    description:
      meta.description ||
      "Comprehensive hands-on courses in Full-Stack Web Development, Cloud Computing, Mobile Apps, Cybersecurity, and AI/ML with live projects, 1-on-1 mentor reviews, and career placement support at Reet Technologies.",
    keywords:
      meta.keywords ||
      "student courses, IT training Pune, full stack developer course, cloud computing training, software internship, web development bootcamps, Reet Technologies academy, live project training, tech career accelerator",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en/pages/careers/courses`,
        ar: `${baseUrl}/ar/pages/careers/courses`,
        jp: `${baseUrl}/jp/pages/careers/courses`,
        "x-default": `${baseUrl}/en/pages/careers/courses`,
      },
    },
    openGraph: {
      title: meta.title || "Industry-Ready Student Courses & Tech Internships | Reet Technologies",
      description:
        meta.description ||
        "Comprehensive hands-on courses in Full-Stack Web Development, Cloud Computing, Mobile Apps, Cybersecurity, and AI/ML with live projects, 1-on-1 mentor reviews, and career placement support at Reet Technologies.",
      url: canonicalUrl,
      siteName: "Reet Technologies",
      locale: locale,
      type: "website",
      images: [
        {
          url: `${baseUrl}/assets/images/bannerimage.jpeg`,
          width: 1200,
          height: 630,
          alt: "Reet Technologies Industry-Ready Student Courses & Tech Internships",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title || "Industry-Ready Student Courses & Tech Internships | Reet Technologies",
      description:
        meta.description ||
        "Comprehensive hands-on courses in Full-Stack Web Development, Cloud Computing, Mobile Apps, Cybersecurity, and AI/ML with live projects, 1-on-1 mentor reviews, and career placement support at Reet Technologies.",
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
  const canonicalUrl = `${baseUrl}/${locale}/pages/careers/courses`;

  const coursesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${canonicalUrl}#coursesList`,
    name: "Reet Technologies Industry-Ready Student Courses",
    description: "Curated, project-driven software development programs designed to build real skills and verified job portfolios.",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Course",
          name: "Full-Stack Web Development",
          description: "Master React, Next.js, Node.js, Express, and MongoDB. Build live web applications with 1-on-1 mentor PR reviews.",
          provider: {
            "@type": "Organization",
            name: "Reet Technologies",
            url: baseUrl,
          },
          courseMode: "Blended / Live Mentorship",
          educationalCredentialAwarded: "Full-Stack Web Developer Certificate",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Course",
          name: "Cloud & DevOps Engineering",
          description: "Learn AWS EC2, S3, Docker, CI/CD pipelines, and infrastructure monitoring with real production deployments.",
          provider: {
            "@type": "Organization",
            name: "Reet Technologies",
            url: baseUrl,
          },
          courseMode: "Blended / Live Mentorship",
          educationalCredentialAwarded: "Cloud & DevOps Specialist Certificate",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Course",
          name: "Mobile App Development",
          description: "Build cross-platform iOS and Android apps using React Native, Expo, and Firebase backend services.",
          provider: {
            "@type": "Organization",
            name: "Reet Technologies",
            url: baseUrl,
          },
          courseMode: "Blended / Live Mentorship",
          educationalCredentialAwarded: "Mobile App Developer Certificate",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Course",
          name: "AI & Machine Learning Foundations",
          description: "Hands-on Python, Pandas, Scikit-Learn, and LLM integrations for intelligent software automation.",
          provider: {
            "@type": "Organization",
            name: "Reet Technologies",
            url: baseUrl,
          },
          courseMode: "Blended / Live Mentorship",
          educationalCredentialAwarded: "AI & Machine Learning Certificate",
        },
      },
    ],
  };

  const programSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: "Reet Technologies Student Academy & Tech Career Accelerator",
    description: "A 4-stage hands-on career accelerator pathway to transition students from beginner concepts to hired software engineers.",
    provider: {
      "@type": "Organization",
      name: "Reet Technologies",
      url: baseUrl,
    },
    educationalCredentialAwarded: "Industry-Ready Student Software Certificate",
    offers: {
      "@type": "Offer",
      category: "IT Education & Technical Training",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
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
        name: "Careers",
        item: `${baseUrl}/${locale}/pages/careers`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Student Courses",
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are these courses suitable for beginners?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our programs start from core fundamentals and progressively move into live capstone projects with 1-on-1 mentor guidance.",
        },
      },
      {
        "@type": "Question",
        name: "Will I get live code reviews from active developers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, every module includes pull request audits conducted by active software engineers at Reet Technologies.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer placement support for students?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide portfolio reviews, resume building, mock technical interviews, and direct referral opportunities for top capstone performers.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(programSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CoursesClient />
    </>
  );
}
