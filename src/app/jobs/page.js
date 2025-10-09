import FadeInWhenVisible from "@/components/FadeEffects";
import HeroJobs from "@/components/HeroJobs";
import OpenPositions from "@/components/OpenPositions";
import PerksAndBenefits from "@/components/PerksAndBenefits";
import AboutHero from "@/components/Vision";
import {
  WhoWeAreLookingFor,
  YourRoleInTransformation,
} from "@/components/WhyJoinUs";
import React from "react";

const Jobs = () => {
  return (
    <>
      <FadeInWhenVisible>
        <HeroJobs />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <AboutHero />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <OpenPositions />
      </FadeInWhenVisible>
      {/* <WhyJoinUs /> */}
      {/* <FadeInWhenVisible>
        <YourRoleInTransformation />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <WhoWeAreLookingFor/>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <PerksAndBenefits/>
      </FadeInWhenVisible> */}
    </>
  );
};

export default Jobs;
