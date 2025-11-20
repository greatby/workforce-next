import FadeInWhenVisible from "@/components/FadeEffects";
import {
  closureSectionTempstaffing,
  enterpriseDatatempstaffing,
  heroDataTempstaffing,
  testimonialsTempstaffing,
} from "@/utils/data";
import HeroSection from "@/components/Hero";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import CaseStudyTestimonials from "@/components/Testimonial";
import ContactWorkforce from "@/components/ContactWorkforce";
import Script from "next/script";

export const metadata = {
  title: "AI-Native Temp Staffing Infrastructure – Workforce",
  description:
    "Workforce provides an AI-native staffing infrastructure that handles sourcing, onboarding, payroll, compliance, and contractor lifecycle management with zero paperwork and full regulatory automation. Deploy workforces at scale with CLRA-backed compliance, real-time integrations, and AI-driven workforce intelligence.",
  alternates: { canonical: "https://www.wflimited.com/temp-staffing" },
  openGraph: {
    title: "AI-Native Temp Staffing Infrastructure – Workforce",
    description:
      "End-to-end temp staffing powered by AI: sourcing, matching, onboarding, payroll, CLRA compliance, churn prediction, demand forecasting, and workforce intelligence in one platform.",
    url: "https://www.wflimited.com/temp-staffing",
    siteName: "Workforce",
    images: [
      {
        url: "https://www.wflimited.com/og-tempstaffing.jpg",
        width: 1200,
        height: 630,
        alt: "AI-Native Temp Staffing Infrastructure – Workforce",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Native Temp Staffing Infrastructure – Workforce",
    description:
      "Deploy fluid workforces without compliance debt. AI-powered sourcing, onboarding, payroll, lifecycle automation, CLRA governance, and churn prediction.",
    images: ["https://www.wflimited.com/og-tempstaffing.jpg"],
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
            url: "https://www.wflimited.com/temp-staffing",
            logo: "https://www.wflimited.com/logo.png",
            sameAs: [
              "https://www.linkedin.com/company/workforce-limited/",
              "https://twitter.com/workforce_in",
            ],
            description:
              "Workforce is India's AI-native staffing infrastructure. We automate sourcing, onboarding, payroll, compliance, CLRA governance, lifecycle management, and churn prediction for fluid workforce deployment at scale.",
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
            serviceType: "AI-Native Temp Staffing Infrastructure",
            knowsAbout: [
              "AI staffing",
              "CLRA compliance",
              "digital onboarding",
              "contractor payroll",
              "PF & ESIC compliance",
              "workforce analytics",
              "churn prediction",
              "demand forecasting",
              "biometric attendance",
            ],
          }),
        }}
      />

      <FadeInWhenVisible>
        <HeroSection data={heroDataTempstaffing} />
      </FadeInWhenVisible>

      <EnterpriseChoose data={enterpriseDatatempstaffing} />

      <CaseStudyTestimonials data={testimonialsTempstaffing} />
      {/* <Delivers data={deliversData} /> */}

      <ContactWorkforce data={closureSectionTempstaffing} />
      {/* <FAQAccordion /> */}
    </>
  );
};

export default Page;
