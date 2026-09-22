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
          name: "Career Counselling & Career Guidance",
          description: "Get expert career counselling and guidance to choose the right IT career path based on your skills, interests, education and career goals.",
          provider: {
            "@type": "Organization",
            name: "Reet Technologies",
            url: baseUrl,
          },
          courseMode: "Blended / Live Mentorship",
          educationalCredentialAwarded: "Career Roadmap Certificate",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Course",
          name: "Non IT to IT Career Program",
          description: "Transition from a non-IT background to a successful IT career with structured training covering essential technology and workplace skills.",
          provider: {
            "@type": "Organization",
            name: "Reet Technologies",
            url: baseUrl,
          },
          courseMode: "Blended / Live Mentorship",
          educationalCredentialAwarded: "Non-IT to IT Transition Certificate",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Course",
          name: "Project Management for IT (Technical & Non Technical)",
          description: "Learn IT project management, Agile, Scrum, team coordination, and delivery practices for technical and non-technical professionals.",
          provider: {
            "@type": "Organization",
            name: "Reet Technologies",
            url: baseUrl,
          },
          courseMode: "Blended / Live Mentorship",
          educationalCredentialAwarded: "IT Project Management Certificate",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Course",
          name: "Cloud Computing with AWS & DevOps",
          description: "Master Cloud Computing with AWS and DevOps through practical learning of EC2, S3, IAM, Docker, and CI/CD pipelines.",
          provider: {
            "@type": "Organization",
            name: "Reet Technologies",
            url: baseUrl,
          },
          courseMode: "Blended / Live Mentorship",
          educationalCredentialAwarded: "AWS & DevOps Specialist Certificate",
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Course",
          name: "React & Node JS",
          description: "Learn full-stack web development with React and Node.js to build modern, responsive and scalable web applications.",
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
        position: 6,
        item: {
          "@type": "Course",
          name: "HTML, CSS & JavaScript Foundation",
          description: "Build a strong foundation in web development with HTML, CSS and JavaScript to create responsive, interactive websites.",
          provider: {
            "@type": "Organization",
            name: "Reet Technologies",
            url: baseUrl,
          },
          courseMode: "Blended / Live Mentorship",
          educationalCredentialAwarded: "Web Development Foundation Certificate",
        },
      },
      {
        "@type": "ListItem",
        position: 7,
        item: {
          "@type": "Course",
          name: "Python Development",
          description: "Learn Python programming from fundamentals to application development, APIs, databases, and automation practices.",
          provider: {
            "@type": "Organization",
            name: "Reet Technologies",
            url: baseUrl,
          },
          courseMode: "Blended / Live Mentorship",
          educationalCredentialAwarded: "Python Developer Certificate",
        },
      },
      {
        "@type": "ListItem",
        position: 8,
        item: {
          "@type": "Course",
          name: "AI Complete Course",
          description: "Master Artificial Intelligence from fundamentals to practical applications, machine learning, generative AI, and automation tools.",
          provider: {
            "@type": "Organization",
            name: "Reet Technologies",
            url: baseUrl,
          },
          courseMode: "Blended / Live Mentorship",
          educationalCredentialAwarded: "AI & Machine Learning Specialist Certificate",
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
