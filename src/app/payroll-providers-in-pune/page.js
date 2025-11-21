import FadeInWhenVisible from "@/components/FadeEffects";
import {
  closureSectionPayrollProviders,
  deliversDataPayrollProviders,
  enterpriseDataPayrollProviders,
  heroDataPayrollProvidersPune,
  testimonialsPayrollProviders,
} from "@/utils/data";
import HeroSection from "@/components/Hero";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import CaseStudyTestimonials from "@/components/Testimonial";
import ContactWorkforce from "@/components/ContactWorkforce";
import Script from "next/script";
import Delivers from "@/components/Delivers";

export const metadata = {
  title: "Payroll Providers in Pune – Guaranteed Compliance | Workforce",
  description:
    "Looking for payroll providers in Pune? Workforce delivers fully compliant payroll processing, PF/ESIC/PT Maharashtra filings, TDS accuracy, Form 16 generation, and zero-penalty payroll operations for Pune-based companies.",
  alternates: {
    canonical: "https://www.wflimited.com/payroll-providers-in-pune",
  },
  openGraph: {
    title: "Payroll Providers in Pune – Guaranteed Compliance | Workforce",
    description:
      "End-to-end payroll services for Pune companies: PF, ESIC, PT Maharashtra, TDS, Form 16, investment proof verification, and secure salary disbursement.",
    url: "https://www.wflimited.com/payroll-providers-in-pune",
    siteName: "Workforce",
    images: [
      {
        url: "https://www.wflimited.com/og-payroll-pune.jpg",
        width: 1200,
        height: 630,
        alt: "Payroll Providers in Pune – Workforce",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Providers in Pune – Guaranteed Compliance | Workforce",
    description:
      "Pune’s trusted payroll provider. Automated PF/ESI/PT Maharashtra/TDS compliance, accurate Form 16, and zero-penalty payroll operations.",
    images: ["https://www.wflimited.com/og-payroll-pune.jpg"],
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
            url: "https://www.wflimited.com/payroll-providers-in-pune",
            logo: "https://www.wflimited.com/logo.png",
            sameAs: [
              "https://www.linkedin.com/company/workforce-limited/",
              "https://twitter.com/workforce_in",
            ],
            description:
              "Workforce provides expert payroll services in Pune with automated PF, ESIC, PT Maharashtra compliance, Form 16 accuracy, investment proof verification, and zero-penalty payroll operations.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Hinjawadi Rajiv Gandhi Infotech Park",
              addressLocality: "Pune",
              addressRegion: "Maharashtra",
              postalCode: "411057",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-99459-33333",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi", "Marathi"],
            },
            serviceType: "Payroll Providers in Pune",
            knowsAbout: [
              "Payroll processing Pune",
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
        <HeroSection data={heroDataPayrollProvidersPune} />
      </FadeInWhenVisible>

      <EnterpriseChoose data={enterpriseDataPayrollProviders} />

      <CaseStudyTestimonials data={testimonialsPayrollProviders} />
      <Delivers data={deliversDataPayrollProviders} />

      <ContactWorkforce data={closureSectionPayrollProviders} />
    </>
  );
};

export default Page;
