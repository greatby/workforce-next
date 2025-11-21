import FadeInWhenVisible from "@/components/FadeEffects";
import {
  closureSectionPayrollProviders,
  deliversDataPayrollProviders,
  enterpriseDataPayrollProviders,
  heroDataPayrollProvidersChennai,
  testimonialsPayrollProviders,
} from "@/utils/data";
import HeroSection from "@/components/Hero";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import CaseStudyTestimonials from "@/components/Testimonial";
import ContactWorkforce from "@/components/ContactWorkforce";
import Script from "next/script";
import Delivers from "@/components/Delivers";

export const metadata = {
  title: "Payroll Providers in Chennai – Guaranteed Compliance | Workforce",
  description:
    "Looking for payroll providers in Chennai? Workforce ensures 100% compliant payroll processing, PF/ESI/PT Tamil Nadu filings, investment proof verification, Form 16 accuracy, and penalty-free operations for Chennai companies.",
  alternates: {
    canonical: "https://www.wflimited.com/payroll-providers-in-chennai",
  },
  openGraph: {
    title: "Payroll Providers in Chennai – Guaranteed Compliance | Workforce",
    description:
      "End-to-end payroll processing for Chennai companies: PF, ESIC, PT Tamil Nadu, TDS, Form 16, investment proof validation, and secure salary disbursement.",
    url: "https://www.wflimited.com/payroll-providers-in-chennai",
    siteName: "Workforce",
    images: [
      {
        url: "https://www.wflimited.com/og-payroll-chennai.jpg",
        width: 1200,
        height: 630,
        alt: "Payroll Providers in Chennai – Workforce",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Providers in Chennai – Guaranteed Compliance | Workforce",
    description:
      "Chennai’s trusted payroll provider. Automated PF/ESI/PT Tamil Nadu/TDS compliance, Form 16 accuracy, and secure salary processing with zero penalties.",
    images: ["https://www.wflimited.com/og-payroll-chennai.jpg"],
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
            url: "https://www.wflimited.com/payroll-providers-in-chennai",
            logo: "https://www.wflimited.com/logo.png",
            sameAs: [
              "https://www.linkedin.com/company/workforce-limited/",
              "https://twitter.com/workforce_in",
            ],
            description:
              "Workforce provides expert payroll services in Chennai with automated PF, ESIC, PT Tamil Nadu compliance, Form 16 accuracy, investment proof verification, and zero-penalty payroll operations.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Tidel Park, Rajiv Gandhi Salai",
              addressLocality: "Chennai",
              addressRegion: "Tamil Nadu",
              postalCode: "600113",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-99459-33333",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi", "Tamil"],
            },
            serviceType: "Payroll Providers in Chennai",
            knowsAbout: [
              "Payroll processing Chennai",
              "Professional Tax Tamil Nadu",
              "PF compliance",
              "ESIC compliance",
              "TDS filing",
              "Form 16 generation",
              "salary disbursement",
              "Tamil Nadu payroll rules",
              "investment proof verification",
            ],
          }),
        }}
      />

      <FadeInWhenVisible>
        <HeroSection data={heroDataPayrollProvidersChennai} />
      </FadeInWhenVisible>

      <EnterpriseChoose data={enterpriseDataPayrollProviders} />

      <CaseStudyTestimonials data={testimonialsPayrollProviders} />
      <Delivers data={deliversDataPayrollProviders} />

      <ContactWorkforce data={closureSectionPayrollProviders} />
    </>
  );
};

export default Page;
