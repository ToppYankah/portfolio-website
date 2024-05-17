"use client";
import gsap from "gsap";
import {
  LegacyRef,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const CustomPointer = () => {
  const { hoveredLink, hoverText } = useContext(PointerContext);
  const pointerRef: LegacyRef<HTMLDivElement> = useRef(null);

  const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
    if (pointerRef.current == null) return;

    const { width, height } = pointerRef.current.getBoundingClientRect();

    const halfWidth = window.innerWidth * 0.5,
      halfHeight = window.innerHeight * 0.5,
      halfPHeight = height * 0.5,
      halfPWidth = width * 0.5;

    gsap.to(pointerRef.current, {
      ease: "none",
      duration: -1,
      x: clientX - (halfWidth + halfPWidth),
      y: clientY - (halfHeight + halfPHeight),
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={pointerRef}
      id="pointer-overlay"
      className={`${hoveredLink ? "scale" : ""}`}
    >
      {hoverText ? (
        <p
          className="block text-black mix-blend-difference"
          style={{ margin: 10 }}
        >
          {hoverText}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default CustomPointer;

type HoverState = {
  hoveredLink: boolean;
  hoverText: string | null;
  setHoveredLink: (hovered: boolean, hoverText: string | null) => void;
};

export const PointerContext = createContext<HoverState>({
  hoverText: "",
  hoveredLink: false,
  setHoveredLink: (_, __) => {},
});

export const PointerContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [hoveredLink, setHovered] = useState<boolean>(false);
  const [hoverText, setHoverText] = useState<string | null>(null);

  const setHoveredLink = (hovered: boolean, hoverText: string | null) => {
    setHovered(() => hovered);
    setHoverText(() => hoverText ?? null);
  };

  return (
    <PointerContext.Provider value={{ hoveredLink, hoverText, setHoveredLink }}>
      {children}
    </PointerContext.Provider>
  );
};
