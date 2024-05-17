import { MutableRefObject, useEffect, useRef } from "react";
import Magnetic from "@/global_components/magnetic";
import SectionTitle from "@/global_components/section-title";
import SectionLayout from "@/app/layouts/section-layout";
import TwoToneImage from "@/global_components/two-tone-image";
import {
  animateStoryTextChars,
  animateStoryTextPosition,
  animateProfilePhotoScaleAndPosition,
} from "./about-animations";

const bio =
  "In 2019, I kicked off my software journey as a web developer. Expanding my horizons, I ventured into mobile development in 2021, adding depth to my skill set. For two fruitful years, I thrived as a freelance developer, tackling diverse projects that fine-tuned my expertise.\n\nIn 2023, I joined Zomujo, a health-focused company, where I not only contributed as a developer but also led a team of developers. This experience provided insights into teamwork and project management, marking a significant chapter in my evolving career. My journey reflects a continuous pursuit of knowledge, from the early days of web development to the present, where I navigate both web and mobile realms.";

export default () => {
  const spanCharsRef: MutableRefObject<(HTMLSpanElement | null)[]> = useRef([]);
  const imageWrapperRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const storyDivRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const paragraphRef: MutableRefObject<HTMLParagraphElement | null> =
    useRef(null);
  const imagesRef: MutableRefObject<HTMLImageElement[]> = useRef([]);

  useEffect(() => {
    animateStoryTextChars(paragraphRef, spanCharsRef);
    animateStoryTextPosition(storyDivRef, paragraphRef);
    animateProfilePhotoScaleAndPosition(imageWrapperRef, imagesRef);
  }, []);

  return (
    <SectionLayout
      id="about-section"
      className="my-[100px] grid grid-cols-[0.8fr_1fr_2.5fr_2.5fr] grid-rows-[1fr_1.3fr_3fr] px-[40px]"
    >
      <div className="label row-start-2 row-end-3">
        <p className="inline-block font-sans text-sm">About</p>
      </div>
      <div className="title row-start-2 row-end-3">
        <SectionTitle text={["Story", "About the", "Journey"]} />
      </div>
      <div
        ref={storyDivRef}
        className="story col-start-3 row-start-3 row-end-4 whitespace-pre-line pr-20 text-sm leading-6"
      >
        <p ref={paragraphRef}>
          {bio.split("").map((char, index) => (
            <span
              ref={(ref) => spanCharsRef.current.push(ref)}
              key={`story-char-key-${index}`}
            >
              {char}
            </span>
          ))}
        </p>
      </div>
      <div className="profile relative col-start-4 col-end-5 row-start-2 row-end-5">
        <Magnetic strength={0.1}>
          <div
            ref={imageWrapperRef}
            className="wrapper h-full w-full -translate-y-[5%] overflow-hidden"
          >
            <TwoToneImage
              ref={imagesRef}
              srcDir="/images/photos"
              alt="Picture of myself"
              imgName="profile-photo.jpg"
            />
          </div>
        </Magnetic>
      </div>
    </SectionLayout>
  );
};
