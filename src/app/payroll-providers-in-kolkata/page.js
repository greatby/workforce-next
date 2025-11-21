import FadeInWhenVisible from "@/components/FadeEffects";
import {
  closureSectionPayrollProviders,
  deliversDataPayrollProviders,
  enterpriseDataPayrollProviders,
  heroDataPayrollProvidersKolkata,
  testimonialsPayrollProviders,
} from "@/utils/data";
import HeroSection from "@/components/Hero";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import CaseStudyTestimonials from "@/components/Testimonial";
import ContactWorkforce from "@/components/ContactWorkforce";
import Script from "next/script";
import Delivers from "@/components/Delivers";

export const metadata = {
  title: "Payroll Providers in Kolkata – Guaranteed Compliance | Workforce",
  description:
    "Looking for payroll providers in Kolkata? Workforce offers 100% compliant payroll processing, PF/ESIC/PT West Bengal filings, Form 16 accuracy, investment proof verification, and penalty-free payroll operations.",
  alternates: {
    canonical: "https://www.wflimited.com/payroll-providers-in-kolkata",
  },
  openGraph: {
    title: "Payroll Providers in Kolkata – Guaranteed Compliance | Workforce",
    description:
      "End-to-end payroll services for Kolkata companies: PF, ESIC, PT West Bengal, TDS, Form 16, investment proof validation, and accurate salary disbursement.",
    url: "https://www.wflimited.com/payroll-providers-in-kolkata",
    siteName: "Workforce",
    images: [
      {
        url: "https://www.wflimited.com/og-payroll-kolkata.jpg",
        width: 1200,
        height: 630,
        alt: "Payroll Providers in Kolkata – Workforce",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Providers in Kolkata – Guaranteed Compliance | Workforce",
    description:
      "Kolkata’s trusted payroll provider. Automated PF/ESI/PT West Bengal/TDS compliance, accurate Form 16, and zero-penalty payroll operations.",
    images: ["https://www.wflimited.com/og-payroll-kolkata.jpg"],
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
            url: "https://www.wflimited.com/payroll-providers-in-kolkata",
            logo: "https://www.wflimited.com/logo.png",
            sameAs: [
              "https://www.linkedin.com/company/workforce-limited/",
              "https://twitter.com/workforce_in",
            ],
            description:
              "Workforce provides expert payroll services in Kolkata with automated PF, ESIC, PT West Bengal compliance, Form 16 accuracy, investment proof verification, and zero-penalty payroll operations.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Sector V, Salt Lake City",
              addressLocality: "Kolkata",
              addressRegion: "West Bengal",
              postalCode: "700091",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-99459-33333",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi", "Bengali"],
            },
            serviceType: "Payroll Providers in Kolkata",
            knowsAbout: [
              "Payroll processing Kolkata",
              "Professional Tax West Bengal",
              "PF compliance",
              "ESIC compliance",
              "TDS filing",
              "Form 16 generation",
              "salary disbursement",
              "West Bengal payroll rules",
              "investment proof verification",
            ],
          }),
        }}
      />

      <FadeInWhenVisible>
        <HeroSection data={heroDataPayrollProvidersKolkata} />
      </FadeInWhenVisible>

      <EnterpriseChoose data={enterpriseDataPayrollProviders} />

      <CaseStudyTestimonials data={testimonialsPayrollProviders} />
      <Delivers data={deliversDataPayrollProviders} />

      <ContactWorkforce data={closureSectionPayrollProviders} />
    </>
  );
};

export default Page;
