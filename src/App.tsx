import {
  Container,
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import React, { useMemo } from "react";
import HeaderBar from "./components/HeaderBar";
import ProfileCard from "./components/profile/ProfileCard";
import "./App.scss";
import Timeline from "./components/timeline/Timeline";
import Skills from "./components/skills/Skills";
import InterestOverview from "./components/interests/InterestOverview";
import ProjectOverview from "./components/projects/ProjectOverview";

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: blue,
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderBar />
      <Container className="main-content">
        <ProfileCard />
        <Skills />
        <Timeline />
        <ProjectOverview />
        <InterestOverview />
      </Container>
    </ThemeProvider>
  );
}
