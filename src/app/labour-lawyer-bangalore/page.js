import ContactWorkforce from "@/components/ContactWorkforce";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import FadeInWhenVisible from "@/components/FadeEffects";
import FAQAccordion from "@/components/FAQ";
import HeroSection from "@/components/Hero";
import OPeningSection from "@/components/OpeningSection";
import CaseStudyTestimonials from "@/components/Testimonial";
import {
  closureSectionLabourLawyer,
  enterpriseDataLabourLawyer,
  faqsLabourLawyer,
  heroDataLawerBangalore,
  testimonialsLabourLawyer,
} from "@/utils/data";
import Script from "next/script";
import React from "react";

export const metadata = {
  title:
    "Labour Lawyer in Bangalore | Labour Law Compliance & Legal Defense Experts",
  description:
    "Bangalore’s trusted labour law specialists. From wrongful termination and PF/ESIC inspections to Labour Court defense and compliance audits — we protect your business when the law comes knocking.",
  keywords: [
    "Labour Lawyer Bangalore",
    "Labour Law Consultant Bangalore",
    "Employment Lawyer Bangalore",
    "Labour Court Case Defense",
    "Labour Law Compliance Bangalore",
    "ESIC PF Legal Help",
    "Workplace Dispute Lawyer",
    "Contract Labour Law Bangalore",
  ],
  openGraph: {
    title: "Labour Lawyer in Bangalore | Workforce Legal Experts",
    description:
      "Facing labour law issues in Bangalore? We handle Labour Court cases, inspections, disputes, and compliance for 50+ businesses across Karnataka.",
    url: "https://wflimited.com/labour-lawyer-bangalore",
    siteName: "Workforce",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://wflimited.com/images/labour-lawyer-bangalore-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Labour Lawyer Bangalore - Workforce",
      },
    ],
  },
  alternates: {
    canonical: "https://wflimited.com/labour-lawyer-bangalore",
  },
};

const LabourLawerBangalore = () => {
  const jsonLdLabourLawyer = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Workforce – Labour Lawyer in Bangalore",
    url: "https://wflimited.com/labour-lawyer-bangalore",
    logo: "https://wflimited.com/logo.png",
    image: "https://wflimited.com/images/labour-lawyer-bangalore-banner.jpg",
    description:
      "Workforce is a Bangalore-based labour law practice specializing in Labour Court defense, inspection response, contractor disputes, and compliance advisory for businesses across Karnataka.",
    areaServed: {
      "@type": "City",
      name: "Bangalore",
    },
    serviceType: [
      "Labour Court Representation",
      "Termination & Dispute Defense",
      "PF/ESIC Legal Advisory",
      "Contract Labour Law Compliance",
      "Labour Law Policy Review",
      "Legal Notice Response",
    ],
    provider: {
      "@type": "Organization",
      name: "Workforce",
      url: "https://wflimited.com",
    },
    sameAs: [
      "https://www.linkedin.com/company/epfdesk/",
      "https://x.com/epfdesk",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Church street",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560001",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9945933333",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: "English",
    },
  };

  return (
    <>
      <Script
        id="jsonld-labour-lawyer"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLabourLawyer) }}
      />

      <FadeInWhenVisible>
        <HeroSection data={heroDataLawerBangalore} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <OPeningSection
          quote={`A labour department notice arrives. A disgruntled employee files a case. An inspector threatens closure. These aren't just legal problems—they're business emergencies that can cost you lakhs in penalties, halt operations, and destroy your reputation overnight. For 50+ Bangalore businesses—from Peenya's manufacturers to Whitefield's tech companies, Electronic City's warehouses to Koramangala's startups—we've been the legal shield when labour law compliance goes from paperwork to courtroom. We don't just advise — we defend, represent, and win. Labour Court cases dismissed, inspection closures with zero penalties, settlement negotiations that protect your interests, legal notice responses that stop problems before they escalate. Whether you're facing a wrongful termination claim, PF/ESIC inspection turned legal, contractor labour dispute, or compliance notice you can't understand, our Bangalore-based labour law practice exists for one reason: to protect your business when the law comes knocking.`}
        />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <EnterpriseChoose data={enterpriseDataLabourLawyer} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CaseStudyTestimonials data={testimonialsLabourLawyer} />
      </FadeInWhenVisible>
      <ContactWorkforce data={closureSectionLabourLawyer} />
      <FAQAccordion faqs={faqsLabourLawyer} />
    </>
  );
};

export default LabourLawerBangalore;
