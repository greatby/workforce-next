import FadeInWhenVisible from "@/components/FadeEffects";
import {
  closureSectionPayrollProviders,
  deliversDataPayrollProviders,
  enterpriseDataPayrollProviders,
  heroDataPayrollProvidersKanpur,
  testimonialsPayrollProviders,
} from "@/utils/data";
import HeroSection from "@/components/Hero";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import CaseStudyTestimonials from "@/components/Testimonial";
import ContactWorkforce from "@/components/ContactWorkforce";
import Script from "next/script";
import Delivers from "@/components/Delivers";

export const metadata = {
  title: "Payroll Providers in Kanpur – Guaranteed Compliance | Workforce",
  description:
    "Looking for payroll providers in Kanpur? Workforce ensures 100% compliant payroll processing, PF/ESIC/TDS filings, Form 16 accuracy, investment proof verification, and penalty-free operations for Kanpur companies.",
  alternates: {
    canonical: "https://www.wflimited.com/payroll-providers-in-kanpur",
  },
  openGraph: {
    title: "Payroll Providers in Kanpur – Guaranteed Compliance | Workforce",
    description:
      "End-to-end payroll services for Kanpur companies: PF, ESIC, TDS, Form 16, investment proof validation, and accurate salary disbursement.",
    url: "https://www.wflimited.com/payroll-providers-in-kanpur",
    siteName: "Workforce",
    images: [
      {
        url: "https://www.wflimited.com/og-payroll-kanpur.jpg",
        width: 1200,
        height: 630,
        alt: "Payroll Providers in Kanpur – Workforce",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Providers in Kanpur – Guaranteed Compliance | Workforce",
    description:
      "Kanpur’s trusted payroll provider. Automated PF/ESI/TDS compliance, accurate Form 16, and zero-penalty payroll operations.",
    images: ["https://www.wflimited.com/og-payroll-kanpur.jpg"],
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
            url: "https://www.wflimited.com/payroll-providers-in-kanpur",
            logo: "https://www.wflimited.com/logo.png",
            sameAs: [
              "https://www.linkedin.com/company/workforce-limited/",
              "https://twitter.com/workforce_in",
            ],
            description:
              "Workforce provides expert payroll services in Kanpur with automated PF, ESIC, TDS compliance, Form 16 accuracy, investment proof verification, and zero-penalty operations.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Mall Road, Civil Lines",
              addressLocality: "Kanpur",
              addressRegion: "Uttar Pradesh",
              postalCode: "208001",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-99459-33333",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"],
            },
            serviceType: "Payroll Providers in Kanpur",
            knowsAbout: [
              "Payroll processing Kanpur",
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
        <HeroSection data={heroDataPayrollProvidersKanpur} />
      </FadeInWhenVisible>

      <EnterpriseChoose data={enterpriseDataPayrollProviders} />

      <CaseStudyTestimonials data={testimonialsPayrollProviders} />
      <Delivers data={deliversDataPayrollProviders} />

      <ContactWorkforce data={closureSectionPayrollProviders} />
    </>
  );
};

export default Page;
