import { useTheme } from "@mui/material";
import { ParallaxBanner } from "react-scroll-parallax";

export function ProfileParallax() {
  const theme = useTheme();

  return (
    <ParallaxBanner
      layers={[
        {
          speed: -50,
          children: (
            <div
              style={{
                background: theme.palette.primary.main,
                opacity: 0.3,
                height: "750px",
                transform: "rotate(5deg)",
                width: "120%",
                marginLeft: "-10%",
              }}
            ></div>
          ),
        },
      ]}
      style={{ height: "1000px", position: "absolute", zIndex: -1 }}
    />
  );
}
