import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

const AvailableScrollAnimation = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      repeat: -1,
      scrollTrigger: {
        trigger: "#available-scroll-animate",
        start: "top bottom",
        end: "bottom top"
      }
    });

    tl.add(
      gsap.fromTo(
        refs.current,
        { xPercent: 0 },
        { xPercent: -100, duration: 10, ease: "none" }
      )
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      className="my-80 pt-[100px]"
      id="available-scroll-animate"
      style={{ maxWidth: "100vw", overflow: "hidden", margin: "100px 0" }}
    >
      <div className="flex">
        {Array(4)
          .fill(0)
          .map((_) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "3rem",
                paddingRight: "3rem"
              }}
              ref={(ref) => refs.current.push(ref)}
            >
              <h1
                className="font-serif"
                style={{ fontSize: "5.5rem", whiteSpace: "nowrap" }}
              >
                AVAILABLE FOR WORK
              </h1>
              <div className="line-capped relative"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AvailableScrollAnimation;
