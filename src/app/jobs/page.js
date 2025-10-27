import FadeInWhenVisible from "@/components/FadeEffects";
import HeroJobs from "@/components/HeroJobs";
import OpenPositions from "@/components/OpenPositions";
import PerksAndBenefits from "@/components/PerksAndBenefits";
import AboutHero from "@/components/Vision";
import {
  WhoWeAreLookingFor,
  YourRoleInTransformation,
} from "@/components/WhyJoinUs";
import React from "react";
import Script from "next/script";

export const metadata = {
  title:
    "Jobs | Workforce - Where Law Becomes Code. Where Compliance Becomes Infrastructure.",
  description:
    "Join Workforce — where law becomes code. We're building India's employment law infrastructure. Explore career opportunities in technology, legal operations, and compliance automation.",
  alternates: {
    canonical: "https://www.wflimited.com/jobs",
  },
  openGraph: {
    title:
      "Jobs | Workforce - Where Law Becomes Code. Where Compliance Becomes Infrastructure.",
    description:
      "Join Workforce — where law becomes code. We're building India's employment law infrastructure. Explore career opportunities in technology, legal operations, and compliance automation.",
    url: "https://www.wflimited.com/jobs",
    siteName: "Workforce",
    type: "website",
    images: [
      {
        url: "https://www.wflimited.com/images/jobs-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Workforce Careers Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Jobs | Workforce - Where Law Becomes Code. Where Compliance Becomes Infrastructure.",
    description:
      "Workforce is hiring! Join us in building India’s compliance infrastructure.",
    images: ["https://www.wflimited.com/images/jobs-banner.jpg"],
  },
};

const Jobs = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Workforce Limited",
        url: "https://www.wflimited.com",
        logo: "https://www.wflimited.com/logo.png",
        sameAs: [
          "https://www.linkedin.com/company/workforcelimited/",
          "https://twitter.com/workforcelimited",
        ],
      },
      {
        "@type": "WebPage",
        name: "Jobs | Workforce",
        url: "https://www.wflimited.com/jobs",
        description:
          "Workforce is hiring for technology, operations, and legal compliance roles. Join us to build India's employment law infrastructure.",
      },
      {
        "@type": "JobPosting",
        title: "Software Engineer",
        description:
          "Workforce is looking for a Software Engineer passionate about automating legal compliance workflows using modern web technologies.",
        hiringOrganization: {
          "@type": "Organization",
          name: "Workforce Limited",
          sameAs: "https://www.wflimited.com",
        },
        employmentType: "FULL_TIME",
        datePosted: "2025-10-01",
        validThrough: "2025-12-31T23:59",
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bangalore",
            addressRegion: "Karnataka",
            addressCountry: "IN",
          },
        },
        applicantLocationRequirements: {
          "@type": "Country",
          name: "India",
        },
        industry: "LegalTech / Compliance Automation",
      },
    ],
  };
  return (
    <>
      <Script
        id="job-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <FadeInWhenVisible>
        <HeroJobs />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <AboutHero />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <OpenPositions />
      </FadeInWhenVisible>
      {/* <WhyJoinUs /> */}
      {/* <FadeInWhenVisible>
        <YourRoleInTransformation />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <WhoWeAreLookingFor/>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <PerksAndBenefits/>
      </FadeInWhenVisible> */}
    </>
  );
};

export default Jobs;
