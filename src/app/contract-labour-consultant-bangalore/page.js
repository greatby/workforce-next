import ContactWorkforce from "@/components/ContactWorkforce";
import Delivers from "@/components/Delivers";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import FadeInWhenVisible from "@/components/FadeEffects";
import FAQAccordion from "@/components/FAQ";
import HeroSection from "@/components/Hero";
import OPeningSection from "@/components/OpeningSection";
import CaseStudyTestimonials from "@/components/Testimonial";
import {
  closureSectionContractLabour,
  deliversDataContractLabour,
  enterpriseDataContractLabour,
  faqsContractLabour,
  heroDataContractLabour,
  testimonialsContractLabour,
} from "@/utils/data";
import Script from "next/script";

import React from "react";

export const metadata = {
  title:
    "Contract Labour Consultant in Bangalore | Principal Employer Compliance Experts",
  description:
    "End-to-end contract labour compliance for Bangalore businesses. From principal employer registration and contractor audits to inspection defense and license renewals — we handle it all.",
  keywords: [
    "Contract Labour Consultant Bangalore",
    "Principal Employer Registration",
    "Contract Labour License",
    "Labour Law Compliance",
    "Contractor Compliance Audit",
    "Inspection Defense",
    "Workforce Compliance",
    "Labour Consultant Bangalore",
  ],
  openGraph: {
    title:
      "Contract Labour Consultant in Bangalore | Workforce Compliance Experts",
    description:
      "Ensure contractor compliance, avoid penalties, and stay legally protected. Workforce handles registration, audits, renewals, and inspection defense for Bangalore establishments.",
    url: "https://wflimited.com/contract-labour-consultant-bangalore",
    siteName: "Workforce",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://wflimited.com/images/contract-labour-consultant-bangalore-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Contract Labour Consultant Bangalore",
      },
    ],
  },
  alternates: {
    canonical: "https://wflimited.com/contract-labour-consultant-bangalore",
  },
};

const ContractLabourConsultant = () => {
  const jsonLdContractLabour = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Workforce – Contract Labour Consultant in Bangalore",
    url: "https://wflimited.com/contract-labour-consultant-bangalore",
    logo: "https://wflimited.com/logo.png",
    image: "https://wflimited.com/images/contract-labour-consultant-bangalore-banner.jpg",
    description:
      "We help Bangalore establishments stay compliant with the Contract Labour Act. Services include principal employer registration, contractor audits, license renewals, and inspection defense.",
    areaServed: {
      "@type": "City",
      name: "Bangalore",
    },
    serviceType: [
      "Principal Employer Registration",
      "Contract Labour License Management",
      "Contractor Compliance Audits",
      "Inspection Defense",
      "Labour Law Advisory",
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
        id="jsonld-contract-labour"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdContractLabour),
        }}
      />
      <FadeInWhenVisible>
        <HeroSection data={heroDataContractLabour} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <OPeningSection
          quote={`You hired contractors to save costs and headaches. Instead, you got new headaches: contractor PF/ESIC defaults that become your liability, labour inspectors threatening to hold you responsible, principal employer obligations you never understood, license renewals you missed, and the constant fear that your contractor's non-compliance will shut down your operations. For 50+ Bangalore establishments—Peenya manufacturers with 100+ contract workers, Electronic City warehouses dependent on contract labor, Whitefield tech companies using contract housekeeping/security, and Koramangala startups trying to stay "asset-light"—we've been the shield between contractor chaos and business liability. We don't just tell you what contractors should do—we audit them, monitor them, and ensure their non-compliance never becomes your crisis. Principal employer registration, contractor license management, monthly compliance verification, inspection defense, and legal protection when contractors default. Your business. Your contractors. Our responsibility to ensure their mess never becomes yours.`}
        />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <EnterpriseChoose data={enterpriseDataContractLabour} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CaseStudyTestimonials data={testimonialsContractLabour} />
      </FadeInWhenVisible>
      <Delivers data={deliversDataContractLabour} />
      <ContactWorkforce data={closureSectionContractLabour} />
      <FAQAccordion faqs={faqsContractLabour} />
    </>
  );
};

export default ContractLabourConsultant;
