import React from 'react'
import VisionSection from "@/components/VisionSection";
import Delivers from "@/components/Delivers";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import FadeInWhenVisible from "@/components/FadeEffects";
import HeroSection from "@/components/Hero";
import { contentTwodeliversData, contentTwoenterpriseData, contentTwoheroData, contentTwovisionData } from '@/utils/data';

const ContentTwo = () => {
  return (
   <>
      <FadeInWhenVisible>
        <HeroSection data={contentTwoheroData} />
      </FadeInWhenVisible>
      <VisionSection data={contentTwovisionData} />
      <EnterpriseChoose data={contentTwoenterpriseData} />
      <Delivers data={contentTwodeliversData} />
    </>
  )
}

export default ContentTwo
