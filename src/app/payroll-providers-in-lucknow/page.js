import FadeInWhenVisible from "@/components/FadeEffects";
import {
  closureSectionPayrollProviders,
  deliversDataPayrollProviders,
  enterpriseDataPayrollProviders,
  heroDataPayrollProvidersLucknow,
  testimonialsPayrollProviders,
} from "@/utils/data";
import HeroSection from "@/components/Hero";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import CaseStudyTestimonials from "@/components/Testimonial";
import ContactWorkforce from "@/components/ContactWorkforce";
import Script from "next/script";
import Delivers from "@/components/Delivers";

export const metadata = {
  title: "Payroll Providers in Lucknow – Guaranteed Compliance | Workforce",
  description:
    "Looking for payroll providers in Lucknow? Workforce delivers 100% compliant payroll processing, PF/ESIC/TDS filings, investment proof verification, Form 16 accuracy, and penalty-free operations for Lucknow companies.",
  alternates: {
    canonical: "https://www.wflimited.com/payroll-providers-in-lucknow",
  },
  openGraph: {
    title: "Payroll Providers in Lucknow – Guaranteed Compliance | Workforce",
    description:
      "End-to-end payroll services for Lucknow companies: PF, ESIC, TDS, Form 16, investment proof verification, and secure salary disbursement.",
    url: "https://www.wflimited.com/payroll-providers-in-lucknow",
    siteName: "Workforce",
    images: [
      {
        url: "https://www.wflimited.com/og-payroll-lucknow.jpg",
        width: 1200,
        height: 630,
        alt: "Payroll Providers in Lucknow – Workforce",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Providers in Lucknow – Guaranteed Compliance | Workforce",
    description:
      "Lucknow’s trusted payroll provider. Automated PF/ESI/TDS compliance, accurate Form 16, and zero-penalty payroll operations.",
    images: ["https://www.wflimited.com/og-payroll-lucknow.jpg"],
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
            url: "https://www.wflimited.com/payroll-providers-in-lucknow",
            logo: "https://www.wflimited.com/logo.png",
            sameAs: [
              "https://www.linkedin.com/company/workforce-limited/",
              "https://twitter.com/workforce_in",
            ],
            description:
              "Workforce provides expert payroll services in Lucknow with automated PF, ESIC, TDS compliance, Form 16 accuracy, investment proof verification, and zero-penalty payroll operations.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Gomti Nagar, Vibhuti Khand",
              addressLocality: "Lucknow",
              addressRegion: "Uttar Pradesh",
              postalCode: "226010",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-99459-33333",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"],
            },
            serviceType: "Payroll Providers in Lucknow",
            knowsAbout: [
              "Payroll processing Lucknow",
              "Uttar Pradesh labour laws",
              "PF compliance",
              "ESIC compliance",
              "TDS filing",
              "Form 16 generation",
              "salary disbursement",
              "UP payroll rules",
              "investment proof verification",
            ],
          }),
        }}
      />

      <FadeInWhenVisible>
        <HeroSection data={heroDataPayrollProvidersLucknow} />
      </FadeInWhenVisible>

      <EnterpriseChoose data={enterpriseDataPayrollProviders} />

      <CaseStudyTestimonials data={testimonialsPayrollProviders} />
      <Delivers data={deliversDataPayrollProviders} />

      <ContactWorkforce data={closureSectionPayrollProviders} />
    </>
  );
};

export default Page;
