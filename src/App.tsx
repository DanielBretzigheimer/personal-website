import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  StyledEngineProvider,
  useMediaQuery,
} from "@mui/material";
import { blue, pink } from "@mui/material/colors";
import { useMemo } from "react";
import ProfileCard from "./components/profile/ProfileCard";
import TimelineOverview from "./components/timeline/TimelineOverview";
import InterestOverview from "./components/interests/InterestOverview";
import Certificates from "./components/certificates/Certificates";
import AppFooter from "./components/footer/AppFooter";
import { TopParallax } from "./components/parallax/TopParallax";
import { ParallaxProvider } from "react-scroll-parallax";
import { BottomParallax } from "./components/parallax/BottomParallax";
import ProjectOverview from "./components/projects/ProjectOverview";

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createTheme({
        palette: prefersDarkMode
          ? {
              mode: "dark",
              primary: { main: blue[200] },
              secondary: { main: pink[200] },
            }
          : {
              mode: "light",
              background: { default: "#f5f5f5" },
              primary: { main: blue[500] },
              secondary: { main: pink[500] },
            },
        shape: {
          borderRadius: 25,
        },
      }),
    [prefersDarkMode]
  );

  return (
    <StyledEngineProvider injectFirst>
      <ParallaxProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <TopParallax />
          <Container sx={{ padding: 1 }}>
            <ProfileCard />
            <ProjectOverview />
            <TimelineOverview />
            <Certificates />
            <InterestOverview />
            <AppFooter />
          </Container>
          <BottomParallax />
        </ThemeProvider>
      </ParallaxProvider>
    </StyledEngineProvider>
  );
}
