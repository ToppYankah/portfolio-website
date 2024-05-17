import Image from "next/image";
import { useRef } from "react";
import { Work } from "../works-sample";
import Magnetic from "@/global_components/magnetic";
import { mouseEnterAnimation, mouseLeaveAnimation } from "../works-animations";
import TwoToneImage from "@/global_components/two-tone-image";

const WorkShowcase = ({ work }: { work: Work }) => {
  const titleCharsRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  return (
      <div
        ref={triggerRef}
        className="wrapper min-w-[50vw] h-full place-items-start relative pt-10 flex justify-start"
      >
        <Magnetic message={"View Work ↗"} strength={0.1}>
          <div
            className="w-[60%] h-[90%] relative"
            style={{ cursor: "pointer" }}
          >
            {(() => {
              const srcDirSplit = work.imageSrc.split("/");
              const imageName = srcDirSplit.pop();
              const srcDir = srcDirSplit.join("/");
              return (
                <TwoToneImage
                  srcDir={srcDir}
                  imgName={imageName ?? ""}
                  alt={`Image of Work: ${work.title}`}
                  onMouseLeave={(_) =>
                    mouseLeaveAnimation({
                      triggerRef,
                      titleCharsRef,
                      paragraphRefs
                    })
                  }
                  onMouseEnter={(_) =>
                    mouseEnterAnimation({
                      triggerRef,
                      titleCharsRef,
                      paragraphRefs
                    })
                  }
                />
              );
            })()}

            <div className="absolute right-[105%] whitespace-nowrap overflow-hidden">
              <p
                ref={(ref) => paragraphRefs.current.push(ref)}
                className="text-sm hidden"
              >
                [ {work.date} ]
              </p>
            </div>
            <div className="absolute left-[105%] top-0 whitespace-nowrap">
              {work.tags.map((tag, i) => (
                <div key={`work-tag-${i}`} className="overflow-hidden">
                  <p
                    ref={(ref) => paragraphRefs.current.push(ref)}
                    className="text-sm hidden"
                  >
                    #{tag}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Magnetic>
        <div className="absolute bottom-[20%] right-[15%] w-[70%] flex justify-end pointer-events-none">
          {work.title.split("").map((char: string, i: number) =>
            char.trim() == "" ? (
              <div className="w-3" />
            ) : (
              <div className="overflow-hidden">
                <p
                  ref={(ref) => titleCharsRef.current.push(ref)}
                  className="font-serif text-5xl hidden work-title"
                  // style={{
                  //   mixBlendMode: "difference"
                  // }}
                >
                  {char}
                </p>
              </div>
            )
          )}
        </div>
      </div>
  );
};

export default WorkShowcase;
