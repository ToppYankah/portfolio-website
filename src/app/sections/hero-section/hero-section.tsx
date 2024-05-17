"use client";
import HeroNav from "./components/hero-nav";
import HeroLogo from "./components/hero-logo";
import HeroContact from "./components/hero-contact";
import HeroTitle from "./components/hero-title";
import HeroBio from "./components/hero-bio";
import HeroLocation from "./components/hero-location";
import SectionLayout from "@/app/layouts/section-layout";
import HeroScrollIndicator from "./components/hero-scroll-indicator";

export default ({ animationComplete }: { animationComplete: () => void }) => {
  return (
    <SectionLayout
      id="hero"
      className="max-h-screen grid grid-cols-4 grid-rows-[1fr_2fr_1fr] gap-[20px] px-[40px] py-[20px]"
    >
      <HeroNav />
      <HeroLogo />
      <HeroContact />
      <HeroTitle onAnimationComplete={animationComplete} />
      <HeroBio />
      <HeroScrollIndicator />
      <HeroLocation />
    </SectionLayout>
  );
};
