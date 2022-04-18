import { useTheme } from "@mui/material";
import { useLayoutEffect, useState } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import { createRandomValue } from "../../utils/createRandomValue";
import { Bubble } from "./Bubble";

export function TopParallax() {
  const theme = useTheme();
  const layerCount = 5;
  const [height, setHeight] = useState<number>();

  useLayoutEffect(() => {
    setTimeout(() => setHeight(window.document.body.offsetHeight), 100);
  }, []);

  const createBubbleLayer = (index: number): BannerLayer => {
    const speed = createRandomValue(20, 100);
    const scale = createRandomValue(0.5, 4);
    const bubbles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return {
      speed,
      scale: [1, scale, "easeInQuad"],
      children: (
        <>
          {bubbles.map((i) => (
            <Bubble index={i} />
          ))}
        </>
      ),
    };
  };

  const layers: BannerLayer[] = [];
  for (let i = 0; i < layerCount; i++) layers.push(createBubbleLayer(i));

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
