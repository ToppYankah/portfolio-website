import SectionTitle from "@/global_components/section-title";
import SectionLayout from "@/app/layouts/section-layout";
import { useEffect, useRef } from "react";
import { startWorksAnimations } from "./works-animations";
import WorkShowcase from "./components/work-showcase";
import sampleWorks from "./works-sample";

export default () => {
  const scrollRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const tween = startWorksAnimations({ scrollRef, triggerRef });
    return () => tween.kill();
  });

  return (
    <SectionLayout shouldFade={false} id="works-section">
      <div
        ref={triggerRef}
        className="w-full h-full grid grid-cols-[0.5fr_1fr_0.5fr] grid-rows-[0.05fr_1fr] pt-[50px]"
      >
        <div className="col-start-1 col-end-4 row-start-1 row-end-2 flex items-end justify-between px-[40px] pb-10">
          <SectionTitle text={["Works", "Showcase"]} />
          {/* <p className="font-sans text-sm w-[30%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            incidunt, fuga illum tenetur assumenda beatae obcaecati possimus
            modi inventore porro debitis suscipit dolore eveniet! Dolores?
          </p> */}
        </div>
        <div className="col-start-1 col-end-4 row-start-2 row-end-3">
          <div
            ref={scrollRef}
            className="horizontal-scroll relative h-full flex px-[40px]"
          >
            <div className="min-w-[25%]" />
            {sampleWorks.map((work, i) => (
              <WorkShowcase key={`work-showcase-${i}`} work={work} />
            ))}
            <div className="min-w-[20%]" />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
