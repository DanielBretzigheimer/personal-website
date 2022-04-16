import { useTheme } from "@mui/material";
import { ParallaxBanner } from "react-scroll-parallax";

export function TopParallax() {
  const theme = useTheme();

  return (
    <ParallaxBanner
      layers={[
        {
          speed: -50,
          children: (
            <div
              style={{
                background: theme.palette.primary.light,
                opacity: 0.3,
                height: "1000px",
                transform: "rotate(5deg)",
                width: "120%",
                marginLeft: "-10%",
              }}
            ></div>
          ),
        },
      ]}
      style={{ height: "2000px", position: "absolute", zIndex: -1 }}
    />
  );
}
