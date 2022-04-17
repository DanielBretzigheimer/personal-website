import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

export function TopParallax() {
  const theme = useTheme();
  const bubbleCount = 30;
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    setHeight(document.body.offsetHeight);
  });

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
    const scale = createRandomValue(0.5, 4);
    const position = Math.random() > 0.5 ? "left" : "right";
    const color =
      Math.random() > 0.5 && currentIndexValue > 10
        ? theme.palette.primary
        : theme.palette.secondary;

    const verticalPosition = createRandomValue(5 + currentIndexValue, 15 + currentIndexValue);
    const horizontalPosition = createRandomValue(5, 30);

    return {
      speed,
      scale: [1, scale, "easeInQuad"],
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
          background:
            theme.palette.mode === "light"
              ? theme.palette.primary.light
              : theme.palette.primary.dark,
          height: "1200px",
          transform: "rotate(5deg)",
          width: "150%",
          marginLeft: "-25%",
        }}
      ></div>
    ),
  });

  return <ParallaxBanner layers={layers} style={{ height, position: "absolute", zIndex: -1 }} />;
}
