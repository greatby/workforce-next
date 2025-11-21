import FadeInWhenVisible from "@/components/FadeEffects";
import {
  closureSectionPayrollProviders,
  deliversDataPayrollProviders,
  enterpriseDataPayrollProviders,
  heroDataPayrollProvidersCoimbatore,
  testimonialsPayrollProviders,
} from "@/utils/data";
import HeroSection from "@/components/Hero";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import CaseStudyTestimonials from "@/components/Testimonial";
import ContactWorkforce from "@/components/ContactWorkforce";
import Script from "next/script";
import Delivers from "@/components/Delivers";

export const metadata = {
  title: "Payroll Providers in Coimbatore – Guaranteed Compliance | Workforce",
  description:
    "Looking for payroll providers in Coimbatore? Workforce ensures 100% compliant payroll processing, PF/ESIC/PT Tamil Nadu filings, TDS accuracy, investment proof verification, and penalty-free operations for Coimbatore companies.",
  alternates: {
    canonical: "https://www.wflimited.com/payroll-providers-in-coimbatore",
  },
  openGraph: {
    title: "Payroll Providers in Coimbatore – Guaranteed Compliance | Workforce",
    description:
      "End-to-end payroll services for Coimbatore companies: PF, ESIC, PT Tamil Nadu, TDS, Form 16, investment proof validation, and accurate salary disbursement.",
    url: "https://www.wflimited.com/payroll-providers-in-coimbatore",
    siteName: "Workforce",
    images: [
      {
        url: "https://www.wflimited.com/og-payroll-coimbatore.jpg",
        width: 1200,
        height: 630,
        alt: "Payroll Providers in Coimbatore – Workforce",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Providers in Coimbatore – Guaranteed Compliance | Workforce",
    description:
      "Coimbatore’s trusted payroll provider. Automated PF/ESI/PT Tamil Nadu/TDS compliance, accurate Form 16, and zero-penalty payroll operations.",
    images: ["https://www.wflimited.com/og-payroll-coimbatore.jpg"],
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
            url: "https://www.wflimited.com/payroll-providers-in-coimbatore",
            logo: "https://www.wflimited.com/logo.png",
            sameAs: [
              "https://www.linkedin.com/company/workforce-limited/",
              "https://twitter.com/workforce_in",
            ],
            description:
              "Workforce provides expert payroll services in Coimbatore with automated PF, ESIC, PT Tamil Nadu compliance, Form 16 accuracy, investment proof verification, and zero-penalty payroll operations.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Avinashi Road, Peelamedu",
              addressLocality: "Coimbatore",
              addressRegion: "Tamil Nadu",
              postalCode: "641004",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-99459-33333",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi", "Tamil"],
            },
            serviceType: "Payroll Providers in Coimbatore",
            knowsAbout: [
              "Payroll processing Coimbatore",
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
        <HeroSection data={heroDataPayrollProvidersCoimbatore} />
      </FadeInWhenVisible>

      <EnterpriseChoose data={enterpriseDataPayrollProviders} />

      <CaseStudyTestimonials data={testimonialsPayrollProviders} />
      <Delivers data={deliversDataPayrollProviders} />

      <ContactWorkforce data={closureSectionPayrollProviders} />
    </>
  );
};

export default Page;
