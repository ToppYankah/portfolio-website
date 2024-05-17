import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function () {
  return (
    <div className="col-start-2 col-end-4 row-start-3 row-end-4 flex items-end justify-center">
      <div id="scroll-indicator" className="overflow-hidden">
        <div className="wrapper flex items-center gap-2">
          <p className="text-sm">Scroll</p>
          <AnimatedArrow />
          <p className="text-sm">Down</p>
        </div>
      </div>
    </div>
  );
}

const AnimatedArrow = () => {
  const arrowsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const tween = gsap.fromTo(
      arrowsRef.current,
      { yPercent: 0 },
      { yPercent: 100, repeat: -1, duration: 0.5, ease: "none" }
    );

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div className="max-h-[18px] overflow-hidden flex items-end">
      <div className="flex flex-col">
        {Array(3)
          .fill("")
          .map((_, i) => (
            <span
              key={`arrow-${i}`}
              ref={(ref) => arrowsRef.current.push(ref)}
              className="block w-3 h-3 border-b-2 border-r-2 border-inverted rotate-45"
            ></span>
          ))}
      </div>
    </div>
  );
};
