"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Ripple = { id: number; row: number; col: number };

export const BackgroundRippleEffect = ({
  rows = 8,
  cols = 27,
  cellSize = 56,
  rippleColor = "sky-400",
  autoPlayInterval = 1800, // ms between each auto ripple
  interactive = true,
}: {
  rows?: number;
  cols?: number;
  cellSize?: number;
  rippleColor?: string;
  autoPlayInterval?: number;
  interactive?: boolean;
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleIdRef = useRef(0);

  // max time any cell could still be animating
  const maxAnimDuration = useMemo(() => {
    const maxDist = Math.hypot(rows, cols);
    return Math.ceil(maxDist * 55 + 200 + maxDist * 80) + 600;
  }, [rows, cols]);

  const addRipple = useCallback(
    (row: number, col: number) => {
      const id = ++rippleIdRef.current;
      setRipples((prev) => [...prev, { id, row, col }]);
      // Clean up this ripple once all cells have finished animating
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, maxAnimDuration);
    },
    [maxAnimDuration],
  );

  // Auto-play: fire a ripple at a random cell on each interval tick
  useEffect(() => {
    const timer = setInterval(() => {
      const row = Math.floor(Math.random() * rows);
      const col = Math.floor(Math.random() * cols);
      addRipple(row, col);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [rows, cols, autoPlayInterval, addRipple]);

  // Each ripple gets its OWN @keyframes name so CSS runs them truly in parallel
  const keyframeStyles = ripples
    .map(
      (r) => `
      @keyframes cell-ripple-${r.id} {
        0%   { background-color: var(--cell-fill-color); }
        40%  { background-color: var(--color-${rippleColor}); }
        100% { background-color: var(--cell-fill-color); }
      }`,
    )
    .join("\n");

  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full",
        "[--cell-border-color:var(--color-neutral-300)] [--cell-fill-color:var(--color-neutral-100)] [--cell-shadow-color:var(--color-neutral-500)]",
        "dark:[--cell-border-color:var(--color-neutral-700)] dark:[--cell-fill-color:var(--color-neutral-900)] dark:[--cell-shadow-color:var(--color-neutral-800)]",
      )}
    >
      <style>{keyframeStyles}</style>

      <div className="relative h-auto w-auto overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-2 h-full w-full overflow-hidden" />
        <DivGrid
          className="mask-radial-from-20% mask-radial-at-top opacity-600"
          rows={rows}
          cols={cols}
          cellSize={cellSize}
          borderColor="var(--cell-border-color)"
          fillColor="var(--cell-fill-color)"
          ripples={ripples}
          onCellClick={interactive ? addRipple : undefined}
          interactive={interactive}
        />
      </div>
    </div>
  );
};

// ─── DivGrid ─────────────────────────────────────────────────────────────────

type DivGridProps = {
  className?: string;
  rows: number;
  cols: number;
  cellSize: number;
  borderColor: string;
  fillColor: string;
  ripples: Ripple[];
  onCellClick?: (row: number, col: number) => void;
  interactive?: boolean;
};

type CellStyle = React.CSSProperties & Record<string, string | number>;

const DivGrid = ({
  className,
  rows = 7,
  cols = 30,
  cellSize = 56,
  borderColor = "#3f3f46",
  fillColor = "var(--cell-fill-color)",
  ripples = [],
  onCellClick,
  interactive = true,
}: DivGridProps) => {
  const cells = useMemo(
    () => Array.from({ length: rows * cols }, (_, idx) => idx),
    [rows, cols],
  );

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    width: cols * cellSize,
    height: rows * cellSize,
    marginInline: "auto",
  };

  return (
    <div className={cn("relative z-3", className)} style={gridStyle}>
      {cells.map((idx) => {
        const rowIdx = Math.floor(idx / cols);
        const colIdx = idx % cols;

        // Build one `animation` value combining ALL active ripples in parallel.
        // Each ripple has a unique keyframe name → CSS runs them simultaneously.
        const animationParts = ripples.map((r) => {
          const dist = Math.hypot(r.row - rowIdx, r.col - colIdx);
          const delay = Math.max(0, dist * 55);
          const duration = 200 + dist * 80;
          return `cell-ripple-${r.id} ${duration}ms ${delay}ms ease-out forwards`;
        });

        const style: CellStyle =
          animationParts.length > 0
            ? { animation: animationParts.join(", ") }
            : {};

        return (
          <div
            key={idx}
            className={cn(
              "cell relative border-[0.5px] opacity-40 transition-opacity duration-150 will-change-transform hover:opacity-80 dark:shadow-[0px_0px_40px_1px_var(--cell-shadow-color)_inset]",
              !interactive && "pointer-events-none",
            )}
            style={{
              backgroundColor: fillColor,
              borderColor,
              ...style,
            }}
            onClick={interactive ? () => onCellClick?.(rowIdx, colIdx) : undefined}
          />
        );
      })}
    </div>
  );
};