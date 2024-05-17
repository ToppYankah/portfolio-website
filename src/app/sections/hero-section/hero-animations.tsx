import gsap from "gsap/gsap-core";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import CSSRulePlugin from "gsap/dist/CSSRulePlugin";
import { MutableRefObject } from "react";

export const slideIn = () => {
  return gsap.fromTo(
    "#hero :is(:is(.nav-link, .active-nav-link) > :first-child, #short-bio p, #location-rights p)",
    { yPercent: 100, duration: 1, ease: "sine.inOut" },
    { yPercent: 0, duration: 1, ease: "sine.inOut", stagger: 0.25 }
  );
};

export const activateNavLink = () => {
  gsap.registerPlugin(CSSRulePlugin);
  var rule = CSSRulePlugin.getRule(".nav-link.active::before");
  return gsap.to(rule, {
    cssRule: { scaleX: 1 },
    delay: 1,
    ease: "sine.inOut"
  });
};

export const startHeroAnimations = (
  upperRef: MutableRefObject<HTMLHeadingElement | null>,
  middleRef: MutableRefObject<HTMLHeadingElement | null>,
  lowerRef: MutableRefObject<HTMLHeadingElement | null>,
  upperRefContainer: MutableRefObject<HTMLDivElement | null>,
  lowerRefContainer: MutableRefObject<HTMLDivElement | null>,
  leftLineRef: MutableRefObject<HTMLDivElement | null>,
  rightLineRef: MutableRefObject<HTMLDivElement | null>,
  titleContainerRef: MutableRefObject<HTMLDivElement | null>,
  onComplete: () => void
) => {
  gsap.timeline().add(slideIn()).add(activateNavLink());
  gsap
    .timeline({ onComplete: onComplete })
    .add(
      gsap.fromTo(
        [upperRef.current, middleRef.current, lowerRef.current],
        {
          yPercent: 100,
          duration: 2
        },
        {
          delay: 1,
          yPercent: 0,
          stagger: 0.2,
          duration: 1.5,
          ease: "expo.out"
        }
      )
    )
    .add(
      gsap.fromTo(
        upperRefContainer.current,
        {
          xPercent: 32
        },
        {
          duration: 1,
          xPercent: -10,
          ease: "expo.out"
        }
      )
    )
    .add(
      gsap.to(lowerRefContainer.current, {
        xPercent: 35,
        duration: 1,
        ease: "expo.out"
      }),
      "<"
    )
    .add(
      gsap.fromTo(
        [leftLineRef.current, rightLineRef.current],
        {
          scaleX: 0
        },
        {
          scaleX: 1,
          duration: 1,
          ease: "expo.out"
        }
      ),
      "<"
    )
    .add(
      gsap.fromTo(
        "#scroll-indicator .wrapper",
        { yPercent: -100 },
        {
          yPercent: 0,
          duration: 1,
          onComplete: () => {
            titleScrollAnimate(
              titleContainerRef,
              upperRefContainer,
              lowerRefContainer,
              leftLineRef,
              rightLineRef
            );
            bioScrollAnimate();
            sectionFadeAnimate();
          }
        }
      ),
      "<"
    );
};

const sectionFadeAnimate = () =>
  gsap
    .timeline({
      scrollTrigger: {
        scrub: true,
        trigger: "#hero",
        start: "80% 40%",
        end: "bottom top"
      }
    })
    .add(
      gsap.fromTo(
        "#hero",
        {
          opacity: 1
        },
        {
          opacity: 0
        }
      )
    );

const titleScrollAnimate = (
  titleContainerRef: MutableRefObject<HTMLDivElement | null>,
  upperRefContainer: MutableRefObject<HTMLDivElement | null>,
  lowerRefContainer: MutableRefObject<HTMLDivElement | null>,
  leftLineRef: MutableRefObject<HTMLDivElement | null>,
  rightLineRef: MutableRefObject<HTMLDivElement | null>
) => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: titleContainerRef.current,
      end: "bottom top",
      start: "top 20%",
      scrub: true
    }
  });

  tl.add(gsap.to(upperRefContainer.current, { xPercent: -15 }))
    .add(gsap.to(lowerRefContainer.current, { xPercent: 40 }), "<")
    .add(gsap.to(rightLineRef.current, { scaleX: 1.2 }), "<")
    .add(gsap.to(leftLineRef.current, { scaleX: 1.2 }), "<")
    .add(gsap.to("#location-rights .rights", { y: -20 }), "<")
    .add(gsap.to("#location-rights .location", { x: -20 }), "<");
};

const bioScrollAnimate = () => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#short-bio",
      end: "top center",
      start: "top 90%",
      scrub: true
    }
  });

  tl.add(
    gsap.to(gsap.utils.toArray("#short-bio span"), {
      opacity: 1,
      stagger: 0.2
    }),
    "<"
  );
};
