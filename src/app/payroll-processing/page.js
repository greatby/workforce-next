import FadeInWhenVisible from "@/components/FadeEffects";
import {
  closureSectionPayroll,
  deliversDataPayroll,
  enterpriseDataPayroll,
  heroDataPayroll,
  testimonialsPayroll,
} from "@/utils/data";
import HeroSection from "@/components/Hero";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import CaseStudyTestimonials from "@/components/Testimonial";
import ContactWorkforce from "@/components/ContactWorkforce";
import Script from "next/script";
import Delivers from "@/components/Delivers";

export const metadata = {
  title: "Payroll Processing Engine – Workforce",
  description:
    "Workforce provides a real-time payroll processing engine built for India’s regulatory landscape. Automated PF, ESIC, TDS, PT, LWF, investment proof verification, anomaly detection, multi-state compliance, and end-to-end statutory filings.",
  alternates: { canonical: "https://www.wflimited.com/payroll-processing" },
  openGraph: {
    title: "Payroll Processing Engine – Workforce",
    description:
      "A fully compliant payroll infrastructure designed for India. Real-time statutory validation, error-proof calculations, automated filings, and an AI layer that audits payroll before money moves.",
    url: "https://www.wflimited.com/payroll-processing",
    siteName: "Workforce",
    images: [
      {
        url: "https://www.wflimited.com/og-payroll.jpg",
        width: 1200,
        height: 630,
        alt: "Payroll Processing Engine – Workforce",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Processing Engine – Workforce",
    description:
      "India’s first verification-led payroll engine. Pre-payroll intelligence, statutory computation, anomaly detection, disbursement automation, and complete PF/ESIC/TDS compliance.",
    images: ["https://www.wflimited.com/og-payroll.jpg"],
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
            url: "https://www.wflimited.com/payroll-processing",
            logo: "https://www.wflimited.com/logo.png",
            sameAs: [
              "https://www.linkedin.com/company/workforce-limited/",
              "https://twitter.com/workforce_in",
            ],
            description:
              "Workforce provides India's most advanced payroll processing engine with real-time statutory validation, multi-state compliance, anomaly detection, automated filings, and investment proof verification.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Church street, Bengaluru",
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
            serviceType: "Payroll Processing Engine",
            knowsAbout: [
              "Payroll processing",
              "Indian payroll compliance",
              "PF ECR filing",
              "ESIC filing",
              "TDS payroll computation",
              "Professional Tax compliance",
              "Labour Welfare Fund",
              "investment proof verification",
              "payroll anomaly detection",
              "salary disbursement automation",
              "Form 16 automation",
              "statutory filings",
            ],
          }),
        }}
      />

      <FadeInWhenVisible>
        <HeroSection data={heroDataPayroll} />
      </FadeInWhenVisible>

      <EnterpriseChoose data={enterpriseDataPayroll} />

      <CaseStudyTestimonials data={testimonialsPayroll} />
      <Delivers data={deliversDataPayroll} />

      <ContactWorkforce data={closureSectionPayroll} />
      {/* <FAQAccordion /> */}
    </>
  );
};

export default Page;
