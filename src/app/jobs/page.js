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

export const metadata = {
  title: "Jobs |  Workforce - Where Law Becomes Code. Where Compliance Becomes Infrastructure.",
  description:
    "Where Law Becomes Code. Where Compliance Becomes Infrastructure.",
  alternates: {
    canonical: "https://workforce.com/aboutUs",
  },
  openGraph: {
    title: "Jobs |  Workforce - Where Law Becomes Code. Where Compliance Becomes Infrastructure.",
    description:
      "Where Law Becomes Code. Where Compliance Becomes Infrastructure.",
    url: "https://workforce.com/aboutUs",
    siteName: "Workforce",
    type: "website",
  },
};

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
