import { Box, Fab, Slide } from "@mui/material";
import { ChevronUp } from "mdi-material-ui";
import { useEffect, useState } from "react";

export function GoUpButton() {
  const [visible, setVisible] = useState(true);

  function scrollTop() {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    setVisible(false);
  }

  function onScroll() {
    setVisible(document.documentElement.scrollTop ? true : false);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box position="fixed" bottom={0} right={0} p={2}>
      <Slide direction="up" in={visible}>
        <Fab onClick={scrollTop} color="secondary">
          <ChevronUp />
        </Fab>
      </Slide>
    </Box>
  );
}
