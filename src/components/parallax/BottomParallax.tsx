import { useTheme } from "@mui/material";
import { ParallaxBanner } from "react-scroll-parallax";

export function BottomParallax() {
  const theme = useTheme();

  return (
    <ParallaxBanner
      layers={[
        {
          speed: -50,
          children: (
            <div
              style={{
                background:
                  theme.palette.mode === "light"
                    ? theme.palette.secondary.light
                    : theme.palette.secondary.dark,
                opacity: 0.3,
                height: "600px",
                transform: "rotate(5deg)",
                width: "150%",
                marginLeft: "-25%",
                bottom: 0,
                position: "absolute",
              }}
            ></div>
          ),
        },
      ]}
      style={{ height: "1000px", marginTop: "-1000px", position: "absolute", zIndex: -1 }}
    />
  );
}
