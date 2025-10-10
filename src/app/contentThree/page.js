import React from "react";
import VisionSection from "@/components/VisionSection";
import Delivers from "@/components/Delivers";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import FadeInWhenVisible from "@/components/FadeEffects";
import HeroSection from "@/components/Hero";
import { contentThreedeliversData, contentThreeenterpriseData, contentThreeheroData, contentThreevisionData } from "@/utils/data";

const ContentThree = () => {
  return (
    <>
      <FadeInWhenVisible>
        <HeroSection data={contentThreeheroData} />
      </FadeInWhenVisible>
      <VisionSection data={contentThreevisionData} />
      <EnterpriseChoose data={contentThreeenterpriseData} />
      <Delivers data={contentThreedeliversData} />
    </>
  );
};

export default ContentThree;
