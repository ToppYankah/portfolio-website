import { animateSectionTitle } from "@/app/utils/global-animations";
import { useEffect, useRef } from "react";

const SectionTitle = ({
  text,
  serif = true
}: {
  text: string[];
  serif?: boolean;
}) => {
  const titleWrapperRef = useRef<HTMLDivElement>(null);
  const titlesRef = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const animation = animateSectionTitle(titleWrapperRef, titlesRef);

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div ref={titleWrapperRef} data-section-title>
      {text.map((t, i) => (
        <div key={`title-text-key-${i}`} className="overflow-hidden">
          <h3
            ref={(ref) => titlesRef.current.push(ref)}
            className={`leading-tight ${serif ? "font-serif" : "font-bold"}`}
          >
            {t}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default SectionTitle;
