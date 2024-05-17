import gsap from "gsap/gsap-core";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { MutableRefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export const animateStoryTextChars = (
  parent: MutableRefObject<HTMLParagraphElement | null>,
  chars: MutableRefObject<(HTMLSpanElement | null)[]>,
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: parent.current,
      start: "top 90%",
      end: "top 60%",
      scrub: true,
    },
  });

  // gsap.utils.toArray("#about-section .story span")
  tl.add(
    gsap.fromTo(
      chars.current,
      { visibility: "hidden" },
      {
        visibility: "visible",
        stagger: 0.2,
      },
    ),
  );
};

export const animateStoryTextPosition = (
  parent: MutableRefObject<HTMLDivElement | null>,
  child: MutableRefObject<HTMLParagraphElement | null>,
) =>
  gsap
    .timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "top bottom",
        end: "top 30",
        scrub: true,
      },
    })
    .add(
      gsap.fromTo(
        child.current,
        { yPercent: 50 },
        { yPercent: 0, duration: 3 },
      ),
    );

export const animateProfilePhotoScaleAndPosition = (
  parent: MutableRefObject<HTMLDivElement | null>,
  child: MutableRefObject<HTMLImageElement[]>,
) =>
  gsap
    .timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    })
    .add(gsap.fromTo(child.current, { scale: 1.3 }, { scale: 1 }))
    .add(gsap.fromTo(parent.current, { yPercent: -5 }, { yPercent: 5 }), "<");
