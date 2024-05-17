"use client";
import gsap from "gsap";
import React, {
  MutableRefObject,
  ReactElement,
  useContext,
  useEffect,
  useRef,
} from "react";
import { PointerContext } from "./pointer";

const Magnetic = ({
  message,
  children,
  strength = 0.5,
}: {
  children: ReactElement;
  message?: string | null;
  strength?: number;
}) => {
  const { setHoveredLink } = useContext(PointerContext);
  const ref: MutableRefObject<HTMLElement | null> = useRef(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (ref.current == null) return;

    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();

    const xAddition = width / 2;
    const yAddition = height / 2;
    const y = clientY - (top + yAddition);
    const x = clientX - (left + xAddition);

    gsap.to(ref.current, { x: x * strength, y: y * strength });
  };

  const handleMouseLeave = (e: MouseEvent) => {
    setHoveredLink(false, null);
    gsap.to(ref.current, { x: 0, y: 0 });
  };

  const handleMouseEnter = (e: MouseEvent) =>
    setHoveredLink(true, message ?? null);

  useEffect(() => {
    ref.current?.addEventListener("mousemove", handleMouseMove);
    ref.current?.addEventListener("mouseleave", handleMouseLeave);
    ref.current?.addEventListener("mouseenter", handleMouseEnter);
  }, []);

  return React.cloneElement(children, { ref });
};

export default Magnetic;
