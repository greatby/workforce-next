import FadeInWhenVisible from "@/components/FadeEffects";
import {
  closureSectionPayrollProviders,
  deliversDataPayrollProviders,
  enterpriseDataPayrollProviders,
  heroDataPayrollProvidersDelhi,
  testimonialsPayrollProviders,
} from "@/utils/data";
import HeroSection from "@/components/Hero";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import CaseStudyTestimonials from "@/components/Testimonial";
import ContactWorkforce from "@/components/ContactWorkforce";
import Script from "next/script";
import Delivers from "@/components/Delivers";

export const metadata = {
  title: "Payroll Providers in Delhi – Guaranteed Compliance | Workforce",
  description:
    "Need reliable payroll providers in Delhi? Workforce delivers 100% compliant payroll processing, PF/ESIC filings, investment proof verification, Form 16 accuracy, TDS compliance, and zero-penalty payroll operations for Delhi NCR companies.",
  alternates: {
    canonical: "https://www.wflimited.com/payroll-providers-in-delhi",
  },
  openGraph: {
    title: "Payroll Providers in Delhi – Guaranteed Compliance | Workforce",
    description:
      "End-to-end payroll services for Delhi NCR companies: PF, ESIC, TDS, Form 16, investment proof validation, secure salary disbursement, and zero-penalty compliance.",
    url: "https://www.wflimited.com/payroll-providers-in-delhi",
    siteName: "Workforce",
    images: [
      {
        url: "https://www.wflimited.com/og-payroll-delhi.jpg",
        width: 1200,
        height: 630,
        alt: "Payroll Providers in Delhi – Workforce",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Providers in Delhi – Guaranteed Compliance | Workforce",
    description:
      "Delhi NCR’s trusted payroll provider. Automated PF/ESIC/TDS compliance, Form 16 accuracy, and secure salary processing with zero penalties.",
    images: ["https://www.wflimited.com/og-payroll-delhi.jpg"],
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
            url: "https://www.wflimited.com/payroll-providers-in-delhi",
            logo: "https://www.wflimited.com/logo.png",
            sameAs: [
              "https://www.linkedin.com/company/workforce-limited/",
              "https://twitter.com/workforce_in",
            ],
            description:
              "Workforce provides expert payroll services in Delhi NCR with automated statutory filings, PF/ESIC compliance, TDS accuracy, Form 16 generation, and zero-penalty payroll operations.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Connaught Place, New Delhi",
              addressLocality: "New Delhi",
              addressRegion: "Delhi",
              postalCode: "110001",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-99459-33333",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"],
            },
            serviceType: "Payroll Providers in Delhi",
            knowsAbout: [
              "Payroll processing Delhi",
              "PF compliance",
              "ESIC compliance",
              "TDS filing",
              "Form 16 generation",
              "salary disbursement",
              "Delhi payroll rules",
              "investment proof verification",
            ],
          }),
        }}
      />

      <FadeInWhenVisible>
        <HeroSection data={heroDataPayrollProvidersDelhi} />
      </FadeInWhenVisible>

      <EnterpriseChoose data={enterpriseDataPayrollProviders} />

      <CaseStudyTestimonials data={testimonialsPayrollProviders} />
      <Delivers data={deliversDataPayrollProviders} />

      <ContactWorkforce data={closureSectionPayrollProviders} />
    </>
  );
};

export default Page;
