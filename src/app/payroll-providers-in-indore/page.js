import FadeInWhenVisible from "@/components/FadeEffects";
import {
  closureSectionPayrollProviders,
  deliversDataPayrollProviders,
  enterpriseDataPayrollProviders,
  heroDataPayrollProvidersIndore,
  testimonialsPayrollProviders,
} from "@/utils/data";
import HeroSection from "@/components/Hero";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import CaseStudyTestimonials from "@/components/Testimonial";
import ContactWorkforce from "@/components/ContactWorkforce";
import Script from "next/script";
import Delivers from "@/components/Delivers";

export const metadata = {
  title: "Payroll Providers in Indore – Guaranteed Compliance | Workforce",
  description:
    "Looking for payroll providers in Indore? Workforce ensures 100% compliant payroll processing, PF/ESIC/PT MP filings, TDS accuracy, investment proof verification, and penalty-free payroll operations for Indore companies.",
  alternates: {
    canonical: "https://www.wflimited.com/payroll-providers-in-indore",
  },
  openGraph: {
    title: "Payroll Providers in Indore – Guaranteed Compliance | Workforce",
    description:
      "End-to-end payroll services for Indore companies: PF, ESIC, PT MP, TDS, Form 16, investment proof validation, and accurate salary disbursement.",
    url: "https://www.wflimited.com/payroll-providers-in-indore",
    siteName: "Workforce",
    images: [
      {
        url: "https://www.wflimited.com/og-payroll-indore.jpg",
        width: 1200,
        height: 630,
        alt: "Payroll Providers in Indore – Workforce",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Providers in Indore – Guaranteed Compliance | Workforce",
    description:
      "Indore’s trusted payroll provider. Automated PF/ESI/PT MP/TDS compliance, accurate Form 16, and zero-penalty payroll operations.",
    images: ["https://www.wflimited.com/og-payroll-indore.jpg"],
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
            url: "https://www.wflimited.com/payroll-providers-in-indore",
            logo: "https://www.wflimited.com/logo.png",
            sameAs: [
              "https://www.linkedin.com/company/workforce-limited/",
              "https://twitter.com/workforce_in",
            ],
            description:
              "Workforce provides expert payroll services in Indore with automated PF, ESIC, PT MP compliance, Form 16 accuracy, investment proof verification, and zero-penalty operations.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Vijay Nagar, Ring Road",
              addressLocality: "Indore",
              addressRegion: "Madhya Pradesh",
              postalCode: "452010",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-99459-33333",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"],
            },
            serviceType: "Payroll Providers in Indore",
            knowsAbout: [
              "Payroll processing Indore",
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
        <HeroSection data={heroDataPayrollProvidersIndore} />
      </FadeInWhenVisible>

      <EnterpriseChoose data={enterpriseDataPayrollProviders} />

      <CaseStudyTestimonials data={testimonialsPayrollProviders} />
      <Delivers data={deliversDataPayrollProviders} />

      <ContactWorkforce data={closureSectionPayrollProviders} />
    </>
  );
};

export default Page;
