import gsap from "gsap";
import { MutableRefObject } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const startExperienceAnimation = (
  targetRef: MutableRefObject<HTMLDivElement | null>,
  experiencesRef: MutableRefObject<(HTMLDivElement | null)[]>
) => {
  return gsap.fromTo(
    gsap.utils.toArray(experiencesRef.current),
    { yPercent: 100 },
    {
      yPercent: 0,
      stagger: 0.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: targetRef.current,
        start: "top 90%",
        end: "top 30%",
        scrub: true
      }
    }
  );
};
