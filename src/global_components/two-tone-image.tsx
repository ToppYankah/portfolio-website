import Image from "next/image";
import { ForwardRefRenderFunction, forwardRef } from "react";

interface ComponentProps {
  fill?: boolean;
  srcDir: string;
  imgName: string;
  objectFit?: "cover" | "contain";
}

const TwoToneImage: ForwardRefRenderFunction<
  HTMLImageElement[] | null,
  ComponentProps & React.ImgHTMLAttributes<HTMLImageElement>
> = (
  {
    srcDir,
    imgName,
    fill = true,
    onMouseEnter,
    onMouseLeave,
    objectFit = "cover",
    ...props
  },
  ref,
) => {
  // Function to push elements to the ref array
  const addToRef = (element: HTMLImageElement) => {
    console.log({ ref });
    if (ref && "current" in ref) {
      ref?.current?.push(element);
    }
  };

  return (
    <>
      <Image
        fill={fill}
        ref={addToRef}
        alt={props.alt ?? ""}
        objectFit={objectFit}
        className="img-with-filter"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        src={`${srcDir}/gray/${imgName}`}
      />
      <Image
        fill={fill}
        ref={addToRef}
        alt={props.alt ?? ""}
        objectFit={objectFit}
        src={`${srcDir}/${imgName}`}
        className="img-no-filter pointer-events-none"
      />
    </>
  );
};

export default forwardRef(TwoToneImage);
