import FadeInWhenVisible from "@/components/FadeEffects";
import {
  closureSectionPayrollProviders,
  deliversDataPayrollProviders,
  enterpriseDataPayrollProviders,
  heroDataPayrollProvidersVisakhapatnam,
  testimonialsPayrollProviders,
} from "@/utils/data";
import HeroSection from "@/components/Hero";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import CaseStudyTestimonials from "@/components/Testimonial";
import ContactWorkforce from "@/components/ContactWorkforce";
import Script from "next/script";
import Delivers from "@/components/Delivers";

export const metadata = {
  title:
    "Payroll Providers in Visakhapatnam – Guaranteed Compliance | Workforce",
  description:
    "Looking for payroll providers in Visakhapatnam? Workforce delivers 100% compliant payroll processing, PF/ESIC/PT Andhra Pradesh filings, TDS accuracy, investment proof verification, and penalty-free payroll operations.",
  alternates: {
    canonical:
      "https://www.wflimited.com/payroll-providers-in-visakhapatnam",
  },
  openGraph: {
    title:
      "Payroll Providers in Visakhapatnam – Guaranteed Compliance | Workforce",
    description:
      "End-to-end payroll services for Visakhapatnam companies: PF, ESIC, PT Andhra Pradesh, TDS, Form 16, investment proof validation, and secure salary disbursement.",
    url: "https://www.wflimited.com/payroll-providers-in-visakhapatnam",
    siteName: "Workforce",
    images: [
      {
        url: "https://www.wflimited.com/og-payroll-visakhapatnam.jpg",
        width: 1200,
        height: 630,
        alt: "Payroll Providers in Visakhapatnam – Workforce",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Payroll Providers in Visakhapatnam – Guaranteed Compliance | Workforce",
    description:
      "Vizag’s trusted payroll provider. Automated PF/ESI/PT AP/TDS compliance, accurate Form 16, and zero-penalty payroll operations.",
    images: ["https://www.wflimited.com/og-payroll-visakhapatnam.jpg"],
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
            url: "https://www.wflimited.com/payroll-providers-in-visakhapatnam",
            logo: "https://www.wflimited.com/logo.png",
            sameAs: [
              "https://www.linkedin.com/company/workforce-limited/",
              "https://twitter.com/workforce_in",
            ],
            description:
              "Workforce provides expert payroll services in Visakhapatnam with automated PF, ESIC, PT Andhra Pradesh compliance, Form 16 accuracy, investment proof verification, and zero-penalty operations.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "MVP Colony",
              addressLocality: "Visakhapatnam",
              addressRegion: "Andhra Pradesh",
              postalCode: "530017",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-99459-33333",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi", "Telugu"],
            },
            serviceType: "Payroll Providers in Visakhapatnam",
            knowsAbout: [
              "Payroll processing Visakhapatnam",
              "Professional Tax Andhra Pradesh",
              "PF compliance",
              "ESIC compliance",
              "TDS filing",
              "Form 16 generation",
              "salary disbursement",
              "AP payroll rules",
              "investment proof verification",
            ],
          }),
        }}
      />

      <FadeInWhenVisible>
        <HeroSection data={heroDataPayrollProvidersVisakhapatnam} />
      </FadeInWhenVisible>

      <EnterpriseChoose data={enterpriseDataPayrollProviders} />

      <CaseStudyTestimonials data={testimonialsPayrollProviders} />
      <Delivers data={deliversDataPayrollProviders} />

      <ContactWorkforce data={closureSectionPayrollProviders} />
    </>
  );
};

export default Page;
