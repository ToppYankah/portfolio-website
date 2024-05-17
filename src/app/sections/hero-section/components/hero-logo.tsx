"use client";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default () => {
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useLayoutEffect(() => {
    gsap.fromTo(
      lettersRef.current,
      { yPercent: 100 },
      {
        delay: 2,
        yPercent: 0,
        duration: 1,
        stagger: 0.2,
        ease: "expo.out"
      }
    );
  }, []);

  return (
    <div className="col-start-2 col-end-4 text-center">
      <a href="#" id="logo" className="font-serif font-black text-[1.75em]">
        <div className="overflow-hidden">
          <span
            className="inline-block"
            ref={(ref) => lettersRef.current.push(ref)}
          >
            K
          </span>
          <span
            className="inline-block"
            ref={(ref) => lettersRef.current.push(ref)}
          >
            T
          </span>
          <span
            className="inline-block"
            ref={(ref) => lettersRef.current.push(ref)}
          >
            Y
          </span>
        </div>
      </a>
    </div>
  );
};
