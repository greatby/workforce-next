import FadeInWhenVisible from "@/components/FadeEffects";
import {
  closureSectionPayrollProviders,
  deliversDataPayrollProviders,
  enterpriseDataPayrollProviders,
  heroDataPayrollProvidersHyderabad,
  testimonialsPayrollProviders,
} from "@/utils/data";
import HeroSection from "@/components/Hero";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import CaseStudyTestimonials from "@/components/Testimonial";
import ContactWorkforce from "@/components/ContactWorkforce";
import Script from "next/script";
import Delivers from "@/components/Delivers";

export const metadata = {
  title: "Payroll Providers in Hyderabad – Guaranteed Compliance | Workforce",
  description:
    "Looking for payroll providers in Hyderabad? Workforce ensures 100% compliant payroll processing, PF/ESIC/PT Telangana filings, Form 16 accuracy, investment proof verification, and penalty-free payroll operations.",
  alternates: {
    canonical: "https://www.wflimited.com/payroll-providers-in-hyderabad",
  },
  openGraph: {
    title: "Payroll Providers in Hyderabad – Guaranteed Compliance | Workforce",
    description:
      "End-to-end payroll services for Hyderabad companies: PF, ESIC, PT Telangana, TDS, Form 16, investment proof validation, and secure salary disbursement.",
    url: "https://www.wflimited.com/payroll-providers-in-hyderabad",
    siteName: "Workforce",
    images: [
      {
        url: "https://www.wflimited.com/og-payroll-hyderabad.jpg",
        width: 1200,
        height: 630,
        alt: "Payroll Providers in Hyderabad – Workforce",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Providers in Hyderabad – Guaranteed Compliance | Workforce",
    description:
      "Hyderabad’s trusted payroll provider. Automated PF/ESI/PT Telangana/TDS filings, Form 16 accuracy, and secure salary processing with zero penalties.",
    images: ["https://www.wflimited.com/og-payroll-hyderabad.jpg"],
  },
};

const Page = () => {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Workforce Limited",
            url: "https://www.wflimited.com/payroll-providers-in-hyderabad",
            logo: "https://www.wflimited.com/logo.png",
            sameAs: [
              "https://www.linkedin.com/company/workforce-limited/",
              "https://twitter.com/workforce_in",
            ],
            description:
              "Workforce provides expert payroll services in Hyderabad with automated PF, ESIC, PT Telangana compliance, Form 16 accuracy, investment proof verification, and zero-penalty payroll operations.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "HITEC City, Madhapur",
              addressLocality: "Hyderabad",
              addressRegion: "Telangana",
              postalCode: "500081",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-99459-33333",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi", "Telugu"],
            },
            serviceType: "Payroll Providers in Hyderabad",
            knowsAbout: [
              "Payroll processing Hyderabad",
              "Professional Tax Telangana",
              "PF compliance",
              "ESIC compliance",
              "TDS filing",
              "Form 16 generation",
              "salary disbursement",
              "Telangana payroll rules",
              "investment proof verification",
            ],
          }),
        }}
      />

      <FadeInWhenVisible>
        <HeroSection data={heroDataPayrollProvidersHyderabad} />
      </FadeInWhenVisible>

      <EnterpriseChoose data={enterpriseDataPayrollProviders} />

      <CaseStudyTestimonials data={testimonialsPayrollProviders} />
      <Delivers data={deliversDataPayrollProviders} />

      <ContactWorkforce data={closureSectionPayrollProviders} />
    </>
  );
};

export default Page;
