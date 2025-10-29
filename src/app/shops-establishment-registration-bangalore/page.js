import ContactWorkforce from "@/components/ContactWorkforce";
import Delivers from "@/components/Delivers";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import FadeInWhenVisible from "@/components/FadeEffects";
import FAQAccordion from "@/components/FAQ";
import HeroSection from "@/components/Hero";
import OPeningSection from "@/components/OpeningSection";
import CaseStudyTestimonials from "@/components/Testimonial";
import {
  closureSectionShopEstablishment,
  deliversDataShopEstablishment,
  enterpriseDataShopEstablishment,
  faqsShopsEstablishment,
  heroDataShopEstablishment,
  testimonialsShopEstablishment,
} from "@/utils/data";
import Script from "next/script";

import React from "react";

export const metadata = {
  title:
    "Shops and Establishment Registration in Bangalore | Workforce Consultants",
  description:
    "Get your Shops & Establishment registration in Bangalore within 3 days. Avoid penalties, inspection issues, and delays. Trusted by 50+ Bangalore offices and startups.",
  keywords: [
    "Shops and Establishment Registration Bangalore",
    "S&E Registration Bangalore",
    "Trade License Bangalore",
    "Office Registration Consultant",
    "Labour Compliance Bangalore",
    "Business Registration Bangalore",
    "Establishment Certificate Bangalore",
  ],
  openGraph: {
    title: "Shops and Establishment Registration in Bangalore | Workforce",
    description:
      "Fast and compliant S&E registration for offices, startups, and factories in Bangalore. Avoid penalties and inspection issues — complete in 3 days.",
    url: "https://wflimited.com/shops-establishment-registration-bangalore",
    siteName: "Workforce",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://wflimited.com/images/shops-establishment-bangalore-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Shops and Establishment Registration Bangalore - Workforce",
      },
    ],
  },
  alternates: {
    canonical: "https://wflimited.com/shops-establishment-registration-bangalore",
  },
};

const ContractLabourConsultant = () => {
  const jsonLdShopEstablishment = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Workforce – Shops & Establishment Registration Consultants",
    url: "https://wflimited.com/shops-establishment-registration-bangalore",
    logo: "https://wflimited.com/logo.png",
    image:
      "https://wflimited.com/images/shops-establishment-bangalore-banner.jpg",
    description:
      "Workforce provides end-to-end Shops and Establishment registration services in Bangalore. From online submission to certificate delivery, we ensure compliance within 3 days.",
    areaServed: {
      "@type": "City",
      name: "Bangalore",
    },
    serviceType: [
      "Shops and Establishment Registration",
      "Business License Registration",
      "Labour Compliance Advisory",
      "Annual Renewal & Display Certificate Setup",
      "Inspection & Notice Response",
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
        id="jsonld-shop-establishment"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdShopEstablishment),
        }}
      />
      <FadeInWhenVisible>
        <HeroSection data={heroDataShopEstablishment} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <OPeningSection
          quote={`Opened a new office in Bangalore? Shops and Establishment (S&E) registration isn't optional—it's mandatory within 30 days of starting operations.  Skip it, and you risk ₹25,000+ penalties, rejection of other registrations (EPF, ESIC, GST problems), inability to open bank accounts, and inspection notices that threaten business closure.  For 50+ Bangalore businesses—from Koramangala startups opening their first office to Whitefield tech companies expanding, Peenya manufacturers setting up units, and Electronic City warehouses starting operations—we've been the fastest route from "just started" to "fully legal."  We don't just submit forms—we ensure you get the right registration certificate, understand your ongoing obligations (like annual renewals and compliance requirements), and stay protected from inspection headaches.  One registration. Multiple benefits. Done in 3 days. That's our Shops & Establishment promise.`}
        />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <EnterpriseChoose data={enterpriseDataShopEstablishment} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CaseStudyTestimonials data={testimonialsShopEstablishment} />
      </FadeInWhenVisible>
      <Delivers data={deliversDataShopEstablishment} />
      <ContactWorkforce data={closureSectionShopEstablishment} />
      <FAQAccordion faqs={faqsShopsEstablishment} />
    </>
  );
};

export default ContractLabourConsultant;
