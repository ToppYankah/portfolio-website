import { HTMLAttributes, ReactNode, useEffect } from "react";
import { sectionHideAnimation } from "../utils/global-animations";

const SectionLayout = ({
  id,
  children,
  minContent,
  shouldFade = true,
  ...attr
}: {
  id: string;
  shouldFade?: boolean;
  minContent?: boolean;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>) => {
  useEffect(() => {
    let tween: any | null;
    if (shouldFade) tween = sectionHideAnimation(id);

    return () => {
      tween?.kill();
    };
  }, []);

  return (
    <section id={id} className={`section-wrapper ${minContent ? "min" : ""}`}>
      <div {...attr} className={`section-wrapper__inner ${attr.className}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
