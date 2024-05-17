import { LegacyRef, MutableRefObject, useLayoutEffect, useRef } from "react";
import { startHeroAnimations } from "../hero-animations";

export default ({
  onAnimationComplete
}: {
  onAnimationComplete: () => void;
}) => {
  const upperRef: LegacyRef<HTMLHeadingElement> = useRef(null);
  const lowerRef: LegacyRef<HTMLHeadingElement> = useRef(null);
  const middleRef: LegacyRef<HTMLHeadingElement> = useRef(null);

  // containers
  const upperRefContainer: LegacyRef<HTMLDivElement> = useRef(null);
  const lowerRefContainer: LegacyRef<HTMLDivElement> = useRef(null);
  const titleContainerRef: LegacyRef<HTMLDivElement> = useRef(null);

  // Line Refs
  const leftLineRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const rightLineRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useLayoutEffect(() => {
    startHeroAnimations(
      upperRef,
      middleRef,
      lowerRef,
      upperRefContainer,
      lowerRefContainer,
      leftLineRef,
      rightLineRef,
      titleContainerRef,
      onAnimationComplete
    );
  }, []);

  return (
    <div
      id="hero-title"
      ref={titleContainerRef}
      className="col-start-2 col-end-4 row-start-2 row-end-3"
    >
      <div className="relative">
        <div
          ref={rightLineRef}
          className="absolute right-[5px] top-1/2 h-[2px] w-[38%] bg-inverted line-capped origin-right scale-x-0"
        />
        <div ref={upperRefContainer} className="overflow-hidden">
          <h1 ref={upperRef} className="translate-x-0">
            Sculpting
          </h1>
        </div>
      </div>
      <div className="overflow-hidden">
        <h1 ref={middleRef} className="">
          Digital Dreams
        </h1>
      </div>
      <div className="relative">
        <div
          ref={leftLineRef}
          className="absolute left-[10px] top-1/2 h-[2px] w-[30%] bg-inverted origin-left scale-x-0"
        />
        <div ref={lowerRefContainer} className="overflow-hidden">
          <h1 ref={lowerRef} className="translate-x-0">
            into Reality
          </h1>
        </div>
      </div>
    </div>
  );
};
