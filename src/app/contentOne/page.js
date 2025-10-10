import React from "react";
import VisionSection from "@/components/VisionSection";
import Delivers from "@/components/Delivers";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import FadeInWhenVisible from "@/components/FadeEffects";
import HeroSection from "@/components/Hero";
import { contentOnedeliversData, contentOneenterpriseData, contentOneheroData, contentOnevisionData } from "@/utils/data";

const ContentOne = () => {
  return (
    <>
      <FadeInWhenVisible>
        <HeroSection data={contentOneheroData} />
      </FadeInWhenVisible>
      <VisionSection data={contentOnevisionData} />
      <EnterpriseChoose data={contentOneenterpriseData} />
      <Delivers data={contentOnedeliversData} />
    </>
  );
};

export default ContentOne;
