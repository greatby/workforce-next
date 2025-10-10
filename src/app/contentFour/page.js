import VisionSection from "@/components/VisionSection";
import Delivers from "@/components/Delivers";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import FadeInWhenVisible from "@/components/FadeEffects";
import HeroSection from "@/components/Hero"
import React from "react";
import { contentFourdeliversData, contentFourenterpriseData, contentFourheroData, contentFourvisionData } from "@/utils/data";

const ContentFour = () => {
  return (
    <>
      <FadeInWhenVisible>
        <HeroSection data={contentFourheroData} />
      </FadeInWhenVisible>
      <VisionSection data={contentFourvisionData} />
      <EnterpriseChoose data={contentFourenterpriseData} />
      <Delivers data={contentFourdeliversData} />
    </>
  );
};

export default ContentFour;
