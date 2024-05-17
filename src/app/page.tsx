"use client";
import AvailableScrollAnimation from "@/global_components/available-scroll-animation";
import EntranceLoader from "@/global_components/entrance-loader";
import FooterSection from "@/global_components/footer-section";
import StackScrollSection from "@/global_components/stack-scroll-animation";
import Lenis from "@studio-freight/lenis";
import { useState } from "react";
import AboutSection from "./sections/about-section/about-section";
import ExpertiseSection from "./sections/expertise-section/expertise-section";
import HeroSection from "./sections/hero-section/hero-section";
import WorksSection from "./sections/works-section/works-section";

const Page: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [introAnimated, setIntroAnimated] = useState(false);

  const startLenis = () => {
    const lenis = new Lenis({ lerp: 0.05 });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  };

  const handleLoadComplete = () => setIsLoading(() => false);

  const handleAnimationComplete = () =>
    setIntroAnimated(() => {
      startLenis();
      return true;
    });

  if (isLoading) return <EntranceLoader onLoadComplete={handleLoadComplete} />;

  return (
    <main className="max-h-screen">
      <HeroSection animationComplete={handleAnimationComplete} />
      {introAnimated && (
        <>
          <AboutSection />
          {/* <StackScrollSection /> */}
          <ExpertiseSection />
          <WorksSection />
          <AvailableScrollAnimation />
          <FooterSection />
        </>
      )}
    </main>
  );
};

export default Page;
