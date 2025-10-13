import BuildingSection from '@/components/BuildingSection'
import ClosingStatementSection from '@/components/ClosingStatementSection'
import FounderSection from '@/components/FounderSection'
import MissionHero from '@/components/HeroAboutUs'
import PrinciplesSection from '@/components/PrinciplesSection'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import SystemVisionSection from '@/components/SystemVisionSecton'
import WhyExistSection from '@/components/WhyExitSection'
import WhyNowSection from '@/components/WhyNowSection'
import WorkWithUsSection from '@/components/WorkWithUsSection'
import React from 'react'

const About = () => {
  return (
   <>
   <MissionHero/>
   <ProblemSection />
   <SolutionSection />
   <BuildingSection />
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
