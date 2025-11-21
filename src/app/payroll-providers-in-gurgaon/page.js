import FadeInWhenVisible from "@/components/FadeEffects";
import {
  closureSectionPayrollProviders,
  deliversDataPayrollProviders,
  enterpriseDataPayrollProviders,
  heroDataPayrollProvidersGurgaon,
  testimonialsPayrollProviders,
} from "@/utils/data";
import HeroSection from "@/components/Hero";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import CaseStudyTestimonials from "@/components/Testimonial";
import ContactWorkforce from "@/components/ContactWorkforce";
import Script from "next/script";
import Delivers from "@/components/Delivers";

export const metadata = {
  title: "Payroll Providers in Gurgaon – Guaranteed Compliance | Workforce",
  description:
    "Looking for payroll providers in Gurgaon? Workforce ensures 100% compliant payroll processing, PF/ESIC/TDS filings, investment proof verification, Form 16 accuracy, and penalty-free operations for Gurugram companies.",
  alternates: {
    canonical: "https://www.wflimited.com/payroll-providers-in-gurgaon",
  },
  openGraph: {
    title: "Payroll Providers in Gurgaon – Guaranteed Compliance | Workforce",
    description:
      "End-to-end payroll services for Gurugram companies: PF, ESIC, TDS, Form 16, investment proof validation, and accurate salary disbursement.",
    url: "https://www.wflimited.com/payroll-providers-in-gurgaon",
    siteName: "Workforce",
    images: [
      {
        url: "https://www.wflimited.com/og-payroll-gurgaon.jpg",
        width: 1200,
        height: 630,
        alt: "Payroll Providers in Gurgaon – Workforce",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Providers in Gurgaon – Guaranteed Compliance | Workforce",
    description:
      "Gurgaon’s trusted payroll provider. Automated PF/ESI/TDS compliance, accurate Form 16, and zero-penalty payroll operations.",
    images: ["https://www.wflimited.com/og-payroll-gurgaon.jpg"],
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
            url: "https://www.wflimited.com/payroll-providers-in-gurgaon",
            logo: "https://www.wflimited.com/logo.png",
            sameAs: [
              "https://www.linkedin.com/company/workforce-limited/",
              "https://twitter.com/workforce_in",
            ],
            description:
              "Workforce provides expert payroll services in Gurgaon with automated PF, ESIC, TDS compliance, Form 16 accuracy, investment proof verification, and zero-penalty payroll operations.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Cyber City, DLF Phase 3",
              addressLocality: "Gurugram",
              addressRegion: "Haryana",
              postalCode: "122002",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-99459-33333",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"],
            },
            serviceType: "Payroll Providers in Gurgaon",
            knowsAbout: [
              "Payroll processing Gurgaon",
              "Haryana labour laws",
              "PF compliance",
              "ESIC compliance",
              "TDS filing",
              "Form 16 generation",
              "salary disbursement",
              "Haryana payroll rules",
              "investment proof verification",
            ],
          }),
        }}
      />

      <FadeInWhenVisible>
        <HeroSection data={heroDataPayrollProvidersGurgaon} />
      </FadeInWhenVisible>

      <EnterpriseChoose data={enterpriseDataPayrollProviders} />

      <CaseStudyTestimonials data={testimonialsPayrollProviders} />
      <Delivers data={deliversDataPayrollProviders} />

      <ContactWorkforce data={closureSectionPayrollProviders} />
    </>
  );
};

export default Page;
