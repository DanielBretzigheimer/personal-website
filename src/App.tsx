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
import "./App.css";
import TimelineOverview from "./components/timeline/TimelineOverview";
import InterestOverview from "./components/interests/InterestOverview";
import Certificates from "./components/certificates/Certificates";
import AppFooter from "./components/footer/AppFooter";

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
      }),
    [prefersDarkMode]
  );

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container className="main-content">
          <ProfileCard />
          <TimelineOverview />
          <Certificates />
          <InterestOverview />
          <AppFooter />
        </Container>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
