// components/Grid.tsx
"use client";
import React, { useState, useEffect } from "react";

const GridSquare = ({ active = false }: { active: boolean }) => {
  return (
    <div className={`w-full h-full ${active ? "active" : ""} grid-tile`} />
  );
};

export default () => {
  const [activeGrid, setActiveGrid] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const gridSize = 10;
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const gridHeight = windowHeight / gridSize;
      const gridWidth = windowWidth / gridSize;

      const mouseY = event.clientY;
      const mouseX = event.clientX;

      const row = Math.floor(mouseY / gridHeight);
      const col = Math.floor(mouseX / gridWidth);

      const gridIndex = row * gridSize + col;

      setActiveGrid(gridIndex);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="response-grid">
      {Array.from({ length: 100 }).map((_, index) => (
        <GridSquare key={index} active={activeGrid == index} />
      ))}
    </div>
  );
};
