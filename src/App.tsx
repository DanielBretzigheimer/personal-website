import {
  Container,
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import React, { useMemo } from "react";
import ProfileCard from "./components/profile/ProfileCard";
import "./App.scss";
import TimelineOverview from "./components/timeline/Timeline";
import Skills from "./components/skills/Skills";
import InterestOverview from "./components/interests/InterestOverview";
import Certificates from "./components/certificates/Certificates";

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
      <Container className="main-content">
        <ProfileCard />
        <Certificates />
        <Skills />
        <TimelineOverview />
        <InterestOverview />
      </Container>
    </ThemeProvider>
  );
}
