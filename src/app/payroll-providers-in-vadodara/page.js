import FadeInWhenVisible from "@/components/FadeEffects";
import {
  closureSectionPayrollProviders,
  deliversDataPayrollProviders,
  enterpriseDataPayrollProviders,
  heroDataPayrollProvidersVadodara,
  testimonialsPayrollProviders,
} from "@/utils/data";
import HeroSection from "@/components/Hero";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import CaseStudyTestimonials from "@/components/Testimonial";
import ContactWorkforce from "@/components/ContactWorkforce";
import Script from "next/script";
import Delivers from "@/components/Delivers";

export const metadata = {
  title: "Payroll Providers in Vadodara – Guaranteed Compliance | Workforce",
  description:
    "Looking for payroll providers in Vadodara? Workforce offers 100% compliant payroll processing, PF/ESIC/PT Gujarat filings, Form 16 accuracy, investment proof verification, and penalty-free operations for Vadodara companies.",
  alternates: {
    canonical: "https://www.wflimited.com/payroll-providers-in-vadodara",
  },
  openGraph: {
    title: "Payroll Providers in Vadodara – Guaranteed Compliance | Workforce",
    description:
      "Complete payroll processing for Vadodara companies: PF, ESIC, PT Gujarat, TDS, Form 16, investment proof validation, and secure salary disbursement.",
    url: "https://www.wflimited.com/payroll-providers-in-vadodara",
    siteName: "Workforce",
    images: [
      {
        url: "https://www.wflimited.com/og-payroll-vadodara.jpg",
        width: 1200,
        height: 630,
        alt: "Payroll Providers in Vadodara – Workforce",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Providers in Vadodara – Guaranteed Compliance | Workforce",
    description:
      "Vadodara’s trusted payroll provider. Automated PF/ESI/PT Gujarat/TDS compliance, accurate Form 16s, and zero-penalty payroll operations.",
    images: ["https://www.wflimited.com/og-payroll-vadodara.jpg"],
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
            url: "https://www.wflimited.com/payroll-providers-in-vadodara",
            logo: "https://www.wflimited.com/logo.png",
            sameAs: [
              "https://www.linkedin.com/company/workforce-limited/",
              "https://twitter.com/workforce_in",
            ],
            description:
              "Workforce provides expert payroll services in Vadodara with automated PF, ESIC, PT Gujarat compliance, Form 16 accuracy, investment proof verification, and zero-penalty operations.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Alkapuri, R C Dutt Road",
              addressLocality: "Vadodara",
              addressRegion: "Gujarat",
              postalCode: "390007",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-99459-33333",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi", "Gujarati"],
            },
            serviceType: "Payroll Providers in Vadodara",
            knowsAbout: [
              "Payroll processing Vadodara",
              "Professional Tax Gujarat",
              "PF compliance",
              "ESIC compliance",
              "TDS filing",
              "Form 16 generation",
              "salary disbursement",
              "Gujarat payroll rules",
              "investment proof verification",
            ],
          }),
        }}
      />

      <FadeInWhenVisible>
        <HeroSection data={heroDataPayrollProvidersVadodara} />
      </FadeInWhenVisible>

      <EnterpriseChoose data={enterpriseDataPayrollProviders} />

      <CaseStudyTestimonials data={testimonialsPayrollProviders} />
      <Delivers data={deliversDataPayrollProviders} />

      <ContactWorkforce data={closureSectionPayrollProviders} />
    </>
  );
};

export default Page;
