import FadeInWhenVisible from "@/components/FadeEffects";
import {
  closureSectionPayrollProviders,
  deliversDataPayrollProviders,
  enterpriseDataPayrollProviders,
  heroDataPayrollProvidersMumbai,
  testimonialsPayrollProviders,
} from "@/utils/data";
import HeroSection from "@/components/Hero";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import CaseStudyTestimonials from "@/components/Testimonial";
import ContactWorkforce from "@/components/ContactWorkforce";
import Script from "next/script";
import Delivers from "@/components/Delivers";

export const metadata = {
  title: "Payroll Providers in Mumbai – Guaranteed Compliance | Workforce",
  description:
    "Searching for reliable payroll providers in Mumbai? Workforce delivers 100% compliant payroll processing, PF/ESIC/PT Maharashtra filings, Form 16 accuracy, investment proof verification, and zero-penalty payroll operations.",
  alternates: {
    canonical: "https://www.wflimited.com/payroll-providers-in-mumbai",
  },
  openGraph: {
    title: "Payroll Providers in Mumbai – Guaranteed Compliance | Workforce",
    description:
      "End-to-end payroll processing for Mumbai companies: PF, ESIC, PT Maharashtra, TDS, Form 16, investment proof validation, and secure salary disbursement.",
    url: "https://www.wflimited.com/payroll-providers-in-mumbai",
    siteName: "Workforce",
    images: [
      {
        url: "https://www.wflimited.com/og-payroll-mumbai.jpg",
        width: 1200,
        height: 630,
        alt: "Payroll Providers in Mumbai – Workforce",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Providers in Mumbai – Guaranteed Compliance | Workforce",
    description:
      "Mumbai’s trusted payroll provider. Automated PF/ESIC/PT Maharashtra/TDS filings, accurate Form 16, and zero-penalty payroll operations.",
    images: ["https://www.wflimited.com/og-payroll-mumbai.jpg"],
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
            url: "https://www.wflimited.com/payroll-providers-in-mumbai",
            logo: "https://www.wflimited.com/logo.png",
            sameAs: [
              "https://www.linkedin.com/company/workforce-limited/",
              "https://twitter.com/workforce_in",
            ],
            description:
              "Workforce provides expert payroll services in Mumbai with automated PF, ESIC, PT Maharashtra compliance, Form 16 accuracy, investment proof verification, and zero-penalty operations.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Bandra Kurla Complex (BKC), Mumbai",
              addressLocality: "Mumbai",
              addressRegion: "Maharashtra",
              postalCode: "400051",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-99459-33333",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"],
            },
            serviceType: "Payroll Providers in Mumbai",
            knowsAbout: [
              "Payroll processing Mumbai",
              "Professional Tax Maharashtra",
              "PF compliance",
              "ESIC compliance",
              "TDS filing",
              "Form 16 generation",
              "salary disbursement",
              "Maharashtra payroll rules",
              "investment proof verification",
            ],
          }),
        }}
      />

      <FadeInWhenVisible>
        <HeroSection data={heroDataPayrollProvidersMumbai} />
      </FadeInWhenVisible>

      <EnterpriseChoose data={enterpriseDataPayrollProviders} />

      <CaseStudyTestimonials data={testimonialsPayrollProviders} />
      <Delivers data={deliversDataPayrollProviders} />

      <ContactWorkforce data={closureSectionPayrollProviders} />
    </>
  );
};

export default Page;
