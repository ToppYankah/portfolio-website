"use client";
import gsap from "gsap/dist/gsap";
import { LegacyRef, useEffect, useRef, useState } from "react";
import Magnetic from "./magnetic";

export default ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const wheelContainerRef = useRef(null);
  const intervalRef = useRef<number | null>(null);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setPercentage((old) => old + 1);
    }, 100);

    return () => clearInterval(intervalRef?.current ?? 0);
  }, []);

  useEffect(() => {
    if (percentage >= 100) {
      clearInterval(intervalRef?.current ?? 0);
      gsap.to(wheelContainerRef.current, {
        delay: 1,
        duration: 1,
        yPercent: 100,
        ease: "power3.inOut",
        onComplete: onLoadComplete
      });
    }
  }, [percentage]);

  const getWheelValue = (index: number): number | null => {
    switch (index) {
      case 0:
        if (percentage > 99) return parseInt(percentage.toString()[0]);
        return 0;
      case 1:
        if (percentage <= 9) return 0;
        if (percentage <= 99) return parseInt(percentage.toString()[0]);
        return parseInt(percentage.toString()[1]);
      default:
        if (percentage <= 9) return percentage;
        if (percentage <= 99) return parseInt(percentage.toString()[1]);
        return parseInt(percentage.toString()[2]);
    }
  };

  return (
    <div id="loader-overlay">
      <div className="loader-overlay__inner">
        <Magnetic>
          <div className="overflow-hidden">
            <div ref={wheelContainerRef} className="loader-overlay__wheel">
              <NumberWheel value={getWheelValue(0)} />
              <NumberWheel value={getWheelValue(1)} />
              <NumberWheel value={getWheelValue(2)} />
              <span>%</span>
            </div>
          </div>
        </Magnetic>
      </div>
    </div>
  );
};

// const ProgressBar = ({ percentage }: { percentage: number }) => {
//   return (
//     <div
//       className={`line-capped h-[2px] relative bg-inverted duration-500`}
//       style={{ width: `${percentage}%` }}
//     />
//   );
// };

type NumberWheelProps = {
  value?: number | null;
};

const NumberWheel = ({ value }: NumberWheelProps) => {
  const height = 16;
  const wheelRef: LegacyRef<HTMLDivElement> = useRef(null);

  useEffect(() => {
    gsap.to(wheelRef.current, { y: -((value ?? 0) * height) });
  }, [value]);

  return (
    <div className="number-wheel">
      <div ref={wheelRef} className="number-wheel__inner">
        {Array.from({ length: 10 }, (_, index) => index).map((i) => (
          <span
            key={`wheel-span-${i}`}
            className={`${value != null ? "" : "opacity-0"}`}
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  );
};
