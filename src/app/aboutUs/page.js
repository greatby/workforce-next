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
import React from 'react'

export const metadata = {
  title: "About Us | Workforce - The Execution Layer of Law",
  description:
    "India operates under 100+ employment acts across 36 states. Every enterprise must comply. Yet compliance itself—the machinery of registration, filing, and closure—remains manual, fragmented, and opaque.",
  alternates: {
    canonical: "https://workforce.com/aboutUs",
  },
  openGraph: {
    title: "About Us | Workforce - The Execution Layer of Law",
    description:
      "India operates under 100+ employment acts across 36 states. Every enterprise must comply. Yet compliance itself—the machinery of registration, filing, and closure—remains manual, fragmented, and opaque.",
    url: "https://workforce.com/aboutUs",
    siteName: "Workforce",
    type: "website",
  },
};

const About = () => {
  return (
   <>
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
