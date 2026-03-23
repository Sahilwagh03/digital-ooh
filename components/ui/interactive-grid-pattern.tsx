"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ColoredSquare =
  | { index: number; className: string }
  | { row: number; col: number; className: string };

interface InteractiveGridPatternProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  width?: number;
  height?: number;
  squares?: [number, number]; // [horizontal, vertical] — acts as a minimum/fallback
  className?: string;
  squaresClassName?: string;
  coloredSquares?: ColoredSquare[] | ((visibleCols: number, visibleRows: number) => ColoredSquare[]);
}

export function InteractiveGridPattern({
  width = 40,
  height = 40,
  squares = [24, 24],
  className,
  squaresClassName,
  coloredSquares = [],
  ...props
}: InteractiveGridPatternProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);

  // 📐 Observe real container dimensions
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width: w, height: h } = entry.contentRect;
      setContainerSize({ width: w, height: h });
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 🔢 Derive visible cols/rows from container size — always covers the full viewport
  const horizontal = containerSize.width > 0
    ? Math.ceil(containerSize.width / width) + 1   // +1 to avoid edge gaps
    : squares[0];

  const vertical = containerSize.height > 0
    ? Math.ceil(containerSize.height / height) + 1
    : squares[1];

  // 🎨 Support both static array and dynamic factory function
  const resolvedColoredSquares = useMemo(() => {
    return typeof coloredSquares === "function"
      ? coloredSquares(horizontal, vertical)
      : coloredSquares;
  }, [coloredSquares, horizontal, vertical]);

  // 🗺️ O(1) lookup map
  const coloredMap = useMemo(() => {
    const map = new Map<number, string>();
    resolvedColoredSquares.forEach((item) => {
      if ("index" in item) {
        map.set(item.index, item.className);
      } else {
        map.set(item.row * horizontal + item.col, item.className);
      }
    });
    return map;
  }, [resolvedColoredSquares, horizontal]);

  return (
    <div ref={containerRef} className={cn("absolute inset-0 w-full h-full overflow-hidden", className)} {...props}>
      <svg
        width={width * horizontal}
        height={height * vertical}
        className="absolute inset-0 w-full h-full"
      >
        {Array.from({ length: horizontal * vertical }).map((_, index) => {
          const x = (index % horizontal) * width;
          const y = Math.floor(index / horizontal) * height;
          const customColorClass = coloredMap.get(index);

          return (
            <rect
              key={index}
              x={x}
              y={y}
              width={width}
              height={height}
              className={cn(
                "stroke-gray-400/30 transition-all duration-100 ease-in-out not-[&:hover]:duration-1000",
                squaresClassName,
                customColorClass
                  ? customColorClass
                  : hoveredSquare === index
                    ? "fill-gray-300/30"
                    : "fill-transparent",
              )}
              onMouseEnter={() => setHoveredSquare(index)}
              onMouseLeave={() => setHoveredSquare(null)}
            />
          );
        })}
      </svg>
    </div>
  );
}