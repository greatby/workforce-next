import BuildingSection from '@/components/BuildingSection'
import ClosingStatementSection from '@/components/ClosingStatementSection'
import EnterpriseChoose from '@/components/EnterpriseChoose'
import FounderSection from '@/components/FounderSection'
import MissionHero from '@/components/HeroAboutUs'
import PrinciplesSection from '@/components/PrinciplesSection'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import SystemVisionSection from '@/components/SystemVisionSecton'
import WhyExistSection from '@/components/WhyExitSection'
import WhyNowSection from '@/components/WhyNowSection'
import WorkWithUsSection from '@/components/WorkWithUsSection'
import VisionSection from "@/components/VisionSection";
import { buildingData, visionDataAbout } from '@/utils/data'
import Script from 'next/script';
import React from 'react'

export const metadata = {
  title: "About Us | Workforce - The Execution Layer of Law",
  description:
    "Workforce is India’s Employment Law Infrastructure company. We convert regulation into execution—automating registration, filing, inspection, and closure across 36 states. Learn why we exist, our mission, and the founders behind the movement.",
  alternates: {
    canonical: "https://www.wflimited.com/aboutUs",
  },
  openGraph: {
    title: "About Us | Workforce - The Execution Layer of Law",
    description:
      "India operates under 100+ employment acts across 36 states. Every enterprise must comply. Yet compliance itself—the machinery of registration, filing, and closure—remains manual, fragmented, and opaque. Workforce is solving this at scale.",
    url: "https://www.wflimited.com/aboutUs",
    siteName: "Workforce",
    type: "website",
    images: [
      {
        url: "https://www.wflimited.com/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Workforce - The Execution Layer of Law",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Workforce - The Execution Layer of Law",
    description:
      "Workforce Limited builds India’s employment law infrastructure — automating compliance, filings, and closures across 36 states.",
    images: ["https://www.wflimited.com/og-about.jpg"],
  },
};

const About = () => {
  return (
   <>
   <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Workforce Limited",
            description:
              "Workforce Limited builds India’s Employment Law Infrastructure—automating registration, filing, inspection, and closure across 36 states. Learn about our mission, principles, and the team behind the movement.",
            url: "https://www.wflimited.com/aboutUs",
            isPartOf: {
              "@type": "WebSite",
              name: "Workforce Limited",
              url: "https://www.wflimited.com",
            },
            mainEntity: {
              "@type": "Organization",
              name: "Workforce Limited",
              url: "https://www.wflimited.com",
              logo: "https://www.wflimited.com/logo.png",
              foundingDate: "2020",
              founder: {
                "@type": "Person",
                name: "Vishal",
                jobTitle: "Founder & CEO",
                url: "https://www.linkedin.com/in/srinivas-a",
              },
              sameAs: [
                "https://www.linkedin.com/company/workforce-limited/",
                "https://twitter.com/workforce_in",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Church street",
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
            },
          }),
        }}
      />
   <MissionHero/>
   <ProblemSection />
   {/* <VisionSection data={visionDataAbout}/> */}
   <SolutionSection />
   <BuildingSection />
   {/* <EnterpriseChoose data={buildingData}/> */}
   <WhyExistSection />
   <WhyNowSection />
   <FounderSection />
   <PrinciplesSection />
   <SystemVisionSection />
   <WorkWithUsSection />
   <ClosingStatementSection />
   </>
  )
}

export default About
