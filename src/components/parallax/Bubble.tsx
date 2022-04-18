import { useTheme } from "@mui/material";
import { createRandomValue } from "../../utils/createRandomValue";

type BubbleProps = {
  index: number;
};

export function Bubble(props: BubbleProps) {
  const theme = useTheme();

  const size = createRandomValue(60, 120);
  const position = Math.random() > 0.5 ? "left" : "right";
  const color = Math.random() > 0.5 ? theme.palette.primary : theme.palette.secondary;

  const verticalPosition = createRandomValue(5, 100);
  const horizontalPosition = createRandomValue(5, 30);

  return (
    <div
      style={{
        background: `radial-gradient(circle, ${color.light} 0%, ${color.dark} 100%)`,
        borderRadius: "50%",
        position: "absolute",
        width: size,
        height: size,
        left: position === "left" ? `${horizontalPosition}%` : undefined,
        right: position === "right" ? `${horizontalPosition}%` : undefined,
        top: `${verticalPosition}%`,
      }}
    ></div>
  );
}
