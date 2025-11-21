import FadeInWhenVisible from "@/components/FadeEffects";
import {
  closureSectionPayrollProviders,
  deliversDataPayrollProviders,
  enterpriseDataPayrollProviders,
  heroDataPayrollProvidersSurat,
  testimonialsPayrollProviders,
} from "@/utils/data";
import HeroSection from "@/components/Hero";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import CaseStudyTestimonials from "@/components/Testimonial";
import ContactWorkforce from "@/components/ContactWorkforce";
import Script from "next/script";
import Delivers from "@/components/Delivers";

export const metadata = {
  title: "Payroll Providers in Surat – Guaranteed Compliance | Workforce",
  description:
    "Looking for payroll providers in Surat? Workforce delivers 100% compliant payroll processing, PF/ESIC/PT Gujarat filings, Form 16 accuracy, investment proof verification, and penalty-free payroll operations.",
  alternates: {
    canonical: "https://www.wflimited.com/payroll-providers-in-surat",
  },
  openGraph: {
    title: "Payroll Providers in Surat – Guaranteed Compliance | Workforce",
    description:
      "End-to-end payroll services for Surat companies: PF, ESIC, PT Gujarat, TDS, Form 16, investment proof verification, and secure salary disbursement.",
    url: "https://www.wflimited.com/payroll-providers-in-surat",
    siteName: "Workforce",
    images: [
      {
        url: "https://www.wflimited.com/og-payroll-surat.jpg",
        width: 1200,
        height: 630,
        alt: "Payroll Providers in Surat – Workforce",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Providers in Surat – Guaranteed Compliance | Workforce",
    description:
      "Surat’s trusted payroll provider. Automated PF/ESI/PT Gujarat/TDS compliance, accurate Form 16, and zero-penalty payroll operations.",
    images: ["https://www.wflimited.com/og-payroll-surat.jpg"],
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
            url: "https://www.wflimited.com/payroll-providers-in-surat",
            logo: "https://www.wflimited.com/logo.png",
            sameAs: [
              "https://www.linkedin.com/company/workforce-limited/",
              "https://twitter.com/workforce_in",
            ],
            description:
              "Workforce provides expert payroll services in Surat with automated PF, ESIC, PT Gujarat compliance, Form 16 accuracy, investment proof verification, and zero-penalty payroll operations.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Ring Road, Textile Market Area",
              addressLocality: "Surat",
              addressRegion: "Gujarat",
              postalCode: "395002",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-99459-33333",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi", "Gujarati"],
            },
            serviceType: "Payroll Providers in Surat",
            knowsAbout: [
              "Payroll processing Surat",
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
        <HeroSection data={heroDataPayrollProvidersSurat} />
      </FadeInWhenVisible>

      <EnterpriseChoose data={enterpriseDataPayrollProviders} />

      <CaseStudyTestimonials data={testimonialsPayrollProviders} />
      <Delivers data={deliversDataPayrollProviders} />

      <ContactWorkforce data={closureSectionPayrollProviders} />
    </>
  );
};

export default Page;
