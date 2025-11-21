import FadeInWhenVisible from "@/components/FadeEffects";
import {
  closureSectionPayrollProviders,
  deliversDataPayrollProviders,
  enterpriseDataPayrollProviders,
  heroDataPayrollProvidersBhopal,
  testimonialsPayrollProviders,
} from "@/utils/data";
import HeroSection from "@/components/Hero";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import CaseStudyTestimonials from "@/components/Testimonial";
import ContactWorkforce from "@/components/ContactWorkforce";
import Script from "next/script";
import Delivers from "@/components/Delivers";

export const metadata = {
  title: "Payroll Providers in Bhopal – Guaranteed Compliance | Workforce",
  description:
    "Looking for payroll providers in Bhopal? Workforce ensures 100% compliant payroll processing, PF/ESIC/PT MP filings, Form 16 accuracy, investment proof verification, and penalty-free payroll operations.",
  alternates: {
    canonical: "https://www.wflimited.com/payroll-providers-in-bhopal",
  },
  openGraph: {
    title: "Payroll Providers in Bhopal – Guaranteed Compliance | Workforce",
    description:
      "Complete payroll services for Bhopal companies: PF, ESIC, PT MP, TDS, Form 16 accuracy, investment proof validation, and secure salary disbursement.",
    url: "https://www.wflimited.com/payroll-providers-in-bhopal",
    siteName: "Workforce",
    images: [
      {
        url: "https://www.wflimited.com/og-payroll-bhopal.jpg",
        width: 1200,
        height: 630,
        alt: "Payroll Providers in Bhopal – Workforce",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Providers in Bhopal – Guaranteed Compliance | Workforce",
    description:
      "Bhopal’s trusted payroll provider. Automated PF/ESI/PT MP/TDS compliance, accurate Form 16, and zero-penalty payroll operations.",
    images: ["https://www.wflimited.com/og-payroll-bhopal.jpg"],
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
            url: "https://www.wflimited.com/payroll-providers-in-bhopal",
            logo: "https://www.wflimited.com/logo.png",
            sameAs: [
              "https://www.linkedin.com/company/workforce-limited/",
              "https://twitter.com/workforce_in",
            ],
            description:
              "Workforce provides expert payroll services in Bhopal with automated PF, ESIC, PT MP compliance, Form 16 accuracy, investment proof verification, and zero-penalty operations.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "MP Nagar, Zone 1",
              addressLocality: "Bhopal",
              addressRegion: "Madhya Pradesh",
              postalCode: "462011",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-99459-33333",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"],
            },
            serviceType: "Payroll Providers in Bhopal",
            knowsAbout: [
              "Payroll processing Bhopal",
              "Professional Tax Madhya Pradesh",
              "PF compliance",
              "ESIC compliance",
              "TDS filing",
              "Form 16 generation",
              "salary disbursement",
              "MP payroll rules",
              "investment proof verification",
            ],
          }),
        }}
      />

      <FadeInWhenVisible>
        <HeroSection data={heroDataPayrollProvidersBhopal} />
      </FadeInWhenVisible>

      <EnterpriseChoose data={enterpriseDataPayrollProviders} />

      <CaseStudyTestimonials data={testimonialsPayrollProviders} />
      <Delivers data={deliversDataPayrollProviders} />

      <ContactWorkforce data={closureSectionPayrollProviders} />
    </>
  );
};

export default Page;
