import FadeInWhenVisible from "@/components/FadeEffects";
import Footer from "@/components/Footer";
import WindsurfNav from "@/components/Navbar";
import WindsurfStatsLayout from "@/components/StatsSection";
import VisionSection from "@/components/VisionSection";
import { partnerData, sectionData } from "@/utils/data";
import HeroSection from "@/components/Hero";
import ImageHighlightSlider from "@/components/Slider";
import FeatureCards from "@/components/FeatureCards";
import Enterprise from "@/components/Enterprise";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import Delivers from "@/components/Delivers";

const Page = () => {
  return (
    <>
      <WindsurfNav />
      <FadeInWhenVisible>
        <HeroSection />
      </FadeInWhenVisible>
        <VisionSection />
      {/* <FadeInWhenVisible type="zoom-in" delay={0.1}>
        <ImageHighlightSlider sectionData={sectionData} />
      </FadeInWhenVisible>
      <VisionSection />
      <FadeInWhenVisible type="slide-right" delay={0.2}>
        <FeatureCards />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <ImageHighlightSlider sectionData={partnerData} />
      </FadeInWhenVisible>
      <FadeInWhenVisible type="slide-left" delay={0.3}>
        <WindsurfStatsLayout />
      </FadeInWhenVisible> */}
      {/* <Enterprise /> */}
      <EnterpriseChoose />
      <Delivers />
      <Footer />
    </>
  );
};

export default Page;
