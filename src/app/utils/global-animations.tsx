import gsap from "gsap/gsap-core";
import { MutableRefObject, RefObject } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const startStackAnimation = (
  stackRef: MutableRefObject<HTMLDivElement | null>,
  topStackRef: MutableRefObject<(HTMLDivElement | null)[]>,
  bottomStackRef: MutableRefObject<(HTMLDivElement | null)[]>
) => {
  return gsap
    .timeline({
      repeat: -1,
      scrollTrigger: {
        trigger: stackRef.current,
        start: "top bottom",
        end: "bottom top"
      }
    })
    .add(
      gsap.fromTo(
        topStackRef.current,
        { xPercent: 0 },
        { xPercent: -100, duration: 20, ease: "none" }
      )
    )
    .add(
      gsap.fromTo(
        bottomStackRef.current,
        { xPercent: -100 },
        { xPercent: 0, duration: 20, ease: "none" }
      ),
      "<"
    );
};

export const sectionHideAnimation = (sectionID: string) => {
  return ScrollTrigger.create({
    trigger: `#${sectionID}`,
    start: "bottom 70%",
    end: "bottom top",
    scrub: true,
    animation: gsap.fromTo(`#${sectionID}`, { opacity: 1 }, { opacity: 0 })
  });
};

export const animateSectionTitle = (
  titleContainerRef: RefObject<HTMLDivElement>,
  titlesRef: RefObject<(HTMLHeadingElement | null)[]>
) =>
  gsap
    .timeline({
      onStart: () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: titleContainerRef.current,
              start: "top 70%",
              end: "top 65%"
            }
          })
          .add(
            gsap.fromTo(
              titlesRef.current,
              { yPercent: 100 },
              {
                yPercent: 0,
                stagger: 0.25,
                ease: "expo.out",
                duration: 3
              }
            )
          );
      },
      scrollTrigger: {
        trigger: titleContainerRef.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
        once: true
      }
    })
    .add(
      gsap.fromTo(titleContainerRef.current, { yPercent: 20 }, { yPercent: 0 })
    );
