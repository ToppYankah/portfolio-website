import { startStackAnimation } from "@/app/utils/global-animations";
import { useEffect, useRef } from "react";
import Magnetic from "./magnetic";
import TwoToneImage from "./two-tone-image";

const stack = [
  "html.png",
  "javascript.png",
  "react.png",
  "css.png",
  "dart.png",
  "flutter.png",
  "figma.png",
  "illustrator.png",
  "wordpress.png",
];

const StackScrollSection = () => {
  const stackRef = useRef<HTMLDivElement | null>(null);
  const topStackRef = useRef<(HTMLDivElement | null)[]>([]);
  const bottomStackRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = startStackAnimation(stackRef, topStackRef, bottomStackRef);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={stackRef}
      id="stack-scroll-animate"
      className="flex flex-col gap-10"
      style={{
        maxWidth: "100vw",
        overflow: "hidden",
        marginBottom: 50,
        marginTop: 150,
      }}
    >
      {/* <div className="flex">
        {Array(3)
          .fill("")
          .map((_, i) => {
            return (
              <div
                key={`stack-block-${i}`}
                className="flex gap-10"
                style={{ paddingRight: "2.5rem" }}
                ref={(ref) => topStackRef.current.push(ref)}
              >
                {stack.map((item, index) => (
                  <Magnetic>
                    <div
                      className="relative"
                      key={`stack-item-${index}`}
                      style={{ aspectRatio: 1, height: 60 }}
                    >
                      <TwoToneImage
                        srcDir="/images/experience"
                        objectFit="contain"
                        imgName={item}
                        alt={item}
                      />
                    </div>
                  </Magnetic>
                ))}
              </div>
            );
          })}
      </div> */}
      <div className="flex">
        {Array(3)
          .fill("")
          .map((_, i) => {
            const props = {
              key: `stack-block-rev-${i}`,
              className: "flex gap-10",
              style: { paddingRight: "2.5rem" },
              ref: (ref: any) => bottomStackRef.current.push(ref),
            };

            return (
              <div {...props}>
                {stack
                  .map((item, index) => (
                    <Magnetic>
                      <div
                        className="relative"
                        key={`stack-item-rev-${index}`}
                        style={{ aspectRatio: 1, height: 60 }}
                      >
                        <TwoToneImage
                          srcDir="/images/experience"
                          objectFit="contain"
                          imgName={item}
                          alt={item}
                        />
                      </div>
                    </Magnetic>
                  ))
                  .toReversed()}
              </div>
            );
          })
          .toReversed()}
      </div>
    </div>
  );
};

export default StackScrollSection;
