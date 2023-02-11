import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { BigProjectCard } from "./BigProjectCard";

export function ProjectPreview() {
  const [expand, setExpand] = useState(false);
  const projectOverviewRef = useRef<HTMLElement>();

  const isCoarse = useMediaQuery("(pointer: coarse)");

  function onScroll() {
    if (!projectOverviewRef.current) return;

    const rect = projectOverviewRef.current.getBoundingClientRect();
    setExpand(rect.top < 300);
  }

  useEffect(() => {
    if (!isCoarse) return;

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [isCoarse]);

  function goTo(id: string) {
    const element = document.getElementById(id);
    if (!element) return;

    const headerElement = document.getElementById("curriculum-vitae-header");
    const headerOffset = !headerElement ? 12 : headerElement.clientHeight + 12;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = document.documentElement.scrollTop + elementPosition - headerOffset;
    document.documentElement.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }

  return (
    <Box
      ref={projectOverviewRef}
      className={`project-preview ${expand ? "expand" : ""}`}
      display="flex"
      justifyContent="center"
      mt="5vmin"
      mb="5vmin"
    >
      <BigProjectCard index={0} onClick={() => goTo("browser-game-development")}>
        <img src="/images/projects/hega.png" />
      </BigProjectCard>
      <BigProjectCard index={1} onClick={() => goTo("personal-website")}>
        <img src="/images/projects/website.png" />
      </BigProjectCard>
      <BigProjectCard index={2} onClick={() => goTo("github-material-ui")}>
        <img src="/images/projects/mui.png" />
      </BigProjectCard>
      <BigProjectCard index={3} onClick={() => goTo("club-homepage")}>
        <img src="/images/projects/club.png" />
      </BigProjectCard>
    </Box>
  );
}
