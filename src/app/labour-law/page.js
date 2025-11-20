import FadeInWhenVisible from "@/components/FadeEffects";
import {
  closureSectionLabour,
  enterpriseDataLabour,
  heroDataLabour,
  testimonialsLabour,
} from "@/utils/data";
import HeroSection from "@/components/Hero";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import CaseStudyTestimonials from "@/components/Testimonial";
import ContactWorkforce from "@/components/ContactWorkforce";
import Script from "next/script";

export const metadata = {
  title: "Labour Law Advisory & Regulatory Intelligence – Workforce",
  description:
    "Workforce provides a full-stack labour law infrastructure for Indian enterprises—regulatory surveillance, establishment compliance, POSH governance, industrial relations, CLRA execution, and litigation defense. We build operational architecture where violations become structurally impossible.",
  alternates: { canonical: "https://www.wflimited.com/labour-law" },
  openGraph: {
    title: "Labour Law Advisory & Regulatory Intelligence – Workforce",
    description:
      "Real-time labour law compliance infrastructure: state gazette monitoring, Shops & Establishments, Factories Act, CLRA, POSH, industrial relations, dispute management, and litigation defense—engineered for zero violations.",
    url: "https://www.wflimited.com/labour-law",
    siteName: "Workforce",
    images: [
      {
        url: "https://www.wflimited.com/og-labour.jpg",
        width: 1200,
        height: 630,
        alt: "Labour Law Advisory & Regulatory Intelligence – Workforce",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Labour Law Advisory & Regulatory Intelligence – Workforce",
    description:
      "Regulatory armor for Indian enterprises: labour law monitoring, compliance automation, POSH, Standing Orders, union negotiation, CLRA governance, and litigation support.",
    images: ["https://www.wflimited.com/og-labour.jpg"],
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
            url: "https://www.wflimited.com/labour-law",
            logo: "https://www.wflimited.com/logo.png",
            sameAs: [
              "https://www.linkedin.com/company/workforce-limited/",
              "https://twitter.com/workforce_in",
            ],
            description:
              "Workforce delivers India's most advanced labour law advisory and regulatory intelligence system—covering regulatory surveillance, Shops & Establishments, Factories Act, CLRA, POSH, Standing Orders, industrial relations, and litigation support.",
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
            serviceType: "Labour Law Advisory & Regulatory Intelligence",
            knowsAbout: [
              "Labour law compliance",
              "Regulatory surveillance",
              "Shops & Establishments Act",
              "Factories Act compliance",
              "CLRA compliance",
              "POSH Act governance",
              "Standing Orders certification",
              "Industrial relations",
              "Trade union negotiation",
              "Retrenchment compliance",
              "Litigation support",
              "Inspector defense",
              "Compliance automation",
            ],
          }),
        }}
      />

      <FadeInWhenVisible>
        <HeroSection data={heroDataLabour} />
      </FadeInWhenVisible>

      <EnterpriseChoose data={enterpriseDataLabour} />

      <CaseStudyTestimonials data={testimonialsLabour} />
      {/* <Delivers data={deliversDataPayroll} /> */}

      <ContactWorkforce data={closureSectionLabour} />
      {/* <FAQAccordion /> */}
    </>
  );
};

export default Page;
