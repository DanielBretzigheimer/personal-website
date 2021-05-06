import {
  Container,
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core";
import { blue, pink } from "@material-ui/core/colors";
import React, { useMemo } from "react";
import ProfileCard from "./components/profile/ProfileCard";
import "./App.scss";
import TimelineOverview from "./components/timeline/TimelineOverview";
import InterestOverview from "./components/interests/InterestOverview";
import Certificates from "./components/certificates/Certificates";
import LanguageSwitcher from "./components/LanguageSwitcher";
import AppFooter from "./components/footer/AppFooter";

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: prefersDarkMode ? { main: blue[200] } : { main: blue[500] },
          secondary: prefersDarkMode ? { main: pink[200] } : { main: pink[500] },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className="main-content">
        <ProfileCard />
        <TimelineOverview />
        <Certificates />
        <InterestOverview />
        <AppFooter />
      </Container>
      <LanguageSwitcher />
    </ThemeProvider>
  );
}
