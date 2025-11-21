import FadeInWhenVisible from "@/components/FadeEffects";
import {
  closureSectionPayrollProviders,
  deliversDataPayrollProviders,
  enterpriseDataPayrollProviders,
  heroDataPayrollProvidersBangalore,
  testimonialsPayrollProviders,
} from "@/utils/data";
import HeroSection from "@/components/Hero";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import CaseStudyTestimonials from "@/components/Testimonial";
import ContactWorkforce from "@/components/ContactWorkforce";
import Script from "next/script";
import Delivers from "@/components/Delivers";

export const metadata = {
  title: "Payroll Providers in Bangalore – Guaranteed Compliance | Workforce",
  description:
    "Looking for reliable payroll providers in Bangalore? Workforce ensures 100% compliant payroll processing, PF/ESIC/PT filings, investment proof verification, Form 16 accuracy, and zero-penalty payroll operations for Karnataka companies.",
  alternates: {
    canonical: "https://www.wflimited.com/payroll-providers-in-bangalore",
  },
  openGraph: {
    title: "Payroll Providers in Bangalore – Guaranteed Compliance | Workforce",
    description:
      "End-to-end payroll processing for Bangalore companies: PF, ESIC, PT, TDS, Form 16, direct salary disbursement, investment proof validation, and zero-penalty compliance.",
    url: "https://www.wflimited.com/payroll-providers-in-bangalore",
    siteName: "Workforce",
    images: [
      {
        url: "https://www.wflimited.com/og-payroll-bangalore.jpg",
        width: 1200,
        height: 630,
        alt: "Payroll Providers in Bangalore – Workforce",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Providers in Bangalore – Guaranteed Compliance | Workforce",
    description:
      "Trusted payroll provider for Bangalore companies. Automated PF/ESI/PT/TDS filings, zero penalties, accurate Form 16, and secure salary disbursement.",
    images: ["https://www.wflimited.com/og-payroll-bangalore.jpg"],
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
            url: "https://www.wflimited.com/payroll-providers-in-bangalore",
            logo: "https://www.wflimited.com/logo.png",
            sameAs: [
              "https://www.linkedin.com/company/workforce-limited/",
              "https://twitter.com/workforce_in",
            ],
            description:
              "Workforce provides expert payroll services in Bangalore with automated statutory filings, PF/ESIC/PT compliance, TDS accuracy, Form 16 generation, and zero-penalty operations.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Church Street, Bengaluru",
              addressLocality: "Bengaluru",
              addressRegion: "Karnataka",
              postalCode: "560001",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-99459-33333",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"],
            },
            serviceType: "Payroll Providers in Bangalore",
            knowsAbout: [
              "Payroll processing Bangalore",
              "Professional Tax Karnataka",
              "PF compliance",
              "ESIC compliance",
              "TDS filing",
              "Form 16 generation",
              "salary disbursement",
              "Karnataka payroll rules",
              "investment proof verification",
            ],
          }),
        }}
      />

      <FadeInWhenVisible>
        <HeroSection data={heroDataPayrollProvidersBangalore} />
      </FadeInWhenVisible>

      <EnterpriseChoose data={enterpriseDataPayrollProviders} />

      <CaseStudyTestimonials data={testimonialsPayrollProviders} />
      <Delivers data={deliversDataPayrollProviders} />

      <ContactWorkforce data={closureSectionPayrollProviders} />
      {/* <FAQAccordion /> */}
    </>
  );
};

export default Page;
