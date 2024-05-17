import { useEffect, useRef } from "react";
import SectionLayout from "@/app/layouts/section-layout";
import SectionTitle from "@/global_components/section-title";
import sampleExpertise, { Expertise } from "./expertise-sample";
import NavLink from "@/global_components/nav-link";
import { startExperienceAnimation } from "./expertise-animations";

export default () => {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const experiencesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const animation = startExperienceAnimation(triggerRef, experiencesRef);

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <SectionLayout
      className="min-h-screen my-[200px] mt-[100px]"
      id="expertise-section"
    >
      <div className="h-full flex px-[40px]">
        <div className="flex flex-1 h-full"></div>
        <div className="flex-[1.5]">
          <div className="overflow-hidden mb-10">
            <p className="text-sm">Professional Experience</p>
          </div>
          <div className="flex items-end justify-between">
            <SectionTitle text={["Area of", "Expertise"]} />
            <div className="flex">
              <NavLink href="#" className="font-bold">
                Download Resume ⬇
              </NavLink>
            </div>
          </div>
          <div
            ref={triggerRef}
            className="flex flex-col mt-[80px] min-h-full items-stretch"
          >
            {sampleExpertise.map((expertise, i) => (
              <div className="overflow-hidden">
                <div ref={(ref) => experiencesRef.current.push(ref)}>
                  <ExpertiseRow key={`expertise-${i}`} expertise={expertise} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

const ExpertiseRow = ({ expertise }: { expertise: Expertise }) => {
  return (
    <div className="flex items-center gap-10 py-6 text-sm">
      <h3>{expertise.name}</h3>
      <div
        className="flex-1 border-b border-dotted border-inverted"
        style={{ opacity: 0.3 }}
      />
      <p>{expertise.level} Level</p>
      <p>{expertise.years} years</p>
    </div>
  );
};
