import FadeInWhenVisible from "@/components/FadeEffects";
import {
  closureSectionPayrollProviders,
  deliversDataPayrollProviders,
  enterpriseDataPayrollProviders,
  heroDataPayrollProvidersAhmedabad,
  testimonialsPayrollProviders,
} from "@/utils/data";
import HeroSection from "@/components/Hero";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import CaseStudyTestimonials from "@/components/Testimonial";
import ContactWorkforce from "@/components/ContactWorkforce";
import Script from "next/script";
import Delivers from "@/components/Delivers";

export const metadata = {
  title: "Payroll Providers in Ahmedabad – Guaranteed Compliance | Workforce",
  description:
    "Looking for payroll providers in Ahmedabad? Workforce delivers fully compliant payroll processing, PF/ESIC/PT Gujarat filings, Form 16 accuracy, investment proof validation, and zero-penalty payroll operations.",
  alternates: {
    canonical: "https://www.wflimited.com/payroll-providers-in-ahmedabad",
  },
  openGraph: {
    title: "Payroll Providers in Ahmedabad – Guaranteed Compliance | Workforce",
    description:
      "End-to-end payroll processing for Ahmedabad companies: PF, ESIC, PT Gujarat, TDS, Form 16, investment proof verification, and secure salary disbursement.",
    url: "https://www.wflimited.com/payroll-providers-in-ahmedabad",
    siteName: "Workforce",
    images: [
      {
        url: "https://www.wflimited.com/og-payroll-ahmedabad.jpg",
        width: 1200,
        height: 630,
        alt: "Payroll Providers in Ahmedabad – Workforce",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Providers in Ahmedabad – Guaranteed Compliance | Workforce",
    description:
      "Ahmedabad’s trusted payroll provider. Automated PF/ESI/PT Gujarat/TDS compliance, accurate Form 16, and zero-penalty payroll operations.",
    images: ["https://www.wflimited.com/og-payroll-ahmedabad.jpg"],
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
            url: "https://www.wflimited.com/payroll-providers-in-ahmedabad",
            logo: "https://www.wflimited.com/logo.png",
            sameAs: [
              "https://www.linkedin.com/company/workforce-limited/",
              "https://twitter.com/workforce_in",
            ],
            description:
              "Workforce provides expert payroll services in Ahmedabad with automated PF, ESIC, PT Gujarat compliance, Form 16 accuracy, investment proof verification, and zero-penalty payroll operations.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "SG Highway, Prahlad Nagar",
              addressLocality: "Ahmedabad",
              addressRegion: "Gujarat",
              postalCode: "380015",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-99459-33333",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi", "Gujarati"],
            },
            serviceType: "Payroll Providers in Ahmedabad",
            knowsAbout: [
              "Payroll processing Ahmedabad",
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
        <HeroSection data={heroDataPayrollProvidersAhmedabad} />
      </FadeInWhenVisible>

      <EnterpriseChoose data={enterpriseDataPayrollProviders} />

      <CaseStudyTestimonials data={testimonialsPayrollProviders} />
      <Delivers data={deliversDataPayrollProviders} />

      <ContactWorkforce data={closureSectionPayrollProviders} />
    </>
  );
};

export default Page;
