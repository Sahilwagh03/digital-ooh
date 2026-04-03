import { ColorPicker, useColorState } from "react-beautiful-color";
import { useEffect } from "react";

export function BrandColorPicker({
  onChange,
  value,
}: {
  onChange: (color: string) => void;
  value: string;
}) {
  const [{ colorInput, colorState }, setColor] = useColorState({
    type: "hex",
    value: value || "#000000",
  });

  useEffect(() => {
    onChange(colorState.hex);
  }, [colorState.hex]);

  return (
    <div className="flex w-full items-center justify-center">
      <ColorPicker
        color={colorInput}
        onChange={setColor}
        className="max-h-52 w-full border-fd-border rounded-2xl border bg-white shadow-lg dark:bg-black/200"
      >
        <ColorPicker.Saturation className="max-h-52 flex-1" />
        <div className="flex items-center gap-3 px-5 py-3">
          <div className="flex flex-1 flex-col gap-3">
            <ColorPicker.Hue className="h-4" />
            <ColorPicker.Alpha className="h-4" />
          </div>
        </div>
      </ColorPicker>
    </div>
  );
}