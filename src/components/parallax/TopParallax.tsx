import { useTheme } from "@mui/material";
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

export function TopParallax() {
  const theme = useTheme();
  const bubbleCount = 30;

  const createRandomValue = (min: number, max: number) => {
    const rnd = Math.random();
    const range = max - min;
    const value = rnd * range;
    return min + value;
  };

  const createBubbleLayer = (index: number): BannerLayer => {
    const currentIndexValue = (80 / bubbleCount) * index;

    const size = createRandomValue(60, 120);
    const speed = createRandomValue(20, 100);
    const position = Math.random() > 0.5 ? "left" : "right";
    const color =
      Math.random() > 0.5 && currentIndexValue > 10
        ? theme.palette.primary
        : theme.palette.secondary;

    const verticalPosition = createRandomValue(5 + currentIndexValue, 15 + currentIndexValue);
    const horizontalPosition = createRandomValue(5, 30);

    return {
      speed,
      children: (
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
      ),
    };
  };

  const layers: BannerLayer[] = [];
  for (let i = 0; i < bubbleCount; i++) layers.push(createBubbleLayer(i));

  layers.push({
    speed: -50,
    children: (
      <div
        style={{
          background: theme.palette.primary.main,
          height: "1200px",
          transform: "rotate(5deg)",
          width: "150%",
          marginLeft: "-25%",
        }}
      ></div>
    ),
  });

  return (
    <ParallaxBanner
      layers={layers}
      style={{ height: "10000px", position: "absolute", zIndex: -1 }}
    />
  );
}
