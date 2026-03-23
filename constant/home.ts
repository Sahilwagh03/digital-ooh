type Opacity = "20" | "30" | "40" | "50";
const opacityPattern: Opacity[] = ["20", "40", "30", "50"];

export function generateHighlightSquares(
  visibleCols: number,
  visibleRows: number,
  colStep: number = 4,
  colOffset: number = 2,
): { row: number; col: number; className: string }[] {
  return Array.from({ length: visibleRows }, (_, row) =>
    Array.from({ length: Math.floor(visibleCols / colStep) }, (_, i) => {
      const col = ((row * colOffset) % colStep) + i * colStep;
      const opacity = opacityPattern[(row + i) % opacityPattern.length];
      return {
        row,
        col,
        className: `fill-gray-300/${opacity} dark:fill-neutral-700/${opacity}`,
      };
    })
  ).flat();
}