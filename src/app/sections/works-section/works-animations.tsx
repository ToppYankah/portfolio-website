import gsap from "gsap/gsap-core";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { MutableRefObject, RefObject } from "react";

type AnimationProps = {
  triggerRef: RefObject<HTMLDivElement>;
  scrollRef: RefObject<HTMLDivElement>;
};

export const startWorksAnimations = ({
  triggerRef,
  scrollRef
}: AnimationProps) => {
  gsap.registerPlugin(ScrollTrigger);

  const getScrollWidth = () => {
    if (scrollRef.current == null) return window.innerWidth;

    const scrollWidth = scrollRef.current.scrollWidth;
    return -(scrollWidth - window.innerWidth);
  };

  const tween = gsap.to(scrollRef.current, {
    x: getScrollWidth,
    ease: "none",
    duration: 3
  });

  return ScrollTrigger.create({
    animation: tween,
    trigger: triggerRef.current,
    start: "top top",
    end: () => `+=${getScrollWidth() * -1}`,
    scrub: 1,
    pin: true,
    // onUpdate: (self) => {
    //   let proxy = { skew: 0 },
    //     skewSetter = gsap.quickSetter("#works-section img", "skewX", "deg"), // fast
    //     clamp = gsap.utils.clamp(-15, 15); // don't let the skew go beyond 20 degrees.

    //   let skew = clamp(self.getVelocity() / -400);

    //   // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    //   if (Math.abs(skew) > Math.abs(proxy.skew)) {
    //     proxy.skew = skew;
    //     gsap.to(proxy, {
    //       skew: 0,
    //       duration: 0.8,
    //       ease: "power3",
    //       overwrite: true,
    //       onUpdate: () => skewSetter(proxy.skew)
    //     });
    //   }

    //   // make the right edge "stick" to the scroll bar. force3D: true improves performance
    //   gsap.set("#works-section img", {
    //     transformOrigin: "top left",
    //     force3D: true
    //   });
    // },
    invalidateOnRefresh: true
  });
};

type MouseEventProps = {
  triggerRef: MutableRefObject<HTMLDivElement | null>;
  paragraphRefs: MutableRefObject<(HTMLParagraphElement | null)[]>;
  titleCharsRef: MutableRefObject<(HTMLParagraphElement | null)[]>;
};

export const mouseEnterAnimation = ({
  triggerRef,
  titleCharsRef,
  paragraphRefs
}: MouseEventProps) => {
  gsap.to(gsap.utils.toArray(triggerRef.current), {
    scale: 1,
    duration: 0.2,
    ease: "power3.out"
  });

  gsap.fromTo(
    gsap.utils.toArray(titleCharsRef.current),
    {
      display: "block",
      yPercent: 105
    },
    {
      yPercent: 0,
      duration: 0.5,
      stagger: 0.02,
      ease: "power3.out"
    }
  );

  gsap.fromTo(
    paragraphRefs.current,
    {
      display: "block",
      yPercent: 100
    },
    { yPercent: 0, duration: 1, ease: "power3.out", delay: 0.1 }
  );
};

export const mouseLeaveAnimation = ({
  triggerRef,
  titleCharsRef,
  paragraphRefs
}: MouseEventProps) => {
  gsap.to(gsap.utils.toArray(triggerRef.current), {
    scale: 0.95,
    duration: 0.2,
    ease: "power3.out"
  });

  gsap.to(gsap.utils.toArray(titleCharsRef.current), {
    yPercent: -120,
    stagger: 0.02,
    duration: 0.5,
    ease: "power3.out"
  });

  gsap.to(paragraphRefs.current, {
    yPercent: -110,
    duration: 0.5,
    ease: "power3.out"
  });
};
